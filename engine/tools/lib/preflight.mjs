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
import { loadPlan } from './plan.mjs';
import { loadImages } from './images.mjs';
import { matterFor, matterProblems, titleOf } from './matter.mjs';
import { validateBookJson, publishingFor, isbnOk, isbnDigits } from './schema.mjs';

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

  /* ---- 1b. is book.json the shape the engine and the stores expect? */
  const shape = validateBookJson(j);
  if (shape.errors.length) add('schema', 'book.json', 'fail', `${shape.errors.length} value(s) in book.json are not what the schema allows.`, shape.errors);
  else if (shape.unknown.length) add('schema', 'book.json', 'warn', 'book.json has keys the engine does not know. A typo? They are ignored.', shape.unknown);
  else add('schema', 'book.json', 'pass', 'Matches engine/book.schema.json.');

  /* ---- 1c. what a store listing needs. Only asked of a book that says it is for sale. */
  if (!j.publishing) add('publishing', 'Publishing', 'pass', 'No "publishing" block. Fine for a PDF you hand out; add one before a store listing.');
  else {
    const l = publishingFor(j, edition);
    const bad = [], thin = [];
    for (const [fmt, n] of Object.entries(l.isbn)) if (!isbnOk(n)) bad.push(`ISBN (${fmt}) ${n}: the check digit does not add up`);
    const all = [j.publishing.isbn, ...Object.values(j.publishing.editions || {}).map((e) => e.isbn)].flatMap((o) => Object.values(o || {})).filter(Boolean).map(isbnDigits);
    for (const n of new Set(all.filter((n, i) => all.indexOf(n) !== i))) bad.push(`ISBN ${n} is used for more than one format or edition`);
    for (const name of Object.keys(j.publishing.editions || {})) if (!(j.editions || {})[name]) bad.push(`publishing.editions.${name}: there is no edition called "${name}"`);

    if (!l.language) thin.push('no "language" (en, ar, fr-CA): the EPUB will say "en"');
    if (l.description.length < 80) thin.push(l.description ? `the description is only ${l.description.length} characters` : 'no description');
    if (!l.keywords.length) thin.push('no keywords (KDP takes up to seven)');
    if (!l.categories.length) thin.push('no categories');
    if (!l.published) thin.push('no publication date');
    if (!l.price) thin.push('no price');
    const printed = `${(j.copyright?.lines || []).join(' ')} ${j.copyright?.rights || ''}`.replace(/[-\s]/g, '');
    if (l.isbn.print && !printed.includes(isbnDigits(l.isbn.print))) thin.push(`the print ISBN is not on the copyright page: add it to copyright.lines`);

    if (bad.length) add('publishing', 'Publishing', 'fail', 'The listing data has errors a store will reject.', [...bad, ...thin]);
    else if (thin.length) add('publishing', 'Publishing', 'warn', 'The store listing is incomplete.', thin);
    else add('publishing', 'Publishing', 'pass', `Listing complete: ${l.keywords.length} keywords, ${l.categories.length} categor${l.categories.length === 1 ? 'y' : 'ies'}, ${Object.keys(l.isbn).length} ISBN(s).`);
  }

  /* ---- 2. the running order */
  const unknownInEditions = Object.entries(j.editions || {}).flatMap(([name, list]) =>
    list.filter((t) => !book.pages.some((p) => p.title === t)).map((t) => `${name}: ${t}`));
  if (book.missing.length) add('structure', 'Running order', 'fail', 'book.json lists pages that are not written.', book.missing);
  else if (unknownInEditions.length) add('structure', 'Running order', 'fail', 'An edition lists pages that do not exist.', unknownInEditions);
  else if (book.orphans.length) add('structure', 'Running order', 'warn', `${book.orphans.length} written page(s) are not in any part, so they are not in the book.`, book.orphans);
  else add('structure', 'Running order', 'pass', `${book.ordered.length} pages in ${(j.parts || []).length} part(s), none left out.`);

  /* ---- 2b. the plan and the facts: can every claim in this book be traced? */
  const keepSet = edition ? new Set((j.editions || {})[edition] || []) : null;
  const plan = loadPlan(dir);
  const entries = plan.parts.flatMap((p) => p.blocks).filter((b) => b.inBook && (!keepSet || keepSet.has(b.title)));
  const unplanned = plan.unplanned.filter((t) => book.partOf.has(t) && (!keepSet || keepSet.has(t)));
  if (!plan.hasBlocks) add('plan', 'Plan', 'warn', 'No blocks.md, so no page in this book was planned before it was written.');
  else if (unplanned.length) add('plan', 'Plan', 'warn', `${unplanned.length} page(s) in the book have no entry in blocks.md.`, unplanned);
  else add('plan', 'Plan', 'pass', `Every page in the book has an entry in blocks.md${plan.counts.planned ? `; ${plan.counts.planned} more planned` : ''}.`);

  const unknown = entries.filter((b) => b.unknownFacts.length).map((b) => `${b.title}: cites ${b.unknownFacts.join(', ')}, not in FACTS.md`);
  const noSource = plan.facts.filter((f) => f.usedBy.length && !f.source).map((f) => `${f.id} ${f.label}: no Source line`);
  const dupes = plan.duplicateFacts.map((id) => `${id} is defined twice`);
  const undecided = entries.filter((b) => b.facts === null).map((b) => `${b.title}: no Facts line (write the ids, or "none")`);
  const unbacked = entries.filter((b) => b.unbacked.length).map((b) => `${b.title}: ${b.unbacked.join(', ')}`);
  const withNumbers = book.pages.filter((p) => book.partOf.has(p.title)).length;
  if (unknown.length || noSource.length || dupes.length)
    add('facts', 'Facts', 'fail', 'Pages cite facts that cannot be traced to a source.', [...unknown, ...noSource, ...dupes]);
  else if (!plan.hasFacts)
    add('facts', 'Facts', 'warn', `No FACTS.md. Nothing records where the figures on these ${withNumbers} pages came from.`,
      unbacked.length ? ['Figures printed in the book:', ...unbacked] : []);
  else if (undecided.length || unbacked.length)
    add('facts', 'Facts', 'warn', 'Some figures on the page are not in the facts that page cites. Add the fact, cite it, or cut the figure.',
      [...undecided, ...unbacked]);
  else add('facts', 'Facts', 'pass', `${plan.facts.length} fact(s), every one with a source, and every figure in the book traced to one.`);

  /* ---- 2c. the pictures: do we know where each one came from, and may we print it? */
  const pics = loadImages(dir);
  const shown = pics.entries.filter((e) => e.inBook.some((t) => !keepSet || keepSet.has(t)));
  if (pics.parseError) add('rights', 'Image rights', 'fail', 'images.json is not valid JSON.', [pics.parseError]);
  else if (!shown.length && !pics.hasManifest) add('rights', 'Image rights', 'pass', 'No pictures in this book.');
  else if (!pics.hasManifest) add('rights', 'Image rights', 'warn', `No images.json. Nothing records where these ${shown.length} picture(s) came from or what rights you hold.`,
    [...shown.map((e) => `${e.name} (on ${e.inBook.join(', ')})`), 'Start one: node engine/tools/images.mjs books/' + book.slug + ' --init']);
  else {
    const hard = [...pics.shape.errors, ...shown.flatMap((e) => e.problems.map((p) => `${e.name}: ${p}`))];
    const soft = [
      ...pics.shape.unknown.map((k) => `unknown key: ${k}`),
      ...pics.entries.filter((e) => !shown.includes(e)).flatMap((e) => e.problems.map((p) => `${e.name}: ${p}`)),
      ...pics.entries.filter((e) => e.exists && !e.usedBy.length).map((e) => `${e.name}: in images/, but no page shows it`),
      ...(shown.some((e) => e.entry?.source === 'generated' && e.entry.subject) && !pics.style ? ['no shared "style" sentence, so subjects have nothing to keep them looking like one book'] : []),
      ...(shown.some((e) => !e.licence) ? [`no licence recorded for: ${shown.filter((e) => !e.licence).map((e) => e.name).join(', ')}`] : []),
    ];
    if (hard.length) add('rights', 'Image rights', 'fail', 'A picture in the book cannot be accounted for.', [...hard, ...soft]);
    else if (soft.length) add('rights', 'Image rights', 'warn', 'The image manifest needs tidying.', soft);
    else add('rights', 'Image rights', 'pass', `${shown.length} picture(s), each with a source and a licence on record.`);
  }

  /* ---- 2d. the pages around the pages */
  const mt = matterFor(j, edition);
  const mtAll = [...mt.front, ...mt.back];
  if (!mtAll.length) add('matter', 'Front/back matter', 'pass', 'None. The book opens at the contents and ends at the index.');
  else {
    const mp = matterProblems(j, edition);
    const soft = [...mp.warnings];
    const held = PLACEHOLDERS.filter((p) => JSON.stringify(mtAll).includes(p));
    if (held.length) soft.push(`starter placeholders are still in the text: ${held.join(', ')}`);
    if (mtAll.some((m) => m.kind === 'sources')) {
      const cited = plan.facts.filter((f) => f.source && f.usedBy.some((t) => book.partOf.has(t) && (!keepSet || keepSet.has(t))));
      if (!cited.length) soft.push(plan.hasFacts ? 'a sources page is asked for, but no page in this edition cites a fact, so it is left out' : 'a sources page is asked for, but there is no FACTS.md, so it is left out');
    }
    if (mp.errors.length) add('matter', 'Front/back matter', 'fail', 'A front or back matter page cannot be made.', [...mp.errors, ...soft]);
    else if (soft.length) add('matter', 'Front/back matter', 'warn', 'The front and back matter needs a look.', soft);
    else add('matter', 'Front/back matter', 'pass', `${mtAll.length} page(s): ${mtAll.map(titleOf).join(', ')}.`);
  }

  /* ---- 3. is book.html the book we are about to look at? */
  if (!fs.existsSync(htmlPath)) {
    add('build', 'Build', 'fail', `${path.basename(htmlPath)} does not exist. Build the book first.`);
    return finish(book, wf, checks, null, htmlPath);
  }
  const built = fs.statSync(htmlPath).mtimeMs;
  const sources = [book.interiorPath, book.jsonPath];
  if (mtAll.some((m) => m.kind === 'sources') && plan.hasFacts) sources.push(path.join(dir, 'FACTS.md'), path.join(dir, 'blocks.md'));   // the sources page is made from these
  const newer = sources.filter((f) => fs.existsSync(f) && fs.statSync(f).mtimeMs > built + 1000);
  const bare = mtAll.some((m) => m.kind !== 'sources') && !/class="sheet gp matter /.test(fs.readFileSync(htmlPath, 'utf8'));
  if (bare) add('build', 'Build', 'fail', `${path.basename(htmlPath)} was built without its front and back matter. Build with build.mjs, not build-book.mjs.`);
  else if (newer.length) add('build', 'Build', 'fail', `${path.basename(htmlPath)} is older than its source. Rebuild.`, newer.map((f) => path.basename(f)));
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
