// Site-wide facts and interface copy. Product copy lives in ./products.
import type { Line, Locale } from "./schema";

export const site = {
  brand: "Titpea",
  baseUrl: "https://titpea.com",
  email: "info@titpea.com",
  github: "https://github.com/hxddh",
  og: { home: "/assets/og-home.png", about: "/assets/og-about.png" },
} as const;

export const absoluteUrl = (path: string) => `${site.baseUrl}${path}`;

type Ui = {
  // Chrome
  primaryLabel: string;
  footerLabel: string;
  skipLink: string;
  menuLabel: string;
  menuText: string;
  sectionDirectory: string;
  themeToDark: string;
  themeToLight: string;
  themeDarkText: string;
  themeLightText: string;
  copy: string;
  copied: string;
  /** Follows the version in the meta line; `{date}` is the latest release's publish date. */
  released: string;
  pauseVideo: string;
  /** `{version}` is the latest release tag. */
  whatsNew: string;
  commandOutput: string;
  notesInEnglish: string;
  notesInChinese: string;
  releaseNotes: string;
  playVideo: string;
  home: string;
  about: string;
  groups: { main: string; external: string } & Record<Line, string>;
  // Home
  productIndex: string;
  homeMetaTitle: string;
  homeTitle: string;
  homeDescription: string;
  homeLead: string;
  featuredTitle: string;
  moreToolsTitle: string;
  learnMore: string;
  browseTools: string;
  aboutMore: string;
  // About
  aboutTitle: string;
  aboutMetaTitle: string;
  aboutDescription: string;
  aboutEyebrow: string;
  /** `{count}` is the number of products. */
  aboutHeadline: string;
  aboutLead: string;
  contactLabel: string;
  aboutStats: { products: string; lines: string; released: string; releases: string };
  aboutLinesTitle: string;
  aboutLinesSub: string;
  /** Three habits backed by product facts, plus the open-source line (`{open}` of `{count}`, `{licenses}`). */
  aboutPrinciplesTitle: string;
  aboutPrinciples: Array<{ title: string; body: string }>;
  aboutOpenSource: { title: string; body: string };
  aboutReleasesTitle: string;
  aboutReleasesSub: string;
  aboutReleasesMore: string;
  aboutFeed: string;
  aboutContactTitle: string;
  aboutContactSub: string;
};

