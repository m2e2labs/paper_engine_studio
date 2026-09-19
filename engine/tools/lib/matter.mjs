/* ==========================================================================
   lib/matter.mjs  -  the pages around the pages: front and back matter
   --------------------------------------------------------------------------
   build-book.mjs makes a cover, a copyright page, the contents, the dividers
   and an index. A book usually wants a little more: a dedication, a preface,
   a "how to read this", and at the back the sources, a word about the author,
   what to read next. Those are written in book.json under "matter", and this
   puts them into a built book:

     cover · copyright · [dedication, epigraph] · contents · [the rest of the
     front] · the parts · [the back] · index

   build-book.mjs is left alone. This takes the book it wrote, adds the sheets,
   and then writes the contents and the index numbers again FROM WHERE EVERY
   SHEET ACTUALLY ENDED UP, never by adding an offset, so a printed number
   cannot disagree with the PDF.

   Kinds:  dedication   a few centred lines, no heading
           epigraph     a quotation and who said it
           prose        a heading and paragraphs: preface, introduction, about
                        the author, acknowledgements. Long ones continue onto
                        a second sheet by themselves.
           list         a heading and named items: also by, further reading
           sources      GENERATED from FACTS.md: every fact a page in this
                        edition cites, its source, and the page that uses it.
                        Nothing is written by hand, so nothing can be invented.
   ========================================================================== */
import { loadPlan } from './plan.mjs';

export const KINDS = ['dedication', 'epigraph', 'prose', 'list', 'sources'];
const BEFORE_CONTENTS = new Set(['dedication', 'epigraph']);
const DEFAULT_TITLE = { dedication: 'Dedication', epigraph: 'Epigraph', sources: 'Sources' };

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
/* **bold** and *italic*, and nothing else: this is a book.json string, not a document */
const inline = (s) => esc(s).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\*([^*]+)\*/g, '<em>$1</em>');
const lines = (v) => (Array.isArray(v) ? v : typeof v === 'string' ? v.split(/\n\s*\n/) : []).map((s) => String(s).trim()).filter(Boolean);

export const titleOf = (item) => (item.title || '').trim() || DEFAULT_TITLE[item.kind] || '';
const listed = (item) => (item.toc === undefined ? !BEFORE_CONTENTS.has(item.kind) : !!item.toc);

/* The items that belong in one edition. "full" names the whole book. */
export function matterFor(json, edition = null) {
  const pick = (list) => (Array.isArray(list) ? list : [])
    .filter((m) => m && typeof m === 'object' && (!Array.isArray(m.editions) || m.editions.includes(edition || 'full')));
  return { front: pick(json.matter?.front), back: pick(json.matter?.back) };
}
export const hasMatter = (json, edition = null) => { const m = matterFor(json, edition); return m.front.length + m.back.length > 0; };

/* What is wrong with the matter, before any page is made. Used by preflight and the build. */
export function matterProblems(json, edition = null) {
  const errors = [], warnings = [];
  const { front, back } = matterFor(json, edition);
  const seen = new Set();
  for (const [where, list] of [['front', front], ['back', back]]) list.forEach((m, i) => {
    const at = `matter.${where}[${i}]${titleOf(m) ? ` (${titleOf(m)})` : ''}`;
    if (!KINDS.includes(m.kind)) { errors.push(`${at}: "kind" should be one of ${KINDS.join(', ')}`); return; }
    if ((m.kind === 'prose' || m.kind === 'list') && !titleOf(m)) errors.push(`${at}: a ${m.kind} page needs a "title"`);
    if (m.kind !== 'sources' && m.kind !== 'list' && !lines(m.body).length) errors.push(`${at}: "body" is empty, so the page would be blank`);
    const long = lines(m.body).find((p) => p.length > 2200);
    if (long) errors.push(`${at}: one paragraph is ${long.length} characters, more than a sheet holds. Break it into paragraphs (a blank line) and it will continue onto the next sheet by itself`);
    if (m.kind === 'list' && !(m.items || []).length) errors.push(`${at}: a list page needs "items"`);
    if (m.kind === 'epigraph' && !String(m.by || '').trim()) warnings.push(`${at}: a quotation with no "by". Who said it?`);
    if (listed(m)) { if (seen.has(titleOf(m))) warnings.push(`${at}: two pages in the contents are both called "${titleOf(m)}"`); seen.add(titleOf(m)); }
  });
  return { errors, warnings };
}

