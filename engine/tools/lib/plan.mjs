/* ==========================================================================
   lib/plan.mjs  -  read a book's plan (blocks.md) and its facts (FACTS.md)
   --------------------------------------------------------------------------
   The engine's hardest rule is "never invent a fact, a number, a study, or a
   personal story". Until now nothing in a book's sources could back it up.
   Two files do:

     blocks.md   the plan. One entry per page: What, Use when, Action, Band,
                 and now Facts: the ids of the facts that page may use.
     FACTS.md    what the author actually knows, each with where it came from.

   Both stay plain markdown an author can write by hand. This reads them as
   data, so preflight can check them and the Studio can show them.

   A page's STATUS is never written in blocks.md. It is worked out: an entry
   with no page is planned, a page is a draft until a person approves it. One
   source of truth each: the plan for intent, the interior for words,
   workflow.json for sign-off.
   ========================================================================== */
import fs from 'node:fs';
import path from 'node:path';
import { loadBook, loadWorkflow, statusOf, stripTags } from './book.mjs';

const noComments = (md) => md.replace(/<!--[\s\S]*?-->/g, (m) => m.replace(/[^\n]/g, ' '));
const field = (body, name) => {
  const m = body.match(new RegExp(`\\*\\*${name}:\\*\\*([\\s\\S]*?)(?=\\n\\s*-\\s+\\*\\*|\\*\\*[A-Z][a-z ]+:\\*\\*|\\n\\s*\\n|\\n\\s*-{3,}|$)`));   // a field ends at the next field, a blank line, or a rule
  return m ? m[1].replace(/\s+/g, ' ').trim() : '';
};

