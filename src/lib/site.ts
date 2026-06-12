export type Locale = "en" | "zh";
export type ProductSlug = "s3-turbo-list" | "storageops" | "world-clock" | "douban-movie-rating";
export type CurrentPage = "home" | "about" | "s3-turbo-list" | "storageops" | "world-clock" | "douban";

type Link = {
  label: string;
  href: string;
};

type Localized<T> = Record<Locale, T>;

export type ProductCopy = {
  title: string;
  description: string;
  eyebrow: string;
  headline: string;
  lead: string;
  primaryCta: Link;
  secondaryCta: Link;
  meta: string;
  featuresLabel: string;
  features: Array<[string, string]>;
  rationaleLabel: string;
  rationaleTitle: string;
  rationaleBody: string[];
  workflowLabel?: string;
  workflow?: Array<[string, string]>;
  casesLabel?: string;
  casesTitle?: string;
  casesBody?: string;
  cases?: string[];
  finalCta?: string;
  finalCtaLabel?: string;
};

export type Product = {
  slug: ProductSlug;
  current: CurrentPage;
  name: string;
  category: "storage" | "browser";
  visual: "terminal" | "diagnostic" | "clock" | "rating";
  locales: Localized<ProductCopy>;
};

export const productSlugs: ProductSlug[] = [
  "s3-turbo-list",
  "storageops",
  "world-clock",
  "douban-movie-rating",
];

export const ui = {
  en: {
    nav: {
      about: "About",
      worldClock: "World Clock",
      douban: "Douban",
    },
    language: "中文",
    productIndex: "hxddh / product index",
    homeTitle: "Useful tools, kept small.",
    homeLead: "Chrome extensions and infrastructure utilities for object storage, diagnostics, time, and movies.",
    homePrimary: "s3-turbo-list",
    homeSecondary: "StorageOps",
    homeAbout: "About",
    featuredLabel: "Featured projects",
    storageLine: "Storage tools",
    storageTitle: "Infrastructure diagnostics and inventory.",
    browserLine: "Browser extensions",
    browserTitle: "Focused helpers for everyday browsing.",
    aboutTitle: "About",
    aboutDescription: "Personal profile, Chrome extensions, and infrastructure projects by hxddh.",
    aboutHeadline: "Building focused tools for browsers, storage systems, and daily technical work.",
    aboutLead: "I build small products and developer tools: Chrome extensions for everyday use, plus infrastructure utilities around S3-compatible storage, diagnostics, and HTTPS traffic inspection.",
    productsLabel: "Products and Projects",
    profileLabel: "Profile",
    profileTitle: "Practical software with a narrow job and a clear owner.",
    profileBody: [
      "The current portfolio has two public Chrome extensions: World Clock for quick timezone checks, and Douban Movie Rating Assistant for bringing international movie ratings into Douban pages.",
      "On the developer-tool side, the main GitHub projects are s3-turbo-list, StorageOps, and https-traffic-inspector: listing performance, diagnostics, compatibility checks, tracing, export workflows, and request inspection.",
    ],
    focusLabel: "Focus Areas",
    focusItems: [
      "Object storage diagnostics and compatibility testing",
      "S3-compatible listing, tracing, diffing, and Parquet export",
      "Chrome extension products for small everyday workflows",
    ],
  },
  zh: {
    nav: {
      about: "关于",
      worldClock: "世界时钟",
      douban: "豆瓣评分",
    },
    language: "English",
    productIndex: "hxddh / 产品索引",
    homeTitle: "小而专注的实用工具。",
    homeLead: "面向对象存储、诊断、时间查询和电影评分的浏览器扩展与基础设施工具。",
    homePrimary: "s3-turbo-list",
    homeSecondary: "StorageOps",
    homeAbout: "关于",
    featuredLabel: "精选项目",
    storageLine: "存储工具",
    storageTitle: "面向基础设施的诊断与清单工具。",
    browserLine: "浏览器扩展",
    browserTitle: "为日常浏览准备的小工具。",
    aboutTitle: "关于",
    aboutDescription: "hxddh 的个人简介、Chrome 扩展和基础设施项目。",
    aboutHeadline: "构建面向浏览器、存储系统和日常技术工作的专注工具。",
    aboutLead: "我做小产品和开发者工具：用于日常场景的 Chrome 扩展，以及围绕 S3 兼容存储、诊断和 HTTPS 流量检查的基础设施工具。",
    productsLabel: "产品和项目",
    profileLabel: "简介",
    profileTitle: "做目标清晰、边界明确、能被长期维护的软件。",
    profileBody: [
      "当前的产品组合包含两个公开 Chrome 扩展：用于快速查看时区的世界时钟，以及把国际电影评分带到豆瓣页面的豆瓣电影评分助手。",
      "开发者工具方向主要是 s3-turbo-list、StorageOps 和 https-traffic-inspector，覆盖列举性能、诊断、兼容性检查、追踪、导出流程和请求检查。",
    ],
    focusLabel: "关注方向",
    focusItems: [
      "对象存储诊断与兼容性测试",
      "S3 兼容列举、追踪、差异对比和 Parquet 导出",
      "服务日常工作流的 Chrome 扩展产品",
    ],
  },
} as const;

