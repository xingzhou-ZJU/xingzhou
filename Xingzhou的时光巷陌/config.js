/**
 * ============================================================
 * 博客 - 配置文件
 * ============================================================
 */

const CONFIG = {
  // ==================== 网站基本信息 ====================
  site: {
    name: "Xingzhou的时光巷陌",
    subtitle: "心之所向，万里行舟",
    author: "Xingzhou-ZJU",
    description: "记录我的生活",
    favicon: "assets/avatar.png", // 网站图标路径
  },

  // ==================== 背景音乐 ====================
  music: {
    enabled: true,           // 是否开启背景音乐
    autoplay: true,         // 是否自动播放
    loop: true,              // 是否循环播放
    volume: 0.2,             // 音量 (0-1)

    // 音乐文件列表（支持多个，随机播放）
    playlist: [
      {
        title: "去时风",
        artist: "略",
        cover: "assets/music-cover/1.jpg",
        url: "assets/music/gone-with-wind.mp3"
      },

    ],
  },

  // ==================== 导航菜单 ====================
  navigation: [
    { name: "首页", url: "index.html", icon: "home" },
    { name: "文章", url: "index.html#articles", icon: "book" },
    { name: "专题图集", url: "gallery.html", icon: "image" },
    { name: "关于", url: "about.html", icon: "user" },
  ],

  // ==================== 作者信息 ====================
  author: {
    name: "行舟",
    avatar: "assets/avatar.png",
    bio: "长夏郁郁，没什么开始、沉落  \n什么都歌向一个完整的未来",
    email: "jc.li@zju.edu.cn",
    social: {
      github: "https://github.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
    stats: {
      articles: 0,
      galleries: 0,
      words: "未知",
    }
  },

  // ==================== 文章列表 ====================
  articles: [
    {
      id: 1,
      title: "遇见莫奈的花园",
      subtitle: "在吉维尼的午后，光影如诗",
      cover: "assets/article-covers/monet-garden.jpg",
      coverAlt: "莫奈花园",
      excerpt: "走进莫奈的花园，仿佛踏入了一幅流动的画卷。睡莲池畔，光影交错，每一刻都是不同的画作...",
      content: "", // 实际内容会从单独的文件加载
      date: "2024-01-15",
      category: "艺术",
      tags: ["莫奈", "印象派", "旅行", "摄影"],
      readTime: "8 分钟",
      views: 2341,
    },
    {
      id: 2,
      title: "海边的蓝色清晨",
      subtitle: "当第一缕阳光洒向海面",
      cover: "assets/article-covers/seaside-morning.jpg",
      coverAlt: "海边清晨",
      excerpt: "清晨五点，海边的天空呈现出最温柔的蓝调。浪花轻拍着沙滩，带来远方的问候...",
      content: "",
      date: "2024-01-10",
      category: "生活",
      tags: ["海边", "清晨", "摄影", "治愈"],
      readTime: "5 分钟",
      views: 1876,
    },
    {
      id: 3,
      title: "书房里的光影游戏",
      subtitle: "与文字相伴的宁静时光",
      cover: "assets/article-covers/study-light.jpg",
      coverAlt: "书房光影",
      excerpt: "阳光透过窗纱，在书页上投下斑驳的影子。一杯茶，一本书，就是最好的陪伴...",
      content: "",
      date: "2024-01-05",
      category: "阅读",
      tags: ["读书", "书房", "光影", "独处"],
      readTime: "6 分钟",
      views: 1543,
    },
    {
      id: 4,
      title: "寻找城市里的蓝色角落",
      subtitle: "在喧嚣中发现宁静",
      cover: "assets/article-covers/city-blue.jpg",
      coverAlt: "城市蓝调",
      excerpt: "城市里也藏着许多蓝色的角落——咖啡馆的窗边、图书馆的走廊、傍晚的天际线...",
      content: "",
      date: "2024-01-01",
      category: "城市",
      tags: ["城市", "探索", "蓝色", "街拍"],
      readTime: "7 分钟",
      views: 2109,
    },
  ],

  // ==================== 专题图集 ====================
  galleries: [
    {
      id: 1,
      title: "蓝色梦境",
      subtitle: "8 张照片",
      cover: "assets/gallery-covers/blue-dream.jpg",
      description: "收集生活中的蓝色瞬间，如梦似幻",
      images: [
        { src: "assets/galleries/blue-dream/1.jpg", alt: "蓝色窗户", caption: "清晨的蓝" },
        { src: "assets/galleries/blue-dream/2.jpg", alt: "海边", caption: "海的呼吸" },
        { src: "assets/galleries/blue-dream/3.jpg", alt: "天空", caption: "云的诗" },
        { src: "assets/galleries/blue-dream/4.jpg", alt: "花瓶", caption: "静谧时光" },
        { src: "assets/galleries/blue-dream/5.jpg", alt: "湖泊", caption: "镜中世界" },
        { src: "assets/galleries/blue-dream/6.jpg", alt: "傍晚", caption: "蓝调时刻" },
        { src: "assets/galleries/blue-dream/7.jpg", alt: "书房", caption: "阅读角落" },
        { src: "assets/galleries/blue-dream/8.jpg", alt: "夜景", caption: "城市灯火" },
      ],
      date: "2024-01-12",
      views: 3421,
    },
    {
      id: 2,
      title: "光影笔记",
      subtitle: "12 张照片",
      cover: "assets/gallery-covers/light-shadow.jpg",
      description: "捕捉光与影的舞蹈瞬间",
      images: [
        { src: "assets/galleries/light-shadow/1.jpg", alt: "光影1", caption: "光的形状" },
        { src: "assets/galleries/light-shadow/2.jpg", alt: "光影2", caption: "影的故事" },
        { src: "assets/galleries/light-shadow/3.jpg", alt: "光影3", caption: "日落时分" },
        { src: "assets/galleries/light-shadow/4.jpg", alt: "光影4", caption: "晨曦初露" },
        { src: "assets/galleries/light-shadow/5.jpg", alt: "光影5", caption: "窗前" },
        { src: "assets/galleries/light-shadow/6.jpg", alt: "光影6", caption: "树影" },
        { src: "assets/galleries/light-shadow/7.jpg", alt: "光影7", caption: "午后" },
        // 修复：移除了多余的左大括号
        { src: "assets/galleries/light-shadow/8.jpg", alt: "光影8", caption: "黄昏" },
        { src: "assets/galleries/light-shadow/9.jpg", alt: "光影9", caption: "夜灯" },
        { src: "assets/galleries/light-shadow/10.jpg", alt: "光影10", caption: "烛光" },
        { src: "assets/galleries/light-shadow/11.jpg", alt: "光影11", caption: "月影" },
        { src: "assets/galleries/light-shadow/12.jpg", alt: "光影12", caption: "星光" },
      ],
      date: "2024-01-08",
      views: 2876,
    },
    {
      id: 3,
      title: "花的语言",
      subtitle: "10 张照片",
      cover: "assets/gallery-covers/flowers.jpg",
      description: "花朵绽放的温柔时刻",
      images: [
        { src: "assets/galleries/flowers/1.jpg", alt: "花", caption: "花开" },
        { src: "assets/galleries/flowers/2.jpg", alt: "花", caption: "芬芳" },
        { src: "assets/galleries/flowers/3.jpg", alt: "花", caption: "绽放" },
        { src: "assets/galleries/flowers/4.jpg", alt: "花", caption: "露珠" },
        { src: "assets/galleries/flowers/5.jpg", alt: "花", caption: "花语" },
        { src: "assets/galleries/flowers/6.jpg", alt: "花", caption: "花影" },
        { src: "assets/galleries/flowers/7.jpg", alt: "花", caption: "花间" },
        { src: "assets/galleries/flowers/8.jpg", alt: "花", caption: "花香" },
        { src: "assets/galleries/flowers/9.jpg", alt: "花", caption: "花谢" },
        { src: "assets/galleries/flowers/10.jpg", alt: "花", caption: "花梦" },
      ],
      date: "2024-01-05",
      views: 2156,
    },
  ],

  // ==================== 标签云 ====================
  tags: [
    { name: "莫奈", count: 12 },
    { name: "摄影", count: 28 },
    { name: "旅行", count: 15 },
    { name: "生活", count: 22 },
    { name: "蓝色", count: 18 },
    { name: "治愈", count: 14 },
    { name: "光影", count: 16 },
    { name: "阅读", count: 11 },
    { name: "海边", count: 9 },
    { name: "艺术", count: 13 },
  ],

  // ==================== 友情链接 ====================
  links: [
    { name: "某某的博客", url: "https://example.com", description: "生活记录者" },
    { name: "摄影日记", url: "https://example.com", description: "光影笔记" },
    { name: "读书笔记", url: "https://example.com", description: "阅读时光" },
  ],

  // ==================== 页脚设置 ====================
  footer: {
    copyright: "© 心之所向 万里行舟",
    icp: "京ICP备XXXXXXXX号",
    showStats: true,  // 是否显示站点统计
  },

  // ==================== 动画设置 ====================
  animations: {
    enabled: true,
    scrollReveal: true,    // 滚动显示动画
    hoverEffect: true,     // 悬停效果
    parallax: true,        // 视差效果
    duration: 600,         // 动画持续时间(ms)
  },

  // ==================== 图片设置 ====================
  images: {
    lazyLoad: true,        // 懒加载
    placeholder: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23E6F4FF' width='400' height='300'/%3E%3C/svg%3E",
    quality: 90,           // 图片质量

    // 默认图片（当图片加载失败时使用）
    default: {
      article: "assets/default-article.jpg",
      gallery: "assets/default-gallery.jpg",
      avatar: "assets/default-avatar.jpg",
    },
  },

  // ==================== 布局设置 ====================
  layout: {
    containerMaxWidth: "1200px",    // 内容区最大宽度
    sidebarWidth: "35%",             // 侧边栏宽度
    mainWidth: "65%",                // 主栏宽度
    headerHeight: "70px",            // 头部高度
    spacing: {
      small: "0.5rem",
      medium: "1rem",
      large: "2rem",
      xlarge: "4rem",
    },
  },

  // ==================== SEO设置 ====================
  seo: {
    keywords: "莫奈,博客,文艺,摄影,生活记录,蓝色,治愈",
    ogImage: "assets/og-image.jpg",
    twitterCard: "summary_large_image",
  },

  // ==================== 评论系统 ====================
  comments: {
    enabled: true,         // 是否开启评论
    provider: "disqus",    // disqus | valine | utterances | custom
    shortcode: "",         // 你的评论短代码
  },

  // ==================== 分析统计 ====================
  analytics: {
    enabled: false,        // 是否开启统计
    googleId: "",          // Google Analytics ID
    baiduId: "",           // 百度统计 ID
  },
};

// 导出配置（兼容不同模块系统）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}