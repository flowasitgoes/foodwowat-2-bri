const https = require('https');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.briganti.works';
const files = [
    '/assets/app-CKKnC7NV.css',
    '/fonts/RomaNeue-Medium.woff2',
    '/fonts/Inferi-Regular.woff2',
    '/assets/_slug_-zuz-MAIV.js',
    '/assets/compiler-runtime-pJ4boU9M.js',
    '/assets/chunk-K6CSEXPM-Dckekn08.js',
    '/assets/transitions-DfZZ6MBU.js',
    '/assets/cn-G-5VTgOO.js',
    '/assets/use-images-loaded-DIB93l6p.js',
    '/assets/index-a7M-pCPy.js',
    '/assets/NumberFlow-client-CHWbu7lx-Dmfd0jdA.js',
    '/assets/meta-CIpOic0s.js',
    '/assets/favicons-BiTdJF6Y.js',
    '/assets/index-BH45Npq1.js',
    '/assets/links-DaF3D5h7.js',
    '/assets/info-CN7RxDQQ.js',
    '/assets/index-BQAzSeWf.js',
    '/assets/index-BAVb4nYv.js',
    '/assets/client-OjDUbtxI.js',
    '/assets/core-D_0_FV7i.js',
    '/assets/_slug_-Bio-y20y.js',
    '/site.webmanifest',
    '/favicon-32x32.png',
    '/assets/entry.client-RSAdYls_.js',
    '/assets/root-QOtetCDL.js',
    '/assets/home-CQHCJX6d.js',
    '/assets/not-found-BFZsZBPd.js',
    '/work/rampant-studio.data',
];

// 创建必要的目录
const dirs = ['assets', 'fonts', 'work'];
dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(BASE_URL + url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`下载完成: ${url}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            console.error(`下载失败: ${url}`, err.message);
            reject(err);
        });
    });
}

async function downloadAll() {
    for (const file of files) {
        const dest = path.join(__dirname, file);
        const dir = path.dirname(dest);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        try {
            await downloadFile(file, dest);
        } catch (err) {
            console.error(`下载 ${file} 失败:`, err);
        }
    }
}

downloadAll().then(() => {
    console.log('所有文件下载完成');
}).catch(err => {
    console.error('下载过程中发生错误:', err);
}); 