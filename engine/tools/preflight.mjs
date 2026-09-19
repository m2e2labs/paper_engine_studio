/* ==========================================================================
   preflight.mjs  -  the release gate. Everything check.mjs is, and the rest.
   --------------------------------------------------------------------------
   check.mjs proves every page fits. This proves the book is ready to ship:
   book details filled in, running order complete, every page planned and every
   figure traced to a fact with a source, build not stale, pages fit,
   images load and have the pixels to print, fonts loaded, no SVG label past
   the edge of its drawing, nothing fetched from the network, alt text
   present, inside print-on-demand limits, and every page approved by a person.

   Usage:
       node engine/tools/preflight.mjs books/<slug>
       node engine/tools/preflight.mjs books/<slug> --edition free
       node engine/tools/preflight.mjs books/<slug> --strict        unapproved pages FAIL
       node engine/tools/preflight.mjs books/<slug> --json out.json

   Exit code is 1 if any check fails, so it works in a script or a CI job.
   It still cannot tell you a diagram says the wrong thing. Look at the pages.
   ========================================================================== */
import fs from 'node:fs';
import path from 'node:path';
import { preflight, printReport } from './lib/preflight.mjs';

const argv = process.argv.slice(2);
const bookDir = argv.find((a, i) => !a.startsWith('--') && !['--edition', '--json'].includes(argv[i - 1]));
if (!bookDir) {
  console.error('Usage: node engine/tools/preflight.mjs books/<slug> [--edition <name>] [--strict] [--json <file>]');
  process.exit(1);
}
const flag = (name) => { const i = argv.indexOf('--' + name); return i === -1 ? null : argv[i + 1]; };

const rep = await preflight(path.resolve(bookDir), { edition: flag('edition'), strict: argv.includes('--strict') });
console.log(`\npreflight: ${rep.book}${rep.edition ? ` [${rep.edition} edition]` : ''} (${rep.html})\n`);
printReport(rep);

const out = flag('json');
if (out) {
  fs.mkdirSync(path.dirname(path.resolve(out)), { recursive: true });
  fs.writeFileSync(out, JSON.stringify(rep, null, 2) + '\n');
}
if (rep.result === 'fail') process.exitCode = 1;
