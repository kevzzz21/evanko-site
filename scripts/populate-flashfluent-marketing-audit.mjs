import { readFile, writeFile } from 'node:fs/promises';

const sourcePath = new URL('../content/localization-audits/flashfluent-marketing-language-audit.csv', import.meta.url);
const targets = {
  zh_hans: 'zh-CN', zh_hant: 'zh-TW', spanish: 'es', french: 'fr', german: 'de',
  japanese: 'ja', korean: 'ko', indonesian: 'id', tagalog: 'tl',
};

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

const quote = value => `"${String(value).replaceAll('"', '""')}"`;

async function translateChunk(lines, target) {
  const url = new URL('https://translate.googleapis.com/translate_a/single');
  url.searchParams.set('client', 'gtx');
  url.searchParams.set('sl', 'en');
  url.searchParams.set('tl', target);
  url.searchParams.set('dt', 't');
  url.searchParams.set('q', lines.join('\n'));
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Translation request failed (${response.status}) for ${target}`);
  const data = await response.json();
  const translated = data[0].map(segment => segment[0]).join('');
  const result = translated.split('\n');
  if (result.length !== lines.length) throw new Error(`Expected ${lines.length} ${target} translations, received ${result.length}`);
  return result;
}

const rows = parseCsv(await readFile(sourcePath, 'utf8'));
const [header, ...messages] = rows;
for (const [columnName, target] of Object.entries(targets)) {
  const column = header.indexOf(columnName);
  const batches = []; let batch = []; let size = 0;
  for (const message of messages) {
    const nextSize = size + message[1].length + 1;
    if (batch.length && nextSize > 4200) { batches.push(batch); batch = []; size = 0; }
    batch.push(message); size += message[1].length + 1;
  }
  if (batch.length) batches.push(batch);
  for (const messagesInBatch of batches) {
    const translations = await translateChunk(messagesInBatch.map(row => row[1]), target);
    messagesInBatch.forEach((row, index) => { row[column] = translations[index]; });
    await new Promise(resolve => setTimeout(resolve, 150));
  }
}
await writeFile(sourcePath, `${[header, ...messages].map(row => row.map(quote).join(',')).join('\n')}\n`);
