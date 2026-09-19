/* ==========================================================================
   lib/theme.mjs  -  a book's own colours, without a book's own stylesheet
   --------------------------------------------------------------------------
   Every page is WRITTEN in the studio palette: the block skill, the diagram
   system and every example use the same hex values, and that does not change.
   A book that wants its own look says so in book.json:

       "accent": "#0E7490", "accentStrong": "#155E75",
       "theme": { "signal": "#15803D", "surface": "#FBFAF7" }

   and the build repaints the finished book: the CSS tokens on every sheet,
   and the palette inside every diagram, tints included (a role's card fill
   and stroke are its colour mixed into the card colour, as in the original).

   The ROLES do not move. accent is still the mechanism being taught, signal
   the good outcome, danger the threat, warn the thing worth protecting. A
   theme changes what indigo looks like, never what it means.
   ========================================================================== */

export const DEFAULTS = {
  accent: '#6366F1', accentStrong: '#4F46E5', signal: '#0D9488', danger: '#DC2626', warn: '#B45309',
  ink: '#1A1A2E', muted: '#5B6472', line: '#E7E9EF', surface: '#FAFAFC', card: '#FFFFFF',
};
export const TOKENS = Object.keys(DEFAULTS);
export const ROLE_OF = {
  accent: 'the mechanism being taught', accentStrong: 'the mechanism, as text', signal: 'the good outcome', danger: 'the threat or mistake',
  warn: 'the thing worth protecting', ink: 'text', muted: 'quiet text', line: 'rules and borders', surface: 'the page', card: 'cards',
};

const HEX = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
const rgb = (h) => { let x = h.slice(1); if (x.length === 3) x = [...x].map((c) => c + c).join(''); return [0, 2, 4].map((i) => parseInt(x.slice(i, i + 2), 16)); };
const hex = (c) => '#' + c.map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0')).join('').toUpperCase();
/* `amount` of colour a laid over colour b */
export const mix = (a, b, amount) => { const A = rgb(a), B = rgb(b); return hex(A.map((v, i) => B[i] + (v - B[i]) * amount)); };

const lum = (h) => { const [r, g, b] = rgb(h).map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
export const contrast = (a, b) => { const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x); return (hi + 0.05) / (lo + 0.05); };

/* The book's palette, or null when it is the studio palette and there is nothing to do. */
export function themeFor(json) {
  const given = { ...(json.theme || {}) };
  if (json.accent) given.accent = json.accent;
  if (json.accentStrong) given.accentStrong = json.accentStrong;
  const t = { ...DEFAULTS };
  for (const k of TOKENS) if (typeof given[k] === 'string' && HEX.test(given[k])) t[k] = hex(rgb(given[k]));
  /* an accent with no strong partner gets one: the same colour, a step toward the ink */
  if (t.accent !== DEFAULTS.accent && !given.accentStrong) t.accentStrong = mix(t.ink, t.accent, 0.22);
  return TOKENS.some((k) => t[k] !== DEFAULTS[k]) ? t : null;
}

const neutralsMoved = (t) => ['ink', 'muted', 'line', 'surface'].some((k) => t[k] !== DEFAULTS[k]);

/* studio hex -> this book's hex, for everything drawn inside a page */
function palette(t) {
  const D = DEFAULTS, map = new Map();
  for (const k of ['accent', 'accentStrong', 'signal', 'danger', 'warn', 'ink', 'muted', 'line']) map.set(D[k], t[k]);
  const tints = {   // the diagram system's card fills and strokes, as "how much of the role colour"
    accent: { '#EEF0FE': 0.10, '#E6E9FD': 0.16, '#DDE1FC': 0.22, '#D5D8FA': 0.27, '#C7CCF8': 0.36, '#F4F5FE': 0.07, '#DDE0FB': 0.22 },
    signal: { '#ECFBF7': 0.08, '#CDEFE8': 0.21 },
    danger: { '#FEF1F1': 0.07, '#F8D6D6': 0.19 },
    warn: { '#FDF6E8': 0.07, '#EFE0BE': 0.30, '#D8B978': 0.50 },
  };
  for (const [role, set] of Object.entries(tints)) for (const [from, amount] of Object.entries(set)) map.set(from, mix(t[role], t.card, amount));
  if (neutralsMoved(t)) map.set('#F1F2F6', mix(t.ink, t.surface, 0.05));   // the pill, and quiet fills
  for (const [from, to] of [...map]) if (from === to) map.delete(from);
  return map;
}

