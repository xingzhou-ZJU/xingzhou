/**
 * ============================================================
 * 莫奈蓝白文艺博客 - 主 JavaScript
 * ============================================================
 */

class BlogApp {
  constructor() {
    this.init();
  }

  init() {
    this.initNavigation();
    this.initBackToTop();
    this.initMusic();
    this.initLazyLoading();
    this.initAnimations();
    this.initScrollProgress();
  }

  // ==================== 导航栏 ====================
  initNavigation() {
    const header = document.getElementById('header');
    if (!header) return;

    // 滚动时添加阴影
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // ==================== 返回顶部 ====================
  initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;

    // 监听滚动，显示/隐藏按钮
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    // 点击返回顶部
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ==================== 背景音乐 ====================
  initMusic() {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');

    if (!musicToggle || !bgMusic) return;

    // 检查配置
    const musicEnabled = typeof CONFIG !== 'undefined' && CONFIG.music && CONFIG.music.enabled;

    if (!musicEnabled) {
      musicToggle.style.display = 'none';
      return;
    }

    let isPlaying = false;

    // 切换播放/暂停
    musicToggle.addEventListener('click', () => {
      if (isPlaying) {
        bgMusic.pause();
        musicToggle.classList.remove('playing');
      } else {
        bgMusic.play();
        musicToggle.classList.add('playing');
      }
      isPlaying = !isPlaying;
    });

    // 设置音量
    if (CONFIG.music && CONFIG.music.volume) {
      bgMusic.volume = CONFIG.music.volume;
    }

    // 自动播放（需要用户交互后才能播放）
    if (CONFIG.music && CONFIG.music.autoplay) {
      // 第一次点击页面时尝试播放
      document.addEventListener('click', function playOnce() {
        bgMusic.play().then(() => {
          isPlaying = true;
          musicToggle.classList.add('playing');
        }).catch(() => {
          // 自动播放被阻止，等待用户手动点击
        });
        document.removeEventListener('click', playOnce);
      }, { once: true });
    }
  }

  // ==================== 图片懒加载 ====================
  initLazyLoading() {
    // 检查浏览器是否支持原生懒加载
    if ('loading' in HTMLImageElement.prototype) {
      const images = document.querySelectorAll('img[loading="lazy"]');
      images.forEach(img => {
        img.src = img.dataset.src || img.src;
      });
      return;
    }

    // 使用 Intersection Observer
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      });

      const images = document.querySelectorAll('img[data-src]');
      images.forEach(img => imageObserver.observe(img));
    }
  }

  // ==================== 滚动动画 ====================
  initAnimations() {
    // 检查配置
    const animationsEnabled = typeof CONFIG !== 'undefined' && CONFIG.animations && CONFIG.animations.enabled;

    if (!animationsEnabled) return;

    if ('IntersectionObserver' in window) {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            animationObserver.unobserve(entry.target);
          }
        });
      }, observerOptions);

      // 观察需要动画的元素
      const animatedElements = document.querySelectorAll('.article-card, .gallery-card, .sidebar-widget');
      animatedElements.forEach(el => animationObserver.observe(el));
    }
  }

  // ==================== 阅读进度条 ====================
  initScrollProgress() {
    // 只在文章页显示
    if (!document.body.classList.contains('article-page')) return;

    // 创建进度条
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    document.body.appendChild(progressBar);

    // 更新进度
    window.addEventListener('scroll', () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      progressBar.style.width = `${progress}%`;
    });
  }
}

// ==================== 工具函数 ====================

/**
 * 格式化日期
 */
function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * 格式化数字（1234 -> 1.2k）
 */
function formatNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
}

/**
 * 防抖函数
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * 节流函数
 */
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// ==================== DOM 加载完成后初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
  // 初始化博客应用
  const blog = new BlogApp();

  // 设置当前年份（页脚）
  const yearElements = document.querySelectorAll('[data-current-year]');
  const currentYear = new Date().getFullYear();
  yearElements.forEach(el => {
    el.textContent = currentYear;
  });

  console.log('🌸 墨蓝笔记已加载');
});

// ==================== 窗口加载完成后 ====================
window.addEventListener('load', () => {
  // 移除加载动画（如果有）
  document.body.classList.add('loaded');
});

/**
 * ============================================================
 * 配置助手 - 方便在控制台修改配置
 * ============================================================
 */
window.ConfigHelper = {
  /**
   * 更新颜色配置
   */
  updateColor(name, value) {
    document.documentElement.style.setProperty(`--color-${name}`, value);
    console.log(`已更新颜色: --color-${name} = ${value}`);
  },

  /**
   * 更新字体大小
   */
  updateFontSize(name, value) {
    document.documentElement.style.setProperty(`--font-size-${name}`, value);
    console.log(`已更新字号: --font-size-${name} = ${value}`);
  },

  /**
   * 切换主题（预留）
   */
  toggleTheme() {
    // 可以扩展为暗色模式
    console.log('主题切换功能开发中...');
  }
};

// 在控制台提示可用的配置方法
console.log('%c💡 配置提示', 'color: #8CB6E6; font-size: 14px; font-weight: bold;');
console.log('在控制台可以使用以下方法快速修改配置：');
console.log('  ConfigHelper.updateColor("accent", "#新颜色")');
console.log('  ConfigHelper.updateFontSize("base", "16px")');
