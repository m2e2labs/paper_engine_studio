/* ==========================================================================
   Paper Engine Studio, the front end. No framework and no build step: one
   state object, one render per tab. Every string that came from a book goes
   in through textContent, never innerHTML.
   ========================================================================== */
const $ = (s) => document.querySelector(s);

/* h('div#id.card', {onclick}, child, 'text', ...) */
function h(spec, attrs, ...kids) {
  const [head, ...cls] = spec.split('.');
  const [tag, id] = head.split('#');
  const el = document.createElement(tag || 'div');
  if (id) el.id = id;
  if (cls.length) el.className = cls.join(' ');
  if (attrs && (attrs instanceof Node || typeof attrs !== 'object' || Array.isArray(attrs))) { kids.unshift(attrs); attrs = null; }
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v === null || v === undefined || v === false) continue;
    if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
    else if (k in el && k !== 'list') el[k] = v;
    else el.setAttribute(k, v === true ? '' : v);
  }
  for (const kid of kids.flat(Infinity)) if (kid !== null && kid !== undefined && kid !== false) el.append(kid);
  return el;
}

const S = {
  books: [], slug: null, book: null, plan: null, images: null, research: null, tab: 'pages',
  filter: 'all', showGenerated: false,
  draft: null, dirty: false,          // Structure tab works on a copy of book.json
  job: null,
  release: { editions: ['full'], bleed: 0, epub: false, proofs: false, strict: true, force: false },
};

