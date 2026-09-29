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
    meta: "Chrome Web Store · Workflow & Planning · No external servers",
    visual: {
      kind: "screenshot",
      label: "Easier Bookmarks",
      frame: "wide",
      image: {
        src: "/assets/easier-bookmarks.webp",
        alt: "Easier Bookmarks Chrome side panel showing a searchable bookmark tree",
        width: 1280,
        height: 800,
      },
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "Your folders stay as they are.",
        items: [
          { title: "Search bookmarks", body: "Find what Chrome already has." },
          { title: "Move bookmarks", body: "Reorganize in the side panel." },
          { title: "Existing folders", body: "No separate library to import." },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "Where your data goes.",
        items: [
          "It uses Chrome’s Bookmarks API and local extension storage.",
          "No analytics, ads, accounts, remote code, or external servers.",
          "It has no sync of its own; Chrome sync stays as you configured it.",
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
    meta: "Chrome 网上应用店 · 工作流与规划 · 无外部服务器",
    visual: {
      kind: "screenshot",
      label: "Easier Bookmarks",
      frame: "wide",
      image: {
        src: "/assets/easier-bookmarks.webp",
        alt: "Easier Bookmarks Chrome 侧边栏，显示可搜索的书签树",
        width: 1280,
        height: 800,
      },
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "文件夹保持原样",
        items: [
          { title: "搜索书签", body: "查找 Chrome 里已有的书签。" },
          { title: "移动书签", body: "在侧边栏里整理。" },
          { title: "沿用文件夹", body: "不需要导入另一套资料库。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "数据的去向",
        items: [
          "只使用 Chrome 书签 API 和扩展本地存储。",
          "无分析服务，也没有广告、账号、远程代码或外部服务器。",
          "没有另接的同步服务，Chrome 自身同步仍按你的浏览器设置执行。",
        ],
      },
    ],
  },
});
