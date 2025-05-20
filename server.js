const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 設置正確的 MIME 類型
app.use((req, res, next) => {
    if (req.url.endsWith('.css')) {
        res.type('text/css');
    } else if (req.url.endsWith('.js')) {
        res.type('application/javascript');
    } else if (req.url.endsWith('.woff2')) {
        res.type('font/woff2');
    } else if (req.url.endsWith('.woff')) {
        res.type('font/woff');
    } else if (req.url.endsWith('.webmanifest')) {
        res.type('application/manifest+json');
    } else if (req.url.endsWith('.data')) {
        res.type('application/json');
    } else if (req.url.endsWith('.png')) {
        res.type('image/png');
    }
    next();
});

// 提供靜態資源
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
app.use('/fonts', express.static(path.join(__dirname, 'public/fonts')));
app.use('/data', express.static(path.join(__dirname, 'public/data')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use(express.static(path.join(__dirname, 'public')));

// 提供 work 資料夾靜態資源
app.use('/work', express.static(path.join(__dirname, 'work')));

// 設置路由
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 添加 info.html 路由
app.get('/info', (req, res) => {
    res.sendFile(path.join(__dirname, 'info.html'));
});

// 添加 work.html 路由
app.get('/work', (req, res) => {
    res.sendFile(path.join(__dirname, 'work.html'));
});

// 添加 rampant-studio.html 路由
app.get('/work/rampant-studio', (req, res) => {
    res.sendFile(path.join(__dirname, 'rampant-studio.html'));
});

app.get('/work/ab-arca', (req, res) => {
    res.sendFile(path.join(__dirname, 'ab-arca.html'));
});

app.get('/work/edglrd', (req, res) => {
    res.sendFile(path.join(__dirname, 'edglrd.html'));
});

app.get('/work/einstoffen', (req, res) => {
    res.sendFile(path.join(__dirname, 'einstoffen.html'));
});

app.get('/work/ab-setima', (req, res) => {
    res.sendFile(path.join(__dirname, 'ab-setima.html'));
});

app.get('/work/henri-heymans', (req, res) => {
    res.sendFile(path.join(__dirname, 'henri-heymans.html'));
});

app.get('/work/ab-grotesk', (req, res) => {
    res.sendFile(path.join(__dirname, 'ab-grotesk.html'));
});                         

// 添加 notes 路由
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'notes.html'));
});

// 处理 Vercel 分析请求
app.get('/_vercel/insights/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, '_vercel/insights/script.js'));
});

app.get('/_vercel/insights/view', (req, res) => {
    res.status(200).send('OK');
});

// 处理数据文件请求
app.get('/*.data', (req, res) => {
    res.json({});
});

// 處理 __manifest 路由
app.get('/__manifest', (req, res) => {
    res.json({});
});

// 处理 404 错误
app.use((req, res) => {
    res.status(404).send('文件未找到');
});


// 启动服务器
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 