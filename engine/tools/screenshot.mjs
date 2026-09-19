/* ==========================================================================
   screenshot.mjs  -  get a capture of real software into a book, on the record
   --------------------------------------------------------------------------
   Two ways in. Either way the file lands in books/<slug>/images/ and is
   written into images.json as source "screenshot", with what it shows and
   when it was taken, because software changes and a stale screen is a wrong
   page.

   A capture you took yourself (a desktop app, anything behind a sign-in):
       node engine/tools/screenshot.mjs books/<slug> --add ~/Desktop/roles.png \
            --name rls-manage-roles.png --app "Power BI Desktop" --version "<version>" --scale 2

   A page anyone can open, captured here at 2x so it prints sharp:
       node engine/tools/screenshot.mjs books/<slug> --url https://example.com/docs \
            --name docs-home.png [--selector "main"] [--width 1100] [--height 700] [--wait 800] [--app "…"]

   --scale is how many capture pixels make one screen point: 2 for a "Retina"
   or 200% display, 1 for a plain one. It is how preflight knows how big the
   text in the capture really is.

   This never signs in to anything and never types a password. It does NOT set
   a licence, and it does NOT say the capture is free of private data: both are
   the author's to state (images.json, or the Studio's Images tab).
   ========================================================================== */
import fs from 'node:fs';
import path from 'node:path';
import { imageSize, registerShot, figureFor } from './lib/screens.mjs';

const argv = process.argv.slice(2);
const VALUE = new Set(['add', 'url', 'name', 'app', 'version', 'scale', 'selector', 'width', 'height', 'wait', 'captured']);
const flag = (f) => { const i = argv.indexOf('--' + f); return i === -1 ? null : argv[i + 1]; };
const positional = argv.filter((a, i) => !a.startsWith('--') && !(argv[i - 1]?.startsWith('--') && VALUE.has(argv[i - 1].slice(2))));
const die = (msg) => { console.error('\n' + msg + '\n'); process.exit(1); };
const today = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };

const bookDir = positional[0];
if (!bookDir || (!flag('add') && !flag('url'))) die('Usage: node engine/tools/screenshot.mjs books/<slug> (--add <file> | --url <url>) --name <file.png> [--app "…"] [--version "…"] [--scale 2]');
const dir = path.resolve(bookDir);
if (!fs.existsSync(path.join(dir, 'book.json'))) die(`No book.json in ${bookDir}.`);

const name = flag('name') || (flag('add') ? path.basename(flag('add')) : null);
if (!name || !/^[A-Za-z0-9][A-Za-z0-9._-]*\.(png|jpe?g|webp)$/i.test(name)) die('Give it a plain file name with --name: letters, digits, dots and hyphens, ending .png or .jpg.\nName it for what it shows: rls-manage-roles.png, not Screenshot 2026-09-19.png.');
const out = path.join(dir, 'images', name);
fs.mkdirSync(path.dirname(out), { recursive: true });
if (fs.existsSync(out)) {   // the one you are replacing is kept until next time, as images.mjs does
  fs.mkdirSync(path.join(dir, 'images', '.previous'), { recursive: true });
  fs.copyFileSync(out, path.join(dir, 'images', '.previous', name));
}

let scale = Number(flag('scale')) || 0, url = '';
if (flag('add')) {
  const from = path.resolve(flag('add'));
  if (!fs.existsSync(from)) die(`No such file: ${flag('add')}`);
  if (path.resolve(from) !== path.resolve(out)) fs.copyFileSync(from, out);
  scale ||= 1;
} else {
  url = flag('url');
  if (!/^https?:\/\//.test(url)) die('--url has to start with http:// or https://');
  scale ||= 2;
  const { chromium } = await import('playwright');
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: Number(flag('width')) || 1100, height: Number(flag('height')) || 700 }, deviceScaleFactor: scale });
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
    if (flag('wait')) await page.waitForTimeout(Number(flag('wait')));
    const target = flag('selector') ? page.locator(flag('selector')).first() : page;
    await target.screenshot({ path: out, type: /\.jpe?g$/i.test(name) ? 'jpeg' : 'png' });
  } catch (e) { die(`Could not capture ${url}:\n  ${e.message.split('\n')[0]}`); } finally { await browser.close(); }
}

const size = imageSize(out);
registerShot(dir, name, { app: flag('app'), version: flag('version'), url, scale, captured: flag('captured') || today() });

const rel = path.relative(process.cwd(), out).replace(/\\/g, '/');
console.log(`wrote ${rel}${size ? `  (${size.w}x${size.h}, ${Math.round(size.w / scale)} points wide at ${scale}x)` : ''}`);
console.log(`  on record in images.json as a screenshot, captured ${flag('captured') || today()}.`);
if (size && size.w / scale > 1150) console.log(`  ! It is ${Math.round(size.w / scale)} points wide and the band is about 560. Its text will print at ${Math.round(56000 / (size.w / scale))}% of its size: crop to the part the page is about.`);
console.log('  Still yours to do: say what lets you print it ("licence"), and look it over for names, emails, keys and customer data.');
console.log('\nThe band, to paste into the page in place of the diagram:\n');
console.log(figureFor(name));
