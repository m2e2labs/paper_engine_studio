/* ==========================================================================
   lib/screens.mjs  -  screenshots: the third kind of band
   --------------------------------------------------------------------------
   A diagram teaches a mechanism. A photograph shows a physical thing. A book
   about software also has to show WHERE TO CLICK, and for that the band is a
   real capture of the real screen:

       <figure class="shot">
         <div class="frame">
           <img src="images/rls-manage-roles.png" alt="The Manage roles dialog, with one role named Sales West and a DAX filter on the Region table.">
           <span class="pin" style="left:18%;top:32%">1</span>
           <span class="pin" style="left:61%;top:58%">2</span>
           <span class="mark" style="left:52%;top:50%;width:40%;height:16%"></span>
         </div>
         <figcaption>1 name the role · 2 write the filter</figcaption>
       </figure>

   Unlike a photograph it is NEVER cropped by the page (object-fit:cover would
   cut a menu in half): the whole capture is shown, scaled to fit the band.
   Pins and marks are placed in percent of the capture, so they stay put at
   any size, in the PDF and in the EPUB. `class="shot tall"` gives a deeper
   band for a capture that needs it, at the cost of words.

   The stylesheet is added by build.mjs only to a book that has a screenshot,
   so a book without one builds exactly as before.
   ========================================================================== */
import fs from 'node:fs';
import path from 'node:path';

export const SHOT_RE = /<figure class="shot[\s"]/;

const CSS = `    /* ====================================================================
       SCREENSHOTS, written by engine/tools/lib/screens.mjs. The whole capture,
       never cropped; pins and marks in percent of the capture.
       ==================================================================== */
    .bb .shot{ flex:0 0 auto; margin:4px 0 0; text-align:center; }
    .bb .shot .frame{ position:relative; display:inline-block; max-width:100%; line-height:0; vertical-align:top;
      border:1px solid var(--line); border-radius:9px; overflow:hidden; background:var(--card); box-shadow:0 1px 3px rgba(26,26,46,.08); }
    .bb .shot img{ display:block; width:auto; height:auto; max-width:100%; max-height:200px; }
    .bb .shot.tall img{ max-height:300px; }
    .bb .shot .pin{ position:absolute; transform:translate(-50%,-50%); width:20px; height:20px; border-radius:50%;
      background:var(--accent); color:#fff; font:600 11.5px/20px "Space Grotesk",sans-serif; text-align:center;
      box-shadow:0 0 0 2px #fff, 0 1px 4px rgba(0,0,0,.3); }
    .bb .shot .pin.bad{ background:var(--danger); }
    .bb .shot .pin.good{ background:var(--signal); }
    .bb .shot .mark{ position:absolute; border:2px solid var(--accent); border-radius:5px; box-shadow:0 0 0 1.5px rgba(255,255,255,.85); }
    .bb .shot .mark.bad{ border-color:var(--danger); }
    .bb .shot .mark.good{ border-color:var(--signal); }
    .bb .shot figcaption{ margin-top:7px; font-size:13.5px; line-height:1.4; color:var(--muted); text-align:center; }`;

export function applyShots(html) {
  const body = html.replace(/<!--[\s\S]*?-->/g, '');
  if (!SHOT_RE.test(body)) return { html, changed: false, count: 0 };
  return { html: html.replace('</head>', `  <style>\n${CSS}\n  </style>\n</head>`), changed: true, count: (body.match(new RegExp(SHOT_RE.source, 'g')) || []).length };
}

/* What the pages say about their screenshots, without a browser. */
export function shotsIn(pageHtml) {
  return [...pageHtml.matchAll(/<figure class="shot[\s"][\s\S]*?<\/figure>/g)].map((m) => {
    const fig = m[0];
    const spots = [...fig.matchAll(/<span class="(pin|mark)[^"]*"\s+style="([^"]*)"/g)].map((s) => {
      const get = (k) => { const v = s[2].match(new RegExp(`(?:^|;)\\s*${k}\\s*:\\s*(-?[\\d.]+)%`)); return v ? +v[1] : null; };
      return { kind: s[1], left: get('left'), top: get('top'), width: get('width'), height: get('height') };
    });
    return {
      src: decodeURIComponent((fig.match(/<img[^>]*\ssrc="images\/([^"?#]+)"/) || [])[1] || ''),
      pins: spots.filter((s) => s.kind === 'pin').length, marks: spots.filter((s) => s.kind === 'mark').length,
      hasCaption: /<figcaption>[\s\S]*?\S[\s\S]*?<\/figcaption>/.test(fig),
      offImage: spots.filter((s) => s.left === null || s.top === null || s.left < 0 || s.left > 100 || s.top < 0 || s.top > 100 ||
        (s.kind === 'mark' && (s.width === null || s.height === null || s.left + s.width > 100.5 || s.top + s.height > 100.5))).length,
    };
  });
}

/* Width and height of a PNG or JPEG, from its header. */
export function imageSize(file) {
  const b = fs.readFileSync(file);
  if (b.length > 24 && b.toString('ascii', 1, 4) === 'PNG') return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
  if (b[0] === 0xff && b[1] === 0xd8) {
    for (let i = 2; i + 9 < b.length;) {
      if (b[i] !== 0xff) { i++; continue; }
      const marker = b[i + 1], len = b.readUInt16BE(i + 2);
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) return { w: b.readUInt16BE(i + 7), h: b.readUInt16BE(i + 5) };
      i += 2 + len;
    }
  }
  return null;
}

/* Put a capture on record. Rights and the private-data check are left for the author. */
export function registerShot(dir, name, given = {}) {
  const file = path.join(dir, 'images.json');
  const manifest = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : { $schema: '../../engine/images.schema.json', licence: '', images: {} };
  manifest.images ||= {};
  const was = manifest.images[name] || {};
  const entry = { ...was, source: 'screenshot' };
  for (const k of ['app', 'version', 'url', 'captured', 'note']) if (given[k]) entry[k] = String(given[k]);
  if (given.scale) entry.scale = Number(given.scale);
  delete entry.cleared;   // a new capture has not been looked at yet, whatever the old one was
  manifest.images[name] = entry;
  fs.writeFileSync(file, JSON.stringify(manifest, null, 2) + '\n');
  return entry;
}

export const figureFor = (name, alt = '') => `<figure class="shot">
  <div class="frame">
    <img src="images/${name}" alt="${alt || 'DESCRIBE what the screen shows, for someone who cannot see it.'}">
    <span class="pin" style="left:50%;top:50%">1</span>
  </div>
  <figcaption>1 what to click</figcaption>
</figure>`;
