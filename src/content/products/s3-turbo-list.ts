import { defineProduct } from "../schema";

export default defineProduct({
  slug: "s3-turbo-list",
  line: "storage",
  repo: "hxddh/s3-turbo-list",
  icon: "/assets/icons/s3-turbo-list.webp",
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
    headline: "1M objects in 18.8s.",
    lead: "Finds the parallel work. Lists and diffs large buckets. Parquet out.",
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
          capturedOutput: `OK binary_version: 0.31.0
OK working_directory: /tmp/inventory
OK config_parse: resolved configuration is valid TOML/CLI state
WARN config_file: local s3-turbo-list.toml not found; run init-config if you want a starter config
WARN aws_profile: AWS_PROFILE is not set; the AWS SDK will use its default credential chain
OK endpoint_profile: no endpoint compatibility profile selected
OK endpoint_url: no explicit endpoint URL required by the selected profile
SKIP network: doctor is a local preflight and does not contact S3 endpoints; use compat-probe to validate an endpoint`,
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
      body: "1,000,413 objects · 2 vCPU host, same-region OSS Beijing · default list QPS · 2026-06-18. Observed under constraint, not a throughput ceiling.",
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
    },
    sections: [
      {
        kind: "panel",
        id: "inside",
        nav: "List and diff",
        kicker: "List and diff",
        title: "Know what is here and what changed.",
        body: "The two questions before a migration or an investigation.",
        panel: {
          kind: "purpose",
          label: "List and diff outputs",
          items: [
            {
              label: "LIST",
              title: "What is in a bucket",
              body: "One bucket becomes a Parquet object list, with no scanner tuning first; checkpoints make a long run resumable.",
            },
            {
              label: "DIFF",
              title: "What changed between two",
              body: "Source and target list in parallel and merge in key order: one Parquet set flagging equal, missing, or changed.",
            },
          ],
          boundaryLabel: "Not a sync engine",
          boundary:
            "It does not copy objects or replace a storage browser. It leaves a reliable basis for the next decision.",
        },
      },
      {
        kind: "flow",
        id: "evidence",
        nav: "How it scans",
        kicker: "How list adapts",
        title: "The scan plan follows the bucket.",
        body: "Parallel work opens where the bucket has structure; only long segments split further.",
        steps: [
          { label: "Read the shape", body: "Probe real prefix boundaries before recursive work begins." },
          { label: "Run segments", body: "Open parallel list work without a prepared hints file." },
          { label: "Split the long tail", body: "Fan out long segments only while useful capacity is available." },
          { label: "Write the list", body: "An analysis-ready object list, not terminal-only output." },
        ],
      },
      {
        kind: "cases",
        id: "cases",
        nav: "Compatibility",
        label: "Compatibility",
        title: "Check the endpoint before scaling up.",
        items: [
          "Verified: AWS S3",
          "Verified: MinIO",
          "Verified: Baidu BOS",
          "Preset: Cloudflare R2",
          "Preset: OSS",
          "Preset: B2",
        ],
        body: "AWS S3, MinIO, and Baidu BOS are on the project’s verified compatibility path; R2, OSS, and B2 have presets. Run `compat-probe` before trusting a long job on any endpoint.",
      },
      {
        kind: "faq",
        id: "faq",
        nav: "FAQ",
        label: "FAQ",
        items: [
          {
            title: "Isn’t aws s3 ls enough?",
            body: "For a quick, small inspection, `aws s3 ls` is often enough. s3-turbo-list is for large inventories and repeatable comparisons where output and recovery matter.",
          },
          {
            title: "Do I need a hints file?",
            body: "No. List mode probes real `CommonPrefixes` boundaries on the first run. Hints files remain an optional control for repeated inventories.",
          },
          {
            title: "What does startup discovery do?",
            body: "It pre-partitions flat namespaces at list startup with parallel single-key probes, so the first run can open parallel work earlier instead of relying only on runtime splits.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "s3-turbo-list",
    description: "自动分段的 S3 兼容 list / diff，输出可直接分析的 Parquet 结果。",
    eyebrow: "Rust CLI",
    headline: "18.8 秒列出一百万对象",
    lead: "自动发现可并行的工作。大规模 list 与 diff。输出 Parquet。",
    catalog: {
      role: "列举 / 对比",
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
          capturedOutput: `OK binary_version: 0.31.0
OK working_directory: /tmp/inventory
OK config_parse: resolved configuration is valid TOML/CLI state
WARN config_file: local s3-turbo-list.toml not found; run init-config if you want a starter config
WARN aws_profile: AWS_PROFILE is not set; the AWS SDK will use its default credential chain
OK endpoint_profile: no endpoint compatibility profile selected
OK endpoint_url: no explicit endpoint URL required by the selected profile
SKIP network: doctor is a local preflight and does not contact S3 endpoints; use compat-probe to validate an endpoint`,
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
      body: "1,000,413 个对象 · 2 vCPU 云主机，同地域北京 OSS · 默认 list QPS · 2026-06-18。受限环境实测，不是性能上限。",
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
    },
    sections: [
      {
        kind: "panel",
        id: "inside",
        nav: "列举与对比",
        kicker: "list 与 diff",
        title: "弄清有什么，差了什么",
        body: "迁移、排查或盘点之前，先回答这两个问题。",
        panel: {
          kind: "purpose",
          label: "s3-turbo-list 的用途",
          items: [
            {
              label: "LIST",
              title: "桶里有什么",
              body: "一个桶写成 Parquet 对象 list，不必先调扫描参数；长任务可从 checkpoint 继续。",
            },
            {
              label: "DIFF",
              title: "两端差了什么",
              body: "两端并行列举、按 key 合并，得到一份标出相同、缺失和变化的 Parquet。",
            },
          ],
          boundaryLabel: "不负责同步对象",
          boundary: "它不复制对象，也不替代存储浏览器，只为后续判断留下可靠依据。",
        },
      },
      {
        kind: "flow",
        id: "evidence",
        nav: "扫描方式",
        kicker: "list 如何展开",
        title: "扫描计划随桶而定",
        body: "有结构的地方先并行展开，仍然耗时的长尾片段再继续拆分。",
        steps: [
          { label: "识别结构", body: "先探测真实的前缀边界，再开始递归扫描。" },
          { label: "并行列举", body: "按边界展开并行任务，不必预先准备 hints 文件。" },
          { label: "处理长尾", body: "仍有可用余量时，才拆分耗时的片段。" },
          { label: "写出 list", body: "留下可分析的对象 list，而不只是终端输出。" },
        ],
      },
      {
        kind: "cases",
        id: "cases",
        nav: "兼容性",
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
        body: "AWS S3、MinIO 和百度 BOS 走过项目的兼容性验证；R2、OSS、B2 提供 preset。无论哪种端点，长任务前都先运行 `compat-probe`。",
      },
      {
        kind: "faq",
        id: "faq",
        nav: "常见问题",
        label: "常见问题",
        items: [
          {
            title: "aws s3 ls 不够用吗？",
            body: "小规模、临时查看时，`aws s3 ls` 通常就够了。s3-turbo-list 面向大规模盘点和可重复对比，这时结果输出和恢复能力更重要。",
          },
          {
            title: "需要准备 hints 文件吗？",
            body: "不需要。list 首次运行会探测真实的 `CommonPrefixes` 边界。hints 文件只是反复盘点时的可选控制。",
          },
          {
            title: "启动发现做了什么？",
            body: "它在 list 启动阶段用并行 single-key 探测为扁平命名空间预分区，让首次运行更早展开并发，而不必只靠运行时拆分。",
          },
        ],
      },
    ],
  },
});
