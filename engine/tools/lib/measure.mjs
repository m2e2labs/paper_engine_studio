/* ==========================================================================
   lib/measure.mjs  -  open a built book in a real browser and report on it
   --------------------------------------------------------------------------
   check.mjs measures overflow and prints a table. This measures the same way
   (same browser, same wait for fonts) and returns data, and it also looks at
   the things a printer cares about: how many real pixels sit behind each
   photograph, whether a font failed, whether an SVG label runs past the edge
   of its drawing, and how wide the safe margin actually is.
   ========================================================================== */
import { chromium } from 'playwright';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

export async function inspectBook(bookHtml) {
  const abs = path.resolve(bookHtml);
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    const external = [];
    page.on('request', (r) => { if (/^https?:/.test(r.url())) external.push(r.url()); });
    await page.goto(pathToFileURL(abs).href, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);

    const report = await page.evaluate(() => {
      const MM = 25.4 / 96;
      const r1 = (n) => Math.round(n * 10) / 10;
      const sheets = [...document.querySelectorAll('.sheet')];
      const kindOf = (el) =>
        el.classList.contains('bb') ? 'page'
          : ['cover', 'colophon', 'toc', 'divider', 'index'].find((k) => el.classList.contains(k)) || 'other';
      const sheetIndex = (el) => sheets.indexOf(el.closest('.sheet')) + 1;

      const first = sheets[0];
      const cs = first ? getComputedStyle(first) : null;
      const bb = sheets.find((s) => s.classList.contains('bb'));

      return {
        sheets: sheets.map((el, i) => ({
          page: i + 1,
          kind: kindOf(el),
          title: (el.querySelector('.title')?.textContent || '').replace(/\s+/g, ' ').trim() ||
                 (el.querySelector('.dv-name, .lp-title, .cv-title, .cl-title')?.textContent || '').trim(),
          overMm: r1(Math.max(0, el.scrollHeight - el.clientHeight) * MM),
        })),
        unstyled: !first || Math.round(first.getBoundingClientRect().width) < 200,
        pageWmm: first ? r1(first.getBoundingClientRect().width * MM) : 0,
        pageHmm: first ? r1(first.getBoundingClientRect().height * MM) : 0,
        /* the margin a book page really keeps, whatever the theme did to padding */
        padMm: bb ? r1(parseFloat(getComputedStyle(bb).paddingLeft) * MM) : cs ? r1(parseFloat(cs.paddingLeft) * MM) : 0,
        images: [...document.images].map((img) => {
          const b = img.getBoundingClientRect();
          const ok = img.complete && img.naturalWidth > 0;
          /* object-fit:cover scales by the larger ratio; that is the honest one */
          const scale = ok ? Math.max(b.width / img.naturalWidth, b.height / img.naturalHeight) : 0;
          return {
            src: img.getAttribute('src'), page: sheetIndex(img), ok,
            alt: (img.getAttribute('alt') || '').trim().length > 0,
            px: ok ? `${img.naturalWidth}x${img.naturalHeight}` : '',
            widthMm: r1(b.width * MM),
            dpi: scale ? Math.round(96 / scale) : 0,
          };
        }),
        clippedLabels: [...document.querySelectorAll('.sheet svg')].flatMap((svg) => {
          const box = svg.getBoundingClientRect();
          return [...svg.querySelectorAll('text')].filter((t) => {
            const b = t.getBoundingClientRect();
            if (!b.width) return false;
            return b.left < box.left - 1 || b.right > box.right + 1 || b.top < box.top - 1 || b.bottom > box.bottom + 1;
          }).map((t) => ({ page: sheetIndex(svg), text: t.textContent.trim().slice(0, 60) }));
        }),
        unlabelledSvgs: [...document.querySelectorAll('.sheet.bb svg')]
          .filter((s) => !s.getAttribute('aria-label') && !s.querySelector('title'))
          .map((s) => sheetIndex(s)),
        fontsFailed: [...document.fonts].filter((f) => f.status === 'error').map((f) => `${f.family} ${f.weight}`),
        fontsLoaded: [...new Set([...document.fonts].filter((f) => f.status === 'loaded').map((f) => f.family.replace(/"/g, '')))],
      };
    });

    report.external = [...new Set(external)];
    return report;
  } finally {
    await browser.close();
  }
}

/* How many pages a Chromium-written PDF holds, without a PDF library. */
export function pdfPageCount(buf) {
  const s = buf.toString('latin1');
  const counts = [...s.matchAll(/\/Type\s*\/Pages\b[^>]*?\/Count\s+(\d+)/g)].map((m) => +m[1]);
  if (counts.length) return Math.max(...counts);
  return (s.match(/\/Type\s*\/Page\b(?!s)/g) || []).length;
}