/* ------------------------------------------------------------------ fitting
   No browser here, so length is estimated, generously, and long prose or a long
   list of sources continues on another sheet. Preflight still measures every
   sheet in a real browser afterwards: this only has to be careful, not exact. */
const FIRST_PX = 690, NEXT_PX = 750;
const proseCost = (p) => (p.startsWith('## ') ? 50 : Math.ceil(p.length / 76) * 23.2 + 13);
const sourceCost = (f) => 21 + Math.ceil((f.source.length + 24) / 72) * 18 + 21;
const itemCost = (it) => 22 + (it.note ? Math.ceil(it.note.length / 78) * 20 : 0) + 13;

function paginate(things, cost, reserve = 0) {
  const bins = [[]];
  let room = FIRST_PX - reserve;
  const heading = (t) => typeof t === 'string' && t.startsWith('## ');
  for (const [i, t] of things.entries()) {
    /* a heading is never the last thing on a sheet: it needs room for what it introduces */
    const c = cost(t) + (heading(t) && things[i + 1] !== undefined ? cost(things[i + 1]) : 0);
    if (bins.at(-1).length && c > room) { bins.push([]); room = NEXT_PX; }
    bins.at(-1).push(t); room -= cost(t);
  }
  return bins;
}

/* ------------------------------------------------------------------ sheets */
function sheetsFor(item, B, facts) {
  const title = titleOf(item);
  const foot = `<div class="gp-foot"><span>${esc(B.brand || B.series)}</span><span>${esc(B.title)}</span></div>`;
  const open = (cls) => `    <section class="sheet gp matter ${cls}" data-title="${esc(title)}">\n      <div class="in">`;
  const close = '\n      </div>\n    </section>';
  const headed = (first) => (first
    ? `\n        <div class="gp-top"><div class="gp-tab"></div></div>\n        <h1 class="lp-title">${esc(title)}</h1>\n        <hr class="gp-rule">`
    : `\n        <div class="gp-top"><div class="gp-tab"></div><span class="gp-pill">${esc(title)}</span></div>\n        <hr class="gp-rule" style="margin-top:15px">`);
  const by = item.by ? `\n          <p class="mt-by">${inline(item.by)}</p>` : '';

  if (item.kind === 'dedication')
    return [`${open('m-dedication')}\n        <div class="mt-mid">\n          ${lines(item.body).map((l) => `<p>${inline(l)}</p>`).join('\n          ')}${by}\n        </div>${close}`];

  if (item.kind === 'epigraph')
    return [`${open('m-epigraph')}\n        <div class="mt-mid">\n          <blockquote>\n            ${lines(item.body).map((l) => `<p>${inline(l)}</p>`).join('\n            ')}\n          </blockquote>${by}\n        </div>${close}`];

  if (item.kind === 'prose') {
    const bins = paginate(lines(item.body), proseCost, item.by ? 40 : 0);
    return bins.map((bin, i) => `${open('m-prose')}${headed(i === 0)}\n        <div class="mt-body">\n          ` +
      bin.map((p) => (p.startsWith('## ') ? `<h2>${inline(p.slice(3))}</h2>` : `<p>${inline(p)}</p>`)).join('\n          ') +
      (i === bins.length - 1 ? by : '') + `\n        </div>\n        ${foot}${close}`);
  }

  if (item.kind === 'list') {
    const intro = lines(item.body);
    const bins = paginate(item.items || [], itemCost, intro.reduce((n, p) => n + proseCost(p), 0));
    return bins.map((bin, i) => `${open('m-list')}${headed(i === 0)}\n        <div class="mt-body">\n          ` +
      (i === 0 ? intro.map((p) => `<p>${inline(p)}</p>`).join('\n          ') : '') +
      `\n          <ul class="mt-items">\n            ` +
      bin.map((it) => `<li><span class="nm">${inline(it.name)}</span>${it.note ? `<span class="nt">${inline(it.note)}</span>` : ''}</li>`).join('\n            ') +
      `\n          </ul>\n        </div>\n        ${foot}${close}`);
  }

  /* sources: `facts` is already only what this edition cites; page numbers are filled in later */
  const intro = lines(item.body);
  const bins = paginate(facts, sourceCost, intro.reduce((n, p) => n + proseCost(p), 0));
  return bins.map((bin, i) => `${open('m-sources')}${headed(i === 0)}\n        <div class="mt-body">\n          ` +
    (i === 0 ? intro.map((p) => `<p>${inline(p)}</p>`).join('\n          ') : '') +
    `\n          <ol class="mt-sources">\n            ` +
    bin.map((f) => `<li><div class="sh"><span class="nm">${esc(f.label || f.id)}</span><span class="pg">{{PAGES:${f.id}}}</span></div>` +
      `<div class="sr">${esc(f.source)}${f.checked ? ` <span class="ck">Checked ${esc(f.checked)}.</span>` : ''}</div></li>`).join('\n            ') +
    `\n          </ol>\n        </div>\n        ${foot}${close}`);
}