export const products: Record<ProductSlug, Product> = {
  "s3-turbo-list": {
    slug: "s3-turbo-list",
    current: "s3-turbo-list",
    name: "s3-turbo-list",
    category: "storage",
    visual: "terminal",
    locales: {
      en: {
        title: "s3-turbo-list",
        description: "High-performance S3-compatible bucket listing, tracing, diffing, checkpoint/resume, and Parquet export.",
        eyebrow: "Rust CLI / Object Storage",
        headline: "List huge S3-compatible buckets without waiting on one slow chain.",
        lead: "s3-turbo-list is a high-performance CLI for operations teams and data engineers: concurrent bucket inventory, provider diagnostics, traceable runs, diffing, checkpoint/resume, and Parquet outputs for analysis.",
        primaryCta: { label: "View on GitHub", href: "https://github.com/hxddh/s3-turbo-list" },
        secondaryCta: { label: "Quick start", href: "https://github.com/hxddh/s3-turbo-list#quick-start" },
        meta: "Rust · MIT License · S3-compatible · Parquet · Trace JSONL",
        featuresLabel: "Features",
        features: [
          ["Segmented listing", "Split the key space into independent segments and scan them concurrently instead of walking one long chain."],
          ["Trace JSONL", "Record every S3 API call as structured JSONL so provider behavior is observable after the run."],
          ["Checkpoint / resume", "Resume interrupted scans from saved segment progress with identity checks to avoid mismatched runs."],
          ["Parquet export", "Write inventory and diff results directly into compressed Parquet for DuckDB, pandas, and audit workflows."],
        ],
        rationaleLabel: "Why it exists",
        rationaleTitle: "Sequential listing works until the bucket is large enough to become an operation.",
        rationaleBody: [
          "Standard listing tools are often bound to a single ListObjectsV2 pagination chain. That is fine for small buckets, but painful when object counts move into millions or hundreds of millions.",
          "s3-turbo-list slices the key space, runs listing work in parallel, and keeps the run auditable through manifests, traces, checkpoints, and Parquet artifacts.",
        ],
        workflowLabel: "Workflow",
        workflow: [
          ["Probe", "Run compat-probe or doctor first to validate endpoint behavior before a large listing."],
          ["Plan", "Use dry-run and agent-friendly JSON to inspect output paths, hints, and warnings."],
          ["Scan", "List with parallel segments, bounded memory, run manifests, and trace output."],
          ["Analyze", "Load Parquet in DuckDB or pandas, or inspect trace JSONL for provider-level behavior."],
        ],
        casesLabel: "Compatibility",
        casesTitle: "Built for real S3-compatible endpoints, not only the happy path.",
        casesBody: "Endpoint presets, compat-probe, trace output, and validation reports make it easier to understand how each provider behaves before scaling up a scan.",
        cases: ["AWS S3", "MinIO", "Cloudflare R2", "BOS", "OSS", "B2"],
        finalCta: "Start with a dry-run, then keep the trace.",
        finalCtaLabel: "Open repository",
      },
      zh: {
        title: "s3-turbo-list",
        description: "高性能 S3 兼容存储桶列举、追踪、差异对比、断点续跑和 Parquet 导出工具。",
        eyebrow: "Rust CLI / 对象存储",
        headline: "列举超大 S3 兼容存储桶，不再卡在一条慢分页链上。",
        lead: "s3-turbo-list 是面向运维团队和数据工程师的高性能 CLI：并发生成存储桶清单，支持 provider 诊断、可追踪运行、差异对比、断点续跑和 Parquet 分析输出。",
        primaryCta: { label: "查看 GitHub", href: "https://github.com/hxddh/s3-turbo-list" },
        secondaryCta: { label: "快速开始", href: "https://github.com/hxddh/s3-turbo-list#quick-start" },
        meta: "Rust · MIT License · S3-compatible · Parquet · Trace JSONL",
        featuresLabel: "功能",
        features: [
          ["分段列举", "把 key 空间拆成独立分段并发扫描，而不是等待一条很长的分页链。"],
          ["Trace JSONL", "把每一次 S3 API 调用记录成结构化 JSONL，便于在运行后观察 provider 行为。"],
          ["断点续跑", "从已保存的分段进度恢复中断扫描，并通过身份校验避免错配运行。"],
          ["Parquet 导出", "把清单和差异结果直接写入压缩 Parquet，方便 DuckDB、pandas 和审计流程使用。"],
        ],
        rationaleLabel: "为什么需要它",
        rationaleTitle: "顺序列举在小桶上没问题，但对象数量一大就会变成一次运维任务。",
        rationaleBody: [
          "常规列举工具通常绑定在单条 ListObjectsV2 分页链上。小桶还好，当对象数量达到百万、千万甚至更高时，这会非常痛苦。",
          "s3-turbo-list 会切分 key 空间，并行执行列举，并通过 manifest、trace、checkpoint 和 Parquet 产物让运行过程可审计。",
        ],
        workflowLabel: "工作流",
        workflow: [
          ["探测", "先运行 compat-probe 或 doctor，在大规模列举前验证 endpoint 行为。"],
          ["规划", "用 dry-run 和 agent-friendly JSON 检查输出路径、提示和警告。"],
          ["扫描", "用并发分段、有界内存、运行 manifest 和 trace 输出完成列举。"],
          ["分析", "在 DuckDB 或 pandas 中加载 Parquet，或查看 trace JSONL 理解 provider 行为。"],
        ],
        casesLabel: "兼容性",
        casesTitle: "面向真实 S3 兼容 endpoint，而不只是假设一切顺利。",
        casesBody: "Endpoint preset、compat-probe、trace 输出和校验报告可以帮助你在扩展扫描规模前理解每个 provider 的具体行为。",
        cases: ["AWS S3", "MinIO", "Cloudflare R2", "BOS", "OSS", "B2"],
        finalCta: "先 dry-run，再保留 trace。",
        finalCtaLabel: "打开仓库",
      },
    },
  },
  storageops: {
    slug: "storageops",
    current: "storageops",
    name: "StorageOps",
    category: "storage",
    visual: "diagnostic",
    locales: {
      en: {
        title: "StorageOps",
        description: "StorageOps is a Pi Coding Agent extension and skill pack for diagnosing S3-compatible object storage problems.",
        eyebrow: "Pi Extension / Object Storage Diagnostics",
        headline: "Diagnose S3-compatible storage failures from the evidence you already have.",
        lead: "StorageOps is a Pi Coding Agent extension and skill pack for investigating object storage problems: auth failures, throttling, signature mismatches, checksum errors, lifecycle rules, migrations, consistency, and provider quirks.",
        primaryCta: { label: "View on GitHub", href: "https://github.com/hxddh/storageops" },
        secondaryCta: { label: "Quick start", href: "https://github.com/hxddh/storageops#quick-start" },
        meta: "Python · Pi Coding Agent · S3-compatible · Redacted traces · Diagnostic skills",
        featuresLabel: "Features",
        features: [
          ["Diagnostic skills", "15 object-storage skill packs cover security, protocol compatibility, SDK behavior, performance, migration, consistency, logs, lifecycle, and notifications."],
          ["Safe evidence tools", "scan_secrets, detect_domain, search_memory, and capture_http_trace collect bounded, redacted context before diagnosis."],
          ["Protocol helpers", "Deterministic scripts inspect policies, SigV4 parsing, payload hashes, ETags, throttling, access logs, and migration estimates."],
          ["Regression-minded", "Golden cases, eval packs, size gates, and validation targets keep the diagnostic behavior compact and repeatable."],
        ],
        rationaleLabel: "Why it exists",
        rationaleTitle: "Object storage incidents are rarely solved by one error string.",
        rationaleBody: [
          "A storage failure may involve credentials, bucket policy, endpoint compatibility, retry behavior, signatures, payload hashes, lifecycle rules, SDK defaults, or provider-specific semantics.",
          "StorageOps packages that diagnostic context into focused skills and redacted helper tools so a Pi agent can move from symptoms to evidence-backed next steps.",
        ],
        workflowLabel: "Workflow",
        workflow: [
          ["Describe", "Paste an error, config, log excerpt, or short incident summary."],
          ["Route", "StorageOps detects the diagnostic domain and loads the relevant object-storage skill."],
          ["Inspect", "Use redacted traces, helper scripts, and prior session memory when evidence is needed."],
          ["Diagnose", "Return likely cause, confidence, supporting evidence, and safe next steps."],
        ],
        casesLabel: "Cases",
        casesTitle: "Built for the messy middle of S3-compatible operations.",
        casesBody: "Use it when you have logs, command output, configs, a failed migration, or a suspicious provider behavior and need a structured diagnostic path.",
        cases: ["AccessDenied", "SlowDown", "SignatureDoesNotMatch", "BadDigest", "stale reads", "lifecycle surprises", "failed notifications", "migration drift"],
        finalCta: "Bring the error, keep the credentials out of the answer.",
        finalCtaLabel: "Open repository",
      },
      zh: {
        title: "StorageOps",
        description: "StorageOps 是用于诊断 S3 兼容对象存储问题的 Pi Coding Agent 扩展和技能包。",
        eyebrow: "Pi 扩展 / 对象存储诊断",
        headline: "用你手头已有的证据诊断 S3 兼容存储故障。",
        lead: "StorageOps 是一个 Pi Coding Agent 扩展和技能包，用于调查对象存储问题：鉴权失败、限流、签名不匹配、checksum 错误、生命周期规则、迁移、一致性和 provider 差异。",
        primaryCta: { label: "查看 GitHub", href: "https://github.com/hxddh/storageops" },
        secondaryCta: { label: "快速开始", href: "https://github.com/hxddh/storageops#quick-start" },
        meta: "Python · Pi Coding Agent · S3-compatible · Redacted traces · Diagnostic skills",
        featuresLabel: "功能",
        features: [
          ["诊断技能", "15 个对象存储技能包覆盖安全、协议兼容、SDK 行为、性能、迁移、一致性、日志、生命周期和通知。"],
          ["安全取证工具", "scan_secrets、detect_domain、search_memory 和 capture_http_trace 会在诊断前收集有界、脱敏的上下文。"],
          ["协议辅助脚本", "确定性脚本用于检查策略、SigV4 解析、payload hash、ETag、限流、访问日志和迁移估算。"],
          ["面向回归", "Golden cases、eval packs、size gates 和验证目标让诊断行为保持紧凑、可重复。"],
        ],
        rationaleLabel: "为什么需要它",
        rationaleTitle: "对象存储故障很少能只靠一个错误字符串解决。",
        rationaleBody: [
          "一次存储故障可能涉及凭据、bucket policy、endpoint 兼容性、重试行为、签名、payload hash、生命周期规则、SDK 默认值或 provider 特有语义。",
          "StorageOps 把这些诊断上下文打包成专注技能和脱敏辅助工具，让 Pi agent 可以从症状走向有证据支撑的下一步。",
        ],
        workflowLabel: "工作流",
        workflow: [
          ["描述", "粘贴错误、配置、日志片段或简短故障摘要。"],
          ["路由", "StorageOps 识别诊断领域并加载对应的对象存储技能。"],
          ["检查", "需要证据时使用脱敏 trace、辅助脚本和历史会话记忆。"],
          ["诊断", "返回可能原因、置信度、支持证据和安全的下一步。"],
        ],
        casesLabel: "场景",
        casesTitle: "面向 S3 兼容运维里最混乱、最真实的中间地带。",
        casesBody: "当你有日志、命令输出、配置、失败迁移或可疑的 provider 行为，并需要结构化诊断路径时，就可以使用它。",
        cases: ["AccessDenied", "SlowDown", "SignatureDoesNotMatch", "BadDigest", "stale reads", "lifecycle surprises", "failed notifications", "migration drift"],
        finalCta: "带上错误信息，但不要把凭据带进答案。",
        finalCtaLabel: "打开仓库",
      },
    },
  },
  "world-clock": {
    slug: "world-clock",
    current: "world-clock",
    name: "World Clock",
    category: "browser",
    visual: "clock",
    locales: {
      en: {
        title: "World Clock",
        description: "A minimalist Chrome extension showing live time across major cities.",
        eyebrow: "Chrome Extension",
        headline: "World time, one click away.",
        lead: "World Clock is a minimalist Chrome extension for checking live time across major cities without opening a full calendar or search page.",
        primaryCta: { label: "Install", href: "https://chromewebstore.google.com/detail/world-clock/mghphbjnicggehnhbjbpjddfidkepnfp" },
        secondaryCta: { label: "Back to profile", href: "/about/" },
        meta: "Version 7.0 · Updated June 1, 2026 · 138 users · 44.08 KiB",
        featuresLabel: "Features",
        features: [
          ["Live city times", "Quickly check the current time in major cities around the world."],
          ["Minimal surface", "A compact extension designed for fast lookup instead of calendar-heavy planning."],
          ["Multilingual", "Available in 9 languages including English, Chinese, Japanese, Korean, French, German, Spanish, and Portuguese."],
          ["Private by design", "The Chrome Web Store listing states that the extension does not collect or use user data."],
        ],
        rationaleLabel: "Details",
        rationaleTitle: "Small, fast, and browser-native.",
        rationaleBody: [
          "The extension is listed under Tools in the Chrome Web Store, offered by titpea.com, and is sized for a lightweight install.",
          "Use it as a quick timezone glance for remote work, travel coordination, or checking whether a city is in business hours.",
        ],
      },
      zh: {
        title: "世界时钟",
        description: "一个用于查看主要城市实时本地时间的极简 Chrome 扩展。",
        eyebrow: "Chrome 扩展",
        headline: "一键查看世界时间。",
        lead: "世界时钟是一个极简 Chrome 扩展，用于查看主要城市的实时本地时间，不需要打开完整日历或搜索页面。",
        primaryCta: { label: "安装扩展", href: "https://chromewebstore.google.com/detail/world-clock/mghphbjnicggehnhbjbpjddfidkepnfp" },
        secondaryCta: { label: "返回简介", href: "/zh/about/" },
        meta: "Version 7.0 · Updated June 1, 2026 · 138 users · 44.08 KiB",
        featuresLabel: "功能",
        features: [
          ["实时城市时间", "快速查看全球主要城市的当前时间。"],
          ["极简界面", "为快速查询设计，而不是复杂的日历和排期工具。"],
          ["多语言", "支持 9 种语言，包括英文、中文、日文、韩文、法文、德文、西班牙文和葡萄牙文。"],
          ["隐私友好", "Chrome Web Store 信息显示，该扩展不会收集或使用用户数据。"],
        ],
        rationaleLabel: "详情",
        rationaleTitle: "小、快，并且原生运行在浏览器里。",
        rationaleBody: [
          "该扩展在 Chrome Web Store 中归类为 Tools，由 titpea.com 提供，安装包体积很轻。",
          "适合远程协作、旅行安排，或快速确认某个城市是否处于工作时间。",
        ],
      },
    },
  },
  "douban-movie-rating": {
    slug: "douban-movie-rating",
    current: "douban",
    name: "Douban Movie Rating Assistant",
    category: "browser",
    visual: "rating",
    locales: {
      en: {
        title: "Douban Movie Rating Assistant",
        description: "A Chrome extension that shows IMDb and Rotten Tomatoes ratings on Douban movie pages.",
        eyebrow: "Chrome Extension",
        headline: "IMDb and Rotten Tomatoes, right inside Douban movie pages.",
        lead: "Douban Movie Rating Assistant automatically shows IMDb ratings and Rotten Tomatoes freshness on Douban movie pages so you can compare rating systems in one place.",
        primaryCta: { label: "Install", href: "https://chromewebstore.google.com/detail/%E8%B1%86%E7%93%A3%E7%94%B5%E5%BD%B1%E8%AF%84%E5%88%86%E5%8A%A9%E6%89%8B/alhcfchcficmeggkhcpkojoipdkkgoif" },
        secondaryCta: { label: "Back to profile", href: "/about/" },
        meta: "Version 1.2 · Updated May 31, 2026 · 39 users · 35.42 KiB",
        featuresLabel: "Features",
        features: [
          ["IMDb rating", "Automatically shows IMDb scores on Douban movie detail pages."],
          ["Rotten Tomatoes", "Adds Rotten Tomatoes freshness when a reliable match is available."],
          ["Direct jumps", "Click a rating to open the matching IMDb or Rotten Tomatoes page."],
          ["Title matching", "Supports intelligent matching across Chinese and English movie titles."],
        ],
        rationaleLabel: "Details",
        rationaleTitle: "Compare Chinese and international movie ratings on one page.",
        rationaleBody: [
          "The Chrome Web Store listing places the extension under Entertainment and identifies titpea.com as the publisher.",
          "The store privacy disclosure states that the developer does not collect or use user data and links to the privacy policy on GitHub.",
        ],
      },
      zh: {
        title: "豆瓣电影评分助手",
        description: "在豆瓣电影页面显示 IMDb 和 Rotten Tomatoes 评分的 Chrome 扩展。",
        eyebrow: "Chrome 扩展",
        headline: "把 IMDb 和烂番茄带到豆瓣电影页面。",
        lead: "豆瓣电影评分助手会在豆瓣电影详情页自动显示 IMDb 评分和烂番茄新鲜度，帮你在同一个页面里快速对照不同评分体系。",
        primaryCta: { label: "安装扩展", href: "https://chromewebstore.google.com/detail/%E8%B1%86%E7%93%A3%E7%94%B5%E5%BD%B1%E8%AF%84%E5%88%86%E5%8A%A9%E6%89%8B/alhcfchcficmeggkhcpkojoipdkkgoif" },
        secondaryCta: { label: "返回简介", href: "/zh/about/" },
        meta: "Version 1.2 · Updated May 31, 2026 · 39 users · 35.42 KiB",
        featuresLabel: "功能",
        features: [
          ["IMDb 评分", "在豆瓣电影详情页自动显示 IMDb 分数。"],
          ["烂番茄新鲜度", "在匹配可靠时补充 Rotten Tomatoes 新鲜度。"],
          ["直接跳转", "点击评分即可打开对应 IMDb 或 Rotten Tomatoes 页面。"],
          ["标题匹配", "支持中英文电影标题的智能匹配。"],
        ],
        rationaleLabel: "详情",
        rationaleTitle: "一个页面里看完中外电影评分。",
        rationaleBody: [
          "Chrome Web Store 信息显示，该扩展属于 Entertainment 分类，由 titpea.com 提供。",
          "商店隐私说明显示开发者声明不会收集或使用用户数据，并提供了 GitHub 上的隐私政策链接。",
        ],
      },
    },
  },
};

