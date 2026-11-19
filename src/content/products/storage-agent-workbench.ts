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
    os: "Cross-platform",
  },
  sectionIndex: false,
  en: {
    title: "Storage Agent",
    description:
      "A local, read-only desktop agent for S3 storage and the AWS account around it: ask in plain words; it reads, and never writes to your storage.",
    eyebrow: "Object storage agent",
    headline: "Find what’s wrong in S3.",
    lead: "Ask about your S3 storage in plain words. The agent reads what the services return and never changes anything; fixes are yours to run.",
    summary: "A read-only agent for S3 and the account around it; it writes fixes, you run them.",
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
        "Requests go to the model and storage endpoints you configure; packaged builds check GitHub Releases for updates.",
      stays:
        "Keys sealed in the system keychain, or an encrypted local file; tasks, datasets and memory in SQLite files on this machine; no telemetry.",
    },
    stack: ["S3-compatible"],
    releaseHighlights: {
      version: "v42.0.0",
      items: [
        "Account IDs, access key IDs and ARNs reach the agent unmasked, so it can tell your account from another; secrets stay redacted.",
        "Nine bundled skills tell the agent which reads settle a question, from public access to cost; you can edit them or add your own.",
        "Every model saved in Settings keeps its own key, and a local model runs with the context window its server reports.",
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
        label: "Every read, shown and kept.",
        items: [
          {
            title: "Reads the whole account",
            body: "S3, IAM, KMS, CloudTrail, Config and more: only operations that read.",
          },
          { title: "Every step opens", body: "Open any call to see exactly what the agent received." },
          {
            title: "Questions over many objects",
            body: "A sandboxed script lists, counts and reads object bodies, with no network.",
          },
          {
            title: "Logs and inventories as tables",
            body: "Access logs, CSV, JSON or Parquet become local SQLite tables, every column kept.",
          },
          {
            title: "Remembers between tasks",
            body: "It saves notes as JSON and looks them up when needed; they survive app updates.",
          },
          {
            title: "Knows where to look",
            body: "Markdown skills on public access, encryption, cost and more; add your own.",
          },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "Where your data goes.",
        items: [
          "Keys are sealed in the system keychain, or an encrypted local file; an AWS profile account stores only its name.",
          "Tasks, datasets and memory stay in SQLite files here. Secret keys and session tokens are redacted before the model sees them.",
          "Requests go only to the model and endpoints you configure; packaged builds also check GitHub Releases for updates. No telemetry.",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "FAQ",
        items: [
          {
            title: "Does it need a model?",
            body: "Yes. Every read goes through the agent, so without a model the window asks for one. OpenAI, Anthropic or any OpenAI-compatible endpoint works; models already running in Ollama or LM Studio are one click away.",
            asOf: "v42.0.0",
          },
          {
            title: "Will a small local model work?",
            body: "It runs: a local model gets the context window its server reports (4,096 tokens unless loaded with more), and results arrive in smaller pieces to fit. How well it investigates depends on the model; the release notes carry a smoke test, not a quality score.",
            asOf: "v42.0.0",
          },
          {
            title: "Does it watch my account?",
            body: "No. It reads only while you ask in a task; there is no background or scheduled run.",
            asOf: "v42.0.0",
          },
        ],
      },
    ],
  },
  zh: {
    title: "Storage Agent",
    description:
      "面向 S3 兼容存储及其所在 AWS 账号的本地只读桌面 Agent：用平常的话提问，它读取各服务返回的内容，从不写入你的存储。",
    eyebrow: "对象存储 Agent",
    headline: "找出 S3 里的隐患",
    lead: "用平常的话问你的 S3 存储。它只读取各服务返回的内容，不做任何改动；修复由你来执行。",
    summary: "只读的 S3 排查 Agent，覆盖存储所在的整个账号；修复它来写，你来执行。",
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
      networkNote: "请求发往你配置的模型和存储端点；安装版会向 GitHub Releases 检查更新。",
      stays: "密钥封存在系统钥匙串或本机加密文件里；任务、数据集和记忆存在本机的 SQLite 文件中；不收集遥测。",
    },
    stack: ["S3 兼容"],
    releaseHighlights: {
      version: "v42.0.0",
      items: [
        "账号 ID、访问密钥 ID 和 ARN 不再遮蔽，Agent 能分清你的账号和别人的账号；密钥类内容仍会脱敏。",
        "内置九个技能，告诉 Agent 从公开访问到成本，各类问题该看哪些读取结果；你可以修改，也可以自己添加。",
        "设置里保存的每个模型都有自己的密钥；本地模型按其服务报告的上下文窗口运行。",
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
        label: "每一次读取都看得见",
        items: [
          { title: "读遍整个账号", body: "S3、IAM、KMS、CloudTrail、Config 等，只运行读取操作。" },
          { title: "每一步都能打开", body: "打开任何一次调用，看 Agent 实际收到了什么。" },
          { title: "多对象问题用脚本", body: "沙箱脚本列举、统计、读取对象内容，不能联网。" },
          { title: "日志和清单变成表", body: "访问日志、CSV、JSON、Parquet 导入本地 SQLite，每一列都保留。" },
          { title: "跨任务记住", body: "它把要记的内容存成 JSON，需要时自己查；应用升级后仍在。" },
          { title: "知道从哪查起", body: "Markdown 技能涵盖公开访问、加密、成本等，也可以自己添加。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "数据的去向",
        items: [
          "密钥封存在系统钥匙串或本机加密文件里；AWS profile 账号只存它的名称。",
          "任务、数据集和记忆存在本机的 SQLite 文件里。私有密钥、会话令牌和密码在发给模型之前就会脱敏。",
          "请求只发往你配置的模型和端点；安装版还会向 GitHub Releases 检查更新。不收集遥测。",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "常见问题",
        items: [
          {
            title: "需要模型吗？",
            body: "需要。所有读取都经由 Agent，没有模型时窗口会提示你配置。OpenAI、Anthropic 或任何兼容 OpenAI 的端点都可以；已在 Ollama 或 LM Studio 里运行的模型一键可选。",
            asOf: "v42.0.0",
          },
          {
            title: "小的本地模型够用吗？",
            body: "能运行。本地模型使用其服务报告的上下文窗口（未加载更大窗口时为 4,096 个 token），结果会切成更小的片段放进去。排查得好不好取决于模型；发布说明只附冒烟测试结果，不代表模型质量。",
            asOf: "v42.0.0",
          },
          {
            title: "它会在后台巡检吗？",
            body: "不会。只有你在任务里提问时它才读取，没有后台或定时运行。",
            asOf: "v42.0.0",
          },
        ],
      },
    ],
  },
});
