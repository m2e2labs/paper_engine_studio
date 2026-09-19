/* ==========================================================================
   lib/pdf.mjs  -  HTML -> PDF, with optional bleed for a printer
   --------------------------------------------------------------------------
   Without bleed this is exactly what export.mjs always did: obey
   `@page { size:B5; margin:0 }`, print backgrounds, 1:1 with the screen.

   With bleed, the SHEET DOES NOT CHANGE. Same box, same fonts, same sizes;
   the rule in sheet.css holds. Each sheet is centred on a larger piece of
   paper (trim + bleed on every side) painted in the sheet's own paper colour,
   so a printer trimming a hair off-line cuts through colour, never a white
   sliver. The engine keeps all content inside the safe margin, which is why
   extending the paper colour is the whole job.
   ========================================================================== */
import { chromium } from 'playwright';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

export async function exportPdfs(jobs, { bleedMm = 0 } = {}) {
  const browser = await chromium.launch();
  const done = [];
  try {
    const page = await browser.newPage();
    for (const job of jobs) {
      await page.goto(pathToFileURL(path.resolve(job.in)).href, { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);   // web fonts change text height

      const out = path.resolve(job.out);
      if (!bleedMm) {
        await page.pdf({
          path: out,
          preferCSSPageSize: true,   // obey @page { size:B5; margin:0 }
          printBackground: true,     // keep the colours
        });
      } else {
        const size = await page.evaluate((b) => {
          const MM = 25.4 / 96;
          const sheets = [...document.querySelectorAll('.sheet')];
          if (!sheets.length) return null;
          const r = sheets[0].getBoundingClientRect();
          const w = Math.round(r.width * MM * 10) / 10, h = Math.round(r.height * MM * 10) / 10;
          for (const s of sheets) {
            const box = document.createElement('div');
            box.style.cssText =
              `box-sizing:border-box;width:${w + 2 * b}mm;height:${h + 2 * b}mm;padding:${b}mm;` +
              `overflow:hidden;break-after:page;background:${getComputedStyle(s).backgroundColor}`;
            s.parentNode.insertBefore(box, s);
            box.appendChild(s);
            s.style.breakAfter = 'auto';        // the box breaks the page now, once
            s.style.pageBreakAfter = 'auto';
          }
          const last = sheets[sheets.length - 1].parentNode;
          last.style.breakAfter = 'auto';
          return { w: w + 2 * b, h: h + 2 * b };
        }, bleedMm);
        if (!size) throw new Error('No .sheet found in ' + job.in);
        await page.pdf({
          path: out,
          width: size.w + 'mm', height: size.h + 'mm',   // trim + bleed; @page size is ignored
          printBackground: true,
        });
      }
      done.push(out);
    }
  } finally {
    await browser.close();
  }
  return done;
}
