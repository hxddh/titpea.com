import { defineProduct } from "../schema";

export default defineProduct({
  slug: "easier-bookmarks",
  line: "everyday",
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
    headline: "Bookmarks at your side",
    lead: "Search and move the bookmarks you already have, directly in Chrome’s side panel. Keep your existing folders and browser sync settings.",
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
        src: "/assets/easier-bookmarks.png",
        alt: "Easier Bookmarks Chrome side panel showing a searchable bookmark tree",
        width: 1280,
        height: 800,
      },
    },
    sections: [
      {
        kind: "cards",
        id: "positioning",
        label: "Chrome's tree, side panel",
        items: [
          {
            title: "Works with Chrome's bookmark tree",
            body: "It works with the bookmarks and folders already in Chrome. There is no separate library to import, account to create, or sync service of its own; Chrome sync remains whatever you already configured in Chrome.",
          },
          {
            title: "No analytics, no servers",
            body: "It uses Chrome's Bookmarks API and local extension storage. There are no analytics, ads, accounts, remote code, or external servers.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "Easier Bookmarks",
    description: "Chrome 侧边栏书签管理器，可在本地搜索、浏览和整理书签。",
    eyebrow: "Chrome 扩展",
    headline: "书签在侧边，随手整理",
    lead: "在 Chrome 侧边栏查找和移动已有书签，沿用原来的文件夹。Chrome 同步仍按你的浏览器设置执行。",
    catalog: {
      role: "侧边栏",
      text: "搜索 Chrome 里已有的书签。",
    },
    primaryCta: {
      label: "安装扩展",
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
        src: "/assets/easier-bookmarks.png",
        alt: "Easier Bookmarks Chrome 侧边栏，显示可搜索的书签树",
        width: 1280,
        height: 800,
      },
    },
    sections: [
      {
        kind: "cards",
        id: "positioning",
        label: "Chrome 书签树，侧边栏",
        items: [
          {
            title: "沿用 Chrome 书签树",
            body: "它管理 Chrome 里已有的书签和文件夹，不需要导入另一套资料库，也不用注册账号或另接同步服务；Chrome 自身同步仍按你的浏览器设置执行。",
          },
          {
            title: "无分析，无外部服务器",
            body: "它只使用 Chrome 书签 API 和扩展本地存储，无分析服务、广告、账号、远程代码或外部服务器。",
          },
        ],
      },
    ],
  },
});
