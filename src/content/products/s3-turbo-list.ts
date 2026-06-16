import type { Product } from "../../lib/site";
import { s3MetaLine, s3TurboListFacts } from "../productFacts";

const s3Release = s3TurboListFacts.latestRelease ?? "current release";
const s3License = s3TurboListFacts.licenseLabel ?? "current license";

export const s3TurboListProduct: Product = {
  slug: "s3-turbo-list",
  current: "s3-turbo-list",
  name: "s3-turbo-list",
  category: "storage",
  archetype: "storageCli",
  role: "inventory",
  visual: "terminal",
  locales: {
    en: {
      title: "s3-turbo-list",
      description:
        "Automatic S3-compatible object storage list and diff CLI with startup discovery, agent-safe plans, run manifests, and Parquet output.",
      eyebrow: "Rust CLI / Automatic S3 Inventory",
      headline: "Automatic S3 inventory and diff",
      lead: "A focused CLI for large S3-compatible buckets: list, diff, and export Parquet while startup discovery, runtime splitting, dry-run plans, and run manifests handle the operational detail.",
      primaryCta: { label: "View on GitHub", href: "https://github.com/hxddh/s3-turbo-list" },
      secondaryCta: { label: "Quick start", href: "https://github.com/hxddh/s3-turbo-list#quick-start" },
      meta: s3MetaLine(),
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
          "First runs parallelize with no hints file. Defaults choose the common path; Parquet, manifests, trace JSONL, and stable exit codes keep the result inspectable.",
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
          "The writer stays single-file on rate-limited stores and adds part-file writers only when Parquet encoding becomes the bottleneck.",
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
          "Exit classes distinguish validation, provider setup, network, output, data validation, and interrupted runs for CI and agents.",
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
          `What changed in ${s3Release}?`,
          `The release fixes root-segment retry resume behavior, adds timeouts to runtime split-probe requests, and keeps clean interrupts from inflating run-manifest fatal errors. The project remains ${s3License}.`,
        ],
      ],
    },
    zh: {
      title: "s3-turbo-list",
      description: "自动化 S3 兼容对象存储 list / diff CLI，支持启动发现、dry-run plan、运行记录和 Parquet 输出。",
      eyebrow: "Rust CLI / 自动化对象清单",
      headline: "自动化 S3 list / diff CLI",
      lead: "一个聚焦的大桶 list / diff 工具：列举、对比、输出 Parquet；前缀发现、运行时拆分、dry-run plan 和运行记录由默认路径完成。",
      primaryCta: { label: "查看 GitHub", href: "https://github.com/hxddh/s3-turbo-list" },
      secondaryCta: { label: "快速开始", href: "https://github.com/hxddh/s3-turbo-list#quick-start" },
      meta: s3MetaLine(),
      proof: ["默认启动发现", "按吞吐拆分长尾片段", "dry-run plan", "可校验运行记录"],
      positioningLabel: "边界",
      positioning: [
        ["什么时候用", "需要列举很大的 S3 兼容桶，或对比两个桶，但不想先设计分区方案，也不想调一堆参数。"],
        ["它不是什么", "不是备份工具、同步引擎或图形化存储浏览器。它只做自动 list、可靠 diff 和机器可读证据。"],
        [
          "哪里保持简单",
          "第一次运行不需要 hints 文件。默认路径负责并发；Parquet、运行记录、trace JSONL 和稳定退出码负责后续检查。",
        ],
      ],
      featuresLabel: "能力",
      features: [
        ["自动发现 key 空间", "启动时用少量 delimiter probe 找真实前缀边界并缓存，第一次递归 list 就能并发运行。"],
        ["按吞吐展开并发", "运行时拆分长尾片段；只有吞吐继续上升时才增加并发，把并发数当上限而不是目标。"],
        ["有界 diff", "两侧桶并行列举，按 key 顺序流式合并，写出带 `DiffFlag` 的 Parquet，不把两边 key 全放进内存。"],
        [
          "自适应 Parquet 输出",
          "受限于服务商吞吐时保持单文件；只有 Parquet 编码成为瓶颈时，才扩展成多个 part-file writer。",
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
        ["服务商 trace", "`compat-probe` 和 `--trace-compat` 在扩大扫描前暴露端点行为和真实 S3 API 调用。"],
      ],
      examplesLabel: "用法示例",
      examples: [
        ["第一次对象清单", "只给桶和 region 跑 `list`，启动发现会自动找边界，输出 Parquet 和 key 空间计数。"],
        ["Agent preflight", "扫描前生成 dry-run JSON plan，让 agent 先检查 warning、计划产物和配置来源。"],
        ["迁移 diff", "把源端和目标端 diff 成一份带 `DiffFlag` 的 Parquet，下游再过滤变更、左侧独有和右侧独有对象。"],
      ],
      casesLabel: "兼容性",
      casesTitle: "面向真实 S3 兼容端点",
      casesBody: "先用端点 preset、compat-probe、trace JSONL 和服务商 warning 摸清行为，再扩大扫描规模。",
      cases: ["AWS S3", "MinIO", "Cloudflare R2", "BOS", "OSS", "B2"],
      finalCta: "先做 dry-run plan",
      finalCtaLabel: "打开仓库",
      faqLabel: "问题与用法",
      faq: [
        [
          "为什么不用 aws s3 ls？",
          "小桶当然可以。s3-turbo-list 面向大桶：默认路径要能自动发现结构、并发列举，并留下结构化产物。",
        ],
        [
          "必须提前准备 hints 吗？",
          "不需要。启动发现会探测真实 `CommonPrefixes` 边界并缓存。hints 文件只是重复生成对象清单时的可选控制。",
        ],
        [
          `${s3Release} 变了什么？`,
          `这版修复 root segment retry 的续扫边界，给运行时 split probe 加 timeout，并避免干净中断把 run manifest 的 fatal errors 计高。项目仍然是 ${s3License}。`,
        ],
      ],
    },
  },
};