export const homeProductLines = {
  en: [
    {
      label: ui.en.storageLine,
      title: ui.en.storageTitle,
      items: [
        { slug: "s3-turbo-list" as ProductSlug, text: "Fast S3-compatible listing, tracing, diffing, checkpoint/resume, and Parquet export." },
        { slug: "storageops" as ProductSlug, text: "Pi extension and skill pack for evidence-based object storage diagnosis." },
        { name: "https-traffic-inspector", href: "https://github.com/hxddh/https-traffic-inspector", text: "HTTPS traffic inspection workbench for request behavior and compatibility checks." },
      ],
    },
    {
      label: ui.en.browserLine,
      title: ui.en.browserTitle,
      items: [
        { slug: "world-clock" as ProductSlug, text: "Minimal live time lookup across major cities." },
        { slug: "douban-movie-rating" as ProductSlug, text: "IMDb and Rotten Tomatoes ratings on Douban movie pages." },
      ],
    },
  ],
  zh: [
    {
      label: ui.zh.storageLine,
      title: ui.zh.storageTitle,
      items: [
        { slug: "s3-turbo-list" as ProductSlug, text: "高速列举 S3 兼容存储桶，支持追踪、差异对比、断点续跑和 Parquet 导出。" },
        { slug: "storageops" as ProductSlug, text: "面向对象存储问题诊断的 Pi 扩展和技能包。" },
        { name: "https-traffic-inspector", href: "https://github.com/hxddh/https-traffic-inspector", text: "用于分析 HTTPS 请求行为和兼容性的流量检查工作台。" },
      ],
    },
    {
      label: ui.zh.browserLine,
      title: ui.zh.browserTitle,
      items: [
        { slug: "world-clock" as ProductSlug, text: "快速查看主要城市的当前时间。" },
        { slug: "douban-movie-rating" as ProductSlug, text: "在豆瓣电影页面显示 IMDb 和 Rotten Tomatoes 评分。" },
      ],
    },
  ],
};

export const aboutProducts = ["world-clock", "douban-movie-rating", "s3-turbo-list", "storageops"] as ProductSlug[];

export function pathFor(locale: Locale, slug?: ProductSlug | "about") {
  const path = slug ? `${slug}/` : "";
  return locale === "zh" ? `/zh/${path}` : `/${path}`;
}
