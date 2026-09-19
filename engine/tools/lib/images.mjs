/* ==========================================================================
   lib/images.mjs  -  a book's pictures, as data
   --------------------------------------------------------------------------
   A page says <img src="images/x.jpg">, and until now that was everything the
   book knew about x.jpg. books/<slug>/images.json records the rest: where
   each picture came from, what rights you hold, and the prompt that made it,
   with ONE shared style sentence for the whole book.

   Two things are deliberately not in the manifest:
     - which page uses a picture. That is read from the pages, so it cannot
       go stale.
     - alt text. It lives on the <img>, where it ships; preflight checks it.
   ========================================================================== */
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, loadBook } from './book.mjs';
import { validate } from './schema.mjs';

export const IMAGE_RE = /\.(jpe?g|png|webp|gif|svg)$/i;
const SCHEMA = path.join(ROOT, 'engine', 'images.schema.json');
const NEEDS_LICENCE = new Set(['licensed', 'public-domain', 'screenshot']);

export const validateImagesJson = (json) => validate(json, JSON.parse(fs.readFileSync(SCHEMA, 'utf8')));

/* The prompt a picture is made from: its own, word for word, or its subject in the
   book's shared style. */
export function promptFor(manifest, name) {
  const e = manifest?.images?.[name];
  if (!e || e.source !== 'generated' || (!e.prompt && !e.subject)) return '';   // a photograph you took has no prompt
  if (e.prompt) return e.prompt.trim();
  return [e.subject, manifest.style].map((s) => (s || '').trim()).filter(Boolean).join(' ');
}

/* images/x.jpg -> the titles of the pages that show it */
function usage(book) {
  const used = new Map();
  for (const p of book.pages) {
    for (const m of p.html.matchAll(/(?:src|href)\s*=\s*"images\/([^"?#]+)"/g)) {
      const name = decodeURIComponent(m[1]);
      used.set(name, [...new Set([...(used.get(name) || []), p.title])]);
    }
  }
  return used;
}

export function loadImages(dir) {
  const book = loadBook(dir);
  const imgDir = path.join(dir, 'images');
  const manifestPath = path.join(dir, 'images.json');
  let manifest = null, parseError = null;
  if (fs.existsSync(manifestPath)) {
    try { manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8')); } catch (e) { parseError = e.message; }
  }
  const shape = manifest ? validateImagesJson(manifest) : { errors: [], unknown: [] };
  const files = fs.existsSync(imgDir) ? fs.readdirSync(imgDir).filter((f) => IMAGE_RE.test(f)).sort() : [];
  const used = usage(book);
  const listed = Object.keys(manifest?.images || {});
  const names = [...new Set([...files, ...used.keys(), ...listed])].sort();

  const entries = names.map((name) => {
    const e = manifest?.images?.[name] || null;
    const file = path.join(imgDir, name);
    const exists = files.includes(name);
    const usedBy = used.get(name) || [];
    const inBook = usedBy.filter((t) => book.partOf.has(t));
    const licence = e?.licence || (e ? manifest.licence : '') || '';
    const problems = [];
    if (!exists) problems.push(usedBy.length ? 'a page shows it, but the file is missing' : 'listed in images.json, but there is no such file');
    if (manifest && !e && exists) problems.push('not in images.json');
    if (e && NEEDS_LICENCE.has(e.source) && !licence) problems.push(e.source === 'screenshot'
      ? 'a screenshot, but no licence says what lets you print it: the vendor\'s screenshot permission, or "my own software"'
      : `${e.source}, but no licence is written down`);
    if (e && e.source === 'licensed' && !e.credit && !e.url) problems.push('licensed, but no credit or url says from whom');
    if (e && e.source === 'generated' && !e.prompt && !e.subject) problems.push('generated, but no subject or prompt, so it cannot be made again');
    return {
      name, exists, bytes: exists ? fs.statSync(file).size : 0, mtime: exists ? Math.round(fs.statSync(file).mtimeMs) : 0,
      usedBy, inBook, entry: e, licence, prompt: promptFor(manifest, name),
      hasPromptFile: fs.existsSync(file.replace(IMAGE_RE, '.txt')), problems,
    };
  });

  return {
    hasManifest: !!manifest, parseError, manifest, shape, entries,
    style: manifest?.style || '',
    counts: { files: files.length, used: entries.filter((x) => x.usedBy.length).length, unused: entries.filter((x) => x.exists && !x.usedBy.length).length },
  };
}

/* A first images.json from what is already in the folder. It records only what the
   folder can prove: a picture with a saved prompt beside it was generated. Everything
   else about rights is left for the author, because a guessed licence is worse than none. */
export function draftManifest(dir) {
  const imgDir = path.join(dir, 'images');
  const files = fs.existsSync(imgDir) ? fs.readdirSync(imgDir).filter((f) => IMAGE_RE.test(f)).sort() : [];
  const prompts = new Map();
  for (const f of files) {
    const txt = path.join(imgDir, f.replace(IMAGE_RE, '.txt'));
    if (fs.existsSync(txt)) prompts.set(f, fs.readFileSync(txt, 'utf8').replace(/\s+/g, ' ').trim());
  }
  /* the shared style is the run of whole sentences every prompt ends with */
  let style = '';
  const all = [...prompts.values()];
  if (all.length > 1) {
    const tails = all.map((p) => p.split(/(?<=[.!?])\s+/).reverse());
    const same = [];
    for (let i = 0; tails.every((t) => t[i] !== undefined && t[i] === tails[0][i]); i++) same.unshift(tails[0][i]);
    if (same.join(' ').length >= 40 && same.length < tails[0].length) style = same.join(' ');
  }
  const images = {};
  for (const f of files) {
    const p = prompts.get(f);
    if (!p) { images[f] = { source: 'own', note: 'CHECK THIS: no saved prompt was found, so "own" is a guess. Set source, and licence/credit if it is someone else\'s.' }; continue; }
    images[f] = style && p.endsWith(style) ? { source: 'generated', subject: p.slice(0, p.length - style.length).trim() } : { source: 'generated', prompt: p };
  }
  return { $schema: '../../engine/images.schema.json', style, aspect: '16:9', licence: '', images };
}
