import { defineProduct } from "../schema";

export default defineProduct({
  slug: "s3-turbo-list",
  line: "storage",
  type: "cli",
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
    lead: "Lists a large S3 bucket, or compares two, in parallel with no tuning. The result is a Parquet file, ready to query in DuckDB.",
    catalog: {
      role: "List / Diff",
      text: "Lists a large S3 bucket, or compares two, into a Parquet file you can query.",
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
    meta: "Rust · Apache-2.0 · {version} · S3-compatible · Parquet · Machine-readable JSON",
    releaseHighlights: {
      version: "v0.39.0",
      items: [
        "Buckets with many folders start listing far sooner: in the project’s own test, comparing a bucket of 20 folders with 1,000 subfolders each took 0.7 seconds instead of 30.",
        "Missing AWS credentials now stop the run at once with a one-line message, instead of being retried as a network error for minutes.",
        "Option spellings deprecated in 0.38 are gone; using one stops with a message that names its replacement.",
      ],
    },
    commands: {
      title: "Get started",
      sub: "Download the binary for your platform from the project’s GitHub Releases page, check it against the `SHA256SUMS` file there, and put it on your `PATH`.",
      items: [
        {
          comment: "Check your setup locally, without contacting S3",
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
          comment: "List every object in the bucket into a Parquet file in `out/`",
          command: "s3-turbo-list list --bucket my-bucket --region us-east-2 --output-dir out",
        },
      ],
    },
    visual: {
      kind: "s3Benchmark",
      label: "s3-turbo-list",
      kicker: "Third-party benchmark · Alibaba Cloud OSS",
      title: "One stream, then eight in parallel",
      body: "A third party listed 1M objects on Alibaba Cloud OSS, as quoted in the README. The -c option caps how many list requests run in parallel; without it, s3-turbo-list sets the parallelism itself.",
      points: [
        {
          label: "Single stream",
          seconds: 55,
          display: "~55s",
        },
        {
          label: "8 in parallel (-c 8)",
          seconds: 19,
          display: "~19s",
          state: "reference",
        },
      ],
      chartLabel: "Time to list 1M objects, one stream and eight in parallel",
      chartCaption:
        "Approximate times as reported. Results depend on how the bucket’s keys are laid out and on how many requests a second the provider allows.",
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "List and diff",
        label: "It lists and compares buckets, in parallel from the start.",
        items: [
          {
            title: "What is in a bucket",
            body: "Every object in one bucket, written to a Parquet file, with nothing to tune first.",
          },
          {
            title: "What changed between two",
            body: "Both buckets are listed in parallel; each object is marked equal, missing or changed.",
          },
          {
            title: "Reads the layout first",
            body: "A few quick probes find the bucket’s real folder boundaries before the full listing.",
          },
          {
            title: "Parallel from the start",
            body: "Each run splits the keys into segments and lists them together, with no flags.",
          },
          {
            title: "Rebalance mid-run",
            body: "A large segment is split across idle workers, up to the provider’s rate limit.",
          },
          {
            title: "Check the endpoint first",
            body: "Validated on AWS S3, MinIO and Baidu BOS; for R2, OSS or B2, run `compat-probe` first.",
          },
        ],
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
            body: "For a quick look at a small bucket, `aws s3 ls` from the AWS command-line tool is often enough. s3-turbo-list is for large inventories and repeatable comparisons, where the output file and resuming after an interruption matter.",
          },
          {
            title: "How does a run start in parallel?",
            body: "Every run starts with a few listing requests that find the bucket’s real folder boundaries (`CommonPrefixes`) and splits the work there; nothing is cached in the working directory. A bucket with no folders, or one large folder (like `data/part-…` under `data/`), is split by probing single keys instead, so the run starts in parallel either way.",
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
    headline: "存储桶里有什么，一次列清",
    lead: "并行列出一个大的 S3 存储桶，或对比两个桶，无需调参。结果是 Parquet 文件，可以直接用 DuckDB 查询。",
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
      stays: "对象清单、checkpoint 和日志写在你的输出目录；凭据来自你的 AWS profile 或环境变量。",
    },
    meta: "Rust · Apache-2.0 · {version} · S3 兼容 · Parquet · 机器可读 JSON",
    releaseHighlights: {
      version: "v0.39.0",
      items: [
        "文件夹很多的桶开始列举快了许多：在项目自己的测试里，对比一个含 20 个文件夹、每个下有 1,000 个子文件夹的桶，从 30 秒缩短到 0.7 秒。",
        "缺少 AWS 凭据时，运行立即停止并给出一行说明，不再当作网络错误重试好几分钟。",
        "0.38 里标为弃用的旧写法已移除；再用时会报错，并指出新的写法。",
      ],
    },
    commands: {
      title: "开始使用",
      sub: "到项目的 GitHub Releases 页面下载对应平台的二进制文件，用那里的 `SHA256SUMS` 校验，再放进 `PATH`。",
      items: [
        {
          comment: "在本地检查配置，不访问 S3",
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
          comment: "列出桶里的全部对象，写成 `out/` 里的 Parquet 文件",
          command: "s3-turbo-list list --bucket my-bucket --region us-east-2 --output-dir out",
        },
      ],
    },
    visual: {
      kind: "s3Benchmark",
      label: "s3-turbo-list",
      kicker: "第三方基准测试 · 阿里云 OSS",
      title: "单路列举对比 8 路并行",
      body: "第三方在阿里云 OSS 上列举 100 万个对象，数据引自项目 README。-c 选项限定最多同时发出几个列举请求；不加时由 s3-turbo-list 自己决定并行度。",
      points: [
        {
          label: "单路",
          seconds: 55,
          display: "约 55s",
        },
        {
          label: "8 路并行（-c 8）",
          seconds: 19,
          display: "约 19s",
          state: "reference",
        },
      ],
      chartLabel: "列举 100 万个对象的耗时：单路与 8 路并行",
      chartCaption: "均为报告中的近似值。实际结果取决于桶里 key 的分布，以及服务商每秒允许多少请求。",
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "列举与对比",
        label: "列举和对比存储桶，从一开始就并行",
        items: [
          { title: "桶里有什么", body: "一个桶里的全部对象写成一个 Parquet 文件，不必先调参数。" },
          { title: "两个桶差在哪里", body: "两个桶并行列举，每个对象都标明相同、缺失或有变化。" },
          { title: "先读懂结构", body: "先用几次快速探测找到桶里真实的文件夹边界，再开始完整列举。" },
          { title: "一开始就并行", body: "每次运行都把 key 分成若干段同时列举，不用加任何参数。" },
          { title: "运行中再拆分", body: "某一段数据特别多时，拆给空闲的 worker，直到服务商的请求速率上限。" },
          {
            title: "先确认端点",
            body: "已在 AWS S3、MinIO 和百度 BOS 上验证；用 R2、OSS 或 B2 前，先运行 `compat-probe`。",
          },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "数据去向",
        title: "数据的去向",
        items: [
          "S3 请求只发往你设置的端点或预设填入的端点；不检查更新，没有遥测。",
          "凭据来自标准 AWS 凭据链：profile、环境变量或实例角色；预设从不碰凭据。",
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
            body: "临时看一眼小桶时，AWS 命令行工具的 `aws s3 ls` 通常就够了。s3-turbo-list 面向大规模盘点和可重复的对比，这时输出文件和中断后接着跑更重要。",
          },
          {
            title: "怎样一开始就并行？",
            body: "每次运行都先发几次列举请求，找到桶里真实的文件夹边界（`CommonPrefixes`），在那里拆分工作；工作目录里不留缓存。没有文件夹的桶，或者一个很大的文件夹（如 `data/` 下的 `data/part-…`），改为逐个探测单个 key 来拆分，所以都能一开始就并行。",
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
