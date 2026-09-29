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
  /** Three habits backed by product facts, plus the open-source line (`{open}` of `{count}`, `{licenses}`). */
  aboutPrinciplesTitle: string;
  aboutPrinciples: Array<{ title: string; body: string }>;
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
    relatedInLine: "More in {line}",
    browseAllTools: "All tools",
    learnMore: "Learn more",
    browseTools: "Browse all tools",
    aboutMore: "About hxddh",
    aboutTitle: "About",
    aboutMetaTitle: "About Titpea — hxddh",
    aboutDescription:
      "Titpea is one person’s product shelf: storage investigations, agents, and small everyday apps, built and released by hxddh.",
    aboutEyebrow: "About Titpea",
    aboutHeadline: "One person. {count} tools.",
    aboutLead: "Built and released by hxddh. {open} of {count} are open source.",
    contactLabel: "Contact links",
    aboutPrinciplesTitle: "Three habits.",
    aboutPrinciples: [
      {
        title: "Evidence in view",
        body: "Storage Agent keeps the checks beside the answer. PageWise cites the page.",
      },
      {
        title: "Keys and files stay local",
        body: "Storage Agent keeps keys in a local vault. PageWise reads files on your disk. Easier Bookmarks needs no server.",
      },
      {
        title: "Read before write",
        body: "Storage Agent’s tools are read-only. StorageOps does not change storage.",
      },
    ],
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
    relatedInLine: "更多{line}工具",
    browseAllTools: "全部工具",
    learnMore: "了解更多",
    browseTools: "浏览全部工具",
    aboutMore: "关于 hxddh",
    aboutTitle: "关于",
    aboutMetaTitle: "关于 Titpea — hxddh",
    aboutDescription: "Titpea 是一个人的产品架：对象存储排查、Agent 和日常小工具，由 hxddh 开发并发布。",
    aboutEyebrow: "关于 Titpea",
    aboutHeadline: "一个人，{count} 个工具",
    aboutLead: "由 hxddh 开发并发布，其中 {open} 个开源。",
    contactLabel: "联系方式",
    aboutPrinciplesTitle: "三个做法",
    aboutPrinciples: [
      {
        title: "证据摆在眼前",
        body: "Storage Agent 把检查放在结论旁边。PageWise 给出页引用。",
      },
      {
        title: "密钥和文件留在本机",
        body: "Storage Agent 把密钥放在本机保险库。PageWise 读取你磁盘上的文件。Easier Bookmarks 不经服务器。",
      },
      {
        title: "只读优先",
        body: "Storage Agent 的工具只读。StorageOps 不修改存储。",
      },
    ],
    aboutReleasesTitle: "最近的发布",
    aboutReleasesMore: "全部发布",
    aboutFeed: "订阅发布（Atom）",
    aboutContactTitle: "打个招呼",
    aboutContactSub: "代码在 GitHub，其他事情发邮件。",
    aboutAnalytics: "访问量由 Cloudflare Web Analytics 统计：不用 cookie，不做跨站追踪。",
  },
};
