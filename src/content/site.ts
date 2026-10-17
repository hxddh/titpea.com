// Site-wide facts and interface copy. Product copy lives in ./products.
import type { FamilyId, Image, Line, Locale, Platform, PrivacySummary, ProductType, Purpose } from "./schema";

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

/**
 * Products that work together, in the order a visitor would reach for them.
 * Home shows each family as a strip; each member's page shows the band.
 */
export const familyMembers: Record<FamilyId, string[]> = {
  s3: ["s3-turbo-list", "storage-agent-workbench", "storageops", "httpmon"],
  agents: ["pulse", "readout", "celagent", "agent-radar"],
};

export const familyOf = (slug: string) =>
  (Object.keys(familyMembers) as FamilyId[]).find((id) => familyMembers[id].includes(slug));

export const absoluteUrl = (path: string) => `${site.baseUrl}${path}`;

/** The person behind Titpea, in their own words, on About. */
export type AboutPerson = {
  /** First person, written by the owner. */
  paragraph: string;
  /** Optional portrait the owner supplies (public/assets/...). */
  portrait?: Image;
};

/**
 * About's person slot, per locale. The owner writes it and supplies the
 * photo; until then it stays empty and About shows nothing in its place.
 * Never invent personal details here. Fill both locales or neither.
 */
export const about: { person: Partial<Record<Locale, AboutPerson>> } = {
  person: {},
};

type Ui = {
  // Chrome
  primaryLabel: string;
  footerLabel: string;
  footerFeed: string;
  skipLink: string;
  menuLabel: string;
  homeLabel: string;
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
  releases: string;
  privacy: string;
  groups: { main: string; external: string } & Record<Line, string>;
  // Home
  productIndex: string;
  homeMetaTitle: string;
  homeTitle: string;
  homeDescription: string;
  homeLead: string;
  featuredTitle: string;
  moreToolsTitle: string;
  /** Product pages: the row of other products before the footer. */
  relatedTitle: string;
  /** Home: the latest releases strip. */
  shippingTitle: string;
  shippingMore: string;
  /** Home catalog filter. */
  filterLabel: string;
  filterAll: string;
  /** Home catalog: who each product line is for. */
  groupNotes: Record<Line, string>;
  /** Product page, before the closing band: "More in {line}". */
  relatedInLine: string;
  /** Catalog facets and chips. */
  filterFor: string;
  filterRunsOn: string;
  /** `{count}` is the number of products shown. */
  filterCount: string;
  filterNone: string;
  types: Record<ProductType, string>;
  platforms: Record<Platform, string>;
  purposes: Record<Purpose, string>;
  statusPreview: string;
  /** A family's title and one line; `roles` is each member's step, by slug. */
  families: Record<FamilyId, { title: string; sub: string; roles: Record<string, string> }>;
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
  /** Under the headline (which carries the count): `{released}` products with GitHub releases, `{date}` the newest release. Segments split at " · ". */
  aboutFacts: string;
  // Releases
  releasesMetaTitle: string;
  releasesDescription: string;
  releasesHeadline: string;
  releasesLead: string;
  /** Products without GitHub releases: the Chrome extensions, and source-only tools. */
  releasesUndatedTitle: string;
  releasesUndatedSub: string;
  // Privacy index
  privacyMetaTitle: string;
  privacyDescription: string;
  privacyHeadline: string;
  privacyLead: string;
  privacyColumns: { tool: string; network: string; stays: string; details: string };
  privacyLevels: Record<PrivacySummary["network"], string>;
  privacyDataLink: string;
  /** A product whose page has no data section yet. */
  privacyUnstated: string;
  privacyProductPage: string;
};