/* ------------------------------------------------------------------ server */
async function api(method, url, body) {
  const res = await fetch(url, {
    method, headers: body ? { 'Content-Type': 'application/json' } : {},
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `${method} ${url} failed (${res.status})`);
  return data;
}
const bookUrl = (rest = '') => `/api/books/${encodeURIComponent(S.slug)}${rest}`;

function toast(msg, ok = false) {
  const t = $('#toast');
  t.textContent = msg; t.className = ok ? 'ok' : ''; t.hidden = false;
  clearTimeout(toast.t); toast.t = setTimeout(() => (t.hidden = true), ok ? 2200 : 6000);
}
const guard = (fn) => async (...a) => { try { return await fn(...a); } catch (e) { toast(e.message); } };

async function loadBooks() {
  S.books = await api('GET', '/api/books');
  renderSide();
}
async function openBook(slug) {
  if (S.dirty && !confirm('Discard unsaved changes to the structure?')) return;
  S.slug = slug; S.draft = null; S.dirty = false;
  history.replaceState(null, '', '#' + slug);
  await refresh();
}
async function refresh() {
  if (!S.slug) return render();
  const [state, plan, images, research] = await Promise.all([api('GET', bookUrl()), api('GET', bookUrl('/plan')).catch(() => null), api('GET', bookUrl('/images')).catch(() => null), api('GET', bookUrl('/research')).catch(() => null)]);
  S.plan = plan; S.images = images; S.research = research;
  setBook(state);
}
function setBook(state) {
  S.book = state;
  if (!S.dirty) S.draft = structuredClone(state.json);
  render();
  loadBooks();
}

const run = guard(async (task, options) => {
  if (S.dirty) return toast('Save or discard your structure changes first.');
  await api('POST', bookUrl('/run'), { task, options });
});

/* ------------------------------------------------------------------ events */
function connect() {
  const es = new EventSource('/api/events');
  const log = $('#log-body');
  es.addEventListener('hello', (e) => setJob(JSON.parse(e.data).job));
  es.addEventListener('log', (e) => {
    const { line, kind } = JSON.parse(e.data);
    log.append(h('span', { className: kind === 'out' ? '' : kind }, line + '\n'));
    log.scrollTop = log.scrollHeight;
  });
  es.addEventListener('job', (e) => {
    const j = JSON.parse(e.data);
    if (j.state === 'running') { setJob(j); $('#log').classList.remove('closed'); }
    else {
      setJob(null);
      $('#log-state').textContent = `Log · ${j.task} ${j.state} in ${(j.ms / 1000).toFixed(1)}s`;
      if (j.state === 'done') toast(`${j.task} finished`, true); else toast(`${j.task} failed. Read the log.`);
      if (j.slug === S.slug) refresh().then(() => viewer.title && openViewer(viewer.title));
    }
  });
}
function setJob(j) {
  S.job = j;
  $('#log').classList.toggle('busy', !!j);
  if (j) $('#log-state').textContent = `Running ${j.task} on ${j.slug}…`;
  document.querySelectorAll('[data-runs]').forEach((b) => (b.disabled = !!j));
}

/* ------------------------------------------------------------------ sidebar + header */
function renderSide() {
  $('#books').replaceChildren(...S.books.map((b) =>
    h('button.book-link' + (b.slug === S.slug ? '.on' : ''), { onclick: () => openBook(b.slug) },
      h('span.t', b.title),
      h('span.s', b.error ? 'book.json is broken'
        : [`${b.pages} pp`, h('span.bar', h('i', { style: `width:${b.review.total ? (b.review.approved / b.review.total) * 100 : 0}%` }))]))));
}

const ago = (ms) => {
  if (!ms) return '';
  const s = (Date.now() - ms) / 1000;
  return s < 90 ? 'just now' : s < 5400 ? `${Math.round(s / 60)} min ago` : s < 129600 ? `${Math.round(s / 3600)} h ago` : new Date(ms).toLocaleDateString();
};

function renderPipeline() {
  const b = S.book, pre = b.preflight, rv = b.review, last = b.releases[0];
  const words = b.pages.reduce((n, p) => n + p.words, 0);
  const steps = [
    { k: 'Write', v: `${rv.total} pages`, d: b.missing.length ? `${b.missing.length} listed but not written` : b.plan?.planned ? `${b.plan.planned} more planned · ${words.toLocaleString()} words` : `${words.toLocaleString()} words`,
      level: b.missing.length ? 'fail' : rv.total ? 'pass' : 'idle' },
    { k: 'Build', v: !b.build.exists ? 'Not built' : b.build.stale ? 'Out of date' : 'Up to date', d: b.build.exists ? `book.html · ${ago(b.build.at)}` : 'Run proof to build',
      level: !b.build.exists ? 'idle' : b.build.stale ? 'warn' : 'pass' },
    { k: 'Preflight', v: !pre ? 'Not run' : b.preflightStale ? 'Out of date' : pre.result === 'pass' ? 'All clear' : pre.result === 'warn' ? `${pre.warns} warning${pre.warns > 1 ? 's' : ''}` : `${pre.fails} failing`,
      d: pre ? `${pre.checks.filter((c) => c.level === 'pass').length} of ${pre.checks.length} checks pass` : 'The release gate',
      level: !pre ? 'idle' : b.preflightStale ? 'warn' : pre.result },
    { k: 'Review', v: `${rv.approved} / ${rv.total} approved`, d: [rv.review && `${rv.review} in review`, rv.changed && `${rv.changed} edited since`, rv.draft && `${rv.draft} draft`].filter(Boolean).join(' · ') || 'Every page signed off',
      level: !rv.total ? 'idle' : rv.approved === rv.total ? 'pass' : rv.changed ? 'warn' : 'idle' },
    { k: 'Release', v: last ? last.manifest.label || last.folder : 'Nothing shipped', d: last ? `${ago(Date.parse(last.manifest.released))} · ${last.manifest.editions.length} edition(s)` : 'No files in dist/ yet',
      level: last ? (last.manifest.forced ? 'warn' : 'pass') : 'idle' },
  ];
  $('#pipeline').replaceChildren(...steps.map((s, i) =>
    h('li.step.' + s.level, h('div.k', h('span', s.k), h('span', String(i + 1))), h('div.v', s.v), h('div.d', s.d))));
}

function render() {
  const has = !!S.book;
  $('#empty').hidden = has; $('#book').hidden = !has;
  if (!has) return;
  const j = S.book.json;
  $('#book-title').textContent = j.title || S.slug;
  $('#book-sub').textContent = [j.author, j.editionLabel, `books/${S.slug}/`].filter(Boolean).join(' · ');
  $('#open-live').href = `/books/${S.slug}/book.html`;
  $('#open-live').hidden = !S.book.build.exists;
  renderPipeline();
  document.querySelectorAll('#tabs button').forEach((b) => b.classList.toggle('on', b.dataset.tab === S.tab));
  const view = $('#view');
  const top = view.scrollTop;
  view.replaceChildren(...({ plan: viewPlan, research: viewResearch, pages: viewPages, images: viewImages, structure: viewStructure, preflight: viewPreflight, release: viewRelease }[S.tab]().filter(Boolean)));   // a view leaves out a section with `cond && h(...)`
  view.scrollTop = top;
  setJob(S.job);
}

/* ------------------------------------------------------------------ Pages */
const STATUS_LABEL = { draft: 'Draft', review: 'In review', approved: 'Approved', changed: 'Edited since approval' };
const shotUrl = (n) => `/books/${S.slug}/.studio/shots/page${n}.png?v=${S.book.shots.v}`;

function cardsInOrder() {
  const b = S.book, byTitle = new Map(b.pages.map((p) => [p.title, p]));
  const out = [], placed = new Set();
  for (const s of b.preflight?.sheets || []) {
    if (s.kind === 'page' && byTitle.has(s.title)) { out.push({ page: byTitle.get(s.title), sheet: s }); placed.add(s.title); }
    else if (s.kind !== 'page') out.push({ sheet: s });
  }
  const rest = b.pages.filter((p) => !placed.has(p.title));
  return { built: out, rest };
}

function viewPages() {
  const b = S.book;
  const filters = [['all', 'All'], ['draft', 'Draft'], ['review', 'In review'], ['changed', 'Edited since'], ['approved', 'Approved'], ['problem', 'Overflowing']];
  const match = (p) => S.filter === 'all' || (S.filter === 'problem' ? p.overMm >= 0.5 : p.status === S.filter);
  const count = (f) => (f === 'all' ? b.pages.length : b.pages.filter((p) => (f === 'problem' ? p.overMm >= 0.5 : p.status === f)).length);

  const bar = h('div.toolbar',
    h('div.chips', filters.map(([f, label]) =>
      h('button.chip' + (S.filter === f ? '.on' : ''), { onclick: () => { S.filter = f; render(); } }, `${label} ${count(f)}`))),
    h('span.grow'),
    h('label.check', h('input', { type: 'checkbox', checked: S.showGenerated, onchange: (e) => { S.showGenerated = e.target.checked; render(); } }), 'Cover, contents, dividers, index'),
    h('button.btn', { onclick: newPageDialog }, '+ New page'));

  const notices = [];
  if (!b.shots.count) notices.push(h('div.notice', h('b', 'No proofs yet. '), 'Run proof to build the book, check it, and screenshot every page so you can review them here.'));
  else if (b.shots.stale || b.build.stale) notices.push(h('div.notice', h('b', 'These proofs are out of date. '), 'The source changed after they were taken. Run proof again before you approve anything.'));

  const { built, rest } = cardsInOrder();
  const cards = [];
  let part = null;
  for (const c of built) {
    if (!c.page) { if (S.showGenerated && S.filter === 'all') cards.push(card(null, c.sheet)); continue; }
    if (!match(c.page)) continue;
    if (c.page.part !== part) {
      part = c.page.part;
      const p = b.json.parts[part];
      if (p) cards.push(h('div.part-h', h('b', `Part ${part + 1}`), p.name));
    }
    cards.push(card(c.page, c.sheet));
  }
  const loose = rest.filter(match);
  if (loose.length) {
    cards.push(h('div.part-h', h('b', 'Not in the built book'), 'Not listed in a part, or written since the last build'));
    loose.forEach((p) => cards.push(card(p, null)));
  }
  return [bar, ...notices, cards.length ? h('div.grid', cards) : h('div.empty', 'No pages match this filter.')];
}

function card(page, sheet) {
  const hasShot = sheet && sheet.page <= S.book.shots.count;
  const thumb = h('div.thumb',
    hasShot ? h('img', { src: shotUrl(sheet.page), loading: 'lazy', alt: '' }) : h('div.none', page ? (page.part === null ? 'Not in a part' : 'No proof yet') : ''),
    sheet && h('span.no', String(sheet.page)),
    sheet && sheet.overMm >= 0.5 && h('span.flag', `+${sheet.overMm} mm`));
  if (!page)
    return h('div.card.gen', thumb, h('div.meta', h('span.name.muted', sheet.title || sheet.kind), h('span.tag', sheet.kind)));
  return h('button.card', { onclick: () => openViewer(page.title), title: STATUS_LABEL[page.status] },
    thumb, h('div.meta', h('span.dot.' + page.status), h('span.name', page.title)));
}

/* ------------------------------------------------------------------ the review viewer */
const viewer = { title: null, editing: false };

function reviewOrder() {
  const { built, rest } = cardsInOrder();
  return [...built.filter((c) => c.page).map((c) => c.page), ...rest];
}

function openViewer(title) {
  const page = S.book.pages.find((p) => p.title === title);
  const dlg = $('#viewer');
  if (!page) { dlg.close(); return; }
  viewer.title = title;
  const order = reviewOrder(), i = order.findIndex((p) => p.title === title);
  const go = (d) => { const n = order[i + d]; if (n) { viewer.editing = false; openViewer(n.title); } };
  const hasShot = page.sheet && page.sheet <= S.book.shots.count;

  const setStatus = guard(async (status) => {
    const note = dlg.querySelector('#v-note')?.value;
    setBook(await api('POST', bookUrl('/status'), { title, status, note }));
    if (status === 'approved' && order[i + 1]) go(1); else openViewer(title);
  });

  const left = h('div.v-page',
    hasShot ? h('img', { src: shotUrl(page.sheet), alt: `Proof of ${title}` })
      : h('div.none', page.part === null ? 'This page is written but not listed in any part, so it is not in the book. Add it under Structure.' : 'No proof of this page yet. Run proof.'),
    i > 0 && h('button.btn.v-nav.prev', { onclick: () => go(-1), 'aria-label': 'Previous page' }, '←'),
    i < order.length - 1 && h('button.btn.v-nav.next', { onclick: () => go(1), 'aria-label': 'Next page' }, '→'));

  const stale = S.book.shots.stale || S.book.build.stale;
  const body = viewer.editing ? editorBody(page) : h('div.v-body',
    stale && h('div.notice', h('b', 'Proof is out of date. '), 'Run proof before approving.'),
    h('div', h('div.v-label', 'Status'),
      h('div.seg', ['draft', 'review', 'approved'].map((s) =>
        h('button' + (page.status === s ? `.on.${s}` : ''), { onclick: () => setStatus(s) }, STATUS_LABEL[s]))),
      page.status === 'changed' && h('p.muted', { style: 'margin:8px 0 0' }, 'This page was approved, then edited. It needs another look.')),
    h('div', h('div.v-label', 'Review note'),
      h('textarea#v-note', { rows: 5, placeholder: 'What has to change before this page is done?', value: page.note || '',
        onblur: guard(async (e) => { if (e.target.value !== (page.note || '')) setBook(await api('POST', bookUrl('/status'), { title, status: page.status === 'changed' ? 'review' : page.status, note: e.target.value })); }) })),
    h('div', h('div.v-label', 'What the check cannot see'),
      h('p.muted', { style: 'margin:0;font-size:13px' }, 'Overlap, a clipped label, a squashed row, a photo cropped through its subject, a diagram that says the wrong thing. Only your eyes catch those.')));

  const right = h('div.v-side',
    h('div.v-head', h('h2', title),
      h('div.facts',
        h('span.tag.' + page.status, STATUS_LABEL[page.status]),
        page.sheet && h('span.tag', `page ${page.sheet}`),
        h('span.tag', page.kind), page.pill && h('span.tag', page.pill), h('span.tag', `${page.words} words`),
        page.overMm >= 0.5 ? h('span.tag.fail', `+${page.overMm} mm over`) : page.overMm !== null && h('span.tag.pass', '0 mm'))),
    body,
    h('div.v-foot',
      h('span.keys', h('kbd', '←'), ' ', h('kbd', '→'), ' move · ', h('kbd', 'A'), ' approve · ', h('kbd', 'R'), ' review'),
      h('span', { style: 'display:flex;gap:8px' },
        !viewer.editing && h('button.btn', { onclick: () => { viewer.editing = true; openViewer(title); } }, 'Edit source'),
        h('button.btn.ghost', { onclick: () => dlg.close() }, 'Close'))));

  dlg.replaceChildren(left, right);
  viewer.keys = (e) => {
    if (e.target.matches('textarea,input,select') || e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key === 'ArrowLeft') go(-1);
    else if (e.key === 'ArrowRight') go(1);
    else if (e.key.toLowerCase() === 'a') setStatus('approved');
    else if (e.key.toLowerCase() === 'r') setStatus('review');
  };
  if (!dlg.open) dlg.showModal();
}

function editorBody(page) {
  const area = h('textarea.v-src', { spellcheck: false, value: 'Loading…', disabled: true });
  api('GET', bookUrl(`/page?title=${encodeURIComponent(page.title)}`))
    .then((p) => { area.value = p.html; area.disabled = false; }).catch((e) => toast(e.message));
  const save = guard(async () => {
    const r = await api('PUT', bookUrl('/page'), { title: page.title, html: area.value });
    viewer.editing = false; viewer.title = r.title;
    setBook(r.state);
    await run('proof');      // the loop, after every edit
    openViewer(r.title);
  });
  return h('div.v-body',
    h('div', h('div.v-label', `Source · ${S.book.interior}`),
      h('p.muted', { style: 'margin:0;font-size:13px' }, 'One <section class="sheet bb">. Saving writes it into the interior and runs proof. If it overflows, cut words; never shrink the viewBox.')),
    area,
    h('div', { style: 'display:flex;gap:8px;justify-content:flex-end' },
      h('button.btn.ghost', { onclick: () => { viewer.editing = false; openViewer(page.title); } }, 'Cancel'),
      h('button.btn.primary', { onclick: save, 'data-runs': true, disabled: !!S.job }, 'Save and run proof')));
}

/* ------------------------------------------------------------------ dialogs */
function dialog(title, fields, submitLabel, onSubmit) {
  const dlg = $('#modal');
  const form = h('form', { method: 'dialog', onsubmit: guard(async (e) => {
    e.preventDefault();
    await onSubmit(Object.fromEntries(new FormData(form)));
    dlg.close();
  }) },
    h('h2', title), fields,
    h('div.actions', h('button.btn.ghost', { type: 'button', onclick: () => dlg.close() }, 'Cancel'), h('button.btn.primary', { type: 'submit' }, submitLabel)));
  dlg.classList.remove('wide');
  dlg.replaceChildren(form);
  dlg.showModal();
}
const field = (label, name, attrs = {}) => h('label.f', label, h('input', { type: 'text', name, ...attrs }));

function newBookDialog() {
  dialog('New book', [
    field('Title', 'title', { required: true, placeholder: 'The Field Guide' }),
    field('Author', 'author', { placeholder: 'Your name' }),
    field('Folder name', 'slug', { required: true, pattern: '[a-z0-9][a-z0-9-]*', placeholder: 'field-guide', title: 'lowercase letters, digits and hyphens' }),
    h('p.muted', { style: 'margin:0;font-size:13px' }, 'Copies books/starter: its voice file, its page plan, and one finished example page to replace.'),
  ], 'Create book', async (v) => {
    const { slug } = await api('POST', '/api/books', v);
    await loadBooks(); await openBook(slug);
  });
}

function newPageDialog() {
  const parts = S.book.json.parts || [];
  dialog('New page', [
    field('Title', 'title', { required: true, placeholder: 'One concept' }),
    field('Category pill', 'pill', { placeholder: 'Security' }),
    h('label.f', 'Part', h('select', { name: 'part' }, parts.map((p, i) => h('option', { value: String(i) }, `${i + 1}. ${p.name}`)))),
    h('p.muted', { style: 'margin:0;font-size:13px' }, 'Adds a blank page in the engine’s shape to the interior and lists it in book.json. Write it with the block skill, or edit its source here.'),
  ], 'Add page', async (v) => {
    const r = await api('POST', bookUrl('/page'), { ...v, part: Number(v.part) });
    setBook(r.state);
    viewer.editing = true; openViewer(r.title);
  });
}

/* ------------------------------------------------------------------ Plan
   blocks.md and FACTS.md, read as data. What is planned, what is written, and whether
   every figure on a written page can be traced to a fact with a source. */
const PLAN_STATUS = { planned: 'Planned', draft: 'Draft', review: 'In review', approved: 'Approved', changed: 'Edited since' };

function editSource(which, title, hint, startWith) {
  const dlg = $('#modal');
  const area = h('textarea.md-edit', { spellcheck: true, value: 'Loading…', disabled: true });
  api('GET', bookUrl(`/source?file=${which}`)).then((r) => { area.value = r.exists || !startWith ? r.text : startWith; area.disabled = false; area.focus(); }).catch((e) => toast(e.message));
  const form = h('form', { method: 'dialog', onsubmit: guard(async (e) => {
    e.preventDefault();
    const r = await api('PUT', bookUrl(`/source?file=${which}`), { text: area.value });
    S.plan = r.plan; S.images = r.images; if (r.research) S.research = r.research; setBook(r.state); dlg.close(); toast(`${title} saved`, true);
  }) },
    h('h2', title), h('p.muted', { style: 'margin:0;font-size:13px' }, hint), area,
    h('div.actions', h('button.btn.ghost', { type: 'button', onclick: () => dlg.close() }, 'Cancel'), h('button.btn.primary', { type: 'submit' }, 'Save')));
  dlg.classList.add('wide');
  dlg.replaceChildren(form);
  dlg.showModal();
}

function viewPlan() {
  const plan = S.plan, b = S.book;
  if (!plan) return [h('div.empty', 'The plan could not be read.')];
  const factById = new Map(plan.facts.map((f) => [f.id, f]));
  const editBlocks = () => editSource('blocks', 'blocks.md', 'One entry per page: What, Use when, Action, Band, Facts. A title with no page yet is planned.');
  const editFacts = () => editSource('facts', 'FACTS.md', 'What you actually know, each with its source. Pages may only state what their cited facts state.');

  const writePage = guard(async (entry, partName, partPos) => {
    const parts = b.json.parts || [];
    const at = parts.findIndex((p) => (p.name || '').trim().toLowerCase() === partName.trim().toLowerCase());
    const r = await api('POST', bookUrl('/page'), { title: entry.title, pill: entry.category || 'Topic', part: at !== -1 ? at : Math.min(partPos, parts.length - 1) });
    await refresh();
    viewer.editing = true; openViewer(r.title);
  });

  const c = plan.counts;
  const top = h('div.toolbar',
    h('span.muted', `${c.entries} planned page${c.entries === 1 ? '' : 's'}: ${c.written} written, ${c.planned} to go · ${c.facts} fact${c.facts === 1 ? '' : 's'}`),
    h('span.grow'),
    h('button.btn', { onclick: editBlocks }, plan.hasBlocks ? 'Edit blocks.md' : 'Create blocks.md'),
    h('button.btn', { onclick: editFacts }, plan.hasFacts ? 'Edit FACTS.md' : 'Create FACTS.md'));

  const notices = [];
  if (!plan.hasFacts) notices.push(h('div.notice', h('b', 'No FACTS.md. '), 'Nothing records where the figures in this book came from, so a page can state anything. Create it, write down what you actually know with its source, then cite the ids on each page\'s Facts line.'));
  if (plan.unplanned.length) notices.push(h('div.notice', h('b', `${plan.unplanned.length} written page(s) are not in the plan: `), plan.unplanned.join(', ')));

  const rows = [];
  plan.parts.forEach((part, pi) => {
    rows.push(h('tr.prt', h('td', { colSpan: 4 }, `Part ${pi + 1}`, h('span', part.name))));
    for (const e of part.blocks) {
      const facts = e.facts === null ? [h('span.tag.warn', 'no Facts line')]
        : e.facts.length === 0 ? [h('span.tag', 'none')]
        : e.facts.map((id) => h('span.tag.factid' + (factById.has(id) ? '' : '.fail'), { title: factById.get(id)?.claim || 'Not in FACTS.md' }, id));
      rows.push(h('tr',
        h('td', h('div.ttl', e.title), h('div.what', e.what || h('span.tag.warn', 'no What line'))),
        h('td', h('div.tags', e.category && h('span.tag', e.category), e.band && h('span.tag', e.band))),
        h('td', h('div.tags', facts, e.unbacked.length > 0 && h('span.tag.warn', { title: 'Printed on the page, but not in the facts it cites' }, `untraced: ${e.unbacked.join(', ')}`))),
        h('td', { style: 'white-space:nowrap' }, e.status === 'planned'
          ? h('button.btn.small', { onclick: () => writePage(e, part.name, pi) }, 'Start page')
          : h('button.btn.small.ghost', { onclick: () => openViewer(e.title) }, h('span.dot.' + e.status), ' ', PLAN_STATUS[e.status]),
          e.status !== 'planned' && !e.inBook && h('div.muted', { style: 'font-size:12px;margin-top:3px' }, 'not in a part'))));
    }
  });
  const table = plan.parts.length
    ? h('div.panel', h('h2', 'The plan'), h('p.hint', 'From blocks.md. Status is worked out, never typed: no page yet is planned, a page is a draft until a person approves it.'),
        h('div.scroll-x', h('table.plan', h('thead', h('tr', h('th', 'Page'), h('th', 'Kind'), h('th', 'Facts it may state'), h('th', 'Status'))), h('tbody', rows))))
    : h('div.panel', h('h2', 'No plan yet'), h('p.hint', 'blocks.md is where a page starts: what it is about, when it is worth reading, what the reader should do, and which facts it may state.'), h('button.btn.primary', { onclick: editBlocks }, 'Write the plan'));

  const factsPanel = h('div.panel', h('h2', 'Facts'), h('p.hint', 'From FACTS.md. A fact with no source fails preflight once a page cites it. A fact no page cites is just waiting.'),
    plan.facts.length ? plan.facts.map((f) => {
      const state = !f.source ? 'bad' : f.usedBy.length ? 'ok' : 'unused';
      return h('div.fact.' + state,
        h('div.top', h('span.id', f.id), h('b', f.label || 'Untitled'), f.kind && h('span.tag', f.kind), f.checked && h('span.tag', `checked ${f.checked}`),
          !f.source && h('span.tag.fail', 'no source'), h('span.muted', { style: 'margin-left:auto;font-size:12.5px' }, f.usedBy.length ? `used by ${f.usedBy.join(', ')}` : 'not cited yet')),
        h('p.claim', f.claim || h('span.tag.warn', 'no Claim line')),
        f.source && h('p.src', f.source));
    }) : h('div.muted', 'No facts recorded.'));

  return [top, ...notices, table, factsPanel];
}

/* ------------------------------------------------------------------ Research
   RESEARCH.md: what a search turned up, waiting for the author. Accepting is the only
   way into FACTS.md from here, and it is a button a person presses. */
const researchUi = { show: 'new' };

function viewResearch() {
  const rs = S.research;
  if (!rs) return [h('div.empty', 'The research inbox could not be read.')];
  const act = guard(async (body, msg) => {
    const r = await api('POST', bookUrl('/research'), body);
    S.research = r.research; S.plan = r.plan; setBook(r.state);
    toast(typeof msg === 'function' ? msg(r.done) : msg, true);
  });
  const c = rs.counts;
  const tabBtn = (k, label) => h('button.btn.small' + (researchUi.show === k ? '.primary' : ''), { onclick: () => { researchUi.show = k; render(); } }, `${label} (${c[k]})`);

  const addDialog = () => dialog('File a finding', [
    h('label.f', 'The claim, in one plain sentence', h('textarea', { name: 'claim', rows: 3, required: true })),
    h('label.f', 'Source: a title and a link', h('input', { type: 'text', name: 'source', required: true, placeholder: 'Microsoft Learn, "Row-level security": https://…' })),
    h('label.f', 'The words on that page that say so (for checking, never printed)', h('textarea', { name: 'quote', rows: 2 })),
    h('label.f', 'For which page', h('select', { name: 'for' }, h('option', { value: '' }, 'No page in particular'),
      (S.plan?.parts || []).flatMap((p) => p.blocks).map((b) => h('option', { value: b.title }, b.title)))),
    h('label.f', 'Kind', h('select', { name: 'kind' }, ['reference', 'experience', 'measurement', 'quote'].map((k) => h('option', { value: k }, k)))),
  ], 'File it', (v) => act({ action: 'add', ...v }, (d) => `Filed as ${d.id}`));

  const top = h('div.toolbar',
    tabBtn('new', 'Waiting'), tabBtn('accepted', 'Accepted'), tabBtn('rejected', 'Rejected'),
    h('span.grow'),
    h('button.btn', { 'data-runs': true, disabled: !c.new, title: 'Opens every source: does it answer, and are the quoted words on it?', onclick: () => run('verify') }, 'Verify sources'),
    h('button.btn', { onclick: addDialog }, 'File a finding'),
    rs.hasResearch && h('button.btn', { onclick: () => editSource('research', 'RESEARCH.md', 'Findings waiting for you. Accept and reject from the Research tab; edit here to fix wording.') }, 'Edit RESEARCH.md'));

  const intro = !rs.findings.length && h('div.notice', h('b', 'Nothing has been researched yet. '),
    'Ask Claude to research a planned page (the /research skill), or file a finding yourself. Whatever a search turns up lands here with its source, and only becomes a fact in FACTS.md when you accept it.');

  const card = (r) => {
    const draft = { claim: r.claim, label: r.label };
    const bad = r.verified.includes('NOT OK');
    return h('div.finding' + (r.status === 'rejected' ? '.rejected' : ''),
      h('div.ftop', h('span.tag', r.id), h('b', r.label), h('span.tag', r.kind),
        r.for.map((t) => h('span.tag', { title: 'The page this is for' }, t)),
        r.verified ? h('span.tag' + (bad ? '.fail' : '.pass'), { title: r.verified }, bad ? 'source not confirmed' : 'source confirmed') : r.status === 'new' && h('span.tag.warn', 'not verified'),
        r.status === 'accepted' && h('span.tag.pass', `now ${r.factId}`)),
      r.status === 'new'
        ? h('textarea', { rows: 2, 'aria-label': 'Claim', value: r.claim, oninput: (e) => { draft.claim = e.target.value; } })
        : h('div', { style: 'font-size:14px;line-height:1.55' }, r.claim),
      r.quote && h('div.quote', '“', r.quote, '”'),
      h('div.src', r.url ? [r.source.replace(r.url, '').replace(/[:\s]+$/, ''), ' ', h('a', { href: r.url, target: '_blank', rel: 'noopener noreferrer' }, r.url)] : r.source,
        r.retrieved && ` · retrieved ${r.retrieved}`),
      r.why && h('div.src', 'Rejected because: ', r.why),
      r.problems.map((p) => h('div.prob', { style: 'color:var(--warn);font-size:12.5px;margin-top:6px' }, p)),
      r.status === 'new' && h('div.acts',
        h('button.btn.primary.small', { onclick: () => act({ action: 'accept', id: r.id, claim: draft.claim, label: draft.label }, (d) => `${r.id} is now ${d.factId}${d.cited.length ? `, cited on ${d.cited.join(', ')}` : ''}`) }, 'Accept as a fact'),
        h('button.btn.small', { onclick: () => { const why = prompt(`Why reject ${r.id}? (kept, so it is not filed again)`); if (why !== null) act({ action: 'reject', id: r.id, why }, `${r.id} rejected`); } }, 'Reject'),
        h('span.muted', { style: 'font-size:12.5px' }, 'Open the source and read it first. Accepting says you checked it today.')),
      r.status === 'rejected' && h('div.acts', h('button.btn.small', { onclick: () => act({ action: 'reopen', id: r.id }, `${r.id} is waiting again`) }, 'Reconsider')));
  };

  const list = rs.findings.filter((r) => r.status === researchUi.show);
  const stale = rs.stale.length > 0 && h('div.panel', h('h2', 'Facts to look at again'),
    h('p.hint', `Not checked in the last ${rs.maxAgeDays} days. Links rot and software changes. Open the source, and if it still holds, say so.`),
    h('div.rows', rs.stale.map((f) => h('div.row', h('span.tag', f.id), h('span.name', f.label), h('span.muted', f.checked ? `checked ${f.checked}` : 'never checked'),
      f.url && h('a', { href: f.url, target: '_blank', rel: 'noopener noreferrer', style: 'color:var(--accent);font-size:12.5px' }, 'open source'),
      h('button.btn.small', { onclick: () => act({ action: 'checked', factId: f.id }, `${f.id} checked today`) }, 'I checked it today')))));

  return [top, intro, ...list.map(card), !list.length && rs.findings.length > 0 && h('div.empty', researchUi.show === 'new' ? 'Nothing waiting. The inbox is empty.' : 'None.'), stale];
}

/* ------------------------------------------------------------------ Images
   images.json, read as data: every picture, where it came from, what rights are on
   record, the prompt that made it, and the pages that show it. */
const SOURCE_LABEL = { generated: 'Generated', own: 'Your own', licensed: 'Licensed', 'public-domain': 'Public domain' };

function viewImages() {
  const im = S.images;
  if (!im) return [h('div.empty', 'The images could not be read.')];
  const HINT = 'One shared "style" for the book, then one entry per file in images/: source, subject or prompt, and licence. Which page uses a picture is read from the pages, not written here.';
  const edit = guard(async () => {
    const draft = im.hasManifest ? null : (await api('POST', bookUrl('/images/draft'), {})).text;
    editSource('images', 'images.json', HINT, draft);
  });
  const regenerate = (name) => {
    if (!confirm(`Generate ${name} again?\n\nIt uses your image quota or API credit and replaces the file. The current picture is kept in images/.previous/.`)) return;
    run('images', { names: [name] });
  };

  const c = im.counts;
  const top = h('div.toolbar',
    h('span.muted', `${c.files} file${c.files === 1 ? '' : 's'} in images/: ${c.used} on a page, ${c.unused} unused`),
    h('span.grow'),
    h('button.btn', { onclick: edit }, im.hasManifest ? 'Edit images.json' : 'Create images.json'));

  const notices = [];
  if (im.parseError) notices.push(h('div.notice', h('b', 'images.json is not valid JSON. '), im.parseError));
  else if (!im.hasManifest && im.entries.length) notices.push(h('div.notice', h('b', 'No images.json. '), 'Nothing records where these pictures came from, what rights you hold, or how to make them again. Create it: the Studio drafts it from the folder, and leaves the licence for you to fill in.'));
  for (const e of im.shape.errors) notices.push(h('div.notice', h('b', 'images.json: '), e));

  const style = im.hasManifest && h('div.panel', h('h2', 'Shared style'),
    h('p.hint', 'Added to the end of every subject. Change it, regenerate, and the whole book’s photographs change together.'),
    im.style ? h('p.stylebox', im.style) : h('p.muted', { style: 'margin:0' }, 'None yet. Pictures with a whole "prompt" do not use it; pictures with a "subject" do.'));

  const cards = im.entries.map((e) => h('div.pic' + (e.problems.length ? '.bad' : ''),
    h('div.shot', e.exists ? h('img', { src: `/books/${S.slug}/images/${encodeURIComponent(e.name)}?v=${e.mtime}`, loading: 'lazy', alt: '' }) : 'No file yet'),
    h('div.body',
      h('div.nm', e.name),
      h('div.tags', { style: 'display:flex;gap:4px;flex-wrap:wrap' },
        e.entry ? h('span.tag', SOURCE_LABEL[e.entry.source] || e.entry.source) : im.hasManifest && h('span.tag.fail', 'not in images.json'),
        e.licence ? h('span.tag.pass', { title: e.licence }, e.licence.length > 28 ? e.licence.slice(0, 27) + '…' : e.licence) : e.entry && h('span.tag.warn', 'no licence'),
        e.entry?.credit && h('span.tag', e.entry.credit), e.entry?.generated && h('span.tag', e.entry.generated),
        e.exists && h('span.tag', `${Math.round(e.bytes / 1024)} KB`)),
      e.problems.map((x) => h('div.prob', x)),
      e.prompt && h('div.prompt', { title: 'Hover to read all of it' }, e.prompt),
      h('div.foot',
        h('span.muted', { style: 'font-size:12.5px' }, e.usedBy.length ? ['on ', e.usedBy.map((t, i) => [i > 0 && ', ', h('a', { href: '#', style: 'color:var(--accent);text-decoration:none', onclick: (ev) => { ev.preventDefault(); openViewer(t); } }, t)])] : 'no page shows it'),
        e.entry?.source === 'generated' && e.prompt && h('button.btn.small', { 'data-runs': true, onclick: () => regenerate(e.name) }, e.exists ? 'Regenerate' : 'Generate')))));

  return [top, ...notices, style, cards.length ? h('div.pics', cards) : h('div.empty', 'No pictures in this book. Most pages want a diagram, and a diagram is code.')];
}

/* ------------------------------------------------------------------ Structure */
function touch() { S.dirty = true; render(); }

function viewStructure() {
  const d = S.draft, b = S.book;
  const bind = (obj, key) => ({ value: obj[key] ?? '', oninput: (e) => { obj[key] = e.target.value; markDirty(); } });
  const markDirty = () => { if (!S.dirty) { S.dirty = true; $('#savebar-state').textContent = 'Unsaved changes'; document.querySelectorAll('.savebar .btn').forEach((x) => (x.disabled = false)); } };
  const tick = (key, label) => h('label.check', h('input', { type: 'checkbox', checked: d[key] !== false, onchange: (e) => { d[key] = e.target.checked; markDirty(); } }), label);
  d.cover ||= {}; d.copyright ||= {}; d.editions ||= {};

  const prune = (o) => {
    for (const [k, v] of Object.entries(o)) {
      if (v && typeof v === 'object' && !Array.isArray(v)) { prune(v); if (!Object.keys(v).length) delete o[k]; }
      else if (v === '' || v === null || (Array.isArray(v) && !v.length)) delete o[k];
    }
  };
  const save = guard(async () => {
    if (d.publishing) { prune(d.publishing); if (!Object.keys(d.publishing).length) delete d.publishing; }
    if (d.language === '') delete d.language;
    if (d.theme) { prune(d.theme); if (!Object.keys(d.theme).length) delete d.theme; }
    if (d.matter) {   // an empty field is not a key, and a book with no matter has no "matter"
      for (const k of ['front', 'back']) for (const m of d.matter[k] || []) { prune(m); if (m.editions && !m.editions.length) delete m.editions; }
      prune(d.matter); if (!Object.keys(d.matter).length) delete d.matter;
    }
    const state = await api('PUT', bookUrl('/json'), d);
    S.dirty = false; setBook(state); toast('book.json saved', true);
  });

  const savebar = h('div.savebar',
    h('button.btn.primary', { onclick: save, disabled: !S.dirty }, 'Save book.json'),
    h('button.btn.ghost', { disabled: !S.dirty, onclick: () => { S.dirty = false; S.draft = structuredClone(b.json); render(); } }, 'Discard'),
    h('span#savebar-state.muted', S.dirty ? 'Unsaved changes' : 'Reordering a book is a JSON edit, never HTML surgery.'));

  const details = h('div.panel', h('h2', 'Book details'), h('p.hint', 'Everything printed on the cover, the copyright page and the running feet.'),
    h('div.fields',
      h('label.f', 'Title', h('input', { type: 'text', ...bind(d, 'title') })),
      h('label.f', 'Author', h('input', { type: 'text', ...bind(d, 'author') })),
      h('label.f.span', 'Subtitle', h('input', { type: 'text', ...bind(d, 'subtitle') })),
      h('label.f', 'Series (page eyebrow)', h('input', { type: 'text', ...bind(d, 'series') })),
      h('label.f', 'Brand (page foot)', h('input', { type: 'text', ...bind(d, 'brand') })),
      h('label.f', 'Edition label', h('input', { type: 'text', ...bind(d, 'editionLabel') })),
      h('label.f', 'What you call a page', h('input', { type: 'text', ...bind(d, 'unit') })),
      h('label.f', 'Cover kicker', h('input', { type: 'text', ...bind(d.cover, 'kicker') })),
      h('label.f', 'Cover note', h('input', { type: 'text', ...bind(d.cover, 'note') })),
      h('label.f.span', 'Rights line', h('input', { type: 'text', ...bind(d.copyright, 'rights') })),
      h('label.f.span', 'Copyright page lines (one per line)',
        h('textarea', { rows: 3, value: (d.copyright.lines || []).join('\n'), oninput: (e) => { d.copyright.lines = e.target.value.split('\n').map((s) => s.trim()).filter(Boolean); markDirty(); } })),
      ),
    h('div', { style: 'display:flex;gap:18px;margin-top:14px;flex-wrap:wrap' }, tick('numbered', 'Number the pages (No. 01)'), tick('contents', 'Contents'), tick('index', 'Index')));

  /* ---- parts */
  const written = new Set(b.pages.map((p) => p.title));
  const listed = new Set(d.parts.flatMap((p) => p.blocks));
  const unplaced = b.pages.map((p) => p.title).filter((t) => !listed.has(t));
  const move = (arr, i, by) => { const j = i + by; if (j < 0 || j >= arr.length) return; [arr[i], arr[j]] = [arr[j], arr[i]]; touch(); };

  const partEl = (p, pi) => h('div.part',
    h('div.part-top', h('span.n', String(pi + 1)),
      h('input', { type: 'text', placeholder: 'Part name', ...bind(p, 'name') }),
      h('button.btn.small', { onclick: () => move(d.parts, pi, -1), disabled: pi === 0, 'aria-label': 'Move part up' }, '↑'),
      h('button.btn.small', { onclick: () => move(d.parts, pi, 1), disabled: pi === d.parts.length - 1, 'aria-label': 'Move part down' }, '↓'),
      h('button.btn.small.danger', { disabled: p.blocks.length > 0 || d.parts.length === 1, title: p.blocks.length ? 'Move its pages out first' : 'Remove this part',
        onclick: () => { d.parts.splice(pi, 1); touch(); } }, 'Remove')),
    h('div.fields',
      h('label.f', 'Eyebrow', h('input', { type: 'text', ...bind(p, 'eyebrow') })),
      h('label.f', 'Why these pages belong together', h('input', { type: 'text', ...bind(p, 'why') }))),
    h('div.rows', p.blocks.length ? p.blocks.map((t, i) =>
      h('div.row' + (written.has(t) ? '' : '.missing'),
        h('span.muted', { style: 'width:22px;font-variant-numeric:tabular-nums' }, String(i + 1)),
        h('span.name', { title: t }, t, !written.has(t) && ' (not written)'),
        h('select', { 'aria-label': 'Move to part', onchange: (e) => { p.blocks.splice(i, 1); d.parts[+e.target.value].blocks.push(t); touch(); } },
          d.parts.map((q, qi) => h('option', { value: String(qi), selected: qi === pi }, `Part ${qi + 1}`))),
        h('button.btn.small', { onclick: () => move(p.blocks, i, -1), disabled: i === 0, 'aria-label': 'Move up' }, '↑'),
        h('button.btn.small', { onclick: () => move(p.blocks, i, 1), disabled: i === p.blocks.length - 1, 'aria-label': 'Move down' }, '↓'),
        h('button.btn.small', { title: 'Take it out of the book. The page stays in the interior.', onclick: () => {
          p.blocks.splice(i, 1);
          for (const k of Object.keys(d.editions)) d.editions[k] = d.editions[k].filter((x) => x !== t);
          touch();
        } }, 'Take out')))
      : h('div.muted', { style: 'padding:6px 8px' }, 'No pages in this part yet.')));

  const order = h('div.panel', h('h2', 'Running order'), h('p.hint', 'Parts and the pages in them, in reading order. Every part gets a divider page.'),
    d.parts.map(partEl),
    h('button.btn', { style: 'margin-top:12px', onclick: () => { d.parts.push({ name: 'New part', eyebrow: '', why: '', blocks: [] }); touch(); } }, '+ Add part'),
    unplaced.length > 0 && h('div.part', h('div.v-label', 'Written, but not in the book'),
      h('div.rows', unplaced.map((t) => h('div.row', h('span.name', t),
        h('select', { 'aria-label': 'Add to part', onchange: (e) => { if (e.target.value === '') return; d.parts[+e.target.value].blocks.push(t); touch(); } },
          h('option', { value: '' }, 'Add to…'), d.parts.map((q, qi) => h('option', { value: String(qi) }, `Part ${qi + 1} · ${q.name}`))))))));

  /* ---- editions */
  const names = Object.keys(d.editions);
  const all = d.parts.flatMap((p) => p.blocks);
  const editions = h('div.panel', h('h2', 'Editions'), h('p.hint', 'The same pages cut into different books: a free sample, a short edition. The full book is always available.'),
    names.length ? h('div.scroll-x', h('table.matrix',
      h('thead', h('tr', h('th', 'Page'), names.map((n) => h('th', n, ' ', h('span.muted', `(${d.editions[n].length})`), ' ',
        h('button.btn.small.danger', { onclick: () => { if (confirm(`Remove the "${n}" edition?`)) { delete d.editions[n]; touch(); } } }, '×'))))),
      h('tbody', all.map((t) => h('tr', h('td', t), names.map((n) => h('td',
        h('input', { type: 'checkbox', 'aria-label': `${t} in ${n}`, checked: d.editions[n].includes(t), onchange: (e) => {
          const set = new Set(d.editions[n]); e.target.checked ? set.add(t) : set.delete(t);
          d.editions[n] = all.filter((x) => set.has(x)); touch();
        } })))))))) : h('div.muted', 'No editions yet.'),
    h('button.btn', { style: 'margin-top:12px', onclick: () => {
      const n = (prompt('Edition name (lowercase, e.g. free):') || '').trim().toLowerCase();
      if (!n) return;
      if (!/^[a-z0-9][a-z0-9-]*$/.test(n) || n === 'full' || n === 'all' || d.editions[n]) return toast('Pick a new lowercase name. "full" and "all" are reserved.');
      d.editions[n] = []; touch();
    } }, '+ Add edition'));

  /* ---- publishing: what a store asks for. Empty values are dropped on save, so a book
     that is not for sale keeps a clean book.json. */
  const pub = (d.publishing ||= {});
  pub.isbn ||= {}; pub.editions ||= {};
  const counter = (el, max, read) => { const c = h('span.muted', { style: 'font-size:12px' }); const upd = () => { const n = read(); c.textContent = `${n} / ${max}`; c.style.color = n > max ? 'var(--fail)' : ''; }; el.addEventListener('input', upd); upd(); return c; };
  const isbnOk = (v) => { const x = v.replace(/[-\s]/g, ''); return /^97[89]\d{10}$/.test(x) && [...x].reduce((n, c, i) => n + c * (i % 2 ? 3 : 1), 0) % 10 === 0; };
  const isbnField = (label, obj, key) => {
    const mark = h('span', { style: 'font-size:12px' });
    const upd = () => { const v = obj[key] || ''; mark.textContent = !v ? '' : isbnOk(v) ? '✓ check digit ok' : '✗ not a valid ISBN-13'; mark.style.color = !v || isbnOk(v) ? 'var(--pass)' : 'var(--fail)'; };
    const input = h('input', { type: 'text', placeholder: '978-…', value: obj[key] || '', oninput: (e) => { obj[key] = e.target.value.trim(); upd(); markDirty(); } });
    upd();
    return h('label.f', label, input, mark);
  };
  const desc = h('textarea', { rows: 6, value: pub.description || '', placeholder: 'The blurb a store shows. Who it is for, what they will be able to do, why this book.', oninput: (e) => { pub.description = e.target.value; markDirty(); } });
  const kw = h('input', { type: 'text', value: (pub.keywords || []).join(', '), placeholder: 'ssrf, web security for beginners, …', oninput: (e) => { pub.keywords = e.target.value.split(',').map((x) => x.trim()).filter(Boolean); markDirty(); } });
  pub.price ||= null;
  const priceOf = () => (pub.price ||= { amount: 0, currency: 'USD' });

  const publishing = h('div.panel', h('h2', 'Publishing'),
    h('p.hint', 'What a store listing asks for. None of it is printed in the book: it goes into the EPUB’s metadata and into a listing sheet in every release. Leave it empty for a PDF you hand out.'),
    h('div.fields',
      h('label.f', 'Language (BCP 47: en, en-GB, ar)', h('input', { type: 'text', ...bind(d, 'language'), placeholder: 'en' })),
      h('label.f', 'Publisher / imprint', h('input', { type: 'text', ...bind(pub, 'publisher'), placeholder: d.brand || '' })),
      h('label.f', 'Publication date', h('input', { type: 'date', value: pub.published || '', oninput: (e) => { pub.published = e.target.value; markDirty(); } })),
      h('label.f', 'Audience', h('input', { type: 'text', ...bind(pub, 'audience'), placeholder: 'Builders shipping their first app' })),
      h('label.f.span', h('span', { style: 'display:flex;justify-content:space-between' }, 'Description', counter(desc, 4000, () => desc.value.length)), desc),
      h('label.f.span', h('span', { style: 'display:flex;justify-content:space-between' }, 'Keywords, comma separated', counter(kw, 7, () => kw.value.split(',').filter((x) => x.trim()).length)), kw),
      h('label.f.span', 'Categories, one per line (BISAC code or the store’s path)',
        h('textarea', { rows: 3, value: (pub.categories || []).join('\n'), placeholder: 'COM053000\nComputers / Security / General', oninput: (e) => { pub.categories = e.target.value.split('\n').map((x) => x.trim()).filter(Boolean); markDirty(); } })),
      h('label.f', 'Price', h('input', { type: 'number', min: '0', step: '0.01', value: pub.price ? String(pub.price.amount) : '', placeholder: '9.99',
        oninput: (e) => { if (e.target.value === '') pub.price = null; else priceOf().amount = Number(e.target.value); markDirty(); } })),
      h('label.f', 'Currency (ISO 4217)', h('input', { type: 'text', maxLength: 3, value: pub.price?.currency || 'USD', oninput: (e) => { if (pub.price) pub.price.currency = e.target.value.toUpperCase(); markDirty(); } })),
      isbnField('ISBN, print', pub.isbn, 'print'), isbnField('ISBN, EPUB', pub.isbn, 'epub'), isbnField('ISBN, PDF', pub.isbn, 'pdf')),
    names.length > 0 && h('div', { style: 'margin-top:16px' }, h('div.v-label', 'Per edition'),
      h('p.hint', 'An edition never inherits the full book’s ISBN. A different set of pages is a different product.'),
      names.map((n) => { const e = (pub.editions[n] ||= {}); e.isbn ||= {};
        return h('div.part', h('div.part-top', h('b', n)), h('div.fields', isbnField('ISBN, print', e.isbn, 'print'), isbnField('ISBN, EPUB', e.isbn, 'epub'),
          h('label.f.span', 'Description, if it differs', h('textarea', { rows: 2, value: e.description || '', oninput: (ev) => { e.description = ev.target.value; markDirty(); } })))); })));

  /* ---- colours. Pages are written in the studio palette; the build repaints the book. */
  const STUDIO = { accent: '#6366F1', accentStrong: '#4F46E5', signal: '#0D9488', danger: '#DC2626', warn: '#B45309', ink: '#1A1A2E', muted: '#5B6472', line: '#E7E9EF', surface: '#FAFAFC', card: '#FFFFFF' };
  const ROLE = { accent: 'Accent: the mechanism being taught', accentStrong: 'Accent as text (worked out if left alone)', signal: 'Signal: the good outcome', danger: 'Danger: the threat or mistake',
    warn: 'Warn: the thing worth protecting', ink: 'Ink: text', muted: 'Muted: quiet text', line: 'Line: rules and borders', surface: 'Surface: the page', card: 'Card: the explainer, neutral diagram cards' };
  const th = (d.theme ||= {});
  const home = (k) => (k === 'accent' || k === 'accentStrong' ? d : th);
  const rgbOf = (x) => [1, 3, 5].map((i) => parseInt(x.slice(i, i + 2), 16));
  const mixOf = (a, b, n) => '#' + rgbOf(a).map((v, i) => Math.round(rgbOf(b)[i] + (v - rgbOf(b)[i]) * n).toString(16).padStart(2, '0')).join('');
  const lumOf = (x) => { const [r, g, b2] = rgbOf(x).map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }); return 0.2126 * r + 0.7152 * g + 0.0722 * b2; };
  const ratio = (a, b) => { const [hi, lo] = [lumOf(a), lumOf(b)].sort((x, y) => y - x); return (hi + 0.05) / (lo + 0.05); };
  const now = () => { const t = { ...STUDIO }; for (const k of Object.keys(STUDIO)) if (/^#[0-9a-f]{6}$/i.test(home(k)[k] || '')) t[k] = home(k)[k];
    if (t.accent !== STUDIO.accent && !d.accentStrong) t.accentStrong = mixOf(t.ink, t.accent, 0.22); return t; };
  const preview = h('div.swatch');
  const paint = () => {
    const t = now(), c = ratio(t.ink, t.surface);
    const box = (role, label) => h('span', { style: `background:${mixOf(t[role], t.card, 0.1)};border:1px solid ${mixOf(t[role], t.card, 0.27)};color:${role === 'accent' ? t.accentStrong : t[role]};padding:5px 10px;border-radius:8px;font-weight:600;font-size:12.5px` }, label);
    preview.replaceChildren(h('div', { style: `background:${t.surface};color:${t.ink};border:1px solid ${t.line};border-radius:12px;padding:16px 18px` },
      h('div', { style: `width:44px;height:6px;border-radius:99px;background:${t.accent}` }),
      h('div', { style: `font:600 22px "Space Grotesk",sans-serif;margin-top:10px` }, d.title || 'Title'),
      h('div', { style: `color:${t.muted};font-size:13.5px` }, 'The subtitle, the eyebrow and the foot are muted.'),
      h('div', { style: 'display:flex;gap:8px;flex-wrap:wrap;margin:12px 0' }, box('accent', 'Mechanism'), box('signal', 'Good'), box('danger', 'Threat'), box('warn', 'Protected')),
      h('div', { style: `background:${t.card};border:1px solid ${t.line};border-radius:10px;padding:12px 14px;font-size:14px;line-height:1.55` },
        'Plain words, ', h('b', { style: `color:${t.danger}` }, 'the problem'), ', ', h('b', { style: `color:${t.accentStrong}` }, 'the idea'), ' and ', h('b', { style: `color:${t.signal}` }, 'the good outcome'), '.')),
      h('p.hint', { style: `margin:8px 0 0;color:${c < 4.5 ? 'var(--fail)' : ''}` }, `Text on the page: ${c.toFixed(1)}:1${c < 4.5 ? '. Under 4.5:1 it cannot be read, and preflight will fail it.' : '.'}`));
  };
  const colour = (k) => {
    const o = home(k), input = h('input', { type: 'color', value: o[k] || now()[k], oninput: (e) => { o[k] = e.target.value.toUpperCase(); mark.textContent = o[k]; markDirty(); paint(); } });
    const mark = h('span.muted', { style: 'font:12px var(--mono)' }, o[k] || 'studio');
    return h('label.f', ROLE[k], h('span', { style: 'display:flex;gap:8px;align-items:center' }, input, mark,
      h('button.btn.small', { type: 'button', title: 'Back to the studio colour', onclick: (e) => { e.preventDefault(); delete o[k]; touch(); } }, 'Reset')));
  };
  paint();
  const colours = h('div.panel', h('h2', 'Colours'),
    h('p.hint', 'The book’s own palette. Pages and diagrams are still written in the studio colours; the build repaints the finished book, diagrams included. The roles never change, only what they look like.'),
    h('div', { style: 'display:grid;grid-template-columns:minmax(0,1fr) minmax(260px,340px);gap:20px;align-items:start' },
      h('div.fields', Object.keys(STUDIO).map(colour)), preview),
    h('button.btn', { style: 'margin-top:12px', onclick: () => { delete d.accent; delete d.accentStrong; d.theme = {}; touch(); } }, 'Back to the studio palette'));

  /* ---- front and back matter: the pages around the pages */
  const mt = (d.matter ||= {});
  const KIND_LABEL = { dedication: 'Dedication', epigraph: 'Epigraph', prose: 'Prose page', list: 'List', sources: 'Sources (from FACTS.md)', glossary: 'Glossary (from GLOSSARY.md)' };
  const STARTER = { dedication: { kind: 'dedication', body: [] }, epigraph: { kind: 'epigraph', body: [], by: '' }, prose: { kind: 'prose', title: '', body: [] },
    list: { kind: 'list', title: '', items: [] }, sources: { kind: 'sources' }, glossary: { kind: 'glossary' } };
  const matterItem = (list, m, i) => {
    const perLine = m.kind === 'dedication';
    const inToc = m.toc === undefined ? !['dedication', 'epigraph'].includes(m.kind) : m.toc;
    const only = new Set(m.editions || []);
    return h('div.part',
      h('div.part-top', h('span.tag', KIND_LABEL[m.kind] || m.kind),
        m.kind !== 'dedication' && m.kind !== 'epigraph'
          ? h('input', { type: 'text', placeholder: m.kind === 'sources' ? 'Sources' : m.kind === 'glossary' ? 'Glossary' : 'Heading: Preface, About the author, …', ...bind(m, 'title') }) : h('span.grow'),
        h('button.btn.small', { onclick: () => move(list, i, -1), disabled: i === 0, 'aria-label': 'Move up' }, '↑'),
        h('button.btn.small', { onclick: () => move(list, i, 1), disabled: i === list.length - 1, 'aria-label': 'Move down' }, '↓'),
        h('button.btn.small.danger', { onclick: () => { if (confirm('Remove this page?')) { list.splice(i, 1); touch(); } } }, 'Remove')),
      h('div.fields',
        h('label.f.span', m.kind === 'sources' || m.kind === 'glossary' ? 'A line above the list, if you want one' : m.kind === 'list' ? 'A line above the list, if you want one' : perLine ? 'The words, one line per line' : 'The words. A blank line starts a paragraph; a paragraph starting with ## is a subheading; **bold** and *italic* work',
          h('textarea', { rows: m.kind === 'prose' ? 9 : 3, value: (m.body || []).join(perLine ? '\n' : '\n\n'),
            oninput: (e) => { m.body = e.target.value.split(perLine ? '\n' : /\n\s*\n/).map((x) => x.trim()).filter(Boolean); markDirty(); } })),
        m.kind === 'list' && h('label.f.span', 'Items, one per line:  Name | a note about it',
          h('textarea', { rows: 5, value: (m.items || []).map((it) => (it.note ? `${it.name} | ${it.note}` : it.name)).join('\n'),
            oninput: (e) => { m.items = e.target.value.split('\n').map((x) => x.trim()).filter(Boolean).map((x) => { const [name, ...rest] = x.split('|'); const note = rest.join('|').trim(); return note ? { name: name.trim(), note } : { name: name.trim() }; }).filter((it) => it.name); markDirty(); } })),
        (m.kind === 'epigraph' || m.kind === 'prose') && h('label.f', m.kind === 'epigraph' ? 'Who said it' : 'Signed (optional)', h('input', { type: 'text', ...bind(m, 'by') }))),
      m.kind === 'glossary' && h('p.hint', { style: 'margin:10px 0 0' }, 'Nothing to write here. It prints every term in GLOSSARY.md that a page in the book uses, with what it means and the pages that use it. ',
        h('a', { href: '#', style: 'color:var(--accent)', onclick: (e) => { e.preventDefault(); editSource('glossary', 'GLOSSARY.md', 'One ## heading per term, then a Means line and an optional Also line. Which pages use a term is read from the pages.', '# Glossary\n\nThe words this book uses in its own way. A "glossary" page in book.json prints the ones a page\nactually uses, with the pages that use them. Write only what you mean by the word.\n\n## A term\n- **Means:** What you mean by it, in a sentence or two.\n- **Also:** other spellings, plurals, the long form\n'); } }, 'Edit GLOSSARY.md')),
      m.kind === 'sources' && h('p.hint', { style: 'margin:10px 0 0' }, 'Nothing to write. It lists every fact in FACTS.md that a page in the book cites, with its source and the page that uses it.'),
      h('div', { style: 'display:flex;gap:16px;margin-top:10px;flex-wrap:wrap;align-items:center' },
        h('label.check', h('input', { type: 'checkbox', checked: inToc, onchange: (e) => { m.toc = e.target.checked; markDirty(); } }), 'List in the contents'),
        names.length > 0 && h('span.muted', { style: 'font-size:12.5px' }, 'Only in:'),
        names.length > 0 && ['full', ...names].map((n) => h('label.check', h('input', { type: 'checkbox', checked: only.has(n), onchange: (e) => {
          e.target.checked ? only.add(n) : only.delete(n); m.editions = ['full', ...names].filter((x) => only.has(x)); markDirty(); } }), n)),
        names.length > 0 && h('span.muted', { style: 'font-size:12.5px' }, '(none ticked: every edition)')));
  };
  const matterList = (key, title, hint) => {
    const list = (mt[key] ||= []);
    return h('div', { style: 'margin-top:14px' }, h('div.v-label', title), h('p.hint', hint),
      list.map((m, i) => matterItem(list, m, i)),
      h('div', { style: 'display:flex;gap:6px;flex-wrap:wrap;margin-top:10px' },
        Object.keys(STARTER).filter((k) => key === 'front' || (k !== 'dedication' && k !== 'epigraph'))
          .map((k) => h('button.btn.small', { onclick: () => { list.push(structuredClone(STARTER[k])); touch(); } }, `+ ${KIND_LABEL[k].replace(/ \(from .*\)/, '')}`))));
  };
  const matter = h('div.panel', h('h2', 'Front and back matter'),
    h('p.hint', 'The pages around your pages. They take real page numbers, and the contents and the index are renumbered to match. Long prose continues onto another sheet by itself. Write only what is true: nobody invents a dedication or a biography for you.'),
    matterList('front', 'Front', 'A dedication and an epigraph go before the contents. Everything else comes after it, before Part 1.'),
    matterList('back', 'Back', 'After the last page, before the index.'));

  return [savebar, details, colours, order, matter, editions, publishing];
}

