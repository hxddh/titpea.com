import { defineProduct } from "../schema";

export default defineProduct({
  slug: "storage-agent-workbench",
  line: "storage",
  featured: {
    image: {
      src: "/assets/storage-agent-investigation.webp",
      width: 1800,
      height: 1290,
      alt: {
        en: "Storage Agent comparing object evidence in a storage investigation",
        zh: "Storage Agent 对比存储调查中的对象证据",
      },
    },
  },
  repo: "hxddh/storage-agent-workbench",
  og: "/assets/og-storage-agent-workbench.png",
  schema: {
    category: "DeveloperApplication",
    os: "Cross-platform",
  },
  sectionIndex: false,
  en: {
    title: "Storage Agent",
    description:
      "Desktop workbench for read-only S3-compatible investigations: keys stay local, and larger reads wait for approval.",
    eyebrow: "Object storage investigations",
    headline: "Inspect S3 with evidence",
    lead: "Describe a bucket problem, or bring an error or log. Storage Agent runs read-only checks on your machine and keeps the results and evidence in the same session.",
    catalog: {
      role: "S3 investigation",
      text: "Read-only S3 investigations on the desktop; the checks stay beside the answer.",
    },
    primaryCta: {
      label: "Download",
      href: "https://github.com/hxddh/storage-agent-workbench/releases",
    },
    secondaryCta: {
      label: "View on GitHub",
      href: "https://github.com/hxddh/storage-agent-workbench",
    },
    meta: "macOS / Windows / Linux · {version} · S3-compatible · Apache-2.0",
    visual: {
      kind: "screenshot",
      label: "Storage Agent",
      frame: "wide",
      image: {
        src: "/assets/storage-agent-investigation.webp",
        alt: "Storage Agent comparing object evidence to explain a storage-class mismatch",
        width: 1800,
        height: 1290,
      },
    },
    showcases: [
      {
        src: "/assets/storage-agent-welcome.webp",
        width: 1800,
        height: 1290,
        alt: "Storage Agent welcome screen with six investigation starting points",
        kicker: "Choose a starting point",
        title: "Start a new investigation",
        body: "Open a conversation or choose an investigation task from the welcome screen.",
        beside: "workflow",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "workflow",
        label: "From a question to evidence",
        items: [
          {
            title: "Start with the problem",
            body: "Bring an error, access log, bucket configuration, or capacity question. The agent selects tools for the investigation.",
          },
          {
            title: "Inspect the checks",
            body: "Review tool activity and analysis results. Object metadata, log rows, and inventories stay with the session so you can check the conclusion. To park a Pi session on BOS and resume it on another machine, use celagent.",
          },
        ],
        numbered: true,
      },
      {
        kind: "cards",
        id: "positioning",
        label: "Data and storage access",
        items: [
          {
            title: "Credentials and session records",
            body: "Storage credentials stay in a local encrypted vault. Evidence and conversation history stay in the app’s local data directory. Requests go to your configured model and S3-compatible endpoints.",
          },
          {
            title: "Read-only storage tools",
            body: "The app has no tools to write or delete objects or change bucket policies. Downloads, large scans, and evidence imports require your confirmation.",
          },
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "Read-only, keys, StorageOps",
        items: [
          {
            title: "Works without a model key",
            body: "Local evidence and rule analysis can still run. Add a model when you want the agent to plan and explain the investigation in chat.",
          },
          {
            title: "Different from StorageOps",
            body: "StorageOps adds storage skills to Pi. Storage Agent is the full desktop app: chat, tools, local analysis, evidence, and approvals in one place.",
          },
        ],
      },
    ],
    finalCta: "Download Storage Agent",
  },
  zh: {
    title: "Storage Agent",
    description: "面向 S3 兼容存储的本地优先桌面工作台：在对话里调用只读工具，证据可见。",
    eyebrow: "对象存储排查",
    headline: "查清存储问题，留下依据",
    lead: "描述桶的问题，或带上报错和日志。Storage Agent 在本机执行只读检查，把结果和证据放进同一次会话。",
    catalog: {
      role: "S3 排查",
      text: "在桌面做只读 S3 排查，检查记录就在结论旁边。",
    },
    primaryCta: {
      label: "下载",
      href: "https://github.com/hxddh/storage-agent-workbench/releases",
    },
    secondaryCta: {
      label: "查看 GitHub",
      href: "https://github.com/hxddh/storage-agent-workbench",
    },
    meta: "macOS / Windows / Linux · {version} · S3 兼容 · Apache-2.0",
    visual: {
      kind: "screenshot",
      label: "Storage Agent",
      frame: "wide",
      image: {
        src: "/assets/storage-agent-investigation.webp",
        alt: "Storage Agent 对比对象证据，解释存储类型差异",
        width: 1800,
        height: 1290,
      },
    },
    showcases: [
      {
        src: "/assets/storage-agent-welcome.webp",
        width: 1800,
        height: 1290,
        alt: "Storage Agent 欢迎页，提供六类调查起点",
        kicker: "选择起点",
        title: "开始一次调查",
        body: "打开会话，或从欢迎页选择一项调查任务。",
        beside: "workflow",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "workflow",
        label: "从问题到证据",
        items: [
          {
            title: "从一个问题开始",
            body: "从报错、访问日志、桶配置或容量问题开始。Agent 选择对应工具检查。",
          },
          {
            title: "查看结论的依据",
            body: "查看工具活动和分析结果。对象元数据、日志行和清单随会话保存，可以打开对应证据，再决定下一步怎么处理。要把 Pi 会话停在 BOS、换机器继续，用 celagent。",
          },
        ],
        numbered: true,
      },
      {
        kind: "cards",
        id: "positioning",
        label: "数据与操作范围",
        items: [
          {
            title: "凭证与会话记录",
            body: "存储凭证保存在本机加密保险库，证据和会话记录保存在本机应用数据目录。请求会发往你配置的模型和 S3 兼容存储端点。",
          },
          {
            title: "存储工具只读",
            body: "应用不提供写入、删除或修改桶策略的工具。下载、大范围扫描和证据导入需要你确认。",
          },
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "只读、密钥与 StorageOps",
        items: [
          {
            title: "没有模型密钥也能用",
            body: "本地证据和规则分析仍能跑。需要 Agent 在对话里规划与解释时，再接入模型。",
          },
          {
            title: "和 StorageOps 的分工",
            body: "StorageOps 给 Pi 加存储技能。Storage Agent 是完整桌面应用：对话、工具、本地分析、证据与确认都在一处。",
          },
        ],
      },
    ],
    finalCta: "下载 Storage Agent",
  },
});
