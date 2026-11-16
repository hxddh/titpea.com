import { defineProduct } from "../schema";

// Lenslet: runs tests against a local AWS emulator and shows, in each pull
// request, what AWS access the code needs. Facts: the repository's README.md
// and RELEASE_NOTES.md at lenslet-v4.0.0 (the repository used to be celagent;
// that project stopped at v4.1.0). Pictures: docs/access.png and
// docs/lenslet.png from the repository, captured at Lenslet 3.0.0.
export default defineProduct({
  slug: "lenslet",
  line: "storage",
  type: "cli",
  repo: "hxddh/lenslet",
  icon: "/assets/icons/lenslet.webp",
  og: "/assets/og-lenslet.png",
  schema: {
    category: "DeveloperApplication",
    os: "Cross-platform",
  },
  sectionIndex: true,
  en: {
    title: "Lenslet",
    description:
      "Runs your tests against a local AWS emulator, records every AWS call, and shows in each pull request what AWS access your code needs.",
    eyebrow: "AWS access review for CI",
    headline: "AWS access, in every PR.",
    lead: "Run your tests against a local AWS emulator. Lenslet records every call, explains failures, and flags new IAM permissions in the pull request.",
    catalog: {
      role: "AWS access review",
      text: "Shows in each pull request what AWS access your code needs, and why its AWS calls failed.",
    },
    primaryCta: { label: "Download", href: "https://github.com/hxddh/lenslet/releases/latest" },
    secondaryCta: { label: "View source", href: "https://github.com/hxddh/lenslet" },
    installNote:
      "The macOS app is not notarized: the first time, use Open Anyway in System Settings → Privacy & Security.",
    privacy: {
      network: "onRequest",
      networkNote: "It forwards your tests’ AWS calls only to the emulator you point it at.",
      stays: "Run files in ~/.lenslet on this computer, owner-only; the lock file in your repository.",
    },
    meta: "macOS / Linux · Apache-2.0 · {version}",
    releaseHighlights: {
      version: "v4.0.0",
      items: [
        "A GitHub Action runs your tests with `--check`, writes the report to the job summary and keeps one PR comment up to date.",
        "Each new permission names the calls that needed it, so the comment says why, not just which line changed.",
        "`lenslet init -- npm test` checks the emulator, runs your tests once and writes `lenslet.lock` and the CI workflow.",
      ],
    },
    visual: {
      kind: "screenshot",
      label: "Lenslet",
      frame: "wide",
      image: {
        src: "/assets/lenslet-access-en.webp",
        alt: "Lenslet’s Access view after a test run: seventeen permissions, each with its resource and call count; dynamodb:DeleteItem is marked new.",
        width: 1280,
        height: 800,
      },
      caption: "The Access view after a demo run; one permission is new.",
      asOf: "v3.0.0",
    },
    showcases: [
      {
        src: "/assets/lenslet-calls-en.webp",
        width: 1280,
        height: 800,
        asOf: "v3.0.0",
        alt: "Lenslet’s Calls view: each AWS call with its service, status and latency; an S3 NoSuchKey and an SQS QueueDoesNotExist error show in their rows.",
        title: "Why a call failed.",
        body: "Every call, with the AWS error in its row and the request and response a click away.",
      },
    ],
    commands: {
      title: "Get started",
      sub: "Start your emulator first: AWS Emulator, moto and LocalStack all work. `lenslet init` writes the lock and a CI workflow; commit both.",
      items: [
        {
          comment: "Install (Linux, macOS)",
          command: "curl -fsSL https://github.com/hxddh/lenslet/releases/latest/download/install.sh | sh",
        },
        {
          comment: "First run: the lock and the CI workflow",
          command: "lenslet init -- npm test",
        },
        {
          comment: "Fail when the code needs access the lock lacks",
          command: "lenslet run --check -- npm test",
        },
      ],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "Features",
        label: "Why it failed, and what it needs.",
        items: [
          {
            title: "Why it failed",
            body: "The AWS error code and message, with a likely cause for common local failures.",
          },
          {
            title: "What it needs",
            body: "Each call becomes an IAM action on a resource, implied permissions included.",
          },
          {
            title: "A lock you commit",
            body: "`lenslet.lock` lists your project’s access, one permission per line, sorted.",
          },
          {
            title: "The diff in the PR",
            body: "One comment per pull request; CI fails until someone accepts new access.",
          },
          {
            title: "Unused access too",
            body: "`--check --strict` also fails on lock lines the run did not use.",
          },
          {
            title: "A policy from the lock",
            body: "`lenslet policy` writes an IAM policy, leaving out lines only tests need.",
          },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "Your data",
        title: "Where your data goes.",
        items: [
          "Lenslet listens on 127.0.0.1 and forwards your tests’ AWS calls only to the emulator you name.",
          "It removes your real AWS keys and profile from the tests’ environment, so they never reach the emulator or a trace.",
          "Run files in `~/.lenslet/runs` keep raw headers and bodies, readable only by you; the last 20 are kept.",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        nav: "FAQ",
        label: "FAQ",
        items: [
          {
            title: "Is the lock a security review?",
            body: "No. It is the access your tests exercised, mapped by rules. Code paths the tests never reach are not in the lock.",
            asOf: "v4.0.0",
          },
          {
            title: "Which AWS services does it read?",
            body: "Resources are read for S3, DynamoDB, SQS, SNS, Lambda, Secrets Manager, KMS, STS, IAM, EventBridge and Step Functions. Other services get `*`.",
            asOf: "v4.0.0",
          },
          {
            title: "Does it run on Windows?",
            body: "No. There are builds for macOS (universal) and Linux (x86_64 and aarch64), including a static CLI for Alpine and CI images.",
            asOf: "v4.0.0",
          },
        ],
      },
    ],
  },
  zh: {
    title: "Lenslet",
    description: "让测试跑在本地 AWS 模拟器上，记录每一次 AWS 调用，并在每个拉取请求里指出代码需要哪些 AWS 权限。",
    eyebrow: "CI 里的 AWS 权限审查",
    headline: "在 PR 里看清 AWS 权限",
    lead: "让测试跑在本地 AWS 模拟器上。Lenslet 记录每次调用，解释失败原因，并在拉取请求里标出新增的 IAM 权限。",
    catalog: {
      role: "AWS 权限审查",
      text: "在每个拉取请求里指出代码需要哪些 AWS 权限，以及 AWS 调用为什么失败。",
    },
    primaryCta: { label: "下载", href: "https://github.com/hxddh/lenslet/releases/latest" },
    secondaryCta: { label: "查看源码", href: "https://github.com/hxddh/lenslet" },
    installNote: "macOS 应用尚未公证：第一次打开时，到“系统设置 → 隐私与安全性”里点“仍要打开”。",
    privacy: {
      network: "onRequest",
      networkNote: "它只把测试的 AWS 调用转发给你指定的模拟器。",
      stays: "运行记录存在这台电脑的 ~/.lenslet 里，只有你能读；锁文件在你的代码仓库里。",
    },
    meta: "macOS / Linux · Apache-2.0 · {version}",
    releaseHighlights: {
      version: "v4.0.0",
      items: [
        "新增 GitHub Action：用 `--check` 跑测试，把报告写进任务摘要，并在 PR 里只保留一条随时更新的评论。",
        "每个新增权限都写明是哪些调用需要它，评论说清原因，而不只是锁文件多了一行。",
        "`lenslet init -- npm test` 先检查模拟器，再跑一遍测试，写出 `lenslet.lock` 和 CI 工作流。",
      ],
    },
    visual: {
      kind: "screenshot",
      label: "Lenslet",
      frame: "wide",
      image: {
        src: "/assets/lenslet-access-en.webp",
        alt: "一次测试运行后 Lenslet 的权限视图：十七项权限，各自的资源和调用次数；dynamodb:DeleteItem 标为新增。",
        width: 1280,
        height: 800,
      },
      caption: "示例运行后的权限视图，其中一项是新增；界面为英文。",
      asOf: "v3.0.0",
    },
    showcases: [
      {
        src: "/assets/lenslet-calls-en.webp",
        width: 1280,
        height: 800,
        asOf: "v3.0.0",
        alt: "Lenslet 的调用视图：每次 AWS 调用的服务、状态和耗时；S3 的 NoSuchKey 和 SQS 的 QueueDoesNotExist 错误直接显示在行里。",
        title: "调用为什么失败",
        body: "每次调用一行，AWS 错误就写在行里，请求和响应点一下就能看。",
      },
    ],
    commands: {
      title: "开始使用",
      sub: "先启动模拟器：AWS Emulator、moto 和 LocalStack 都可以。`lenslet init` 会写出锁文件和 CI 工作流，两者都要提交。",
      items: [
        {
          comment: "安装（Linux、macOS）",
          command: "curl -fsSL https://github.com/hxddh/lenslet/releases/latest/download/install.sh | sh",
        },
        {
          comment: "第一次运行：生成锁文件和 CI 工作流",
          command: "lenslet init -- npm test",
        },
        {
          comment: "代码需要锁文件里没有的权限时，让检查失败",
          command: "lenslet run --check -- npm test",
        },
      ],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "功能",
        label: "为什么失败，需要什么权限",
        items: [
          {
            title: "为什么失败",
            body: "AWS 的错误码和信息，常见的本地失败还附上可能的原因。",
          },
          {
            title: "需要什么权限",
            body: "每次调用都对应到资源上的 IAM 操作，隐含的权限也算在内。",
          },
          {
            title: "提交一份锁文件",
            body: "`lenslet.lock` 列出项目需要的权限，一行一项，按顺序排好。",
          },
          {
            title: "PR 里的权限差异",
            body: "每个拉取请求一条评论；新增的权限有人认可之前，CI 一直失败。",
          },
          {
            title: "没用到的也会指出",
            body: "`--check --strict` 对这次运行没用到的锁文件条目也会失败。",
          },
          {
            title: "从锁文件生成策略",
            body: "`lenslet policy` 输出 IAM 策略，只有测试需要的条目不计入。",
          },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "你的数据",
        title: "数据的去向",
        items: [
          "Lenslet 只监听 127.0.0.1，把测试的 AWS 调用转发给你指定的模拟器，不发往别处。",
          "它会从测试的环境变量里去掉你真实的 AWS 密钥和 profile，所以密钥不会到达模拟器，也不会进入记录。",
          "`~/.lenslet/runs` 里的运行记录保留原始请求头和正文，只有你能读，最多保留最近 20 次。",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        nav: "常见问题",
        label: "常见问题",
        items: [
          {
            title: "锁文件等于安全审查吗？",
            body: "不等于。它是测试实际用到的权限，按规则推算出来。测试没跑到的代码路径不在锁文件里。",
            asOf: "v4.0.0",
          },
          {
            title: "能识别哪些 AWS 服务？",
            body: "会读出具体资源的服务有 11 种，包括 S3、DynamoDB、SQS、Lambda、KMS 和 IAM。其他服务的资源记为 `*`。",
            asOf: "v4.0.0",
          },
          {
            title: "支持 Windows 吗？",
            body: "不支持。有 macOS（通用版）和 Linux（x86_64、aarch64）的版本，还有适合 Alpine 和 CI 镜像的静态命令行版。",
            asOf: "v4.0.0",
          },
        ],
      },
    ],
  },
});