/* ------------------------------------------------------------------ Preflight */
function viewPreflight() {
  const pre = S.book.preflight;
  const runBtn = h('button.btn.primary', { 'data-runs': true, onclick: () => run('preflight') }, pre ? 'Run preflight again' : 'Run preflight');
  if (!pre) return [h('div.panel', h('h2', 'Preflight has not run'), h('p.hint', 'The checks between a book that builds and a book that is ready to ship: details, book.json, publishing, running order, plan, facts, image rights, research, front and back matter, references, theme, stale build, overflow, images, print resolution, fonts, diagram labels, network, alt text, print limits, and review.'), runBtn)];
  const word = { pass: 'Ready to release', warn: 'Ready, with warnings', fail: 'Not ready' }[pre.result];
  return [
    h('div.verdict', h('span.tag.' + pre.result, pre.result.toUpperCase()), h('span.big', word),
      h('span.muted', `${new Date(pre.at).toLocaleString()}${S.book.preflightStale ? ' · source changed since' : ''}`), h('span', { style: 'flex:1' }), runBtn),
    S.book.preflightStale && h('div.notice', h('b', 'This report is out of date. '), 'The book changed after it ran.'),
    h('div.checks', pre.checks.map((c) => h('div.chk.' + c.level,
      h('div.top', h('span.lbl', c.label), h('span.msg', c.message), h('span.tag.' + c.level, c.level)),
      c.details.length > 0 && h('ul', c.details.map((x) => h('li', x)))))),
  ];
}

