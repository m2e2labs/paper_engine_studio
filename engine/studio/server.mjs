/* ==========================================================================
   studio/server.mjs  -  the production workflow, with a face
   --------------------------------------------------------------------------
   A small local web app over the same commands you would type. It adds no
   second way to build a book: every button spawns a tool from engine/tools/,
   and the log shows you which one.

       node engine/studio/server.mjs            http://localhost:4173
       node engine/studio/server.mjs --port 8080

   No dependencies beyond Node. It listens on 127.0.0.1 only, serves nothing
   outside books/ and engine/, and writes nowhere outside books/<slug>/.
   ========================================================================== */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import {
  ROOT, BOOKS, SLUG_RE, STATUSES, listBooks, bookDir, loadBook, loadWorkflow, saveJson,
  statusOf, setStatus, reviewSummary, replacePage, addPage, blankPage,
} from '../tools/lib/book.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(HERE, 'public');
const pi = process.argv.indexOf('--port');
const PORT = Number(pi === -1 ? process.env.PORT || 4173 : process.argv[pi + 1]);

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.pdf': 'application/pdf', '.epub': 'application/epub+zip', '.txt': 'text/plain; charset=utf-8',
};

/* ------------------------------------------------------------------ plumbing */
const send = (res, code, body, type = 'application/json; charset=utf-8') => {
  res.writeHead(code, { 'Content-Type': type, 'Cache-Control': 'no-store' });
  res.end(type.startsWith('application/json') ? JSON.stringify(body) : body);
};
const fail = (res, code, message) => send(res, code, { error: message });

const readBody = (req) => new Promise((resolve, reject) => {
  let size = 0; const chunks = [];
  req.on('data', (c) => { size += c.length; if (size > 5e6) { reject(new Error('Body too large.')); req.destroy(); } else chunks.push(c); });
  req.on('end', () => { try { resolve(chunks.length ? JSON.parse(Buffer.concat(chunks).toString('utf8')) : {}); } catch { reject(new Error('Body is not valid JSON.')); } });
  req.on('error', reject);
});

const mtime = (f) => { try { return fs.statSync(f).mtimeMs; } catch { return 0; } };
const readJson = (f) => { try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch { return null; } };
const studioDir = (dir) => path.join(dir, '.studio');

/* ------------------------------------------------------------------ live events */
const clients = new Set();
const broadcast = (event, data) => {
  const msg = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
  for (const c of clients) c.write(msg);
};

/* ------------------------------------------------------------------ jobs
   One at a time: every step launches a browser, and two builds of one book
   would race on book.html. */
let job = null;
const tool = (name) => path.join('engine', 'tools', name);

function stepsFor(task, slug, opt = {}) {
  const dir = `books/${slug}`;
  const sdir = `${dir}/.studio`;
  const build = { name: 'Build', args: [tool('build-book.mjs'), dir] };
  const pre = { name: 'Preflight', args: [tool('preflight.mjs'), dir, '--json', `${sdir}/preflight.json`], mayFail: true };
  const shots = { name: 'Proofs', args: [tool('shot.mjs'), `${dir}/book.html`, `${sdir}/shots`], before: () => clearShots(slug) };
  if (task === 'build') return [build];
  if (task === 'preflight') return [build, pre];
  if (task === 'proof') return [build, pre, shots];
  if (task === 'release') {
    const args = [tool('release.mjs'), dir];
    const known = Object.keys(loadBook(bookDir(slug)).json.editions || {});
    const eds = (opt.editions || ['full']).filter((e) => e === 'full' || known.includes(e));
    args.push('--editions', (eds.length ? eds : ['full']).join(','));
    const bleed = Number(opt.bleed || 0);
    if (bleed > 0 && bleed <= 10) args.push('--bleed', String(bleed));
    if (opt.epub) args.push('--epub');
    if (opt.proofs) args.push('--proofs');
    if (opt.strict) args.push('--strict');
    if (opt.force) args.push('--force');
    return [{ name: 'Release', args }];
  }
  return null;
}

