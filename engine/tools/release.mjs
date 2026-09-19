/* ==========================================================================
   release.mjs  -  one command from source to files you can sell
   --------------------------------------------------------------------------
   The loop (build, check, shot, export) is how you WRITE a book. This is how
   you SHIP one. For the full book and for every edition you name, it:

     1. builds               build.mjs, fresh, so nothing stale ships
     2. runs preflight       and STOPS if any check fails
     3. exports the PDF      the screen PDF, 1:1 with what you reviewed
     4. exports a print PDF  with --bleed, the file a printer wants
     5. exports an EPUB      with --epub, fixed-layout, the PDF's twin for ebook stores
     6. writes proofs        with --proofs, one PNG per page
     7. writes a listing     <slug>-listing.md: title, blurb, keywords, ISBNs, price,
                             ready to paste into a store's form
     8. writes a manifest    what was built, from which commit, with checksums

   Everything lands in books/<slug>/dist/<label>_<date>/ and nothing is ever
   overwritten, so every file you have sent anyone can be found again.

   Usage:
       node engine/tools/release.mjs books/<slug>
       node engine/tools/release.mjs books/<slug> --editions all
       node engine/tools/release.mjs books/<slug> --editions full,free --bleed 3 --epub
       node engine/tools/release.mjs books/<slug> --strict     every page must be approved
       node engine/tools/release.mjs books/<slug> --force      ship despite failing checks

   "full" is the whole book. "all" is the whole book plus every edition in
   book.json.
   ========================================================================== */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync, spawnSync } from 'node:child_process';
import { ROOT, loadBook } from './lib/book.mjs';
import { preflight, printReport } from './lib/preflight.mjs';
import { exportPdfs } from './lib/pdf.mjs';
import { exportEpub } from './lib/epub.mjs';
import { pdfPageCount } from './lib/measure.mjs';
import { listingMarkdown, publishingFor } from './lib/schema.mjs';

const VALUE_FLAGS = ['--editions', '--bleed'];
const argv = process.argv.slice(2);
const bookDir = argv.find((a, i) => !a.startsWith('--') && !VALUE_FLAGS.includes(argv[i - 1]));
if (!bookDir) {
  console.error('Usage: node engine/tools/release.mjs books/<slug> [--editions full,<name>|all] [--bleed <mm>] [--epub] [--proofs] [--strict] [--force]');
  process.exit(1);
}
const flag = (name) => { const i = argv.indexOf('--' + name); return i === -1 ? null : argv[i + 1]; };
const has = (name) => argv.includes('--' + name);
const die = (msg) => { console.error('\n' + msg + '\n'); process.exit(1); };

const dir = path.resolve(bookDir);
const book = loadBook(dir);
const bleedMm = Number(flag('bleed') || 0);
if (Number.isNaN(bleedMm) || bleedMm < 0 || bleedMm > 10) die('--bleed takes millimetres, 0 to 10. Printers usually ask for 3.');

const known = Object.keys(book.json.editions || {});
const asked = (flag('editions') || 'full').split(',').map((s) => s.trim()).filter(Boolean);
const editions = asked.includes('all') ? ['full', ...known] : [...new Set(asked)];
const unknown = editions.filter((e) => e !== 'full' && !known.includes(e));
if (unknown.length) die(`book.json has no edition named ${unknown.map((e) => `"${e}"`).join(', ')}.\nIt has: ${known.join(', ') || 'none'}.`);

const slugify = (s) => String(s).toLowerCase().replace(/[^a-z0-9.]+/g, '-').replace(/^-|-$/g, '');
const now = new Date();
const p2 = (n) => String(n).padStart(2, '0');   // local time: the folder name is for you, the manifest keeps UTC
const stamp = `${now.getFullYear()}${p2(now.getMonth() + 1)}${p2(now.getDate())}-${p2(now.getHours())}${p2(now.getMinutes())}${p2(now.getSeconds())}`;
const label = `${slugify(book.json.editionLabel || 'edition-1.0')}_${stamp}`;
const dist = path.join(dir, 'dist', label);

