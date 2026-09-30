import { defineProduct } from "../schema";

export default defineProduct({
  slug: "easier-bookmarks",
  line: "everyday",
  icon: "/assets/icons/easier-bookmarks.webp",
  og: "/assets/og-easier-bookmarks.png",
  schema: {
    category: "BrowserApplication",
    os: "Chrome",
  },
  sectionIndex: false,
  en: {
    title: "Easier Bookmarks",
    description: "Chrome side panel for the bookmark tree already in this browser.",
    eyebrow: "Chrome extension",
    headline: "Bookmarks at your side.",
    lead: "Your bookmark tree. Chrome’s side panel. No external servers.",
    catalog: {
      role: "Side panel",
      text: "Search the bookmarks Chrome already has.",
    },
    primaryCta: {
      label: "Install",
      href: "https://chromewebstore.google.com/detail/easier-bookmarks/polhblfkobplgbnklgkecpkpgollapbp",
    },
    secondaryCta: {
      label: "Privacy policy",
      href: "/easier-bookmarks/privacy/",
    },
    meta: "Chrome Web Store · Productivity · No external servers",
    visual: {
      kind: "screenshot",
      label: "Easier Bookmarks",
      frame: "wide",
      image: {
        src: "/assets/easier-bookmarks-en.webp",
        alt: "Store image: Easier Bookmarks in Chrome’s side panel beside a web page, the Work folder open with site icons",
        width: 1280,
        height: 800,
      },
      caption: "Illustration: store image with sample bookmarks",
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "Your folders stay as they are.",
        items: [
          { title: "Search as you type", body: "Titles, links, and folders at once. Recent ones first." },
          { title: "Pinyin initials", body: "Type gsyh to find 工商银行." },
          { title: "Save this page", body: "Title and link filled in. Already saved? It opens that one." },
          { title: "Drag to organize", body: "Into any folder or between items. Or Alt + ↑ / ↓." },
          { title: "Undo, not “Are you sure?”", body: "A deleted folder comes back whole, in place." },
          { title: "Existing folders", body: "Chrome’s own bookmarks. Nothing to import." },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "Where your data goes.",
        items: [
          "It uses Chrome’s Bookmarks API and local extension storage: open folders and recently opened bookmarks, for search order.",
          "Tabs access is optional: asked the first time you save the current page, only to read its title and address.",
          "No analytics, ads, accounts, remote code, or external servers. Chrome sync stays as you configured it.",
        ],
      },
    ],
  },
  zh: {
    title: "Easier Bookmarks",
    description: "Chrome 侧边栏书签管理器，可在本地搜索、浏览和整理书签。",
    eyebrow: "Chrome 扩展",
    headline: "书签在侧边，随手整理",
    lead: "已有的书签树。Chrome 侧边栏。无外部服务器。",
    catalog: {
      role: "侧边栏",
      text: "搜索 Chrome 里已有的书签。",
    },
    primaryCta: {
      label: "安装",
      href: "https://chromewebstore.google.com/detail/easier-bookmarks/polhblfkobplgbnklgkecpkpgollapbp",
    },
    secondaryCta: {
      label: "隐私政策",
      href: "/zh/easier-bookmarks/privacy/",
    },
    meta: "Chrome 网上应用店 · 效率 · 无外部服务器",
    visual: {
      kind: "screenshot",
      label: "Easier Bookmarks",
      frame: "wide",
      image: {
        src: "/assets/easier-bookmarks-zh.webp",
        alt: "商店图片：网页旁的 Chrome 侧边栏里是 Easier Bookmarks，“工作”文件夹已展开，带网站图标",
        width: 1280,
        height: 800,
      },
      caption: "示意图：商店图片，书签为示例",
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "文件夹保持原样",
        items: [
          { title: "边输入边找到", body: "标题、网址、文件夹一起搜，最近打开的排在前面。" },
          { title: "拼音首字母", body: "输入 gsyh 就能找到“工商银行”。" },
          { title: "收藏当前页", body: "标题和网址自动填好；已收藏过就打开原书签。" },
          { title: "拖拽整理", body: "放进任意文件夹或两项之间，也可以按 Alt + ↑ / ↓。" },
          { title: "撤销代替确认", body: "删掉的文件夹连同内容原位恢复。" },
          { title: "沿用文件夹", body: "就是 Chrome 自己的书签，无需导入。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "数据的去向",
        items: [
          "只使用 Chrome 书签 API 和扩展本地存储：展开的文件夹和最近打开过的书签，用于搜索排序。",
          "标签页权限是可选的：第一次收藏当前页时才申请，只用来读取该页的标题和网址。",
          "无分析服务，也没有广告、账号、远程代码或外部服务器。Chrome 自身同步仍按你的浏览器设置执行。",
        ],
      },
    ],
  },
});
