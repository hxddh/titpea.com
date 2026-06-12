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
    productIndex: "hxddh / object storage workbench",
    homeTitle: "Tools for S3 operations.",
    homeLead: "A focused set of tools for the practical side of object storage: list and diff large buckets, diagnose S3-compatible failures with Pi, and inspect the HTTP layer when SDKs hide the details.",
    homePrimary: "s3-turbo-list",
    homeSecondary: "StorageOps",
    homeAbout: "About",
    featuredLabel: "Product map",
    storageLine: "Storage operations",
    storageTitle: "List, diff, diagnose.",
    browserLine: "Browser utilities",
    browserTitle: "Small browser helpers.",
    thesisLabel: "Product thesis",
    thesisTitle: "The storage tools are adjacent on purpose.",
    thesisBody: "s3-turbo-list handles the inventory primitive: list and diff S3-compatible buckets, then write data you can query. StorageOps handles the diagnostic primitive: give Pi object-storage skills, tools, helper scripts, and evals. httpmon handles the transport primitive: inspect real HTTP traffic when signing, redirects, retries, or provider behavior matter.",
    flowLabel: "Storage operations flow",
    flowTitle: "List, diff, diagnose, inspect.",
    flowBody: "Use s3-turbo-list when the job is “list this bucket fast” or “diff these two buckets.” Use StorageOps when Pi should diagnose an S3-compatible failure with skills and tools. Use httpmon when the important clue is below the SDK, inside real HTTP requests and responses.",
    proofItems: ["S3-compatible list/diff", "Pi diagnosis agent", "HTTP traffic inspection", "Chrome Web Store products"],
    aboutTitle: "About",
    aboutDescription: "Personal profile, Chrome extensions, and infrastructure projects by hxddh.",
    aboutHeadline: "I build small tools for object storage work.",
    aboutLead: "The common thread is practical infrastructure work: make large buckets easier to list and compare, make S3-compatible failures easier to diagnose, and keep browser utilities small enough to stay out of the way.",
    productsLabel: "Products and Projects",
    profileLabel: "Profile",
    profileTitle: "A small product line, not a grab bag.",
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
    productIndex: "hxddh / 对象存储工作台",
    homeTitle: "S3 运维工具。",
    homeLead: "这里放的是 hxddh 正在维护的几件东西：s3-turbo-list 负责高速 list / diff，StorageOps 给 Pi 补上对象存储诊断能力，httpmon 用来看清 CLI 和 SDK 背后的 HTTP 请求。另有两个轻量 Chrome 扩展。",
    homePrimary: "s3-turbo-list",
    homeSecondary: "StorageOps",
    homeAbout: "关于",
    featuredLabel: "产品地图",
    storageLine: "存储运维",
    storageTitle: "List、diff、诊断。",
    browserLine: "浏览器工具",
    browserTitle: "小型浏览器助手。",
    thesisLabel: "产品主线",
    thesisTitle: "这些工具放在一起，是因为它们处理同一类工作。",
    thesisBody: "s3-turbo-list 处理对象存储里最基础也最耗时的事：列出一个大桶、对比两个桶，并把结果写成能继续分析的数据。StorageOps 处理故障诊断：给 Pi 装上对象存储相关的 skills、tools、helper scripts 和 evals。httpmon 处理更底层的问题：当签名、重试、跳转或 provider 行为说不清时，直接看真实 HTTP 流量。",
    flowLabel: "存储运维流",
    flowTitle: "List / diff / 诊断 / 检查",
    flowBody: "需要快速列一个 bucket 或对比两个 bucket，用 s3-turbo-list；需要 Pi 根据 skills 和 tools 诊断 S3 兼容故障，用 StorageOps；线索藏在 SDK 下面的真实 HTTP 请求和响应里，用 httpmon。",
    proofItems: ["S3 兼容 list/diff", "Pi 诊断 agent", "HTTP 流量检查", "Chrome 商店产品"],
    aboutTitle: "关于",
    aboutDescription: "hxddh 的个人简介、Chrome 扩展和基础设施项目。",
    aboutHeadline: "围绕对象存储做工具。",
    aboutLead: "主要做三类事：让大桶更容易列举和对比，让 S3 兼容故障更容易诊断，让命令行工具背后的 HTTP 请求更容易看清。浏览器扩展保持很小，只解决一个日常问题。",
    productsLabel: "产品和项目",
    profileLabel: "简介",
    profileTitle: "这不是一组随手放在一起的项目。",
    profileBody: [
      "存储工具线贴近终端和运维现场：s3-turbo-list 用来 list / diff 大型 S3 兼容桶；StorageOps 给 Pi Agent 安装对象存储诊断 skills 和 tools；httpmon 暴露命令行里的 HTTP 和 HTTPS 流量。",
      "浏览器工具线更轻：世界时钟只做快速看时间，豆瓣电影评分助手只把 IMDb 和 Rotten Tomatoes 的参考信息带到豆瓣页面里。",
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
        headline: "对象存储的高速 list / diff CLI。",
        lead: "面向大型 S3 兼容桶：快速列出对象，对比两个 bucket，长任务可以中断后继续，结果直接写成 Parquet 继续分析。",
        primaryCta: { label: "查看 GitHub", href: "https://github.com/hxddh/s3-turbo-list" },
        secondaryCta: { label: "快速开始", href: "https://github.com/hxddh/s3-turbo-list#quick-start" },
        meta: "Rust · MIT License · S3-compatible · Parquet · Trace JSONL",
        proof: ["并发分段 list", "权威 bucket diff", "checkpoint / resume", "Parquet + DiffFlag 输出"],
        positioningLabel: "边界",
        positioning: [
          ["什么时候用", "要列一个很大的 bucket、对比迁移前后的两个 bucket，或者把对象元数据交给 DuckDB / pandas 继续分析。"],
          ["它不是什么", "不是备份工具，不是同步引擎，也不是图形化存储浏览器。它只做高速 list、可靠 diff 和结构化导出。"],
          ["会留下什么", "每个对象一行 Parquet；diff 模式下带 `DiffFlag`；另外还有 key-space 计数、checkpoint 状态，以及可选的 trace 或 manifest。"],
        ],
        featuresLabel: "能力",
        features: [
          ["分段 list", "自动发现 prefix 边界，切分 key space；遇到偏斜分段时继续拆分，默认就能并发递归列举。"],
          ["Bucket diff", "同时列举两侧 bucket，合并有序流，写出带 `DiffFlag` 的 Parquet，标记相同、左侧独有、右侧独有和已变化对象。"],
          ["断点续跑", "长时间 list 会定期保存进度。恢复时会校验 bucket、region、prefix、mode、segment count，避免接错任务。"],
          ["可分析输出", "默认流式写 Parquet，也支持 key-space CSV、NDJSON、TSV、summary-only、dry-run plan、manifest 和 trace summary。"],
        ],
        rationaleLabel: "为什么做",
        rationaleTitle: "核心就是 list 和 diff。",
        rationaleBody: [
          "对象存储工作经常从两个问题开始：这个桶里有什么？它和另一个桶有什么不同？对象数量一大，顺序列举会把这两个问题拖成漫长任务。",
          "s3-turbo-list 的产品面很小：把 list 和 diff 做快，把结果写干净，再给长任务补上 checkpoint 和必要的可观测性。",
        ],
        workflowLabel: "怎么用",
        workflow: [
          ["List", "并发递归扫描一个 bucket，把对象行写入 Parquet，或输出成 shell 友好的流式格式。"],
          ["Diff", "对比 source 和 target bucket，用稳定的 `DiffFlag` 标记每个对象的差异状态。"],
          ["Resume", "长时间 list 中断后，从 checkpoint 继续，不必重新扫完整个桶。"],
          ["Analyze", "用 DuckDB、pandas 或 CI 读取 Parquet，做统计、过滤、对比和报告。"],
        ],
        casesLabel: "兼容性",
        casesTitle: "面向真实 S3 兼容 endpoint。",
        casesBody: "先用 endpoint preset、compat-probe、trace 和校验报告摸清 provider 行为，再扩大扫描规模。",
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
        headline: "给 Pi 用的 S3 诊断 agent。",
        lead: "StorageOps 给 Pi Coding Agent 装上对象存储诊断能力：S3 skills、扩展 tools、确定性 helper scripts，以及用来约束行为的 eval cases。",
        primaryCta: { label: "查看 GitHub", href: "https://github.com/hxddh/storageops" },
        secondaryCta: { label: "快速开始", href: "https://github.com/hxddh/storageops#quick-start" },
        meta: "Python · Pi Coding Agent · S3-compatible · Redacted traces · Diagnostic skills",
        proof: ["15 个诊断 skills", "4 个 Pi 扩展 tools", "托管 httpmon helper", "Golden-case evals"],
        positioningLabel: "边界",
        positioning: [
          ["什么时候用", "希望让 Pi 帮你诊断 S3 兼容故障：AccessDenied、SlowDown、SignatureDoesNotMatch、checksum 异常、生命周期问题或迁移差异。"],
          ["它不是什么", "不是云控制台，不是存储 SDK，也不是监控平台。它是给 Pi 安装的一套诊断能力：skills、tools、helper scripts 和路由规则。"],
          ["安装后有什么", "Pi extension、15 个诊断 skill packs、4 个有界取证 tools、托管的 httpmon helper、确定性脚本和 eval cases。"],
        ],
        featuresLabel: "能力",
        features: [
          ["Skills 覆盖", "覆盖安全、协议兼容、CLI/SDK 行为、性能、网络、生命周期成本、复制、迁移、一致性、日志、通知和 triage。"],
          ["Pi tools", "`scan_secrets`、`detect_domain`、`search_memory`、`capture_http_trace` 负责路由问题和收集脱敏上下文。"],
          ["Helper scripts", "确定性脚本检查 policy、SigV4 输入、payload hash、ETag、限流、访问日志、迁移估算和 endpoint 可达性。"],
          ["Eval 约束", "Golden cases、skill/eval packs、size gates 和验证目标让 agent package 保持紧凑、可重复，也更容易安全修改。"],
        ],
        rationaleLabel: "为什么做",
        rationaleTitle: "agent 的能力来自 skills 和 tools。",
        rationaleBody: [
          "Pi 是运行时，StorageOps 是对象存储专家层。领域 skills 决定怎么判断问题，扩展 tools 负责收集有边界的上下文，避免把密钥直接塞进对话里。",
          "它的价值不在于“把错误丢给模型”，而在于 taxonomy、tools、helper scripts 和 regression cases 共同限定了 agent 的工作方式。",
        ],
        workflowLabel: "怎么用",
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
        description: "一个很轻的 Chrome 扩展，用来快速查看几个主要城市的当前时间。",
        eyebrow: "Chrome 扩展",
        headline: "一键查看世界时间。",
        lead: "世界时钟只做一件事：点开扩展，看一眼几个城市现在几点，然后回到手头的工作。",
        primaryCta: { label: "安装扩展", href: "https://chromewebstore.google.com/detail/world-clock/mghphbjnicggehnhbjbpjddfidkepnfp" },
        secondaryCta: { label: "返回简介", href: "/zh/about/" },
        meta: "Version 7.0 · Updated June 1, 2026 · 138 users · 44.08 KiB",
        proof: ["Chrome Web Store: Tools", "Version 7.0", "138 users", "声明不收集数据"],
        positioningLabel: "边界",
        positioning: [
          ["什么时候用", "远程协作、旅行安排、跨地区沟通时，想快速确认几个城市现在几点。"],
          ["它不是什么", "不是会议排期工具，也不是日历替代品。它故意保持很小，避免“查时间”变成另一套流程。"],
          ["打开后看到什么", "一个浏览器弹窗，显示主要城市当前时间，支持多语言；商店信息显示不收集用户数据。"],
        ],
        featuresLabel: "能力",
        features: [
          ["城市时间", "快速查看全球主要城市当前几点。"],
          ["界面很小", "为快速查询设计，不做复杂日历和排期。"],
          ["多语言", "支持 9 种语言，包括英文、中文、日文、韩文、法文、德文、西班牙文和葡萄牙文。"],
          ["隐私说明清楚", "Chrome Web Store 信息显示，这个扩展不会收集或使用用户数据。"],
        ],
        rationaleLabel: "详情",
        rationaleTitle: "小、快，并且原生运行在浏览器里。",
        rationaleBody: [
          "该扩展在 Chrome Web Store 中归类为 Tools，由 titpea.com 提供，安装包体积很轻。",
          "适合远程协作、旅行安排，或快速确认某个城市是否处于工作时间。",
        ],
        faqLabel: "问题与用法",
        faq: [
          ["会收集我的位置吗？", "商店信息显示不收集用户数据。它只做手动城市时间查询，不做位置追踪。"],
          ["适合拿来排会议吗？", "不适合。它比排期工具简单得多：打开弹窗，看一眼时间，然后继续工作。"],
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
        positioningLabel: "边界",
        positioning: [
          ["什么时候用", "浏览豆瓣电影页时，想顺手看看 IMDb 和 Rotten Tomatoes 的参考评分。"],
          ["它不是什么", "不是评分权威，也不是推荐引擎。它只是把外部评分补到你正在看的豆瓣页面里。"],
          ["页面里会多什么", "匹配到的 IMDb 分数、可用时显示的 Rotten Tomatoes 新鲜度、直接跳转链接，以及中英文片名匹配。"],
        ],
        featuresLabel: "能力",
        features: [
          ["IMDb 评分", "在豆瓣电影详情页显示 IMDb 分数。"],
          ["烂番茄新鲜度", "匹配可靠时，补充 Rotten Tomatoes 新鲜度。"],
          ["直接跳转", "点击评分，打开对应 IMDb 或 Rotten Tomatoes 页面。"],
          ["片名匹配", "支持中英文电影标题匹配。"],
        ],
        rationaleLabel: "详情",
        rationaleTitle: "一个页面里看完中外电影评分。",
        rationaleBody: [
          "Chrome Web Store 信息显示，该扩展属于 Entertainment 分类，由 titpea.com 提供。",
          "商店隐私说明显示开发者声明不会收集或使用用户数据，并提供了 GitHub 上的隐私政策链接。",
        ],
        faqLabel: "问题与用法",
        faq: [
          ["匹配不到电影时怎么办？", "找不到可靠匹配就不显示外部评分，豆瓣页面本身照常使用。"],
          ["它会替代豆瓣评分吗？", "不会。豆瓣仍然是主页面，它只是在旁边补充 IMDb 或 Rotten Tomatoes，方便原地对比。"],
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
