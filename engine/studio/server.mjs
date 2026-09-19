/* ==========================================================================
   studio/server.mjs  -  the production workflow, with a face
   --------------------------------------------------------------------------
   A small local web app over the same commands you would type. It adds no
   second way to build a book: every button spawns a tool from engine/tools/,
   and the log shows you which one.

       node engine/studio/server.mjs            http://localhost:4173
       node engine/studio/server.mjs --port 8080
       node engine/studio/server.mjs --host tailscale     on your tailnet, and ONLY there

   No dependencies beyond Node. It serves nothing outside books/ and engine/,
   and writes nowhere outside books/<slug>/.

   It listens in exactly one place at a time:

     default            127.0.0.1:<port>. This machine only.
     --host tailscale   <this machine's Tailscale address>:<port>, and nothing
                        else: not localhost, not the LAN, not 0.0.0.0. Only
                        devices on your tailnet can connect. (HOST=tailscale
                        does the same.)

   The Studio has no login of its own, because it can edit books and run
   builds; on a tailnet, Tailscale's ACLs are the login. That is why --host
   refuses every other address.

   On the tailnet it serves HTTPS when it can: `tailscale cert` issues a real
   certificate for the machine's MagicDNS name, kept in ~/.paper-engine-studio.
   The same port also answers plain HTTP, so typing the bare address works:
   https://<name>:4173 and http://100.x.y.z:4173 are the same Studio.
   If that is refused (HTTPS certificates off for the tailnet, or on Linux the
   user is not the Tailscale operator) it serves plain HTTP on the tailnet
   address instead and says why. Tailnet traffic is WireGuard-encrypted either
   way. STUDIO_TLS=off skips the certificate.

   The sidebar's "Share on tailnet" switch moves a running Studio from one
   address to the other. ALLOWED_HOSTS=a,b names extra hostnames it answers to.
   ========================================================================== */
