/* ==========================================================================
   lib/preflight.mjs  -  everything that should be true before a book ships
   --------------------------------------------------------------------------
   check.mjs answers one question: does every page fit? A release has more to
   answer. Each check below returns pass, warn or fail. A fail blocks a
   release; a warn is printed and left to you.

   Print numbers are KDP's (the strictest of the common print-on-demand
   services): 24 to 828 pages, an inside margin that grows with page count,
   and 300 dpi behind every photograph.
   ========================================================================== */
import fs from 'node:fs';
import path from 'node:path';
import { loadBook, loadWorkflow, reviewSummary, statusOf } from './book.mjs';
import { inspectBook } from './measure.mjs';

const PLACEHOLDERS = ['Your Name', 'yoursite.com', 'My First Book', 'My first book'];

/* KDP's minimum inside (gutter) margin, in mm, by page count. */
const gutterFor = (n) => (n <= 150 ? 9.6 : n <= 300 ? 12.7 : n <= 500 ? 15.9 : n <= 700 ? 19.1 : 22.3);

export async function preflight(dir, { bookHtml, edition = null, strict = false } = {}) {
  const book = loadBook(dir);
  const wf = loadWorkflow(dir);
  const htmlPath = bookHtml || path.join(dir, edition ? `book-${edition}.html` : 'book.html');
  const checks = [];
  const add = (id, label, level, message, details = []) => checks.push({ id, label, level, message, details });

  /* ---- 1. the words on the cover */
  const j = book.json;
  const blank = ['title', 'author'].filter((k) => !String(j[k] || '').trim());
  const stale = PLACEHOLDERS.filter((p) => JSON.stringify([j.title, j.author, j.brand, j.series, j.copyright]).includes(p));
  if (blank.length) add('metadata', 'Book details', 'fail', `book.json has no ${blank.join(' or ')}.`);
  else if (stale.length) add('metadata', 'Book details', 'warn', 'Starter placeholders are still in book.json.', stale);
  else add('metadata', 'Book details', 'pass', `${j.title}, by ${j.author}.`);

  /* ---- 2. the running order */
  const unknownInEditions = Object.entries(j.editions || {}).flatMap(([name, list]) =>
    list.filter((t) => !book.pages.some((p) => p.title === t)).map((t) => `${name}: ${t}`));
  if (book.missing.length) add('structure', 'Running order', 'fail', 'book.json lists pages that are not written.', book.missing);
  else if (unknownInEditions.length) add('structure', 'Running order', 'fail', 'An edition lists pages that do not exist.', unknownInEditions);
  else if (book.orphans.length) add('structure', 'Running order', 'warn', `${book.orphans.length} written page(s) are not in any part, so they are not in the book.`, book.orphans);
  else add('structure', 'Running order', 'pass', `${book.ordered.length} pages in ${(j.parts || []).length} part(s), none left out.`);

  /* ---- 3. is book.html the book we are about to look at? */
  if (!fs.existsSync(htmlPath)) {
    add('build', 'Build', 'fail', `${path.basename(htmlPath)} does not exist. Build the book first.`);
    return finish(book, wf, checks, null, htmlPath);
  }
  const built = fs.statSync(htmlPath).mtimeMs;
  const newer = [book.interiorPath, book.jsonPath].filter((f) => fs.statSync(f).mtimeMs > built + 1000);
  if (newer.length) add('build', 'Build', 'fail', `${path.basename(htmlPath)} is older than its source. Rebuild.`, newer.map((f) => path.basename(f)));
  else add('build', 'Build', 'pass', `${path.basename(htmlPath)} is up to date.`);

  const r = await inspectBook(htmlPath);

  /* ---- 4. the gate: nothing past the bottom edge */
  if (r.unstyled) add('overflow', 'Pages fit', 'fail', 'The stylesheet never loaded. Check the ../../engine/ link depth.');
  else {
    const over = r.sheets.filter((s) => s.overMm >= 0.5);
    if (over.length) add('overflow', 'Pages fit', 'fail', `${over.length} page(s) run past the bottom edge. Cut words.`,
      over.map((s) => `p${s.page} ${s.title}: +${s.overMm} mm`));
    else add('overflow', 'Pages fit', 'pass', `All ${r.sheets.length} pages read 0 mm.`);
  }

  /* ---- 5. photographs */
  const broken = r.images.filter((i) => !i.ok);
  if (broken.length) add('images', 'Images load', 'fail', `${broken.length} image(s) failed to load.`, broken.map((i) => `p${i.page} ${i.src}`));
  else add('images', 'Images load', 'pass', r.images.length ? `${r.images.length} image(s) loaded.` : 'No images in this book.');

  const good = r.images.filter((i) => i.ok);
  const low = good.filter((i) => i.dpi < 150), soft = good.filter((i) => i.dpi >= 150 && i.dpi < 300);
  const dpiLine = (i) => `p${i.page} ${i.src}: ${i.dpi} dpi (${i.px} across ${i.widthMm} mm)`;
  if (low.length) add('resolution', 'Print resolution', 'fail', `${low.length} image(s) are under 150 dpi and will print visibly soft.`, low.map(dpiLine));
  else if (soft.length) add('resolution', 'Print resolution', 'warn', `${soft.length} image(s) are under 300 dpi. Fine on screen; a printer will flag them.`, soft.map(dpiLine));
  else add('resolution', 'Print resolution', 'pass', good.length ? 'Every image is 300 dpi or better at its printed size.' : 'No images to measure.');

  /* ---- 6. type */
  if (r.fontsFailed.length) add('fonts', 'Fonts', 'fail', 'A font file failed to load, so text was measured in a fallback.', r.fontsFailed);
  else add('fonts', 'Fonts', 'pass', `Loaded: ${r.fontsLoaded.join(', ') || 'system fonts only'}.`);

  /* ---- 7. what check.mjs cannot see, as far as a machine can */
  if (r.clippedLabels.length) add('labels', 'Diagram labels', 'warn', `${r.clippedLabels.length} SVG label(s) run past the edge of their drawing.`,
    r.clippedLabels.map((c) => `p${c.page} "${c.text}"`));
  else add('labels', 'Diagram labels', 'pass', 'No SVG label crosses the edge of its viewBox.');

  /* ---- 8. a built book must not need the network */
  if (r.external.length) add('offline', 'Self-contained', 'warn', 'The book fetches from the network, so a build is not repeatable offline.', r.external.slice(0, 10));
  else add('offline', 'Self-contained', 'pass', 'Nothing is fetched from the network.');

  /* ---- 9. readers who cannot see the page */
  const noAlt = good.filter((i) => !i.alt);
  if (noAlt.length || r.unlabelledSvgs.length) add('a11y', 'Alt text', 'warn', 'Some pictures have no text alternative.',
    [...noAlt.map((i) => `p${i.page} ${i.src}: no alt`), ...r.unlabelledSvgs.map((p) => `p${p}: diagram has no aria-label`)]);
  else add('a11y', 'Alt text', 'pass', 'Every photo has alt text and every diagram an aria-label.');

  /* ---- 10. print-on-demand limits */
  const n = r.sheets.length, need = gutterFor(n);
  const print = [];
  if (n < 24) print.push(`${n} pages: under the 24-page minimum for a KDP paperback. Fine as a PDF.`);
  if (n > 828) print.push(`${n} pages: over the 828-page maximum.`);
  if (r.padMm < need) print.push(`Safe margin is ${r.padMm} mm; a ${n}-page paperback needs ${need} mm on the inside edge.`);
  if (print.length) add('print', 'Print limits', 'warn', 'Outside print-on-demand limits.', print);
  else add('print', 'Print limits', 'pass', `${n} pages at ${r.pageWmm} x ${r.pageHmm} mm, ${r.padMm} mm margin (needs ${need}).`);

  return finish(book, wf, checks, r, htmlPath, { edition, strict });
}

