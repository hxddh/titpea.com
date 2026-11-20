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
  s3: ["s3-turbo-list", "storage-agent-workbench", "sonde", "storageops", "httpmon", "lenslet"],
  agents: ["pulse", "readout", "agent-radar"],
};

export const familyOf = (slug: string) =>
  (Object.keys(familyMembers) as FamilyId[]).find((id) => familyMembers[id].includes(slug));

export const absoluteUrl = (path: string) => `${site.baseUrl}${path}`;

/** The person behind Titpea, in their own words, on About. */
export type AboutPerson = {
  /** First person, in the owner's words: short paragraphs, read in order. */
  paragraphs: string[];
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
      paragraphs: [
        "I’m hxddh, and I make all the software here on my own: tools for object storage and coding agents, a few browser extensions, three board games, a Sudoku notebook for Android, and a small harbour-town game for macOS.",
        "I like reading, good food and digital gadgets. What I love most is making interesting things, and this site is where they live.",
        "Most of the code is on GitHub. The privacy page says plainly what each tool touches on your machine and on the network; they update often, and the releases page shows what shipped and when.",
      ],
    },
    zh: {
      paragraphs: [
        "我是 hxddh，这里的软件都是我一个人做的：对象存储和编码 Agent 的工具，几个浏览器扩展，三款棋类游戏，一本 Android 上的数独本，还有一款 macOS 上的海港小镇游戏。",
        "我喜欢读书，喜欢美食，也喜欢数码产品。最热爱的，是做出有趣的东西；这个网站就是它们待的地方。",
        "大部分代码放在 GitHub 上。隐私页写清楚了每个工具在你的电脑上、在网络上碰了什么。它们更新得很勤，发布页上能看到每次发布的版本和日期。",
      ],
    },
  },
};

type Ui = {
  // Chrome
  primaryLabel: string;
  footerLabel: string;
  footerFeed: string;
  skipLink: string;
  homeLabel: string;
  sectionDirectory: string;
  themeToDark: string;
  themeToLight: string;
  copy: string;
  copied: string;
  /** Follows the version in the meta line; `{date}` is the latest release's publish date. */
  released: string;
  /** Labels of the product page's spec sheet. */
  spec: { label: string; network: string; offline: string; source: string };
  /** The release a capture shows: "Captured at v15.0.0". Said once under the
   hero, and under a showcase only when its release differs. `{version}` is filled in. */
  capturedAt: string;
  /** Link from a showcase that shows a detail to the whole capture. */
  wholeCapture: string;
  pauseVideo: string;
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
  /** A family's title and one line; `roles` is each member's step, by slug. */
  families: Record<FamilyId, { title: string; roles: Record<string, string> }>;
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
  /** A product whose page has no data section yet. */
  // Catalog vocabulary: one word for each platform and kind, everywhere.
  products: string;
  allLabel: string;
  /** Names the category chips on Home for assistive tech. */
  filterLabel: string;
  /** Labels a platform tag; `{min}` is the oldest supported version. */
  platforms: Record<"macos" | "windows" | "linux" | "chrome" | "android", { name: string; min: string }>;
  /** What kind of thing it is, by product type. */
  kinds: Record<"cli" | "pi" | "actions" | "desktop" | "mac" | "extension" | "game", string>;
  /** The first-open guide beside the download button for an unnotarized build. */
  firstOpen: {
    summary: string;
    macosOnce: string;
    macosEachRelease: string;
    /** `{version}` is the macOS version the step starts at. */
    macosFrom: string;
    windows: string;
  };
  /** At the end of a product page without a family: up to three products of its line. */
  moreIn: string;
};

