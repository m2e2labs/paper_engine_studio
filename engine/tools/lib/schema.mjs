/* ==========================================================================
   lib/schema.mjs  -  check a book.json against engine/book.schema.json
   --------------------------------------------------------------------------
   The schema file is a standard JSON Schema, so an editor can complete and
   check book.json as you type. This is the same check as a command, for
   preflight and the Studio, without taking on a validator dependency. It
   implements exactly the keywords the schema uses, and refuses to run if the
   schema ever uses one it does not know, rather than quietly ignoring it.

   Also here: what a book's publishing metadata comes to for one edition, so
   the EPUB, the release listing and preflight all read it the same way.
   ========================================================================== */
import fs from 'node:fs';
import path from 'node:path';
import { ROOT } from './book.mjs';

export const SCHEMA_PATH = path.join(ROOT, 'engine', 'book.schema.json');
const KNOWN = new Set(['$schema', '$id', '$defs', '$ref', 'title', 'description', 'type', 'required', 'properties',
  'additionalProperties', 'propertyNames', 'items', 'minItems', 'maxItems', 'uniqueItems', 'pattern', 'minLength',
  'maxLength', 'minimum', 'maximum', 'enum']);

const typeOf = (v) => (v === null ? 'null' : Array.isArray(v) ? 'array' : Number.isInteger(v) ? 'integer' : typeof v);
const isType = (v, t) => { const k = typeOf(v); return k === t || (t === 'number' && k === 'integer'); };

export function validate(value, schema, root = schema, at = '', out = { errors: [], unknown: [] }) {
  for (const k of Object.keys(schema)) if (!KNOWN.has(k)) throw new Error(`book.schema.json uses "${k}", which lib/schema.mjs does not implement.`);
  if (schema.$ref) {
    const target = schema.$ref.replace(/^#\//, '').split('/').reduce((o, k) => o?.[k], root);
    if (!target) throw new Error(`book.schema.json: cannot resolve ${schema.$ref}`);
    return validate(value, target, root, at, out);
  }
  const where = at || 'book.json';
  const err = (msg) => out.errors.push(`${where}: ${msg}`);

  if (schema.type && !isType(value, schema.type)) { err(`should be ${schema.type === 'array' ? 'a list' : 'a ' + schema.type}, but is ${typeOf(value)}`); return out; }
  if (schema.enum && !schema.enum.includes(value)) err(`should be one of ${schema.enum.join(', ')}`);

  if (typeof value === 'string') {
    if (schema.minLength !== undefined && value.length < schema.minLength) err(value.length ? `is too short (${value.length} of at least ${schema.minLength})` : 'is empty');
    if (schema.maxLength !== undefined && value.length > schema.maxLength) err(`is ${value.length} characters; the limit is ${schema.maxLength}`);
    if (schema.pattern && !new RegExp(schema.pattern).test(value)) err(`"${value.slice(0, 40)}" is not in the expected form${schema.description ? ` (${schema.description.split('.')[0]})` : ''}`);
  }
  if (typeof value === 'number') {
    if (schema.minimum !== undefined && value < schema.minimum) err(`is below ${schema.minimum}`);
    if (schema.maximum !== undefined && value > schema.maximum) err(`is above ${schema.maximum}`);
  }
  if (Array.isArray(value)) {
    if (schema.minItems !== undefined && value.length < schema.minItems) err(`needs at least ${schema.minItems}`);
    if (schema.maxItems !== undefined && value.length > schema.maxItems) err(`has ${value.length}; the limit is ${schema.maxItems}`);
    if (schema.uniqueItems) { const seen = new Set(); for (const v of value) { const k = JSON.stringify(v); if (seen.has(k)) err(`lists ${k} twice`); seen.add(k); } }
    if (schema.items) value.forEach((v, i) => validate(v, schema.items, root, `${at}[${i}]`, out));
  }
  if (typeOf(value) === 'object') {
    for (const k of schema.required || []) if (!(k in value)) err(`is missing "${k}"`);
    for (const [k, v] of Object.entries(value)) {
      const child = at ? `${at}.${k}` : k;
      if (schema.propertyNames?.pattern && !new RegExp(schema.propertyNames.pattern).test(k)) out.errors.push(`${child}: "${k}" is not a usable name here`);
      if (schema.properties && k in schema.properties) validate(v, schema.properties[k], root, child, out);
      else if (schema.additionalProperties === false) out.unknown.push(child);
      else if (typeof schema.additionalProperties === 'object') validate(v, schema.additionalProperties, root, child, out);
    }
  }
  return out;
}

export function validateBookJson(json) {
  return validate(json, JSON.parse(fs.readFileSync(SCHEMA_PATH, 'utf8')));
}

/* ------------------------------------------------------------------ ISBN-13 */
export const isbnDigits = (s) => String(s || '').replace(/[-\s]/g, '');
export function isbnOk(s) {
  const d = isbnDigits(s);
  if (!/^97[89]\d{10}$/.test(d)) return false;
  const sum = [...d].reduce((n, c, i) => n + Number(c) * (i % 2 ? 3 : 1), 0);
  return sum % 10 === 0;
}

/* ------------------------------------------------------------------ one edition's listing
   Book-level publishing data, with publishing.editions.<name> laid over it. */
export function publishingFor(json, edition = null) {
  const p = json.publishing || {};
  const e = (edition && p.editions?.[edition]) || {};
  const isbn = { ...(edition ? {} : p.isbn), ...(e.isbn || {}) };   // an edition never inherits the full book's ISBN
  for (const k of Object.keys(isbn)) if (!isbn[k]) delete isbn[k];
  return {
    title: e.title || (edition ? `${json.title} (${edition} edition)` : json.title),
    subtitle: json.subtitle || '', author: json.author || '',
    language: json.language || '',
    description: e.description || p.description || '',
    keywords: p.keywords || [], categories: p.categories || [],
    publisher: p.publisher || json.brand || '', published: p.published || '',
    audience: p.audience || '', price: e.price || p.price || null, isbn,
    rights: json.copyright?.rights || '',
  };
}

/* What a person pastes into a store's listing form, one edition per sheet. */
export function listingMarkdown(json, edition, facts = {}) {
  const l = publishingFor(json, edition);
  const line = (k, v) => (v ? `- **${k}:** ${v}\n` : '');
  return `# ${l.title}\n\n` +
    line('Subtitle', l.subtitle) + line('Author', l.author) + line('Publisher', l.publisher) +
    line('Language', l.language) + line('Publication date', l.published) + line('Edition', json.editionLabel) +
    line('Pages', facts.pages) + line('Trim', facts.trim) +
    line('Price', l.price ? `${l.price.amount.toFixed(2)} ${l.price.currency}` : '') +
    line('ISBN, print', l.isbn.print) + line('ISBN, EPUB', l.isbn.epub) + line('ISBN, PDF', l.isbn.pdf) +
    line('Audience', l.audience) + line('Rights', l.rights) +
    `\n## Description\n\n${l.description || '_None written._'}\n` +
    `\n## Keywords\n\n${l.keywords.length ? l.keywords.map((k) => `- ${k}`).join('\n') : '_None._'}\n` +
    `\n## Categories\n\n${l.categories.length ? l.categories.map((k) => `- ${k}`).join('\n') : '_None._'}\n` +
    (facts.files?.length ? `\n## Files in this release\n\n${facts.files.map((f) => `- ${f}`).join('\n')}\n` : '');
}
