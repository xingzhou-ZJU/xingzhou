# 🌸 墨蓝笔记 - 莫奈蓝白风格个人博客

一个莫奈蓝白文艺清新风格的个人图文博客网站，温柔、干净、治愈、艺术感强。

![预览图](screenshot.png)

## ✨ 特性

- 🎨 **莫奈蓝白配色** - 雾感蓝 + 奶白色调，低对比度，水彩质感
- 📱 **响应式设计** - 完美适配 PC、平板、手机
- 📝 **双栏主从布局** - 左侧主栏内容，右侧侧边栏导航
- 🖼️ **图文混排支持** - 单图、双图并排、通栏大图自由组合
- 🎵 **背景音乐** - 支持背景音乐播放
- 🎭 **平滑动画** - 滚动动画、悬停效果、图片淡入
- 📊 **专题图集** - 网格卡片布局 + 画廊模态框

## 📁 项目结构

```
blog/
├── index.html              # 首页
├── gallery.html            # 专题图集页
├── about.html              # 关于页面
├── config.js               # 配置文件（重要！）
├── css/
│   ├── style.css          # 主样式表
│   ├── article.css        # 文章详情页样式
│   └── gallery.css        # 图集页样式
├── js/
│   └── main.js            # 主 JavaScript
├── articles/
│   └── article-1.html     # 文章详情页示例
└── assets/
    ├── favicon.ico        # 网站图标
    ├── avatar.jpg         # 作者头像
    ├── music/             # 背景音乐文件夹
    ├── article-covers/    # 文章封面图
    ├── gallery-covers/    # 图集封面图
    └── galleries/         # 图集图片
        ├── blue-dream/
        ├── light-shadow/
        └── flowers/
```

## 🎯 如何使用

### 1. 修改配置

所有配置都在 `config.js` 文件中，你可以轻松修改：

#### 修改颜色主题
```javascript
colors: {
  primary: "#E6F4FF",      // 主色调
  accent: "#8CB6E6",       // 强调色
  background: "#FCFDFF",   // 背景色
  textPrimary: "#3D4A5C",  // 文字色
  // ... 更多颜色
}
```

#### 修改字体
```javascript
fonts: {
  heading: '"Noto Serif SC", serif',  // 标题字体
  body: '"Noto Sans SC", sans-serif', // 正文字体
  size: {
    base: "16px",     // 基础字号
    heading: "2rem",  // 标题字号
  },
}
```

#### 修改背景音乐
```javascript
music: {
  enabled: true,      // 是否开启
  autoplay: false,    // 是否自动播放
  volume: 0.5,        // 音量 (0-1)
  playlist: [
    {
      title: "月光奏鸣曲",
      url: "assets/music/sonata.mp3"
    },
    // 添加更多音乐...
  ],
}
```

#### 添加文章
```javascript
articles: [
  {
    id: 1,
    title: "文章标题",
    cover: "assets/article-covers/image.jpg",
    excerpt: "文章摘要...",
    date: "2024-01-15",
    tags: ["标签1", "标签2"],
  },
  // 添加更多文章...
]
```

#### 添加图集
```javascript
galleries: [
  {
    id: 1,
    title: "图集标题",
    cover: "assets/gallery-covers/image.jpg",
    description: "图集描述",
    images: [
      { src: "assets/galleries/album/1.jpg", caption: "图片说明" },
      // 添加更多图片...
    ],
  },
]
```

### 2. 添加图片

将图片放到对应的文件夹中：

- `assets/avatar.jpg` - 作者头像
- `assets/article-covers/` - 文章封面图
- `assets/gallery-covers/` - 图集封面图
- `assets/galleries/` - 图集内图片（按文件夹分类）

### 3. 创建新文章

复制 `articles/article-1.html` 作为模板，修改内容：

```html
<!-- 修改封面图 -->
<div class="article-hero" style="background-image: url('../assets/article-covers/your-image.jpg');">

<!-- 修改文章内容 -->
<article class="article-body">
  <h1>你的文章标题</h1>
  <p>文章内容...</p>

  <!-- 单图 -->
  <figure class="article-image single">
    <img src="../assets/articles/image.jpg" alt="图片描述">
    <figcaption>图片说明</figcaption>
  </figure>

  <!-- 双图并排 -->
  <figure class="article-image double">
    <img src="../assets/articles/image1.jpg" alt="图片1">
    <img src="../assets/articles/image2.jpg" alt="图片2">
  </figure>

  <!-- 通栏大图 -->
  <figure class="article-image full-width">
    <img src="../assets/articles/large.jpg" alt="大图">
  </figure>
</article>
```

### 4. 修改作者信息

在 `config.js` 中修改：

```javascript
author: {
  name: "你的名字",
  avatar: "assets/avatar.jpg",
  bio: "你的简介...",
  email: "mailto:your@email.com",
  stats: {
    articles: 42,
    galleries: 8,
    words: "128k",
  },
}
```

## 🎨 配色方案

| 颜色名称 | 色值 | 用途 |
|---------|------|------|
| 雾感蓝主色 | #E6F4FF | 主要背景色 |
| 雾感蓝浅 | #D6E8FF | 悬停背景色 |
| 柔和蓝 | #8CB6E6 | 链接、强调色 |
| 柔和蓝深 | #73A6E6 | 链接悬停色 |
| 极浅奶白 | #FCFDFF | 页面背景 |
| 奶白交替 | #FAFBFF | 交替背景 |
| 深灰文字 | #3D4A5C | 主要文字 |
| 中灰文字 | #6B7A8F | 次要文字 |
| 浅灰文字 | #9AA5B6 | 辅助文字 |

## 🌐 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 移动端浏览器

## 📝 许可证

MIT License - 可自由使用和修改

---

**💡 提示：** 修改配置后刷新页面即可看到效果！
