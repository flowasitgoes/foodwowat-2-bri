const fs = require('fs');
const path = require('path');
const https = require('https');
const { URL } = require('url');

// 創建必要的目錄
const dirs = [
    'public/assets',
    'public/fonts',
    'public/data',
    'public/images'
];

dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

// 下載文件的函數
function downloadFile(url, destination) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(destination);
        https.get(url, response => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`下載完成: ${destination}`);
                resolve();
            });
        }).on('error', err => {
            fs.unlink(destination, () => {});
            console.error(`下載失敗 ${url}: ${err.message}`);
            reject(err);
        });
    });
}

// 資源列表
const resources = [
    // CSS 文件
    {
        url: 'https://www.briganti.works/assets/app-CKKnC7NV.css',
        dest: 'public/assets/app-CKKnC7NV.css'
    },
    // 字體文件
    {
        url: 'https://www.briganti.works/fonts/RomaNeue-Medium.woff2',
        dest: 'public/fonts/RomaNeue-Medium.woff2'
    },
    {
        url: 'https://www.briganti.works/fonts/RomaNeue-Medium.woff',
        dest: 'public/fonts/RomaNeue-Medium.woff'
    },
    {
        url: 'https://www.briganti.works/fonts/Inferi-Regular.woff2',
        dest: 'public/fonts/Inferi-Regular.woff2'
    },
    {
        url: 'https://www.briganti.works/fonts/Inferi-Regular.woff',
        dest: 'public/fonts/Inferi-Regular.woff'
    },
    // JavaScript 文件
    {
        url: 'https://www.briganti.works/assets/_slug_-zuz-MAIV.js',
        dest: 'public/assets/_slug_-zuz-MAIV.js'
    },
    {
        url: 'https://www.briganti.works/assets/compiler-runtime-pJ4boU9M.js',
        dest: 'public/assets/compiler-runtime-pJ4boU9M.js'
    },
    {
        url: 'https://www.briganti.works/assets/chunk-K6CSEXPM-Dckekn08.js',
        dest: 'public/assets/chunk-K6CSEXPM-Dckekn08.js'
    },
    {
        url: 'https://www.briganti.works/assets/transitions-DfZZ6MBU.js',
        dest: 'public/assets/transitions-DfZZ6MBU.js'
    },
    {
        url: 'https://www.briganti.works/assets/cn-G-5VTgOO.js',
        dest: 'public/assets/cn-G-5VTgOO.js'
    },
    {
        url: 'https://www.briganti.works/assets/use-images-loaded-DIB93l6p.js',
        dest: 'public/assets/use-images-loaded-DIB93l6p.js'
    },
    {
        url: 'https://www.briganti.works/assets/index-a7M-pCPy.js',
        dest: 'public/assets/index-a7M-pCPy.js'
    },
    {
        url: 'https://www.briganti.works/assets/NumberFlow-client-CHWbu7lx-Dmfd0jdA.js',
        dest: 'public/assets/NumberFlow-client-CHWbu7lx-Dmfd0jdA.js'
    },
    {
        url: 'https://www.briganti.works/assets/meta-CIpOic0s.js',
        dest: 'public/assets/meta-CIpOic0s.js'
    },
    {
        url: 'https://www.briganti.works/assets/favicons-BiTdJF6Y.js',
        dest: 'public/assets/favicons-BiTdJF6Y.js'
    },
    {
        url: 'https://www.briganti.works/assets/index-BH45Npq1.js',
        dest: 'public/assets/index-BH45Npq1.js'
    },
    {
        url: 'https://www.briganti.works/assets/links-DaF3D5h7.js',
        dest: 'public/assets/links-DaF3D5h7.js'
    },
    {
        url: 'https://www.briganti.works/assets/entry.client-RSAdYls_.js',
        dest: 'public/assets/entry.client-RSAdYls_.js'
    },
    {
        url: 'https://www.briganti.works/assets/client-OjDUbtxI.js',
        dest: 'public/assets/client-OjDUbtxI.js'
    },
    {
        url: 'https://www.briganti.works/assets/root-QOtetCDL.js',
        dest: 'public/assets/root-QOtetCDL.js'
    },
    {
        url: 'https://www.briganti.works/assets/core-D_0_FV7i.js',
        dest: 'public/assets/core-D_0_FV7i.js'
    },
    {
        url: 'https://www.briganti.works/assets/not-found-BFZsZBPd.js',
        dest: 'public/assets/not-found-BFZsZBPd.js'
    },
    {
        url: 'https://www.briganti.works/assets/home-CQHCJX6d.js',
        dest: 'public/assets/home-CQHCJX6d.js'
    },
    // 數據文件
    {
        url: 'https://www.briganti.works/info.data',
        dest: 'public/data/info.data'
    },
    {
        url: 'https://www.briganti.works/_root.data',
        dest: 'public/data/_root.data'
    },
    {
        url: 'https://www.briganti.works/work.data',
        dest: 'public/data/work.data'
    },
    // Web Manifest
    {
        url: 'https://www.briganti.works/site.webmanifest',
        dest: 'public/site.webmanifest'
    }
];

