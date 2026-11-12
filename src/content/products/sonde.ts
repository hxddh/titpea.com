import { defineProduct } from "../schema";

// sonde: records a program's S3 traffic and reads it as operations. Facts:
// the repo's README.md, docs/security.md, docs/recording.md,
// docs/configuration.md, docs/credentials.md, docs/trials.md and docs/packaging.md at
// v15.0.0.
// The name is not translated (the app says "sonde" in both languages; its
// Chinese tagline is 对象存储诊断). Pictures: the README's own screenshots
// (docs/images/, plain captures of the desktop app on Windows, Nov 2026).
export default defineProduct({
  slug: "sonde",
  line: "storage",
  type: "desktop",
  repo: "hxddh/sonde",
  featured: {
    order: 1,
    image: {
      src: {
        en: "/assets/sonde-featured-en.webp",
        zh: "/assets/sonde-featured-zh.webp",
      },
      width: 1178,
      height: 810,
      alt: {
        en: "A sonde session of a SlateDB program: its figures, three findings with what fixing them would save, and the operations it made on S3.",
        zh: "sonde 里一个 SlateDB 程序的会话：汇总数字、三条值得注意的发现和修好能省下多少，以及它在 S3 上做的操作。",
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
    lead: "Run a program through sonde to see its S3 requests as operations, with findings on what deserves a look. Replay them on another store.",
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
        "No telemetry: it talks only to your S3 endpoints (and STS for an assumed role), and checks for updates only when you ask.",
      stays: "Sessions, the request log and the audit log in sonde’s data folder on this computer.",
    },
    meta: "macOS / Linux / Windows · Apache-2.0 · {version} · S3-compatible",
    releaseHighlights: {
      version: "v16.0.0",
      items: [
        "Two new trial scenarios: a download cut half way, and a conditional write that loses its race. The verdict says how the program coped.",
        "When a program breaks under a trial, the verdict names the request, the line of code and the SDK setting to change.",
        "Sessions of any size: `sonde show` reads a million requests in 7 seconds instead of 45, and the app loads a long session as you scroll.",
      ],
    },
    visual: {
      kind: "screenshot",
      label: "sonde",
      frame: "wide",
      image: {
        src: "/assets/sonde-session-en.webp",
        alt: "A sonde session of a SlateDB program: 172 requests in 467 ms, with tiles for rate, errors, latency and bytes, three findings with the requests fixing them would save, and the operations list with each one’s requests and time.",
        width: 1270,
        height: 810,
      },
      caption: "sonde’s desktop app, from its README; the session is its built-in demo.",
      asOf: "v15.0.0",
    },
    showcases: [
      {
        src: "/assets/sonde-run-en.webp",
        alt: "The Run screen: a shell command’s output on the left, and beside it the nine requests it made to the demo store, listed as operations with their time, two of them failed.",
        width: 1270,
        height: 810,
        asOf: "v15.0.0",
        title: "Run it, watch its requests.",
        body: "Type a command; its terminal and its S3 requests appear side by side. Your real keys never reach it.",
      },
      {
        src: "/assets/sonde-compare-en.webp",
        alt: "Comparing two runs: 172 requests down to 9, waiting down 62%, request cost down 99%, errors up from 0 to 2, and each kind of request before and after; a notice says the two are different programs.",
        width: 1270,
        height: 810,
        asOf: "v15.0.0",
        title: "What a change did.",
        body: "Compare two runs: requests, waiting, cost and findings, before and after.",
      },
      {
        src: "/assets/sonde-time-en.webp",
        dark: { src: "/assets/sonde-time-en-dark.webp", width: 1270, height: 810 },
        alt: "A session’s Time tab: tiles for rate, errors, latency and bytes, then the requests over the session with how many were in flight, what ran at once, and bytes sent and received.",
        width: 1270,
        height: 810,
        asOf: "v15.0.0",
        title: "Where the time went.",
        body: "One timeline for the run: requests in flight, what ran at once, and bytes each way.",
      },
    ],
    commands: {
      title: "Get started",
      sub: "This installs the terminal binary on Linux or macOS. The desktop app is on the GitHub Releases page; on macOS, `brew install --cask hxddh/sonde/sonde-app` also installs it.",
      items: [
        {
          comment: "Install the terminal binary",
          command: "curl -fsSL https://raw.githubusercontent.com/hxddh/sonde/main/install.sh | sh",
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
            body: "Multipart uploads, retries, listings, and SlateDB, Iceberg, Delta Lake and Lance steps.",
          },
          {
            title: "Findings with a fix",
            body: "Hot keys, HEAD before GET, orphaned files, each with what fixing it would save.",
          },
          { title: "A budget in CI", body: "`sonde check` fails a job when a run goes past its budget or baseline." },
          {
            title: "Replay on another store",
            body: "Re-enact a session on another endpoint and compare every answer.",
          },
          { title: "Production logs too", body: "S3 access logs, CloudTrail and HAR files, read the same way." },
          { title: "Your buckets", body: "Browse 100,000+ objects; find incomplete uploads and what they cost." },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "Your data",
        title: "Where your data goes.",
        items: [
          "Credentials are resolved in Rust; the recorded program gets throwaway keys and a local endpoint, and sonde signs with the real ones.",
          "Requests go only to your S3 endpoints, and STS for an assumed role; no telemetry, and updates only when you ask.",
          "Sessions and logs stay in sonde’s data folder, with signatures, tokens and keys redacted as each record is made.",
          "Read-only until you turn that off; anything destructive needs a dry run and a typed confirmation, and goes to the audit log.",
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
            body: "Usually not. `sonde run` points the program at a local endpoint with `AWS_ENDPOINT_URL` and throwaway keys, and re-signs each request with your real credentials. It is checked with boto3, the AWS SDKs for JavaScript v3, Go v2 and Java v2, and object_store; a client that ignores these variables needs the endpoint set by hand.",
            asOf: "v16.0.0",
          },
          {
            title: "Which stores does it work with?",
            body: "Any S3-compatible endpoint: AWS, Cloudflare R2, MinIO, Ceph RGW, Aliyun OSS, Tigris, Backblaze B2, Wasabi and Google Cloud Storage’s XML API among them. Its 40 compatibility probes show where a store differs, as one matrix across endpoints.",
            asOf: "v16.0.0",
          },
          {
            title: "What does replay do to the other store?",
            body: "It writes the same requests under a fresh `replay-<time>/` prefix, so nothing that already exists is touched; bucket-level changes are skipped. It asks first and deletes what it wrote afterwards unless you pass `--keep`.",
            asOf: "v16.0.0",
          },
          {
            title: "Can it test how my program handles S3 failures?",
            body: "Yes. `sonde run --trial` runs the command again while sonde answers in the store’s place: a 503 on each request’s first attempt, a write whose answer is lost, a failed CompleteMultipartUpload, a download cut half way, or a conditional write that loses its race. It says whether the program survived, was degraded or broke; when it broke, it names the request, the line of code and the SDK setting to change. The command runs several times, so it must be safe to run again.",
            asOf: "v16.0.0",
          },
          {
            title: "Can I try it without an account?",
            body: "Yes: `sonde demo` runs on a built-in store, and the app starts on the same demo endpoint.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "sonde",
    description: "桌面应用、终端界面和命令行：录下程序对 S3 做了什么，读成操作和发现，还能在另一个存储上重放。",
    eyebrow: "对象存储诊断",
    headline: "看清你的程序对 S3 做了什么",
    lead: "让程序经过 sonde 运行，把它发给 S3 的请求读成一个个操作，并用“发现”指出值得一看的地方；还能在另一个存储上重放。",
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
      networkNote: "没有遥测：只访问你的 S3 端点（扮演角色时还有 STS），只在你要求时检查更新。",
      stays: "会话、请求日志和审计日志都存在这台电脑上 sonde 的数据目录里。",
    },
    meta: "macOS / Linux / Windows · Apache-2.0 · {version} · 兼容 S3",
    releaseHighlights: {
      version: "v16.0.0",
      items: [
        "新增两种试验场景：下载到一半被切断，以及条件写入在竞争中落败。结论会说明程序是怎么应对的。",
        "程序在试验中出错时，结论会指出是哪个请求、哪一行代码，以及该改 SDK 的哪项设置。",
        "会话多大都能打开：一百万个请求，`sonde show` 现在 7 秒读完，以前要 45 秒；应用里的长会话随滚动按需载入。",
      ],
    },
    visual: {
      kind: "screenshot",
      label: "sonde",
      frame: "wide",
      image: {
        src: "/assets/sonde-session-zh.webp",
        alt: "中文界面下 sonde 里一个 SlateDB 程序的会话：汇总数字、三条值得注意的发现和修好能省下的请求，以及操作列表。",
        width: 1270,
        height: 810,
      },
      caption: "sonde 桌面应用，取自它的 README；会话来自内置演示。",
      asOf: "v15.0.0",
    },
    showcases: [
      {
        src: "/assets/sonde-run-en.webp",
        alt: "“运行”页面（英文界面）：左边是一条 shell 命令的输出，右边把它对演示存储发出的 9 个请求列成操作，带用时，其中两个失败。",
        width: 1270,
        height: 810,
        asOf: "v15.0.0",
        title: "运行它，看它发出的请求",
        body: "输入一条命令，它的终端和它的 S3 请求并排出现。你的真实密钥不会交给它。",
        caption: "界面为英文。",
      },
      {
        src: "/assets/sonde-compare-en.webp",
        alt: "两次运行的对比（英文界面）：请求从 172 降到 9，等待减少 62%，请求费用减少 99%，错误从 0 变成 2，下面是每类请求前后的数量；一条提示说明这是两个不同的程序。",
        width: 1270,
        height: 810,
        asOf: "v15.0.0",
        title: "改动带来了什么",
        body: "对比两次运行：请求、等待、费用和发现，前后一目了然。",
        caption: "界面为英文。",
      },
      {
        src: "/assets/sonde-time-en.webp",
        dark: { src: "/assets/sonde-time-en-dark.webp", width: 1270, height: 810 },
        alt: "会话的“时间”页（英文界面）：速率、错误、延迟和字节四块数字，下面是整个会话里的请求和同时在途的数量、哪些请求同时在跑，以及收发的字节。",
        width: 1270,
        height: 810,
        asOf: "v15.0.0",
        title: "时间花在了哪里",
        body: "整次运行排在一条时间线上：同时在途的请求、哪些请求同时在跑，以及收发的字节。",
        caption: "界面为英文。",
      },
    ],
    commands: {
      title: "开始使用",
      sub: "这条命令在 Linux 或 macOS 上安装终端版。桌面应用在 GitHub Releases 页面下载；macOS 上也可以用 `brew install --cask hxddh/sonde/sonde-app` 安装。",
      items: [
        {
          comment: "安装终端版",
          command: "curl -fsSL https://raw.githubusercontent.com/hxddh/sonde/main/install.sh | sh",
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
            body: "分段上传、重试、列举，以及 SlateDB、Iceberg、Delta Lake 和 Lance 的步骤。",
          },
          { title: "发现，附带修法", body: "热点键、先 HEAD 再 GET、孤立文件，并算出修好各能省多少。" },
          { title: "在 CI 里守住预算", body: "运行超出预算或基线时，`sonde check` 让任务失败。" },
          { title: "在另一个存储上重放", body: "把一次会话在别的端点上重演，逐条比较应答。" },
          { title: "生产日志也能读", body: "S3 访问日志、CloudTrail 和 HAR 文件，用同样方式解读。" },
          { title: "你的存储桶", body: "浏览十万以上对象，找出未完成的上传和它们的费用。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "数据",
        title: "数据的去向",
        items: [
          "凭证在 Rust 里解析；被录制的程序拿到的是一次性密钥和本地端点，由 sonde 用真实凭证签名。",
          "请求只发往你的 S3 端点，扮演角色时还有 STS。没有遥测，只在你要求时检查更新。",
          "会话、请求日志和审计日志留在 sonde 的数据目录；签名、令牌和密钥在记录生成时就被抹掉。",
          "默认只读；任何删改都要先试运行、再输入确认，并写进审计日志。",
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
            body: "一般不用。`sonde run` 用环境变量和一次性密钥把程序指向本地端点，再用你的真实凭证给每个请求重新签名。已用 boto3、JavaScript v3、Go v2、Java v2 的 AWS SDK 和 object_store 验证过；不读这些环境变量的客户端，需要手动设置端点。",
            asOf: "v16.0.0",
          },
          {
            title: "支持哪些存储？",
            body: "任何兼容 S3 的端点都行，例如 AWS、Cloudflare R2、MinIO、Ceph RGW、阿里云 OSS 和 Tigris；Backblaze B2、Wasabi 和 Google Cloud Storage 的 XML API 也在其中。它的 40 项兼容性探测会把各端点的差异排成一张表。",
            asOf: "v16.0.0",
          },
          {
            title: "重放会对另一个存储做什么？",
            body: "它把同样的请求写到新的 `replay-<时间>/` 前缀下，已有的东西一概不碰；存储桶级别的改动会跳过。它会先征得同意，结束后删掉自己写的内容，除非你加 `--keep`。",
            asOf: "v16.0.0",
          },
          {
            title: "能测试程序遇到 S3 故障时的表现吗？",
            body: "可以。`sonde run --trial` 会再运行这条命令，由 sonde 代替存储作答。比如每个请求的第一次尝试返回 503，写入成功但应答丢失，CompleteMultipartUpload 失败，下载到一半被切断，或者条件写入在竞争中落败。跑完后它告诉你程序是挺住了、受了影响，还是出了错；出错时会指出是哪个请求、哪一行代码，以及该改 SDK 的哪项设置。命令会运行多次，所以必须能安全地重复运行。",
            asOf: "v16.0.0",
          },
          {
            title: "没有账号能先试试吗？",
            body: "可以：`sonde demo` 在内置的存储上运行，应用启动时也连着同一个演示端点。",
          },
        ],
      },
    ],
  },
});