export const ui: Record<Locale, Ui> = {
  en: {
    primaryLabel: "Primary",
    footerLabel: "Footer",
    footerFeed: "Releases feed",
    skipLink: "Skip to content",
    homeLabel: "Titpea home",
    sectionDirectory: "Sections",
    themeToDark: "Switch to dark theme",
    themeToLight: "Switch to light theme",
    copy: "Copy",
    copied: "Copied",
    released: " ({date})",
    spec: {
      label: "Specifications",
      network: "Network",
      offline: "No network",
      source: "Source",
    },
    capturedAt: "Captured at {version}",
    wholeCapture: "Whole window",
    pauseVideo: "Pause",
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
    productIndex: "One developer",
    homeMetaTitle: "Titpea — Small software by hxddh",
    homeTitle: "Small software, made with care.",
    homeDescription: "Small software by one developer, hxddh: object storage, coding agents, Chrome extensions, games.",
    homeLead: "Object storage, coding agents, Chrome extensions, games.",
    featuredTitle: "Selected work",
    moreToolsTitle: "Everything",
    families: {
      s3: {
        title: "The S3 kit",
        roles: {
          "s3-turbo-list": "List the bucket",
          "storage-agent-workbench": "Find what needs attention",
          sonde: "See what a program does to S3",
          storageops: "Diagnose in Pi",
          httpmon: "See the real requests",
          lenslet: "Check AWS access in CI",
        },
      },
      agents: {
        title: "Working with agents",
        roles: {
          pulse: "Which one needs you",
          readout: "Read what it writes",
          "agent-radar": "Scheduled research",
        },
      },
    },
    aboutMore: "About hxddh",
    aboutTitle: "About",
    aboutMetaTitle: "About Titpea — hxddh",
    aboutDescription:
      "Titpea is one person’s product shelf: object storage, agents, everyday apps, and games, built and released by hxddh.",
    aboutEyebrow: "About Titpea",
    aboutHeadline: "{count} tools, made by one person.",
    aboutLead: "Object storage, coding agents, everyday apps and games.",
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
      "Chrome extensions update through the Chrome Web Store, and Paper Sudoku is not in a store yet. The version is the one each page shows.",
    privacyMetaTitle: "Privacy — Titpea",
    privacyDescription:
      "Which Titpea tools go online, when, and to whom, and where each keeps your data, with links to every privacy policy.",
    privacyHeadline: "Which tools go online.",
    privacyLead: "What each tool sends over the network, and where your data stays.",
    privacyColumns: { tool: "Tool", network: "Network", stays: "Where data stays", details: "Details" },
    privacyLevels: { none: "None", onRequest: "Only when you ask", automatic: "Automatic" },
    products: "Products",
    allLabel: "All",
    filterLabel: "Show",
    platforms: {
      macos: { name: "macOS", min: "macOS {min}+" },
      windows: { name: "Windows", min: "Windows {min}+" },
      linux: { name: "Linux", min: "Linux" },
      chrome: { name: "Chrome", min: "Chrome {min}+" },
      android: { name: "Android", min: "Android {min}+" },
    },
    kinds: {
      cli: "CLI",
      pi: "Pi extension",
      actions: "GitHub Actions",
      desktop: "Desktop app",
      mac: "Mac app",
      extension: "Chrome extension",
      game: "Game",
    },
    firstOpen: {
      summary: "Not notarized: how to open it",
      macosOnce: "macOS: the first time, open System Settings → Privacy & Security and click “Open Anyway”.",
      macosEachRelease:
        "macOS: after installing each new version, open System Settings → Privacy & Security and click “Open Anyway” once.",
      macosFrom: "macOS {version} or later",
      windows: "Windows: if SmartScreen stops it, choose “More info”, then “Run anyway”.",
    },
    moreIn: "Also in {line}",
  },
  zh: {
    primaryLabel: "主导航",
    footerLabel: "页脚",
    footerFeed: "发布订阅",
    skipLink: "跳到主要内容",
    homeLabel: "Titpea 首页",
    sectionDirectory: "目录",
    themeToDark: "切换到深色主题",
    themeToLight: "切换到浅色主题",
    copy: "复制",
    copied: "已复制",
    released: "（{date}）",
    spec: { label: "规格", network: "联网", offline: "不联网", source: "源码" },
    capturedAt: "截自 {version}",
    wholeCapture: "看整窗截图",
    pauseVideo: "暂停",
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
    productIndex: "一个人开发",
    homeMetaTitle: "Titpea — hxddh 的小软件",
    homeTitle: "认真做的小软件",
    homeDescription: "hxddh 一个人开发的小软件：对象存储、编码 Agent、Chrome 扩展、游戏。",
    homeLead: "对象存储、编码 Agent、Chrome 扩展、游戏。",
    featuredTitle: "主要作品",
    moreToolsTitle: "全部作品",
    families: {
      s3: {
        title: "S3 工具组",
        roles: {
          "s3-turbo-list": "列清单",
          "storage-agent-workbench": "找问题",
          sonde: "看程序对 S3 做了什么",
          storageops: "在 Pi 里排查",
          httpmon: "看实际请求",
          lenslet: "在 CI 里查 AWS 权限",
        },
      },
      agents: {
        title: "和 Agent 一起工作",
        roles: {
          pulse: "谁需要你",
          readout: "读它写的",
          "agent-radar": "定时调研",
        },
      },
    },
    aboutMore: "关于 hxddh",
    aboutTitle: "关于",
    aboutMetaTitle: "关于 Titpea — hxddh",
    aboutDescription: "Titpea 是一个人的产品架：对象存储、Agent、日常小工具和游戏，由 hxddh 开发并发布。",
    aboutEyebrow: "关于 Titpea",
    aboutHeadline: "一个人做的 {count} 个工具",
    aboutLead: "对象存储、编码 Agent、日常应用和游戏。",
    aboutFeed: "订阅发布（Atom）",
    aboutAnalytics: "访问量由 Cloudflare Web Analytics 统计：不用 cookie，不做跨站追踪。",
    releasesMetaTitle: "发布记录 — Titpea",
    releasesDescription: "Titpea 每个工具的最新发布，最新的在前：版本、日期、更新了什么，以及完整发布说明的链接。",
    releasesHeadline: "最近发布了什么",
    releasesLead: "每个工具的最新版本，最新的在前。",
    releasesEarlier: "更早",
    releasesUndatedTitle: "没有 GitHub 发布的工具",
    releasesUndatedSub: "Chrome 扩展通过 Chrome 网上应用店更新，纸上数独还未上架应用商店。版本号与各自页面一致。",
    privacyMetaTitle: "隐私 — Titpea",
    privacyDescription: "Titpea 的各个工具什么时候联网、发给谁、数据留在哪里，并链接到各自的隐私政策。",
    privacyHeadline: "哪些工具会联网",
    privacyLead: "每个工具通过网络发送什么，你的数据留在哪里。",
    privacyColumns: { tool: "工具", network: "联网", stays: "数据留在哪里", details: "详情" },
    privacyLevels: { none: "不联网", onRequest: "只在你要求时", automatic: "自动" },
    products: "产品",
    allLabel: "全部",
    filterLabel: "显示",
    platforms: {
      macos: { name: "macOS", min: "macOS {min}+" },
      windows: { name: "Windows", min: "Windows {min}+" },
      linux: { name: "Linux", min: "Linux" },
      chrome: { name: "Chrome", min: "Chrome {min}+" },
      android: { name: "Android", min: "Android {min}+" },
    },
    kinds: {
      cli: "命令行工具",
      pi: "Pi 扩展",
      actions: "GitHub Actions",
      desktop: "桌面应用",
      mac: "Mac 应用",
      extension: "Chrome 扩展",
      game: "游戏",
    },
    firstOpen: {
      summary: "未经公证：首次打开方法",
      macosOnce: "macOS：第一次打开时，到“系统设置 → 隐私与安全性”点“仍要打开”。",
      macosEachRelease: "macOS：每装一个新版本，到“系统设置 → 隐私与安全性”点一次“仍要打开”。",
      macosFrom: "macOS {version} 及以上",
      windows: "Windows：如果 SmartScreen 拦下，点“更多信息”，再点“仍要运行”。",
    },
    moreIn: "{line}类的其他产品",
  },
};
