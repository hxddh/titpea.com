import { defineProduct } from "../schema";

// Lenslet: a desktop app with an emulated AWS account inside it and a
// terminal pointed at it; it shows each command's calls, what AWS did because
// of them, and the IAM policy they needed. Facts: the repository's README.md
// and RELEASE_NOTES.md at lenslet-v16.0.0, plus RELEASE_NOTES.md at
// lenslet-v14.0.0 (the CLI, the lock and PR comments were removed there) and
// scripts/ and .github/workflows/release.yml for the builds. The repository
// used to be celagent; that project stopped at v4.1.0; Lenslet's tags are
// lenslet-v*. Picture: the repository's docs/lenslet.png at v16.0.0 (1x).
export default defineProduct({
  slug: "lenslet",
  line: "storage",
  type: "desktop",
  platforms: [{ id: "macos" }, { id: "linux" }],
  license: "Apache-2.0",
  firstOpen: { macos: "once" },
  repo: "hxddh/lenslet",
  icon: "/assets/icons/lenslet.webp",
  og: "/assets/og-lenslet.png",
  schema: {
    category: "DeveloperApplication",
  },
  sectionIndex: true,
  en: {
    title: "Lenslet",
    description:
      "A desktop app with an emulated AWS account inside it: run your code in its terminal and see every call, what AWS did because of it, and the IAM policy it needed.",
    eyebrow: "A local AWS account in a window",
    headline: "See what AWS did with each command you run.",
    lead: "It opens on an empty AWS account and a terminal pointed at it. Each command you run shows its calls, what AWS did because of them and the IAM policy it needed.",
    summary: "A local AWS account in a window: each command’s calls, and what AWS did because of them.",
    primaryCta: { label: "Download", href: "https://github.com/hxddh/lenslet/releases/latest" },
    secondaryCta: { label: "View source", href: "https://github.com/hxddh/lenslet" },
    privacy: {
      network: "onRequest",
      networkNote:
        "The AWS account is emulated inside the app; only commands you run in its terminal reach further, and the terminal leaves out your real AWS credentials.",
      stays:
        "The account lives in memory and is gone when you quit; an IAM policy or session export is saved only where you choose.",
    },
    releaseHighlights: {
      version: "v16.0.0",
      items: [
        "The calls are a tree: under an S3 upload sits the function its notification invoked, and under the function its own DynamoDB calls and why one was denied.",
        "Each command you run in the terminal is a run, with how it ended, the first failure and why, what it changed and the IAM policy it needed.",
        "When a function is denied by its role, Allow for role grants exactly what the call needed; Rewind puts the account back as it was before a run, and Run Again repeats it.",
        "The Overview and Permissions pages are gone: the sidebar has two groups, Runs and Resources.",
      ],
    },
    visual: {
      kind: "screenshot",
      label: "Lenslet",
      frame: "wide",
      image: {
        src: "/assets/lenslet-app-en.webp",
        alt: "Lenslet after python upload.py: the run succeeded with 4 calls, 2 of them made by AWS; the calls tree shows an S3 PutObject, the Lambda Invoke it triggered and that function’s DynamoDB PutItem, selected, with the inspector saying AWS made the call; the terminal is below.",
        width: 1260,
        height: 780,
      },
      caption: "A run in Lenslet’s window, from its repository.",
      asOf: "v16.0.0",
    },
    commands: {
      title: "Get started",
      sub: "Download the build for your system from the latest release; on Linux it needs GTK 4.14 or newer. Lenslet’s terminal already has `AWS_ENDPOINT_URL`, the region and placeholder keys set; for another shell, File → Copy Environment copies them.",
      items: [
        {
          comment: "In Lenslet’s terminal: make a queue",
          command: "aws sqs create-queue --queue-name orders",
        },
        {
          comment: "Or run any program that uses an AWS SDK",
          command: "pytest",
        },
      ],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "Features",
        label: "From a command to what AWS did",
        items: [
          {
            title: "Every command is a run",
            body: "Each command in the terminal shows how it ended, its calls, the first failure and why, what it changed and the IAM policy it needed.",
          },
          {
            title: "What AWS did because of it",
            body: "Deliveries, triggers and your functions’ own calls hang under the call that caused them. On AWS this takes CloudTrail, X-Ray and CloudWatch together.",
          },
          {
            title: "Fix it, run it again",
            body: "Allow for role gives a denied function’s role what it needed; Rewind puts the account back as it was before a run; Run Again repeats the command.",
          },
          {
            title: "Every resource, opened",
            body: "Buckets, tables, queues, topics, functions, log groups, secrets and parameters: what each holds and every call that touched it.",
          },
          {
            title: "Every call, in full",
            body: "Request and response, the client and its retry attempt, the request ID; copy any call as an AWS CLI command, curl or boto3.",
          },
        ],
      },
      {
        kind: "faq",
        id: "faq",
        nav: "FAQ",
        label: "FAQ",
        items: [
          {
            title: "Is it a real AWS account?",
            body: "No. It is AWS Emulator running inside Lenslet: account `000000000000` in `us-east-1`, kept in memory. Quitting or starting a new empty account throws it away, and request signatures are not checked, so any credentials work.",
            asOf: "v16.0.0",
          },
          {
            title: "Which AWS services are there?",
            body: "S3, DynamoDB, SQS, SNS, STS, IAM, KMS, Lambda, Secrets Manager, SSM Parameter Store, EventBridge, CloudWatch Logs, Step Functions and Kinesis. A call the emulator does not support is marked “not emulated”, so a gap in the emulator does not look like a bug in your code.",
            asOf: "v16.0.0",
          },
          {
            title: "Does my code need changes?",
            body: "No, if its SDK honours `AWS_ENDPOINT_URL`: boto3, the AWS SDKs for JavaScript, Go, Rust, Java and .NET, and the AWS CLI v2 do.",
            steps: [
              "The AWS CLI v1 sends SQS commands to AWS whatever the endpoint says; the terminal’s placeholder keys keep those away from your account.",
              "Runs come from the terminal’s bash or zsh; calls from other shells and programs appear under All Activity.",
            ],
            asOf: "v16.0.0",
          },
        ],
      },
    ],
  },
  zh: {
    title: "Lenslet",
    description:
      "内置模拟 AWS 账户的桌面应用：在它的终端里运行代码，就能看到每次调用、AWS 因此做了什么，以及所需的 IAM 策略。",
    eyebrow: "窗口里的本地 AWS 账户",
    headline: "看清每条命令在 AWS 里引发了什么",
    lead: "打开它，就有一个空的 AWS 账户，和一个已经指向它的终端。在终端里运行的每条命令，都能看到它的调用、AWS 因此做了什么，以及它需要的 IAM 策略。",
    summary: "窗口里的本地 AWS 账户：看清每条命令的调用，以及 AWS 因此做了什么。",
    primaryCta: { label: "下载", href: "https://github.com/hxddh/lenslet/releases/latest" },
    secondaryCta: { label: "查看源码", href: "https://github.com/hxddh/lenslet" },
    privacy: {
      network: "onRequest",
      networkNote: "AWS 账户在应用内部模拟；只有你在它的终端里运行的命令会连到别处，终端里也不带你真实的 AWS 凭证。",
      stays: "账户只在内存里，退出即清空；IAM 策略和会话导出只存到你选的位置。",
    },
    releaseHighlights: {
      version: "v16.0.0",
      items: [
        "调用现在排成一棵树：S3 上传下面是它的通知触发的函数，函数下面是它自己对 DynamoDB 的调用，以及其中一次为什么被拒。",
        "在终端里运行的每条命令都算一次运行：怎么结束的、第一个失败及原因、改了什么，以及需要的 IAM 策略。",
        "函数被自己的角色拒绝时，“允许角色”只补上这次调用需要的权限；“回到这次运行之前”把账户恢复原样，“再运行一次”重跑命令。",
        "去掉了概览页和权限页：侧栏只剩“运行”和“资源”两组。",
      ],
    },
    visual: {
      kind: "screenshot",
      label: "Lenslet",
      frame: "wide",
      image: {
        src: "/assets/lenslet-app-en.webp",
        alt: "运行 python upload.py 之后的 Lenslet：这次运行成功，共 4 次调用，其中 2 次由 AWS 发起；调用树里是 S3 PutObject、它触发的 Lambda Invoke，以及那个函数的 DynamoDB PutItem（已选中），检查器写明这次调用由 AWS 发起；下方是终端。",
        width: 1260,
        height: 780,
      },
      caption: "Lenslet 窗口里的一次运行，取自它的仓库；界面为英文。",
      asOf: "v16.0.0",
    },
    commands: {
      title: "开始使用",
      sub: "从最新发布里下载对应系统的版本；Linux 上需要 GTK 4.14 或更新。Lenslet 的终端里已经设好指向它的 AWS 地址、区域和占位密钥；别的 shell 要用，可以通过“文件 → 复制环境变量”拷过去。",
      items: [
        {
          comment: "在 Lenslet 的终端里建一个队列",
          command: "aws sqs create-queue --queue-name orders",
        },
        {
          comment: "或者运行任何用到 AWS SDK 的程序",
          command: "pytest",
        },
      ],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "功能",
        label: "从一条命令到 AWS 做了什么",
        items: [
          {
            title: "每条命令都是一次运行",
            body: "终端里的每条命令都能看到它怎么结束、发了哪些调用、第一个失败及原因、改了什么，以及需要的 IAM 策略。",
          },
          {
            title: "AWS 因此做了什么",
            body: "投递、触发器和你的函数自己发出的调用，都挂在引发它们的那次调用下面。在 AWS 上，这要把 CloudTrail、X-Ray 和 CloudWatch 合起来看。",
          },
          {
            title: "改好再跑一次",
            body: "“允许角色”给被拒的函数角色补上它需要的权限；“回到这次运行之前”把账户恢复原样；“再运行一次”重跑命令。",
          },
          {
            title: "每个资源都能打开",
            body: "存储桶、表、队列、主题、函数、日志组、密钥和参数：各自装着什么，以及碰过它的每次调用。",
          },
          {
            title: "每次调用的全貌",
            body: "请求和响应、客户端和它的重试次数、请求 ID；任何一次调用都能复制成 AWS CLI 命令、curl 或 boto3 代码。",
          },
        ],
      },
      {
        kind: "faq",
        id: "faq",
        nav: "常见问题",
        label: "常见问题",
        items: [
          {
            title: "这是真的 AWS 账户吗？",
            body: "不是。它是在 Lenslet 内部运行的 AWS Emulator：账户 `000000000000`，区域 `us-east-1`，只存在内存里。退出应用或新建空账户，它就没了；请求签名不做校验，任何凭证都能用。",
            asOf: "v16.0.0",
          },
          {
            title: "有哪些 AWS 服务？",
            body: "S3、DynamoDB、SQS、SNS、STS、IAM、KMS 和 Lambda。另外还有 Secrets Manager、SSM Parameter Store、EventBridge、CloudWatch Logs、Step Functions 和 Kinesis。模拟器不支持的调用会标成“未模拟”，免得把模拟器的空缺当成你代码的问题。",
            asOf: "v16.0.0",
          },
          {
            title: "代码要改吗？",
            body: "只要 SDK 会读环境变量里的 AWS 端点地址，就不用改。boto3、JavaScript、Go、Rust、Java 和 .NET 的 AWS SDK，以及 AWS CLI v2 都会读。",
            steps: [
              "AWS CLI v1 不管端点怎么设，SQS 命令都发往 AWS；终端里的占位密钥让这些请求碰不到你的账户。",
              "运行来自终端里的 bash 或 zsh；其他 shell 和程序的调用归在“全部活动”下。",
            ],
            asOf: "v16.0.0",
          },
        ],
      },
    ],
  },
});