// 圖片資源
const images = [
    'https://assets.basehub.com/467cc7ea/e567a7503266eaaa300732a79a90429f/05memnon-1b.jpg',
    'https://assets.basehub.com/467cc7ea/21a689a218dcac608925b151b43ff9e4/2023.eins.cat.01.02.jpg',
    'https://assets.basehub.com/467cc7ea/0faf1c46893ffe3960522583e3d88096/2023.eins.id.03.04.png',
    'https://assets.basehub.com/467cc7ea/c3fb7a841dfaba7b4d656fddd736fef1/2021.hhey.id.02.05.png',
    'https://assets.basehub.com/467cc7ea/fbf4f868d862b4119e2e37145f95cb22/2018.arra.aw.09.01.jpg',
    'https://assets.basehub.com/467cc7ea/9bd52527993f6a160ccaa73d4f3d0f6b/2019.requ.gd.03.png',
    'https://assets.basehub.com/467cc7ea/7e6217b989bb7800c36ee52a1f7160fe/2024.arca.td.02.02.png',
    'https://assets.basehub.com/8d64593cfb842a77/d7d954d3f661f91bc355fd0a215eb5a4/tapa.png',
    'https://assets.basehub.com/467cc7ea/87860eec8a11d243a9bb35d1669226f1/2020.cafe.lt.01.png',
    'https://assets.basehub.com/467cc7ea/a3117811222d141443afcc3eab32fc36/2021.tech.id.01.01.png',
    'https://assets.basehub.com/467cc7ea/06eb2d8abe6a206308dc0657cad752f0/typism.png',
    'https://assets.basehub.com/467cc7ea/075c1799c1f678f47c94c3c758c5c6f9/2024.runr.id.01.03.png',
    'https://assets.basehub.com/467cc7ea/523eada6ecf871287a6a22ee9d1a094f/2022.grot.td.01.04.png',
    'https://assets.basehub.com/467cc7ea/f937cd8dc3f1798fc65257ced4fae963/2022.puis.gd.01.01.png',
    'https://assets.basehub.com/467cc7ea/6e7408c65b3132207721865c92f680ee/2022.edgl.id.02.01.png',
    'https://assets.basehub.com/467cc7ea/4d145209f988cda07cb493824527d52f/2024.seti.td.02.01.png',
    'https://assets.basehub.com/467cc7ea/054dac1be6f6cfe6c95e39a7e15a05b6/2023.fash.id.01.01.png',
    'https://assets.basehub.com/467cc7ea/473e69a044283cdd09f463dac8033a47/2024.ramp.id.01.01.png',
    'https://assets.basehub.com/8d64593cfb842a77/6870dcb80d3f341562dedbe5b69609bb/j-schargo-identity-01.png',
    'https://assets.basehub.com/467cc7ea/9f6047771a14fff8679558d51142e79d/2023.fash.id.01.02.png',
    'https://assets.basehub.com/467cc7ea/c346ba3bc2bace6befb0d7674ee91655/2023.tango.id.01.01.png'
];

// 將圖片URL添加到資源列表中
images.forEach(url => {
    const filename = path.basename(url);
    resources.push({
        url: url,
        dest: `public/images/${filename}`
    });
});

// 下載所有資源
async function downloadAll() {
    console.log('開始下載資源...');
    for (const resource of resources) {
        try {
            await downloadFile(resource.url, resource.dest);
        } catch (error) {
            console.error(`下載失敗: ${resource.url}`);
        }
    }
    console.log('所有資源下載完成！');
}

downloadAll(); 