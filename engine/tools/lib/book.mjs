/* ==========================================================================
   lib/book.mjs  -  read and write a book folder, as functions
   --------------------------------------------------------------------------
   build-book.mjs is a script: it reads, assembles, writes, exits. The
   production tools (preflight, release, the Studio) need the same knowledge
   of a book folder as data, plus the one thing build-book never does: write
   a page BACK into the interior.

   The page-splitting rules here are the ones in build-book.mjs, on purpose.
   A page is <section class="sheet bb">, comments are blanked before scanning,
   and a page is keyed by its <h1 class="title">.
   ========================================================================== */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
export const BOOKS = path.join(ROOT, 'books');

export const SLUG_RE = /^[a-z0-9][a-z0-9-]{0,62}$/;
export const STATUSES = ['draft', 'review', 'approved'];

const stripTags = (s) => String(s ?? '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'");

/* The title as book.json spells it. build-book matches on the tag-stripped text, so
   an entity in a title has to be written the same way in both places; we keep that. */
export const titleOf = (chunk) => {
  const m = chunk.match(/<h1 class="title">([\s\S]*?)<\/h1>/);
  return m ? stripTags(m[1]) : null;
};

/* Whitespace-insensitive, so re-indenting a page does not un-approve it. */
export const hashOf = (chunk) =>
  crypto.createHash('sha256').update(chunk.replace(/\s+/g, ' ').trim()).digest('hex').slice(0, 12);

export function bookDir(slug) {
  if (!SLUG_RE.test(slug)) throw new Error(`Bad book slug: ${slug}`);
  return path.join(BOOKS, slug);
}

export function listBooks() {
  if (!fs.existsSync(BOOKS)) return [];
  return fs.readdirSync(BOOKS, { withFileTypes: true })
    .filter((d) => d.isDirectory() && SLUG_RE.test(d.name) &&
                   fs.existsSync(path.join(BOOKS, d.name, 'book.json')))
    .map((d) => d.name)
    .sort();
}

/* ------------------------------------------------------------------ the interior */
export function splitInterior(html) {
  const scan = html.replace(/<!--[\s\S]*?-->/g, (m) => ' '.repeat(m.length));
  const opens = [...scan.matchAll(/<section class="sheet bb[^"]*">/g)];
  if (!opens.length) return { head: html, tail: '', pages: [], insertAt: mainClose(scan, html) };

  const closeIdx = scan.lastIndexOf('</section>') + '</section>'.length;
  const pages = opens.map((o, i) => {
    const start = o.index;
    const rawEnd = i + 1 < opens.length ? opens[i + 1].index : closeIdx;
    /* A page ends at its own </section>, not at the next page: whatever sits between
       two pages (usually a banner comment) belongs to the file, not to either page. */
    const own = scan.lastIndexOf('</section>', rawEnd - 1);
    const end = own >= start ? own + '</section>'.length : rawEnd;
    const chunk = html.slice(start, end);
    return {
      title: titleOf(chunk),
      start, end, html: chunk,
      hash: hashOf(chunk),
      pill: stripTags((chunk.match(/<span class="pill">([\s\S]*?)<\/span>/) || [])[1] || ''),
      kind: /<figure class="photo"/.test(chunk) ? 'photo' : /<svg[\s>]/.test(chunk) ? 'diagram' : 'text',
      words: stripTags(chunk.replace(/<svg[\s\S]*?<\/svg>/g, ' ').replace(/<h2 class="sr">[\s\S]*?<\/h2>/, ' '))
        .split(' ').filter(Boolean).length,
    };
  });
  return { head: html.slice(0, opens[0].index), tail: html.slice(closeIdx), pages, insertAt: closeIdx };
}
const mainClose = (scan, html) => {
  const i = scan.lastIndexOf('</main>');
  return i === -1 ? html.length : i;
};

export function loadBook(dir) {
  const slug = path.basename(dir);
  const jsonPath = path.join(dir, 'book.json');
  const json = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  const interiorPath = path.join(dir, json.interior || `${slug}.html`);
  const html = fs.existsSync(interiorPath) ? fs.readFileSync(interiorPath, 'utf8') : '';
  const split = splitInterior(html);

  const partOf = new Map();
  (json.parts || []).forEach((p, i) => (p.blocks || []).forEach((t) => partOf.set(t, i)));
  const titles = new Set(split.pages.map((p) => p.title));

  return {
    dir, slug, json, jsonPath, interiorPath, html, ...split,
    ordered: (json.parts || []).flatMap((p) => p.blocks || []),
    orphans: split.pages.filter((p) => !partOf.has(p.title)).map((p) => p.title),
    missing: [...partOf.keys()].filter((t) => !titles.has(t)),
    partOf,
  };
}

/* One page only, one title, and it has to close. The Studio's editor goes through
   here, so a half-pasted page can never reach the interior. */
export function validatePage(chunk) {
  const c = chunk.trim();
  if (!/^<section class="sheet bb[^"]*">/.test(c)) return 'A page has to start with <section class="sheet bb">.';
  if (!c.endsWith('</section>')) return 'A page has to end with </section>.';
  const scan = c.replace(/<!--[\s\S]*?-->/g, '');
  if ((scan.match(/<section[\s>]/g) || []).length !== 1 || (scan.match(/<\/section>/g) || []).length !== 1)
    return 'Exactly one <section> per page. If it needs two, it is two concepts.';
  if (!titleOf(c)) return 'Every page needs an <h1 class="title">. It is how book.json finds it.';
  return null;
}

const renameInJson = (json, from, to) => {
  for (const p of json.parts || []) p.blocks = (p.blocks || []).map((t) => (t === from ? to : t));
  for (const k of Object.keys(json.editions || {}))
    json.editions[k] = json.editions[k].map((t) => (t === from ? to : t));
};

export function saveJson(book, json) {
  fs.writeFileSync(book.jsonPath, JSON.stringify(json, null, 2) + '\n');
}

export function replacePage(dir, title, chunk) {
  const book = loadBook(dir);
  const page = book.pages.find((p) => p.title === title);
  if (!page) throw new Error(`No page titled "${title}".`);
  const bad = validatePage(chunk);
  if (bad) throw new Error(bad);
  const next = chunk.trim();
  const newTitle = titleOf(next);
  if (newTitle !== title && book.pages.some((p) => p.title === newTitle))
    throw new Error(`Another page is already titled "${newTitle}". Titles have to be unique.`);

  fs.writeFileSync(book.interiorPath, book.html.slice(0, page.start) + next + book.html.slice(page.end));
  if (newTitle !== title) {
    renameInJson(book.json, title, newTitle);
    saveJson(book, book.json);
    const wf = loadWorkflow(dir);
    if (wf.pages[title]) { wf.pages[newTitle] = wf.pages[title]; delete wf.pages[title]; saveWorkflow(dir, wf); }
  }
  return newTitle;
}

export function addPage(dir, chunk, partIndex) {
  const book = loadBook(dir);
  const bad = validatePage(chunk);
  if (bad) throw new Error(bad);
  const title = titleOf(chunk);
  if (book.pages.some((p) => p.title === title))
    throw new Error(`A page is already titled "${title}". Titles have to be unique.`);

  const indented = '    ' + chunk.trim();
  const at = book.insertAt;
  const glue = book.pages.length ? '\n\n' : '\n';
  fs.writeFileSync(book.interiorPath, book.html.slice(0, at) + glue + indented + (book.pages.length ? '' : '\n\n  ') + book.html.slice(at));

  const part = (book.json.parts || [])[partIndex];
  if (part) { (part.blocks ||= []).push(title); saveJson(book, book.json); }
  return title;
}

/* A blank page in the engine's own shape: the worked example with its content
   swapped for placeholders, so a new page starts inside the design system. */
export function blankPage(title, pill = 'Topic') {
  const e = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<section class="sheet bb">
      <h2 class="sr">${e(title)}: one sentence saying what this page teaches, for screen readers.</h2>
      <div class="tab"></div>
      <div class="top">
        <div class="eyebrow"><b>Series</b> · No. 00</div>
        <span class="pill">${e(pill)}</span>
      </div>
      <h1 class="title">${e(title)}</h1>
      <div class="sub">The plain-words name for it</div>
      <hr class="rule">
      <div class="diagram">
        <svg width="100%" viewBox="0 0 592 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram: describe it.">
          <rect x="1" y="30" width="590" height="100" rx="14" fill="none" stroke="#CBD2DC" stroke-width="1" stroke-dasharray="5 5"/>
          <text x="296" y="84" text-anchor="middle" style="font-family:'Inter',sans-serif;font-size:12.5px;fill:#5B6472">Diagram goes here. Ask the block skill to draw it.</text>
        </svg>
      </div>
      <hr class="rule">
      <div class="explain">
        <p>Write the idea here, in the book's voice.</p>
        <p class="close">The one line they remember.</p>
      </div>
      <div class="foot"><span class="brand"></span><span class="pg"></span><span class="series"></span></div>
    </section>`;
}

/* ------------------------------------------------------------- review state
   books/<slug>/workflow.json. An approval is pinned to the page's content hash,
   so editing an approved page quietly turns it back into work to do. */
const wfPath = (dir) => path.join(dir, 'workflow.json');

export function loadWorkflow(dir) {
  try {
    const wf = JSON.parse(fs.readFileSync(wfPath(dir), 'utf8'));
    return { pages: {}, ...wf };
  } catch { return { pages: {} }; }
}
export function saveWorkflow(dir, wf) {
  fs.writeFileSync(wfPath(dir), JSON.stringify(wf, null, 2) + '\n');
}

export function statusOf(page, wf) {
  const rec = wf.pages[page.title];
  if (!rec) return { status: 'draft', note: '' };
  const changed = rec.status === 'approved' && rec.hash !== page.hash;
  return { status: changed ? 'changed' : rec.status, note: rec.note || '', at: rec.at };
}

export function setStatus(dir, title, status, note) {
  if (!STATUSES.includes(status)) throw new Error(`Unknown status: ${status}`);
  const book = loadBook(dir);
  const page = book.pages.find((p) => p.title === title);
  if (!page) throw new Error(`No page titled "${title}".`);
  const wf = loadWorkflow(dir);
  const prev = wf.pages[title] || {};
  wf.pages[title] = {
    status, hash: page.hash,
    note: note === undefined ? prev.note || '' : String(note).slice(0, 2000),
    at: new Date().toISOString(),
  };
  saveWorkflow(dir, wf);
  return wf.pages[title];
}

export function reviewSummary(book, wf) {
  const inBook = book.pages.filter((p) => book.partOf.has(p.title));
  const counts = { draft: 0, review: 0, approved: 0, changed: 0 };
  for (const p of inBook) counts[statusOf(p, wf).status]++;
  return { total: inBook.length, ...counts };
}

export { decode, stripTags };
