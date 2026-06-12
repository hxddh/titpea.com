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
    productIndex: "hxddh / independent software",
    homeTitle: "Small tools for the parts of infrastructure that need evidence.",
    homeLead: "Titpea collects a focused set of products by hxddh: storage inventory, object-storage diagnosis, command-line HTTPS inspection, and two lightweight browser utilities.",
    homePrimary: "s3-turbo-list",
    homeSecondary: "StorageOps",
    homeAbout: "About",
    featuredLabel: "Product map",
    storageLine: "Storage operations",
    storageTitle: "Inventory, diagnose, inspect.",
    browserLine: "Browser utilities",
    browserTitle: "Small context helpers.",
    thesisLabel: "Product thesis",
    thesisTitle: "The main line is storage evidence: inventory first, diagnosis second, traffic inspection when the answer is below the SDK.",
    thesisBody: "The storage products are intentionally adjacent. s3-turbo-list gives you a bucket inventory and traceable run artifacts. StorageOps turns logs, configs, and redacted traces into a diagnostic path. httpmon captures the HTTP layer when provider behavior, signing, redirects, or retries are unclear. The browser extensions are smaller utilities built with the same constraint: one job, a compact surface, and no data collection.",
    flowLabel: "Storage evidence flow",
    flowTitle: "From unknown bucket state to explainable failure.",
    flowBody: "Use the inventory tool when the question is “what is in this bucket and how did the provider behave while listing it?” Use StorageOps when the question is “why did this S3-compatible operation fail?” Use httpmon when the SDK or CLI hides the request/response details you need.",
    proofItems: ["S3-compatible operations", "Traceable CLI workflows", "Chrome Web Store products", "Bilingual site"],
    aboutTitle: "About",
    aboutDescription: "Personal profile, Chrome extensions, and infrastructure projects by hxddh.",
    aboutHeadline: "Building evidence-first tools for storage systems, traffic inspection, and everyday browser workflows.",
    aboutLead: "I make compact products with a narrow job: storage tools that explain what happened, and browser extensions that remove one small daily friction.",
    productsLabel: "Products and Projects",
    profileLabel: "Profile",
    profileTitle: "Practical software with a narrow job and a clear owner.",
    profileBody: [
      "The storage line starts from the same premise: before changing a system, capture enough evidence to understand it. s3-turbo-list inventories large buckets; StorageOps diagnoses failures; httpmon exposes command-line HTTP and HTTPS traffic.",
      "The browser line is deliberately smaller: World Clock gives quick time context, and Douban Movie Rating Assistant brings IMDb and Rotten Tomatoes context into Douban pages.",
    ],
    focusLabel: "Focus Areas",
    focusItems: [
      "S3-compatible inventory, diagnostics, and migration evidence",
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
    productIndex: "hxddh / 独立软件",
    homeTitle: "为基础设施里需要证据的部分，构建小而清晰的工具。",
    homeLead: "Titpea 收集 hxddh 的一组专注产品：存储桶清单、对象存储诊断、命令行 HTTPS 流量检查，以及两个轻量浏览器工具。",
    homePrimary: "s3-turbo-list",
    homeSecondary: "StorageOps",
    homeAbout: "关于",
    featuredLabel: "产品地图",
    storageLine: "存储运维",
    storageTitle: "清单、诊断、检查。",
    browserLine: "浏览器工具",
    browserTitle: "小而确定的上下文助手。",
    thesisLabel: "产品主线",
    thesisTitle: "主线是存储证据：先知道桶里有什么，再诊断为什么失败，必要时下钻到 HTTP 层。",
    thesisBody: "这些存储产品彼此相邻。s3-turbo-list 负责生成桶清单和可追踪运行产物；StorageOps 把日志、配置和脱敏 trace 组织成诊断路径；httpmon 在 SDK 或 CLI 隐藏请求细节时捕获 HTTP 层证据。浏览器扩展则更轻：一个任务、一个小界面，并且不收集用户数据。",
    flowLabel: "存储证据流",
    flowTitle: "从未知桶状态，到可解释的故障原因。",
    flowBody: "当问题是“这个桶里有什么，provider 在列举时表现如何”，用清单工具；当问题是“S3 兼容操作为什么失败”，用 StorageOps；当 SDK 或 CLI 隐藏了请求、响应、签名、重试和跳转细节时，用 httpmon。",
    proofItems: ["S3 兼容运维", "可追踪 CLI 工作流", "Chrome 商店产品", "中英双语站点"],
    aboutTitle: "关于",
    aboutDescription: "hxddh 的个人简介、Chrome 扩展和基础设施项目。",
    aboutHeadline: "构建证据优先的存储、流量检查和浏览器工作流工具。",
    aboutLead: "我做边界清晰的小产品：能解释发生了什么的存储工具，以及减少一个日常摩擦的浏览器扩展。",
    productsLabel: "产品和项目",
    profileLabel: "简介",
    profileTitle: "做目标清晰、边界明确、能被长期维护的软件。",
    profileBody: [
      "存储工具线从同一个前提出发：在改变系统之前，先捕获足够证据理解它。s3-turbo-list 生成大桶清单，StorageOps 诊断故障，httpmon 暴露命令行 HTTP 和 HTTPS 流量。",
      "浏览器工具线更小：世界时钟提供快速时间上下文，豆瓣电影评分助手把 IMDb 和 Rotten Tomatoes 上下文带到豆瓣页面。",
    ],
    focusLabel: "关注方向",
    focusItems: [
      "S3 兼容清单、诊断和迁移证据",
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
        description: "High-performance S3-compatible bucket listing, tracing, diffing, checkpoint/resume, and Parquet export.",
        eyebrow: "Rust CLI / Object Storage",
        headline: "List huge S3-compatible buckets without waiting on one slow chain.",
        lead: "s3-turbo-list is for the moment when a bucket is too large, too slow, or too important to inspect with a single sequential listing. It turns object metadata into auditable Parquet inventory and keeps enough trace data to explain the run later.",
        primaryCta: { label: "View on GitHub", href: "https://github.com/hxddh/s3-turbo-list" },
        secondaryCta: { label: "Quick start", href: "https://github.com/hxddh/s3-turbo-list#quick-start" },
        meta: "Rust · MIT License · S3-compatible · Parquet · Trace JSONL",
        proof: ["Automatic key-space discovery", "Runtime segment splitting", "Parquet / NDJSON / TSV / summary modes", "Dry-run and agent-friendly plans"],
        positioningLabel: "Positioning",
        positioning: [
          ["Use it when", "You need a complete bucket inventory, a migration baseline, a before/after diff, or evidence that a provider is listing objects slowly or unevenly."],
          ["It is not", "A backup system or storage browser. It focuses on listing, tracing, export, and comparison so the inventory can be analyzed elsewhere."],
          ["What you keep", "A manifest for the run, checkpoint state, trace JSONL for S3 calls, and analysis-ready output such as Parquet for DuckDB or pandas."],
        ],
        featuresLabel: "Capabilities",
        features: [
          ["Auto-discovered segments", "Probe real CommonPrefixes at startup, cache boundaries, and begin parallel recursive listing without hand tuning."],
          ["Trace JSONL", "Record every S3 API call as structured JSONL so provider behavior is observable after the run."],
          ["Checkpoint / resume", "Resume interrupted scans from saved segment progress with identity checks to avoid mismatched runs."],
          ["Analysis-ready output", "Write streaming Parquet by default, or use NDJSON, TSV, summary-only, and dry-run modes for shell and CI workflows."],
        ],
        rationaleLabel: "Why it exists",
        rationaleTitle: "Sequential listing works until the bucket is large enough to become an operation.",
        rationaleBody: [
          "Standard listing tools are often bound to a single ListObjectsV2 pagination chain. That is fine for small buckets, but painful when object counts move into millions or hundreds of millions.",
          "s3-turbo-list slices the key space, runs listing work in parallel, and keeps the run auditable through manifests, traces, checkpoints, and Parquet artifacts.",
        ],
        workflowLabel: "Workflow",
        workflow: [
          ["Preflight", "Run doctor or dry-run to confirm output paths, options, warnings, and whether the planned job makes sense before touching the bucket."],
          ["Discover", "Probe prefix structure and key-space boundaries so the scan can start with parallel work instead of one long pagination chain."],
          ["Scan", "List recursive buckets with bounded memory, runtime split for skewed segments, checkpoint state, manifest, and trace output."],
          ["Analyze", "Query Parquet with DuckDB or pandas, compare inventories, or inspect trace JSONL when provider behavior needs explanation."],
        ],
        casesLabel: "Compatibility",
        casesTitle: "Built for real S3-compatible endpoints, not only the happy path.",
        casesBody: "Endpoint presets, compat-probe, trace output, and validation reports make it easier to understand how each provider behaves before scaling up a scan.",
        cases: ["AWS S3", "MinIO", "Cloudflare R2", "BOS", "OSS", "B2"],
        finalCta: "Start with a dry-run, then keep the trace.",
        finalCtaLabel: "Open repository",
        faqLabel: "Questions & how-to",
        faq: [
          ["Why not just use aws s3 ls?", "For small buckets, a sequential listing is fine. s3-turbo-list is for large or operationally important buckets where you need parallelism, resumability, traces, and output that can be queried after the run."],
          ["Do I need to know the prefix structure first?", "No. The tool can probe the bucket at startup, discover key-space boundaries, and split skewed segments while it runs. Hints are useful for repeated jobs, but not required for the first inventory."],
          ["What should I inspect after a slow run?", "Start with the run manifest and trace JSONL. They show how the provider responded across segments, which makes it easier to distinguish normal object count, skewed prefixes, endpoint behavior, and retry patterns."],
        ],
      },
      zh: {
        title: "s3-turbo-list",
        description: "高性能 S3 兼容存储桶列举、追踪、差异对比、断点续跑和 Parquet 导出工具。",
        eyebrow: "Rust CLI / 对象存储",
        headline: "列举超大 S3 兼容存储桶，不再卡在一条慢分页链上。",
        lead: "s3-turbo-list 适合这样的时刻：一个桶太大、太慢，或者太关键，不能再靠单条顺序列举来理解。它把对象元数据变成可审计的 Parquet 清单，并保留足够 trace 让你事后解释这次运行。",
        primaryCta: { label: "查看 GitHub", href: "https://github.com/hxddh/s3-turbo-list" },
        secondaryCta: { label: "快速开始", href: "https://github.com/hxddh/s3-turbo-list#quick-start" },
        meta: "Rust · MIT License · S3-compatible · Parquet · Trace JSONL",
        proof: ["自动 key-space discovery", "运行时分段拆分", "Parquet / NDJSON / TSV / summary 输出", "Dry-run 和 agent-friendly plan"],
        positioningLabel: "定位",
        positioning: [
          ["适合场景", "需要完整桶清单、迁移基线、前后差异对比，或需要证明某个 provider 的列举行为很慢、很偏斜。"],
          ["它不做什么", "它不是备份系统，也不是图形化存储浏览器。它专注于列举、追踪、导出和对比，把清单交给后续分析工具。"],
          ["最终留下什么", "运行 manifest、checkpoint 状态、S3 调用 trace JSONL，以及适合 DuckDB 或 pandas 分析的 Parquet 等输出。"],
        ],
        featuresLabel: "能力",
        features: [
          ["自动发现分段", "启动时探测真实 CommonPrefixes，缓存边界，不需要手工调参就能开始并发递归列举。"],
          ["Trace JSONL", "把每一次 S3 API 调用记录成结构化 JSONL，便于在运行后观察 provider 行为。"],
          ["断点续跑", "从已保存的分段进度恢复中断扫描，并通过身份校验避免错配运行。"],
          ["可分析输出", "默认流式写入 Parquet，也可输出 NDJSON、TSV、summary-only 和 dry-run，适合 shell、CI 和审计流程。"],
        ],
        rationaleLabel: "为什么需要它",
        rationaleTitle: "顺序列举在小桶上没问题，但对象数量一大就会变成一次运维任务。",
        rationaleBody: [
          "常规列举工具通常绑定在单条 ListObjectsV2 分页链上。小桶还好，当对象数量达到百万、千万甚至更高时，这会非常痛苦。",
          "s3-turbo-list 会切分 key 空间，并行执行列举，并通过 manifest、trace、checkpoint 和 Parquet 产物让运行过程可审计。",
        ],
        workflowLabel: "工作流",
        workflow: [
          ["预检", "先运行 doctor 或 dry-run，确认输出路径、参数、警告，以及这次任务是否合理。"],
          ["发现", "探测 prefix 结构和 key-space 边界，让扫描从一开始就能并行，而不是卡在单条分页链上。"],
          ["扫描", "用有界内存、偏斜分段运行时拆分、checkpoint、manifest 和 trace 输出完成递归列举。"],
          ["分析", "用 DuckDB 或 pandas 查询 Parquet、对比多次清单，或查看 trace JSONL 解释 provider 行为。"],
        ],
        casesLabel: "兼容性",
        casesTitle: "面向真实 S3 兼容 endpoint，而不只是假设一切顺利。",
        casesBody: "Endpoint preset、compat-probe、trace 输出和校验报告可以帮助你在扩展扫描规模前理解每个 provider 的具体行为。",
        cases: ["AWS S3", "MinIO", "Cloudflare R2", "BOS", "OSS", "B2"],
        finalCta: "先 dry-run，再保留 trace。",
        finalCtaLabel: "打开仓库",
        faqLabel: "问题与用法",
        faq: [
          ["为什么不用 aws s3 ls？", "小桶当然可以用顺序列举。s3-turbo-list 面向的是大桶或关键运维场景：需要并发、断点续跑、trace，以及运行后可以继续查询分析的输出。"],
          ["必须提前知道 prefix 结构吗？", "不需要。工具启动时可以探测桶结构，自动发现 key-space 边界，并在运行中拆分偏斜分段。你可以给重复任务提供 hints，但第一次清点不依赖它。"],
          ["一次运行很慢时应该先看什么？", "先看 run manifest 和 trace JSONL。它们能展示 provider 在各个分段上的响应情况，帮助区分对象数量本身、prefix 偏斜、endpoint 行为和重试模式。"],
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
        description: "StorageOps is a Pi Coding Agent extension and skill pack for diagnosing S3-compatible object storage problems.",
        eyebrow: "Pi Extension / Object Storage Diagnostics",
        headline: "Diagnose S3-compatible storage failures from the evidence you already have.",
        lead: "StorageOps is a diagnostic layer for Pi Coding Agent. It helps turn scattered S3-compatible storage symptoms into a bounded investigation: classify the failure, collect redacted evidence, run deterministic checks, and produce next steps with confidence.",
        primaryCta: { label: "View on GitHub", href: "https://github.com/hxddh/storageops" },
        secondaryCta: { label: "Quick start", href: "https://github.com/hxddh/storageops#quick-start" },
        meta: "Python · Pi Coding Agent · S3-compatible · Redacted traces · Diagnostic skills",
        proof: ["16 skill/eval packs", "4 Pi extension tools", "Managed httpmon helper", "Golden cases and size gates"],
        positioningLabel: "Positioning",
        positioning: [
          ["Use it when", "An object-storage command fails and the error string alone is not enough: AccessDenied, SlowDown, SignatureDoesNotMatch, checksum drift, lifecycle surprises, or migration inconsistencies."],
          ["It is not", "A provider console replacement. It is a guided diagnostic pack for Pi that works from logs, configs, traces, and helper-script output."],
          ["What you get", "A likely domain, evidence to collect or inspect, confidence level, concrete checks, and safe next steps that avoid leaking credentials."],
        ],
        featuresLabel: "Capabilities",
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
          ["Describe", "Paste the symptom: CLI output, SDK stack trace, bucket policy excerpt, endpoint config, migration note, or short incident summary."],
          ["Classify", "The extension routes the issue to a focused storage domain such as auth, signing, throttling, consistency, lifecycle, notifications, or migration."],
          ["Collect", "Use redaction-first tools and helper scripts to inspect policy shape, SigV4 inputs, payload hashes, ETags, access logs, cost, or HTTP traces."],
          ["Decide", "Return likely cause, confidence, evidence, what to verify next, and which changes are safe to try."],
        ],
        casesLabel: "Cases",
        casesTitle: "Built for the messy middle of S3-compatible operations.",
        casesBody: "Use it when you have logs, command output, configs, a failed migration, or a suspicious provider behavior and need a structured diagnostic path.",
        cases: ["AccessDenied", "SlowDown", "SignatureDoesNotMatch", "BadDigest", "stale reads", "lifecycle surprises", "failed notifications", "migration drift"],
        finalCta: "Bring the error, keep the credentials out of the answer.",
        finalCtaLabel: "Open repository",
        faqLabel: "Questions & how-to",
        faq: [
          ["What should I paste first?", "Start with the smallest useful bundle: the exact error, command or SDK call, endpoint style, relevant config names, and a redacted log excerpt. StorageOps is designed to ask for narrower evidence when needed."],
          ["How does it avoid leaking secrets?", "The workflow emphasizes bounded evidence and redaction-first helpers such as secret scanning and HTTP trace capture that strips sensitive values before they become diagnostic context."],
          ["When should I use httpmon with it?", "Use httpmon when the failure depends on request details hidden by a CLI or SDK: canonical request shape, headers, redirects, retry behavior, payload hashes, or provider-specific response metadata."],
        ],
      },
      zh: {
        title: "StorageOps",
        description: "StorageOps 是用于诊断 S3 兼容对象存储问题的 Pi Coding Agent 扩展和技能包。",
        eyebrow: "Pi 扩展 / 对象存储诊断",
        headline: "用你手头已有的证据诊断 S3 兼容存储故障。",
        lead: "StorageOps 是给 Pi Coding Agent 使用的对象存储诊断层。它把分散的 S3 兼容存储症状整理成有边界的调查流程：先分类故障，再收集脱敏证据，运行确定性检查，最后给出带置信度的下一步。",
        primaryCta: { label: "查看 GitHub", href: "https://github.com/hxddh/storageops" },
        secondaryCta: { label: "快速开始", href: "https://github.com/hxddh/storageops#quick-start" },
        meta: "Python · Pi Coding Agent · S3-compatible · Redacted traces · Diagnostic skills",
        proof: ["16 个技能/评测包", "4 个 Pi 扩展工具", "托管 httpmon helper", "Golden cases 和 size gates"],
        positioningLabel: "定位",
        positioning: [
          ["适合场景", "对象存储命令失败，但错误字符串不够解释问题：AccessDenied、SlowDown、SignatureDoesNotMatch、checksum 漂移、生命周期异常或迁移不一致。"],
          ["它不做什么", "它不是 provider 控制台替代品，而是给 Pi 使用的诊断包，从日志、配置、trace 和辅助脚本输出里组织判断。"],
          ["最终得到什么", "可能的故障领域、需要收集或检查的证据、置信度、具体检查项，以及避免泄漏凭据的安全下一步。"],
        ],
        featuresLabel: "能力",
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
          ["描述", "粘贴症状：CLI 输出、SDK stack trace、bucket policy 片段、endpoint 配置、迁移备注或简短故障摘要。"],
          ["分类", "扩展把问题路由到鉴权、签名、限流、一致性、生命周期、通知或迁移等具体存储领域。"],
          ["取证", "用脱敏优先的工具和辅助脚本检查 policy 形状、SigV4 输入、payload hash、ETag、访问日志、成本或 HTTP trace。"],
          ["判断", "返回可能原因、置信度、证据、下一步验证项，以及哪些修改可以安全尝试。"],
        ],
        casesLabel: "场景",
        casesTitle: "面向 S3 兼容运维里最混乱、最真实的中间地带。",
        casesBody: "当你有日志、命令输出、配置、失败迁移或可疑的 provider 行为，并需要结构化诊断路径时，就可以使用它。",
        cases: ["AccessDenied", "SlowDown", "SignatureDoesNotMatch", "BadDigest", "stale reads", "lifecycle surprises", "failed notifications", "migration drift"],
        finalCta: "带上错误信息，但不要把凭据带进答案。",
        finalCtaLabel: "打开仓库",
        faqLabel: "问题与用法",
        faq: [
          ["一开始应该粘贴什么？", "先给最小但有用的信息：完整错误、命令或 SDK 调用、endpoint 形式、相关配置名，以及脱敏后的日志片段。StorageOps 会在需要时继续收窄证据。"],
          ["它如何避免泄漏密钥？", "流程强调有界证据和脱敏优先，配合 secret scanning、HTTP trace capture 等工具，在诊断上下文形成前尽量移除敏感值。"],
          ["什么时候要配合 httpmon？", "当故障取决于 CLI 或 SDK 隐藏的请求细节时使用：canonical request、headers、redirect、retry、payload hash 或 provider 特有响应元数据。"],
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
        headline: "IMDb and Rotten Tomatoes, right inside Douban movie pages.",
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
        rationaleTitle: "Compare Chinese and international movie ratings on one page.",
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
        { slug: "s3-turbo-list" as ProductSlug, text: "Choose this when you need a real inventory of a large bucket: resumable listing, trace files, manifests, diffing, and Parquet output." },
        { slug: "storageops" as ProductSlug, text: "Choose this when an S3-compatible operation fails and you need a diagnostic path across auth, signing, throttling, checksums, lifecycle, or migration." },
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
        { slug: "s3-turbo-list" as ProductSlug, text: "当你需要真正理解一个大桶：可恢复列举、trace 文件、manifest、差异对比和 Parquet 输出。" },
        { slug: "storageops" as ProductSlug, text: "当 S3 兼容操作失败，需要跨鉴权、签名、限流、checksum、生命周期或迁移做结构化诊断。" },
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