/* ------------------------------------------------------------------ Release */
function viewRelease() {
  const b = S.book, o = S.release, rv = b.review;
  const names = ['full', ...Object.keys(b.json.editions || {})];
  o.editions = o.editions.filter((e) => names.includes(e));
  const opt = (key, label, hint) => h('label.check', { title: hint }, h('input', { type: 'checkbox', checked: o[key], onchange: (e) => { o[key] = e.target.checked; render(); } }), label);

  const blockers = [];
  if (b.preflight?.result === 'fail' && !b.preflightStale) blockers.push(`Preflight has ${b.preflight.fails} failing check(s).`);
  if (o.strict && rv.approved < rv.total) blockers.push(`${rv.total - rv.approved} page(s) are not approved, and "require approval" is on.`);

  const form = h('div.panel', h('h2', 'Cut a release'),
    h('p.hint', 'Builds fresh, runs preflight, and only then writes PDFs into a new dated folder under dist/. Nothing is ever overwritten.'),
    h('div.v-label', 'Editions'),
    h('div', { style: 'display:flex;gap:16px;flex-wrap:wrap;margin-bottom:14px' }, names.map((n) =>
      h('label.check', h('input', { type: 'checkbox', checked: o.editions.includes(n), onchange: (e) => {
        o.editions = e.target.checked ? [...o.editions, n] : o.editions.filter((x) => x !== n); render();
      } }), n === 'full' ? 'Full book' : n))),
    h('div.fields',
      h('label.f', 'Print PDF with bleed', h('select', { onchange: (e) => { o.bleed = Number(e.target.value); } },
        [[0, 'No print file'], [3, '3 mm (KDP, most printers)'], [3.2, '3.2 mm (0.125 in exactly)'], [5, '5 mm']].map(([v, l]) => h('option', { value: String(v), selected: o.bleed === v }, l))))),
    h('div', { style: 'display:flex;gap:18px;flex-wrap:wrap;margin:14px 0' },
      opt('strict', 'Require every page approved', 'Unapproved pages fail preflight instead of warning'),
      opt('epub', 'EPUB (fixed layout)', 'The same pages as an ebook, for Apple Books, Kobo, Google Play and Kindle'),
      opt('proofs', 'Include page proofs (PNG)', 'One PNG per page next to the PDF'),
      opt('force', 'Ship despite failing checks', 'The manifest records that it was forced')),
    blockers.length > 0 && h('div.notice', h('b', o.force ? 'Forcing past: ' : 'This release will stop: '), blockers.join(' ')),
    h('button.btn.primary', { 'data-runs': true, disabled: !o.editions.length, onclick: () => run('release', o) }, 'Run release'));

  const list = h('div.panel', h('h2', 'Releases'), h('p.hint', `books/${S.slug}/dist/`),
    b.releases.length ? b.releases.map((r) => {
      const m = r.manifest;
      return h('div.rel',
        h('div.rel-top', h('b', m.label || r.folder), h('span.muted', new Date(m.released).toLocaleString()),
          m.commit && h('span.tag', `${m.commit}${m.dirty ? ' + uncommitted' : ''}`), m.bleedMm > 0 && h('span.tag', `${m.bleedMm} mm bleed`), m.epub && h('span.tag', 'epub'),
          m.forced && h('span.tag.fail', 'forced')),
        h('div.files', m.editions.flatMap((e) => e.files.map((f) =>
          h('div.file', h('a', { href: `/books/${S.slug}/dist/${encodeURIComponent(r.folder)}/${encodeURIComponent(f.file)}`, target: '_blank', rel: 'noopener' }, f.file),
            h('span.muted', `${e.pages} pages · ${(f.bytes / 1048576).toFixed(1)} MB`), h('span.tag.' + e.preflight, `preflight ${e.preflight}`),
            h('code', { title: 'sha256' }, f.sha256.slice(0, 12)))))));
    }) : h('div.muted', 'Nothing released yet.'));
  return [form, list];
}

