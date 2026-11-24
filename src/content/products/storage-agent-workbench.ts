import { defineProduct } from "../schema";

export default defineProduct({
  slug: "storage-agent-workbench",
  line: "storage",
  type: "desktop",
  platforms: [{ id: "macos" }, { id: "windows" }, { id: "linux" }],
  license: "Apache-2.0",
  repo: "hxddh/storage-agent-workbench",
  icon: "/assets/icons/storage-agent-workbench.webp",
  og: "/assets/og-storage-agent-workbench.png",
  schema: {
    category: "DeveloperApplication",
  },
  sectionIndex: false,
  en: {
    title: "Storage Agent",
    description:
      "A local desktop agent for S3 storage and the AWS account around it: ask in plain words; it reads, and changes a bucket setting only when you approve.",
    eyebrow: "Object storage agent",
    headline: "Find S3 problems; nothing changes until you approve.",
    lead: "Ask about your S3 storage in plain words. The agent reads what the services return; it changes a bucket setting only when you approve, and other fixes are yours to run.",
    summary: "An agent for S3 and the account around it; it reads, and a change runs only when you approve it.",
    primaryCta: {
      label: "Download",
      href: "https://github.com/hxddh/storage-agent-workbench/releases",
    },
    secondaryCta: {
      label: "View source",
      href: "https://github.com/hxddh/storage-agent-workbench",
    },
    privacy: {
      network: "automatic",
      networkNote:
        "Requests go to the model and storage endpoints you configure, and to a public host the agent probes; packaged builds check GitHub Releases for updates.",
      stays:
        "Keys sealed in the system keychain, or an encrypted local file; tasks in SQLite and the agent's workspace of notes, datasets and scripts in a folder on this machine; no telemetry.",
    },
    stack: ["S3-compatible"],
    releaseHighlights: {
      version: "v43.0.0",
      items: [
        "The agent keeps a workspace across tasks, with notes, skills, datasets, scripts and a board pinned on Home, and you can open and edit it.",
        "Ask it to watch something and it runs on a schedule in a task of its own, telling you through a system notification and Home's inbox.",
        "On an account where you allow changes, it can propose one reversible bucket-configuration write that runs only when you approve, and can be rolled back.",
        "Tasks and accounts now survive upgrades, and the memory and skills from the previous release move into the workspace on first launch.",
      ],
    },
    visual: {
      kind: "screenshot",
      label: "Storage Agent",
      frame: "wide",
      image: {
        src: "/assets/storage-agent-run.webp",
        alt: "A Storage Agent task on its Prod profile: the question “Which buckets are public?”, then each read listed with its time (S3 ListBuckets, then GetBucketPolicyStatus and GetBucketAcl for web-assets and data-lake, one failing with NoSuchBucketPolicy, HTTP 404) and the answer “web-assets is public” with a citation.",
        width: 2360,
        height: 1410,
      },
      caption: "Storage Agent 42 on a test S3 server, answered by a demo model.",
      asOf: "v42.0.0",
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "Account-wide, changes on approval",
        items: [
          {
            title: "Reads the whole account",
            body: "S3, IAM, KMS, CloudTrail, Config and more.",
          },
          { title: "Open any call", body: "Each step in a task expands to show exactly what the agent received." },
          {
            title: "Questions over many objects",
            body: "The agent writes a sandboxed script, with no network, that lists, counts and reads object bodies.",
          },
          {
            title: "Logs and inventories as tables",
            body: "Access logs, CSV, JSON or Parquet become local SQLite tables, every column kept.",
          },
          {
            title: "Knows where to look",
            body: "Markdown skills cover public access, encryption, cost and more, and you can add your own.",
          },
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "FAQ",
        items: [
          {
            title: "Does it need a model?",
            body: "Yes. Every read goes through the agent, so without a model the window asks you to set one up.",
            steps: [
              "OpenAI, Anthropic or any OpenAI-compatible endpoint works.",
              "Models already running in Ollama or LM Studio are one click away.",
            ],
            asOf: "v43.0.0",
          },
          {
            title: "Will a small local model work?",
            body: "It runs if its window holds at least 16,384 tokens, but how well it investigates depends on the model.",
            steps: [
              "A local model gets the context window its server reports: 4,096 tokens unless loaded with more.",
              "A window under 16,384 tokens is refused, with how to load the model with more.",
              "Results arrive in smaller pieces to fit that window.",
              "The release notes carry a smoke test, not a quality score.",
            ],
            asOf: "v43.0.0",
          },
          {
            title: "Does it watch my account?",
            body: "Only when you ask it to. A watch you ask for is a schedule that runs in its own task, and a run nobody is watching stops at its token budget; otherwise it reads only while you ask.",
            asOf: "v43.0.0",
          },
        ],
      },
    ],
  },
  zh: {
    title: "Storage Agent",
    description:
      "面向 S3 兼容存储及其所在 AWS 账号的本地桌面 Agent：用平常的话提问，它读取各服务返回的内容；只有你批准，它才会改动存储桶设置。",
    eyebrow: "对象存储 Agent",
    headline: "排查 S3 问题，任何改动都等你批准",
    lead: "用平常的话问你的 S3 存储。它读取各服务返回的内容，自己从不改动存储；存储桶设置要经你批准才改，其他修复由你来执行。",
    summary: "S3 排查 Agent，覆盖存储所在的整个账号；它负责读取，改动要你批准才执行。",
    primaryCta: {
      label: "下载",
      href: "https://github.com/hxddh/storage-agent-workbench/releases",
    },
    secondaryCta: {
      label: "查看源码",
      href: "https://github.com/hxddh/storage-agent-workbench",
    },
    privacy: {
      network: "automatic",
      networkNote: "请求发往你配置的模型和存储端点，以及 Agent 探测的公网地址；安装版会向 GitHub Releases 检查更新。",
      stays:
        "密钥封存在系统钥匙串或本机加密文件里；任务存在本机的 SQLite 中，Agent 的笔记、数据集和脚本放在本机的工作区文件夹里；不收集遥测。",
    },
    stack: ["S3 兼容"],
    releaseHighlights: {
      version: "v43.0.0",
      items: [
        "Agent 有了跨任务的工作区，存放笔记、技能、数据集、脚本和固定在首页的看板，你可以打开、修改。",
        "让它盯着什么，它就按计划定时运行，每个计划有自己的任务，有情况会发系统通知，也会进首页收件箱。",
        "在你允许改动的账号上，它可以提议一次可回滚的存储桶配置写入，你批准后才执行，执行后也能回滚。",
        "任务和账号从此能跨版本升级保留；上一版的记忆和技能会在首次启动时移进工作区。",
      ],
    },
    visual: {
      kind: "screenshot",
      label: "Storage Agent",
      frame: "wide",
      image: {
        src: "/assets/storage-agent-run.webp",
        alt: "Storage Agent 在 Prod 配置下的一次任务：问“哪些桶是公开的？”，下面逐条列出每次读取的 S3 操作和用时，其中一次返回 404；回答是 web-assets 公开，带引用。",
        width: 2360,
        height: 1410,
      },
      caption: "Storage Agent 42，连接测试用 S3 服务，由演示模型作答；界面为英文。",
      asOf: "v42.0.0",
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "Agent 能做的事",
        items: [
          { title: "读遍整个账号", body: "S3、IAM、KMS、CloudTrail、Config 等服务都能查。" },
          { title: "每次调用都能展开", body: "任务里的每一步都可以展开，看 Agent 实际收到了什么。" },
          { title: "多对象问题用脚本", body: "Agent 写一段不能联网的沙箱脚本，去列举、统计和读取对象内容。" },
          { title: "日志和清单变成表", body: "访问日志、CSV、JSON、Parquet 导入本地 SQLite，每一列都保留。" },
          { title: "知道从哪查起", body: "Markdown 技能覆盖公开访问、加密、成本等问题，你也可以自己添加。" },
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "常见问题",
        items: [
          {
            title: "需要模型吗？",
            body: "需要。所有读取都经由 Agent，没有模型时窗口会提示你先配置一个。",
            steps: [
              "OpenAI、Anthropic 或任何兼容 OpenAI 的端点都可以。",
              "已在 Ollama 或 LM Studio 里运行的模型一键可选。",
            ],
            asOf: "v43.0.0",
          },
          {
            title: "小的本地模型够用吗？",
            body: "窗口不少于 16,384 个 token 就能运行，但排查得好不好取决于模型。",
            steps: [
              "本地模型使用其服务报告的上下文窗口；没有加载更大的窗口时是 4,096 个 token。",
              "窗口不足 16,384 个 token 会被拒绝，并提示如何加载更大的窗口。",
              "结果会切成更小的片段，以便放进这个窗口。",
              "发布说明只附冒烟测试结果，不代表模型质量。",
            ],
            asOf: "v43.0.0",
          },
          {
            title: "它会在后台巡检吗？",
            body: "会，但只在你要求时。你让它盯着的事会变成一个计划，在自己的任务里运行；没人看着的运行用完 token 预算就停。除此之外，它只在你提问时读取。",
            asOf: "v43.0.0",
          },
        ],
      },
    ],
  },
});
