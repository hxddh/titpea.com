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
    description: "Chrome side panel and address-bar search for the bookmark tree already in this browser.",
    eyebrow: "Chrome extension",
    headline: "Bookmarks at your side.",
    lead: "Your bookmark tree. In the side panel and the address bar. No external servers.",
    catalog: {
      role: "Side panel",
      text: "Search the bookmarks Chrome already has, from the side panel or the address bar.",
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
        alt: "Store image: Easier Bookmarks in Chrome’s side panel beside a web page, a search box and star button at the top, the Work folder open with site icons, and a count of 14 bookmarks at the foot",
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
          { title: "In the address bar", body: "Type `b`, a space, a few letters; Enter opens the best match." },
          { title: "Search as you type", body: "Titles, links, folders, even pinyin initials. Recent ones first." },
          {
            title: "Save in one click",
            body: "Filed with that site’s other bookmarks, or the folder you last picked.",
          },
          { title: "Knows the page you’re on", body: "The star fills if it’s saved; click it to edit instead." },
          { title: "Drag to organize", body: "Into any folder or between items. Or Alt + ↑ / ↓." },
          { title: "Undo, not “Are you sure?”", body: "A deleted folder comes back whole, in place." },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "Where your data goes.",
        items: [
          "It uses Chrome’s Bookmarks API and local storage: open folders, recently opened bookmarks for search order, and your last-picked folder.",
          "Optional tabs access, asked at your first save, reads the active tab’s title and address to save it or show it’s saved.",
          "That address and what you type after `b` are never stored or sent. No analytics, ads, accounts, remote code, or servers.",
        ],
      },
    ],
  },
  zh: {
    title: "Easier Bookmarks",
    description: "Chrome 侧边栏和地址栏里的书签工具，在本地搜索、收藏和整理书签。",
    eyebrow: "Chrome 扩展",
    headline: "书签在侧边，随手整理",
    lead: "已有的书签树。在侧边栏，也在地址栏。无外部服务器。",
    catalog: {
      role: "侧边栏",
      text: "在侧边栏或地址栏搜索 Chrome 里已有的书签。",
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
        alt: "商店图片：网页旁的 Chrome 侧边栏里是 Easier Bookmarks，顶部是搜索框和星标按钮，“工作”文件夹已展开，带网站图标，底部显示 14 个书签",
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
          { title: "地址栏直接搜", body: "输入 `b` 加空格再打几个字，回车打开最匹配的书签。" },
          { title: "边输入边找到", body: "标题、网址、文件夹一起搜，支持拼音首字母，最近打开的在前。" },
          { title: "一键收藏", body: "存进同一网站书签所在的文件夹，或你上次选的文件夹。" },
          { title: "认得当前页", body: "已收藏时星标变实心，点它编辑，不会重复添加。" },
          { title: "拖拽整理", body: "放进任意文件夹或两项之间，也可以按 Alt + ↑ / ↓。" },
          { title: "撤销代替确认", body: "删掉的文件夹连同内容原位恢复。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "数据的去向",
        items: [
          "只使用 Chrome 书签 API 和扩展本地存储：展开的文件夹、最近打开过的书签（用于搜索排序）和你上次选的文件夹。",
          "标签页权限是可选的：第一次收藏当前页时才申请，读取当前标签页的标题和网址，用于收藏并显示是否已收藏。",
          "这个网址和你在 `b` 后输入的内容都不会被保存或发送。无分析服务，也没有广告、账号、远程代码或外部服务器。",
        ],
      },
    ],
  },
});
