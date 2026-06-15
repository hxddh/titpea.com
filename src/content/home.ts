import type { ProductSlug } from "../lib/site";

export const ui = {
  en: {
    nav: {
      about: "About",
      worldClock: "World Clock",
      douban: "Douban",
    },
    language: "中文",
    productIndex: "hxddh / object storage workbench",
    homeTitle: "S3 operations toolkit",
    homeLead:
      "Tools for the first hard parts of object storage work: list large buckets, diff object state, give Pi a diagnosis layer, and inspect HTTP traffic when the SDK hides the clue.",
    homePrimary: "s3-turbo-list",
    homeSecondary: "StorageOps",
    homeAbout: "About",
    featuredLabel: "Product map",
    storageLine: "Storage operations",
    storageTitle: "List, diff, diagnose",
    browserLine: "Browser utilities",
    browserTitle: "Small browser tools",
    thesisLabel: "Product thesis",
    thesisTitle: "One product line, two surfaces",
    thesisBody:
      "The storage tools sit on the same operational path. s3-turbo-list creates the inventory, StorageOps turns failures into guided diagnosis inside Pi, and httpmon exposes the transport layer when signing, redirects, retries, or provider behavior need evidence. The browser extensions are intentionally smaller: a focused popup, a page enhancement, no broader platform.",
    flowLabel: "Storage operations flow",
    flowTitle: "Storage workflow",
    flowBody:
      "Use s3-turbo-list when the job is “list this bucket fast” or “diff these two buckets.” Use StorageOps when Pi should diagnose an S3-compatible failure with skills and tools. Use httpmon when the important clue is below the SDK, inside real HTTP requests and responses.",
    proofItems: [
      "S3-compatible list/diff",
      "Pi diagnosis agent",
      "HTTP traffic inspection",
      "Chrome Web Store products",
    ],
    aboutTitle: "About",
    aboutDescription: "Personal profile, Chrome extensions, and infrastructure projects by hxddh.",
    aboutHeadline: "Object storage tools",
    aboutLead:
      "I build focused tools for object storage and a few small browser utilities. The common thread is practical: clear commands, inspectable output, and enough evidence to keep debugging honest.",
    productsLabel: "Products and Projects",
    profileLabel: "Profile",
    profileTitle: "A narrow product line",
    profileBody: [
      "The storage line stays close to the terminal: s3-turbo-list lists and diffs large S3-compatible buckets; StorageOps gives Pi Agent object-storage diagnostic skills and tools; httpmon exposes command-line HTTP and HTTPS traffic.",
      "The browser line stays small by design: World Clock is a fast timezone popup, and Douban Movie Rating Assistant adds IMDb and Rotten Tomatoes context directly inside Douban pages.",
    ],
    focusLabel: "Focus Areas",
    focusItems: [
      "S3-compatible list, diff, diagnostics, and migration checks",
      "HTTP/HTTPS traffic inspection for command-line tools",
      "Small Chrome extensions with explicit privacy posture",
    ],
  },
  zh: {
    nav: {
      about: "关于",
      worldClock: "世界时钟",
      douban: "豆瓣评分",
    },
    language: "English",
    productIndex: "hxddh / 对象存储工作台",
    homeTitle: "S3 运维工具集",
    homeLead:
      "围绕对象存储最常见的几个难点做工具：列大桶、对比对象差异、让 Pi 参与诊断，以及在 SDK 隐藏细节时看见真实 HTTP 流量。",
    homePrimary: "s3-turbo-list",
    homeSecondary: "StorageOps",
    homeAbout: "关于",
    featuredLabel: "产品地图",
    storageLine: "存储运维",
    storageTitle: "列举、对比、诊断",
    browserLine: "浏览器工具",
    browserTitle: "两个轻量浏览器工具",
    thesisLabel: "产品主线",
    thesisTitle: "主线是对象存储",
    thesisBody:
      "s3-turbo-list 负责把对象列出来、把两个桶的差异算清楚；StorageOps 让 Pi 按对象存储的诊断技能和取证工具工作；httpmon 负责在签名、重试、跳转或服务商行为说不清时，把真实 HTTP 流量拿出来看。两个 Chrome 扩展则更轻，只补一个日常使用的小缺口。",
    flowLabel: "存储运维流",
    flowTitle: "存储运维链路",
    flowBody:
      "需要快速列一个 bucket 或对比两个 bucket，用 s3-turbo-list；需要 Pi 按诊断技能和取证工具排查 S3 兼容故障，用 StorageOps；线索藏在 SDK 下面的真实 HTTP 请求和响应里，用 httpmon。",
    proofItems: ["S3 兼容 list/diff", "Pi 诊断 agent", "HTTP 流量检查", "Chrome 商店产品"],
    aboutTitle: "关于",
    aboutDescription: "hxddh 的个人简介、对象存储工具和 Chrome 扩展。",
    aboutHeadline: "对象存储工具",
    aboutLead:
      "我做的东西都比较窄：把大桶列快，把两个 bucket 的差异算清，把 S3 兼容故障拆开看。浏览器扩展也一样，只补一个明确的小缺口。",
    productsLabel: "产品与项目",
    profileLabel: "简介",
    profileTitle: "一条很窄的产品线",
    profileBody: [
      "存储工具线贴近终端和运维现场：s3-turbo-list 用来列举和对比大型 S3 兼容桶；StorageOps 给 Pi 装上对象存储诊断技能和取证工具；httpmon 暴露命令行里的 HTTP 和 HTTPS 流量。",
      "浏览器工具线刻意做轻：世界时钟只负责快速看时间，豆瓣电影评分助手只把 IMDb 和 Rotten Tomatoes 的参考评分补到豆瓣页面里。",
    ],
    focusLabel: "关注方向",
    focusItems: [
      "S3 兼容 list、diff、诊断和迁移检查",
      "命令行工具的 HTTP/HTTPS 流量检查",
      "隐私姿态清晰的小型 Chrome 扩展",
    ],
  },
} as const;