/* ------------------------------------------------------------------ blocks.md */
export function parseBlocks(md) {
  const text = noComments(md);
  const parts = [];
  let part = null;
  const heads = [...text.matchAll(/^(##|####)\s+(.+)$/gm)];
  heads.forEach((h, i) => {
    const line = text.slice(0, h.index).split('\n').length;
    if (h[1] === '##') {
      const name = h[2].replace(/^Part\s+\d+\s*[·:.\-]\s*/i, '').trim();
      part = { name, line, blocks: [] };
      parts.push(part);
      return;
    }
    const end = i + 1 < heads.length ? heads[i + 1].index : text.length;
    const body = text.slice(h.index + h[0].length, end);
    const meta = (body.split('\n').map((l) => l.trim()).find((l) => l && !l.startsWith('-')) || '');
    const [category, bandKind] = meta.split('·').map((x) => x.trim());
    const factsRaw = field(body, 'Facts');
    if (!part) { part = { name: '', line, blocks: [] }; parts.push(part); }
    part.blocks.push({
      title: h[2].trim(), line,
      category: category || '', band: /photo/i.test(bandKind || '') ? 'photo' : /diagram/i.test(bandKind || '') ? 'diagram' : '',
      what: field(body, 'What'), useWhen: field(body, 'Use when'), skipWhen: field(body, 'Skip when'),
      action: field(body, 'Action'), bandNote: field(body, 'Band'),
      /* null = the line is missing (nobody has thought about it); [] = "none", on purpose */
      facts: !factsRaw ? null : /^none\b/i.test(factsRaw) ? [] : [...new Set(factsRaw.match(/\bF\d+\b/gi)?.map((f) => f.toUpperCase()) || [])],
    });
  });
  return parts;
}

/* ------------------------------------------------------------------ FACTS.md */
export function parseFacts(md) {
  const text = noComments(md);
  const heads = [...text.matchAll(/^##\s+(F\d+)\s*(?:[·:.\-]\s*(.*))?$/gim)];
  return heads.map((h, i) => {
    const end = i + 1 < heads.length ? heads[i + 1].index : text.length;
    const body = text.slice(h.index + h[0].length, end);
    return {
      id: h[1].toUpperCase(), label: (h[2] || '').trim(),
      line: text.slice(0, h.index).split('\n').length,
      claim: field(body, 'Claim'), source: field(body, 'Source'),
      kind: field(body, 'Kind').toLowerCase(), checked: field(body, 'Checked'),
    };
  });
}

/* ------------------------------------------------------------------ numbers
   What a reader would take as a fact: a figure, or a spelled-out amount. "one" and
   "two" are left alone, they are grammar far more often than they are data. */
const WORDS = { three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12,
  fifteen: 15, twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, ninety: 90, hundred: 100, thousand: 1000 };
const TWICE = { twice: 2, double: 2, half: 0.5, triple: 3 };

export function numbersIn(text) {
  const out = new Set();
  for (const m of text.matchAll(/\d[\d.,:/]*\d|\d/g)) out.add(m[0].replace(/[.,:/]+$/, ''));
  for (const m of text.toLowerCase().matchAll(/[a-z]+/g)) {
    if (m[0] in WORDS) out.add(String(WORDS[m[0]]));
    if (m[0] in TWICE) out.add(String(TWICE[m[0]]));
  }
  return out;
}

/* The words on a page that make claims: not the diagram's step badges, not the chrome. */
export function proseOf(pageHtml) {
  return stripTags(pageHtml
    .replace(/<svg[\s\S]*?<\/svg>/g, ' ')
    .replace(/<h2 class="sr">[\s\S]*?<\/h2>/g, ' ')
    .replace(/<div class="(?:eyebrow|foot|top)">[\s\S]*?<\/div>/g, ' '));
}

/* ------------------------------------------------------------------ the whole picture */
export function loadPlan(dir) {
  const book = loadBook(dir);
  const wf = loadWorkflow(dir);
  const blocksPath = path.join(dir, 'blocks.md'), factsPath = path.join(dir, 'FACTS.md');
  const hasBlocks = fs.existsSync(blocksPath), hasFacts = fs.existsSync(factsPath);
  const parts = hasBlocks ? parseBlocks(fs.readFileSync(blocksPath, 'utf8')) : [];
  const facts = hasFacts ? parseFacts(fs.readFileSync(factsPath, 'utf8')) : [];
  const factById = new Map(facts.map((f) => [f.id, f]));
  const pageByTitle = new Map(book.pages.map((p) => [p.title, p]));

  const used = new Map();   // fact id -> titles using it
  const planned = new Set();
  for (const part of parts) for (const b of part.blocks) {
    planned.add(b.title);
    const page = pageByTitle.get(b.title);
    b.status = !page ? 'planned' : statusOf(page, wf).status;
    b.inBook = book.partOf.has(b.title);
    b.unknownFacts = (b.facts || []).filter((id) => !factById.has(id));
    for (const id of b.facts || []) used.set(id, [...(used.get(id) || []), b.title]);

    /* every figure on the page has to be somewhere in the facts that page cites */
    b.unbacked = [];
    if (page) {
      const allowed = numbersIn((b.facts || []).map((id) => factById.get(id)).filter(Boolean)
        .map((f) => `${f.claim} ${f.label}`).join(' '));
      b.unbacked = [...numbersIn(proseOf(page.html))].filter((n) => !allowed.has(n));
    }
  }
  for (const f of facts) f.usedBy = used.get(f.id) || [];

  const dupes = facts.map((f) => f.id).filter((id, i, a) => a.indexOf(id) !== i);
  return {
    hasBlocks, hasFacts, parts, facts,
    unplanned: book.pages.map((p) => p.title).filter((t) => !planned.has(t)),
    duplicateFacts: [...new Set(dupes)],
    counts: {
      entries: planned.size,
      planned: parts.flatMap((p) => p.blocks).filter((b) => b.status === 'planned').length,
      written: parts.flatMap((p) => p.blocks).filter((b) => b.status !== 'planned').length,
      facts: facts.length,
    },
  };
}
