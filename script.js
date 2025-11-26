// script.js
// 温馨话语库
const messages = [
    "🤖 我写了无数行代码，却写不出一句完美的'你好'。",
    "🌟 你是源代码里最亮的那颗星，让我所有的函数都失了焦。",
    "🍃 春风十里，不如代码里偷偷想你的一个循环。",
    "💾 你是我内存中常驻的进程，优先级永远是最高。",
    "🐛 我的心跳遇到了一个Bug，它只在见到你时才会异常加速。",
    "🔒 我把喜欢你设成了私有方法，只有我的目光在反复调用。",
    "📡 我像一台沉默的服务器，向你发送了无数次连接请求，却只敢等待超时。",
    "⌨️ 在人群里搜索你的身影，是我执行效率最低，却最甘之如饴的算法。",
    "🧠 我的大脑好像分了区，C盘装系统，D盘装学习，剩下的全是你。",
    "🚀 我能搞定复杂的递归，却理不清想起你时那简单的甜蜜。",
    "📚 你是我唯一想反复 `import`，却不敢 `declare` 的模块。",
    "🎵 我的世界原本是黑白命令行，直到你为它渲染了色彩和背景音。",
    "🖱️ 每次和你擦肩，都像一次意外的鼠标悬停，让我这颗CPU瞬间满载。",
    "📞 我预加载了所有与你对话的资源，最后都阻塞在了 `onload` 事件里。",
    "⚡ 你是我人生系统里最高优先级的进程，所有资源都心甘情愿为你调度。",
    "🔑 你是我生命数据流中最关键的那个字节，少了你，整个文件都失去了意义。",
    "💿 我像一块机械硬盘，寻道时间很长，但一旦找到你，就会不停地为你旋转。"


    // "✨ 张恩浩，天冷记得多喝水！",
    // "🌱 张恩浩，你做得已经很棒了！",
    // "⭐ 恩浩宝宝，祝你早日练就8块大腹肌",
    // "💪 恩浩，你是独一无二的存在",
    // "🤖 张恩浩，我会永远的二爱你",
    // "☕ 浩浩，休息一下，喝杯水吧",
    // "🌙 保持热爱，奔赴山海",
    // "🚀 你的进步超乎想象",
    // "🎯 专注当下，未来自来",
    // "❤️ 你值得世间所有美好"


    //     "🎯颗秒",
    //     "🎯你这反应速度，是用的2G网络在打游戏吗？",
    //     "🎯你的“颗秒”是颗了一个世纪吗？",
    //     "🎯你这反应，我奶妈（圣祈）的E技能都给你抬不回来",
    //     "🎯你这枪法，钱博尔（Chamber）的猎头大招看了都流泪",
    //     "🎯你这波和捷风（Jett）的E技能配合得真好，完美躲开了所有子弹",
];
function createMessage() {
    // 创建对话框元素
    const newMessageBox = document.createElement('div');
    newMessageBox.className = 'message-box';
    // 随机选择一句话
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    newMessageBox.innerHTML = `<p class="message-text">${randomMessage}</p>`;
    // 🚀 新增核心代码：生成随机背景色
    const randomColor = getRandomColor();
    newMessageBox.style.backgroundColor = randomColor;
    // 计算随机位置
    const maxX = window.innerWidth - 250;
    const maxY = window.innerHeight - 150;
    const randomX = 20 + Math.floor(Math.random() * maxX);
    const randomY = 20 + Math.floor(Math.random() * maxY);
    // 应用位置
    newMessageBox.style.left = randomX + 'px';
    newMessageBox.style.top = randomY + 'px';
    // 添加到页面
    document.body.appendChild(newMessageBox);
    // 点击删除
    newMessageBox.onclick = function () {
        document.body.removeChild(this);
    }
}
// 🚀 新增函数：生成随机浅色系背景（保证文字可读性）
function getRandomColor() {
    //  HSL颜色模式：Hue(色相) Saturation(饱和度) Lightness(亮度)
    //  让色相随机(0-360)，饱和度和亮度保持较高值，生成柔和的浅色
    const h = Math.floor(Math.random() * 360);  // 色相：0-359
    const s = 70 + Math.floor(Math.random() * 20);  // 饱和度：70-89%
    const l = 80 + Math.floor(Math.random() * 15);  // 亮度：80-94%
    return `hsl(${h}, ${s}%, ${l}%)`;
}
// 每隔一段时间创建一个新对话框
setInterval(createMessage, 400); // 3秒一个，你可以调整
// 页面加载后立即创建第一个

window.onload = createMessage;

