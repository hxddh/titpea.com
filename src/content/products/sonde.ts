import { defineProduct } from "../schema";

// sonde: records a program's S3 traffic and reads it as operations. Facts:
// the repo's README.md, CHANGELOG.md, docs/security.md, docs/recording.md,
// docs/configuration.md, docs/cli.md, docs/ci.md and docs/trials.md at v18.0.0.
// The screenshots were captured at v16.0.0.
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
        en: "/assets/sonde-featured-en.webp",
        zh: "/assets/sonde-featured-zh.webp",
      },
      width: 2147,
      height: 1476,
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
    lead: "Run a program through sonde to read its S3 requests as operations, with what stands out and whether it survives when the store misbehaves.",
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
      stays: "Sessions, scans, probe runs and the audit log, in sonde’s data folder on this computer.",
    },
    meta: "macOS / Linux / Windows · Apache-2.0 · {version} · S3-compatible",
    releaseHighlights: {
      version: "v18.0.0",
      items: [
        "Run a program again, and each finding reads fixed, less, back or new; a fixed one shows the saving measured beside the one predicted.",
        "`sonde run --trial --again` runs only the fault scenarios that broke, degraded or were refused, and each says its history.",
        "A GitHub Action, `hxddh/sonde@v18`, records a pull request’s run, checks it against the base branch’s baseline and keeps one PR comment.",
      ],
    },
    visual: {
      kind: "screenshot",
      label: "sonde",
      frame: "wide",
      image: {
        src: "/assets/sonde-session-en.webp",
        alt: "A sonde session of a SlateDB program: 172 requests in 467 ms, with tiles for requests, errors, latency, bytes and requests in flight, three findings with the requests fixing them would save, and the operations list with each one’s requests and time.",
        width: 2560,
        height: 1476,
      },
      caption: "sonde’s desktop app, showing its built-in demo session.",
      asOf: "v16.0.0",
    },
    showcases: [
      {
        src: "/assets/sonde-run-en.webp",
        alt: "The Run screen: a shell command’s output on the left, and beside it the seven requests it made to the demo store, listed as operations with their time, two of them failed.",
        width: 2560,
        height: 1476,
        asOf: "v16.0.0",
        title: "Run it, watch its requests.",
        body: "Type a command; its terminal and its S3 requests appear side by side.",
      },
      {
        src: "/assets/sonde-compare-en.webp",
        alt: "Comparing two runs: 172 requests down to 7, waiting down 71%, request cost down 99%, errors up from 0 to 2, and each kind of request before and after; a notice says the two are different programs.",
        width: 2560,
        height: 1476,
        asOf: "v16.0.0",
        title: "What a change did.",
        body: "Compare two runs: requests, waiting, cost and findings, before and after.",
      },
    ],
    commands: {
      title: "Get started",
      sub: "The terminal binary installs on Linux or macOS with either command. The GitHub Releases page has the terminal binary for Windows and the desktop app for macOS, Linux and Windows.",
      items: [
        {
          comment: "Install the terminal binary",
          command: "curl -fsSL https://raw.githubusercontent.com/hxddh/sonde/main/install.sh | sh",
        },
        {
          comment: "Or with Homebrew",
          command: "brew install hxddh/sonde/sonde",
        },
        {
          comment: "The desktop app on macOS",
          command: "brew install --cask hxddh/sonde/sonde-app",
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
            body: "Each with what fixing it saves. Run again, and each reads fixed, less, back or new.",
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
            title: "Why slow, why costly",
            body: "`show --by` splits by prefix, size, caller or SDK, and says where slow, costly requests are.",
          },
          {
            title: "Replay on another store",
            body: "`compare --replay` re-enacts a session on another store and shows where answers differ.",
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
          "Sessions keep each request’s metadata, never object data, with signatures and tokens redacted; the program’s output is kept as printed.",
          "By default a program may not delete or overwrite objects it did not write. `--allow-writes` lifts this; `--policy read-only` allows only reads.",
          "sonde’s own destructive actions, like aborting uploads, each need a dry run and a typed confirmation, and go to an audit log.",
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
            body: "Usually not. `sonde run` points the program at a local endpoint with `AWS_ENDPOINT_URL` and throwaway keys, and re-signs each request with your real credentials. It is tested with boto3, the AWS SDKs for JavaScript v3, Go v2 and Java v2, and object_store, and it points Spark and Flink commands at itself. A client that ignores these variables needs the endpoint set by hand.",
            asOf: "v18.0.0",
          },
          {
            title: "Which stores does it work with?",
            body: "Any S3-compatible endpoint: AWS, Cloudflare R2, MinIO, Ceph RGW, Aliyun OSS, Tigris, Backblaze B2, Wasabi and Google Cloud Storage’s XML API among them. Its 40 compatibility probes show where a store differs, as one matrix across endpoints. A store that ignores `If-None-Match`, such as older MinIO and Ceph, lets a program overwrite objects anyway, so use `--policy read-only` there.",
            asOf: "v18.0.0",
          },
          {
            title: "Can I try it without an account?",
            body: "Yes: `sonde demo` gives a tour on a built-in store, with no account needed.",
            asOf: "v18.0.0",
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
    lead: "让程序经过 sonde 运行，把它发给 S3 的请求读成一个个操作，指出值得一看的地方，并看出存储出故障时它能否扛住。",
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
      stays: "会话、扫描结果、探测记录和审计日志都存在这台电脑上 sonde 的数据目录里。",
    },
    meta: "macOS / Linux / Windows · Apache-2.0 · {version} · 兼容 S3",
    releaseHighlights: {
      version: "v18.0.0",
      items: [
        "再运行一次程序，每条发现会标为已修复、减少、又出现或新出现；已修复的会把实际省下的量和预计的并排列出。",
        "`sonde run --trial --again` 只重跑未通过、降级或被策略拒绝的故障场景，每个场景都会说明它的历史。",
        "GitHub Action `hxddh/sonde@v18` 录下拉取请求的运行，对照基础分支的基线检查，并在 PR 上只保留一条评论。",
      ],
    },
    visual: {
      kind: "screenshot",
      label: "sonde",
      frame: "wide",
      image: {
        src: "/assets/sonde-session-zh.webp",
        alt: "中文界面下 sonde 里一个 SlateDB 程序的会话：汇总数字、三条值得注意的发现和修好能省下的请求，以及操作列表。",
        width: 2560,
        height: 1476,
      },
      caption: "sonde 桌面应用，显示内置演示会话；本页截图界面均为英文。",
      asOf: "v16.0.0",
    },
    showcases: [
      {
        src: "/assets/sonde-run-en.webp",
        alt: "“运行”页面（英文界面）：左边是一条 shell 命令的输出，右边把它对演示存储发出的 7 个请求列成操作，带用时，其中两个失败。",
        width: 2560,
        height: 1476,
        asOf: "v16.0.0",
        title: "运行它，看它发出的请求",
        body: "输入一条命令，它的终端和它的 S3 请求并排出现。",
      },
      {
        src: "/assets/sonde-compare-en.webp",
        alt: "两次运行的对比（英文界面）：请求从 172 降到 7，等待减少 71%，请求费用减少 99%，错误从 0 变成 2，下面是每类请求前后的数量；一条提示说明这是两个不同的程序。",
        width: 2560,
        height: 1476,
        asOf: "v16.0.0",
        title: "改动带来了什么",
        body: "对比两次运行：请求、等待、费用和发现，前后一目了然。",
      },
    ],
    commands: {
      title: "开始使用",
      sub: "在 Linux 或 macOS 上，用下面任一条命令安装终端版。GitHub Releases 页面有 Windows 终端版，以及 macOS、Linux 和 Windows 的桌面应用。",
      items: [
        {
          comment: "安装终端版",
          command: "curl -fsSL https://raw.githubusercontent.com/hxddh/sonde/main/install.sh | sh",
        },
        {
          comment: "或者用 Homebrew",
          command: "brew install hxddh/sonde/sonde",
        },
        {
          comment: "macOS 上的桌面应用",
          command: "brew install --cask hxddh/sonde/sonde-app",
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
            body: "每条都算出修好能省多少。再运行一次，它会标为已修复、减少、又出现或新出现。",
          },
          { title: "在故障下试运行", body: "`--trial` 在存储故障下再运行程序，告诉你它是否扛住。" },
          {
            title: "在 CI 里守住预算",
            body: "超出预算或基线时，`sonde check` 让任务失败；GitHub Action 只保留一条 PR 评论。",
          },
          {
            title: "慢在哪里，贵在哪里",
            body: "`show --by` 按前缀、大小、调用代码或 SDK 拆分，指出慢和贵的请求在哪里。",
          },
          { title: "在另一个存储上重放", body: "`compare --replay` 把会话在另一个存储上重演，指出应答哪里不同。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "数据",
        title: "数据的去向",
        items: [
          "凭证留在 sonde 里，被录制的程序只拿到一次性密钥。没有遥测，只在你要求时检查更新。",
          "会话只记每个请求的元数据，从不记对象数据，签名和令牌都会被抹掉；程序的输出按原样保存。",
          "默认情况下，程序不能删除对象，也不能覆盖不是它写的对象。`--allow-writes` 解除这一限制；`--policy read-only` 只允许读取。",
          "sonde 自己的破坏性操作（比如中止上传）都要先试运行、再输入确认，并写进审计日志。",
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
            body: "一般不用。`sonde run` 用环境变量和一次性密钥把程序指向本地端点，再用你的真实凭证给每个请求重新签名。已用 boto3、JavaScript v3、Go v2、Java v2 的 AWS SDK 和 object_store 测试过；Spark 和 Flink 的命令也会由它自动指向自己。不读这些环境变量的客户端，需要手动设置端点。",
            asOf: "v18.0.0",
          },
          {
            title: "支持哪些存储？",
            body: "任何兼容 S3 的端点都行，例如 AWS、Cloudflare R2、MinIO、Ceph RGW、阿里云 OSS 和 Tigris；Backblaze B2、Wasabi 和 Google Cloud Storage 的 XML API 也在其中。它的 40 项兼容性探测会把各端点的差异排成一张表。不理会 `If-None-Match` 的存储（比如较旧的 MinIO 和 Ceph）仍会让程序覆盖对象，在那里请用 `--policy read-only`。",
            asOf: "v18.0.0",
          },
          {
            title: "没有账号能先试试吗？",
            body: "可以：`sonde demo` 在内置的存储上带你走一遍，不需要账号。",
            asOf: "v18.0.0",
          },
        ],
      },
    ],
  },
});