function clearShots(slug) {
  const d = path.join(studioDir(bookDir(slug)), 'shots');
  fs.mkdirSync(d, { recursive: true });
  for (const f of fs.readdirSync(d)) if (/^page\d+\.png$/.test(f)) fs.unlinkSync(path.join(d, f));
}

async function runJob(task, slug, opt) {
  const steps = stepsFor(task, slug, opt);
  job = { id: Date.now().toString(36), task, slug, started: Date.now() };
  broadcast('job', { ...job, state: 'running' });
  fs.mkdirSync(studioDir(bookDir(slug)), { recursive: true });
  let ok = true;
  for (const step of steps) {
    broadcast('log', { line: `\n$ node ${step.args.join(' ')}`, kind: 'cmd' });
    if (step.before) step.before();
    const code = await new Promise((resolve) => {
      const child = spawn(process.execPath, step.args, { cwd: ROOT, env: { ...process.env, FORCE_COLOR: '0' } });
      const pipe = (kind) => (buf) => buf.toString('utf8').split(/\r?\n/).forEach((line) => line && broadcast('log', { line, kind }));
      child.stdout.on('data', pipe('out'));
      child.stderr.on('data', pipe('err'));
      child.on('close', resolve);
      child.on('error', (e) => { broadcast('log', { line: String(e), kind: 'err' }); resolve(1); });
    });
    if (code !== 0) { ok = false; if (!step.mayFail) break; }
  }
  const done = { ...job, state: ok ? 'done' : 'failed', ms: Date.now() - job.started };
  job = null;
  broadcast('job', done);
}

/* ------------------------------------------------------------------ book state */
function bookSummary(slug) {
  const dir = bookDir(slug);
  try {
    const book = loadBook(dir);
    const pre = readJson(path.join(studioDir(dir), 'preflight.json'));
    return {
      slug, title: book.json.title || slug, author: book.json.author || '',
      pages: book.ordered.length, review: reviewSummary(book, loadWorkflow(dir)),
      preflight: pre ? pre.result : null,
    };
  } catch (e) { return { slug, title: slug, error: e.message }; }
}

function bookState(slug) {
  const dir = bookDir(slug);
  const book = loadBook(dir);
  const wf = loadWorkflow(dir);
  const sdir = studioDir(dir);
  const htmlPath = path.join(dir, 'book.html');
  const built = mtime(htmlPath);
  const sourceAt = Math.max(mtime(book.interiorPath), mtime(book.jsonPath));

  const prePath = path.join(sdir, 'preflight.json');
  const pre = readJson(prePath);
  const preStale = !!pre && mtime(prePath) + 1000 < sourceAt;

  const shotsDir = path.join(sdir, 'shots');
  const shotFiles = fs.existsSync(shotsDir) ? fs.readdirSync(shotsDir).filter((f) => /^page\d+\.png$/.test(f)) : [];
  const shotsAt = shotFiles.length ? mtime(path.join(shotsDir, shotFiles[0])) : 0;

  /* which sheet of the built book is each page? preflight measured that. */
  const sheetOf = new Map();
  for (const s of pre?.sheets || []) if (s.kind === 'page') sheetOf.set(s.title, s);

  const pages = book.pages.map((p) => {
    const s = sheetOf.get(p.title);
    return {
      title: p.title, pill: p.pill, kind: p.kind, words: p.words,
      part: book.partOf.has(p.title) ? book.partOf.get(p.title) : null,
      sheet: s ? s.page : null, overMm: s ? s.overMm : null,
      ...statusOf(p, wf),
    };
  });

  const distDir = path.join(dir, 'dist');
  const releases = !fs.existsSync(distDir) ? [] : fs.readdirSync(distDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => ({ folder: d.name, manifest: readJson(path.join(distDir, d.name, 'manifest.json')) }))
    .filter((r) => r.manifest)
    .sort((a, b) => (a.manifest.released < b.manifest.released ? 1 : -1));

  return {
    slug, json: book.json, pages, orphans: book.orphans, missing: book.missing,
    interior: path.basename(book.interiorPath),
    review: reviewSummary(book, wf),
    build: { exists: built > 0, stale: built > 0 && built + 1000 < sourceAt, at: built },
    preflight: pre, preflightStale: preStale,
    shots: { count: shotFiles.length, stale: shotsAt > 0 && shotsAt + 1000 < sourceAt, v: Math.round(shotsAt) },
    releases, job,
  };
}