export function themeCss(t) {
  const vars = `--surface:${t.surface}; --card:${t.card}; --ink:${t.ink}; --muted:${t.muted}; --line:${t.line};
      --accent:${t.accent}; --accent-strong:${t.accentStrong}; --signal:${t.signal}; --danger:${t.danger}; --warn:${t.warn};`;
  return `    /* ====================================================================
       THEME: this book's colours, from book.json ("accent", "accentStrong", "theme").
       Written by engine/tools/lib/theme.mjs. The roles are the studio's; only
       the colours are the book's.
       ==================================================================== */
    .sheet.bb{
      ${vars}
    }
    .sheet.gp{
      ${vars}
      background:${t.surface};
    }
    .bb .ask{ background:${mix(t.accent, t.card, 0.07)}; border-color:${mix(t.accent, t.card, 0.22)}; }` + (neutralsMoved(t) ? `
    .bb .pill, .gp-pill{ color:${mix(t.ink, t.surface, 0.72)}; background:${mix(t.ink, t.surface, 0.05)}; }
    .gp.index .idx-row, .gp.matter .mt-items li, .gp.matter .mt-sources li{ border-bottom-color:${mix(t.line, t.surface, 0.6)}; }` : '');
}

/* html: a finished book. Returns it repainted, or untouched when the book has no theme. */
export function applyTheme(html, json) {
  const t = themeFor(json);
  if (!t) return { html, changed: false, theme: null };
  const cut = html.indexOf('</head>');
  if (cut === -1) throw new Error('The built book has no </head>.');
  const map = palette(t);
  let body = html.slice(cut);
  /* a white card in a diagram is the card colour; white TEXT (a badge's number) stays white */
  if (t.card !== DEFAULTS.card) body = body.replace(/(<(?:rect|path|circle|ellipse|polygon)\b[^>]*?\bfill=")#(?:FFFFFF|FFF)(")/gi, `$1${t.card}$2`);
  body = body.replace(/#[0-9a-fA-F]{6}\b/g, (m) => map.get(m.toUpperCase()) || m);
  return { html: html.slice(0, cut).replace(/\s*$/, '\n') + `  <style>\n${themeCss(t)}\n  </style>\n` + body, changed: true, theme: t };
}

/* Can it be read, and can the roles still be told apart? */
export function themeProblems(json) {
  const errors = [], warnings = [];
  for (const [k, v] of Object.entries(json.theme || {})) if (TOKENS.includes(k) && !HEX.test(String(v))) errors.push(`theme.${k}: "${v}" is not a hex colour`);
  const t = themeFor(json);
  if (!t || errors.length) return { errors, warnings, theme: t };
  const r = (n) => n.toFixed(1);
  for (const bg of ['surface', 'card']) {
    const c = contrast(t.ink, t[bg]);
    if (c < 4.5) errors.push(`ink on ${bg} is ${r(c)}:1. Body text needs 4.5:1 to be read, in print as much as on a screen`);
  }
  const m = contrast(t.muted, t.surface);
  if (m < 4.5) warnings.push(`muted on surface is ${r(m)}:1 (4.5:1 is the mark for small text: the eyebrow, the foot)`);
  for (const k of ['accentStrong', 'signal', 'danger']) {
    const c = contrast(t[k], t.card);
    if (c < 3) warnings.push(`${k} on card is ${r(c)}:1. It is used for bold words in the explainer; under 3:1 they fade`);
  }
  if (lum(t.surface) < 0.18) warnings.push('a dark page is fine on a screen and in the EPUB. In print it is solid ink edge to edge on every sheet: expect a printer to charge for it, or refuse it');
  const roles = ['accent', 'signal', 'danger', 'warn'];
  const far = (a, b) => Math.hypot(...rgb(a).map((v, i) => v - rgb(b)[i]));
  roles.forEach((a, i) => roles.slice(i + 1).forEach((b) => {
    if (far(t[a], t[b]) < 70) warnings.push(`${a} and ${b} are nearly the same colour, so a reader cannot tell ${ROLE_OF[a]} from ${ROLE_OF[b]}`);
  }));
  return { errors, warnings, theme: t };
}
