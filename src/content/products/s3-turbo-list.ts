import type { StorageCliProduct } from "../../lib/site";
import { s3MetaLine, s3TurboListFacts } from "../productFacts";
import { siteConfig } from "../siteConfig";

const s3Release = s3TurboListFacts.latestRelease ?? "current release";
const s3License = s3TurboListFacts.licenseLabel ?? "current license";

export const s3TurboListProduct: StorageCliProduct = {
  slug: "s3-turbo-list",
  name: "s3-turbo-list",
  archetype: "storageCli",
  locales: {
    en: {
      title: "s3-turbo-list",
      description:
        "Fast S3-compatible list / diff CLI with checkpoint resume, trace JSONL, dry-run plans, run manifests, and Parquet output.",
      eyebrow: "Rust CLI",
      headline: "Fast, automatic S3 list / diff",
      lead: "Automatic segmentation for high-speed S3-compatible list / diff.",
      primaryCta: { label: "View on GitHub", href: siteConfig.externalLinks.s3TurboList },
      secondaryCta: { label: "Quick start", href: siteConfig.externalLinks.s3TurboListQuickStart },
      meta: s3MetaLine(),
      proof: ["Fast segmented list", "Checkpoint / resume", "Trace JSONL", `${s3License} · ${s3Release}`],
      positioningLabel: "Positioning",
      positioning: [
        {
          title: "Use it when",
          body: "You need to list a large S3-compatible bucket, compare two buckets, or turn object metadata into Parquet without building your own scanner.",
          intent: "fit",
          surface: "cli",
          priority: "primary",
        },
        {
          title: "It is not",
          body: "A backup tool, sync engine, or storage browser. It is one focused binary for list, diff, trace, resume, and analysis-ready output.",
          intent: "boundary",
          surface: "cli",
        },
        {
          title: "What stays inspectable",
          body: "Parquet, key-space CSV, trace JSONL, dry-run plans, run manifests, and stable exit codes make long runs easier to audit.",
          intent: "fit",
          surface: "artifact",
        },
      ],
      featuresLabel: "Capabilities",
      features: [
        {
          title: "Segmented list",
          body: "Auto-discovered or supplied key-space hints split a bucket into parallel segments for faster recursive list runs.",
          intent: "capability",
          evidence: "startup discovery",
          surface: "protocol",
        },
        {
          title: "Checkpoint / resume",
          body: "Interrupted scans resume from saved progress, with checkpoint identity checks to avoid silently resuming the wrong run.",
          intent: "capability",
          evidence: "runtime split",
          surface: "cli",
        },
        {
          title: "DiffFlag output",
          body: "Diff mode writes per-object `DiffFlag` rows into Parquet so downstream tools can filter equal, left-only, right-only, and changed objects.",
          intent: "capability",
          evidence: "DiffFlag rows",
          surface: "artifact",
        },
        {
          title: "Trace and probe",
          body: "`compat-probe` and trace JSONL show endpoint behavior, request metadata, latency, retries, and S3 errors before a full-scale run.",
          intent: "capability",
          evidence: "Parquet artifacts",
          surface: "artifact",
        },
      ],
      rationaleLabel: "Why it exists",
      rationaleTitle: "Fast list, clear artifacts",
      rationaleBody: [
        "Object storage work often starts with two questions: what is in this bucket, and what changed between two buckets? Standard tools are fine for small buckets, but large buckets need parallelism, recovery, and structured output.",
        "s3-turbo-list keeps the surface small: list, diff, trace, resume, and export. The value is not a bigger command set; it is a faster default path with artifacts you can inspect later.",
      ],
      workflowLabel: "Workflow",
      workflow: [
        {
          title: "Preflight",
          body: "Run `doctor --local-only --simple`, `config-inspect --json`, or `--dry-run --agent` before touching S3.",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "List or diff",
          body: "Run `list` for a bucket or `diff` for two buckets. List mode uses key-space segments; diff writes `DiffFlag` rows.",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "Verify artifacts",
          body: "Write a run manifest and trace JSONL, then check artifact hashes, row counts, schema metadata, and endpoint behavior.",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "Analyze",
          body: "Load Parquet into DuckDB, pandas, or pyarrow, or stream TSV/NDJSON when shell tools or agents need rows directly.",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      automationLabel: "Automation",
      automation: [
        {
          title: "Dry-run plans",
          body: "`--dry-run --agent` emits the resolved plan, output paths, config source, warnings, and file conflicts without S3 requests.",
          intent: "automation",
          evidence: "plan JSON",
          surface: "artifact",
        },
        {
          title: "Run manifests",
          body: "`--run-manifest` records status, metrics, artifacts, warnings, SHA256, Parquet row counts, and schema metadata for completed runs.",
          intent: "automation",
          evidence: "manifest-summary",
          surface: "artifact",
        },
        {
          title: "Stable exit codes",
          body: "Exit classes distinguish validation, provider setup, network, output, data validation, and interrupted runs for CI and agents.",
          intent: "automation",
          surface: "cli",
        },
        {
          title: "Traceable provider behavior",
          body: "`compat-probe` and `--trace-compat` make endpoint behavior and S3 API calls visible before scaling a run.",
          intent: "automation",
          evidence: "trace JSONL",
          surface: "protocol",
        },
      ],
      examplesLabel: "Usage examples",
      examples: [
        {
          title: "Large bucket list",
          body: "Run `list` with a bucket and region to write Parquet plus key-space counts for later analysis.",
          intent: "example",
          surface: "cli",
        },
        {
          title: "Interrupted scan",
          body: "Resume a long list after Ctrl-C, crash, or network failure without silently mixing incompatible checkpoints.",
          intent: "example",
          surface: "agent",
        },
        {
          title: "Migration diff",
          body: "Diff source and target buckets into one Parquet dataset with `DiffFlag`, then filter changed rows downstream.",
          intent: "example",
          surface: "artifact",
        },
      ],
      casesLabel: "Compatibility",
      casesTitle: "Real S3-compatible endpoints",
      casesBody:
        "Endpoint presets, compat-probe, trace JSONL, and provider-specific warnings make it easier to understand how each S3-compatible service behaves before scaling up a scan.",
      cases: ["AWS S3", "MinIO", "Cloudflare R2", "BOS", "OSS", "B2"],
      finalCta: "Start with a dry-run plan",
      finalCtaLabel: "Open repository",
      faqLabel: "Questions & how-to",
      faq: [
        {
          title: "Why not just use aws s3 ls?",
          body: "For small buckets, sequential listing is fine. s3-turbo-list is for large buckets where parallel list, resume, trace, and Parquet output matter.",
        },
        {
          title: "Do I need to prepare hints first?",
          body: "No. Startup discovery probes real `CommonPrefixes` boundaries and caches them. Hints files are optional controls for repeated inventories.",
        },
        {
          title: `What changed in ${s3Release}?`,
          body: `The release fixes root-segment retry resume behavior, adds timeouts to runtime split-probe requests, and keeps clean interrupts from inflating run-manifest fatal errors. The project remains ${s3License}.`,
        },
      ],
    },
    zh: {
      title: "s3-turbo-list",
      description: "高性能 S3 兼容 list / diff CLI，支持断点续跑、trace JSONL、dry-run plan、运行记录和 Parquet 输出。",
      eyebrow: "Rust CLI",
      headline: "自动化高速 S3 list / diff",
      lead: "自动分段，高速完成 S3 兼容存储的 list / diff。",
      primaryCta: { label: "查看 GitHub", href: siteConfig.externalLinks.s3TurboList },
      secondaryCta: { label: "快速开始", href: siteConfig.externalLinks.s3TurboListQuickStart },
      meta: s3MetaLine(),
      proof: ["并行分段 list", "断点续跑", "Trace JSONL", `${s3License} · ${s3Release}`],
      positioningLabel: "边界",
      positioning: [
        {
          title: "什么时候用",
          body: "需要列举大规模 S3 兼容存储、对比两端对象，或把对象元数据写成 Parquet。",
          intent: "fit",
          surface: "cli",
          priority: "primary",
        },
        {
          title: "它不是什么",
          body: "不是备份工具、同步引擎或图形化浏览器。它只做 list、diff、trace、续跑和可分析输出。",
          intent: "boundary",
          surface: "cli",
        },
        {
          title: "留下什么记录",
          body: "Parquet、key-space CSV、trace JSONL、dry-run plan、运行记录和稳定退出码，方便事后复查。",
          intent: "fit",
          surface: "artifact",
        },
      ],
      featuresLabel: "能力",
      features: [
        {
          title: "并行分段 list",
          body: "自动发现或手动提供 key-space hints，把一个存储桶拆成多个片段并行列举。",
          intent: "capability",
          evidence: "startup discovery",
          surface: "protocol",
        },
        {
          title: "断点恢复",
          body: "长任务中断后可从 checkpoint 继续，并用身份校验避免接错任务。",
          intent: "capability",
          evidence: "runtime split",
          surface: "cli",
        },
        {
          title: "DiffFlag 输出",
          body: "diff 会写出带 `DiffFlag` 的 Parquet，方便下游筛出相同、仅左侧、仅右侧和已变化的对象。",
          intent: "capability",
          evidence: "DiffFlag rows",
          surface: "artifact",
        },
        {
          title: "Trace 与兼容性探测",
          body: "`compat-probe` 和 trace JSONL 会记录端点行为、请求元数据、延迟、重试和 S3 错误。",
          intent: "capability",
          evidence: "Parquet 产物",
          surface: "artifact",
        },
      ],
      rationaleLabel: "为什么做",
      rationaleTitle: "大规模 list，也要可复查",
      rationaleBody: [
        "对象存储排查常从两个问题开始：这里有哪些对象？两端有什么差异？小规模任务用常规工具就够，大规模任务需要并行、续跑和结构化输出。",
        "s3-turbo-list 的命令面很小：list、diff、trace、resume、export。重点不是更多参数，而是更快的默认流程和可复查的结果。",
      ],
      workflowLabel: "怎么用",
      workflow: [
        {
          title: "先检查配置",
          body: "先运行 `doctor --local-only --simple`、`config-inspect --json` 或 `--dry-run --agent`，确认配置后再访问 S3。",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "执行 list 或 diff",
          body: "用 `list` 列举一端，用 `diff` 对比两端。list 会按 key-space 分段；diff 输出 `DiffFlag`。",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "核对结果",
          body: "写出运行记录和 trace JSONL，再检查哈希、行数、schema 和端点行为。",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "继续分析",
          body: "用 DuckDB、pandas 或 pyarrow 读取 Parquet；需要流式处理时可输出 TSV / NDJSON。",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      automationLabel: "自动化",
      automation: [
        {
          title: "Dry-run 计划",
          body: "`--dry-run --agent` 不访问 S3，也能输出配置来源、计划产物、告警和文件冲突。",
          intent: "automation",
          evidence: "plan JSON",
          surface: "artifact",
        },
        {
          title: "运行记录",
          body: "`--run-manifest` 记录状态、指标、产物、告警、SHA256、Parquet 行数和 schema 元数据。",
          intent: "automation",
          evidence: "manifest-summary",
          surface: "artifact",
        },
        {
          title: "稳定退出码",
          body: "把参数校验、服务商配置、网络、输出、数据校验和中断分成稳定退出码，方便 CI 和 Agent 接入。",
          intent: "automation",
          surface: "cli",
        },
        {
          title: "端点 trace",
          body: "`compat-probe` 和 `--trace-compat` 在扩大扫描前记录端点行为和真实 S3 API 调用。",
          intent: "automation",
          evidence: "trace JSONL",
          surface: "protocol",
        },
      ],
      examplesLabel: "用法示例",
      examples: [
        {
          title: "列举大规模对象",
          body: "给出存储桶和 region 运行 `list`，输出 Parquet 和 key-space 计数，后续可直接分析。",
          intent: "example",
          surface: "cli",
        },
        {
          title: "中断后恢复",
          body: "长任务被 Ctrl-C、崩溃或网络问题打断后，可以通过 checkpoint 安全续跑。",
          intent: "example",
          surface: "agent",
        },
        {
          title: "对比迁移结果",
          body: "把源端和目标端 diff 成一份带 `DiffFlag` 的 Parquet，下游再筛出变化对象。",
          intent: "example",
          surface: "artifact",
        },
      ],
      casesLabel: "兼容性",
      casesTitle: "面向真实 S3 兼容端点",
      casesBody: "先用端点 preset、compat-probe、trace JSONL 和服务商告警摸清行为，再扩大扫描规模。",
      cases: ["AWS S3", "MinIO", "Cloudflare R2", "BOS", "OSS", "B2"],
      finalCta: "先跑一次 dry-run",
      finalCtaLabel: "打开仓库",
      faqLabel: "问题与用法",
      faq: [
        {
          title: "为什么不用 aws s3 ls？",
          body: "小规模任务当然可以。s3-turbo-list 面向大规模对象：并行 list、断点续跑、trace 和 Parquet 输出更重要。",
        },
        {
          title: "必须提前准备 hints 吗？",
          body: "不需要。启动发现会探测真实 `CommonPrefixes` 边界并缓存。hints 文件只是在反复生成对象 list 时提供额外控制。",
        },
        {
          title: `${s3Release} 变了什么？`,
          body: `这版修复 root segment retry 的续扫边界，给运行时 split probe 加 timeout，并避免干净中断把 run manifest 的 fatal errors 计高。项目仍然是 ${s3License}。`,
        },
      ],
    },
  },
};
