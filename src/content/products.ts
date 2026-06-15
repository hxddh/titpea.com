import type { Product, ProductSlug } from "../lib/site";

export const productSlugs: ProductSlug[] = ["s3-turbo-list", "storageops", "world-clock", "douban-movie-rating"];

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
        description:
          "Automatic S3-compatible object storage list and diff CLI with startup discovery, agent-safe plans, run manifests, and Parquet output.",
        eyebrow: "Rust CLI / Automatic S3 Inventory",
        headline: "Automatic S3 inventory and diff",
        lead: "s3-turbo-list keeps the CLI small: list a large bucket, diff two buckets, and export Parquet while startup discovery, runtime splitting, dry-run plans, and run manifests handle the operational detail.",
        primaryCta: { label: "View on GitHub", href: "https://github.com/hxddh/s3-turbo-list" },
        secondaryCta: { label: "Quick start", href: "https://github.com/hxddh/s3-turbo-list#quick-start" },
        meta: "Rust · Apache-2.0 · v0.18.0 · S3-compatible · Parquet · Agent-safe JSON",
        proof: [
          "Startup discovery by default",
          "Throughput-aware runtime splitting",
          "Agent-safe dry-run plans",
          "Run manifests with local checks",
        ],
        positioningLabel: "Positioning",
        positioning: [
          [
            "Use it when",
            "You need an inventory or diff of a large S3-compatible bucket without first designing a partitioning plan or tuning a pile of flags.",
          ],
          [
            "It is not",
            "A backup tool, sync engine, or storage browser. It is one focused binary for automatic listing, bounded diffing, and machine-readable evidence.",
          ],
          [
            "What stays simple",
            "First runs parallelize with no hints file. Defaults pick the common path, while Parquet, manifests, trace JSONL, and stable exit codes keep the result inspectable.",
          ],
        ],
        featuresLabel: "Capabilities",
        features: [
          [
            "Automatic key-space discovery",
            "Startup delimiter probes find real prefix boundaries and cache them, so a first recursive list can run in parallel with no setup.",
          ],
          [
            "Throughput-aware fan-out",
            "Runtime splitting fans out long-tail segments while throughput is still improving, treating concurrency as an upper bound rather than a target.",
          ],
          [
            "Bounded diff",
            "Diff partitions both sides, lists them in parallel, and streams an ordered merge with `DiffFlag` rows without holding the combined keyspace in memory.",
          ],
          [
            "Adaptive Parquet output",
            "The writer stays single-file on rate-limited stores and automatically adds part-file writers only when Parquet encoding becomes the bottleneck.",
          ],
        ],
        rationaleLabel: "Why it exists",
        rationaleTitle: "Automation is the product",
        rationaleBody: [
          "Object storage work often starts with two primitive questions: what is in this bucket, and how does it differ from another bucket? The hard part is not adding knobs; it is making the default path fast, inspectable, and safe to automate.",
          "s3-turbo-list keeps the surface intentionally small. It discovers structure, adapts fan-out, writes analysis-ready artifacts, and exposes JSON plans and manifests so humans, CI jobs, and agents can all trust the run.",
        ],
        workflowLabel: "Workflow",
        workflow: [
          [
            "Preflight",
            "Run `doctor --json`, `doctor --simple`, or `--dry-run --agent` to resolve local config, planned outputs, and warnings before touching S3.",
          ],
          [
            "List or diff",
            "Use the default recursive list path, or diff two buckets; startup discovery and cached hints provide parallel segments automatically.",
          ],
          [
            "Verify artifacts",
            "Write a run manifest, then use `manifest-summary --check` to validate status, artifact hashes, row counts, schema metadata, and exit class.",
          ],
          [
            "Analyze",
            "Load Parquet into DuckDB, pandas, or pyarrow, or stream TSV/NDJSON when shell tools or agents need rows directly.",
          ],
        ],
        automationLabel: "Automation",
        automation: [
          [
            "Dry-run plans",
            "`--dry-run --agent` and `--plan-json` emit the resolved plan, output paths, config source, warnings, and file conflicts without S3 requests.",
          ],
          [
            "Run manifests",
            "`--run-manifest` records status, metrics, artifacts, warnings, SHA256, Parquet row counts, and schema metadata for completed runs.",
          ],
          [
            "Stable exit codes",
            "Exit classes distinguish validation, provider setup, network, output, data-validation, and interrupted runs for CI and agents.",
          ],
          [
            "Traceable provider behavior",
            "`compat-probe` and `--trace-compat` make endpoint behavior and S3 API calls visible before scaling a run.",
          ],
        ],
        examplesLabel: "Usage examples",
        examples: [
          [
            "First bucket inventory",
            "Run `list` with a bucket and region; startup discovery finds boundaries and writes Parquet plus key-space counts automatically.",
          ],
          [
            "Agent-safe preflight",
            "Generate a dry-run JSON plan before the scan, then let an agent inspect warnings, planned artifacts, and config source.",
          ],
          [
            "Migration diff",
            "Diff source and target buckets into one Parquet dataset with `DiffFlag`, then filter changed, left-only, and right-only rows downstream.",
          ],
        ],
        casesLabel: "Compatibility",
        casesTitle: "Real S3-compatible endpoints",
        casesBody:
          "Endpoint presets, compat-probe, trace JSONL, and provider-specific warnings make it easier to understand how each S3-compatible service behaves before scaling up a scan.",
        cases: ["AWS S3", "MinIO", "Cloudflare R2", "BOS", "OSS", "B2"],
        finalCta: "Start with an agent-safe dry-run",
        finalCtaLabel: "Open repository",
        faqLabel: "Questions & how-to",
        faq: [
          [
            "Why not just use aws s3 ls?",
            "For small buckets, sequential listing is fine. s3-turbo-list is for large buckets where the default path should discover structure, list in parallel, and leave structured artifacts.",
          ],
          [
            "Do I need to prepare hints first?",
            "No. Startup discovery probes real `CommonPrefixes` boundaries and caches them. Hints files are optional controls for repeated inventories.",
          ],
          [
            "What changed in v0.18.0?",
            "The project moved to Apache-2.0, adds `app/s3-turbo-list` to the S3 User-Agent for provider logs, and corrects the declared Rust MSRV.",
          ],
        ],
      },
      zh: {
        title: "s3-turbo-list",
        description:
          "自动化 S3 兼容对象存储 list / diff CLI，支持启动发现、适合 agent 的 plan、运行记录和 Parquet 输出。",
        eyebrow: "Rust CLI / 自动化 S3 对象清单",
        headline: "自动化 S3 list / diff CLI",
        lead: "s3-turbo-list 把命令面收得很小：列举大型存储桶、对比两个存储桶、输出 Parquet；前缀发现、运行时拆分、dry-run plan 和运行记录交给默认路径处理。",
        primaryCta: { label: "查看 GitHub", href: "https://github.com/hxddh/s3-turbo-list" },
        secondaryCta: { label: "快速开始", href: "https://github.com/hxddh/s3-turbo-list#quick-start" },
        meta: "Rust · Apache-2.0 · v0.18.0 · S3-compatible · Parquet · Agent-safe JSON",
        proof: ["默认启动发现", "吞吐感知运行时拆分", "适合 agent 的 dry-run plan", "可校验运行记录"],
        positioningLabel: "边界",
        positioning: [
          [
            "什么时候用",
            "需要列举一个很大的 S3 兼容存储桶，或对比两个存储桶，但不想先设计分区方案，也不想调一堆参数。",
          ],
          [
            "它不是什么",
            "不是备份工具，不是同步引擎，也不是图形化存储浏览器。它是一个聚焦的二进制：自动 list、可靠 diff，并留下机器可读证据。",
          ],
          [
            "哪里保持简单",
            "第一次运行不需要 hints 文件。默认路径负责并发，Parquet、运行记录、trace JSONL 和稳定退出码负责后续检查。",
          ],
        ],
        featuresLabel: "能力",
        features: [
          ["自动发现 key 空间", "启动时用少量 delimiter probe 找真实前缀边界并缓存，第一次递归 list 就能并发运行。"],
          ["吞吐感知并发展开", "运行时拆分长尾片段；只有吞吐继续上升时才增加并发，把并发数当上限而不是目标。"],
          [
            "有界 diff",
            "两侧存储桶并行列举，按 key 顺序流式合并，写出带 `DiffFlag` 的 Parquet，不把两边 key 空间全放进内存。",
          ],
          [
            "自适应 Parquet 输出",
            "受限于服务商吞吐时保持单文件；只有 Parquet 编码成为瓶颈时，才自动扩展成多个 part-file writer。",
          ],
        ],
        rationaleLabel: "为什么做",
        rationaleTitle: "产品核心是自动化",
        rationaleBody: [
          "对象存储工作经常从两个问题开始：这个桶里有什么？它和另一个桶有什么不同？难点不是继续加参数，而是让默认路径足够快、足够清楚、能被自动化系统信任。",
          "s3-turbo-list 刻意保持命令面很小：发现结构、调整并发、写出可分析产物，并提供 JSON plan 和运行记录，让人、CI 和 agent 都能判断一次运行是否可信。",
        ],
        workflowLabel: "怎么用",
        workflow: [
          [
            "Preflight",
            "先跑 `doctor --json`、`doctor --simple` 或 `--dry-run --agent`，在访问 S3 前解析配置、输出路径和 warning。",
          ],
          ["List / Diff", "直接 list 或 diff；启动发现和 hints cache 会自动提供并发片段。"],
          ["Verify", "写出运行记录，再用 `manifest-summary --check` 检查状态、hash、行数、schema 和退出分类。"],
          ["Analyze", "用 DuckDB、pandas 或 pyarrow 读取 Parquet；需要流式处理时输出 TSV / NDJSON。"],
        ],
        automationLabel: "自动化",
        automation: [
          [
            "Dry-run plan",
            "`--dry-run --agent` 和 `--plan-json` 在不访问 S3 的情况下输出配置来源、计划产物、warning 和文件冲突。",
          ],
          ["Run manifest", "`--run-manifest` 记录状态、指标、产物、warning、SHA256、Parquet 行数和 schema 元数据。"],
          ["稳定退出码", "把参数校验、服务商配置、网络、输出、数据校验和中断分成稳定退出码，方便 CI 和 agent 接入。"],
          ["Provider trace", "`compat-probe` 和 `--trace-compat` 在扩大扫描前暴露端点行为和真实 S3 API 调用。"],
        ],
        examplesLabel: "用法示例",
        examples: [
          ["第一次对象清单", "只给存储桶和 region 跑 `list`，启动发现会自动找边界，输出 Parquet 和 key 空间计数。"],
          ["Agent preflight", "扫描前生成 dry-run JSON plan，让 agent 先检查 warning、计划产物和配置来源。"],
          ["迁移 diff", "把源端和目标端 diff 成一份带 `DiffFlag` 的 Parquet，下游再过滤变更、左侧独有和右侧独有对象。"],
        ],
        casesLabel: "兼容性",
        casesTitle: "面向真实 S3 兼容端点",
        casesBody: "先用端点 preset、compat-probe、trace JSONL 和服务商 warning 摸清行为，再扩大扫描规模。",
        cases: ["AWS S3", "MinIO", "Cloudflare R2", "BOS", "OSS", "B2"],
        finalCta: "先做适合 agent 的 dry-run",
        finalCtaLabel: "打开仓库",
        faqLabel: "问题与用法",
        faq: [
          [
            "为什么不用 aws s3 ls？",
            "小桶当然可以。s3-turbo-list 面向的是大桶：默认路径要能自动发现结构、并发列举，并留下结构化产物。",
          ],
          [
            "必须提前准备 hints 吗？",
            "不需要。启动发现会探测真实 `CommonPrefixes` 边界并缓存。hints 文件只是重复生成对象清单时的可选控制。",
          ],
          [
            "v0.18.0 变了什么？",
            "项目切到 Apache-2.0，S3 User-Agent 增加 `app/s3-turbo-list`，并修正 Rust MSRV 声明。",
          ],
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
        description:
          "StorageOps is an object storage diagnosis agent built on Pi Coding Agent, with S3 diagnostic skills, Pi tools, helper scripts, and evals.",
        eyebrow: "Pi Agent / Object Storage Diagnosis",
        headline: "S3 diagnosis agent for Pi",
        lead: "StorageOps turns Pi Coding Agent into an object storage specialist by installing S3 diagnostic skills, Pi extension tools, deterministic helpers, and compact eval cases.",
        primaryCta: { label: "View on GitHub", href: "https://github.com/hxddh/storageops" },
        secondaryCta: { label: "Quick start", href: "https://github.com/hxddh/storageops#quick-start" },
        meta: "Python · Pi Coding Agent · S3-compatible · Redacted traces · Diagnostic skills",
        proof: ["15 diagnostic skills", "4 Pi extension tools", "Managed httpmon helper", "Golden-case evals"],
        positioningLabel: "Positioning",
        positioning: [
          [
            "Use it when",
            "You want Pi to diagnose S3-compatible failures such as AccessDenied, SlowDown, SignatureDoesNotMatch, checksum drift, lifecycle issues, or migration surprises.",
          ],
          [
            "It is not",
            "A cloud console, storage SDK, or standalone monitoring platform. It is an agent package: skills, tools, helper scripts, and routing rules for Pi.",
          ],
          [
            "What you install",
            "A Pi extension, 15 diagnostic skill packs, 4 tools for bounded evidence collection, a managed httpmon helper, deterministic scripts, and eval cases.",
          ],
        ],
        featuresLabel: "Capabilities",
        features: [
          [
            "Skill coverage",
            "Skills cover security, protocol compatibility, CLI/SDK behavior, performance, networking, lifecycle cost, replication, migration, consistency, logs, notifications, and triage.",
          ],
          [
            "Pi extension tools",
            "`scan_secrets`, `detect_domain`, `search_memory`, and `capture_http_trace` help Pi route the issue and gather redacted evidence.",
          ],
          [
            "Helper scripts",
            "Deterministic scripts inspect policies, SigV4 inputs, payload hashes, ETags, throttling, access logs, migration estimates, and endpoint reachability.",
          ],
          [
            "Eval discipline",
            "Golden cases, skill/eval packs, size gates, and validation targets keep the agent package compact, repeatable, and safer to change.",
          ],
        ],
        rationaleLabel: "Why it exists",
        rationaleTitle: "Skills and tools define the agent",
        rationaleBody: [
          "Pi is the runtime. StorageOps is the object-storage expertise layer: domain-specific skills decide how to reason, while extension tools collect bounded evidence without dumping secrets into the prompt.",
          "The product is useful because the agent has a taxonomy, tools, helper scripts, and regression cases. It is not a generic chatbot wrapper around S3 error messages.",
        ],
        workflowLabel: "Workflow",
        workflow: [
          [
            "Invoke Pi",
            "Run `storageops --print` or start an interactive Pi session with logs, errors, configs, or a short failure description.",
          ],
          [
            "Route to skills",
            "`detect_domain` and the skill taxonomy steer Pi toward auth, signing, throttling, consistency, lifecycle, migration, or another storage domain.",
          ],
          [
            "Use tools",
            "Pi can scan secrets, search prior sessions, or capture a sanitized HTTP trace through the managed httpmon helper.",
          ],
          [
            "Diagnose",
            "The agent returns likely cause, confidence, evidence, next checks, and safe changes grounded in the selected skills and tool output.",
          ],
        ],
        examplesLabel: "Usage examples",
        examples: [
          [
            "Signature mismatch",
            "Route SignatureDoesNotMatch into signing skills, inspect canonical request inputs, and compare provider-specific behavior.",
          ],
          [
            "Slow or throttled list",
            "Use performance and throttling skills with bounded helper output instead of guessing from SDK retries.",
          ],
          [
            "Migration drift",
            "Combine inventory evidence, lifecycle rules, checksum hints, and redacted traces before recommending the next check.",
          ],
        ],
        casesLabel: "Cases",
        casesTitle: "Object storage diagnosis domains",
        casesBody:
          "StorageOps is organized around recurring S3-compatible failure domains, with skills and tools that help Pi reason inside each one.",
        cases: [
          "AccessDenied",
          "SlowDown",
          "SignatureDoesNotMatch",
          "BadDigest",
          "stale reads",
          "lifecycle surprises",
          "failed notifications",
          "migration drift",
        ],
        finalCta: "Bring the error, leave out the secrets",
        finalCtaLabel: "Open repository",
        faqLabel: "Questions & how-to",
        faq: [
          [
            "What makes it an agent rather than a checklist?",
            "The Pi runtime can call StorageOps tools, load domain skills, search prior sessions, and combine deterministic helper output with reasoning.",
          ],
          [
            "What should I paste first?",
            "Start with the exact error, command or SDK call, endpoint style, relevant config names, and a redacted log excerpt. The skills and tools narrow the next evidence request.",
          ],
          [
            "When does capture_http_trace matter?",
            "Use it when the diagnosis depends on request details hidden by a CLI or SDK: headers, redirects, retry behavior, canonical request shape, payload hashes, or provider metadata.",
          ],
        ],
      },
      zh: {
        title: "StorageOps",
        description:
          "StorageOps 是构建在 Pi Coding Agent 之上的对象存储诊断 agent，包含诊断技能、Pi 工具、确定性脚本和回归用例。",
        eyebrow: "Pi Agent / 对象存储诊断",
        headline: "Pi 的 S3 诊断 agent",
        lead: "StorageOps 给 Pi 装上一套对象存储诊断能力：领域诊断技能、扩展工具、确定性脚本，以及约束输出口径的回归用例。",
        primaryCta: { label: "查看 GitHub", href: "https://github.com/hxddh/storageops" },
        secondaryCta: { label: "快速开始", href: "https://github.com/hxddh/storageops#quick-start" },
        meta: "Python · Pi Coding Agent · S3-compatible · Redacted traces · Diagnostic skills",
        proof: ["15 个诊断技能", "4 个 Pi 扩展工具", "托管 httpmon helper", "Golden-case evals"],
        positioningLabel: "边界",
        positioning: [
          [
            "什么时候用",
            "希望让 Pi 帮你诊断 S3 兼容故障：AccessDenied、SlowDown、SignatureDoesNotMatch、checksum 异常、生命周期问题或迁移差异。",
          ],
          [
            "它不是什么",
            "不是云控制台，不是存储 SDK，也不是监控平台。它是给 Pi 安装的一套诊断能力：技能、工具、脚本和路由规则。",
          ],
          [
            "安装后有什么",
            "Pi extension、15 个诊断技能包、4 个有界取证工具、托管的 httpmon helper、确定性脚本和回归用例。",
          ],
        ],
        featuresLabel: "能力",
        features: [
          [
            "诊断技能",
            "覆盖安全、协议兼容、CLI/SDK 行为、性能、网络、生命周期成本、复制、迁移、一致性、日志、通知和初步分诊。",
          ],
          [
            "Pi 工具",
            "`scan_secrets`、`detect_domain`、`search_memory`、`capture_http_trace` 负责路由问题和收集脱敏上下文。",
          ],
          ["辅助脚本", "确定性脚本检查 policy、SigV4 输入、payload hash、ETag、限流、访问日志、迁移估算和端点可达性。"],
          [
            "回归约束",
            "Golden cases、技能/评测包、size gates 和验证目标让 agent 包保持紧凑、可重复，也更容易安全修改。",
          ],
        ],
        rationaleLabel: "为什么做",
        rationaleTitle: "agent 的能力来自技能和工具",
        rationaleBody: [
          "Pi 是运行时，StorageOps 是对象存储专家层。领域技能决定怎么判断问题，扩展工具负责收集有边界的上下文，避免把密钥直接塞进对话里。",
          "它的价值不在于“把错误丢给模型”，而在于问题分类、取证工具、确定性脚本和回归用例共同限定了 agent 的工作方式。",
        ],
        workflowLabel: "怎么用",
        workflow: [
          ["启动 Pi", "用 `storageops --print` 或交互式 Pi session 输入日志、错误、配置或简短故障描述。"],
          ["路由技能", "`detect_domain` 和技能分类把问题导向鉴权、签名、限流、一致性、生命周期、迁移等领域。"],
          ["调用工具", "Pi 可以扫描密钥、搜索历史 session，或通过托管 httpmon helper 捕获脱敏 HTTP trace。"],
          ["生成诊断", "agent 基于选中的技能和工具输出返回可能原因、置信度、证据、下一步检查和安全修改建议。"],
        ],
        examplesLabel: "用法示例",
        examples: [
          ["签名错误", "把 SignatureDoesNotMatch 路由到签名诊断，检查 canonical request 输入，并对照服务商行为。"],
          ["List 变慢或被限流", "用性能和限流诊断加上 helper 输出判断，而不是只看 SDK 重试日志猜原因。"],
          ["迁移差异", "先组合对象清单、生命周期规则、checksum 线索和脱敏 trace，再给下一步检查建议。"],
        ],
        casesLabel: "场景",
        casesTitle: "对象存储诊断领域",
        casesBody: "StorageOps 围绕常见 S3 兼容故障组织诊断技能和取证工具，让 Pi 在具体领域内推理，而不是泛泛回答。",
        cases: [
          "AccessDenied",
          "SlowDown",
          "SignatureDoesNotMatch",
          "BadDigest",
          "stale reads",
          "lifecycle surprises",
          "failed notifications",
          "migration drift",
        ],
        finalCta: "带上错误，不带凭据",
        finalCtaLabel: "打开仓库",
        faqLabel: "问题与用法",
        faq: [
          [
            "为什么说它是 agent，而不是 checklist？",
            "Pi 运行时可以调用 StorageOps 工具、加载领域技能、搜索历史 session，并把确定性 helper 输出和推理结合起来。",
          ],
          [
            "一开始应该粘贴什么？",
            "先给完整错误、命令或 SDK 调用、端点形式、相关配置名，以及脱敏后的日志片段。技能和工具会继续收窄证据。",
          ],
          [
            "什么时候需要 capture_http_trace？",
            "当诊断依赖 CLI 或 SDK 隐藏的请求细节时使用：headers、redirect、retry、canonical request、payload hash 或服务商响应元数据。",
          ],
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
        headline: "A timezone feed in one click",
        lead: "World Clock is a small Chrome popup for live city time. It opens fast, shows work-hours context, and gets out of the way.",
        primaryCta: {
          label: "Install",
          href: "https://chromewebstore.google.com/detail/world-clock/mghphbjnicggehnhbjbpjddfidkepnfp",
        },
        secondaryCta: { label: "Back to profile", href: "/about/" },
        meta: "Chrome Web Store · Tools · No data collection disclosed",
        proof: ["Chrome Web Store: Tools", "Live city rows", "Light and dark themes", "No data collection disclosed"],
        positioningLabel: "Positioning",
        positioning: [
          [
            "Use it when",
            "You need a fast timezone glance during remote work, travel planning, or cross-region conversations.",
          ],
          [
            "It is not",
            "A scheduler, calendar, or timezone planning suite. It is a compact feed for checking the current time.",
          ],
          [
            "What you get",
            "A browser popup with city names, UTC offsets, live seconds, work-hour labels, date context, and no disclosed user-data collection.",
          ],
        ],
        featuresLabel: "Capabilities",
        features: [
          [
            "Live city rows",
            "Each row keeps the city, code, UTC offset, status, local time, seconds, and date in one scan line.",
          ],
          ["Two visual modes", "The extension supports a light paper-like theme and a dark terminal-style theme."],
          [
            "Multilingual",
            "Available in 9 languages including English, Chinese, Japanese, Korean, French, German, Spanish, and Portuguese.",
          ],
          [
            "Private by design",
            "The Chrome Web Store listing states that the extension does not collect or use user data.",
          ],
        ],
        rationaleLabel: "Details",
        rationaleTitle: "Small, fast, and browser-native",
        rationaleBody: [
          "The extension is listed under Tools in the Chrome Web Store and offered by titpea.com.",
          "Use it as a quick timezone glance for remote work, travel coordination, or checking whether a city is in business hours.",
        ],
        faqLabel: "Questions & how-to",
        faq: [
          [
            "Does it collect my location?",
            "The Chrome Web Store listing discloses no user-data collection. The extension is meant for manual city-time lookup, not location tracking.",
          ],
          [
            "Is it for scheduling meetings?",
            "No. It is intentionally simpler than a scheduler: open the popup, check the time, and return to what you were doing.",
          ],
        ],
      },
      zh: {
        title: "世界时钟",
        description: "一个很轻的 Chrome 扩展，用来快速查看几个主要城市的当前时间。",
        eyebrow: "Chrome 扩展",
        headline: "一键看世界时间",
        lead: "世界时钟是一个很小的 Chrome 弹窗。打开后直接看到城市、时区、当前时间、工作时段和日期，看完就回到手头的事。",
        primaryCta: {
          label: "安装扩展",
          href: "https://chromewebstore.google.com/detail/world-clock/mghphbjnicggehnhbjbpjddfidkepnfp",
        },
        secondaryCta: { label: "返回简介", href: "/zh/about/" },
        meta: "Chrome Web Store · Tools · 声明不收集数据",
        proof: ["Chrome Web Store: Tools", "城市时间行", "浅色和深色主题", "声明不收集数据"],
        positioningLabel: "边界",
        positioning: [
          ["什么时候用", "远程协作、旅行安排、跨地区沟通前，想快速确认几个城市现在几点、是不是工作时间。"],
          ["它不是什么", "不是排会工具，也不是日历替代品。它只是一眼看时间的浏览器弹窗。"],
          ["打开后看到什么", "城市名、城市代码、UTC 偏移、状态标签、实时秒数、日期，以及浅色和深色两种显示风格。"],
        ],
        featuresLabel: "能力",
        features: [
          ["城市时间行", "每个城市一行，左侧是城市和时区，中间是状态，右侧是本地时间和日期。"],
          ["浅色 / 深色", "真实界面有纸张质感的浅色主题，也有终端感更强的深色主题。"],
          ["多语言", "支持 9 种语言，包括英文、中文、日文、韩文、法文、德文、西班牙文和葡萄牙文。"],
          ["隐私说明清楚", "Chrome Web Store 信息显示，这个扩展不会收集或使用用户数据。"],
        ],
        rationaleLabel: "详情",
        rationaleTitle: "小、快，直接运行在浏览器里",
        rationaleBody: [
          "该扩展在 Chrome Web Store 中归类为 Tools，由 titpea.com 提供。",
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
        headline: "Global ratings inside Douban",
        lead: "Douban Movie Rating Assistant adds IMDb, Rotten Tomatoes, and Metacritic context to Douban movie pages while keeping Douban as the page you are reading.",
        primaryCta: {
          label: "Install",
          href: "https://chromewebstore.google.com/detail/%E8%B1%86%E7%93%A3%E7%94%B5%E5%BD%B1%E8%AF%84%E5%88%86%E5%8A%A9%E6%89%8B/alhcfchcficmeggkhcpkojoipdkkgoif",
        },
        secondaryCta: { label: "Back to profile", href: "/about/" },
        meta: "Chrome Web Store · Entertainment · No data collection disclosed",
        proof: [
          "Chrome Web Store: Entertainment",
          "IMDb context",
          "Rotten Tomatoes context",
          "No data collection disclosed",
        ],
        positioningLabel: "Positioning",
        positioning: [
          [
            "Use it when",
            "You browse Douban movie pages but want quick context from IMDb and Rotten Tomatoes before deciding what to watch.",
          ],
          [
            "It is not",
            "A rating authority or recommendation engine. It simply brings external rating context into the page you are already reading.",
          ],
          [
            "What you get",
            "IMDb score, Rotten Tomatoes freshness, Metacritic score when available, direct links, runtime/genre context, and title matching across Chinese and English names.",
          ],
        ],
        featuresLabel: "Capabilities",
        features: [
          ["IMDb rating", "Automatically shows IMDb scores on Douban movie detail pages."],
          ["Rotten Tomatoes", "Adds Rotten Tomatoes freshness when a reliable match is available."],
          ["Metacritic", "Shows Metacritic when the source data is available for the matched movie."],
          ["Direct jumps", "Click a rating to open the matching IMDb or Rotten Tomatoes page."],
          ["Title matching", "Supports intelligent matching across Chinese and English movie titles."],
        ],
        rationaleLabel: "Details",
        rationaleTitle: "Ratings in one view",
        rationaleBody: [
          "The Chrome Web Store listing places the extension under Entertainment and identifies titpea.com as the publisher.",
          "The store privacy disclosure states that the developer does not collect or use user data and links to the privacy policy on GitHub.",
        ],
        faqLabel: "Questions & how-to",
        faq: [
          [
            "What happens when a movie cannot be matched?",
            "The extension only shows external ratings when it can find a reliable match. The Douban page remains usable without the extra context.",
          ],
          [
            "Does it replace Douban ratings?",
            "No. It keeps Douban as the main page and adds IMDb or Rotten Tomatoes context so you can compare rating systems in place.",
          ],
        ],
      },
      zh: {
        title: "豆瓣电影评分助手",
        description: "在豆瓣电影页面补充 IMDb、Rotten Tomatoes 和 Metacritic 评分的 Chrome 扩展。",
        eyebrow: "Chrome 扩展",
        headline: "把海外评分补到豆瓣电影页",
        lead: "豆瓣电影评分助手不会替代豆瓣页面，而是在电影详情里补上 IMDb、Rotten Tomatoes 和 Metacritic 信息，让你原地对照不同评分体系。",
        primaryCta: {
          label: "安装扩展",
          href: "https://chromewebstore.google.com/detail/%E8%B1%86%E7%93%A3%E7%94%B5%E5%BD%B1%E8%AF%84%E5%88%86%E5%8A%A9%E6%89%8B/alhcfchcficmeggkhcpkojoipdkkgoif",
        },
        secondaryCta: { label: "返回简介", href: "/zh/about/" },
        meta: "Chrome Web Store · Entertainment · 声明不收集数据",
        proof: ["Chrome Web Store: Entertainment", "IMDb 参考评分", "烂番茄参考评分", "声明不收集数据"],
        positioningLabel: "边界",
        positioning: [
          ["什么时候用", "浏览豆瓣电影页时，想顺手看看 IMDb、Rotten Tomatoes 或 Metacritic 的参考评分。"],
          ["它不是什么", "不是评分权威，也不是推荐引擎。它只是把外部评分补到你正在看的豆瓣页面里。"],
          [
            "页面里会多什么",
            "匹配到的 IMDb 分数、烂番茄新鲜度、Metacritic 分数、类型/片长信息、直接跳转链接，以及中英文片名匹配。",
          ],
        ],
        featuresLabel: "能力",
        features: [
          ["IMDb 评分", "在豆瓣电影详情页显示 IMDb 分数。"],
          ["烂番茄新鲜度", "匹配可靠时，补充 Rotten Tomatoes 新鲜度。"],
          ["Metacritic", "有可用数据时，继续补充 Metacritic 分数。"],
          ["直接跳转", "点击评分，打开对应 IMDb 或 Rotten Tomatoes 页面。"],
          ["片名匹配", "支持中英文电影标题匹配。"],
        ],
        rationaleLabel: "详情",
        rationaleTitle: "一个页面里看完中外电影评分",
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

export const aboutProducts = ["world-clock", "douban-movie-rating", "s3-turbo-list", "storageops"] as ProductSlug[];
