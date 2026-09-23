import { defineProduct } from "../schema";

export default defineProduct({
  slug: "s3-turbo-list",
  line: "storage",
  repo: "hxddh/s3-turbo-list",
  og: "/assets/og-s3-turbo-list.png",
  schema: {
    category: "DeveloperApplication",
    os: "Cross-platform",
  },
  sectionIndex: true,
  en: {
    title: "s3-turbo-list",
    description: "Automatic S3-compatible list / diff with analysis-ready Parquet output.",
    eyebrow: "Rust CLI",
    headline: "1M objects in 18.8s",
    lead: "Discovers parallel work for large S3-compatible list / diff runs.",
    catalog: {
      role: "List / Diff",
      text: "List and diff S3 objects in parallel. Parquet out, ready to analyze.",
    },
    primaryCta: {
      label: "View on GitHub",
      href: "https://github.com/hxddh/s3-turbo-list",
    },
    secondaryCta: {
      label: "Quick start",
      href: "https://github.com/hxddh/s3-turbo-list#quick-start",
    },
    meta: "Rust · Apache-2.0 · {version} · S3-compatible · Parquet · Agent-safe JSON",
    commands: {
      title: "Get started",
      sub: "Download the binary for your platform from the GitHub release, verify it against SHA256SUMS, and put it on your PATH.",
      items: [
        {
          comment: "Local preflight — no S3 access",
          command: "s3-turbo-list doctor --simple",
        },
        {
          comment: "Full recursive inventory → Parquet in out/",
          command: "s3-turbo-list --output-dir out list --region us-east-2 --bucket my-bucket",
        },
      ],
    },
    visual: {
      kind: "s3Benchmark",
      label: "s3-turbo-list",
      kicker: "v0.21.0 field benchmark",
      title: "c=8 is the reference",
      body: "2 vCPU host · default list QPS · OSS Beijing. Observed under constraint, not a throughput ceiling.",
      meta: ["1,000,413 objects", "Alibaba Cloud OSS · Beijing", "v0.21.0"],
      points: [
        {
          label: "c=1",
          seconds: 41.7,
        },
        {
          label: "c=2",
          seconds: 20.6,
        },
        {
          label: "c=4",
          seconds: 18.6,
        },
        {
          label: "c=8",
          seconds: 18.8,
          state: "reference",
        },
        {
          label: "c=16",
          seconds: 19.9,
        },
        {
          label: "c=24",
          seconds: 25.1,
          state: "caution",
        },
        {
          label: "c=32",
          seconds: 20.4,
        },
        {
          label: "c=64",
          seconds: 22.3,
        },
      ],
      chartLabel: "Elapsed time by concurrency",
      chartCaption: "c=8 is the Parquet reference run. c=24 is a scheduling outlier, not a general limit.",
      footnotes: ["2 vCPU · 3.4 GiB · same-region ECS → OSS · default list QPS · 2026-06-18"],
    },
    sections: [
      {
        kind: "panel",
        id: "inside",
        kicker: "List and diff",
        title: "Answers for large buckets",
        body: "One CLI for the two questions that matter before a migration or investigation: what is here, and what changed?",
        panel: {
          kind: "purpose",
          label: "List and diff outputs",
          items: [
            {
              label: "LIST",
              title: "Know what is in a bucket",
              body: "Turn a large S3-compatible bucket into an analysis-ready object list without hand-tuning a scanner first.",
            },
            {
              label: "DIFF",
              title: "Know what changed between two buckets",
              body: "Compare source and target object metadata, then work from one ordered difference dataset.",
            },
          ],
          boundaryLabel: "Not a sync engine",
          boundary:
            "s3-turbo-list does not copy objects or replace a storage browser. It produces a reliable basis for the next decision.",
        },
      },
      {
        kind: "story",
        id: "story",
        label: "Why it exists",
        title: "The useful work starts after the scan",
        body: [
          "A large-bucket scan is rarely the end of the task. You need an object list for analysis, or a difference set to decide whether a migration is complete.",
          "s3-turbo-list makes those answers its default output. It keeps the command surface small and exposes planning, recovery, and evidence only when the run needs them. To see what a storage command actually sent, use httpmon.",
        ],
      },
      {
        kind: "flow",
        id: "evidence",
        kicker: "How list adapts",
        title: "The scan plan follows the bucket",
        body: "The first list reads the bucket's structure, opens parallel work where that structure exists, then only splits the segments that remain long.",
        steps: [
          {
            label: "Read the shape",
            body: "Probe real prefix boundaries before recursive work begins.",
          },
          {
            label: "Run segments",
            body: "Use those boundaries to open parallel list work without a prepared hints file.",
          },
          {
            label: "Split the long tail",
            body: "Only fan out segments that remain long while useful capacity is available.",
          },
          {
            label: "Write the list",
            body: "Finish with an analysis-ready object list instead of terminal-only output.",
          },
        ],
      },
      {
        kind: "paths",
        id: "results",
        kicker: "After the run",
        title: "List and diff leave different answers",
        body: "Both paths write results for downstream work. They are deliberately not the same operation.",
        paths: [
          {
            label: "LIST",
            title: "A usable object list",
            input: "One bucket",
            output: "Parquet object list",
            detail:
              "Checkpoint and resume keep a long list recoverable; optional trace and manifest files preserve how it ran.",
          },
          {
            label: "DIFF",
            title: "An ordered difference set",
            input: "Source bucket + target bucket",
            output: "Parquet with DiffFlag",
            detail:
              "Both sides are listed in parallel and merged in key order, so downstream tools can filter what is equal, missing, or changed.",
          },
        ],
      },
      {
        kind: "cases",
        id: "cases",
        label: "Compatibility",
        title: "Check the endpoint before scaling up",
        items: [
          "Verified: AWS S3",
          "Verified: MinIO",
          "Verified: Baidu BOS",
          "Preset: Cloudflare R2",
          "Preset: OSS",
          "Preset: B2",
        ],
        body: "AWS S3, MinIO, and Baidu BOS are covered by the project’s verified compatibility path. R2, OSS, and B2 have presets; run `compat-probe` before trusting a long job on any endpoint.",
      },
      {
        kind: "faq",
        id: "faq",
        label: "Before a long run",
        items: [
          {
            title: "When aws s3 ls is enough",
            body: "For a quick, small inspection, `aws s3 ls` is often enough. s3-turbo-list is for large inventories and repeatable comparisons where output and recovery matter.",
          },
          {
            title: "Hints are optional",
            body: "List mode probes real `CommonPrefixes` boundaries on the first run. Hints files remain an optional control for repeated inventories.",
          },
          {
            title: "Startup discovery pre-partitions",
            body: "Startup discovery pre-partitions flat namespaces at list startup with parallel single-key probes, so the first run can open parallel work earlier instead of relying only on runtime splits.",
          },
        ],
      },
    ],
    finalCta: "Open repository",
  },
  zh: {
    title: "s3-turbo-list",
    description: "自动分段的 S3 兼容 list / diff，输出可直接分析的 Parquet 结果。",
    eyebrow: "Rust CLI",
    headline: "18.8 秒列出一百万",
    lead: "面向大规模 S3 兼容存储，自动发现可并行的 list / diff 工作。",
    catalog: {
      role: "List / Diff",
      text: "并行列举和对比 S3 对象，输出可继续分析的 Parquet。",
    },
    primaryCta: {
      label: "查看 GitHub",
      href: "https://github.com/hxddh/s3-turbo-list",
    },
    secondaryCta: {
      label: "快速开始",
      href: "https://github.com/hxddh/s3-turbo-list#quick-start",
    },
    meta: "Rust · Apache-2.0 · {version} · S3-compatible · Parquet · Agent-safe JSON",
    commands: {
      title: "开始使用",
      sub: "从 GitHub Release 下载对应平台的二进制，用 SHA256SUMS 校验后放进 PATH。",
      items: [
        {
          comment: "本地预检，不访问 S3",
          command: "s3-turbo-list doctor --simple",
        },
        {
          comment: "完整递归清单 → out/ 里的 Parquet",
          command: "s3-turbo-list --output-dir out list --region us-east-2 --bucket my-bucket",
        },
      ],
    },
    visual: {
      kind: "s3Benchmark",
      label: "s3-turbo-list",
      kicker: "v0.21.0 实测",
      title: "c=8 是参考运行",
      body: "2 vCPU 云主机 · 默认 list QPS · 北京 OSS。受限环境实测，不是性能上限。",
      meta: ["1,000,413 对象", "Alibaba Cloud OSS · Beijing", "v0.21.0"],
      points: [
        {
          label: "c=1",
          seconds: 41.7,
        },
        {
          label: "c=2",
          seconds: 20.6,
        },
        {
          label: "c=4",
          seconds: 18.6,
        },
        {
          label: "c=8",
          seconds: 18.8,
          state: "reference",
        },
        {
          label: "c=16",
          seconds: 19.9,
        },
        {
          label: "c=24",
          seconds: 25.1,
          state: "caution",
        },
        {
          label: "c=32",
          seconds: 20.4,
        },
        {
          label: "c=64",
          seconds: 22.3,
        },
      ],
      chartLabel: "不同并发下的完成耗时",
      chartCaption: "c=8 是 Parquet 参考运行；c=24 是特定调度异常，不代表通用性能边界。",
      footnotes: ["2 vCPU · 3.4 GiB · same-region ECS → OSS · default list QPS · 2026-06-18"],
    },
    sections: [
      {
        kind: "panel",
        id: "inside",
        kicker: "list 与 diff",
        title: "先回答大桶里的两个问题",
        body: "迁移、排查或盘点之前，先弄清两件事：桶里有什么，以及两端到底差了什么。",
        panel: {
          kind: "purpose",
          label: "s3-turbo-list 的用途",
          items: [
            {
              label: "LIST",
              title: "弄清桶里有什么",
              body: "把大规模 S3 兼容存储写成可分析的 Parquet list，不必先手动调一套扫描参数。",
            },
            {
              label: "DIFF",
              title: "弄清两端差了什么",
              body: "对比源端和目标端的对象元数据，得到一份有序的差异结果。",
            },
          ],
          boundaryLabel: "不负责同步对象",
          boundary: "它不复制对象，也不替代存储浏览器；它负责给后续判断留下可靠的依据。",
        },
      },
      {
        kind: "story",
        id: "story",
        label: "为什么做",
        title: "扫描之后，才是真正要做的事",
        body: [
          "大规模扫描通常不是终点。你需要一份 list 结果继续分析，或需要差异结果判断一次迁移是否完成。",
          "s3-turbo-list 默认留下这两种结果。计划、恢复和证据能力只在任务需要时出现，命令本身保持克制。要看一条存储命令实际发出的请求，用 httpmon。",
        ],
      },
      {
        kind: "flow",
        id: "evidence",
        kicker: "list 如何自动展开",
        title: "扫描会根据桶的结构调整",
        body: "第一次 list 先识别桶里的前缀边界，有结构就并行展开；剩下的长尾片段再按需拆分。",
        steps: [
          {
            label: "识别结构",
            body: "先探测真实的前缀边界，再开始递归扫描。",
          },
          {
            label: "并行列举",
            body: "利用这些边界展开并行任务，不必预先准备 hints 文件。",
          },
          {
            label: "处理长尾",
            body: "只有仍然耗时的片段，才会在有可用性能时继续拆分。",
          },
          {
            label: "写出 list",
            body: "最终留下可分析的 Parquet list，而不只是终端输出。",
          },
        ],
      },
      {
        kind: "paths",
        id: "results",
        kicker: "跑完之后",
        title: "list 和 diff 给出不同的答案",
        body: "两条路径都会留下可继续处理的结果，但它们不是同一种操作。",
        paths: [
          {
            label: "LIST",
            title: "一份可用的对象 list",
            input: "一个存储桶",
            output: "Parquet list",
            detail: "长任务可以从 checkpoint 继续；需要复查时，再查看可选的 trace 和运行记录。",
          },
          {
            label: "DIFF",
            title: "一份有序的差异结果",
            input: "源端桶 + 目标端桶",
            output: "带 DiffFlag 的 Parquet",
            detail: "两端会并行列举，再按 key 合并；下游可以直接筛出相同、缺失和变化的对象。",
          },
        ],
      },
      {
        kind: "cases",
        id: "cases",
        label: "兼容性",
        title: "扩大扫描前，先确认端点行为",
        items: [
          "已验证：AWS S3",
          "已验证：MinIO",
          "已验证：百度 BOS",
          "Preset：Cloudflare R2",
          "Preset：OSS",
          "Preset：B2",
        ],
        body: "AWS S3、MinIO 和百度 BOS 走过项目的兼容性验证。R2、OSS、B2 提供 preset；无论哪种端点，都建议先运行 `compat-probe`。",
      },
      {
        kind: "faq",
        id: "faq",
        label: "开跑之前",
        items: [
          {
            title: "小规模仍可用 aws s3 ls",
            body: "小规模、临时查看当然可以。s3-turbo-list 面向大规模盘点和可重复对比，结果输出和恢复能力更重要。",
          },
          {
            title: "hints 不是前置条件",
            body: "list 首次运行会探测真实的 `CommonPrefixes` 边界。hints 文件只是反复盘点时的额外控制。",
          },
          {
            title: "启动发现会预分区",
            body: "启动发现会在 list 启动阶段用并行 single-key 探测为扁平命名空间预分区，让首次运行更早展开并发，而不必只靠运行时拆分逐步提升。",
          },
        ],
      },
    ],
    finalCta: "打开仓库",
  },
});
