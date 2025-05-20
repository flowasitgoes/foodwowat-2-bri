const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const urls = [
  'https://www.briganti.works/work/ab-arca',
  'https://www.briganti.works/work/edglrd',
  'https://www.briganti.works/work/einstoffen',
  'https://www.briganti.works/work/ab-setima',
  'https://www.briganti.works/work/henri-heymans',
  'https://www.briganti.works/work/ab-grotesk'
];

async function downloadHtml(url, filename) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const html = await res.text();
    fs.writeFileSync(path.join(__dirname, filename), html, 'utf8');
    console.log(`已下載: ${filename}`);
  } catch (err) {
    console.error(`下載失敗: ${url}`, err);
  }
}

(async () => {
  for (const url of urls) {
    const name = url.split('/').pop();
    await downloadHtml(url, `${name}.html`);
  }
})(); 