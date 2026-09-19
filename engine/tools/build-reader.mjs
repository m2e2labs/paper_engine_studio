/* ==========================================================================
   build-reader.mjs - make a reflowable web reader and EPUB from a book source

   Usage:
     node engine/tools/build-reader.mjs books/<slug>
     node engine/tools/build-reader.mjs books/<slug> --edition free

   Writes reader.html (a responsive, offline web reader) and book.epub. Unlike
   book.html these outputs deliberately reflow: PDF remains the print edition.
   ========================================================================== */
import fs from 'node:fs';
import path from 'node:path';

const argv = process.argv.slice(2);
const bookDirArg = argv.find((arg) => !arg.startsWith('--'));
const flag = (name) => {
  const i = argv.indexOf(`--${name}`);
  return i === -1 ? null : argv[i + 1];
};
const die = (message) => { console.error(`\n${message}\n`); process.exit(1); };
if (!bookDirArg) die('Usage: node engine/tools/build-reader.mjs books/<slug> [--edition <name>]');

const bookDir = path.resolve(bookDirArg);
const slug = path.basename(bookDir);
const editionName = flag('edition');
const suffix = editionName ? `-${editionName}` : '';
const readerPath = path.join(bookDir, `reader${suffix}.html`);
const epubPath = path.join(bookDir, `book${suffix}.epub`);
const esc = (value) => String(value ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const plain = (value) => String(value ?? '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
const xml = (value) => esc(value).replace(/'/g, '&apos;');
const idFor = (value, n) => `${String(value).toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'chapter'}-${n + 1}`;

if (!fs.existsSync(bookDir)) die(`No such book folder: ${bookDirArg}`);
let book;
try { book = JSON.parse(fs.readFileSync(path.join(bookDir, 'book.json'), 'utf8')); }
catch (error) { die(`Could not read book.json: ${error.message}`); }
const interiorPath = path.join(bookDir, book.interior || `${slug}.html`);
if (!fs.existsSync(interiorPath)) die(`No interior file at ${interiorPath}`);

const source = fs.readFileSync(interiorPath, 'utf8');
const scan = source.replace(/<!--[\s\S]*?-->/g, (match) => ' '.repeat(match.length));
const opens = [...scan.matchAll(/<section class="sheet bb[^"]*">/g)];
if (!opens.length) die('No <section class="sheet bb"> pages found.');
const closeAt = scan.lastIndexOf('</section>') + '</section>'.length;
const pool = new Map();
for (let i = 0; i < opens.length; i++) {
  const start = opens[i].index;
  const end = i + 1 < opens.length ? opens[i + 1].index : closeAt;
  const chunk = source.slice(start, end).replace(/\s+$/, '');
  const heading = chunk.match(/<h1 class="title">([\s\S]*?)<\/h1>/);
  if (!heading) die('Every page needs a <h1 class="title">.');
  const title = plain(heading[1]);
  if (pool.has(title)) die(`Two pages are titled "${title}".`);
  pool.set(title, chunk);
}

const selected = editionName ? (book.editions || {})[editionName] : null;
if (editionName && !selected) die(`No edition named "${editionName}" in book.json.`);
const keep = selected ? new Set(selected) : null;
const parts = (book.parts || []).map((part) => ({ ...part, titles: (part.blocks || []).filter((title) => !keep || keep.has(title)) })).filter((part) => part.titles.length);
if (!parts.length) die('book.json has no selected pages in "parts".');
const titles = parts.flatMap((part) => part.titles);
for (const title of titles) if (!pool.has(title)) die(`book.json lists "${title}", but no matching page exists.`);
if (keep) for (const title of keep) if (!pool.has(title)) die(`The ${editionName} edition lists "${title}", but no matching page exists.`);

// Inline SVG ids are document-global in a web reader. Prefix them per chapter so
// repeated arrow/gradient ids from otherwise independent pages cannot collide.
function prefixSvgIds(markup, prefix) {
  const ids = new Map();
  const withIds = markup.replace(/\bid=(['"])([^'"]+)\1/g, (all, quote, id) => {
    const next = `${prefix}-${id}`;
    ids.set(id, next);
    return `id=${quote}${next}${quote}`;
  });
  let result = withIds;
  for (const [oldId, newId] of ids) {
    const escaped = oldId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    result = result.replace(new RegExp(`url\\(#${escaped}\\)`, 'g'), `url(#${newId})`)
      .replace(new RegExp(`(["'])#${escaped}\\1`, 'g'), `$1#${newId}$1`);
  }
  return result;
}
function inner(chunk) {
  return chunk.replace(/^<section class="sheet bb[^"]*">/, '').replace(/<\/section>\s*$/, '').replace(/<script[\s\S]*?<\/script>/gi, '');
}

const chapters = titles.map((title, index) => ({
  title,
  id: idFor(title, index),
  part: parts.find((part) => part.titles.includes(title))?.name || '',
  body: prefixSvgIds(inner(pool.get(title)), `chapter-${index + 1}`),
}));
const B = {
  title: book.title || slug,
  subtitle: book.subtitle || '',
  author: book.author || '',
  brand: book.brand || '',
  accent: book.accent || '#6366F1',
};

const readerCss = `
  :root { color-scheme: light dark; --paper:#fcfcfe; --ink:#1a1a2e; --muted:#586174; --line:#e1e4eb; --card:#fff; --accent:${B.accent}; --measure:46rem; font: 18px/1.65 Inter, ui-sans-serif, system-ui, sans-serif; }
  * { box-sizing:border-box; } body { margin:0; background:#f2f3f7; color:var(--ink); } a { color:inherit; } .reader-bar { position:sticky; top:0; z-index:2; display:flex; gap:.7rem; align-items:center; justify-content:space-between; padding:.75rem max(1rem, calc((100vw - var(--measure))/2)); background:color-mix(in srgb, var(--paper) 94%, transparent); border-bottom:1px solid var(--line); backdrop-filter:blur(12px); } .reader-bar a { text-decoration:none; font-weight:700; } .controls { display:flex; gap:.35rem; } button { border:1px solid var(--line); border-radius:.5rem; padding:.28rem .55rem; background:var(--card); color:inherit; font:inherit; cursor:pointer; } main { max-width:var(--measure); margin:auto; background:var(--paper); min-height:100vh; padding:clamp(2rem, 8vw, 6rem) clamp(1.15rem, 6vw, 4.5rem); } .cover { min-height:62vh; display:flex; flex-direction:column; justify-content:center; border-bottom:1px solid var(--line); } .kicker { color:var(--accent); font-size:.76rem; font-weight:800; letter-spacing:.13em; text-transform:uppercase; } .cover h1 { font-size:clamp(2.5rem, 9vw, 5.6rem); line-height:1; letter-spacing:-.055em; margin:.65rem 0; } .subtitle { color:var(--muted); font-size:1.25rem; max-width:35rem; } .author { margin-top:2rem; font-weight:700; } nav { margin:3rem 0 4rem; padding:1.5rem; border:1px solid var(--line); border-radius:1rem; background:var(--card); } nav h2 { margin-top:0; } nav ol { padding-left:1.4rem; } nav li + li { margin-top:.45rem; } .part { margin:5rem 0 1.25rem; color:var(--accent); font-size:.82rem; font-weight:800; letter-spacing:.12em; text-transform:uppercase; } article { scroll-margin-top:5rem; } article + article { margin-top:4rem; padding-top:4rem; border-top:1px solid var(--line); } .sheet { display:block; padding:0; background:transparent; min-height:0; width:auto; height:auto; } .sheet .tab, .sheet .top, .sheet .foot, .sheet .rule, .sheet .sr { display:none; } .sheet .title { font-size:clamp(2rem, 6vw, 3.6rem); line-height:1.06; letter-spacing:-.045em; margin:0; } .sheet .sub { color:var(--muted); font-size:1.15rem; margin:.4rem 0 1.8rem; } .sheet .diagram, .sheet .photo { margin:1.5rem 0; } .sheet .diagram svg, .sheet .photo img { display:block; width:100%; max-height:none; height:auto; border-radius:.85rem; } .sheet .explain { font-size:1.05rem; } .sheet .explain p + p { margin-top:1em; } .sheet .ask { margin-top:1.5rem; padding:1rem 1.2rem; border-left:4px solid var(--accent); background:color-mix(in srgb, var(--accent) 7%, var(--card)); border-radius:.5rem; } .sheet .ask .lbl { font-size:.76rem; font-weight:800; letter-spacing:.1em; color:var(--accent); } .sheet .ask p { margin:.35rem 0 0; } .sheet .cue { color:var(--muted); } .sheet a { text-decoration-color:var(--accent); text-underline-offset:.16em; } body.dark { --paper:#161923; --ink:#f3f5fb; --muted:#b1b9ca; --line:#343a4b; --card:#202532; background:#0e1118; } @media (max-width: 36rem) { :root { font-size:16px; } .reader-bar { padding:.65rem 1rem; } main { padding:2.5rem 1.15rem; } } @media print { .reader-bar { display:none; } body, main { background:#fff; } main { max-width:none; padding:0; } article { break-inside:avoid; } }`;

const toc = parts.map((part) => `<li><strong>${esc(part.name)}</strong><ol>${part.titles.map((title) => { const c = chapters.find((chapter) => chapter.title === title); return `<li><a href="#${c.id}">${esc(title)}</a></li>`; }).join('')}</ol></li>`).join('');
const readerChapters = chapters.map((chapter) => `<article id="${chapter.id}"><div class="sheet bb">${chapter.body}</div></article>`).join('\n');
const reader = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="${esc(B.title)} — a reflowable edition"><title>${esc(B.title)} — Reader</title><style>${readerCss}</style></head><body><header class="reader-bar"><a href="#top">${esc(B.title)}</a><div class="controls"><button type="button" data-size="-1" aria-label="Smaller text">A−</button><button type="button" data-size="1" aria-label="Larger text">A+</button><button type="button" id="theme" aria-label="Toggle colour theme">◐</button></div></header><main id="top"><section class="cover"><p class="kicker">Reflowable edition</p><h1>${esc(B.title)}</h1>${B.subtitle ? `<p class="subtitle">${esc(B.subtitle)}</p>` : ''}<p class="author">${esc(B.author)}</p></section><nav aria-label="Contents"><h2>Contents</h2><ol>${toc}</ol></nav>${readerChapters}</main><script>const root=document.documentElement, saved=Number(localStorage.getItem('paper-engine-font')||0); root.style.fontSize=18+saved+'px'; document.querySelectorAll('[data-size]').forEach(b=>b.onclick=()=>{const n=Math.max(-3,Math.min(8,Number(localStorage.getItem('paper-engine-font')||0)+Number(b.dataset.size)));localStorage.setItem('paper-engine-font',n);root.style.fontSize=18+n+'px'});document.getElementById('theme').onclick=()=>document.body.classList.toggle('dark');</script></body></html>`;
fs.writeFileSync(readerPath, reader);

function xhtmlFragment(markup) {
  return markup.replace(/<(img|br|hr|meta|link|input)(\b[^>]*?)(?<!\/)\s*>/gi, '<$1$2 />');
}
function mediaType(filename) {
  const ext = path.extname(filename).toLowerCase();
  return ({ '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.png':'image/png', '.gif':'image/gif', '.svg':'image/svg+xml', '.webp':'image/webp', '.css':'text/css', '.woff2':'font/woff2' })[ext] || 'application/octet-stream';
}
function localAssetRefs(markup) {
  const refs = [];
  for (const match of markup.matchAll(/\b(?:src|href)=(['"])([^'"]+)\1/gi)) {
    const ref = match[2].split(/[?#]/, 1)[0];
    if (!ref || /^(?:[a-z]+:|\/\/|#)/i.test(ref)) continue;
    const absolute = path.resolve(bookDir, ref);
    const relative = path.relative(bookDir, absolute);
    if (!relative.startsWith('..') && !path.isAbsolute(relative) && fs.existsSync(absolute) && fs.statSync(absolute).isFile()) refs.push(relative.replace(/\\/g, '/'));
  }
  return refs;
}
const assets = [...new Set(chapters.flatMap((chapter) => localAssetRefs(chapter.body)))];
function epubBody(chapter) {
  let body = xhtmlFragment(chapter.body);
  for (const asset of assets) {
    const escaped = asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    body = body.replace(new RegExp(`(["'])${escaped}([?#][^"']*)?\\1`, 'g'), `$1../assets/${asset}$2$1`);
  }
  return body;
}
const epubCss = readerCss.replace(/color-scheme: light dark;/, '').replace(/@media print[\s\S]*$/, '') + '\nbody{background:#fff}.reader-bar{display:none}main{padding:0;max-width:none}.cover{min-height:0}.sheet .diagram svg{max-width:100%}';
const navItems = chapters.map((chapter, index) => `<li><a href="text/${String(index + 1).padStart(3, '0')}.xhtml">${xml(chapter.title)}</a></li>`).join('');
const manifest = chapters.map((chapter, index) => `<item id="chapter-${index + 1}" href="text/${String(index + 1).padStart(3, '0')}.xhtml" media-type="application/xhtml+xml"/>`).join('') + assets.map((asset, index) => `<item id="asset-${index + 1}" href="assets/${xml(asset)}" media-type="${mediaType(asset)}"/>`).join('');
const spine = chapters.map((chapter, index) => `<itemref idref="chapter-${index + 1}"/>`).join('');
const identifier = `urn:paper-engine:${slug}${suffix}`;
const entries = [
  ['mimetype', Buffer.from('application/epub+zip')],
  ['META-INF/container.xml', Buffer.from('<?xml version="1.0" encoding="UTF-8"?><container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container"><rootfiles><rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/></rootfiles></container>')],
  ['OEBPS/styles/reader.css', Buffer.from(epubCss)],
  ['OEBPS/nav.xhtml', Buffer.from(`<?xml version="1.0" encoding="utf-8"?><!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" lang="en"><head><title>Contents</title><link rel="stylesheet" href="styles/reader.css"/></head><body><nav epub:type="toc" id="toc" role="doc-toc" xmlns:epub="http://www.idpf.org/2007/ops"><h1>Contents</h1><ol>${navItems}</ol></nav></body></html>`)],
  ['OEBPS/content.opf', Buffer.from(`<?xml version="1.0" encoding="utf-8"?><package xmlns="http://www.idpf.org/2007/opf" unique-identifier="book-id" version="3.0" xml:lang="en"><metadata xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:identifier id="book-id">${xml(identifier)}</dc:identifier><dc:title>${xml(B.title)}</dc:title><dc:creator>${xml(B.author)}</dc:creator><dc:language>en</dc:language><meta property="dcterms:modified">1980-01-01T00:00:00Z</meta></metadata><manifest><item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/><item id="css" href="styles/reader.css" media-type="text/css"/>${manifest}</manifest><spine>${spine}</spine></package>`)],
];
chapters.forEach((chapter, index) => entries.push([`OEBPS/text/${String(index + 1).padStart(3, '0')}.xhtml`, Buffer.from(`<?xml version="1.0" encoding="utf-8"?><!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" lang="en"><head><title>${xml(chapter.title)}</title><link rel="stylesheet" href="../styles/reader.css"/></head><body><main><article id="${chapter.id}"><div class="sheet bb">${epubBody(chapter)}</div></article></main></body></html>`)]));
assets.forEach((asset) => entries.push([`OEBPS/assets/${asset}`, fs.readFileSync(path.join(bookDir, asset))]));

// EPUB is ZIP. A small store-only writer keeps the export dependency-free and
// deterministic; readers support stored entries just as they support deflated ones.
function crc32(buffer) { let crc = 0xffffffff; for (const byte of buffer) { crc ^= byte; for (let bit = 0; bit < 8; bit++) crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1)); } return (crc ^ 0xffffffff) >>> 0; }
function u16(value) { const b = Buffer.alloc(2); b.writeUInt16LE(value); return b; }
function u32(value) { const b = Buffer.alloc(4); b.writeUInt32LE(value >>> 0); return b; }
const local = [], central = []; let offset = 0;
for (const [name, data] of entries) {
  const nameBytes = Buffer.from(name); const crc = crc32(data);
  const header = Buffer.concat([Buffer.from([0x50,0x4b,0x03,0x04]),u16(20),u16(0),u16(0),u16(0),u16(0),u32(crc),u32(data.length),u32(data.length),u16(nameBytes.length),u16(0),nameBytes]);
  local.push(header, data);
  central.push(Buffer.concat([Buffer.from([0x50,0x4b,0x01,0x02]),u16(20),u16(20),u16(0),u16(0),u16(0),u16(0),u32(crc),u32(data.length),u32(data.length),u16(nameBytes.length),u16(0),u16(0),u16(0),u16(0),u32(0),u32(offset),nameBytes]));
  offset += header.length + data.length;
}
const centralBytes = Buffer.concat(central);
fs.writeFileSync(epubPath, Buffer.concat([...local, centralBytes, Buffer.from([0x50,0x4b,0x05,0x06]),u16(0),u16(0),u16(entries.length),u16(entries.length),u32(centralBytes.length),u32(offset),u16(0)]));

console.log(`wrote ${path.relative(process.cwd(), readerPath)} (responsive web reader)`);
console.log(`wrote ${path.relative(process.cwd(), epubPath)} (${chapters.length} reflowable chapters, ${assets.length} bundled asset${assets.length === 1 ? '' : 's'})`);
