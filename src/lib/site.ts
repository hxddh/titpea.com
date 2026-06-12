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
  proof: string[];
  positioningLabel: string;
  positioning: Array<[string, string]>;
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
  faqLabel?: string;
  faq?: Array<[string, string]>;
};

export type Product = {
  slug: ProductSlug;
  current: CurrentPage;
  name: string;
  category: "storage" | "browser";
  role: "inventory" | "diagnosis" | "traffic" | "time" | "ratings";
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
    productIndex: "hxddh / object storage tools",
    homeTitle: "S3 tools and diagnosis agents.",
    homeLead: "Titpea collects hxddh products around S3-compatible operations: a high-performance list/diff CLI, a Pi-based diagnosis agent, an HTTP traffic inspector, and two lightweight browser utilities.",
    homePrimary: "s3-turbo-list",
    homeSecondary: "StorageOps",
    homeAbout: "About",
    featuredLabel: "Product map",
    storageLine: "Storage operations",
    storageTitle: "Inventory, diagnose, inspect.",
    browserLine: "Browser utilities",
    browserTitle: "Small context helpers.",
    thesisLabel: "Product thesis",
    thesisTitle: "The main line is object storage operations: list and diff first, diagnose with Pi when things fail, inspect HTTP when the SDK hides the details.",
    thesisBody: "The storage products are intentionally adjacent. s3-turbo-list is the high-performance CLI for listing and diffing S3-compatible buckets. StorageOps is the Pi Agent package for object-storage diagnosis, built from skills, tools, helper scripts, and evals. httpmon captures the HTTP layer when signing, redirects, retries, or provider behavior matter. The browser extensions are smaller utilities: narrow job, compact surface, no data collection.",
    flowLabel: "Storage operations flow",
    flowTitle: "List, diff, diagnose, inspect.",
    flowBody: "Use s3-turbo-list when the job is “list this bucket fast” or “diff these two buckets.” Use StorageOps when Pi should diagnose an S3-compatible failure with skills and tools. Use httpmon when the important clue is below the SDK, inside real HTTP requests and responses.",
    proofItems: ["S3-compatible list/diff", "Pi diagnosis agent", "HTTP traffic inspection", "Chrome Web Store products"],
    aboutTitle: "About",
    aboutDescription: "Personal profile, Chrome extensions, and infrastructure projects by hxddh.",
    aboutHeadline: "Building focused tools for object storage operations and small browser workflows.",
    aboutLead: "I make compact products with a narrow job: fast S3-compatible list/diff, Pi-based storage diagnosis, command-line HTTP inspection, and small browser utilities.",
    productsLabel: "Products and Projects",
    profileLabel: "Profile",
    profileTitle: "Practical software with a narrow job and a clear owner.",
    profileBody: [
      "The storage line is practical and close to the terminal: s3-turbo-list lists and diffs large S3-compatible buckets; StorageOps gives Pi Agent object-storage diagnostic skills and tools; httpmon exposes command-line HTTP and HTTPS traffic.",
      "The browser line is deliberately smaller: World Clock gives quick time context, and Douban Movie Rating Assistant brings IMDb and Rotten Tomatoes context into Douban pages.",
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
    productIndex: "hxddh / 对象存储工具",
    homeTitle: "S3 工具和诊断 agent。",
    homeLead: "Titpea 收集 hxddh 围绕 S3 兼容运维构建的产品：高性能 list/diff CLI、基于 Pi 的诊断 agent、HTTP 流量检查工具，以及两个轻量浏览器工具。",
    homePrimary: "s3-turbo-list",
    homeSecondary: "StorageOps",
    homeAbout: "关于",
    featuredLabel: "产品地图",
    storageLine: "存储运维",
    storageTitle: "清单、诊断、检查。",
    browserLine: "浏览器工具",
    browserTitle: "小而确定的上下文助手。",
    thesisLabel: "产品主线",
    thesisTitle: "主线是对象存储运维：先 list 和 diff，失败时让 Pi 诊断，必要时下钻到 HTTP 层。",
    thesisBody: "这些存储产品彼此相邻。s3-turbo-list 是高性能 S3 兼容 bucket list/diff CLI；StorageOps 是基于 Pi Agent 的对象存储诊断包，由 skills、tools、helper scripts 和 evals 组成；httpmon 在签名、跳转、重试或 provider 行为不清楚时捕获 HTTP 层细节。浏览器扩展则更轻：一个任务、一个小界面，并且不收集用户数据。",
    flowLabel: "存储运维流",
    flowTitle: "List、diff、诊断、检查。",
    flowBody: "当任务是“快速列举这个 bucket”或“对比两个 bucket”，用 s3-turbo-list；当需要 Pi 通过 skills 和 tools 诊断 S3 兼容故障，用 StorageOps；当关键线索藏在 SDK 下面的真实 HTTP 请求和响应里，用 httpmon。",
    proofItems: ["S3 兼容 list/diff", "Pi 诊断 agent", "HTTP 流量检查", "Chrome 商店产品"],
    aboutTitle: "关于",
    aboutDescription: "hxddh 的个人简介、Chrome 扩展和基础设施项目。",
    aboutHeadline: "构建面向对象存储运维和浏览器工作流的专注工具。",
    aboutLead: "我做边界清晰的小产品：S3 兼容 list/diff、基于 Pi 的存储诊断、命令行 HTTP 检查，以及轻量浏览器工具。",
    productsLabel: "产品和项目",
    profileLabel: "简介",
    profileTitle: "做目标清晰、边界明确、能被长期维护的软件。",
    profileBody: [
      "存储工具线贴近终端和运维现场：s3-turbo-list 列举并对比大型 S3 兼容桶；StorageOps 给 Pi Agent 安装对象存储诊断 skills 和 tools；httpmon 暴露命令行 HTTP 和 HTTPS 流量。",
      "浏览器工具线更小：世界时钟提供快速时间上下文，豆瓣电影评分助手把 IMDb 和 Rotten Tomatoes 上下文带到豆瓣页面。",
    ],
    focusLabel: "关注方向",
    focusItems: [
      "S3 兼容 list、diff、诊断和迁移检查",
      "命令行工具的 HTTP/HTTPS 流量检查",
      "隐私姿态清晰的小型 Chrome 扩展",
    ],
  },
} as const;

