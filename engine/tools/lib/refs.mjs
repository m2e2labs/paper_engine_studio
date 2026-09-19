/* ==========================================================================
   lib/refs.mjs  -  the glossary, and one page pointing at another
   --------------------------------------------------------------------------
   GLOSSARY.md is the author's list of terms:

       ## SSRF
       - **Means:** A request your server is tricked into making for someone else.
       - **Also:** server-side request forgery

   A "glossary" page in book.json's matter prints it. Which pages USE a term is
   never written down: it is read from the pages (the term, or anything on its
   Also line, as a whole word), so the page numbers cannot go stale.

   A cross-reference is written in a page as

       <span class="xref">Circuit breaker</span>
       <span class="xref" data-to="Circuit breaker">the page on breakers</span>

   and the build turns it into a link with the real page number, "Circuit
   breaker (p. 21)". In an edition that leaves the target out, it stays plain
   words and no number is printed, because there is no such page to turn to.
   ========================================================================== */
import fs from 'node:fs';
import path from 'node:path';
import { loadBook } from './book.mjs';
import { proseOf } from './plan.mjs';

const noComments = (md) => md.replace(/<!--[\s\S]*?-->/g, (m) => m.replace(/[^\n]/g, ' '));
const field = (body, name) => {
  const m = body.match(new RegExp(`\\*\\*${name}:\\*\\*([\\s\\S]*?)(?=\\n\\s*-\\s+\\*\\*|\\n\\s*\\n|\\n\\s*-{3,}|$)`));
  return m ? m[1].replace(/\s+/g, ' ').trim() : '';
};
const stripTags = (s) => String(s ?? '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

export function parseGlossary(md) {
  const text = noComments(md);
  const heads = [...text.matchAll(/^##\s+(.+?)\s*$/gm)];
  return heads.map((h, i) => {
    const body = text.slice(h.index + h[0].length, i + 1 < heads.length ? heads[i + 1].index : text.length);
    return {
      term: h[1].trim(), means: field(body, 'Means'),
      also: field(body, 'Also').split(/[,;]/).map((s) => s.trim()).filter(Boolean),
      line: text.slice(0, h.index).split('\n').length,
    };
  });
}

const wordRe = (w) => new RegExp(`(?<![\\p{L}\\p{N}])${w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\s+/g, '\\s+')}(?![\\p{L}\\p{N}])`, 'iu');

export const XREF = /<span class="xref"(?:\s+data-to="([^"]*)")?\s*>([\s\S]*?)<\/span>/g;
export const xrefsIn = (html) => [...html.matchAll(XREF)].map((m) => ({ to: (m[1] ?? stripTags(m[2])).trim(), text: stripTags(m[2]) }));

/* Everything about a book's references, for one edition. */
export function loadRefs(dir, edition = null) {
  const book = loadBook(dir);
  const keep = edition ? new Set((book.json.editions || {})[edition] || []) : null;
  const inEdition = (t) => book.partOf.has(t) && (!keep || keep.has(t));
  const pages = book.pages.filter((p) => inEdition(p.title));
  const file = path.join(dir, 'GLOSSARY.md');
  const hasGlossary = fs.existsSync(file);
  const terms = hasGlossary ? parseGlossary(fs.readFileSync(file, 'utf8')) : [];
  const prose = new Map(pages.map((p) => [p.title, `${p.title} ${proseOf(p.html)}`]));
  for (const t of terms) {
    const res = [t.term, ...t.also].map(wordRe);
    t.usedBy = pages.filter((p) => res.some((re) => re.test(prose.get(p.title)))).map((p) => p.title);
  }
  const lower = terms.map((t) => t.term.toLowerCase());
  const written = new Set(book.pages.map((p) => p.title));
  const xrefs = pages.flatMap((p) => xrefsIn(p.html).map((x) => ({ ...x, from: p.title,
    state: !written.has(x.to) ? 'unknown' : x.to === p.title ? 'self' : inEdition(x.to) ? 'ok' : 'absent' })));
  return {
    hasGlossary, terms: terms.sort((a, b) => a.term.localeCompare(b.term, undefined, { sensitivity: 'base' })),
    duplicates: [...new Set(lower.filter((t, i) => lower.indexOf(t) !== i))], xrefs,
  };
}
