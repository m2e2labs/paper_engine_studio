/* ==========================================================================
   build.mjs  -  build a book, front and back matter included
   --------------------------------------------------------------------------
   Runs build-book.mjs exactly as you would, then adds the pages book.json
   lists under "matter" (a dedication, a preface, the sources, about the
   author) and writes the contents and index numbers again to match.

   A book with no "matter" comes out byte for byte as build-book.mjs wrote it,
   so this is always the command to use.

   Usage:   the same as build-book.mjs
       node engine/tools/build.mjs books/<slug>
       node engine/tools/build.mjs books/<slug> --edition free
       node engine/tools/build.mjs books/<slug> --out books/<slug>/other.html
   ========================================================================== */
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { ROOT } from './lib/book.mjs';
import { applyMatter } from './lib/matter.mjs';

const argv = process.argv.slice(2);
const flag = (name) => { const i = argv.indexOf('--' + name); return i === -1 ? null : argv[i + 1]; };
const bookDir = argv.find((a, i) => !a.startsWith('--') && !['--edition', '--out'].includes(argv[i - 1]));

const b = spawnSync(process.execPath, [path.join(ROOT, 'engine/tools/build-book.mjs'), ...argv], { encoding: 'utf8' });
if (b.status !== 0 || !bookDir) { process.stdout.write(b.stdout || ''); process.stderr.write(b.stderr || ''); process.exit(b.status || 1); }

const dir = path.resolve(bookDir);
const edition = flag('edition');
const outPath = path.resolve(flag('out') || path.join(dir, edition ? `book-${edition}.html` : 'book.html'));
const json = JSON.parse(fs.readFileSync(path.join(dir, 'book.json'), 'utf8'));

let r;
try { r = applyMatter(fs.readFileSync(outPath, 'utf8'), json, { dir, edition }); }
catch (e) {
  fs.rmSync(outPath, { force: true });   // half a book is worse than none: its contents would be wrong
  console.error('\n' + e.message + '\n'); process.exit(1);
}
if (r.changed) fs.writeFileSync(outPath, r.html);   // matter added, or cross-references given their numbers
if (!r.added && !r.notes.length) { process.stdout.write(b.stdout); process.exit(0); }

const out = b.stdout.split('\n');
if (r.added) {
  out[0] = out[0].replace(/^wrote \d+ pages/, `wrote ${r.total} pages`);
  const extra = [r.front && ` + front matter×${r.front}`, r.back && ` + back matter×${r.back}`].filter(Boolean).join('');
  out[1] = /  \[/.test(out[1]) ? out[1].replace(/  \[/, extra + '  [') : out[1] + extra;
}
for (const n of r.notes) out.splice(2, 0, `  note: ${n}`);
process.stdout.write(out.join('\n'));
