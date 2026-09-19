/* ==========================================================================
   images.mjs  -  a book's pictures: what they are, whose they are, and how to
                  make them again
   --------------------------------------------------------------------------
   books/<slug>/images.json is the manifest: one shared style sentence for the
   book, and for every file in images/ its source, its rights, and the subject
   it was generated from. This reads it, starts one, and regenerates from it.

   Usage:
       node engine/tools/images.mjs books/<slug>                 the report
       node engine/tools/images.mjs books/<slug> --init          write a first images.json from the folder
       node engine/tools/images.mjs books/<slug> --generate coffee-bloom.jpg [more.jpg]
       node engine/tools/images.mjs books/<slug> --generate --missing    only files that do not exist yet
       node engine/tools/images.mjs books/<slug> --generate --all        the whole set, in the current style
       ... --dry-run                                             print the commands, run nothing
       ... --provider gemini                                     this run only

   Generating calls gen-image.mjs, which costs quota (agy) or money (gemini),
   so nothing is ever generated unless you name it, or say --missing or --all.
   The picture being replaced is kept in images/.previous/ until the next time.
   The prompt that was used is saved beside the picture as <name>.txt, as always.

   Change "style" in images.json, run --generate --all, and the whole book's
   photographs change together. That is the point of having one sentence.
   ========================================================================== */
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { ROOT } from './lib/book.mjs';
import { loadImages, draftManifest, promptFor, IMAGE_RE } from './lib/images.mjs';

const argv = process.argv.slice(2);
const has = (f) => argv.includes('--' + f);
const flag = (f) => { const i = argv.indexOf('--' + f); return i === -1 ? null : argv[i + 1]; };
const positional = argv.filter((a, i) => !a.startsWith('--') && argv[i - 1] !== '--provider');
const bookDir = positional[0];
const die = (msg) => { console.error('\n' + msg + '\n'); process.exit(1); };
if (!bookDir) die('Usage: node engine/tools/images.mjs books/<slug> [--init | --generate <file...>|--missing|--all] [--dry-run] [--provider agy|gemini]');

const dir = path.resolve(bookDir);
if (!fs.existsSync(path.join(dir, 'book.json'))) die(`No book.json in ${bookDir}.`);
const manifestPath = path.join(dir, 'images.json');
const rel = (f) => path.relative(ROOT, f).replace(/\\/g, '/');

/* ------------------------------------------------------------------ --init */
if (has('init')) {
  if (fs.existsSync(manifestPath)) die(`${rel(manifestPath)} already exists. Edit it; --init never overwrites.`);
  const draft = draftManifest(dir);
  fs.writeFileSync(manifestPath, JSON.stringify(draft, null, 2) + '\n');
  const n = Object.keys(draft.images).length;
  console.log(`wrote ${rel(manifestPath)}: ${n} image(s).`);
  console.log(draft.style ? `  shared style found: "${draft.style.slice(0, 80)}…"` :
    '  No shared style sentence could be found in the saved prompts, so each keeps its whole prompt.\n  Write one in "style", then turn each "prompt" into a "subject" as you regenerate.');
  console.log('  "licence" is empty on purpose. Only you know what rights you hold: fill it in.');
  process.exit(0);
}

const state = loadImages(dir);
if (state.parseError) die(`images.json is not valid JSON:\n  ${state.parseError}`);

