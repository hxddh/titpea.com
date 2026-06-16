import type { ProductSlug } from "../lib/site";

export const ui = {
  en: {
    nav: {
      about: "About",
      worldClock: "World Clock",
      douban: "Douban",
    },
    language: "中文",
    productIndex: "hxddh / object storage systems",
    homeTitle: "Storage tools with evidence",
    homeLead:
      "Titpea collects focused tools for object storage work: automatic bucket inventory, reproducible diff artifacts, Pi-based diagnosis, and request-level inspection when the SDK hides the clue.",
    homePrimary: "s3-turbo-list",
    homeSecondary: "StorageOps",
    homeAbout: "About",
    featuredLabel: "Product map",
    storageLine: "Storage operations",
    storageTitle: "List, diff, diagnose",
    browserLine: "Browser utilities",
    browserTitle: "Small browser tools",
    thesisLabel: "Product thesis",
    thesisTitle: "One storage line, two smaller utilities",
    thesisBody:
      "The storage tools sit on the same operational path. s3-turbo-list creates automatic inventory and diff artifacts, StorageOps turns failures into guided diagnosis inside Pi, and httpmon exposes the transport layer when signing, redirects, retries, or provider behavior need evidence. The browser extensions are intentionally smaller: a focused popup, a page enhancement, no broader platform.",
    flowLabel: "Storage operations flow",
    flowTitle: "A storage workflow, not a directory",
    flowBody:
      "Use s3-turbo-list when inventory or diff should be automatic, resumable, and machine-readable. Use StorageOps when Pi should diagnose an S3-compatible failure with skills and tools. Use httpmon when the important clue is below the SDK, inside real HTTP requests and responses.",
    proofItems: [
      "S3-compatible list/diff",
      "Pi diagnosis agent",
      "HTTP traffic inspection",
      "Chrome Web Store products",
    ],
    aboutTitle: "About",
    aboutDescription: "Personal profile, Chrome extensions, and infrastructure projects by hxddh.",
    aboutHeadline: "Small tools, clear evidence",
    aboutLead:
      "I build focused tools for object storage work and a few browser utilities. The common thread is clear output, inspectable evidence, and honest debugging.",
    productsLabel: "Products and Projects",
    profileLabel: "Profile",
    profileTitle: "A narrow product line, deliberately kept narrow",
    profileBody: [
      "The storage line stays close to the terminal: s3-turbo-list automates large-bucket inventory and diff; StorageOps gives Pi Agent object-storage diagnostic skills and tools; httpmon exposes command-line HTTP and HTTPS traffic.",
      "The browser line stays small by design: World Clock is a fast timezone popup, and Douban Movie Rating Assistant adds IMDb and Rotten Tomatoes context directly inside Douban pages.",
    ],
    focusLabel: "Focus Areas",
    focusItems: [
      "S3-compatible inventory, diff, diagnostics, and migration checks",
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
    productIndex: "hxddh / 对象存储系统",
    homeTitle: "为对象存储工作留下证据",
    homeLead:
      "Titpea 收集一组聚焦工具：自动生成大桶对象清单、留下可复查的 diff 产物、让 Pi 参与对象存储诊断，并在 SDK 隐藏线索时看见真实 HTTP 流量。",
    homePrimary: "s3-turbo-list",
    homeSecondary: "StorageOps",
    homeAbout: "关于",
    featuredLabel: "产品地图",
    storageLine: "存储运维",
    storageTitle: "列举、对比、诊断",
    browserLine: "浏览器工具",
    browserTitle: "两个轻量浏览器工具",
    thesisLabel: "产品主线",
    thesisTitle: "主线是对象存储，旁支保持轻",
    thesisBody:
      "s3-turbo-list 负责自动生成对象清单和差异结果，并留下机器可读产物；StorageOps 让 Pi 按对象存储的诊断技能和取证工具工作；httpmon 负责在签名、重试、跳转或服务商行为说不清时，把真实 HTTP 流量拿出来看。两个 Chrome 扩展则更轻，只补一个日常使用的小缺口。",
    flowLabel: "存储运维流",
    flowTitle: "它不是目录，而是一条链路",
    flowBody:
      "需要自动生成对象清单或差异结果，用 s3-turbo-list；需要 Pi 按诊断技能和取证工具排查 S3 兼容故障，用 StorageOps；线索藏在 SDK 下面的真实 HTTP 请求和响应里，用 httpmon。",
    proofItems: ["S3 兼容 list / diff", "Pi 诊断 agent", "HTTP 流量检查", "Chrome 商店产品"],
    aboutTitle: "关于",
    aboutDescription: "hxddh 的个人简介、对象存储工具和 Chrome 扩展。",
    aboutHeadline: "围绕证据做小而清楚的工具",
    aboutLead:
      "我做的东西都比较窄：把大型存储桶列清楚，把两个桶的差异算清楚，把 S3 兼容故障拆开看。浏览器扩展也一样，只补一个明确的小缺口。",
    productsLabel: "产品与项目",
    profileLabel: "简介",
    profileTitle: "产品线很窄，这是刻意的",
    profileBody: [
      "存储工具线贴近终端和运维现场：s3-turbo-list 自动列举和对比大型 S3 兼容桶；StorageOps 给 Pi 装上对象存储诊断技能和取证工具；httpmon 暴露命令行里的 HTTP 和 HTTPS 流量。",
      "浏览器工具线刻意做轻：世界时钟只负责快速看时间，豆瓣电影评分助手只把 IMDb 和 Rotten Tomatoes 的参考评分补到豆瓣页面里。",
    ],
    focusLabel: "关注方向",
    focusItems: [
      "S3 兼容对象清单、差异对比、诊断和迁移检查",
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
          text: "Choose this when large-bucket inventory or diff should run automatically, leave Parquet artifacts, and expose JSON plans or manifests for CI and agents.",
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
          text: "当大型存储桶的对象清单或差异结果需要自动生成，留下 Parquet 产物，并给 CI / agent 提供 JSON plan 和运行记录。",
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

export const homeStorageFlow = {
  en: [
    {
      number: "01",
      verb: "List / Diff",
      name: "s3-turbo-list",
      text: "Run automatic inventory or diff on large S3-compatible buckets, then keep Parquet, JSON plans, and run manifests.",
      slug: "s3-turbo-list" as ProductSlug,
    },
    {
      number: "02",
      verb: "Diagnose",
      name: "StorageOps",
      text: "Give Pi a storage diagnosis layer: domain skills, bounded tools, deterministic helpers, and eval-backed routing.",
      slug: "storageops" as ProductSlug,
    },
    {
      number: "03",
      verb: "Inspect",
      name: "httpmon",
      text: "Capture the real HTTP request and response when signing, retries, redirects, or provider behavior hide the clue.",
      href: "https://github.com/hxddh/https-traffic-inspector",
    },
  ],
  zh: [
    {
      number: "01",
      verb: "List / Diff",
      name: "s3-turbo-list",
      text: "自动列举或对比大型 S3 兼容存储桶，留下 Parquet、JSON plan 和运行记录。",
      slug: "s3-turbo-list" as ProductSlug,
    },
    {
      number: "02",
      verb: "Diagnose",
      name: "StorageOps",
      text: "给 Pi 一层对象存储诊断能力：领域技能、有边界的工具、确定性脚本和回归用例。",
      slug: "storageops" as ProductSlug,
    },
    {
      number: "03",
      verb: "Inspect",
      name: "httpmon",
      text: "当签名、重试、跳转或服务商行为藏在 SDK 下面时，直接看真实 HTTP 请求和响应。",
      href: "https://github.com/hxddh/https-traffic-inspector",
    },
  ],
} as const;

export const homeBrowserTools = {
  en: [
    {
      name: "World Clock",
      text: "A fast city-time popup for remote work, travel, and quick context checks.",
      slug: "world-clock" as ProductSlug,
    },
    {
      name: "Douban Movie Rating Assistant",
      text: "Adds IMDb, Rotten Tomatoes, and Metacritic context inside Douban movie pages.",
      slug: "douban-movie-rating" as ProductSlug,
    },
  ],
  zh: [
    {
      name: "世界时钟",
      text: "快速查看几个城市的当前时间，适合远程协作、旅行和临时确认时区。",
      slug: "world-clock" as ProductSlug,
    },
    {
      name: "豆瓣电影评分助手",
      text: "把 IMDb、Rotten Tomatoes 和 Metacritic 参考评分补到豆瓣电影页里。",
      slug: "douban-movie-rating" as ProductSlug,
    },
  ],
} as const;

export const aboutProductGroups = {
  en: [
    {
      title: "Object storage",
      text: "One path for inventory, diff, diagnosis, and request-level evidence.",
    },
    {
      title: "Browser utilities",
      text: "Small extensions that add missing context without taking over the page.",
    },
    {
      title: "Working style",
      text: "Clear commands, inspectable output, and artifacts that can move into CI, DuckDB, logs, or the next diagnostic step.",
    },
  ],
  zh: [
    {
      title: "对象存储",
      text: "围绕对象清单、差异对比、诊断和请求级证据，做一条能接起来的工具线。",
    },
    {
      title: "浏览器工具",
      text: "只补当前页面缺的一点上下文，不把小工具做成平台。",
    },
    {
      title: "做事方式",
      text: "命令要清楚，输出要能检查，产物要能继续进入 CI、DuckDB、日志或下一步排查。",
    },
  ],
} as const;
