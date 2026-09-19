/* ==========================================================================
   lib/research.mjs  -  the research inbox: findings waiting for the author
   --------------------------------------------------------------------------
   FACTS.md is what the author knows. Nothing gets in there by itself. What a
   search turns up lands in books/<slug>/RESEARCH.md instead:

       ## R3 · Row-level security roles
       - **Claim:** One plain sentence, in your own words.
       - **Source:** Microsoft Learn, "Row-level security (RLS) with Power BI": https://…
       - **Quote:** "the few words on that page that say so"
       - **Kind:** reference
       - **Retrieved:** 2026-09-19
       - **For:** Row-level security
       - **Status:** new

   The author reads each one and accepts it (it becomes the next fact in
   FACTS.md, checked today, and is cited on the Facts line of the page it was
   for) or rejects it (it stays here, with the reason, so nobody files it
   again). The Quote is there to CHECK the claim against the page. It is never
   printed: a book states facts in its own words.
   ========================================================================== */
import fs from 'node:fs';
import path from 'node:path';
import { parseFacts, parseBlocks } from './plan.mjs';

const noComments = (md) => md.replace(/<!--[\s\S]*?-->/g, (m) => m.replace(/[^\n]/g, ' '));
const field = (body, name) => {
  const m = body.match(new RegExp(`\\*\\*${name}:\\*\\*([\\s\\S]*?)(?=\\n\\s*-\\s+\\*\\*|\\n\\s*\\n|\\n\\s*-{3,}|$)`));
  return m ? m[1].replace(/\s+/g, ' ').trim() : '';
};
const one = (s) => String(s ?? '').replace(/\s+/g, ' ').trim();
export const today = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };
export const urlIn = (s) => (String(s).match(/https?:\/\/[^\s<>"')\]]+/) || [''])[0].replace(/[.,;]+$/, '');
const KINDS = ['reference', 'experience', 'measurement', 'quote'];

const files = (dir) => ({ research: path.join(dir, 'RESEARCH.md'), facts: path.join(dir, 'FACTS.md'), blocks: path.join(dir, 'blocks.md') });
const read = (f) => (fs.existsSync(f) ? fs.readFileSync(f, 'utf8').replace(/\r\n/g, '\n') : '');
const write = (f, text) => fs.writeFileSync(f, text.replace(/\s*$/, '\n'));

const HEADER = `# Research

Findings waiting for you. A search, or the \`/research\` skill, files them here. Nothing in
this file is in the book and nothing here can be cited by a page. Read each one, open its
source, and then accept it (it becomes a fact in \`FACTS.md\`, checked today) or reject it.

The **Quote** is the few words on the source page that back the claim, so you can check it
in seconds. It is never printed: the book says things in its own words.

    node engine/tools/research.mjs books/<slug>                 the inbox
    node engine/tools/research.mjs books/<slug> --verify        is each quote really on its page?
    node engine/tools/research.mjs books/<slug> --accept R3
    node engine/tools/research.mjs books/<slug> --reject R3 --why "out of date"

---
`;

export function parseResearch(md) {
  const text = noComments(md);
  const heads = [...text.matchAll(/^##\s+(R\d+)\s*(?:[·:.\-]\s*(.*))?$/gim)];
  return heads.map((h, i) => {
    const body = text.slice(h.index + h[0].length, i + 1 < heads.length ? heads[i + 1].index : text.length);
    const status = field(body, 'Status').toLowerCase() || 'new';
    return {
      id: h[1].toUpperCase(), label: one(h[2]), claim: field(body, 'Claim'), source: field(body, 'Source'),
      quote: field(body, 'Quote').replace(/^["“]|["”]$/g, ''), kind: field(body, 'Kind').toLowerCase() || 'reference',
      retrieved: field(body, 'Retrieved'), verified: field(body, 'Verified'), why: field(body, 'Why'),
      for: field(body, 'For').split(/\s*[;|]\s*/).map(one).filter(Boolean),
      status: status.startsWith('accepted') ? 'accepted' : status.startsWith('rejected') ? 'rejected' : 'new',
      factId: (status.match(/\bF\d+\b/i) || [''])[0].toUpperCase(),
    };
  });
}

const daysSince = (date) => (/^\d{4}-\d{2}-\d{2}$/.test(date) ? Math.floor((Date.now() - new Date(date + 'T00:00:00').getTime()) / 864e5) : null);

/* The inbox, and how fresh the facts already accepted are. */
export function loadResearch(dir, { maxAgeDays = 365 } = {}) {
  const f = files(dir);
  const findings = parseResearch(read(f.research));
  const facts = parseFacts(read(f.facts));
  const planned = new Set(parseBlocks(read(f.blocks)).flatMap((p) => p.blocks.map((b) => b.title)));
  const knownUrls = new Map(facts.map((x) => [urlIn(x.source), x.id]).filter(([u]) => u));
  for (const r of findings) {
    r.url = urlIn(r.source);
    r.problems = [];
    if (!r.claim) r.problems.push('no Claim');
    if (!r.source) r.problems.push('no Source, so it cannot be checked');
    if (r.kind === 'reference' && r.source && !r.url) r.problems.push('a reference with no link');
    if (r.status === 'new' && r.url && knownUrls.has(r.url)) r.problems.push(`${knownUrls.get(r.url)} in FACTS.md already cites this page: is this the same fact?`);
    for (const t of r.for) if (planned.size && !planned.has(t)) r.problems.push(`"${t}" is not an entry in blocks.md`);
  }
  const stale = facts.map((x) => ({ id: x.id, label: x.label, checked: x.checked, age: daysSince(x.checked), url: urlIn(x.source) }))
    .filter((x) => x.age === null || x.age > maxAgeDays);
  const count = (s) => findings.filter((r) => r.status === s).length;
  return { hasResearch: fs.existsSync(f.research), findings, stale, maxAgeDays, counts: { new: count('new'), accepted: count('accepted'), rejected: count('rejected') } };
}

/* The next id nobody has used: ids are for life, in both files. */
const nextId = (prefix, ids) => prefix + (Math.max(0, ...ids.map((x) => +String(x).slice(1)).filter(Number.isFinite)) + 1);

/* Before the closing "copy this shape" comment if there is one, else at the end. */
function appendEntry(text, entry) {
  const open = text.lastIndexOf('<!--'), shut = text.lastIndexOf('-->');
  const tail = open !== -1 && shut > open && !text.slice(shut + 3).trim() ? open : -1;
  if (tail === -1) return text.replace(/\s*$/, '\n\n') + entry + '\n';
  return text.slice(0, tail).replace(/\s*$/, '\n\n') + entry + '\n\n' + text.slice(tail);
}

export function addFinding(dir, given) {
  const f = files(dir);
  const claim = one(given.claim), source = one(given.source);
  if (!claim) throw new Error('A finding needs a claim: one plain sentence.');
  if (!source) throw new Error('A finding needs a source: where can the author check it?');
  const kind = KINDS.includes(given.kind) ? given.kind : 'reference';
  const text = read(f.research) || HEADER;
  const dupe = parseResearch(text).find((r) => r.claim.toLowerCase() === claim.toLowerCase() && urlIn(r.source) === urlIn(source));
  if (dupe) throw new Error(`${dupe.id} already says this, from the same page (${dupe.status}).`);
  const id = nextId('R', parseResearch(text).map((r) => r.id));
  const forList = (Array.isArray(given.for) ? given.for : String(given.for || '').split(/[;|]/)).map(one).filter(Boolean);
  const lines = [`## ${id} · ${one(given.label) || claim.split(/\s+/).slice(0, 6).join(' ')}`, `- **Claim:** ${claim}`, `- **Source:** ${source}`];
  if (one(given.quote)) lines.push(`- **Quote:** "${one(given.quote).replace(/^["“]|["”]$/g, '')}"`);
  lines.push(`- **Kind:** ${kind}`, `- **Retrieved:** ${/^\d{4}-\d{2}-\d{2}$/.test(given.retrieved || '') ? given.retrieved : today()}`);
  if (forList.length) lines.push(`- **For:** ${forList.join('; ')}`);
  lines.push('- **Status:** new', '', '---');
  write(f.research, appendEntry(text, lines.join('\n')));
  return id;
}

/* Rewrite one field of one entry (or add it after the entry's last field). */
function setField(text, id, name, value) {
  const head = text.match(new RegExp(`^##\\s+${id}\\b.*$`, 'mi'));
  if (!head) throw new Error(`No ${id} in the file.`);
  const start = head.index + head[0].length;
  const next = text.slice(start).search(/^##\s+/m);
  const end = next === -1 ? text.length : start + next;
  let body = text.slice(start, end);
  const re = new RegExp(`(^-\\s+\\*\\*${name}:\\*\\*)[^\\n]*(?:\\n(?!\\s*-\\s+\\*\\*|\\s*\\n|\\s*-{3,}).*)*`, 'm');
  if (re.test(body)) body = body.replace(re, `$1 ${value}`);
  else {
    const fields = [...body.matchAll(/^-\s+\*\*[^*]+:\*\*[^\n]*(?:\n(?!\s*-\s+\*\*|\s*\n|\s*-{3,}).*)*/gm)];
    const at = fields.length ? fields.at(-1).index + fields.at(-1)[0].length : 0;
    body = body.slice(0, at) + `\n- **${name}:** ${value}` + body.slice(at);
  }
  return text.slice(0, start) + body + text.slice(end);
}

/* Put a fact id on a page's Facts line in blocks.md. Returns false if the page has no entry. */
function citeInBlocks(text, title, factId) {
  const esc = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const head = text.match(new RegExp(`^####\\s+${esc}\\s*$`, 'm'));
  if (!head) return null;
  const start = head.index + head[0].length;
  const next = text.slice(start).search(/^(?:##|####)\s+|^<!--/m);
  const end = next === -1 ? text.length : start + next;
  let body = text.slice(start, end);
  const line = body.match(/^(-\s+\*\*Facts:\*\*)([^\n]*)$/m);
  if (line) {
    const had = line[2].match(/\bF\d+\b/gi) || [];
    if (had.map((x) => x.toUpperCase()).includes(factId)) return text;
    body = body.replace(line[0], `${line[1]} ${[...had, factId].join(', ')}`);
  } else {
    const fields = [...body.matchAll(/^-\s+\*\*[^*]+:\*\*[^\n]*(?:\n(?!\s*-\s+\*\*|\s*\n).*)*/gm)];
    const at = fields.length ? fields.at(-1).index + fields.at(-1)[0].length : body.search(/\n/) + 1;
    body = body.slice(0, at) + `\n- **Facts:** ${factId}` + body.slice(at);
  }
  return text.slice(0, start) + body + text.slice(end);
}

/* The author says yes. `edit` lets them fix the wording first: claim, label, source, kind. */
export function acceptFinding(dir, id, edit = {}) {
  const f = files(dir);
  const text = read(f.research);
  const r = parseResearch(text).find((x) => x.id === String(id).toUpperCase());
  if (!r) throw new Error(`No ${id} in RESEARCH.md.`);
  if (r.status === 'accepted') throw new Error(`${r.id} was already accepted, as ${r.factId}.`);
  const claim = one(edit.claim) || r.claim, source = one(edit.source) || r.source, label = one(edit.label) || r.label;
  const kind = KINDS.includes(edit.kind) ? edit.kind : KINDS.includes(r.kind) ? r.kind : 'reference';
  if (!claim || !source) throw new Error(`${r.id} needs a claim and a source before it can be a fact.`);

  let facts = read(f.facts) || '# Facts\n\nEverything this book is allowed to state as true, and where each thing came from.\n\n---\n';
  const blocks = read(f.blocks);
  /* an id is for life: not one in FACTS.md, not one a page cites, not one given out here before */
  const factId = nextId('F', [...parseFacts(facts).map((x) => x.id), ...parseResearch(text).map((x) => x.factId).filter(Boolean),
    ...parseBlocks(blocks).flatMap((p) => p.blocks.flatMap((b) => b.facts || []))]);
  facts = appendEntry(facts, [`## ${factId} · ${label}`, `- **Claim:** ${claim}`, `- **Source:** ${source}`, `- **Kind:** ${kind}`, `- **Checked:** ${today()}`, '', '---'].join('\n'));

  const cited = [], uncited = [];
  let nextBlocks = blocks;
  for (const t of r.for) {
    const out = blocks ? citeInBlocks(nextBlocks, t, factId) : null;
    if (out === null) uncited.push(t); else { nextBlocks = out; cited.push(t); }
  }
  write(f.facts, facts);
  if (blocks && nextBlocks !== blocks) write(f.blocks, nextBlocks);
  write(f.research, setField(text, r.id, 'Status', `accepted as ${factId}, ${today()}`));
  return { factId, cited, uncited };
}

export function rejectFinding(dir, id, why = '') {
  const f = files(dir);
  let text = read(f.research);
  const r = parseResearch(text).find((x) => x.id === String(id).toUpperCase());
  if (!r) throw new Error(`No ${id} in RESEARCH.md.`);
  if (r.status === 'accepted') throw new Error(`${r.id} is already ${r.factId} in FACTS.md. Retire the fact there instead.`);
  text = setField(text, r.id, 'Status', `rejected, ${today()}`);
  if (one(why)) text = setField(text, r.id, 'Why', one(why));
  write(f.research, text);
}

export function reopenFinding(dir, id) {
  const f = files(dir);
  const text = read(f.research);
  const r = parseResearch(text).find((x) => x.id === String(id).toUpperCase());
  if (!r || r.status !== 'rejected') throw new Error(`${id} is not a rejected finding.`);
  write(f.research, setField(text, r.id, 'Status', 'new'));
}

/* "I looked again today and it still holds." Only the author can say that. */
export function markChecked(dir, factId) {
  const f = files(dir);
  write(f.facts, setField(read(f.facts), String(factId).toUpperCase(), 'Checked', today()));
}

/* ------------------------------------------------------------------ verify
   Does the source still answer, and are the quoted words really on it? This reads
   the page as text; a page built entirely by script may need a human to look. */
const plain = (html) => html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;|&#34;/g, '"').replace(/&#39;|&rsquo;|&lsquo;/g, "'").replace(/&[a-z]+;/g, ' ');
const norm = (s) => s.toLowerCase().replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();

export async function checkUrl(url, quote = '') {
  if (!url) return { ok: false, note: 'no link to open' };
  try {
    const res = await fetch(url, { redirect: 'follow', signal: AbortSignal.timeout(20000), headers: { 'user-agent': 'paper-engine-research/1.0 (link check)', accept: 'text/html,*/*' } });
    if (!res.ok) return { ok: false, note: `the page answered ${res.status}` };
    if (!quote) return { ok: true, note: 'the page answers' };
    const found = norm(plain(await res.text())).includes(norm(quote));
    return found ? { ok: true, note: 'quote found on the page' } : { ok: false, note: 'the page answers, but the quoted words are not on it. Open it and look' };
  } catch (e) {
    return { ok: false, note: `could not be reached (${e.name === 'TimeoutError' ? 'timed out' : e.cause?.code || e.message})` };
  }
}

export async function verifyFindings(dir, ids = null) {
  const f = files(dir);
  const want = ids && ids.length ? new Set(ids.map((x) => x.toUpperCase())) : null;
  const out = [];
  for (const r of parseResearch(read(f.research)).filter((x) => (want ? want.has(x.id) : x.status === 'new'))) {
    /* your own work has no page to open: it is yours to vouch for, not a failed check */
    const res = !urlIn(r.source) && r.kind !== 'reference' ? { ok: true, note: `no link: ${r.kind}, so it is yours to vouch for` } : await checkUrl(urlIn(r.source), r.quote);
    write(f.research, setField(read(f.research), r.id, 'Verified', `${today()}, ${res.ok ? '' : 'NOT OK: '}${res.note}`));
    out.push({ id: r.id, label: r.label, ...res });
  }
  return out;
}
