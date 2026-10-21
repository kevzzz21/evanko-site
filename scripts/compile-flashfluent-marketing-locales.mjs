import { readFile, writeFile } from 'node:fs/promises';

const sourcePath = new URL('../content/localization-audits/flashfluent-marketing-language-audit.csv', import.meta.url);
const outputPath = new URL('../lib/flashfluent-marketing-locales.ts', import.meta.url);
const routeColumns = { en: 'english', 'zh-hans': 'zh_hans', 'zh-hant': 'zh_hant', es: 'spanish', fr: 'french', de: 'german', ja: 'japanese', ko: 'korean', id: 'indonesian', tl: 'tagalog' };

function parseCsv(text) {
  const rows = []; let row = []; let value = ''; let quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    if (quoted && character === '"' && text[index + 1] === '"') { value += '"'; index += 1; }
    else if (character === '"') quoted = !quoted;
    else if (!quoted && character === ',') { row.push(value); value = ''; }
    else if (!quoted && character === '\n') { row.push(value); rows.push(row); row = []; value = ''; }
    else if (character !== '\r') value += character;
  }
  if (value || row.length) { row.push(value); rows.push(row); }
  return rows;
}

function preservePlaceholders(source, translation) {
  const placeholders = source.match(/\{[^}]+\}/g) ?? [];
  const translatedPlaceholders = translation.match(/\{[^}]+\}/g) ?? [];
  return translatedPlaceholders.reduce((result, placeholder, index) => result.replace(placeholder, placeholders[index] ?? placeholder), translation);
}

const [header, ...rows] = parseCsv(await readFile(sourcePath, 'utf8'));
const byLocale = Object.fromEntries(Object.entries(routeColumns).map(([route, columnName]) => {
  const columnIndex = header.indexOf(columnName);
  const copy = Object.fromEntries(rows.map(row => [row[1], preservePlaceholders(row[1], row[columnIndex]) ]));
  return [route, copy];
}));

const file = `// Generated from content/localization-audits/flashfluent-marketing-language-audit.csv.\n// Edit the CSV, then run node scripts/compile-flashfluent-marketing-locales.mjs.\n\nexport type FlashFluentMarketingLocale = ${Object.keys(routeColumns).map(locale => `'${locale}'`).join(' | ')};\n\nconst copy: Record<FlashFluentMarketingLocale, Record<string, string>> = ${JSON.stringify(byLocale, null, 2)};\n\nexport function marketingCopy(locale: FlashFluentMarketingLocale, source: string, variables: Record<string, string> = {}) {\n  let translated = copy[locale]?.[source] ?? copy.en[source] ?? source;\n  for (const [name, value] of Object.entries(variables)) translated = translated.replaceAll(\`{\${name}}\`, value);\n  return translated;\n}\n`;
await writeFile(outputPath, file);
