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
    // The reading of the evidence: its first bullets, legible on a phone.
    detail: { x: 450, y: 430, width: 720, height: 576 },
  },
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
      "Desktop workbench for read-only S3-compatible investigations: keys stay local, and larger reads wait for approval.",
    eyebrow: "Object storage investigations",
    headline: "Inspect S3 with evidence.",
    lead: "Read-only checks. Local keys. Evidence in the session.",
    catalog: {
      role: "S3 investigation",
      text: "Read-only S3 checks. Evidence beside the answer.",
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
        src: "/assets/storage-agent-safety.webp",
        width: 1252,
        height: 908,
        alt: "Storage Agent Safety settings: secrets in the encrypted local vault, read-only cloud access, and approval options for gated tools such as import_evidence",
        kicker: "Safety settings",
        title: "You approve what moves.",
        body: "Keys stay in the local vault. Downloads, large scans, and evidence imports wait for you.",
        beside: "features",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "Every check leaves evidence.",
        items: [
          { title: "Start from the problem", body: "An error, an access log, a bucket config." },
          { title: "The agent picks the tools", body: "Checks chosen for the case." },
          { title: "Evidence stays", body: "Metadata, log rows, inventories." },
          { title: "Read-only tools", body: "No writes, deletes, or policy changes." },
          { title: "You approve", body: "Downloads, large scans, evidence imports." },
          { title: "Keys stay local", body: "An encrypted vault on this machine." },
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "FAQ",
        items: [
          {
            title: "Does it need a model key?",
            body: "No. Local evidence and rule analysis still run without one. Add a model when you want the agent to plan and explain the investigation in chat.",
          },
          {
            title: "Where does my data go?",
            body: "Storage credentials stay in a local encrypted vault. Evidence and conversation history stay in the app’s local data directory. Requests go to the model and S3-compatible endpoints you configure.",
          },
          {
            title: "How is it different from StorageOps?",
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
    lead: "只读检查。密钥在本机。证据在会话里。",
    catalog: {
      role: "S3 排查",
      text: "只读 S3 排查。证据就在结论旁边。",
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
        src: "/assets/storage-agent-safety.webp",
        width: 1252,
        height: 908,
        alt: "Storage Agent 的安全设置：密钥只存在本机加密保险库，云端访问只读，import_evidence 等受控工具有审批选项",
        kicker: "安全设置",
        title: "数据移动由你批准",
        body: "密钥留在本机保险库。下载、大范围扫描和证据导入都等你确认。",
        beside: "features",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "每一步检查都留下依据",
        items: [
          { title: "从问题开始", body: "报错、访问日志、桶配置。" },
          { title: "Agent 选工具", body: "按问题挑检查项。" },
          { title: "证据留下", body: "对象元数据、日志行、清单。" },
          { title: "工具只读", body: "不写入、不删除、不改策略。" },
          { title: "由你确认", body: "下载、大范围扫描、证据导入。" },
          { title: "密钥在本机", body: "保存在本机加密保险库。" },
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "常见问题",
        items: [
          {
            title: "没有模型密钥能用吗？",
            body: "能。本地证据和规则分析照常运行。需要 Agent 在对话里规划与解释时，再接入模型。",
          },
          {
            title: "数据会发到哪里？",
            body: "存储凭证保存在本机加密保险库，证据和会话记录保存在本机应用数据目录。请求会发往你配置的模型和 S3 兼容存储端点。",
          },
          {
            title: "和 StorageOps 有什么不同？",
            body: "StorageOps 给 Pi 加存储技能。Storage Agent 是完整桌面应用：对话、工具、本地分析、证据与确认都在一处。",
          },
        ],
      },
    ],
    finalCta: "下载 Storage Agent",
  },
});
