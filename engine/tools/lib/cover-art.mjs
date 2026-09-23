/* ==========================================================================
   lib/cover-art.mjs  -  an optional hand-drawn illustration on the cover
   --------------------------------------------------------------------------
   Off unless book.json sets cover.art to self-contained inline SVG markup.
   Dropped between the subtitle and the author line, centred, in the space
   build-book.mjs already leaves empty there. Runs before applyTheme, so a
   book with its own theme repaints the art the same as every diagram.
   ========================================================================== */

const SPLIT = /(<div class="cv-mid">[\s\S]*?)(<\/div>\s*<div class="cv-bottom">)/;

/* html: a freshly built book. Returns it with the art inserted, or untouched
   when the book sets no cover.art, or the cover section is not found. */
export function applyCoverArt(html, book) {
  const art = (book.cover || {}).art;
  if (!art) return { html, changed: false };
  if (!SPLIT.test(html)) return { html, changed: false };
  const block = `\n          <div class="cv-art" style="margin-top:32px;display:flex;justify-content:center">${art}</div>\n        `;
  return { html: html.replace(SPLIT, (_, head, tail) => head + block + tail), changed: true };
}