export const ui: Record<Locale, Ui> = {
  en: {
    primaryLabel: "Primary",
    footerLabel: "Footer",
    footerFeed: "Releases feed",
    skipLink: "Skip to content",
    menuLabel: "Open site menu",
    homeLabel: "Titpea home",
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
    releases: "Releases",
    privacy: "Privacy",
    groups: {
      main: "Main",
      storage: "Storage",
      agents: "Agents",
      everyday: "Everyday",
      games: "Games",
      external: "External",
    },
    productIndex: "One developer, hxddh",
    homeMetaTitle: "Titpea — Small software by hxddh",
    homeTitle: "Small software, made with care.",
    homeDescription:
      "Software by one developer, hxddh: tools for object storage and coding agents, browser extensions for everyday reading, desktop board games, and a small world.",
    homeLead: "Tools for object storage and coding agents, everyday browser extensions, and a few games.",
    featuredTitle: "Selected work",
    moreToolsTitle: "Every tool",
    relatedTitle: "More tools",
    shippingTitle: "Just shipped",
    shippingMore: "All releases",
    filterLabel: "Show tools for",
    filterAll: "All",
    groupNotes: {
      storage: "For people who run S3-compatible storage.",
      agents: "For developers who work with coding agents.",
      everyday: "For reading, and for the browser.",
      games: "Board games, and a small world.",
    },
    relatedInLine: "More in {line}",
    filterFor: "For",
    filterRunsOn: "Runs on",
    filterCount: "{count} products",
    filterNone: "Nothing matches both. Clear one filter.",
    types: {
      cli: "Command line",
      pi: "Pi extension",
      actions: "GitHub Actions",
      desktop: "Desktop app",
      mac: "Mac app",
      extension: "Chrome extension",
      game: "Game",
      experiment: "Experiment",
    },
    platforms: {
      mac: "Mac",
      windows: "Windows",
      linux: "Linux",
      chrome: "Chrome",
      terminal: "Terminal",
      actions: "GitHub Actions",
    },
    purposes: {
      storage: "Object storage",
      agents: "Coding agents",
      reading: "Reading",
      browser: "Browser",
      games: "Games",
    },
    statusPreview: "Pre-alpha",
    families: {
      s3: {
        title: "The S3 kit",
        sub: "For migrating and troubleshooting object storage, in this order.",
        roles: {
          "s3-turbo-list": "List the bucket",
          "storage-agent-workbench": "Find what needs attention",
          storageops: "Diagnose in Pi",
          httpmon: "See the real requests",
        },
      },
      agents: {
        title: "Working with agents",
        sub: "Once a coding agent is running.",
        roles: {
          pulse: "Which one needs you",
          readout: "Read what it writes",
          celagent: "Resume on another machine",
          "agent-radar": "Scheduled research",
        },
      },
    },
    browseAllTools: "All tools",
    learnMore: "Learn more",
    browseTools: "Browse all {count} tools",
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
        value: "Find the cause with read-only tools; list large buckets fast.",
      },
      agents: {
        when: "Several agents are running, or you want to keep up with the field.",
        value:
          "See which one is waiting for you, read what it writes as it changes, carry a session to another machine, read sourced weekly briefs.",
      },
      everyday: {
        when: "Reading PDFs and foreign pages, tidying bookmarks, checking times and ratings.",
        value: "Answers you can check against the page; a translation only when you ask for it.",
      },
      games: {
        when: "Chess, Gomoku, or a small world of your own.",
        value: "Review the game when it ends; a small world grows a day at a time.",
      },
    },
    aboutReleasesTitle: "Latest releases.",
    aboutReleasesMore: "All releases",
    aboutFeed: "Follow releases (Atom)",
    aboutContactTitle: "Say hello.",
    aboutContactSub: "The code is on GitHub. Everything else, by email.",
    aboutAnalytics: "Page views are counted by Cloudflare Web Analytics: no cookies, no cross-site tracking.",
    aboutFacts: "{released} with GitHub releases · last release {date}",
    releasesMetaTitle: "Releases — Titpea",
    releasesDescription:
      "The latest release of every Titpea tool, newest first: the tag, the date, what changed, and a link to the full notes.",
    releasesHeadline: "What shipped, and when.",
    releasesLead: "The latest version of each tool, newest first.",
    releasesUndatedTitle: "Without GitHub releases.",
    releasesUndatedSub:
      "Chrome extensions update through the Chrome Web Store, and StorageOps installs from PyPI. Versions are the ones on their pages.",
    privacyMetaTitle: "Privacy — Titpea",
    privacyDescription:
      "Which Titpea tools go online, when, and where each keeps your data, with links to every product’s own data section and privacy policy.",
    privacyHeadline: "Which tools go online.",
    privacyLead: "The short version. Each product’s page says it in full.",
    privacyColumns: { tool: "Tool", network: "Network", stays: "Where data stays", details: "Details" },
    privacyLevels: { none: "None", onRequest: "Only when you ask", automatic: "Automatically" },
    privacyDataLink: "Where your data goes",
    privacyUnstated: "Not written up on its page yet.",
    privacyProductPage: "Product page",
  },
  zh: {
    primaryLabel: "主导航",
    footerLabel: "页脚",
    footerFeed: "发布订阅",
    skipLink: "跳到主要内容",
    menuLabel: "打开站点菜单",
    homeLabel: "Titpea 首页",
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
    releases: "发布记录",
    privacy: "隐私",
    groups: {
      main: "主要",
      storage: "存储",
      agents: "Agent",
      everyday: "日常",
      games: "游戏",
      external: "外部链接",
    },
    productIndex: "hxddh，一个人开发",
    homeMetaTitle: "Titpea — hxddh 的小软件",
    homeTitle: "认真做的小软件",
    homeDescription:
      "hxddh 一个人开发的软件：对象存储和编码 Agent 工具、日常用的浏览器扩展、桌面棋类游戏，以及一个小世界。",
    homeLead: "对象存储和编码 Agent 工具，日常用的浏览器扩展，还有几款游戏。",
    featuredTitle: "主要作品",
    moreToolsTitle: "全部工具",
    relatedTitle: "更多工具",
    shippingTitle: "最近发布",
    shippingMore: "全部发布",
    filterLabel: "按类别看",
    filterAll: "全部",
    groupNotes: {
      storage: "给管理 S3 兼容存储的人。",
      agents: "给和编码 Agent 一起工作的开发者。",
      everyday: "读文档，用浏览器。",
      games: "棋盘游戏，和一个小世界。",
    },
    relatedInLine: "更多{line}工具",
    filterFor: "用途",
    filterRunsOn: "运行在",
    filterCount: "{count} 件作品",
    filterNone: "没有同时符合两项的作品，取消一个筛选试试。",
    types: {
      cli: "命令行",
      pi: "Pi 扩展",
      actions: "GitHub Actions",
      desktop: "桌面应用",
      mac: "Mac 应用",
      extension: "Chrome 扩展",
      game: "游戏",
      experiment: "实验项目",
    },
    platforms: {
      mac: "Mac",
      windows: "Windows",
      linux: "Linux",
      chrome: "Chrome",
      terminal: "终端",
      actions: "GitHub Actions",
    },
    purposes: {
      storage: "对象存储",
      agents: "编码 Agent",
      reading: "阅读",
      browser: "浏览器",
      games: "游戏",
    },
    statusPreview: "早期预览",
    families: {
      s3: {
        title: "S3 工具组",
        sub: "迁移和排查对象存储时，依次用到。",
        roles: {
          "s3-turbo-list": "列清单",
          "storage-agent-workbench": "找问题",
          storageops: "在 Pi 里排查",
          httpmon: "看实际请求",
        },
      },
      agents: {
        title: "和 Agent 一起工作",
        sub: "编码 Agent 跑起来以后。",
        roles: {
          pulse: "谁需要你",
          readout: "读它写的",
          celagent: "换机器继续",
          "agent-radar": "定时调研",
        },
      },
    },
    browseAllTools: "全部工具",
    learnMore: "了解更多",
    browseTools: "浏览全部 {count} 个工具",
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
        value: "只读查清原因；大桶也能很快列清。",
      },
      agents: {
        when: "同时跑着几个 Agent，或想跟上这个领域。",
        value: "一眼看出哪个在等你；它写的文档边写边读；会话换台机器接着用；每周动态附来源。",
      },
      everyday: {
        when: "读 PDF 和外文网页，整理书签，看时间和评分。",
        value: "回答能回到原页核对；译文只在需要时出现。",
      },
      games: {
        when: "下国际象棋、五子棋，或者养一个小世界。",
        value: "下完能复盘；小世界一天一天地长大。",
      },
    },
    aboutReleasesTitle: "最近的发布",
    aboutReleasesMore: "全部发布",
    aboutFeed: "订阅发布（Atom）",
    aboutContactTitle: "打个招呼",
    aboutContactSub: "代码在 GitHub，其他事情发邮件。",
    aboutAnalytics: "访问量由 Cloudflare Web Analytics 统计：不用 cookie，不做跨站追踪。",
    aboutFacts: "{released} 个有 GitHub 发布 · 最近一次发布 {date}",
    releasesMetaTitle: "发布记录 — Titpea",
    releasesDescription: "Titpea 每个工具的最新发布，最新的在前：版本、日期、更新了什么，以及完整发布说明的链接。",
    releasesHeadline: "最近发布了什么",
    releasesLead: "每个工具的最新版本，最新的在前。",
    releasesUndatedTitle: "没有 GitHub 发布的工具",
    releasesUndatedSub: "Chrome 扩展通过 Chrome 网上应用店更新，StorageOps 从 PyPI 安装。版本号以各自页面为准。",
    privacyMetaTitle: "隐私 — Titpea",
    privacyDescription: "Titpea 的各个工具什么时候联网、数据留在哪里，并链接到每个产品自己的数据说明和隐私政策。",
    privacyHeadline: "哪些工具会联网",
    privacyLead: "这里是简表，完整说明在每个产品自己的页面上。",
    privacyColumns: { tool: "工具", network: "联网", stays: "数据留在哪里", details: "详情" },
    privacyLevels: { none: "不联网", onRequest: "只在你要求时", automatic: "会自动联网" },
    privacyDataLink: "数据的去向",
    privacyUnstated: "页面上还没写。",
    privacyProductPage: "产品页",
  },
};
