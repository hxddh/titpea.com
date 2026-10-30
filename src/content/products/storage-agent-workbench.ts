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
      "A local, read-only desktop agent for S3 storage and the AWS account around it: ask in plain words; it reads, and never writes to your storage.",
    eyebrow: "Looks after object storage",
    headline: "Find what’s wrong in S3.",
    lead: "Ask about your S3 storage in plain words. The agent reads what the services return and never changes anything; fixes are yours to run.",
    catalog: {
      role: "S3 investigation",
      text: "A read-only agent for S3 and the account around it; it writes fixes, you run them.",
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
        "Keys sealed in the system keychain, or an encrypted local file; tasks, datasets and memory in SQLite files on this machine; no telemetry.",
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
          { title: "Remembers between tasks", body: "JSON memory the agent recalls itself; it outlives app updates." },
          { title: "Fixes as text", body: "It may write a change for you to apply; the app never runs it." },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "Where your data goes.",
        items: [
          "Keys are sealed in the system keychain, or an encrypted local file; an AWS profile account stores only its name.",
          "Tasks, datasets and memory stay in SQLite files on this machine; account IDs are scrubbed before the model sees anything.",
          "Requests go only to the model and endpoints you configure, and to GitHub Releases for updates. No telemetry.",
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
            asOf: "v40.0.0",
          },
          {
            title: "Will a small local model work?",
            body: "It runs: the context window and output limit come from what the provider reports, with no fixed caps. How well it investigates depends on the model; the project’s release notes carry a smoke test, not a quality score.",
            asOf: "v40.0.0",
          },
          {
            title: "Does it watch my account?",
            body: "No. It reads only while you ask in a task; there is no background or scheduled run.",
            asOf: "v40.0.0",
          },
          {
            title: "What happens when a read is denied?",
            body: "The service’s error comes back as it is, and the call stays in the conversation; saying what could not be read is the agent’s job.",
            asOf: "v40.0.0",
          },
          {
            title: "Can it change my storage?",
            body: "No. No put, delete or other write call exists: only operations whose names say they read will run, and reads that hand out credentials are refused. A bucket list in an account’s settings limits which buckets it may read.",
            asOf: "v40.0.0",
          },
        ],
      },
    ],
  },
  zh: {
    title: "Storage Agent",
    description:
      "面向 S3 兼容存储及其所在 AWS 账号的本地只读桌面 Agent：用平常的话提问，它读取各服务返回的内容，从不写入你的存储。",
    eyebrow: "照看对象存储",
    headline: "找出 S3 里的隐患",
    lead: "用平常的话问你的 S3 存储。Agent 只读取各服务返回的内容，不做任何改动；修复由你来执行。",
    catalog: {
      role: "S3 排查",
      text: "只读的 S3 排查 Agent，覆盖存储所在的整个账号；修复它来写，你来执行。",
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
      stays: "密钥封存在系统钥匙串或本机加密文件里；任务、数据集和记忆存在本机的 SQLite 文件中；不收集遥测。",
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
        label: "每一次读取都看得见",
        items: [
          { title: "读遍整个账号", body: "S3、IAM、KMS、CloudTrail、Config 等，只运行读取操作。" },
          { title: "每一步都能打开", body: "打开任何一次调用，看 Agent 实际收到了什么。" },
          { title: "多对象问题用脚本", body: "沙箱脚本列举、统计、读取对象内容，不能联网。" },
          { title: "日志和清单变成表", body: "访问日志、CSV、JSON、Parquet 导入本地 SQLite，每一列都保留。" },
          { title: "跨任务记住", body: "Agent 自己调取的 JSON 记忆，应用升级后仍在。" },
          { title: "修复是文本", body: "它可以写出变更供你执行，应用从不运行。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "数据的去向",
        items: [
          "密钥封存在系统钥匙串或本机加密文件里；AWS profile 账号只存它的名称。",
          "任务、数据集和记忆存在本机的 SQLite 文件里；模型、窗口和日志看到的内容都会抹去账号 ID。",
          "请求只发往你配置的模型、存储和 AWS 端点。安装版会向本项目的 GitHub Releases 检查更新；不收集遥测。",
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
            asOf: "v40.0.0",
          },
          {
            title: "小的本地模型够用吗？",
            body: "能运行。上下文窗口和输出上限都取自服务商报告的数值，没有固定上限。排查得好不好取决于模型；项目的发布说明只附冒烟测试结果，不代表模型质量。",
            asOf: "v40.0.0",
          },
          {
            title: "它会在后台巡检吗？",
            body: "不会。只有你在任务里提问时它才读取，没有后台或定时运行。",
            asOf: "v40.0.0",
          },
          {
            title: "读取被拒绝时会怎样？",
            body: "服务返回的错误原样带回，这次调用留在对话里；哪些没能读到，由 Agent 来说明。",
            asOf: "v40.0.0",
          },
          {
            title: "它会改动我的存储吗？",
            body: "不会。它没有任何写入或删除调用：只运行名字表明是读取的操作，会交出凭证的读取也会被拒绝。在账号设置里填写桶列表，可以限定它能读哪些桶。",
            asOf: "v40.0.0",
          },
        ],
      },
    ],
  },
});
