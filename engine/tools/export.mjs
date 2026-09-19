/* ==========================================================================
   export.mjs  -  deterministic HTML -> PDF via headless Chrome (Playwright)
   --------------------------------------------------------------------------
   The same PDF every time, with no print-dialog settings to forget. It obeys
   `@page { size:B5; margin:0 }` from the size file and prints backgrounds, so
   the PDF is a 1:1 capture of the page you were looking at.

   You can also do this by hand in a browser (Ctrl/Cmd+P -> Save as PDF, with
   Margins: None, Scale: 100, Background graphics: ON). This command is the
   version that cannot be got wrong.

   Setup (one time):
       npm install
       npx playwright install chromium

   Use:
       node engine/tools/export.mjs books/showcase/book.html          -> book.pdf
       node engine/tools/export.mjs books/showcase/book.html out.pdf  -> out.pdf
       node engine/tools/export.mjs a.html b.html                     -> a.pdf, b.pdf
       node engine/tools/export.mjs books/showcase/book.html --bleed 3 -> book-print.pdf

   --bleed <mm> writes a printer's file: every sheet sits unchanged on paper
   that is <mm> larger on each side, filled with the sheet's own paper colour.
   KDP and most printers ask for 3 mm (0.125 in). See lib/pdf.mjs.
   ========================================================================== */
import { exportPdfs } from './lib/pdf.mjs';

const args = process.argv.slice(2);
const bi = args.indexOf('--bleed');
const bleedMm = bi === -1 ? 0 : Number(args[bi + 1]);
const argv = bi === -1 ? args : args.filter((_, i) => i !== bi && i !== bi + 1);
if (argv.length === 0 || Number.isNaN(bleedMm) || bleedMm < 0 || bleedMm > 10) {
  console.error('Usage: node engine/tools/export.mjs <book.html> [out.pdf | more .html files...] [--bleed <mm, 0-10>]');
  process.exit(1);
}

// Two-arg form "in.html out.pdf" -> single job; otherwise every arg is an input.
let jobs;
if (argv.length === 2 && /\.pdf$/i.test(argv[1])) {
  jobs = [{ in: argv[0], out: argv[1] }];
} else {
  jobs = argv.map((f) => ({ in: f, out: f.replace(/\.html?$/i, bleedMm ? '-print.pdf' : '.pdf') }));
}

await exportPdfs(jobs, { bleedMm });
for (const job of jobs) console.log('  wrote ' + job.out + (bleedMm ? `  (+${bleedMm} mm bleed)` : ''));