/* ------------------------------------------------------------------ --generate */
if (has('generate')) {
  if (!state.hasManifest) die(`No images.json in ${bookDir}. Start one:\n  node engine/tools/images.mjs ${bookDir} --init`);
  if (state.shape.errors.length) die('images.json has errors, so nothing was generated:\n' + state.shape.errors.map((e) => '  - ' + e).join('\n'));
  const m = state.manifest;
  const named = positional.slice(1);
  const unknown = named.filter((n) => !m.images[n]);
  if (unknown.length) die(`Not in images.json: ${unknown.join(', ')}`);
  const able = Object.keys(m.images).filter((n) => m.images[n].source === 'generated');
  const todo = named.length ? named : has('all') ? able : has('missing') ? able.filter((n) => !state.entries.find((e) => e.name === n)?.exists) : null;
  if (!todo) die('Say which: name the files, or --missing, or --all. Generating costs quota or money, so it is never assumed.');
  if (!todo.length) { console.log('Nothing to generate.'); process.exit(0); }
  const notGen = todo.filter((n) => m.images[n].source !== 'generated');
  if (notGen.length) die(`Not generated pictures, so they cannot be regenerated: ${notGen.join(', ')}.\nSomeone made those. Replace the file by hand.`);

  const imgDir = path.join(dir, 'images');
  let failed = 0;
  for (const name of todo) {
    const e = m.images[name];
    const prompt = promptFor(m, name);
    if (!prompt) { console.error(`✗ ${name}: no subject or prompt.`); failed++; continue; }
    const out = path.join(imgDir, name);
    const args = [path.join(ROOT, 'engine/tools/gen-image.mjs'), prompt, out, '--aspect', e.aspect || m.aspect || '16:9'];
    const provider = flag('provider') || e.provider || m.provider;
    if (provider) args.push('--provider', provider);
    for (const r of e.refs || []) args.push('--ref', path.join(imgDir, r));

    if (has('dry-run')) {
      console.log(`\n${name}\n  node engine/tools/gen-image.mjs "<prompt, ${prompt.length} chars>" ${rel(out)} ${args.slice(3).map((a) => (path.isAbsolute(a) ? rel(a) : a)).join(' ')}`);
      console.log(`  prompt: ${prompt}`);
      continue;
    }
    fs.mkdirSync(imgDir, { recursive: true });
    if (fs.existsSync(out)) {   // the one you are replacing is kept until next time
      fs.mkdirSync(path.join(imgDir, '.previous'), { recursive: true });
      fs.copyFileSync(out, path.join(imgDir, '.previous', name));
    }
    console.log(`\n→ ${name}`);
    const r = spawnSync(process.execPath, args, { cwd: ROOT, stdio: 'inherit' });
    if (r.status !== 0) { console.error(`✗ ${name}: gen-image failed. The old file is untouched or in images/.previous/.`); failed++; continue; }
    fs.writeFileSync(out.replace(IMAGE_RE, '.txt'), prompt + '\n');
    e.generated = new Date().toISOString().slice(0, 10);
    if (provider) e.provider = provider;
    fs.writeFileSync(manifestPath, JSON.stringify(m, null, 2) + '\n');   // after every picture: a crash loses nothing
  }
  if (!has('dry-run')) console.log(failed ? `\n${failed} of ${todo.length} failed.` : `\n${todo.length} generated. Now build, and LOOK at them: a photo can crop through its subject.`);
  process.exit(failed ? 1 : 0);
}

/* ------------------------------------------------------------------ the report */
console.log(`\nimages: ${path.basename(dir)}${state.hasManifest ? '' : '   (no images.json: run --init)'}\n`);
if (state.style) console.log(`  style: ${state.style}\n`);
for (const e of state.entries) {
  const src = e.entry ? `${e.entry.source}${e.licence ? ', ' + e.licence : ''}` : '—';
  console.log(`  ${e.problems.length ? '!' : '✓'} ${e.name.padEnd(28)} ${src.padEnd(26)} ${e.usedBy.length ? 'on: ' + e.usedBy.join(', ') : 'not used by any page'}`);
  for (const p of e.problems) console.log(`      - ${p}`);
}
for (const x of state.shape.errors) console.log(`  ✗ ${x}`);
for (const x of state.shape.unknown) console.log(`  ! unknown key: ${x}`);
console.log(`\n  ${state.counts.files} file(s), ${state.counts.used} used, ${state.counts.unused} unused.`);
if (state.shape.errors.length || state.entries.some((e) => e.problems.length)) process.exitCode = 1;
