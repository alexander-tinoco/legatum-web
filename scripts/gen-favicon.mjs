import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';

const svg = readFileSync(new URL('../public/favicon.svg', import.meta.url));
const NAVY = { r: 12, g: 24, b: 46, alpha: 1 }; // #0c182e
const sizes = [16, 32, 48];

function buildIco(images) {
  const count = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);
  const dir = Buffer.alloc(16 * count);
  let offset = 6 + 16 * count;
  const bufs = [header, dir];
  images.forEach((img, i) => {
    const e = dir.subarray(i * 16, i * 16 + 16);
    e.writeUInt8(img.size >= 256 ? 0 : img.size, 0);
    e.writeUInt8(img.size >= 256 ? 0 : img.size, 1);
    e.writeUInt8(0, 2);
    e.writeUInt8(0, 3);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(img.data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += img.data.length;
    bufs.push(img.data);
  });
  return Buffer.concat(bufs);
}

const images = [];
for (const size of sizes) {
  const inner = Math.round(size * 0.66); // alto del monograma con padding
  const mono = await sharp(svg, { density: 384 })
    .resize({ height: inner, fit: 'inside' })
    .png()
    .toBuffer();
  const meta = await sharp(mono).metadata();
  const data = await sharp({
    create: { width: size, height: size, channels: 4, background: NAVY },
  })
    .composite([
      {
        input: mono,
        left: Math.round((size - meta.width) / 2),
        top: Math.round((size - meta.height) / 2),
      },
    ])
    .png({ compressionLevel: 9 })
    .toBuffer();
  images.push({ size, data });
}

const ico = buildIco(images);
writeFileSync(new URL('../public/favicon.ico', import.meta.url), ico);
console.log(`favicon.ico generado: ${ico.length} bytes (${sizes.join('/')})`);