function createBook({ slug, title, author }) {
  if (!SLUG_RE.test(slug || '')) throw new Error('Folder name: lowercase letters, digits and hyphens only.');
  const dir = path.join(BOOKS, slug);
  if (fs.existsSync(dir)) throw new Error(`books/${slug} already exists.`);
  const starter = path.join(BOOKS, 'starter');
  if (!fs.existsSync(starter)) throw new Error('books/starter is missing, and new books are copied from it.');

  fs.mkdirSync(dir, { recursive: true });
  for (const f of ['VOICE.md', 'blocks.md'])
    if (fs.existsSync(path.join(starter, f))) fs.copyFileSync(path.join(starter, f), path.join(dir, f));

  const t = String(title || slug).trim(), a = String(author || '').trim();
  const json = readJson(path.join(starter, 'book.json')) || { parts: [] };
  Object.assign(json, { title: t, author: a, series: t });
  if (json.copyright) json.copyright.rights = `© ${new Date().getFullYear()} ${a}. All rights reserved.`;
  if (json.copyright) json.copyright.year = new Date().getFullYear();
  fs.writeFileSync(path.join(dir, 'book.json'), JSON.stringify(json, null, 2) + '\n');

  const interior = fs.readFileSync(path.join(starter, 'starter.html'), 'utf8')
    .split('books/starter').join(`books/${slug}`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${t.replace(/[<&]/g, '')}</title>`);
  fs.writeFileSync(path.join(dir, `${slug}.html`), interior);
  return slug;
}

/* book.json from the Studio: keep the shape honest before it reaches disk. */
function cleanJson(next, book) {
  if (!next || typeof next !== 'object' || Array.isArray(next)) throw new Error('book.json has to be an object.');
  if (!String(next.title || '').trim()) throw new Error('A book needs a title.');
  if (!Array.isArray(next.parts) || !next.parts.length) throw new Error('A book needs at least one part.');
  const seen = new Set();
  for (const p of next.parts) {
    if (!String(p.name || '').trim()) throw new Error('Every part needs a name.');
    if (!Array.isArray(p.blocks)) p.blocks = [];
    for (const t of p.blocks) { if (seen.has(t)) throw new Error(`"${t}" is listed twice.`); seen.add(t); }
  }
  for (const [name, list] of Object.entries(next.editions || {})) {
    if (!/^[a-z0-9][a-z0-9-]*$/.test(name)) throw new Error(`Edition names are lowercase, digits and hyphens: "${name}".`);
    if (name === 'full' || name === 'all') throw new Error(`"${name}" is reserved. Pick another edition name.`);
    if (!Array.isArray(list)) throw new Error(`Edition "${name}" has to be a list of page titles.`);
  }
  if (next.interior && next.interior !== book.json.interior) throw new Error('The interior file cannot be changed from the Studio.');
  return next;
}

/* ------------------------------------------------------------------ static files */
function serveFile(res, base, relPath) {
  const file = path.resolve(base, '.' + path.posix.normalize('/' + relPath));
  if (file !== base && !file.startsWith(base + path.sep)) return fail(res, 403, 'Outside the served folder.');
  if (path.basename(file).startsWith('.env')) return fail(res, 403, 'Not served.');
  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) return fail(res, 404, 'Not found.');
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    fs.createReadStream(file).pipe(res);
  });
}

/* ------------------------------------------------------------------ routes */
const server = http.createServer(async (req, res) => {
  try {
    /* Local only, and only when addressed as local: a page on another site cannot
       reach this by pointing a hostname at 127.0.0.1. */
    const host = (req.headers.host || '').replace(/:\d+$/, '');
    if (!['localhost', '127.0.0.1', '[::1]'].includes(host)) return fail(res, 403, 'Local requests only.');
    const url = new URL(req.url, 'http://localhost');
    const parts = url.pathname.split('/').filter(Boolean).map(decodeURIComponent);
    const method = req.method;
    if (method !== 'GET' && !(req.headers['content-type'] || '').startsWith('application/json'))
      return fail(res, 415, 'JSON only.');

    if (parts[0] !== 'api') {
      if (method !== 'GET') return fail(res, 405, 'GET only.');
      if (!parts.length) return serveFile(res, PUBLIC, 'index.html');
      if (parts[0] === 'studio') return serveFile(res, PUBLIC, parts.slice(1).join('/'));
      if (parts[0] === 'books') return serveFile(res, BOOKS, parts.slice(1).join('/'));
      if (parts[0] === 'engine') return serveFile(res, path.join(ROOT, 'engine'), parts.slice(1).join('/'));
      return fail(res, 404, 'Not found.');
    }

    if (parts[1] === 'events' && method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-store', Connection: 'keep-alive' });
      res.write(`event: hello\ndata: ${JSON.stringify({ job })}\n\n`);
      clients.add(res);
      req.on('close', () => clients.delete(res));
      return;
    }

    if (parts[1] === 'books' && parts.length === 2) {
      if (method === 'GET') return send(res, 200, listBooks().map(bookSummary));
      if (method === 'POST') return send(res, 201, { slug: createBook(await readBody(req)) });
    }

    if (parts[1] === 'books' && parts[2]) {
      const slug = parts[2];
      if (!SLUG_RE.test(slug) || !fs.existsSync(path.join(BOOKS, slug, 'book.json'))) return fail(res, 404, `No book called "${slug}".`);
      const dir = bookDir(slug);
      const sub = parts[3];

      if (!sub && method === 'GET') return send(res, 200, bookState(slug));

      if (sub === 'json' && method === 'PUT') {
        const book = loadBook(dir);
        saveJson(book, cleanJson(await readBody(req), book));
        return send(res, 200, bookState(slug));
      }

      if (sub === 'page' && method === 'GET') {
        const page = loadBook(dir).pages.find((p) => p.title === url.searchParams.get('title'));
        return page ? send(res, 200, { title: page.title, html: page.html }) : fail(res, 404, 'No such page.');
      }
      if (sub === 'page' && method === 'PUT') {
        const { title, html } = await readBody(req);
        const newTitle = replacePage(dir, title, String(html || ''));
        return send(res, 200, { title: newTitle, state: bookState(slug) });
      }
      if (sub === 'page' && method === 'POST') {
        const { title, pill, part } = await readBody(req);
        if (!String(title || '').trim()) return fail(res, 400, 'A page needs a title.');
        const t = addPage(dir, blankPage(String(title).trim(), String(pill || 'Topic').trim()), Number(part ?? 0));
        return send(res, 201, { title: t, state: bookState(slug) });
      }

      if (sub === 'status' && method === 'POST') {
        const { title, status, note } = await readBody(req);
        if (!STATUSES.includes(status)) return fail(res, 400, 'Unknown status.');
        setStatus(dir, title, status, note);
        return send(res, 200, bookState(slug));
      }
      if (sub === 'run' && method === 'POST') {
        if (job) return fail(res, 409, `Busy: ${job.task} is still running on ${job.slug}.`);
        const { task, options } = await readBody(req);
        if (!stepsFor(task, slug, options)) return fail(res, 400, 'Unknown task.');
        runJob(task, slug, options);
        return send(res, 202, { started: task });
      }
    }

    return fail(res, 404, 'No such endpoint.');
  } catch (e) {
    return fail(res, 400, e.message || String(e));
  }
});

server.on('error', (e) => {
  console.error(e.code === 'EADDRINUSE' ? `Port ${PORT} is taken. Try: node engine/studio/server.mjs --port ${PORT + 1}` : e.message);
  process.exit(1);
});
server.listen(PORT, '127.0.0.1', () => {
  console.log(`\n  Paper Engine Studio   http://localhost:${PORT}\n`);
  console.log(`  books: ${listBooks().join(', ') || 'none yet'}`);
  console.log('  Ctrl+C to stop.\n');
});