export const products: Record<ProductSlug, Product> = {
  "s3-turbo-list": {
    slug: "s3-turbo-list",
    current: "s3-turbo-list",
    name: "s3-turbo-list",
    category: "storage",
    role: "inventory",
    visual: "terminal",
    locales: {
      en: {
        title: "s3-turbo-list",
        description: "High-performance S3-compatible object storage list and diff CLI with checkpoint/resume and Parquet output.",
        eyebrow: "Rust CLI / Object Storage List & Diff",
        headline: "High-performance list and diff for object storage.",
        lead: "s3-turbo-list is a CLI for large S3-compatible buckets: list objects fast, diff two buckets authoritatively, resume long runs, and export analysis-ready Parquet.",
        primaryCta: { label: "View on GitHub", href: "https://github.com/hxddh/s3-turbo-list" },
        secondaryCta: { label: "Quick start", href: "https://github.com/hxddh/s3-turbo-list#quick-start" },
        meta: "Rust · MIT License · S3-compatible · Parquet · Trace JSONL",
        proof: ["Concurrent segmented list", "Authoritative bucket diff", "Checkpoint / resume", "Parquet + DiffFlag output"],
        positioningLabel: "Positioning",
        positioning: [
          ["Use it when", "You need to list a huge bucket, compare source and target buckets, build a migration baseline, or produce object metadata that can be queried later."],
          ["It is not", "A backup tool, sync engine, or graphical storage browser. It is a focused CLI for fast listing, authoritative diffing, and export."],
          ["What you keep", "Parquet rows for every object, `DiffFlag` annotations in diff mode, key-space counts, checkpoint state, and optional trace or manifest files."],
        ],
        featuresLabel: "Capabilities",
        features: [
          ["Segmented list", "Partition the key space, discover real prefix boundaries, split skewed segments at runtime, and list concurrently by default."],
          ["Bucket diff", "List both sides, merge ordered streams, and write one Parquet with `DiffFlag` values for equal, left-only, right-only, and changed objects."],
          ["Checkpoint / resume", "Save progress for long list runs and resume safely with identity checks for bucket, region, prefix, mode, and segment count."],
          ["Analysis output", "Write streaming Parquet by default, plus key-space CSV, NDJSON, TSV, summary-only, dry-run plans, manifests, and trace summaries."],
        ],
        rationaleLabel: "Why it exists",
        rationaleTitle: "List and diff are the product.",
        rationaleBody: [
          "Object storage work often starts with two primitive questions: what is in this bucket, and how does it differ from another bucket? Sequential listing makes those questions slow at scale.",
          "s3-turbo-list keeps the surface small: list and diff extremely fast, export clean Parquet, and add just enough checkpointing and observability for long operational runs.",
        ],
        workflowLabel: "Workflow",
        workflow: [
          ["List", "Scan one bucket recursively with segmented concurrency and write object rows to Parquet or shell-friendly streams."],
          ["Diff", "Compare source and target buckets and keep every object row annotated with a stable `DiffFlag`."],
          ["Resume", "Continue interrupted list runs from checkpoint state instead of starting over after a long scan fails."],
          ["Analyze", "Load Parquet into DuckDB, pandas, or CI checks to count, filter, compare, and report object state."],
        ],
        casesLabel: "Compatibility",
        casesTitle: "Real S3-compatible endpoints.",
        casesBody: "Endpoint presets, compat-probe, trace output, and validation reports make it easier to understand how each provider behaves before scaling up a scan.",
        cases: ["AWS S3", "MinIO", "Cloudflare R2", "BOS", "OSS", "B2"],
        finalCta: "Start with a dry-run, then keep the trace.",
        finalCtaLabel: "Open repository",
        faqLabel: "Questions & how-to",
        faq: [
          ["Why not just use aws s3 ls?", "For small buckets, sequential listing is fine. s3-turbo-list is for large buckets where listing needs concurrency, resumability, and structured output."],
          ["How does diff work?", "Diff lists both buckets and writes one Parquet dataset with `DiffFlag` values, so downstream tools can filter equal, left-only, right-only, and changed rows."],
          ["Do I need prefix hints?", "No. Startup discovery probes real prefix structure automatically. Hints are useful for repeated inventories, but not required for the first run."],
        ],
      },
      zh: {
        title: "s3-turbo-list",
        description: "高性能 S3 兼容对象存储 list / diff CLI，支持断点续跑和 Parquet 输出。",
        eyebrow: "Rust CLI / 对象存储 List & Diff",
        headline: "对象存储的高性能 list / diff。",
        lead: "s3-turbo-list 面向大型 S3 兼容存储桶：快速列举对象，对比两个桶，长任务断点续跑，并导出可分析的 Parquet。",
        primaryCta: { label: "查看 GitHub", href: "https://github.com/hxddh/s3-turbo-list" },
        secondaryCta: { label: "快速开始", href: "https://github.com/hxddh/s3-turbo-list#quick-start" },
        meta: "Rust · MIT License · S3-compatible · Parquet · Trace JSONL",
        proof: ["并发分段 list", "权威 bucket diff", "checkpoint / resume", "Parquet + DiffFlag 输出"],
        positioningLabel: "定位",
        positioning: [
          ["适合场景", "需要列举超大桶、对比源桶和目标桶、生成迁移基线，或把对象元数据交给后续分析工具。"],
          ["它不做什么", "它不是备份工具、同步引擎或图形化存储浏览器。它只专注于快速 list、权威 diff 和结构化导出。"],
          ["最终留下什么", "每个对象的 Parquet 行、diff 模式下的 `DiffFlag`、key-space 计数、checkpoint 状态，以及可选 trace 或 manifest。"],
        ],
        featuresLabel: "能力",
        features: [
          ["分段列举", "切分 key space，自动发现真实 prefix 边界，运行中拆分偏斜分段，默认并发递归 list。"],
          ["Bucket diff", "同时列举两侧，合并有序流，并写出带 `DiffFlag` 的 Parquet，标记相同、左侧独有、右侧独有和变更对象。"],
          ["断点续跑", "长时间 list 运行会保存进度，并用 bucket、region、prefix、mode、segment count 等身份信息避免错配恢复。"],
          ["分析输出", "默认流式写 Parquet，也支持 key-space CSV、NDJSON、TSV、summary-only、dry-run plan、manifest 和 trace summary。"],
        ],
        rationaleLabel: "为什么需要它",
        rationaleTitle: "list 和 diff 才是产品核心。",
        rationaleBody: [
          "对象存储工作经常从两个问题开始：这个桶里有什么，和另一个桶有什么不同。对象数量一大，顺序列举会把这两个问题拖成运维任务。",
          "s3-turbo-list 保持很小的产品面：极快地 list 和 diff，输出干净的 Parquet，并为长任务补上必要的 checkpoint 和可观测性。",
        ],
        workflowLabel: "工作流",
        workflow: [
          ["List", "用分段并发递归扫描一个桶，把对象行写入 Parquet 或 shell 友好的流式格式。"],
          ["Diff", "对比 source 和 target bucket，并用稳定的 `DiffFlag` 标记每个对象的差异状态。"],
          ["Resume", "长时间 list 中断后从 checkpoint 继续，而不是重新扫描整个桶。"],
          ["Analyze", "用 DuckDB、pandas 或 CI 检查读取 Parquet，统计、过滤、对比并生成报告。"],
        ],
        casesLabel: "兼容性",
        casesTitle: "面向真实 S3 兼容 endpoint。",
        casesBody: "Endpoint preset、compat-probe、trace 输出和校验报告可以帮助你在扩展扫描规模前理解每个 provider 的具体行为。",
        cases: ["AWS S3", "MinIO", "Cloudflare R2", "BOS", "OSS", "B2"],
        finalCta: "先 dry-run，再保留 trace。",
        finalCtaLabel: "打开仓库",
        faqLabel: "问题与用法",
        faq: [
          ["为什么不用 aws s3 ls？", "小桶当然可以。s3-turbo-list 面向的是大桶：列举需要并发、可恢复，以及运行后能直接分析的结构化输出。"],
          ["diff 怎么工作？", "diff 会列举两侧 bucket，并写出一个带 `DiffFlag` 的 Parquet 数据集，后续可以过滤相同、左侧独有、右侧独有和变更对象。"],
          ["必须提前知道 prefix 结构吗？", "不需要。启动时会自动探测真实 prefix 结构。重复任务可以用 hints，但第一次运行不依赖它。"],
        ],
      },
    },
  },
  storageops: {
    slug: "storageops",
    current: "storageops",
    name: "StorageOps",
    category: "storage",
    role: "diagnosis",
    visual: "diagnostic",
    locales: {
      en: {
        title: "StorageOps",
        description: "StorageOps is an object storage diagnosis agent built on Pi Coding Agent, with S3 diagnostic skills, Pi tools, helper scripts, and evals.",
        eyebrow: "Pi Agent / Object Storage Diagnosis",
        headline: "An S3 diagnosis agent for Pi.",
        lead: "StorageOps turns Pi Coding Agent into an object storage specialist by installing S3 diagnostic skills, Pi extension tools, deterministic helpers, and compact eval cases.",
        primaryCta: { label: "View on GitHub", href: "https://github.com/hxddh/storageops" },
        secondaryCta: { label: "Quick start", href: "https://github.com/hxddh/storageops#quick-start" },
        meta: "Python · Pi Coding Agent · S3-compatible · Redacted traces · Diagnostic skills",
        proof: ["15 diagnostic skills", "4 Pi extension tools", "Managed httpmon helper", "Golden-case evals"],
        positioningLabel: "Positioning",
        positioning: [
          ["Use it when", "You want Pi to diagnose S3-compatible failures such as AccessDenied, SlowDown, SignatureDoesNotMatch, checksum drift, lifecycle issues, or migration surprises."],
          ["It is not", "A cloud console, storage SDK, or standalone monitoring platform. It is an agent package: skills, tools, helper scripts, and routing rules for Pi."],
          ["What you install", "A Pi extension, 15 diagnostic skill packs, 4 tools for bounded evidence collection, a managed httpmon helper, deterministic scripts, and eval cases."],
        ],
        featuresLabel: "Capabilities",
        features: [
          ["Skill coverage", "Skills cover security, protocol compatibility, CLI/SDK behavior, performance, networking, lifecycle cost, replication, migration, consistency, logs, notifications, and triage."],
          ["Pi extension tools", "`scan_secrets`, `detect_domain`, `search_memory`, and `capture_http_trace` help Pi route the issue and gather redacted evidence."],
          ["Helper scripts", "Deterministic scripts inspect policies, SigV4 inputs, payload hashes, ETags, throttling, access logs, migration estimates, and endpoint reachability."],
          ["Eval discipline", "Golden cases, skill/eval packs, size gates, and validation targets keep the agent package compact, repeatable, and safer to change."],
        ],
        rationaleLabel: "Why it exists",
        rationaleTitle: "Skills and tools define the agent.",
        rationaleBody: [
          "Pi is the runtime. StorageOps is the object-storage expertise layer: domain-specific skills decide how to reason, while extension tools collect bounded evidence without dumping secrets into the prompt.",
          "The product is useful because the agent has a taxonomy, tools, helper scripts, and regression cases. It is not a generic chatbot wrapper around S3 error messages.",
        ],
        workflowLabel: "Workflow",
        workflow: [
          ["Invoke Pi", "Run `storageops --print` or start an interactive Pi session with logs, errors, configs, or a short failure description."],
          ["Route to skills", "`detect_domain` and the skill taxonomy steer Pi toward auth, signing, throttling, consistency, lifecycle, migration, or another storage domain."],
          ["Use tools", "Pi can scan secrets, search prior sessions, or capture a sanitized HTTP trace through the managed httpmon helper."],
          ["Diagnose", "The agent returns likely cause, confidence, evidence, next checks, and safe changes grounded in the selected skills and tool output."],
        ],
        casesLabel: "Cases",
        casesTitle: "Object storage diagnosis domains.",
        casesBody: "StorageOps is organized around recurring S3-compatible failure domains, with skills and tools that help Pi reason inside each one.",
        cases: ["AccessDenied", "SlowDown", "SignatureDoesNotMatch", "BadDigest", "stale reads", "lifecycle surprises", "failed notifications", "migration drift"],
        finalCta: "Bring the error. Leave out the secrets.",
        finalCtaLabel: "Open repository",
        faqLabel: "Questions & how-to",
        faq: [
          ["What makes it an agent rather than a checklist?", "The Pi runtime can call StorageOps tools, load domain skills, search prior sessions, and combine deterministic helper output with reasoning."],
          ["What should I paste first?", "Start with the exact error, command or SDK call, endpoint style, relevant config names, and a redacted log excerpt. The skills and tools narrow the next evidence request."],
          ["When does capture_http_trace matter?", "Use it when the diagnosis depends on request details hidden by a CLI or SDK: headers, redirects, retry behavior, canonical request shape, payload hashes, or provider metadata."],
        ],
      },
      zh: {
        title: "StorageOps",
        description: "StorageOps 是构建在 Pi Coding Agent 之上的对象存储诊断 agent，包含 S3 诊断 skills、Pi tools、helper scripts 和 evals。",
        eyebrow: "Pi Agent / 对象存储诊断",
        headline: "基于 Pi 的 S3 诊断 agent。",
        lead: "StorageOps 通过安装 S3 诊断 skills、Pi 扩展 tools、确定性 helper scripts 和 eval cases，把 Pi Coding Agent 变成对象存储诊断专家。",
        primaryCta: { label: "查看 GitHub", href: "https://github.com/hxddh/storageops" },
        secondaryCta: { label: "快速开始", href: "https://github.com/hxddh/storageops#quick-start" },
        meta: "Python · Pi Coding Agent · S3-compatible · Redacted traces · Diagnostic skills",
        proof: ["15 个诊断 skills", "4 个 Pi 扩展 tools", "托管 httpmon helper", "Golden-case evals"],
        positioningLabel: "定位",
        positioning: [
          ["适合场景", "希望让 Pi 诊断 S3 兼容故障：AccessDenied、SlowDown、SignatureDoesNotMatch、checksum 漂移、生命周期问题或迁移异常。"],
          ["它不做什么", "它不是云控制台、存储 SDK 或独立监控平台。它是给 Pi 使用的 agent package：skills、tools、helper scripts 和路由规则。"],
          ["安装后得到什么", "Pi 扩展、15 个诊断 skill packs、4 个有界取证 tools、托管 httpmon helper、确定性脚本和 eval cases。"],
        ],
        featuresLabel: "能力",
        features: [
          ["Skill 覆盖", "Skills 覆盖安全、协议兼容、CLI/SDK 行为、性能、网络、生命周期成本、复制、迁移、一致性、日志、通知和 triage。"],
          ["Pi 扩展 tools", "`scan_secrets`、`detect_domain`、`search_memory` 和 `capture_http_trace` 帮 Pi 路由问题并收集脱敏证据。"],
          ["Helper scripts", "确定性脚本检查 policy、SigV4 输入、payload hash、ETag、限流、访问日志、迁移估算和 endpoint 可达性。"],
          ["Eval 约束", "Golden cases、skill/eval packs、size gates 和验证目标让 agent package 保持紧凑、可重复、可安全修改。"],
        ],
        rationaleLabel: "为什么需要它",
        rationaleTitle: "skills 和 tools 决定 agent 能力。",
        rationaleBody: [
          "Pi 是运行时，StorageOps 是对象存储专家层：领域 skills 决定如何推理，扩展 tools 负责收集有界证据，并避免把密钥直接带进上下文。",
          "它的价值来自 taxonomy、tools、helper scripts 和 regression cases，而不是把 S3 错误字符串交给通用聊天模型。",
        ],
        workflowLabel: "工作流",
        workflow: [
          ["启动 Pi", "用 `storageops --print` 或交互式 Pi session 输入日志、错误、配置或简短故障描述。"],
          ["路由 skills", "`detect_domain` 和 skill taxonomy 把问题导向鉴权、签名、限流、一致性、生命周期、迁移等领域。"],
          ["调用 tools", "Pi 可以扫描 secrets、搜索历史 session，或通过托管 httpmon helper 捕获脱敏 HTTP trace。"],
          ["生成诊断", "agent 基于选中的 skills 和 tool output 返回可能原因、置信度、证据、下一步检查和安全修改建议。"],
        ],
        casesLabel: "场景",
        casesTitle: "对象存储诊断领域。",
        casesBody: "StorageOps 围绕常见 S3 兼容故障领域组织 skills 和 tools，让 Pi 在具体领域内推理，而不是泛泛回答。",
        cases: ["AccessDenied", "SlowDown", "SignatureDoesNotMatch", "BadDigest", "stale reads", "lifecycle surprises", "failed notifications", "migration drift"],
        finalCta: "带上错误，不带凭据。",
        finalCtaLabel: "打开仓库",
        faqLabel: "问题与用法",
        faq: [
          ["为什么说它是 agent，而不是 checklist？", "Pi 运行时可以调用 StorageOps tools、加载领域 skills、搜索历史 session，并把确定性 helper 输出和推理结合起来。"],
          ["一开始应该粘贴什么？", "先给完整错误、命令或 SDK 调用、endpoint 形式、相关配置名，以及脱敏后的日志片段。skills 和 tools 会继续收窄证据。"],
          ["什么时候需要 capture_http_trace？", "当诊断依赖 CLI 或 SDK 隐藏的请求细节时使用：headers、redirect、retry、canonical request、payload hash 或 provider 响应元数据。"],
        ],
      },
    },
  },
  "world-clock": {
    slug: "world-clock",
    current: "world-clock",
    name: "World Clock",
    category: "browser",
    role: "time",
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
        proof: ["Chrome Web Store: Tools", "Version 7.0", "138 users", "No data collection disclosed"],
        positioningLabel: "Positioning",
        positioning: [
          ["Use it when", "You need a fast timezone glance during remote work, travel planning, or cross-region conversations."],
          ["It is not", "A meeting scheduler or calendar replacement. It stays deliberately small so checking time does not become another workflow."],
          ["What you get", "A browser-native popup with live time across major cities, multilingual labels, and no disclosed user-data collection."],
        ],
        featuresLabel: "Capabilities",
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
        faqLabel: "Questions & how-to",
        faq: [
          ["Does it collect my location?", "The Chrome Web Store listing discloses no user-data collection. The extension is meant for manual city-time lookup, not location tracking."],
          ["Is it for scheduling meetings?", "No. It is intentionally simpler than a scheduler: open the popup, check the time, and return to what you were doing."],
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
        proof: ["Chrome Web Store: Tools", "Version 7.0", "138 users", "声明不收集数据"],
        positioningLabel: "定位",
        positioning: [
          ["适合场景", "远程协作、旅行安排、跨地区沟通时，需要快速看一眼主要城市当前时间。"],
          ["它不做什么", "它不是会议排期工具，也不是日历替代品。它刻意保持很小，让查时间不变成另一套流程。"],
          ["最终得到什么", "一个浏览器原生弹窗，展示主要城市实时本地时间，支持多语言，并且商店说明不收集用户数据。"],
        ],
        featuresLabel: "能力",
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
        faqLabel: "问题与用法",
        faq: [
          ["会收集我的位置吗？", "Chrome Web Store 信息显示该扩展不收集用户数据。它的定位是手动查看城市时间，不做位置追踪。"],
          ["它适合排会议吗？", "不适合。它刻意比排期工具简单：打开弹窗，看一眼时间，然后回到当前工作。"],
        ],
      },
    },
  },
  "douban-movie-rating": {
    slug: "douban-movie-rating",
    current: "douban",
    name: "Douban Movie Rating Assistant",
    category: "browser",
    role: "ratings",
    visual: "rating",
    locales: {
      en: {
        title: "Douban Movie Rating Assistant",
        description: "A Chrome extension that shows IMDb and Rotten Tomatoes ratings on Douban movie pages.",
        eyebrow: "Chrome Extension",
        headline: "IMDb, Rotten Tomatoes, Douban.",
        lead: "Douban Movie Rating Assistant automatically shows IMDb ratings and Rotten Tomatoes freshness on Douban movie pages so you can compare rating systems in one place.",
        primaryCta: { label: "Install", href: "https://chromewebstore.google.com/detail/%E8%B1%86%E7%93%A3%E7%94%B5%E5%BD%B1%E8%AF%84%E5%88%86%E5%8A%A9%E6%89%8B/alhcfchcficmeggkhcpkojoipdkkgoif" },
        secondaryCta: { label: "Back to profile", href: "/about/" },
        meta: "Version 1.3 · Updated June 1, 2026 · 52 users · 33.68 KiB",
        proof: ["Chrome Web Store: Entertainment", "5.0 rating", "Version 1.3", "No data collection disclosed"],
        positioningLabel: "Positioning",
        positioning: [
          ["Use it when", "You browse Douban movie pages but want quick context from IMDb and Rotten Tomatoes before deciding what to watch."],
          ["It is not", "A rating authority or recommendation engine. It simply brings external rating context into the page you are already reading."],
          ["What you get", "Matched IMDb scores, Rotten Tomatoes freshness when available, direct outbound links, and title matching across Chinese and English names."],
        ],
        featuresLabel: "Capabilities",
        features: [
          ["IMDb rating", "Automatically shows IMDb scores on Douban movie detail pages."],
          ["Rotten Tomatoes", "Adds Rotten Tomatoes freshness when a reliable match is available."],
          ["Direct jumps", "Click a rating to open the matching IMDb or Rotten Tomatoes page."],
          ["Title matching", "Supports intelligent matching across Chinese and English movie titles."],
        ],
        rationaleLabel: "Details",
        rationaleTitle: "Ratings in one view.",
        rationaleBody: [
          "The Chrome Web Store listing places the extension under Entertainment and identifies titpea.com as the publisher.",
          "The store privacy disclosure states that the developer does not collect or use user data and links to the privacy policy on GitHub.",
        ],
        faqLabel: "Questions & how-to",
        faq: [
          ["What happens when a movie cannot be matched?", "The extension only shows external ratings when it can find a reliable match. The Douban page remains usable without the extra context."],
          ["Does it replace Douban ratings?", "No. It keeps Douban as the main page and adds IMDb or Rotten Tomatoes context so you can compare rating systems in place."],
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
        meta: "Version 1.3 · Updated June 1, 2026 · 52 users · 33.68 KiB",
        proof: ["Chrome Web Store: Entertainment", "5.0 评分", "Version 1.3", "声明不收集数据"],
        positioningLabel: "定位",
        positioning: [
          ["适合场景", "你在浏览豆瓣电影页面，但希望在决定看什么之前快速参考 IMDb 和 Rotten Tomatoes。"],
          ["它不做什么", "它不是评分权威，也不是推荐引擎，只是把外部评分上下文带到你正在阅读的页面里。"],
          ["最终得到什么", "匹配到的 IMDb 分数、可用时展示的 Rotten Tomatoes 新鲜度、直接跳转链接，以及中英文片名匹配。"],
        ],
        featuresLabel: "能力",
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
        faqLabel: "问题与用法",
        faq: [
          ["匹配不到电影时怎么办？", "只有在能找到可靠匹配时才显示外部评分。匹配不到时，豆瓣页面本身仍然正常使用。"],
          ["它会替代豆瓣评分吗？", "不会。它保留豆瓣页面作为主体验，只补充 IMDb 或 Rotten Tomatoes 上下文，方便原地对比不同评分体系。"],
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
        { slug: "s3-turbo-list" as ProductSlug, text: "Choose this when you need high-performance list or authoritative diff for large S3-compatible buckets, with Parquet output and resume support." },
        { slug: "storageops" as ProductSlug, text: "Choose this when Pi should diagnose S3-compatible failures using object-storage skills, extension tools, helper scripts, and eval-backed routing." },
        { name: "https-traffic-inspector", href: "https://github.com/hxddh/https-traffic-inspector", text: "Choose this when the important clue is inside the HTTP request or response hidden by curl, aws, Python, Node, or another CLI." },
      ],
    },
    {
      label: ui.en.browserLine,
      title: ui.en.browserTitle,
      items: [
        { slug: "world-clock" as ProductSlug, text: "A small Chrome popup for checking live time across major cities without opening a calendar or search page." },
        { slug: "douban-movie-rating" as ProductSlug, text: "Adds IMDb and Rotten Tomatoes context directly to Douban movie pages, with outbound links when matches are available." },
      ],
    },
  ],
  zh: [
    {
      label: ui.zh.storageLine,
      title: ui.zh.storageTitle,
      items: [
        { slug: "s3-turbo-list" as ProductSlug, text: "当你需要对大型 S3 兼容桶做高性能 list 或权威 diff，并保留 Parquet 输出和断点续跑。" },
        { slug: "storageops" as ProductSlug, text: "当你希望 Pi 通过对象存储 skills、extension tools、helper scripts 和 eval 路由来诊断 S3 兼容故障。" },
        { name: "https-traffic-inspector", href: "https://github.com/hxddh/https-traffic-inspector", text: "当关键线索藏在 curl、aws、Python、Node 或其他 CLI 隐藏掉的 HTTP 请求和响应里。" },
      ],
    },
    {
      label: ui.zh.browserLine,
      title: ui.zh.browserTitle,
      items: [
        { slug: "world-clock" as ProductSlug, text: "一个很小的 Chrome 弹窗，用来查看主要城市实时本地时间，不必打开日历或搜索页面。" },
        { slug: "douban-movie-rating" as ProductSlug, text: "把 IMDb 和 Rotten Tomatoes 上下文直接加到豆瓣电影页，匹配到结果时可直接跳转。" },
      ],
    },
  ],
};

export const aboutProducts = ["world-clock", "douban-movie-rating", "s3-turbo-list", "storageops"] as ProductSlug[];

export function pathFor(locale: Locale, slug?: ProductSlug | "about") {
  const path = slug ? `${slug}/` : "";
  return locale === "zh" ? `/zh/${path}` : `/${path}`;
}