const CSS = `    /* ====================================================================
       FRONT AND BACK MATTER, written by engine/tools/lib/matter.mjs from
       book.json "matter". Scoped .sheet.gp.matter, on top of build-book's .gp.
       ==================================================================== */
    .gp.matter .mt-mid{ flex:1; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; padding:0 12mm 18mm; }
    .gp.matter.m-dedication .mt-mid p{ font-size:17px; line-height:1.6; font-style:italic; color:var(--ink); margin:0 0 6px; }
    .gp.matter.m-epigraph blockquote{ margin:0; max-width:27em; }
    .gp.matter.m-epigraph blockquote p{ font-family:"Space Grotesk",sans-serif; font-size:21px; line-height:1.45; letter-spacing:-.01em; color:var(--ink); margin:0 0 10px; }
    .gp.matter .mt-mid .mt-by{ font-size:13.5px; font-style:normal; color:var(--muted); margin:16px 0 0; }
    .gp.matter .mt-body{ margin-top:2px; overflow-wrap:anywhere; }
    .gp.matter .mt-body p{ font-size:14.5px; line-height:1.6; color:var(--ink); margin:0 0 13px; max-width:40em; }
    .gp.matter .mt-body h2{ font-family:"Space Grotesk",sans-serif; font-size:17px; font-weight:600; letter-spacing:-.01em; margin:20px 0 8px; }
    .gp.matter .mt-body h2:first-child{ margin-top:0; }
    .gp.matter .mt-body .mt-by{ font-family:"Space Grotesk",sans-serif; font-weight:600; color:var(--ink); margin-top:20px; }
    .gp.matter .mt-items, .gp.matter .mt-sources{ list-style:none; margin:4px 0 0; padding:0; }
    .gp.matter .mt-items li{ padding:0 0 12px; margin:0 0 12px; border-bottom:1px solid #EFF1F5; }
    .gp.matter .mt-items .nm{ display:block; font-size:14.5px; font-weight:600; color:var(--ink); line-height:1.5; }
    .gp.matter .mt-items .nt{ display:block; font-size:13px; line-height:1.55; color:var(--muted); }
    .gp.matter .mt-sources li{ padding:0 0 10px; margin:0 0 10px; border-bottom:1px solid #EFF1F5; break-inside:avoid; }
    .gp.matter .mt-sources .sh{ display:flex; align-items:baseline; gap:12px; line-height:1.5; }
    .gp.matter .mt-sources .nm{ flex:1; font-size:13.5px; font-weight:600; color:var(--ink); }
    .gp.matter .mt-sources .sr{ font-size:12px; line-height:1.5; color:var(--muted); }
    .gp.matter .mt-sources .ck{ white-space:nowrap; }`;

/* ------------------------------------------------------------------ the rebuild */
const OPEN = /<section class="sheet (?:gp|bb)[^"]*"[^>]*>/g;
const kindOfSheet = (s) => {
  const cls = s.match(/^<section class="([^"]*)"/)?.[1].split(/\s+/) || [];
  return cls.includes('bb') ? 'page' : ['matter', 'cover', 'colophon', 'toc', 'divider', 'index'].find((k) => cls.includes(k)) || 'other';
};

