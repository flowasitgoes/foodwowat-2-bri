// 基本应用初始化
document.addEventListener('DOMContentLoaded', () => {
    console.log('应用已加载');
});

// 处理数据加载
async function loadData(path) {
    try {
        const response = await fetch(path);
        return await response.json();
    } catch (error) {
        console.error('加载数据失败:', error);
        return {};
    }
} 