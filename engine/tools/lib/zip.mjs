/* ==========================================================================
   lib/zip.mjs  -  write a ZIP, with nothing but Node
   --------------------------------------------------------------------------
   An EPUB is a ZIP with one rule a general zip tool will happily break: the
   first entry must be the file `mimetype`, stored uncompressed, with no extra
   field. Owning the forty lines that write the archive is the only way to be
   sure of that on every machine, and it keeps the engine free of dependencies.
   ========================================================================== */
import zlib from 'node:zlib';

const TABLE = new Uint32Array(256).map((_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});
const crc32 = (buf) => {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
};

/* entries: [{ name, data: Buffer|string, store?: boolean }], written in order. */
export function zip(entries, date = new Date()) {
  const time = (date.getHours() << 11) | (date.getMinutes() << 5) | (date.getSeconds() >> 1);
  const day = ((date.getFullYear() - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
  const local = [], central = [];
  let offset = 0;

  for (const e of entries) {
    const raw = Buffer.isBuffer(e.data) ? e.data : Buffer.from(e.data, 'utf8');
    const name = Buffer.from(e.name, 'utf8');
    const body = e.store ? raw : zlib.deflateRawSync(raw, { level: 9 });
    const method = e.store ? 0 : 8;

    const head = Buffer.alloc(30);
    head.writeUInt32LE(0x04034b50, 0);
    head.writeUInt16LE(20, 4);            // version needed
    head.writeUInt16LE(0x0800, 6);        // names are UTF-8
    head.writeUInt16LE(method, 8);
    head.writeUInt16LE(time, 10); head.writeUInt16LE(day, 12);
    head.writeUInt32LE(crc32(raw), 14);
    head.writeUInt32LE(body.length, 18); head.writeUInt32LE(raw.length, 22);
    head.writeUInt16LE(name.length, 26); head.writeUInt16LE(0, 28);
    local.push(head, name, body);

    const cen = Buffer.alloc(46);
    cen.writeUInt32LE(0x02014b50, 0);
    cen.writeUInt16LE(20, 4); cen.writeUInt16LE(20, 6);
    head.copy(cen, 8, 6, 30);             // flags .. extra length, same bytes as the local header
    cen.writeUInt32LE(offset, 42);
    central.push(cen, name);

    offset += 30 + name.length + body.length;
  }

  const cenSize = central.reduce((n, b) => n + b.length, 0);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(entries.length, 8); end.writeUInt16LE(entries.length, 10);
  end.writeUInt32LE(cenSize, 12); end.writeUInt32LE(offset, 16);
  return Buffer.concat([...local, ...central, end]);
}
