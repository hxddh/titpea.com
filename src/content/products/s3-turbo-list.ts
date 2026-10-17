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
    headline: "Know what’s in a bucket.",
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
    privacy: {
      network: "onRequest",
      networkNote: "Only the S3 endpoints you list or diff; no update check, no telemetry.",
      stays:
        "Listings, checkpoints and logs in your output directory; credentials from your AWS profile or environment.",
    },
    meta: "Rust · Apache-2.0 · {version} · S3-compatible · Parquet · Agent-safe JSON",
    commands: {
      title: "Get started",
      sub: "Download the binary for your platform from the GitHub release, verify it against SHA256SUMS, and put it on your PATH.",
      items: [
        {
          comment: "Local preflight — no S3 access",
          command: "s3-turbo-list doctor",
          capturedOutput: `OK    binary_version: 0.39.0
OK    working_directory: /tmp/inventory
OK    config_parse: resolved configuration is valid TOML/CLI state
OK    config_file: no config file (searched ./s3-turbo-list.toml and ~/.s3-turbo-list.toml); built-in defaults apply
OK    aws_profile: AWS_PROFILE is not set; the AWS SDK uses its default credential chain
OK    provider: no provider preset; plain S3 settings apply
OK    endpoint_url: no endpoint URL: requests go to AWS S3 (pass --endpoint-url or --provider for another service)
SKIP  proxy: the request host depends on the bucket and region (virtual-hosted or AWS endpoint), which doctor does not take; the run log names the proxy, if any, for each resolved endpoint
SKIP  network: doctor is a local preflight and does not contact S3 endpoints; use compat-probe to validate an endpoint
Resolved: provider -, endpoint -, addressing auto, concurrency 100, threads 4
Doctor status: ok`,
          replay: { label: "s3-turbo-list v0.39.0 · captured output" },
        },
        {
          comment: "Full recursive inventory → Parquet in out/",
          command: "s3-turbo-list list --bucket my-bucket --region us-east-2 --output-dir out",
        },
      ],
    },
    visual: {
      kind: "s3Benchmark",
      label: "s3-turbo-list",
      kicker: "Third-party benchmark · Alibaba Cloud OSS",
      title: "One stream against -c 8",
      body: "1M objects on Alibaba Cloud OSS, measured by a third party and quoted in the project README. Listing speed is bounded by the requests per second the provider serves.",
      points: [
        {
          label: "1 stream",
          seconds: 55,
          display: "~55s",
        },
        {
          label: "-c 8",
          seconds: 19,
          display: "~19s",
          state: "reference",
        },
      ],
      chartLabel: "Elapsed time, single stream and -c 8",
      chartCaption:
        "Approximate times as reported. Results depend on bucket structure and the provider’s request-rate limit.",
    },
    sections: [
      {
        kind: "panel",
        id: "inside",
        nav: "List and diff",
        kicker: "List and diff",
        title: "Two questions before a migration.",
        body: "List one bucket, or diff a source against its target.",
        panel: {
          kind: "purpose",
          label: "List and diff outputs",
          items: [
            {
              label: "LIST",
              title: "What is in a bucket",
              body: "One bucket becomes a Parquet object list, with no scanner tuning first.",
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
        kind: "data",
        id: "data",
        nav: "Your data",
        title: "Where your data goes.",
        items: [
          "S3 requests go only to the endpoint you set or a provider preset fills in; there is no update check or telemetry.",
          "Credentials come from the standard AWS chain: your profile, environment variables or instance role. Presets never touch them.",
          "Listings, checkpoints, logs and run manifests are files in your output directory; `doctor` and `--dry-run` contact no S3 endpoint.",
        ],
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
            body: "No. List mode probes real `CommonPrefixes` boundaries itself. Hints files remain an optional control for repeated inventories.",
          },
          {
            title: "What does startup discovery do?",
            body: "Every run starts with a few delimiter probes that find real `CommonPrefixes` boundaries; nothing is cached in the working directory. A flat namespace with no prefixes is split by single-key probes instead, and so is a large flat directory under one prefix (like `data/part-…` under `data/`), so the run starts parallel either way.",
          },
          {
            title: "Can an interrupted run pick up where it stopped?",
            body: "Yes. Every interrupted `list` run saves a checkpoint on Ctrl-C or SIGTERM. Run it again with `--resume` and the same `--output-dir`, and it lists only the key ranges not yet written; that output covers only those ranges, so combine it with the interrupted run’s. A crash leaves the previous checkpoint unchanged, and `diff` and `--start-after` runs do not checkpoint.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "s3-turbo-list",
    description: "自动分段的 S3 兼容 list / diff，输出可直接分析的 Parquet 结果。",
    eyebrow: "Rust CLI",
    headline: "桶里有什么，一次列清",
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
    privacy: {
      network: "onRequest",
      networkNote: "只访问你要列举或对比的 S3 端点；不检查更新，没有遥测。",
      stays: "对象清单、checkpoint 和日志写在你的输出目录；凭证来自你的 AWS profile 或环境变量。",
    },
    meta: "Rust · Apache-2.0 · {version} · S3 兼容 · Parquet · 机器可读 JSON",
    commands: {
      title: "开始使用",
      sub: "从 GitHub Release 下载对应平台的二进制，用 SHA256SUMS 校验后放进 PATH。",
      items: [
        {
          comment: "本地预检，不访问 S3",
          command: "s3-turbo-list doctor",
          capturedOutput: `OK    binary_version: 0.39.0
OK    working_directory: /tmp/inventory
OK    config_parse: resolved configuration is valid TOML/CLI state
OK    config_file: no config file (searched ./s3-turbo-list.toml and ~/.s3-turbo-list.toml); built-in defaults apply
OK    aws_profile: AWS_PROFILE is not set; the AWS SDK uses its default credential chain
OK    provider: no provider preset; plain S3 settings apply
OK    endpoint_url: no endpoint URL: requests go to AWS S3 (pass --endpoint-url or --provider for another service)
SKIP  proxy: the request host depends on the bucket and region (virtual-hosted or AWS endpoint), which doctor does not take; the run log names the proxy, if any, for each resolved endpoint
SKIP  network: doctor is a local preflight and does not contact S3 endpoints; use compat-probe to validate an endpoint
Resolved: provider -, endpoint -, addressing auto, concurrency 100, threads 4
Doctor status: ok`,
          replay: { label: "s3-turbo-list v0.39.0 · 实际输出" },
        },
        {
          comment: "完整递归清单 → out/ 里的 Parquet",
          command: "s3-turbo-list list --bucket my-bucket --region us-east-2 --output-dir out",
        },
      ],
    },
    visual: {
      kind: "s3Benchmark",
      label: "s3-turbo-list",
      kicker: "第三方基准测试 · 阿里云 OSS",
      title: "单流对比 -c 8",
      body: "阿里云 OSS 上的 1M 个对象，由第三方实测，数据引自项目 README。列举速度受限于服务商每秒响应的请求数。",
      points: [
        {
          label: "单流",
          seconds: 55,
          display: "约 55s",
        },
        {
          label: "-c 8",
          seconds: 19,
          display: "约 19s",
          state: "reference",
        },
      ],
      chartLabel: "单流与 -c 8 的完成耗时",
      chartCaption: "均为报告中的近似值。实际结果取决于桶的结构和服务商的请求速率上限。",
    },
    sections: [
      {
        kind: "panel",
        id: "inside",
        nav: "列举与对比",
        kicker: "list 与 diff",
        title: "迁移前先问两件事",
        body: "列一个桶，或把源桶和目标桶对比。",
        panel: {
          kind: "purpose",
          label: "s3-turbo-list 的用途",
          items: [
            {
              label: "LIST",
              title: "桶里有什么",
              body: "一个桶写成 Parquet 对象清单，不必先调扫描参数。",
            },
            {
              label: "DIFF",
              title: "两端差了什么",
              body: "两端并行列举、按 key 合并，得到一份标出相同、缺失和变化的 Parquet。",
            },
          ],
          boundaryLabel: "不负责同步对象",
          boundary: "它不复制对象，也不替代存储浏览器，只把列举和对比的结果留给你做下一步判断。",
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
          { label: "写出清单", body: "留下可分析的对象清单，而不只是终端输出。" },
        ],
      },
      {
        kind: "cases",
        id: "cases",
        nav: "兼容性",
        label: "兼容性",
        title: "扩大扫描前，先确认端点行为",
        items: ["已验证：AWS S3", "已验证：MinIO", "已验证：百度 BOS", "预设：Cloudflare R2", "预设：OSS", "预设：B2"],
        body: "AWS S3、MinIO 和百度 BOS 走过项目的兼容性验证；R2、OSS、B2 提供预设。无论哪种端点，长任务前都先运行 `compat-probe`。",
      },
      {
        kind: "data",
        id: "data",
        nav: "数据去向",
        title: "数据的去向",
        items: [
          "S3 请求只发往你设置的端点或预设填入的端点；不检查更新，没有遥测。",
          "凭证来自标准 AWS 凭证链：profile、环境变量或实例角色；预设从不碰凭证。",
          "对象清单、checkpoint、日志和运行记录都写在输出目录；`doctor` 与 `--dry-run` 不访问任何 S3 端点。",
        ],
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
            body: "不需要。list 会自己探测真实的 `CommonPrefixes` 边界。hints 文件只是反复盘点时的可选控制。",
          },
          {
            title: "启动发现做了什么？",
            body: "每次运行都先用几次 delimiter 探测找到真实的 `CommonPrefixes` 边界，不在工作目录里缓存。没有前缀的扁平命名空间改用 single-key 探测拆分，单个前缀下的大型扁平目录（如 `data/` 下的 `data/part-…`）也一样，所以每次运行都能并行展开。",
          },
          {
            title: "中断的任务能接着跑吗？",
            body: "能。每次中断的 `list` 运行都会在 Ctrl-C 或 SIGTERM 时保存 checkpoint。用同一个 `--output-dir` 加上 `--resume` 再跑一次，只列举尚未写出的 key 范围；续跑的输出只含这些范围，需要与中断那次的输出合并。进程崩溃时保留上一次的 checkpoint，`diff` 和 `--start-after` 运行不保存 checkpoint。",
          },
        ],
      },
    ],
  },
});
