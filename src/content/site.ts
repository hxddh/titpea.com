// Site-wide facts and interface copy. Product copy lives in ./products.
import type { FamilyId, Image, Line, Locale, PrivacySummary } from "./schema";

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
 * Each member's page ends on its family.
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
  person: {
    en: {
      paragraph:
        "I’m hxddh, and I make all the software here on my own: tools for object storage and coding agents, a few browser extensions, two board games, a Sudoku notebook for Android, and a small world that is still in pre-alpha. Most of the code is on GitHub. Each tool’s page says plainly what it touches on your machine and on the network. They update often; the releases page shows each tool’s latest version and when it came out.",
    },
    zh: {
      paragraph:
        "我是 hxddh，这里的软件都是我一个人做的：对象存储和编码 Agent 的工具，几个浏览器扩展，两款棋类游戏，一本 Android 上的数独本，还有一个仍在早期预览的小世界。大部分代码放在 GitHub 上。每个工具的页面都写清楚它在你的电脑上、在网络上碰了什么。它们更新得很勤，发布页上能看到每个工具的最新版本和发布日期。",
    },
  },
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
  /** Product page, before the closing band: "More in {line}". */
  relatedInLine: string;
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
  /** The About share image's line (scripts/og-cards.ts); the page itself has no lede. */
  aboutLead: string;
  aboutFeed: string;
  aboutAnalytics: string;
  // Releases
  releasesMetaTitle: string;
  releasesDescription: string;
  releasesHeadline: string;
  releasesLead: string;
  /** Before a product's earlier releases (tag and date) under its latest one. */
  releasesEarlier: string;
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
    relatedInLine: "More in {line}",
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
    aboutFeed: "Follow releases (Atom)",
    aboutAnalytics: "Page views are counted by Cloudflare Web Analytics: no cookies, no cross-site tracking.",
    releasesMetaTitle: "Releases — Titpea",
    releasesDescription:
      "The latest release of every Titpea tool, newest first: the tag, the date, what changed, and a link to the full notes.",
    releasesHeadline: "What shipped, and when.",
    releasesLead: "The latest version of each tool, newest first.",
    releasesEarlier: "Earlier",
    releasesUndatedTitle: "Without GitHub releases.",
    releasesUndatedSub:
      "Chrome extensions update through the Chrome Web Store, StorageOps installs from PyPI, and Paper Sudoku is not in a store yet. Versions are the ones on their pages.",
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
    relatedInLine: "更多{line}工具",
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
    aboutFeed: "订阅发布（Atom）",
    aboutAnalytics: "访问量由 Cloudflare Web Analytics 统计：不用 cookie，不做跨站追踪。",
    releasesMetaTitle: "发布记录 — Titpea",
    releasesDescription: "Titpea 每个工具的最新发布，最新的在前：版本、日期、更新了什么，以及完整发布说明的链接。",
    releasesHeadline: "最近发布了什么",
    releasesLead: "每个工具的最新版本，最新的在前。",
    releasesEarlier: "更早",
    releasesUndatedTitle: "没有 GitHub 发布的工具",
    releasesUndatedSub:
      "Chrome 扩展通过 Chrome 网上应用店更新，StorageOps 从 PyPI 安装，纸上数独还未上架应用商店。版本号以各自页面为准。",
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