/* html: a book exactly as build-book.mjs wrote it. Returns the same book with the
   matter in it, or the same string untouched if this edition has none. */
export function applyMatter(html, json, { dir, edition = null } = {}) {
  const { front, back } = matterFor(json, edition);
  if (!front.length && !back.length) return { html, added: 0, notes: [] };
  const bad = matterProblems(json, edition).errors;
  if (bad.length) throw new Error('book.json "matter" has errors, so the book was not built:\n' + bad.map((e) => '  - ' + e).join('\n'));

  /* comments are blanked, same length, before looking for sheets: an interior's header
     comment shows the page markup as an example, and that is not a page */
  const scan = html.replace(/<!--[\s\S]*?-->/g, (m) => ' '.repeat(m.length));
  const opens = [...scan.matchAll(OPEN)];
  if (!opens.length) throw new Error('No sheets found in the built book.');
  if (opens.some((m) => /\bmatter\b/.test(m[0]))) throw new Error('This book already has its matter in it. Build it again from the start.');
  const closeIdx = scan.lastIndexOf('</section>') + '</section>'.length;
  const head = html.slice(0, opens[0].index).replace(/[ \t]+$/, ''), tail = html.slice(closeIdx);
  const sheets = opens.map((m, i) => html.slice(m.index, i + 1 < opens.length ? opens[i + 1].index : closeIdx).replace(/\s+$/, ''))
    .map((s) => ({ html: s, kind: kindOfSheet(s) }));

  /* the running order, worked out the way build-book does it, then checked against what it built */
  const keep = edition ? new Set((json.editions || {})[edition] || []) : null;
  const parts = (json.parts || []).map((p) => ({ ...p, titles: (p.blocks || []).filter((t) => !keep || keep.has(t)) })).filter((p) => p.titles.length);
  const allTitles = parts.flatMap((p) => p.titles);
  const of = (k) => sheets.filter((s) => s.kind === k);
  if (of('divider').length !== parts.length || of('page').length !== allTitles.length)
    throw new Error(`The built book has ${of('divider').length} part(s) and ${of('page').length} page(s), but book.json says ${parts.length} and ${allTitles.length}. Was book.json saved during the build?`);

  const B = { title: json.title || '', series: json.series || json.title || '', brand: json.brand || '' };
  const notes = [];

  /* sources: only what a page in THIS edition cites, in the order the book meets it */
  let facts = [];
  if ([...front, ...back].some((m) => m.kind === 'sources')) {
    const plan = loadPlan(dir);
    const inBook = new Set(allTitles);
    facts = plan.facts.filter((f) => f.source && f.usedBy.some((t) => inBook.has(t)))
      .map((f) => ({ ...f, titles: f.usedBy.filter((t) => inBook.has(t)) }));
    facts.sort((a, b) => Math.min(...a.titles.map((t) => allTitles.indexOf(t))) - Math.min(...b.titles.map((t) => allTitles.indexOf(t))));
    if (!facts.length) notes.push(plan.hasFacts ? 'Sources page left out: no page in this edition cites a fact from FACTS.md.' : 'Sources page left out: there is no FACTS.md.');
  }
  const make = (list) => list.filter((m) => m.kind !== 'sources' || facts.length)
    .map((m) => ({ item: m, sheets: sheetsFor(m, B, facts).map((h) => ({ html: h, kind: 'matter' })) }));
  const F = make(front), K = make(back);
  const frontA = F.filter((x) => BEFORE_CONTENTS.has(x.item.kind)), frontB = F.filter((x) => !BEFORE_CONTENTS.has(x.item.kind));

  /* ---- the contents, again, with the matter listed. Same rows-per-sheet rule as build-book. */
  const TOC_MAX_ROWS = 25;
  const wantToc = json.contents !== false && of('toc').length > 0;
  const groups = [];
  const rowsOf = (list) => list.filter((x) => listed(x.item));
  if (rowsOf(F).length) groups.push({ matter: rowsOf(F), rows: rowsOf(F).length });
  parts.forEach((p, i) => groups.push({ part: p, i, rows: p.titles.length + 1 }));
  if (rowsOf(K).length) groups.push({ matter: rowsOf(K), rows: rowsOf(K).length });
  const bins = [];
  if (wantToc) {
    let cur = [], rows = 0;
    for (const g of groups) {
      if (cur.length && rows + g.rows > TOC_MAX_ROWS) { bins.push(cur); cur = []; rows = 0; }
      cur.push(g); rows += g.rows;
    }
    if (cur.length) bins.push(cur);
  }

  /* ---- the final order. Contents sheets are placeholders until the numbers are known. */
  const body = sheets.filter((s) => s.kind === 'divider' || s.kind === 'page');
  const seq = [
    ...of('cover'), ...of('colophon'), ...frontA.flatMap((x) => x.sheets),
    ...bins.map((bin) => ({ kind: 'toc', bin })), ...frontB.flatMap((x) => x.sheets),
    ...body, ...K.flatMap((x) => x.sheets), ...of('index'), ...of('other'),
  ];
  const at = (sheet) => seq.indexOf(sheet) + 1;
  const pages = body.filter((s) => s.kind === 'page'), dividers = body.filter((s) => s.kind === 'divider');
  const pageOf = new Map(allTitles.map((t, i) => [t, at(pages[i])]));

  const tocTemplate = of('toc')[0]?.html || '';
  const tocFoot = tocTemplate.match(/<div class="gp-foot">[\s\S]*?<\/div>/)?.[0] || '';
  const row = (name, n) => `<div class="toc-row"><span class="nm">${esc(name)}</span><span class="pg">${n}</span></div>`;
  const renderGroup = (g) => (g.matter
    ? `<div class="toc-part">\n            ${g.matter.map((x) => row(titleOf(x.item), at(x.sheets[0]))).join('\n            ')}\n          </div>`
    : `<div class="toc-part">\n            <div class="toc-ph"><span class="pn">Part ${g.i + 1} · ${esc(g.part.name)}</span><span class="pg">${at(dividers[g.i])}</span></div>\n            ` +
      g.part.titles.map((t) => row(t, pageOf.get(t))).join('\n            ') + '\n          </div>');
  seq.forEach((s, n) => {
    if (!s.bin) return;
    const first = n === seq.findIndex((x) => x.bin);
    s.html = `    <section class="sheet gp toc">\n      <div class="in">\n        <div class="gp-top">\n          <div class="gp-tab"></div>\n          <span class="gp-pill">Contents</span>\n        </div>\n        ` +
      (first ? '<h1 class="lp-title">Contents</h1>\n        <hr class="gp-rule">' : '<hr class="gp-rule" style="margin-top:15px">') +
      `\n        <div class="toc-list">\n          ${s.bin.map(renderGroup).join('\n          ')}\n        </div>\n        ${tocFoot}\n      </div>\n    </section>`;
  });

  /* ---- the index and the sources say where things REALLY are */
  const byEsc = new Map(allTitles.map((t) => [esc(t), pageOf.get(t)]));
  for (const s of seq) {
    if (s.kind === 'index') s.html = s.html.replace(/(<span class="nm">)([\s\S]*?)(<\/span><span class="pg">)\d+(<\/span>)/g, (m, a, name, b, c) => {
      if (!byEsc.has(name)) throw new Error(`The index lists "${name}", which is not a page in this book.`);
      return a + name + b + byEsc.get(name) + c;
    });
    if (s.kind === 'matter') s.html = s.html.replace(/\{\{PAGES:(F\d+)\}\}/g, (m, id) => {
      const nums = [...new Set(facts.find((f) => f.id === id).titles.map((t) => pageOf.get(t)))].sort((a, b) => a - b);
      return `p. ${nums.join(', ')}`;
    });
  }

  /* trimmed like build-book's own sheets, so the indent has to be put back */
  const out = seq.map((s) => (s.html.startsWith('    ') ? s.html : '    ' + s.html)).join('\n\n');
  const merged = head.replace('</head>', `  <style>\n${CSS}\n  </style>\n</head>`) + out + '\n' + tail;
  const count = (list) => list.reduce((n, x) => n + x.sheets.length, 0);
  return { html: merged, added: count(F) + count(K), front: count(F), back: count(K), total: seq.length, notes };
}
