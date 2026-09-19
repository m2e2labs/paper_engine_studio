import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../studio');
const bookRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../books');
const port = Number(process.env.PORT || 4173);
http.createServer((req, res) => {
  const requested = req.url === '/' ? '/index.html' : req.url.split('?')[0];
  const preview = requested.match(/^\/preview\/([a-z0-9-]+)$/i);
  const file = preview
    ? path.resolve(bookRoot, preview[1], 'reader.html')
    : path.resolve(root, '.' + requested);
  const allowed = preview ? file.startsWith(bookRoot) : file.startsWith(root);
  if (!allowed || !fs.existsSync(file)) { res.writeHead(404); return res.end('Not found'); }
  res.writeHead(200, { 'content-type': file.endsWith('.html') ? 'text/html; charset=utf-8' : 'text/plain; charset=utf-8' });
  res.end(fs.readFileSync(file));
}).listen(port, () => console.log(`Paper Engine Studio: http://localhost:${port}`));
