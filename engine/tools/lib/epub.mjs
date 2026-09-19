/* ==========================================================================
   lib/epub.mjs  -  a built book -> a fixed-layout EPUB 3
   --------------------------------------------------------------------------
   This engine's whole idea is that a page is a rigid box. A reflowable EPUB
   would throw that away: the diagram, the band, the "fits or it doesn't" rule.
   So the EPUB is FIXED-LAYOUT (rendition:layout pre-paginated): one XHTML
   document per sheet, the same CSS, the same self-hosted fonts, the SVG still
   live text. It is the PDF's twin, not a different book. Apple Books, Kobo,
   Google Play and Kindle (as a fixed-layout upload) all read it.

   How a sheet becomes a page: the browser that measured the book also
   serialises it. XMLSerializer turns each .sheet into well-formed XHTML
   (closing <hr>, namespacing inline SVG), which a regex over HTML never gets
   right. Every page is parsed back as XML before the archive is written, so a
   malformed page stops the export instead of shipping.
   ========================================================================== */
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { zip } from './zip.mjs';
import { publishingFor, isbnDigits } from './schema.mjs';

const xml = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const MEDIA = {
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.gif': 'image/gif', '.webp': 'image/webp',
  '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf', '.otf': 'font/otf',
};

/* One stylesheet from the linked files, @imports inlined, every url() copied into
   the archive and re-pointed. Done on disk, not in the browser: a file:// page is
   not allowed to read its own stylesheets' rules. */
