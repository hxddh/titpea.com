// Site-wide facts and interface copy. Product copy lives in ./products.
import type { Line, Locale } from "./schema";

export const site = {
  brand: "Titpea",
  baseUrl: "https://titpea.com",
  email: "info@titpea.com",
  github: "https://github.com/hxddh",
  og: { home: "/assets/og-home.png", about: "/assets/og-about.png" },
  /**
   * Cloudflare Web Analytics. The zone's "automatic setup" site injects the
   * cookieless beacon at the edge, so pages carry no token of their own
   * (adding one as well would count every view twice). Either one being on
   * makes About disclose it.
   */
  analyticsAutoInjected: true,
  /** Site token for the JS-snippet method, only if automatic setup is off. */
  analyticsToken: "",
} as const;

export const absoluteUrl = (path: string) => `${site.baseUrl}${path}`;

type Ui = {
  // Chrome
  primaryLabel: string;
  footerLabel: string;
  footerFeed: string;
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
  /** Product page, before the closing band: "More in {line}". */
  relatedInLine: string;
  browseAllTools: string;
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
  /** One block per product line: when you reach for it, and what it changes. The products are listed from the catalog. */
  aboutScenesTitle: string;
  aboutScenes: Record<Line, { when: string; value: string }>;
  aboutReleasesTitle: string;
  aboutReleasesMore: string;
  aboutFeed: string;
  aboutContactTitle: string;
  aboutContactSub: string;
  aboutAnalytics: string;
};

export const ui: Record<Locale, Ui> = {
  en: {
    primaryLabel: "Primary",
    footerLabel: "Footer",
    footerFeed: "Releases feed",
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
    releaseNotes: "Release notes",
    playVideo: "Play",
    home: "Home",
    about: "About",
    groups: {
      main: "Main",
      storage: "Storage",
      agents: "Agents",
      everyday: "Everyday",
      games: "Games",
      external: "External",
    },
    productIndex: "Independent software by hxddh",
    homeMetaTitle: "Titpea — Worlds, games, and tools by hxddh",
    homeTitle: "Worlds, games, and tools.",
    homeDescription:
      "Software by hxddh: a small world that keeps living, desktop chess you can review, translation when you ask, and tools for S3 storage and coding agents.",
    homeLead: "A world that keeps going. Chess you can review. Translation when you ask.",
    featuredTitle: "Selected work",
    moreToolsTitle: "More tools",
    relatedInLine: "More in {line}",
    browseAllTools: "All tools",
    learnMore: "Learn more",
    browseTools: "Browse all tools",
    aboutMore: "About hxddh",
    aboutTitle: "About",
    aboutMetaTitle: "About Titpea — hxddh",
    aboutDescription:
      "Titpea is one person’s product shelf: object storage, agents, everyday apps, and games, built and released by hxddh.",
    aboutEyebrow: "About Titpea",
    aboutHeadline: "One person. {count} tools.",
    aboutLead: "Storage, agents, everyday, games.",
    contactLabel: "Contact links",
    aboutScenesTitle: "Where they help.",
    aboutScenes: {
      storage: {
        when: "A bucket misbehaves, or a million objects need counting.",
        value: "Find the cause with read-only tools and keep the evidence; list large buckets fast.",
      },
      agents: {
        when: "Several agents are running, or you want to keep up with the field.",
        value: "See which one is waiting for you, carry a session to another machine, read sourced weekly briefs.",
      },
      everyday: {
        when: "Reading PDFs and foreign pages, tidying bookmarks, checking times and ratings.",
        value: "Answers you can check against the page; a translation only when you ask for it.",
      },
      games: {
        when: "Chess, Gomoku, or a small world of your own.",
        value: "Review the game when it ends; the world keeps going while you are away.",
      },
    },
    aboutReleasesTitle: "Latest releases.",
    aboutReleasesMore: "All releases",
    aboutFeed: "Follow releases (Atom)",
    aboutContactTitle: "Say hello.",
    aboutContactSub: "The code is on GitHub. Everything else, by email.",
    aboutAnalytics: "Page views are counted by Cloudflare Web Analytics: no cookies, no cross-site tracking.",
  },
  zh: {
    primaryLabel: "主导航",
    footerLabel: "页脚",
    footerFeed: "发布订阅",
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
    releaseNotes: "发布说明",
    playVideo: "播放",
    home: "首页",
    about: "关于",
    groups: {
      main: "主要",
      storage: "存储",
      agents: "Agent",
      everyday: "日常",
      games: "游戏",
      external: "外部链接",
    },
    productIndex: "hxddh 独立开发的软件",
    homeMetaTitle: "Titpea — 小世界、棋局和工具",
    homeTitle: "小世界、棋局和工具",
    homeDescription:
      "hxddh 独立开发的软件：一个自己运转的小世界、能复盘的桌面国际象棋、需要时才出现的翻译，以及对象存储和编码 Agent 工具。",
    homeLead: "自己运转的小世界。能复盘的国际象棋。需要时才出现的翻译。",
    featuredTitle: "主要作品",
    moreToolsTitle: "更多工具",
    relatedInLine: "更多{line}工具",
    browseAllTools: "全部工具",
    learnMore: "了解更多",
    browseTools: "浏览全部工具",
    aboutMore: "关于 hxddh",
    aboutTitle: "关于",
    aboutMetaTitle: "关于 Titpea — hxddh",
    aboutDescription: "Titpea 是一个人的产品架：对象存储、Agent、日常小工具和游戏，由 hxddh 开发并发布。",
    aboutEyebrow: "关于 Titpea",
    aboutHeadline: "一个人，{count} 个工具",
    aboutLead: "存储、Agent、日常、游戏。",
    contactLabel: "联系方式",
    aboutScenesTitle: "用在哪里",
    aboutScenes: {
      storage: {
        when: "桶出了问题，或要盘点上百万个对象。",
        value: "只读查清原因、留下依据；大桶也能很快列清。",
      },
      agents: {
        when: "同时跑着几个 Agent，或想跟上这个领域。",
        value: "一眼看出哪个在等你；会话换台机器接着用；每周动态附来源。",
      },
      everyday: {
        when: "读 PDF 和外文网页，整理书签，看时间和评分。",
        value: "回答能回到原页核对；译文只在需要时出现。",
      },
      games: {
        when: "下国际象棋、五子棋，或者养一个小世界。",
        value: "下完能复盘；你离开时，世界仍在继续。",
      },
    },
    aboutReleasesTitle: "最近的发布",
    aboutReleasesMore: "全部发布",
    aboutFeed: "订阅发布（Atom）",
    aboutContactTitle: "打个招呼",
    aboutContactSub: "代码在 GitHub，其他事情发邮件。",
    aboutAnalytics: "访问量由 Cloudflare Web Analytics 统计：不用 cookie，不做跨站追踪。",
  },
};