/* ------------------------------------------------------------------ share on tailnet
   The Studio listens in one place at a time. Flipping this moves it, so the page you are
   on stops answering; we go to the new address ourselves. */
const T = { state: null, busy: false };

async function loadTailnet() {
  try { T.state = await api('GET', '/api/tailnet'); } catch { T.state = null; }
  renderTailnet();
}

function renderTailnet() {
  const box = $('#tailnet'), t = T.state;
  if (!t) return box.replaceChildren();
  const flip = guard(async () => {
    if (S.dirty) return toast('Save or discard your structure changes first.');
    if (S.job) return toast('Wait for the running job to finish.');
    const ask = t.on
      ? 'Take the Studio off the tailnet?\n\nIt will answer on localhost only, and your other devices lose it straight away.'
      : 'Move the Studio onto your tailnet?\n\nIt will answer on this machine\'s Tailscale address ONLY, no longer on localhost, and this page will reopen there.';
    if (!confirm(ask)) return;
    T.busy = true; renderTailnet();
    try {
      const r = await api('POST', '/api/tailnet', { on: !t.on });
      if (r.moved) { location.href = r.url + '/' + location.hash; return; }
      T.state = r;
    } finally { T.busy = false; renderTailnet(); }
  });
  const copy = (text) => () => (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject())
    .then(() => toast('Copied', true), () => toast('Select it and copy by hand.'));
  const fix = t.hint && [
    h('code', t.hint),
    h('div.row2', /^https:/.test(t.hint)
      ? h('a.btn.small', { href: t.hint, target: '_blank', rel: 'noopener' }, 'Open admin console')
      : h('button.btn.small', { onclick: copy(t.hint) }, 'Copy command')),
  ];

  box.replaceChildren(h('div.tn',
    h('div.tn-top',
      h('span.dot' + (t.on ? (t.tls ? '.approved' : '.changed') : t.error ? '.changed' : '')),
      h('span.t', 'Share on tailnet'),
      h('button.switch', { role: 'switch', 'aria-checked': String(t.on), 'aria-label': 'Share on tailnet',
        disabled: T.busy || !t.canChange, onclick: flip, title: t.canChange ? '' : 'Only at the machine itself' })),
    T.busy ? h('p', t.on ? 'Moving back to localhost…' : 'Moving to the Tailscale address. A first certificate takes about half a minute.')
      : t.on ? [
          h('p', h('a', { href: t.url }, t.url)),
          t.ipUrl && h('p', 'or ', h('a', { href: t.ipUrl }, t.ipUrl)),
          h('div.row2', h('button.btn.small', { onclick: copy(t.url) }, 'Copy link')),
          h('p', t.tls ? 'On the Tailscale address only. Not on localhost, not on your LAN. HTTPS by name, plain HTTP by address.'
            : 'Plain HTTP, on the Tailscale address only. The tailnet itself is encrypted. ' + (t.note || '')),
          !t.tls && fix,
          !t.tls && t.hint && h('p', /^https:/.test(t.hint) ? 'Turn it on, then restart the Studio for HTTPS.' : 'Run it once in a terminal on this machine, then restart the Studio for HTTPS.'),
          !t.canChange && h('p', 'Only the machine itself can take it off the tailnet.'),
          t.pinned && t.canChange && h('p', 'Started with --host tailscale, so it comes back here on every start.')]
      : t.error ? [h('p.err', t.error), fix]
      : h('p', 'Move the Studio onto this machine\'s Tailscale address, so your phone or another computer can open it. It leaves localhost while it is there.')));
}

/* ------------------------------------------------------------------ start */
$('#new-book').onclick = newBookDialog;
$('#run-proof').dataset.runs = '1';
$('#run-proof').onclick = () => run('proof');
$('#log-toggle').onclick = () => $('#log').classList.toggle('closed');
$('#viewer').addEventListener('close', () => { viewer.title = null; viewer.editing = false; });
/* On the document, not the dialog: re-rendering the viewer removes whatever had focus,
   and focus falls back to <body>, outside the dialog's own key events. */
document.addEventListener('keydown', (e) => { if ($('#viewer').open && viewer.keys) viewer.keys(e); });
document.querySelectorAll('#tabs button').forEach((b) => (b.onclick = () => {
  if (S.dirty && S.tab === 'structure' && !confirm('Leave with unsaved structure changes? They are kept until you discard them.')) return;
  S.tab = b.dataset.tab; render();
}));
window.addEventListener('beforeunload', (e) => { if (S.dirty) e.preventDefault(); });

connect();
loadTailnet();
await loadBooks();
const wanted = location.hash.slice(1);
const first = S.books.find((b) => b.slug === wanted) || S.books.find((b) => b.slug !== 'starter') || S.books[0];
if (first) await openBook(first.slug); else render();
