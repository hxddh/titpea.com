import type { S3TurboListProduct } from "../../lib/site";
import { s3MetaLine, s3TurboListFacts } from "../productFacts";
import { siteConfig } from "../siteConfig";

const s3Release = s3TurboListFacts.latestRelease ?? "current release";
const s3License = s3TurboListFacts.licenseLabel ?? "current license";

export const s3TurboListProduct: S3TurboListProduct = {
  slug: "s3-turbo-list",
  name: "s3-turbo-list",
  archetype: "s3TurboList",
  locales: {
    en: {
      title: "s3-turbo-list",
      description: "Automatic, high-speed S3-compatible list / diff with analysis-ready output.",
      eyebrow: "Rust CLI",
      headline: "Automatic, fast S3 list / diff",
      lead: "A CLI that discovers parallel work for large S3-compatible list / diff runs.",
      primaryCta: { label: "View on GitHub", href: siteConfig.externalLinks.s3TurboList },
      secondaryCta: { label: "Quick start", href: siteConfig.externalLinks.s3TurboListQuickStart },
      meta: s3MetaLine(),
      proof: ["Automatic list segmentation", "DiffFlag Parquet", "Resume for list", `${s3License} · ${s3Release}`],
      positioningLabel: "Positioning",
      positioning: [
        {
          title: "Use it when",
          body: "You need a large object list or a source-to-target comparison, without building and tuning a scanner first.",
          intent: "fit",
          surface: "cli",
          priority: "primary",
        },
        {
          title: "It is not",
          body: "A backup tool, sync engine, or storage browser. It reads object metadata and leaves a result you can inspect.",
          intent: "boundary",
          surface: "cli",
        },
        {
          title: "What stays inspectable",
          body: "List writes Parquet; diff writes ordered DiffFlag rows. Plans, manifests, and traces stay available when a run needs review.",
          intent: "fit",
          surface: "artifact",
        },
      ],
      featuresLabel: "Capabilities",
      features: [
        {
          title: "Segmented list",
          body: "List reads real prefix boundaries, then opens parallel segments without requiring a prepared hints file.",
          intent: "capability",
          evidence: "startup discovery",
          surface: "protocol",
        },
        {
          title: "Checkpoint / resume",
          body: "Long list runs can continue from a checkpoint without silently attaching progress to a different run.",
          intent: "capability",
          evidence: "runtime split",
          surface: "cli",
        },
        {
          title: "DiffFlag output",
          body: "Diff writes one Parquet dataset with `DiffFlag` rows for equal, left-only, right-only, and changed objects.",
          intent: "capability",
          evidence: "DiffFlag rows",
          surface: "artifact",
        },
        {
          title: "Trace and probe",
          body: "Probe an endpoint before a long run, and keep a trace only when request-level evidence is needed.",
          intent: "capability",
          evidence: "Parquet artifacts",
          surface: "artifact",
        },
      ],
      rationaleLabel: "Why it exists",
      rationaleTitle: "The useful work starts after the scan",
      rationaleBody: [
        "A large-bucket scan is rarely the end of the task. You need an object list for analysis, or a difference set to decide whether a migration is complete.",
        "s3-turbo-list makes those answers its default output. It keeps the command surface small and exposes planning, recovery, and evidence only when the run needs them.",
      ],
      workflowLabel: "Workflow",
      workflow: [
        {
          title: "Decide the job",
          body: "Use list for one bucket's object list, or diff for the difference between source and target.",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "Let the scan adapt",
          body: "List discovers usable boundaries and expands parallel work; diff lists both sides and merges them in key order.",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "Use the result",
          body: "Read Parquet directly in DuckDB, pandas, pyarrow, or another downstream tool.",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "Review when needed",
          body: "A dry-run, run manifest, trace, and stable exit code make an automated run easier to verify later.",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      automationLabel: "Automation",
      automation: [
        {
          title: "Plan before requests",
          body: "`--dry-run --agent` resolves configuration, outputs, warnings, and file conflicts without contacting S3.",
          intent: "automation",
          evidence: "plan JSON",
          surface: "artifact",
        },
        {
          title: "Leave a reviewable run",
          body: "Run manifests, optional trace JSONL, and stable exit codes give CI or an agent enough context to understand what happened.",
          intent: "automation",
          evidence: "manifest-summary",
          surface: "artifact",
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
      casesTitle: "Check the endpoint before scaling up",
      casesBody:
        "AWS S3, MinIO, and BOS are covered by the project’s verified compatibility path. R2, OSS, and B2 have presets; run `compat-probe` before trusting a long job on any endpoint.",
      cases: [
        "Verified: AWS S3",
        "Verified: MinIO",
        "Verified: BOS",
        "Preset: Cloudflare R2",
        "Preset: OSS",
        "Preset: B2",
      ],
      finalCta: "Start with a dry-run plan",
      finalCtaLabel: "Open repository",
      faqLabel: "Questions & how-to",
      faq: [
        {
          title: "Why not just use aws s3 ls?",
          body: "For a quick, small inspection, `aws s3 ls` is often enough. s3-turbo-list is for large inventories and repeatable comparisons where output and recovery matter.",
        },
        {
          title: "Do I need to prepare hints first?",
          body: "No. List mode probes real `CommonPrefixes` boundaries on the first run. Hints files remain an optional control for repeated inventories.",
        },
        {
          title: `What changed in ${s3Release}?`,
          body: `${s3Release} makes Baidu BOS fully compatible with the S3 ListObjectsV2 path and removes the BOS-specific defensive path. The project is ${s3License}.`,
        },
        {
          title: "Which endpoints are verified?",
          body: "AWS S3, MinIO, and BOS are verified in the project path. R2, OSS, and B2 ship presets — run `compat-probe` before a long job on any endpoint.",
        },
      ],
    },
    zh: {
      title: "s3-turbo-list",
      description: "自动分段的高速 S3 兼容 list / diff，输出可直接分析的结果。",
      eyebrow: "Rust CLI",
      headline: "自动、快速的 S3 list / diff",
      lead: "面向大规模 S3 兼容存储，自动发现可并行的 list / diff 工作。",
      primaryCta: { label: "查看 GitHub", href: siteConfig.externalLinks.s3TurboList },
      secondaryCta: { label: "快速开始", href: siteConfig.externalLinks.s3TurboListQuickStart },
      meta: s3MetaLine(),
      proof: ["自动分段 list", "DiffFlag Parquet", "list 可续跑", `${s3License} · ${s3Release}`],
      positioningLabel: "边界",
      positioning: [
        {
          title: "什么时候用",
          body: "需要列出大量对象，或核对源端和目标端的差异，又不想先搭建并调试一套扫描器。",
          intent: "fit",
          surface: "cli",
          priority: "primary",
        },
        {
          title: "它不是什么",
          body: "不是备份工具、同步引擎或图形化浏览器。它读取对象元数据，并留下可复查的结果。",
          intent: "boundary",
          surface: "cli",
        },
        {
          title: "留下什么记录",
          body: "list 写出 Parquet，diff 写出带 DiffFlag 的差异结果；计划、运行记录和 trace 按需保留。",
          intent: "fit",
          surface: "artifact",
        },
      ],
      featuresLabel: "能力",
      features: [
        {
          title: "并行分段 list",
          body: "list 会读取真实前缀边界，再并行列举，不必预先准备 hints 文件。",
          intent: "capability",
          evidence: "startup discovery",
          surface: "protocol",
        },
        {
          title: "断点恢复",
          body: "长时间 list 中断后可从 checkpoint 继续，也不会误接到另一个任务上。",
          intent: "capability",
          evidence: "runtime split",
          surface: "cli",
        },
        {
          title: "DiffFlag 输出",
          body: "diff 会写出带 `DiffFlag` 的 Parquet，下游可直接筛出相同、仅左侧、仅右侧和变化的对象。",
          intent: "capability",
          evidence: "DiffFlag rows",
          surface: "artifact",
        },
        {
          title: "Trace 与兼容性探测",
          body: "长任务前先探测端点；只有需要请求级证据时，再保留 trace。",
          intent: "capability",
          evidence: "Parquet 产物",
          surface: "artifact",
        },
      ],
      rationaleLabel: "为什么做",
      rationaleTitle: "扫描之后，才是真正要做的事",
      rationaleBody: [
        "大规模扫描通常不是终点。你需要一份 list 结果继续分析，或需要差异结果判断一次迁移是否完成。",
        "s3-turbo-list 默认留下这两种结果。计划、恢复和证据能力只在任务需要时出现，命令本身保持克制。",
      ],
      workflowLabel: "怎么用",
      workflow: [
        {
          title: "先决定要回答什么",
          body: "list 用来盘点一个桶；diff 用来判断源端和目标端有什么差异。",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "让扫描自动展开",
          body: "list 会识别可用边界并展开并行任务；diff 会列举两端，再按 key 合并。",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "使用结果",
          body: "Parquet 可以直接交给 DuckDB、pandas、pyarrow 或其他下游工具。",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "需要时再复查",
          body: "dry-run、运行记录、trace 和稳定退出码，能让自动化任务在事后被看懂。",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      automationLabel: "自动化",
      automation: [
        {
          title: "先看计划，再发请求",
          body: "`--dry-run --agent` 不访问 S3，也能确认配置、输出位置、告警和文件冲突。",
          intent: "automation",
          evidence: "plan JSON",
          surface: "artifact",
        },
        {
          title: "留下可复查的任务",
          body: "运行记录、可选的 trace JSONL 和稳定退出码，让 CI 或 Agent 能知道任务到底发生了什么。",
          intent: "automation",
          evidence: "manifest-summary",
          surface: "artifact",
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
      casesTitle: "扩大扫描前，先确认端点行为",
      casesBody:
        "AWS S3、MinIO 和 BOS 走过项目的兼容性验证。R2、OSS、B2 提供 preset；无论哪种端点，都建议先运行 `compat-probe`。",
      cases: ["已验证：AWS S3", "已验证：MinIO", "已验证：BOS", "Preset：Cloudflare R2", "Preset：OSS", "Preset：B2"],
      finalCta: "先跑一次 dry-run",
      finalCtaLabel: "打开仓库",
      faqLabel: "问题与用法",
      faq: [
        {
          title: "为什么不用 aws s3 ls？",
          body: "小规模、临时查看当然可以。s3-turbo-list 面向大规模盘点和可重复对比，结果输出和恢复能力更重要。",
        },
        {
          title: "必须提前准备 hints 吗？",
          body: "不需要。list 首次运行会探测真实的 `CommonPrefixes` 边界。hints 文件只是反复盘点时的额外控制。",
        },
        {
          title: `${s3Release} 变了什么？`,
          body: `${s3Release} 完成了百度 BOS 对 S3 ListObjectsV2 路径的兼容，并移除了 BOS 专用的防御分支。项目采用 ${s3License}。`,
        },
        {
          title: "哪些端点已经验证过？",
          body: "AWS S3、MinIO 和 BOS 走过项目验证路径。R2、OSS、B2 提供 preset；无论哪种端点，长任务前都建议先运行 `compat-probe`。",
        },
      ],
    },
  },
};
