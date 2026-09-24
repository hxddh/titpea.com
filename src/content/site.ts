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
  /** `{date}` is the latest release's publish date. */
  released: string;
  pauseVideo: string;
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
  aboutDescription: string;
  aboutHeadline: string;
  aboutLead: string;
  contactLabel: string;
  /** `{<slug>}` is replaced by that product's synced release tag. */
  aboutNote: string[];
  /** Three habits, each backed by facts already on the product pages. */
  aboutPrinciplesTitle: string;
  aboutPrinciples: Array<{ title: string; body: string }>;
  aboutReleasesTitle: string;
  aboutReleasesSub: string;
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
    released: "Released {date}",
    pauseVideo: "Pause",
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
    aboutDescription: "About hxddh — I keep the logs and checks behind a storage diagnosis.",
    aboutHeadline: "hxddh",
    aboutLead: "I keep the logs and checks behind a storage diagnosis.",
    contactLabel: "Contact links",
    aboutNote: [
      "There are also small apps for playing chess, checking the time, and sorting bookmarks.",
      "I ship every project myself.",
    ],
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
        body: "Storage Agent's tools are read-only. StorageOps does not change storage.",
      },
    ],
    aboutReleasesTitle: "Latest releases.",
    aboutReleasesSub: "Tags and dates come from GitHub on every build.",
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
    released: "{date}发布",
    pauseVideo: "暂停",
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
    aboutDescription: "关于 hxddh——存储排查时，我习惯保留得出结论的日志和检查记录。",
    aboutHeadline: "hxddh",
    aboutLead: "存储排查时，我习惯保留得出结论的日志和检查记录。",
    contactLabel: "联系方式",
    aboutNote: ["这里也有下棋、看时间和整理书签的小软件。", "每个项目都由我自己发布。"],
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
    aboutReleasesTitle: "最近的发布",
    aboutReleasesSub: "版本号和日期在每次构建时从 GitHub 读取。",
  },
};
