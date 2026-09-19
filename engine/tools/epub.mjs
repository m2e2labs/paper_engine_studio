/* ==========================================================================
   epub.mjs  -  a built book -> a fixed-layout EPUB 3
   --------------------------------------------------------------------------
   The EPUB is the PDF's twin: one page per sheet, same CSS, same fonts, SVG
   diagrams still live text. It is fixed-layout on purpose, because a page in
   this engine is a rigid box and a reflowable EPUB would undo it. See
   lib/epub.mjs for how, and docs/PRODUCTION.md for where stores accept it.

   Usage:
       node engine/tools/epub.mjs books/<slug>                  -> books/<slug>/<slug>.epub
       node engine/tools/epub.mjs books/<slug> --edition free   -> books/<slug>/<slug>-free.epub
       node engine/tools/epub.mjs books/<slug> --out my.epub

   Reads book.html (or book-<edition>.html), so build first. Title, author,
   language and an optional "identifier" (an ISBN as urn:isbn:…) come from
   book.json. Without one, the book gets a stable urn:uuid of its own.
   ========================================================================== */
import fs from 'node:fs';
import path from 'node:path';
import { exportEpub } from './lib/epub.mjs';

const VALUE_FLAGS = ['--edition', '--out'];
const argv = process.argv.slice(2);
const bookDir = argv.find((a, i) => !a.startsWith('--') && !VALUE_FLAGS.includes(argv[i - 1]));
if (!bookDir) {
  console.error('Usage: node engine/tools/epub.mjs books/<slug> [--edition <name>] [--out <file.epub>]');
  process.exit(1);
}
const flag = (name) => { const i = argv.indexOf('--' + name); return i === -1 ? null : argv[i + 1]; };

const dir = path.resolve(bookDir);
const slug = path.basename(dir);
const edition = flag('edition');
const html = path.join(dir, edition ? `book-${edition}.html` : 'book.html');
if (!fs.existsSync(html)) {
  console.error(`\nNo ${path.basename(html)} in ${bookDir}. Build it first:\n  node engine/tools/build-book.mjs ${bookDir}${edition ? ` --edition ${edition}` : ''}\n`);
  process.exit(1);
}
const json = JSON.parse(fs.readFileSync(path.join(dir, 'book.json'), 'utf8'));
const out = flag('out') || path.join(dir, `${slug}${edition ? '-' + edition : ''}.epub`);

try {
  const r = await exportEpub(html, out, { json, edition });
  console.log(`  wrote ${path.relative(process.cwd(), r.file).replace(/\\/g, '/')}  (${r.pages} pages, ${r.assets} fonts and images, fixed layout)`);
  console.log(`  id: ${r.identifier}`);
} catch (e) {
  console.error('\n' + e.message + '\n');
  process.exit(1);
}