import http from 'node:http';
import https from 'node:https';
import net from 'node:net';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { spawn, execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import {
  ROOT, BOOKS, SLUG_RE, STATUSES, listBooks, bookDir, loadBook, loadWorkflow, saveJson,
  statusOf, setStatus, reviewSummary, replacePage, addPage, blankPage,
} from '../tools/lib/book.mjs';
import { loadPlan } from '../tools/lib/plan.mjs';
import { validateBookJson } from '../tools/lib/schema.mjs';
import { loadImages, validateImagesJson, draftManifest } from '../tools/lib/images.mjs';
import { matterProblems } from '../tools/lib/matter.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(HERE, 'public');
const pi = process.argv.indexOf('--port');
const PORT = Number(pi === -1 ? process.env.PORT || 4173 : process.argv[pi + 1]);
const hi = process.argv.indexOf('--host');
const HOST = (hi === -1 ? process.env.HOST || '' : process.argv[hi + 1] || '').trim().toLowerCase();
const TS_BIN = process.env.TAILSCALE_BIN || 'tailscale';
const WANT_TLS = !/^(off|0|false|no)$/i.test(process.env.STUDIO_TLS || '');
const CERT_DIR = path.join(os.homedir(), '.paper-engine-studio');   // never inside the repo: the repo may be a synced drive

if (HOST && !['tailscale', 'localhost', '127.0.0.1'].includes(HOST)) {
  console.error(`--host ${HOST}: refused. The Studio has no login, so it only ever listens on loopback\n` +
                "or on this machine's Tailscale address. Use --host tailscale.");
  process.exit(1);
}

const ts = (args, timeout = 8000) => execFileSync(TS_BIN, args, { encoding: 'utf8', timeout, stdio: ['ignore', 'pipe', 'pipe'] });
const isTailnetIp = (ip) => { const [a, b] = String(ip).split('.').map(Number); return a === 100 && b >= 64 && b <= 127; };

/* Where this machine sits on the tailnet. The address comes from the network interfaces
   (Tailscale always hands out 100.64.0.0/10), so it works without the CLI; the MagicDNS
   name, which is the name on the certificate, needs the CLI. */
function findTailnet() {
  const ip = Object.values(os.networkInterfaces()).flat()
    .find((i) => i && i.family === 'IPv4' && !i.internal && isTailnetIp(i.address))?.address;
  if (!ip) throw new Error('No Tailscale address on this machine. Is Tailscale installed and connected?');
  let name = null;
  try {
    const st = JSON.parse(ts(['status', '--json']));
    name = String(st.Self?.DNSName || '').replace(/\.$/, '').toLowerCase() || null;
  } catch { /* no CLI on PATH: the address still works */ }
  return { ip, name };
}

/* A real certificate for the MagicDNS name, from Tailscale. Returns null, with the reason
   in `why`, when there is none to be had; the caller falls back to HTTP. */
function tailnetCert(name, why) {
  if (!WANT_TLS) { why.note = 'STUDIO_TLS=off.'; return null; }
  if (!name) { why.note = 'The tailscale command was not found, so no certificate could be requested.'; return null; }
  const cert = path.join(CERT_DIR, `${name}.crt`), key = path.join(CERT_DIR, `${name}.key`);
  try {
    fs.mkdirSync(CERT_DIR, { recursive: true, mode: 0o700 });
    ts(['cert', '--cert-file', cert, '--key-file', key, name], 90000);   // reuses a valid one, renews a stale one
    return { cert: fs.readFileSync(cert), key: fs.readFileSync(key) };
  } catch (e) {
    const said = `${e.stderr || ''} ${e.stdout || ''} ${e.message || ''}`;
    if (/denied|operator|sudo|permission/i.test(said)) {
      why.note = 'This user may not ask Tailscale for a certificate.';
      why.hint = `sudo tailscale set --operator=${os.userInfo().username}`;
    } else if (/https/i.test(said) && /enable|not enabled|admin|support/i.test(said)) {
      why.note = 'HTTPS certificates are off for this tailnet (admin console, DNS page).';
      why.hint = 'https://login.tailscale.com/admin/dns';
    } else why.note = said.trim().split('\n').filter(Boolean).slice(-2).join(' ').slice(0, 300) || 'tailscale cert failed.';
    return null;
  }
}

const EXTRA_HOSTS = (process.env.ALLOWED_HOSTS || '').split(',').map((h) => h.trim().toLowerCase()).filter(Boolean);
const LOCAL_HOSTS = ['localhost', '127.0.0.1', '[::1]'];

/* The one place the Studio is listening right now. */
const at = { mode: null, server: null, ip: null, name: null, tls: false, url: null, ipUrl: null, hosts: new Set(), note: null, hint: null, error: null };
const pinned = HOST === 'tailscale';

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
  const build = { name: 'Build', args: [tool('build.mjs'), dir] };
  const pre = { name: 'Preflight', args: [tool('preflight.mjs'), dir, '--json', `${sdir}/preflight.json`], mayFail: true };
  const shots = { name: 'Proofs', args: [tool('shot.mjs'), `${dir}/book.html`, `${sdir}/shots`], before: () => clearShots(slug) };
  if (task === 'build') return [build];
  if (task === 'preflight') return [build, pre];
  if (task === 'proof') return [build, pre, shots];
  if (task === 'images') {   // regenerate named pictures from images.json; never "all" from a button
    const names = (opt.names || []).filter((n) => /^[A-Za-z0-9][A-Za-z0-9._-]*$/.test(n));
    if (!names.length) return null;
    return [{ name: 'Generate', args: [tool('images.mjs'), dir, '--generate', ...names] }];
  }
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

/* The two plain-markdown sources the Studio may edit, by name and never by path. */
const SOURCES = { blocks: 'blocks.md', facts: 'FACTS.md', images: 'images.json', glossary: 'GLOSSARY.md' };

function planSummary(dir) {
  try { const p = loadPlan(dir); return { ...p.counts, hasBlocks: p.hasBlocks, hasFacts: p.hasFacts }; } catch { return null; }
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
    plan: planSummary(dir),
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
  for (const f of ['VOICE.md', 'blocks.md', 'FACTS.md'])
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
  const shape = validateBookJson(next);
  if (shape.errors.length) throw new Error(shape.errors.slice(0, 3).join('  ·  ') + (shape.errors.length > 3 ? `  ·  and ${shape.errors.length - 3} more` : ''));
  const mp = [...matterProblems(next).errors, ...Object.keys(next.editions || {}).flatMap((e) => matterProblems(next, e).errors)];
  if (mp.length) throw new Error([...new Set(mp)].slice(0, 3).join('  ·  '));
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
const handle = async (req, res) => {
  try {
    /* Only when addressed by a name we own: a page on another site cannot reach this
       by pointing a hostname of its own at 127.0.0.1. */
    const host = (req.headers.host || '').replace(/:\d+$/, '').toLowerCase();
    if (!at.hosts.has(host)) return fail(res, 403, `Not served under the name "${host}". Add it to ALLOWED_HOSTS if it is yours.`);
    /* Plain HTTP by NAME, when we hold a certificate for that name: send them to HTTPS.
       Plain HTTP by ADDRESS is served as it is. No certificate can cover 100.x.y.z, and
       typing the address has to work; the tailnet is encrypted underneath either way. */
    if (at.tls && !req.socket.encrypted && host === at.name && req.method === 'GET') {
      res.writeHead(302, { Location: at.url + req.url, 'Cache-Control': 'no-store' });
      return res.end();
    }
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

    if (parts[1] === 'tailnet' && parts.length === 2) {
      /* Moving the Studio between addresses is for whoever is AT the machine. We listen
         directly now, so the socket's address is the truth: this machine reaches its own
         tailnet address from that same address. */
      const from = (req.socket.remoteAddress || '').replace(/^::ffff:/, '');
      const local = ['127.0.0.1', '::1', at.ip].includes(from);
      if (method === 'GET') return send(res, 200, tailnetState(local));
      if (method === 'POST') {
        if (!local) return fail(res, 403, 'Only this machine itself can move the Studio on or off the tailnet.');
        const { on } = await readBody(req);
        const moved = await listen(on ? 'tailnet' : 'local');
        return send(res, 200, { ...tailnetState(true), moved });
      }
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

      if (sub === 'plan' && method === 'GET') return send(res, 200, loadPlan(dir));
      if (sub === 'images' && method === 'GET') return send(res, 200, loadImages(dir));
      if (sub === 'images' && parts[4] === 'draft' && method === 'POST') return send(res, 200, { text: JSON.stringify(draftManifest(dir), null, 2) + '\n' });

      if (sub === 'source') {
        const name = SOURCES[url.searchParams.get('file')];
        if (!name) return fail(res, 400, 'Unknown source file.');
        const file = path.join(dir, name);
        if (method === 'GET') return send(res, 200, { name, exists: fs.existsSync(file), text: fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '' });
        if (method === 'PUT') {
          const { text } = await readBody(req);
          if (typeof text !== 'string') return fail(res, 400, 'Nothing to save.');
          if (name.endsWith('.json')) {   // never let a manifest the schema rejects reach disk
            let parsed; try { parsed = JSON.parse(text); } catch (e) { return fail(res, 400, `Not valid JSON: ${e.message}`); }
            const shape = validateImagesJson(parsed);
            if (shape.errors.length) return fail(res, 400, shape.errors.slice(0, 3).join('  ·  '));
          }
          fs.writeFileSync(file, text.replace(/\r\n/g, '\n').replace(/\s*$/, '\n'));
          return send(res, 200, { plan: loadPlan(dir), images: loadImages(dir), state: bookState(slug) });
        }
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
};

const tailnetState = (local) => ({
  on: at.mode === 'tailnet', url: at.url, ipUrl: at.ipUrl, tls: at.tls,
  note: at.note, hint: at.hint, error: at.error, pinned, canChange: !!local,
  localUrl: `http://localhost:${PORT}`,
});

/* Start listening at `mode`, and only once that works, stop listening where we were.
   One address at a time, never both: that is the whole point of --host tailscale. */
async function listen(mode) {
  if (at.mode === mode) return false;
  const next = { mode, ip: null, name: null, tls: false, note: null, hint: null, error: null };
  let server;
  try {
    if (mode === 'tailnet') {
      Object.assign(next, findTailnet());
      const tlsFiles = tailnetCert(next.name, next);
      next.tls = !!tlsFiles;
      if (!tlsFiles) server = http.createServer(handle);
      else {
        /* One port, both protocols. A TLS handshake always opens with byte 0x16; anything
           else is plain HTTP. So https://<name>:4173 and http://100.x.y.z:4173 both work,
           and nobody has to remember which port is which. */
        const secure = https.createServer(tlsFiles, handle), plain = http.createServer(handle);
        const open = new Set();
        server = net.createServer((sock) => {
          open.add(sock); sock.on('close', () => open.delete(sock)); sock.on('error', () => {});
          /* read(1) then unshift, never a 'data' listener: that would set the socket
             flowing, and the TLS side would never see the bytes of its own handshake. */
          const sniff = () => {
            const first = sock.read(1);
            if (first === null) return sock.once('readable', sniff);
            sock.unshift(first);
            (first[0] === 0x16 ? secure : plain).emit('connection', sock);
          };
          sock.once('readable', sniff);
        });
        server.closeAllConnections = () => open.forEach((k) => k.destroy());
        // a Studio left running for months still has a fresh certificate
        const renew = setInterval(() => { const f = tailnetCert(next.name, {}); if (f) secure.setSecureContext(f); }, 24 * 3600 * 1000);
        renew.unref();
        server.on('close', () => clearInterval(renew));
      }
    } else server = http.createServer(handle);

    const bind = mode === 'tailnet' ? next.ip : '127.0.0.1';
    await new Promise((resolve, reject) => { server.once('error', reject); server.listen(PORT, bind, resolve); });
  } catch (e) {
    at.error = e.code === 'EADDRINUSE' ? `Port ${PORT} is already taken on ${mode === 'tailnet' ? 'the Tailscale address' : 'localhost'}.`
      : e.code === 'EADDRNOTAVAIL' ? 'The Tailscale address is not up yet.' : e.message;
    if (!at.server) throw new Error(at.error);    // nothing to fall back to: the caller exits
    return false;
  }

  const old = at.server;
  const scheme = next.tls ? 'https' : 'http';
  const names = mode === 'tailnet' ? [next.name, next.name?.split('.')[0], next.ip].filter(Boolean) : LOCAL_HOSTS;
  Object.assign(at, next, {
    server,
    hosts: new Set([...names, ...EXTRA_HOSTS]),
    url: mode === 'tailnet' ? `${scheme}://${next.name || next.ip}:${PORT}` : `http://localhost:${PORT}`,
    ipUrl: mode === 'tailnet' && next.name ? `http://${next.ip}:${PORT}` : null,   // by address it is always http: no certificate covers an IP
  });
  if (old) setTimeout(() => { old.close(); old.closeAllConnections?.(); clients.clear(); }, 400);   // let this reply get out first
  return true;
}

const where = () => {
  console.log(`\n  Paper Engine Studio   ${at.url}${at.ipUrl ? '   or   ' + at.ipUrl : ''}`);
  if (at.mode === 'tailnet') {
    console.log('  Tailscale address only. Not on localhost, not on the LAN.');
    if (!at.tls) console.log(`  Plain HTTP (the tailnet itself is encrypted). ${at.note || ''}${at.hint ? '\n    ' + at.hint : ''}`);
  }
  console.log(`\n  books: ${listBooks().join(', ') || 'none yet'}`);
  console.log('  Ctrl+C to stop.\n');
};

process.on('SIGINT', () => process.exit(0));
process.on('SIGTERM', () => process.exit(0));

try {
  await listen(pinned ? 'tailnet' : 'local');
  where();
} catch (e) {
  console.error(`\n  ${pinned ? '--host tailscale: ' : ''}${e.message}`);
  if (/taken/.test(e.message)) console.error(`  Try: node engine/studio/server.mjs --port ${PORT + 1}`);
  console.error('');
  process.exit(1);    // under systemd, Restart=on-failure tries again once Tailscale is up
}