function bundleCss(file, assets, seen = new Set()) {
  if (seen.has(file)) return '';
  seen.add(file);
  let css = fs.readFileSync(file, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
  css = css.replace(/@import\s+(?:url\()?\s*['"]?([^'")\s]+)['"]?\s*\)?[^;]*;/g, (m, ref) =>
    /^(https?:|data:)/.test(ref) ? '' : bundleCss(path.resolve(path.dirname(file), ref), assets, seen));
  return css.replace(/url\(\s*['"]?([^'")]+)['"]?\s*\)/g, (m, ref) => {
    if (/^(data:|https?:|#)/.test(ref)) return m;
    const abs = path.resolve(path.dirname(file), ref.split(/[?#]/)[0]);
    if (!fs.existsSync(abs)) return m;
    return `url('../${assets.add(abs, /^font\//.test(MEDIA[path.extname(abs).toLowerCase()] || '') ? 'fonts' : 'images')}')`;
  });
}

/* Files that go in the archive, each once, under a name that cannot collide. */
function assetStore() {
  const byPath = new Map(), names = new Set();
  return {
    add(abs, folder) {
      if (byPath.has(abs)) return byPath.get(abs);
      const ext = path.extname(abs).toLowerCase();
      const stem = path.basename(abs, path.extname(abs)).replace(/[^A-Za-z0-9._-]+/g, '-') || 'file';
      let name = `${folder}/${stem}${ext}`;
      for (let n = 2; names.has(name); n++) name = `${folder}/${stem}-${n}${ext}`;
      names.add(name); byPath.set(abs, name);
      return name;
    },
    entries: () => [...byPath].map(([abs, name]) => ({ abs, name })),
  };
}

export async function exportEpub(bookHtml, out, { json = {}, edition = null, date = new Date() } = {}) {
  const abs = path.resolve(bookHtml);
  const src = fs.readFileSync(abs, 'utf8');
  const assets = assetStore();

  /* ---- the stylesheet: linked files in order, then the builder's inline <style> */
  const head = src.slice(0, src.indexOf('</head>'));
  const links = [...head.matchAll(/<link[^>]+rel="stylesheet"[^>]*>/g)]
    .map((m) => (m[0].match(/href="([^"]+)"/) || [])[1]).filter((h) => h && !/^https?:/.test(h));
  const inline = [...head.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map((m) => m[1]);
  const seen = new Set();
  const css = [
    ...links.map((h) => bundleCss(path.resolve(path.dirname(abs), h), assets, seen)),
    ...inline,
    /* An e-reader is not a desk: no gutter, no shadow, the sheet is the screen. */
    'html,body{margin:0;padding:0;background:#fff;}',
    '.deck{display:block;padding:0;gap:0;}',
    '.sheet{box-shadow:none;outline:none;margin:0;}',
  ].join('\n');

  /* ---- the pages */
  const browser = await chromium.launch();
  let pages, size, cover, lang;
  try {
    const page = await browser.newPage({ deviceScaleFactor: 2 });
    await page.goto(pathToFileURL(abs).href, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);

    const got = await page.evaluate(() => {
      const sheets = [...document.querySelectorAll('.sheet')];
      if (!sheets.length) return null;
      const r = sheets[0].getBoundingClientRect();
      const images = [];
      const kindOf = (el) => el.classList.contains('bb') ? 'page'
        : ['matter', 'cover', 'colophon', 'toc', 'divider', 'index'].find((k) => el.classList.contains(k)) || 'other';
      const out = sheets.map((el, i) => {
        const clone = el.cloneNode(true);
        clone.classList.remove('is-overflowing');
        clone.querySelectorAll('.of-badge, script').forEach((n) => n.remove());
        const real = [...el.querySelectorAll('img')];
        [...clone.querySelectorAll('img')].forEach((img, k) => {
          if (/^data:/.test(real[k].getAttribute('src') || '')) return;
          images.push({ page: i, index: k, url: real[k].src });
          img.setAttribute('data-epub-img', `${i}:${k}`);
        });
        return {
          kind: kindOf(el),
          title: el.dataset.title || (el.querySelector('.title, .dv-name, .lp-title, .cv-title, .cl-title')?.textContent || '').replace(/\s+/g, ' ').trim(),
          xhtml: new XMLSerializer().serializeToString(clone),
        };
      });
      return { out, images, w: r.width, h: r.height, lang: document.documentElement.lang || '' };
    });
    if (!got) throw new Error('No .sheet found in ' + bookHtml);

    const srcOf = new Map();
    for (const im of got.images) {
      if (!im.url.startsWith('file:')) continue;       // preflight already warns about network images
      const file = fileURLToPath(im.url);
      if (fs.existsSync(file)) srcOf.set(`${im.page}:${im.index}`, '../' + assets.add(file, 'images'));
    }
    pages = got.out.map((p) => ({
      ...p,
      xhtml: p.xhtml.replace(/<img\b[^>]*?data-epub-img="([^"]+)"[^>]*>/g, (tag, key) => {
        const clean = tag.replace(/\sdata-epub-img="[^"]*"/, '');
        return srcOf.has(key) ? clean.replace(/\ssrc="[^"]*"/, ` src="${srcOf.get(key)}"`) : clean;
      }).replace(/href="#s(\d+)"/g, (m, n) => `href="p${String(n).padStart(4, '0')}.xhtml"`),   // cross-references: one sheet, one file
    }));
    size = { w: Math.round(got.w), h: Math.round(got.h) };
    lang = json.language || got.lang || 'en';

    /* stores show a cover image, not the first page */
    await page.setViewportSize({ width: size.w + 40, height: size.h + 40 });
    cover = await (await page.$('.sheet')).screenshot({ type: 'jpeg', quality: 92 });

    /* ---- every page has to be XML before it is allowed in the archive */
    const docs = pages.map((p, i) => pageDoc(p, i, size, lang));
    const bad = await page.evaluate((list) => list.map((d, i) => {
      const e = new DOMParser().parseFromString(d, 'application/xhtml+xml').querySelector('parsererror');
      return e ? `page ${i + 1}: ${e.textContent.trim().slice(0, 160)}` : null;
    }).filter(Boolean), docs);
    if (bad.length) throw new Error('Not well-formed XHTML, so no EPUB was written:\n  ' + bad.join('\n  '));
    pages.forEach((p, i) => (p.doc = docs[i]));
  } finally {
    await browser.close();
  }

  /* ---- the package */
  const pub = publishingFor({ title: path.basename(path.dirname(abs)), ...json }, edition);
  const title = pub.title;
  const seed = crypto.createHash('sha256').update(`paper-engine:${path.basename(path.dirname(abs))}:${edition || 'full'}`).digest('hex');
  const uuid = `${seed.slice(0, 8)}-${seed.slice(8, 12)}-5${seed.slice(13, 16)}-a${seed.slice(17, 20)}-${seed.slice(20, 32)}`;
  /* An EPUB ISBN is the id. Without one: your own urn, or one derived from the folder.
     Either way it is the same book, same id, every release. */
  const identifier = pub.isbn.epub ? `urn:isbn:${isbnDigits(pub.isbn.epub)}` : json.identifier || `urn:uuid:${uuid}`;
  const file = (i) => `pages/p${String(i + 1).padStart(4, '0')}.xhtml`;
  const stores = assets.entries();

  const manifest = [
    '<item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>',
    '<item id="css" href="css/book.css" media-type="text/css"/>',
    '<item id="cover-image" href="images/cover.jpg" media-type="image/jpeg" properties="cover-image"/>',
    ...stores.map((a, i) => `<item id="a${i + 1}" href="${xml(a.name)}" media-type="${MEDIA[path.extname(a.name)] || 'application/octet-stream'}"/>`),
    ...pages.map((p, i) => `<item id="p${i + 1}" href="${file(i)}" media-type="application/xhtml+xml"${/<svg[\s>]/.test(p.xhtml) ? ' properties="svg"' : ''}/>`),
  ];

  const opf = `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="pub-id" xml:lang="${xml(lang)}"
         prefix="rendition: http://www.idpf.org/vocab/rendition/# schema: http://schema.org/">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:identifier id="pub-id">${xml(identifier)}</dc:identifier>
    <dc:title>${xml(title)}</dc:title>
    <dc:language>${xml(lang)}</dc:language>
    ${pub.author ? `<dc:creator>${xml(pub.author)}</dc:creator>` : ''}
    ${pub.description || pub.subtitle ? `<dc:description>${xml(pub.description || pub.subtitle)}</dc:description>` : ''}
    ${pub.publisher ? `<dc:publisher>${xml(pub.publisher)}</dc:publisher>` : ''}
    ${pub.published ? `<dc:date>${xml(pub.published)}</dc:date>` : ''}
    ${[...pub.keywords, ...pub.categories].map((k) => `<dc:subject>${xml(k)}</dc:subject>`).join('\n    ')}
    ${pub.rights ? `<dc:rights>${xml(pub.rights)}</dc:rights>` : ''}
    <meta property="dcterms:modified">${date.toISOString().slice(0, 19)}Z</meta>
    <meta property="rendition:layout">pre-paginated</meta>
    <meta property="rendition:orientation">auto</meta>
    <meta property="rendition:spread">auto</meta>
    <meta property="schema:accessMode">textual</meta>
    <meta property="schema:accessMode">visual</meta>
    <meta property="schema:accessModeSufficient">textual,visual</meta>
    <meta property="schema:accessibilityFeature">alternativeText</meta>
    <meta property="schema:accessibilityFeature">tableOfContents</meta>
    <meta property="schema:accessibilityHazard">none</meta>
    <meta property="schema:accessibilitySummary">Fixed-layout pages with live, selectable text. Every photograph has alternative text and every diagram a text description.</meta>
  </metadata>
  <manifest>
    ${manifest.join('\n    ')}
  </manifest>
  <spine>
    ${pages.map((p, i) => `<itemref idref="p${i + 1}"/>`).join('\n    ')}
  </spine>
</package>
`;

  const entries = [
    { name: 'mimetype', data: 'application/epub+zip', store: true },   // first, and uncompressed: the spec insists
    { name: 'META-INF/container.xml', data: `<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles><rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/></rootfiles>
</container>
` },
    { name: 'OEBPS/content.opf', data: opf },
    { name: 'OEBPS/nav.xhtml', data: navDoc(pages, file, title, lang) },
    { name: 'OEBPS/css/book.css', data: css },
    { name: 'OEBPS/images/cover.jpg', data: cover, store: true },
    ...stores.map((a) => ({ name: 'OEBPS/' + a.name, data: fs.readFileSync(a.abs), store: /\.(jpe?g|png|webp|woff2?)$/i.test(a.name) })),
    ...pages.map((p, i) => ({ name: 'OEBPS/' + file(i), data: p.doc })),
  ];

  const target = path.resolve(out);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, zip(entries, date));
  return { file: target, pages: pages.length, assets: stores.length, identifier };
}

/* One sheet, one document. The page counter is a CSS counter that used to run down a
   single long file; here each page starts it one short of its own number. */
function pageDoc(p, i, size, lang) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="${xml(lang)}" xml:lang="${xml(lang)}" data-size="b5">
<head>
  <meta charset="utf-8"/>
  <title>${xml(p.title || p.kind)}</title>
  <meta name="viewport" content="width=${size.w}, height=${size.h}"/>
  <link rel="stylesheet" type="text/css" href="../css/book.css"/>
</head>
<body>
  <main class="deck" style="counter-reset: pageno ${i} bbpage ${i};">
${p.xhtml}
  </main>
</body>
</html>
`;
}

function navDoc(pages, file, title, lang) {
  const link = (i, label) => `<a href="${file(i)}">${xml(label)}</a>`;
  const NAMES = { cover: 'Cover', colophon: 'Copyright', toc: 'Contents', index: 'Index' };
  const items = [];
  let open = false, lastKind = null, lastTitle = null;
  pages.forEach((p, i) => {
    if (p.kind === 'page') { items.push(`      <li>${link(i, p.title)}</li>`); return; }
    if (open) { items.push('    </ol></li>'); open = false; }
    if (p.kind === 'divider') { items.push(`    <li>${link(i, p.title || 'Part')}<ol>`); open = true; }
    else if (p.kind === 'matter') { if (p.title !== lastTitle) items.push(`    <li>${link(i, p.title || 'Page')}</li>`); }   // a preface over two sheets is one entry
    else if (p.kind !== lastKind) items.push(`    <li>${link(i, NAMES[p.kind] || p.title || 'Page')}</li>`);   // a 2-sheet contents is one entry
    lastKind = p.kind; lastTitle = p.title;
  });
  if (open) items.push('    </ol></li>');
  /* a part with no pages would leave an empty <ol>, which is invalid */
  const toc = items.join('\n').replace(/<ol>\n\s*<\/ol>/g, '');
  const first = (k) => pages.findIndex((p) => p.kind === k);
  const marks = [['cover', 'cover', 'Cover'], ['toc', 'toc', 'Contents'], ['page', 'bodymatter', 'Start reading'], ['index', 'index', 'Index']]
    .filter(([k]) => first(k) !== -1)
    .map(([k, type, label]) => `    <li><a epub:type="${type}" href="${file(first(k))}">${label}</a></li>`);

  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="${xml(lang)}" xml:lang="${xml(lang)}">
<head><meta charset="utf-8"/><title>${xml(title)}</title></head>
<body>
  <nav epub:type="toc" id="toc"><h1>Contents</h1><ol>
${toc}
  </ol></nav>
  <nav epub:type="landmarks" id="landmarks" hidden=""><h2>Guide</h2><ol>
${marks.join('\n')}
  </ol></nav>
  <nav epub:type="page-list" id="page-list" hidden=""><h2>Pages</h2><ol>
${pages.map((p, i) => `    <li>${link(i, String(i + 1))}</li>`).join('\n')}
  </ol></nav>
</body>
</html>
`;
}