export const ui: Record<Locale, Ui> = {
  en: {
    primaryLabel: "Primary",
    footerLabel: "Footer",
    skipLink: "Skip to content",
    menuLabel: "Open site menu",
    menuText: "Menu",
    sectionDirectory: "Sections",
    themeToDark: "Switch to dark theme",
    themeToLight: "Switch to light theme",
    themeDarkText: "Dark",
    themeLightText: "Light",
    copy: "Copy",
    copied: "Copied",
    released: " ({date})",
    pauseVideo: "Pause",
    whatsNew: "What’s new in {version}.",
    commandOutput: "Show real output",
    notesInEnglish: "Quoted from the English release notes.",
    notesInChinese: "Quoted from the Chinese release notes.",
    releaseNotes: "Release notes",
    playVideo: "Play",
    home: "Home",
    about: "About",
    groups: {
      main: "Main",
      storage: "Storage",
      agents: "Agents",
      everyday: "Everyday",
      experimental: "Experimental",
      external: "External",
    },
    productIndex: "Independent software by hxddh",
    homeMetaTitle: "Titpea — Agents and tools by hxddh",
    homeTitle: "Agents and tools.",
    homeDescription: "Software by hxddh, from S3 investigations and PDF reading to desktop chess and browser tools.",
    homeLead: "S3 investigations. PDF reading. Chess, clocks, and browser tools.",
    featuredTitle: "Selected work",
    moreToolsTitle: "More tools",
    learnMore: "Learn more",
    browseTools: "Browse all tools",
    aboutMore: "About hxddh",
    aboutTitle: "About",
    aboutMetaTitle: "About Titpea — hxddh",
    aboutDescription:
      "Titpea is one person’s product shelf: storage investigations, agents, and small everyday apps, built and released by hxddh.",
    aboutEyebrow: "About Titpea",
    aboutHeadline: "One person. {count} tools.",
    aboutLead: "Storage investigations, agents, and small everyday apps. Built and released by hxddh.",
    contactLabel: "Contact links",
    aboutStats: {
      products: "Products",
      lines: "Product lines",
      released: "With GitHub releases",
      releases: "GitHub releases published",
    },
    aboutLinesTitle: "Four lines of work.",
    aboutLinesSub: "Every product belongs to one of them.",
    aboutPrinciplesTitle: "How the tools work.",
    aboutPrinciples: [
      {
        title: "Evidence in view",
        body: "Storage Agent keeps the checks beside the answer. PageWise cites the page.",
      },
      {
        title: "Local by default",
        body: "Keys stay in a local vault. Files stay on disk. Bookmarks need no server.",
      },
      {
        title: "Read before write",
        body: "Storage Agent’s tools are read-only. StorageOps does not change storage.",
      },
    ],
    aboutOpenSource: { title: "Source in the open", body: "{open} of {count} products are open source: {licenses}." },
    aboutReleasesTitle: "Latest releases.",
    aboutReleasesSub: "Tags, dates, and highlights come from GitHub on every build.",
    aboutReleasesMore: "All releases",
    aboutFeed: "Follow releases (Atom)",
    aboutContactTitle: "Say hello.",
    aboutContactSub: "The code is on GitHub. Everything else, by email.",
  },
  zh: {
    primaryLabel: "主导航",
    footerLabel: "页脚",
    skipLink: "跳到主要内容",
    menuLabel: "打开站点菜单",
    menuText: "菜单",
    sectionDirectory: "目录",
    themeToDark: "切换到深色主题",
    themeToLight: "切换到浅色主题",
    themeDarkText: "深色",
    themeLightText: "浅色",
    copy: "复制",
    copied: "已复制",
    released: "（{date}）",
    pauseVideo: "暂停",
    whatsNew: "{version} 更新了什么",
    commandOutput: "查看实际输出",
    notesInEnglish: "摘自英文发布说明。",
    notesInChinese: "摘自中文发布说明。",
    releaseNotes: "发布说明",
    playVideo: "播放",
    home: "首页",
    about: "关于",
    groups: {
      main: "主要",
      storage: "存储",
      agents: "Agent",
      everyday: "日常",
      experimental: "实验",
      external: "外部链接",
    },
    productIndex: "hxddh 独立开发的软件",
    homeMetaTitle: "Titpea — Agent 和工具",
    homeTitle: "Agent 和工具",
    homeDescription: "hxddh 独立开发的软件：对象存储排查、PDF 阅读，以及桌面和浏览器里的日常工具。",
    homeLead: "对象存储排查。PDF 阅读。棋类、时钟和浏览器小工具。",
    featuredTitle: "主要作品",
    moreToolsTitle: "更多工具",
    learnMore: "了解更多",
    browseTools: "浏览全部工具",
    aboutMore: "关于 hxddh",
    aboutTitle: "关于",
    aboutMetaTitle: "关于 Titpea — hxddh",
    aboutDescription: "Titpea 是一个人的产品架：对象存储排查、Agent 和日常小工具，由 hxddh 开发并发布。",
    aboutEyebrow: "关于 Titpea",
    aboutHeadline: "一个人，{count} 个工具",
    aboutLead: "对象存储排查、Agent 和日常小工具。由 hxddh 开发并发布。",
    contactLabel: "联系方式",
    aboutStats: {
      products: "个产品",
      lines: "条产品线",
      released: "个有 GitHub Release",
      releases: "次 GitHub 发布",
    },
    aboutLinesTitle: "四条产品线",
    aboutLinesSub: "每个产品只属于其中一条。",
    aboutPrinciplesTitle: "这些工具怎么做事",
    aboutPrinciples: [
      {
        title: "证据摆在眼前",
        body: "Storage Agent 把检查放在结论旁边。PageWise 给出页引用。",
      },
      {
        title: "默认留在本机",
        body: "密钥在本机保险库。文件留在磁盘。书签不经服务器。",
      },
      {
        title: "只读优先",
        body: "Storage Agent 的工具只读。StorageOps 不修改存储。",
      },
    ],
    aboutOpenSource: { title: "代码公开", body: "{count} 个产品中有 {open} 个开源：{licenses}。" },
    aboutReleasesTitle: "最近的发布",
    aboutReleasesSub: "版本号、日期和要点在每次构建时从 GitHub 读取。",
    aboutReleasesMore: "全部发布",
    aboutFeed: "订阅发布（Atom）",
    aboutContactTitle: "打个招呼",
    aboutContactSub: "代码在 GitHub，其他事情发邮件。",
  },
};