const git = (...a) => { try { return execFileSync('git', a, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim(); } catch { return null; } };
const sha256 = (f) => crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex');
const node = (script, ...a) => spawnSync(process.execPath, [path.join(ROOT, 'engine/tools', script), ...a], { cwd: ROOT, encoding: 'utf8' });
const rel = (f) => path.relative(ROOT, f).replace(/\\/g, '/');
const fileInfo = (f) => ({ file: path.basename(f), bytes: fs.statSync(f).size, sha256: sha256(f) });

console.log(`\nrelease: ${book.slug}  ->  ${rel(dist)}`);
console.log(`editions: ${editions.join(', ')}${bleedMm ? `   bleed: ${bleedMm} mm` : ''}${has('epub') ? '   epub' : ''}${has('strict') ? '   strict' : ''}\n`);

/* ---- 1 + 2: build and gate everything BEFORE writing a single release file,
   so a failing edition never leaves half a release behind. */
const plan = [];
let blocked = false;
for (const ed of editions) {
  const name = ed === 'full' ? null : ed;
  const html = path.join(dir, name ? `book-${name}.html` : 'book.html');
  const b = node('build.mjs', rel(dir), ...(name ? ['--edition', name] : []));
  if (b.status !== 0) die(`Build failed for the ${ed} edition:\n${b.stderr || b.stdout}`);
  console.log(`[${ed}] ${b.stdout.split('\n')[0]}`);

  const rep = await preflight(dir, { bookHtml: html, edition: name, strict: has('strict') });
  printReport(rep);
  console.log('');
  if (rep.result === 'fail') blocked = true;
  plan.push({ ed, name, html, rep });
}
if (blocked && !has('force'))
  die('Release stopped: preflight failed. Nothing was written to dist/.\nFix the ✗ lines above, or pass --force to ship anyway.');

/* ---- 3, 4, 5: the files */
fs.mkdirSync(dist, { recursive: true });
const manifest = {
  book: book.slug, title: book.json.title, author: book.json.author,
  label: book.json.editionLabel || null, released: now.toISOString(),
  commit: git('rev-parse', '--short', 'HEAD'), dirty: !!git('status', '--porcelain', '--', rel(dir)),
  forced: blocked, bleedMm, epub: has('epub'), editions: [],
};

for (const p of plan) {
  const base = p.name ? `${book.slug}-${p.name}` : book.slug;
  const pdf = path.join(dist, `${base}.pdf`);
  await exportPdfs([{ in: p.html, out: pdf }]);
  const files = [fileInfo(pdf)];

  const pages = pdfPageCount(fs.readFileSync(pdf));
  if (pages !== p.rep.sheets.length)
    die(`${path.basename(pdf)} has ${pages} pages but the book has ${p.rep.sheets.length} sheets.\n` +
        'A sheet spilled onto a second page. Something is breaking the strict box.');

  if (bleedMm) {
    const print = path.join(dist, `${base}-print.pdf`);
    await exportPdfs([{ in: p.html, out: print }], { bleedMm });
    files.push(fileInfo(print));
  }
  if (has('epub')) {
    const epub = path.join(dist, `${base}.epub`);
    const r = await exportEpub(p.html, epub, { json: book.json, edition: p.name, date: now });
    if (r.pages !== pages) die(`${path.basename(epub)} has ${r.pages} pages but the PDF has ${pages}.`);
    files.push(fileInfo(epub));
  }
  if (has('proofs')) {
    const out = path.join(dist, `${base}-proofs`);
    const s = node('shot.mjs', rel(p.html), out);
    if (s.status !== 0) die(`Proofs failed:\n${s.stderr || s.stdout}`);
  }
  fs.writeFileSync(path.join(dist, `${base}-preflight.json`), JSON.stringify(p.rep, null, 2) + '\n');
  fs.writeFileSync(path.join(dist, `${base}-listing.md`),
    listingMarkdown(book.json, p.name, { pages, trim: '176 x 250 mm (B5), 6.93 x 9.84 in', files: files.map((f) => f.file) }));

  manifest.editions.push({
    edition: p.ed, pages,
    blocks: p.rep.sheets.filter((s) => s.kind === 'page').length,
    preflight: p.rep.result, warnings: p.rep.warns, failures: p.rep.fails, files,
    listing: `${base}-listing.md`, isbn: publishingFor(book.json, p.name).isbn,
  });
  for (const f of files) console.log(`  wrote ${rel(path.join(dist, f.file))}  (${(f.bytes / 1048576).toFixed(1)} MB, ${pages} pages)`);
}

fs.writeFileSync(path.join(dist, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`  wrote ${rel(path.join(dist, 'manifest.json'))}`);
console.log(blocked ? '\nReleased WITH FAILING CHECKS (--force). The manifest says so.' : '\nReleased.');