export const homeProductLines = {
  en: [
    {
      label: ui.en.storageLine,
      title: ui.en.storageTitle,
      items: [
        {
          slug: "s3-turbo-list" as ProductSlug,
          text: "Choose this when you need high-performance list or authoritative diff for large S3-compatible buckets, with Parquet output and resume support.",
        },
        {
          slug: "storageops" as ProductSlug,
          text: "Choose this when Pi should diagnose S3-compatible failures using object-storage skills, extension tools, helper scripts, and eval-backed routing.",
        },
        {
          name: "https-traffic-inspector",
          href: "https://github.com/hxddh/https-traffic-inspector",
          text: "Choose this when the important clue is inside the HTTP request or response hidden by curl, aws, Python, Node, or another CLI.",
        },
      ],
    },
    {
      label: ui.en.browserLine,
      title: ui.en.browserTitle,
      items: [
        {
          slug: "world-clock" as ProductSlug,
          text: "A small Chrome popup for checking live time across major cities without opening a calendar or search page.",
        },
        {
          slug: "douban-movie-rating" as ProductSlug,
          text: "Adds IMDb and Rotten Tomatoes context directly to Douban movie pages, with outbound links when matches are available.",
        },
      ],
    },
  ],
  zh: [
    {
      label: ui.zh.storageLine,
      title: ui.zh.storageTitle,
      items: [
        {
          slug: "s3-turbo-list" as ProductSlug,
          text: "当你需要对大型 S3 兼容桶做高性能 list 或权威 diff，并保留 Parquet 输出和断点续跑。",
        },
        {
          slug: "storageops" as ProductSlug,
          text: "当你希望 Pi 按对象存储诊断技能、取证工具、确定性脚本和回归用例来排查 S3 兼容故障。",
        },
        {
          name: "https-traffic-inspector",
          href: "https://github.com/hxddh/https-traffic-inspector",
          text: "当关键线索藏在 curl、aws、Python、Node 或其他 CLI 隐藏掉的 HTTP 请求和响应里。",
        },
      ],
    },
    {
      label: ui.zh.browserLine,
      title: ui.zh.browserTitle,
      items: [
        {
          slug: "world-clock" as ProductSlug,
          text: "一个很小的 Chrome 弹窗，用来查看主要城市实时本地时间，不必打开日历或搜索页面。",
        },
        {
          slug: "douban-movie-rating" as ProductSlug,
          text: "把 IMDb 和 Rotten Tomatoes 上下文直接加到豆瓣电影页，匹配到结果时可直接跳转。",
        },
      ],
    },
  ],
};