function finish(book, wf, checks, inspect, htmlPath, { edition = null, strict = false } = {}) {
  /* ---- 11. has a person looked at every page? */
  const keep = edition ? new Set((book.json.editions || {})[edition] || []) : null;
  const pending = book.pages
    .filter((p) => book.partOf.has(p.title) && (!keep || keep.has(p.title)))
    .map((p) => ({ title: p.title, ...statusOf(p, wf) }))
    .filter((p) => p.status !== 'approved');
  const sum = reviewSummary(book, wf);
  if (pending.length)
    checks.push({
      id: 'review', label: 'Reviewed', level: strict ? 'fail' : 'warn',
      message: `${pending.length} page(s) are not approved.`,
      details: pending.map((p) => `${p.title}: ${p.status === 'changed' ? 'edited since it was approved' : p.status}`),
    });
  else checks.push({ id: 'review', label: 'Reviewed', level: 'pass', message: `All ${sum.total} pages approved.`, details: [] });

  const fails = checks.filter((c) => c.level === 'fail').length;
  const warns = checks.filter((c) => c.level === 'warn').length;
  return {
    book: book.slug, edition, html: path.basename(htmlPath), at: new Date().toISOString(),
    result: fails ? 'fail' : warns ? 'warn' : 'pass', fails, warns,
    checks, sheets: inspect ? inspect.sheets : [],
  };
}

export function printReport(rep) {
  const mark = { pass: '✓', warn: '!', fail: '✗' };
  for (const c of rep.checks) {
    console.log(`  ${mark[c.level]} ${c.label.padEnd(18)} ${c.message}`);
    for (const d of c.details.slice(0, 12)) console.log(`      - ${d}`);
    if (c.details.length > 12) console.log(`      … and ${c.details.length - 12} more`);
  }
  console.log('');
  console.log(rep.result === 'fail' ? `NOT READY: ${rep.fails} failing, ${rep.warns} warning(s).`
    : rep.result === 'warn' ? `Ready, with ${rep.warns} warning(s) to read.`
    : 'Ready. Every check passed.');
}
