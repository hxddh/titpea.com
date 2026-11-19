import { defineProduct } from "../schema";

export default defineProduct({
  slug: "s3-turbo-list",
  line: "storage",
  type: "cli",
  platforms: [],
  license: "Apache-2.0",
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
    eyebrow: "S3 inventory CLI",
    headline: "Know what’s in a bucket.",
    lead: "Lists a large S3 bucket, or compares two, in parallel with no tuning. The result is a Parquet dataset, ready to query in DuckDB.",
    summary: "Lists a large S3 bucket, or compares two, into a Parquet file you can query.",
    primaryCta: {
      label: "View on GitHub",
      href: "https://github.com/hxddh/s3-turbo-list",
    },
    secondaryCta: {
      label: "Install",
      href: "https://github.com/hxddh/s3-turbo-list#install",
    },
    privacy: {
      network: "onRequest",
      networkNote: "Only the S3 endpoints you list, compare or write to; no update check, no telemetry.",
      stays: "Datasets and checkpoints in your output directory; credentials from your AWS profile or environment.",
    },
    stack: ["Rust", "S3-compatible"],
    commands: {
      title: "Get started",
      sub: "Download the binary for your platform from the project’s GitHub Releases page, check it against the `SHA256SUMS` file there, and put it on your `PATH` as `s3tl`.",
      items: [
        {
          comment: "See what a run would use, then probe the endpoint with a few requests",
          command: "s3tl check s3://my-bucket/",
        },
        {
          comment: "List every object under `logs/` into a Parquet dataset in `out/`",
          command: "s3tl list s3://my-bucket/logs/ -o out/",
        },
      ],
    },
    visual: {
      kind: "terminalBrief",
      label: "s3tl",
      kicker: "s3tl 1.1 · README example",
      status: "success",
      command: "s3tl list s3://my-bucket/logs/ -o out/",
      filesLabel: "WRITTEN",
      files: ["out/part-00000.parquet", "out/_result.json"],
      briefLabel: "stdout: one JSON result",
      brief: '{"schema": "s3tl.result/1", "command": "list", "ok": true, "exit_code": 0, …}',
      footnotes: ["one result per run", "query out/part-*.parquet in DuckDB"],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "List and diff",
        label: "It lists and compares buckets, versions included.",
        items: [
          {
            title: "What is in a bucket",
            body: "Every object under a bucket or prefix, written as Parquet, with nothing to tune first.",
          },
          {
            title: "What changed between two",
            body: "Only the keys that differ are written: left only, right only or changed.",
          },
          {
            title: "Every version too",
            body: "`--versions` lists every object version and delete marker, newest first within a key.",
          },
          {
            title: "Settle ETag mismatches",
            body: "`--compare checksum` checks stored checksums when same-size objects have different ETags.",
          },
          {
            title: "One JSON result",
            body: "Every run prints one JSON result with a stable error code and exit code.",
          },
          {
            title: "Check the endpoint first",
            body: "Validated on AWS S3, MinIO and Baidu BOS; elsewhere, run `s3tl check` first.",
          },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "Your data",
        title: "Where your data goes.",
        items: [
          "S3 requests go only to the endpoints you list, compare or write to; there is no update check or telemetry.",
          "Credentials come from the standard AWS chain: your profile, environment variables or instance role.",
          "Datasets and checkpoints are files in the `-o` directory; with `-o s3://`, the dataset goes to that S3 prefix instead.",
          "`s3tl check` without a bucket URL, and any `--dry-run`, send no request to S3.",
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
            body: "For a quick look at a small bucket, often yes. On a large bucket s3tl is several times to an order of magnitude faster than a sequential `aws s3 ls`, and it leaves a file you can query and compare.",
            asOf: "v1.1.0",
          },
          {
            title: "Can an interrupted run pick up where it stopped?",
            body: "Yes, for `list -o DIR`. Ctrl-C or SIGTERM commits the parts written so far and saves the remaining key ranges in a checkpoint. Run the same command again with `--resume` and the directory ends up holding every key once. `diff` and output to S3 do not checkpoint.",
            asOf: "v1.1.0",
          },
        ],
      },
    ],
  },
  zh: {
    title: "s3-turbo-list",
    description: "自动分段的 S3 兼容 list / diff，输出可直接分析的 Parquet 结果。",
    eyebrow: "S3 清单命令行工具",
    headline: "存储桶里有什么，一次列清",
    lead: "并行列出一个大的 S3 存储桶，或对比两个桶，无需调参。结果是 Parquet 数据集，可以直接用 DuckDB 查询。",
    summary: "并行列举和对比 S3 对象，输出可继续分析的 Parquet。",
    primaryCta: {
      label: "查看 GitHub",
      href: "https://github.com/hxddh/s3-turbo-list",
    },
    secondaryCta: {
      label: "安装",
      href: "https://github.com/hxddh/s3-turbo-list#install",
    },
    privacy: {
      network: "onRequest",
      networkNote: "只访问你要列举、对比或写入的 S3 端点；不检查更新，没有遥测。",
      stays: "数据集和 checkpoint 写在你的输出目录；凭据来自你的 AWS profile 或环境变量。",
    },
    stack: ["Rust", "S3 兼容"],
    commands: {
      title: "开始使用",
      sub: "到项目的 GitHub Releases 页面下载对应平台的二进制文件，用那里的 `SHA256SUMS` 校验，再以 `s3tl` 为名放进 `PATH`。",
      items: [
        {
          comment: "查看一次运行会用到的配置，再用几个请求探测端点",
          command: "s3tl check s3://my-bucket/",
        },
        {
          comment: "列出 `logs/` 下的全部对象，写成 `out/` 里的 Parquet 数据集",
          command: "s3tl list s3://my-bucket/logs/ -o out/",
        },
      ],
    },
    visual: {
      kind: "terminalBrief",
      label: "s3tl",
      kicker: "s3tl 1.1 · README 示例",
      status: "success",
      command: "s3tl list s3://my-bucket/logs/ -o out/",
      filesLabel: "写出",
      files: ["out/part-00000.parquet", "out/_result.json"],
      briefLabel: "stdout：一份 JSON 结果",
      brief: '{"schema": "s3tl.result/1", "command": "list", "ok": true, "exit_code": 0, …}',
      footnotes: ["每次运行一份结果", "用 DuckDB 查询 out/part-*.parquet"],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "列举与对比",
        label: "列举和对比存储桶，连历史版本也能列",
        items: [
          { title: "桶里有什么", body: "一个桶或前缀下的全部对象写成 Parquet，不必先调参数。" },
          { title: "两个桶差在哪里", body: "只写出有差别的 key：只在左边、只在右边，或内容有变化。" },
          { title: "历史版本也列", body: "`--versions` 列出每个对象的所有版本和删除标记，同一 key 新版本在前。" },
          { title: "核对 ETag 不一致", body: "大小相同但 ETag 不同时，`--compare checksum` 用存储的校验和来判定。" },
          { title: "一份 JSON 结果", body: "每次运行都输出一份 JSON 结果，带固定的错误码和退出码。" },
          {
            title: "先确认端点",
            body: "已在 AWS S3、MinIO 和百度 BOS 上验证；其他服务先运行 `s3tl check`。",
          },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "数据去向",
        title: "数据的去向",
        items: [
          "S3 请求只发往你要列举、对比或写入的端点；不检查更新，没有遥测。",
          "凭据来自标准 AWS 凭据链：profile、环境变量或实例角色。",
          "数据集和 checkpoint 都是 `-o` 目录里的文件；用 `-o s3://` 时，数据集改写到那个 S3 前缀。",
          "不带桶地址的 `s3tl check` 和任何 `--dry-run` 都不向 S3 发请求。",
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
            body: "临时看一眼小桶时，通常够用。桶很大时，s3tl 比逐页顺序执行的 `aws s3 ls` 快几倍到一个数量级，而且留下一个可以查询和对比的文件。",
            asOf: "v1.1.0",
          },
          {
            title: "中断的任务能接着跑吗？",
            body: "`list -o DIR` 可以。按 Ctrl-C 或收到 SIGTERM 时，已写好的部分会提交，剩下的 key 范围存进 checkpoint。加上 `--resume` 再跑同一条命令，目录里最终是完整的清单，每个 key 只出现一次。`diff` 和写到 S3 的输出不保存 checkpoint。",
            asOf: "v1.1.0",
          },
        ],
      },
    ],
  },
});
