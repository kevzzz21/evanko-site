import { createRequire } from 'node:module';
import { readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';
const require = createRequire(import.meta.url);
// Supply SHARP_MODULE_PATH when using the bundled desktop dependency runtime.
const sharp = require(process.env.SHARP_MODULE_PATH || 'sharp');
const source = await readFile('components/language-scroller.tsx', 'utf8');
const names = [...new Set([...source.matchAll(/'([a-z]+(?:-[a-z]+)*)'/g)].map(m => m[1]))]
  .filter(name => !['use-client', 'visibilitychange', 'data-paused'].includes(name));
let before = 0;
let after = 0;
for (const name of names) {
  const file = resolve(`public/flashfluent-assets/collection/${name}.webp`);
  let original;
  try { original = await readFile(file); } catch { continue; }
  before += original.length;
  for (const width of [128, 192, 256]) {
    const target = resolve(`public/flashfluent-assets/collection/${name}-${width}.webp`);
    await sharp(original).resize(width, width).webp({ quality: 85, effort: 6 }).toFile(target);
    if (width === 192) after += (await stat(target)).size;
  }
}
for (const name of ['flashfluent-practice', 'flashfluent-classroom', 'temple-city-school-district']) {
  const original = await readFile(`public/images/${name}.webp`);
  const metadata = await sharp(original).metadata();
  const widths = [320, 480, 640, 800, metadata.width].filter((width, i, all) => width <= metadata.width && all.indexOf(width) === i);
  for (const width of widths) {
    await sharp(original).resize({ width }).webp({ quality: 85, effort: 6 })
      .toFile(`public/images/${name}-${width}.webp`);
  }
}
console.log(JSON.stringify({ collectionOriginalBytes: before, collection192Bytes: after,
  reductionPercent: Math.round((1 - after / before) * 100) }));
