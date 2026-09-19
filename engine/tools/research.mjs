/* ==========================================================================
   research.mjs  -  the research inbox: file a finding, check it, decide on it
   --------------------------------------------------------------------------
   A search finds things. The author decides what is true. In between is
   books/<slug>/RESEARCH.md: findings with their source and the words on that
   source that back them, waiting to be accepted into FACTS.md or rejected.

   Usage:
       node engine/tools/research.mjs books/<slug>                    the inbox, and facts gone stale
       node engine/tools/research.mjs books/<slug> --add \
            --claim "One plain sentence." --source "Title: https://…" \
            --quote "the words on that page that say so" \
            --for "Page title" [--label "Short label"] [--kind reference]
       node engine/tools/research.mjs books/<slug> --verify [R3 R4]   open each source: does it answer, is the quote on it?
       node engine/tools/research.mjs books/<slug> --accept R3        -> the next fact in FACTS.md, cited on its page in blocks.md
       node engine/tools/research.mjs books/<slug> --reject R3 --why "superseded in the March release"
       node engine/tools/research.mjs books/<slug> --check-links      do the sources in FACTS.md still answer?
       node engine/tools/research.mjs books/<slug> --max-age 180      what counts as stale, in days (default 365)

   --add is for a search (or the /research skill). --accept and --reject are the
   AUTHOR's. An agent never accepts a finding on the author's behalf: that is the
   whole point of the file.
   ========================================================================== */
import fs from 'node:fs';
import path from 'node:path';
import { parseFacts } from './lib/plan.mjs';
import { loadResearch, addFinding, acceptFinding, rejectFinding, verifyFindings, checkUrl, urlIn } from './lib/research.mjs';

const argv = process.argv.slice(2);
const VALUE = new Set(['claim', 'source', 'quote', 'for', 'label', 'kind', 'why', 'accept', 'reject', 'max-age']);
const has = (f) => argv.includes('--' + f);
const flag = (f) => { const i = argv.indexOf('--' + f); return i === -1 ? null : argv[i + 1]; };
const positional = argv.filter((a, i) => !a.startsWith('--') && !(argv[i - 1]?.startsWith('--') && VALUE.has(argv[i - 1].slice(2))));
const die = (msg) => { console.error('\n' + msg + '\n'); process.exit(1); };

const bookDir = positional[0];
if (!bookDir) die('Usage: node engine/tools/research.mjs books/<slug> [--add … | --verify | --accept R3 | --reject R3 --why "…" | --check-links]');
const dir = path.resolve(bookDir);
if (!fs.existsSync(path.join(dir, 'book.json'))) die(`No book.json in ${bookDir}.`);

try {
  if (has('add')) {
    const id = addFinding(dir, { claim: flag('claim'), source: flag('source'), quote: flag('quote'), for: flag('for'), label: flag('label'), kind: flag('kind') });
    console.log(`filed ${id} in ${bookDir}/RESEARCH.md. It is a finding, not a fact: the author decides.`);
  } else if (has('accept')) {
    const r = acceptFinding(dir, flag('accept'));
    console.log(`${flag('accept').toUpperCase()} is now ${r.factId} in FACTS.md, checked today.`);
    if (r.cited.length) console.log(`  cited on the Facts line of: ${r.cited.join(', ')}`);
    if (r.uncited.length) console.log(`  not cited anywhere yet: no entry in blocks.md for ${r.uncited.join(', ')}`);
  } else if (has('reject')) {
    rejectFinding(dir, flag('reject'), flag('why') || '');
    console.log(`${flag('reject').toUpperCase()} rejected. It stays in RESEARCH.md so it is not filed again.`);
  } else if (has('verify')) {
    const out = await verifyFindings(dir, positional.slice(1));
    if (!out.length) console.log('Nothing to verify: no new findings.');
    for (const r of out) console.log(`  ${r.ok ? '✓' : '✗'} ${r.id} ${r.label}: ${r.note}`);
    if (out.some((r) => !r.ok)) process.exitCode = 1;
  } else if (has('check-links')) {
    const facts = parseFacts(fs.existsSync(path.join(dir, 'FACTS.md')) ? fs.readFileSync(path.join(dir, 'FACTS.md'), 'utf8') : '').filter((f) => urlIn(f.source));
    if (!facts.length) console.log('No fact in FACTS.md has a link to check.');
    for (const f of facts) { const r = await checkUrl(urlIn(f.source)); console.log(`  ${r.ok ? '✓' : '✗'} ${f.id} ${f.label}: ${r.note}`); if (!r.ok) process.exitCode = 1; }
  } else {
    const s = loadResearch(dir, { maxAgeDays: Number(flag('max-age')) || 365 });
    console.log(`\nresearch: ${path.basename(dir)}   ${s.counts.new} waiting, ${s.counts.accepted} accepted, ${s.counts.rejected} rejected\n`);
    for (const r of s.findings.filter((x) => x.status === 'new')) {
      console.log(`  ${r.id} · ${r.label}${r.for.length ? `   (for: ${r.for.join(', ')})` : ''}`);
      console.log(`      ${r.claim}`);
      console.log(`      ${r.source}${r.verified ? `\n      verified ${r.verified}` : ''}`);
      for (const p of r.problems) console.log(`      ! ${p}`);
    }
    if (!s.counts.new) console.log('  Nothing waiting.');
    if (s.stale.length) {
      console.log(`\n  Facts not checked in the last ${s.maxAgeDays} days:`);
      for (const f of s.stale) console.log(`    ${f.id} ${f.label}: ${f.checked ? `checked ${f.checked}` : 'no Checked date'}`);
    }
    console.log('');
  }
} catch (e) { die(e.message); }
