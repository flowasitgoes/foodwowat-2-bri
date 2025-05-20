const fs = require('fs');
const path = require('path');
const https = require('https');

const jsFiles = [
  'info-CN7RxDQQ.js',
  'compiler-runtime-pJ4boU9M.js',
  'chunk-K6CSEXPM-Dckekn08.js',
  'index-a7M-pCPy.js',
  'meta-CIpOic0s.js',
  'favicons-BiTdJF6Y.js',
  'links-DaF3D5h7.js',
  'index-BAVb4nYv.js',
  'transitions-DfZZ6MBU.js',
  'cn-G-5VTgOO.js',
  'client-OjDUbtxI.js',
  'NumberFlow-client-CHWbu7lx-Dmfd0jdA.js',
  'core-D_0_FV7i.js',
  'index-BH45Npq1.js',
  '_slug_-Bio-y20y.js'
];

const baseUrl = 'https://www.briganti.works/assets/';
const outputDir = path.join(__dirname, 'public', 'assets');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, response => {
      if (response.statusCode !== 200) {
        reject(new Error(`下載失敗: ${url} 狀態碼: ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`下載完成: ${dest}`);
        resolve();
      });
    }).on('error', err => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

(async () => {
  for (const js of jsFiles) {
    const url = baseUrl + js;
    const dest = path.join(outputDir, js);
    try {
      await downloadFile(url, dest);
    } catch (e) {
      console.error(e.message);
    }
  }
})();