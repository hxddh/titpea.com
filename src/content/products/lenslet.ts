import { defineProduct } from "../schema";

// Lenslet: runs tests against a local AWS emulator and shows, in each pull
// request, what AWS access the code needs. Facts: the repository's README.md
// and RELEASE_NOTES.md at lenslet-v7.0.0 (the repository used to be celagent;
// that project stopped at v4.1.0; Lenslet's tags are lenslet-v*). Pictures:
// the 7.0 window, captured on macOS at 2x with LENSLET_DEMO=1: the Access
// view with the new DeleteItem selected, and the Calls view on a 404.
export default defineProduct({
  slug: "lenslet",
  line: "storage",
  type: "cli",
  platforms: [{ id: "macos" }, { id: "linux" }],
  license: "Apache-2.0",
  firstOpen: { macos: "once" },
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
    summary: "Shows in each pull request what AWS access your code needs, and why its AWS calls failed.",
    primaryCta: { label: "Download", href: "https://github.com/hxddh/lenslet/releases/latest" },
    secondaryCta: { label: "View source", href: "https://github.com/hxddh/lenslet" },
    privacy: {
      network: "onRequest",
      networkNote: "It forwards your tests’ AWS calls only to the emulator you point it at.",
      stays: "Run files in ~/.lenslet on this computer, owner-only; the lock file in your repository.",
    },
    releaseHighlights: {
      version: "v7.0.0",
      items: [
        "Accept a new permission into `lenslet.lock`, or mark it `# test`, from the window’s Access view without rerunning your tests.",
        "A missing table or bucket error now says why: it was created in another region, or deleted by an earlier call.",
        "Leave out `--upstream` and Lenslet finds your emulator: a loopback `AWS_ENDPOINT_URL`, or LocalStack and Moto on their usual ports.",
      ],
    },
    visual: {
      kind: "screenshot",
      label: "Lenslet",
      frame: "wide",
      image: {
        src: "/assets/lenslet-access-en.webp",
        alt: "Lenslet 7’s Access view after a demo run: seventeen permissions with their resources and call counts; dynamodb:DeleteItem is marked new and selected, with its IAM statement, lock entry and triggering call in the inspector.",
        width: 2448,
        height: 1396,
      },
      caption: "The Access view after a demo run; one permission is new.",
      asOf: "v7.0.0",
    },
    showcases: [
      {
        src: "/assets/lenslet-calls-en.webp",
        width: 2448,
        height: 1396,
        asOf: "v7.0.0",
        alt: "Lenslet 7’s Calls view: the run timeline above a waterfall of AWS calls; a GetObject for a missing key is selected, and the inspector explains the 404 NoSuchKey with its response body.",
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
            body: "The AWS error, and its likely cause, such as a table created in another region.",
          },
          {
            title: "What it needs",
            body: "Each call becomes an IAM action on a resource, implied permissions included.",
          },
          {
            title: "A lock you commit",
            body: "`lenslet.lock` lists your access; `lenslet policy` turns it into an IAM policy without test-only lines.",
          },
          {
            title: "The diff in the PR",
            body: "One comment per pull request; CI fails until someone accepts new access.",
          },
          {
            title: "Blocked locally",
            body: "`--enforce` answers calls outside the lock with AWS `AccessDenied` before they reach the emulator.",
          },
          {
            title: "Your own policy",
            body: "`--policy` checks or enforces a real IAM policy, `Condition` blocks included, instead of the lock.",
          },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "Your data",
        title: "Where your data goes.",
        items: [
          "Lenslet listens on loopback and forwards your tests’ AWS calls only to your emulator.",
          "It removes AWS keys, profile and other cloud credentials from the tests’ environment, so they never reach the emulator or a trace.",
          "Run files in `~/.lenslet/runs` keep headers and bodies unredacted, readable only by you; the last 20 are kept.",
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
            asOf: "v7.0.0",
          },
          {
            title: "Which AWS services does it read?",
            body: "Resources are read for 20 services, among them S3, DynamoDB, SQS, Lambda, Bedrock, KMS, IAM and Step Functions. Other services get `*`; calls it cannot map are reported, not guessed.",
            asOf: "v7.0.0",
          },
          {
            title: "Does it run on Windows?",
            body: "No. There are builds for macOS (universal) and Linux (x86_64 and aarch64), including a static CLI for Alpine and CI images.",
            asOf: "v7.0.0",
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
    summary: "在每个拉取请求里指出代码需要哪些 AWS 权限，以及 AWS 调用为什么失败。",
    primaryCta: { label: "下载", href: "https://github.com/hxddh/lenslet/releases/latest" },
    secondaryCta: { label: "查看源码", href: "https://github.com/hxddh/lenslet" },
    privacy: {
      network: "onRequest",
      networkNote: "它只把测试的 AWS 调用转发给你指定的模拟器。",
      stays: "运行记录存在这台电脑的 ~/.lenslet 里，只有你能读；锁文件在你的代码仓库里。",
    },
    releaseHighlights: {
      version: "v7.0.0",
      items: [
        "在窗口的权限视图里就能把新权限写进 `lenslet.lock`，或标成 `# test`，不用重跑测试。",
        "找不到表或存储桶时会说明原因：它建在另一个区域，或者已被更早的调用删掉。",
        "不写 `--upstream` 时，Lenslet 自己找模拟器：沿用 shell 里已指向本机的 AWS 地址，或探测 LocalStack 和 Moto 的常用端口。",
      ],
    },
    visual: {
      kind: "screenshot",
      label: "Lenslet",
      frame: "wide",
      image: {
        src: "/assets/lenslet-access-en.webp",
        alt: "示例运行后 Lenslet 7 的权限视图：十七项权限，各自的资源和调用次数；dynamodb:DeleteItem 标为新增并选中，右侧检查器显示它的 IAM 语句、锁文件条目和触发调用。",
        width: 2448,
        height: 1396,
      },
      caption: "示例运行后的权限视图，其中一项是新增；界面为英文。",
      asOf: "v7.0.0",
    },
    showcases: [
      {
        src: "/assets/lenslet-calls-en.webp",
        width: 2448,
        height: 1396,
        asOf: "v7.0.0",
        alt: "Lenslet 7 的调用视图：运行时间线下面是 AWS 调用的瀑布图；选中的 GetObject 找不到键，右侧检查器给出 404 NoSuchKey 的原因和响应正文。",
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
            body: "AWS 的错误和可能的原因，比如表建在了另一个区域。",
          },
          {
            title: "需要什么权限",
            body: "每次调用都对应到资源上的 IAM 操作，隐含的权限也算在内。",
          },
          {
            title: "提交一份锁文件",
            body: "`lenslet.lock` 列出所需权限；`lenslet policy` 据此写出 IAM 策略，不含测试专用条目。",
          },
          {
            title: "PR 里的权限差异",
            body: "每个拉取请求一条评论；新增的权限有人认可之前，CI 一直失败。",
          },
          {
            title: "在本地就拦下",
            body: "`--enforce` 对锁文件之外的调用直接回 AWS `AccessDenied`，请求到不了模拟器。",
          },
          {
            title: "用你自己的策略",
            body: "`--policy` 改按一份真实的 IAM 策略检查或拦截，`Condition` 也会判断。",
          },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "你的数据",
        title: "数据的去向",
        items: [
          "Lenslet 只监听本机回环地址，把测试的 AWS 调用转发给你的模拟器，不发往别处。",
          "它会从测试的环境变量里去掉 AWS 密钥、profile 和其他云端凭证，所以它们不会到达模拟器，也不会进入记录。",
          "`~/.lenslet/runs` 里的运行记录不做任何脱敏，保留请求头和正文，只有你能读，最多保留最近 20 次。",
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
            asOf: "v7.0.0",
          },
          {
            title: "能识别哪些 AWS 服务？",
            body: "会读出具体资源的服务有 20 种，包括 S3、DynamoDB、SQS、Lambda、Bedrock、KMS、IAM 和 Step Functions。其他服务的资源记为 `*`；对不上的调用会如实报出，不去猜。",
            asOf: "v7.0.0",
          },
          {
            title: "支持 Windows 吗？",
            body: "不支持。有 macOS（通用版）和 Linux（x86_64、aarch64）的版本，还有适合 Alpine 和 CI 镜像的静态命令行版。",
            asOf: "v7.0.0",
          },
        ],
      },
    ],
  },
});
