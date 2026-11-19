import { defineProduct } from "../schema";

// sonde: records a program's S3 traffic and reads it as operations. Facts:
// the repo's README.md, CHANGELOG.md, docs/security.md, docs/recording.md,
// docs/configuration.md, docs/cli.md, docs/ci.md, docs/trials.md, docs/agents.md and
// docs/credentials.md at v26.0.0. The screenshots are the repository's docs/images at v26.0.0.
// The name is not translated (the app says "sonde" in both languages; its
// Chinese tagline is 对象存储诊断). Pictures: the app's own shots test
// (app/tests/shots.test.tsx) on macOS at 2x, Nov 2026.
export default defineProduct({
  slug: "sonde",
  line: "storage",
  type: "desktop",
  repo: "hxddh/sonde",
  featured: {
    order: 1,
    image: {
      src: {
        en: "/assets/sonde-runview-en.webp",
        zh: "/assets/sonde-runview-zh.webp",
      },
      width: 1270,
      height: 810,
      alt: {
        en: "A sonde run of a SlateDB program: 172 requests in 467 ms, a chart of requests in flight, and its operations, each with what came before it.",
        zh: "sonde 里一个 SlateDB 程序的运行：467 毫秒内 172 个请求、同时在途的请求图，以及每个操作和它之前发生了什么。",
      },
    },
  },
  icon: "/assets/icons/sonde.webp",
  og: "/assets/og-sonde.png",
  schema: {
    category: "DeveloperApplication",
    os: "Cross-platform",
  },
  sectionIndex: true,
  en: {
    title: "sonde",
    description:
      "Desktop app, terminal UI and CLI that records what a program does to S3, reads it as operations and findings, and replays it on another store.",
    eyebrow: "S3 traffic recorder",
    headline: "Your S3 traffic, read.",
    lead: "Run a program through sonde to read its S3 requests as operations: what stands out, what it costs, and whether it survives store faults.",
    catalog: {
      role: "",
      text: "Run a program through it and read its S3 traffic as operations.",
    },
    primaryCta: {
      label: "Download",
      href: "https://github.com/hxddh/sonde/releases/latest",
    },
    secondaryCta: {
      label: "View source",
      href: "https://github.com/hxddh/sonde",
    },
    privacy: {
      network: "onRequest",
      networkNote:
        "No telemetry or background requests: it talks to your S3 endpoints (and STS for an assumed role) for what you start, and checks for updates only when you ask.",
      stays: "Runs, their index, bucket size caches and the audit log, in sonde’s data folder on this computer.",
    },
    meta: "macOS / Linux / Windows · Apache-2.0 · {version} · S3-compatible",
    releaseHighlights: {
      version: "v26.0.0",
      items: [
        "When SlateDB, DuckDB, rclone, s5cmd, Trino or Hadoop s3a sent the requests, a finding names the setting to change and where the program sets it.",
        "A run’s cost now adds data sent out and the storage it leaves a month to its requests; `sonde check --max-transfer` caps the bytes sent out.",
        "Requests the program gave up waiting for, and downloads it read only in part, are now recorded as they happened.",
      ],
    },
    visual: {
      kind: "screenshot",
      label: "sonde",
      frame: "wide",
      image: {
        src: "/assets/sonde-runview-en.webp",
        alt: "A sonde run of a SlateDB program: 172 requests in 467 ms, tiles for requests, errors, latency, bytes and requests in flight, a chart over time, and the operations, each with what came before it.",
        width: 1270,
        height: 810,
      },
      caption: "sonde’s desktop app on a built-in demo run, from its repository.",
      asOf: "v26.0.0",
    },
    showcases: [
      {
        src: "/assets/sonde-run-v26-en.webp",
        alt: "The Run screen: a curl command’s 18 requests to the demo store, a finding that README.md was read 11 times, its output on the left and the operations beside it.",
        width: 1270,
        height: 810,
        asOf: "v26.0.0",
        title: "Run it, watch its requests.",
        body: "Type a command; its terminal and its S3 requests appear side by side.",
      },
      {
        src: "/assets/sonde-fix-en.webp",
        alt: "A finding: three objects checked with HEAD and then read with GET. It names export.py lines 18 and 19, shows the boto3 code to change, and offers Apply and run again.",
        width: 1270,
        height: 810,
        asOf: "v26.0.0",
        title: "A finding, and what to change.",
        body: "It names the line that sent the requests; Apply and run again measures the saving.",
      },
    ],
    commands: {
      title: "Get started",
      sub: "The script installs the terminal binary on Linux or macOS. GitHub Releases has terminal binaries for Linux, macOS and Windows, and the desktop app as a macOS .dmg, a Linux tarball and a Windows zip. On Linux the binary needs glibc 2.35 or later, or the static build the script picks.",
      items: [
        {
          comment: "Install the terminal binary (Linux, macOS)",
          command: "curl -fsSL https://raw.githubusercontent.com/hxddh/sonde/main/install.sh | sh",
        },
        {
          comment: "The tour, on a built-in store: a finding, its fix, the fix measured",
          command: "sonde run --demo",
        },
        {
          comment: "Record your program, sent on with your AWS credentials",
          command: "sonde run -- python etl.py",
        },
      ],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "Features",
        label: "It reads requests as what they did.",
        items: [
          {
            title: "Operations, not requests",
            body: "Multipart uploads, retries, listings, and commits of Iceberg, Delta Lake, Hudi, Paimon, SlateDB and Lance.",
          },
          {
            title: "Findings with a fix",
            body: "Its monthly saving, the setting or SDK code to change, and the line that sent it.",
          },
          {
            title: "Trials under faults",
            body: "`--trial` runs the program again under store faults and says whether it survived.",
          },
          {
            title: "A budget in CI",
            body: "`sonde check` fails a job over budget or baseline; the GitHub Action keeps one PR comment.",
          },
          {
            title: "For coding agents",
            body: "`show -f json` gives each finding’s file, line and fix; a rerun says if it worked.",
          },
          {
            title: "Replay on another store",
            body: "`compare --replay` re-enacts a run on another store: where answers differ, and the cost there.",
          },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "Your data",
        title: "Where your data goes.",
        items: [
          "Credentials stay in sonde; the recorded program gets throwaway keys. No telemetry, and updates are checked only when you ask.",
          "Runs keep each request’s metadata, never object data, with signatures and tokens redacted; the program’s output is kept as printed.",
          "A program may do whatever it would without sonde; trials refuse deleting what they did not write; `--policy read-only` allows only reads.",
          "sonde’s own destructive actions, like aborting uploads, are a dry run first, run only with `--yes`, and go to an audit log.",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        nav: "FAQ",
        label: "FAQ",
        items: [
          {
            title: "Do I need to change my code?",
            body: "Usually not. `sonde run` points the program at a local endpoint with `AWS_ENDPOINT_URL` and re-signs each request with your real credentials. CI tests boto3, the AWS SDKs for JavaScript v3, Go v2 and Java v2, the AWS CLI and polars; sonde sets up Spark, Flink, rclone, the DuckDB CLI and `docker run` commands itself. When nothing reaches it, it says how to point that program’s client at it.",
            asOf: "v26.0.0",
          },
          {
            title: "Which stores does it work with?",
            body: "Any S3-compatible endpoint: AWS, Cloudflare R2, MinIO, Ceph RGW, Aliyun OSS, Tigris, Backblaze B2, Wasabi and Google Cloud Storage’s XML API among them. A replay ends with what the program relies on, such as checksums, conditional writes and ranges, and how that store answers each; `sonde probe` runs all 52 compatibility probes.",
            asOf: "v26.0.0",
          },
          {
            title: "Can it read production traffic?",
            body: "Yes, without running it through sonde: `sonde import` reads S3 access logs, CloudTrail and HAR files as operations, with the same findings (CloudTrail has no timings). That is how to read a job on Kubernetes or serverless.",
            asOf: "v26.0.0",
          },
        ],
      },
    ],
  },
  zh: {
    title: "sonde",
    description: "桌面应用、终端界面和命令行：录下程序对 S3 做了什么，读成操作和发现，还能在另一个存储上重放。",
    eyebrow: "S3 流量记录器",
    headline: "看清你的程序对 S3 做了什么",
    lead: "让程序经过 sonde 运行，把它发给 S3 的请求读成一个个操作：哪里值得一看，花了多少钱，存储出故障时能否扛住。",
    catalog: {
      role: "",
      text: "让程序经过它运行，把 S3 流量读成操作。",
    },
    primaryCta: {
      label: "下载",
      href: "https://github.com/hxddh/sonde/releases/latest",
    },
    secondaryCta: {
      label: "查看源码",
      href: "https://github.com/hxddh/sonde",
    },
    privacy: {
      network: "onRequest",
      networkNote:
        "没有遥测，也没有后台请求：它只为你启动的事访问你的 S3 端点（扮演角色时还有 STS），只在你要求时检查更新。",
      stays: "运行记录、它们的索引、存储桶大小的缓存和审计日志，都存在这台电脑上 sonde 的数据目录里。",
    },
    meta: "macOS / Linux / Windows · Apache-2.0 · {version} · 兼容 S3",
    releaseHighlights: {
      version: "v26.0.0",
      items: [
        "请求来自 SlateDB、DuckDB、rclone、s5cmd、Trino 或 Hadoop s3a 时，发现会直接写出该改的设置，以及程序在哪里设置它。",
        "一次运行的费用除了请求费，还算上出网流量和每月留下的存储；`sonde check --max-transfer` 可以限制出网字节数。",
        "程序等不及就放弃的请求、只读了一部分的下载，现在都按实际情况记录。",
      ],
    },
    visual: {
      kind: "screenshot",
      label: "sonde",
      frame: "wide",
      image: {
        src: "/assets/sonde-runview-zh.webp",
        alt: "中文界面下 sonde 里一个 SlateDB 程序的运行：汇总数字、随时间变化的图，以及每个操作和它之前发生了什么。",
        width: 1270,
        height: 810,
      },
      caption: "sonde 桌面应用的内置演示运行，取自它的仓库；下面两张界面为英文。",
      asOf: "v26.0.0",
    },
    showcases: [
      {
        src: "/assets/sonde-run-v26-en.webp",
        alt: "“运行”页面（英文界面）：一条 curl 命令对演示存储发出的 18 个请求，一条发现指出 README.md 被读了 11 次，左边是输出，右边是操作。",
        width: 1270,
        height: 810,
        asOf: "v26.0.0",
        title: "运行它，看它发出的请求",
        body: "输入一条命令，它的终端和它的 S3 请求并排出现。",
      },
      {
        src: "/assets/sonde-fix-en.webp",
        alt: "一条发现（英文界面）：三个对象先用 HEAD 检查再用 GET 读取；它指出 export.py 第 18、19 行，给出要改的 boto3 代码，并提供“应用并再次运行”。",
        width: 1270,
        height: 810,
        asOf: "v26.0.0",
        title: "一条发现，和要改的地方",
        body: "它指出发出这些请求的那行代码；“应用并再次运行”会量出省了多少。",
      },
    ],
    commands: {
      title: "开始使用",
      sub: "这个脚本在 Linux 或 macOS 上安装终端版。GitHub Releases 页面有 Linux、macOS 和 Windows 的终端版，桌面应用则有 macOS 的 .dmg、Linux 的压缩包和 Windows 的 zip。Linux 上的二进制需要 glibc 2.35 或更新版本，不满足时用静态版，安装脚本会自动选它。",
      items: [
        {
          comment: "安装终端版（Linux、macOS）",
          command: "curl -fsSL https://raw.githubusercontent.com/hxddh/sonde/main/install.sh | sh",
        },
        {
          comment: "在内置存储上走一遍导览：一条发现、它的修法和修好后的实测效果",
          command: "sonde run --demo",
        },
        {
          comment: "录下你的程序，请求用你的 AWS 凭证发出",
          command: "sonde run -- python etl.py",
        },
      ],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "功能",
        label: "把请求读成它们做了什么",
        items: [
          {
            title: "按操作看，而不是按请求",
            body: "分段上传、重试、列举，以及 Iceberg、Delta Lake、Hudi、Paimon、SlateDB 和 Lance 的提交。",
          },
          {
            title: "发现，附带修法",
            body: "每条都写明每月能省多少、该改的设置或 SDK 代码，以及发出请求的那行代码。",
          },
          { title: "在故障下试运行", body: "`--trial` 在存储故障下再运行程序，告诉你它是否扛住。" },
          {
            title: "在 CI 里守住预算",
            body: "超出预算或基线时，`sonde check` 让任务失败；GitHub Action 只保留一条 PR 评论。",
          },
          {
            title: "给编程智能体用",
            body: "`show -f json` 给出每条发现的文件、行号和修法；再运行一次就知道改好没有。",
          },
          {
            title: "在另一个存储上重放",
            body: "`compare --replay` 在另一个存储上重演一次运行，指出应答的差异和那里的费用。",
          },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "数据",
        title: "数据的去向",
        items: [
          "凭证留在 sonde 里，被录制的程序只拿到一次性密钥。没有遥测，只在你要求时检查更新。",
          "运行记录只记每个请求的元数据，从不记对象数据，签名和令牌都会被抹掉；程序的输出按原样保存。",
          "程序能做的事和不经过 sonde 时一样；故障试运行时不许删除不是它写的东西；`--policy read-only` 只允许读取。",
          "sonde 自己的破坏性操作（比如中止上传）都先试运行，加上 `--yes` 才真正执行，并写进审计日志。",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        nav: "常见问题",
        label: "常见问题",
        items: [
          {
            title: "需要改代码吗？",
            body: "一般不用。`sonde run` 用环境变量把程序指向本地端点，再用你的真实凭证给每个请求重新签名。CI 测试了 boto3、JavaScript v3、Go v2、Java v2 的 AWS SDK、AWS CLI 和 polars；Spark、Flink、rclone、DuckDB 命令行和 `docker run` 的命令由 sonde 自己配好。如果没有请求到达，它会说明怎样让这个程序的客户端指向它。",
            asOf: "v26.0.0",
          },
          {
            title: "支持哪些存储？",
            body: "任何兼容 S3 的端点都行，例如 AWS、Cloudflare R2、MinIO、Ceph RGW、阿里云 OSS 和 Tigris；Backblaze B2、Wasabi 和 Google Cloud Storage 的 XML API 也在其中。重放结束时会列出程序依赖的功能（比如校验和、条件写入和范围读取），以及那个存储对每项的应答；`sonde probe` 会跑完全部 52 项兼容性探测。",
            asOf: "v26.0.0",
          },
          {
            title: "能看生产环境的流量吗？",
            body: "能，而且不用让它经过 sonde：`sonde import` 把 S3 访问日志、CloudTrail 和 HAR 文件读成操作，给出同样的发现（CloudTrail 没有耗时）。跑在 Kubernetes 或无服务器平台上的任务就这样看。",
            asOf: "v26.0.0",
          },
        ],
      },
    ],
  },
});
