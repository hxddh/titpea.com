import { defineProduct } from "../schema";

export default defineProduct({
  slug: "storage-agent-workbench",
  line: "storage",
  type: "desktop",
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
      "Local, read-only desktop agent for S3-compatible storage: an account check that needs no model, answers that cite what it read, and risks it remembers between tasks.",
    eyebrow: "Looks after object storage",
    headline: "Find what’s wrong in S3.",
    lead: "It checks your S3 storage without changing anything, ranks what it finds by severity, and writes fixes for you to run.",
    catalog: {
      role: "S3 investigation",
      text: "Read-only S3 checks. What needs attention, remembered between tasks.",
    },
    primaryCta: {
      label: "Download",
      href: "https://github.com/hxddh/storage-agent-workbench/releases",
    },
    secondaryCta: {
      label: "View on GitHub",
      href: "https://github.com/hxddh/storage-agent-workbench",
    },
    privacy: {
      network: "automatic",
      networkNote:
        "Requests go to the model and storage endpoints you configure; packaged builds check GitHub Releases for updates.",
      stays:
        "Keys in the system keychain, or an encrypted local file; tasks in one SQLite database on this machine; no telemetry.",
    },
    meta: "macOS / Windows / Linux · {version} · S3-compatible · Apache-2.0",
    visual: {
      kind: "screenshot",
      label: "Storage Agent",
      frame: "wide",
      image: {
        src: "/assets/storage-agent-run.webp",
        alt: "A Storage Agent run on demo storage: the scope line “All 2 buckets checked”, the question “Which buckets are public?”, a one-sentence answer with a citation, a folded Work row “Worked for 4.7s · 2 calls”, the bucket table it read, and Sources with 8 risks.",
        width: 1180,
        height: 773,
      },
      caption: "Storage Agent 32 with demo storage, from its repository.",
      asOf: "v32.0.0",
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "It remembers what it found.",
        items: [
          { title: "Check without a model", body: "“Check account” surveys and reads access with no key at all." },
          { title: "Names what it missed", body: "Says “All 2 buckets checked”, or names each blind or failed read." },
          { title: "Who changed it", body: "On AWS, CloudTrail names who changed a bucket, over 90 days." },
          { title: "Remembers your storage", body: "Buckets, open Issues and their history, kept between tasks." },
          { title: "Open questions as code", body: "Largest prefixes, data untouched for years: a sandboxed script." },
          { title: "Fixes as text", body: "AWS CLI, Terraform or the API document, with an impact preview." },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "Where your data goes.",
        items: [
          "Keys stay in the system keychain, or an encrypted local file; an AWS profile account stores only its name.",
          "Tasks, logs and inventories are analyzed on this machine; their rows never reach the model.",
          "Requests go to the model and S3-compatible endpoints you configure. Packaged builds check this project’s GitHub Releases for updates.",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "FAQ",
        items: [
          {
            title: "Does it need a model key?",
            body: "Not for “Check account”: it surveys an account and reads access without a model. Questions need one: OpenAI, Anthropic, or any OpenAI-compatible endpoint; models already running in Ollama or LM Studio are one click away. Paste a key and the provider’s models are listed.",
            asOf: "v32.0.0",
          },
          {
            title: "Will a small local model work?",
            body: "Yes. The context window is inferred from the model; below 64k it counts as small and gets fewer rounds. The answer format stays the same.",
            asOf: "v32.0.0",
          },
          {
            title: "Does it watch my account?",
            body: "Not in the background. An account can opt into a daily or weekly read-only check, which runs only while the app is open and never uses a model. A check is a snapshot; “Check again” starts a new one, and “Re-verify” re-reads the buckets a task touched.",
            asOf: "v32.0.0",
          },
          {
            title: "What will a fix change?",
            body: "Each fix comes with a preview of what applying it would change, drawn from what the app has already read, such as anonymous requests in the bucket’s access logs or existing lifecycle rules. When those cannot tell, it says so.",
          },
          {
            title: "Can it change my storage?",
            body: "No. It has no put, delete or other write call, and it never applies a fix: fixes are text for you to run. A bucket list in an account’s settings limits which buckets it may read.",
            asOf: "v32.0.0",
          },
        ],
      },
    ],
  },
  zh: {
    title: "Storage Agent",
    description:
      "面向 S3 兼容存储的本地只读桌面 Agent：账户检查不需要模型，回答引用它读到的内容，发现的风险跨任务保留。",
    eyebrow: "照看对象存储",
    headline: "找出 S3 里的隐患",
    lead: "只读检查你的 S3 存储，不做任何改动。发现的风险按严重度排好，修复写好由你执行。",
    catalog: {
      role: "S3 排查",
      text: "只读 S3 排查。需要关注的问题跨任务保留。",
    },
    primaryCta: {
      label: "下载",
      href: "https://github.com/hxddh/storage-agent-workbench/releases",
    },
    secondaryCta: {
      label: "查看 GitHub",
      href: "https://github.com/hxddh/storage-agent-workbench",
    },
    privacy: {
      network: "automatic",
      networkNote: "请求发往你配置的模型和存储端点；安装版会向 GitHub Releases 检查更新。",
      stays: "密钥在系统钥匙串或本机加密文件里；任务在本机一个 SQLite 数据库中；不收集遥测。",
    },
    meta: "macOS / Windows / Linux · {version} · S3 兼容 · Apache-2.0",
    visual: {
      kind: "screenshot",
      label: "Storage Agent",
      frame: "wide",
      image: {
        src: "/assets/storage-agent-run.webp",
        alt: "Storage Agent 在演示存储上的一次运行：范围行显示 2 个桶都已检查，问题是“哪些桶是公开的？”，一句带引用的回答，折叠的 Work 行显示用时 4.7 秒、2 次调用，下面是读到的桶表格和含 8 个风险的 Sources。",
        width: 1180,
        height: 773,
      },
      caption: "Storage Agent 32 使用演示存储，截图来自项目仓库，界面为英文。",
      asOf: "v32.0.0",
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "查到的问题会记下来",
        items: [
          { title: "不用模型也能检查", body: "“检查账户”不需要任何密钥，就能盘点并读取访问权限。" },
          { title: "说清没读到什么", body: "全部检查完会写明；读不到、读失败的逐一列出。" },
          { title: "谁改的", body: "在 AWS 上用 CloudTrail 查出 90 天内是谁改了桶。" },
          { title: "记住你的存储", body: "桶、未解决的问题和它们的变化记录，跨任务保留。" },
          { title: "开放问题写成代码", body: "最大的前缀、多年没动的数据：在沙箱里跑一段脚本。" },
          { title: "修复只给文本", body: "AWS CLI、Terraform 或 API 文档，附影响预估。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "数据的去向",
        items: [
          "密钥在系统钥匙串或本机加密文件里；AWS profile 账户只存它的名称。",
          "任务、访问日志和清单在本机分析，原始行不会发给模型。",
          "请求发往你配置的模型和 S3 兼容存储端点。安装版会向本项目的 GitHub Releases 检查更新。",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "常见问题",
        items: [
          {
            title: "没有模型密钥能用吗？",
            body: "“检查账户”不需要：不用模型就能盘点账户、读取访问权限。提问需要模型：OpenAI、Anthropic 或任何兼容 OpenAI 的端点；已在 Ollama 或 LM Studio 里运行的模型一键可选。粘贴密钥后会列出该服务的模型。",
            asOf: "v32.0.0",
          },
          {
            title: "小的本地模型够用吗？",
            body: "够用。上下文窗口按模型推断；小于 64k 算小模型，会用更少的轮次，回答格式不变。",
            asOf: "v32.0.0",
          },
          {
            title: "它会在后台巡检吗？",
            body: "不会在后台巡检。每个账户可以选择每天或每周做一次只读检查，只在应用打开时运行，不用模型。每次检查是一个快照；“再检查一次”会新开一个，“重新验证”会重读任务涉及的桶。",
            asOf: "v32.0.0",
          },
          {
            title: "修复会改变什么？",
            body: "每个修复都附带影响预估，来自应用已经读到的内容，例如桶访问日志里的匿名请求或现有的生命周期规则。判断不了时，它会直说。",
          },
          {
            title: "它会改动我的存储吗？",
            body: "不会。它没有写入、删除或任何修改操作，也从不执行修复：修复只是给你运行的文本。在账户设置里填写桶列表，可以限定它能读哪些桶。",
            asOf: "v32.0.0",
          },
        ],
      },
    ],
  },
});
