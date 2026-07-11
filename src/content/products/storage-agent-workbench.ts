import type { AgentWorkbenchProduct } from "../../lib/site";
import { siteConfig } from "../siteConfig";

export const storageAgentWorkbenchProduct: AgentWorkbenchProduct = {
  slug: "storage-agent-workbench",
  name: "Storage Agent",
  archetype: "agentWorkbench",
  locales: {
    en: {
      title: "Storage Agent",
      description:
        "Native desktop agent for read-only S3-compatible storage investigations with inspected evidence visible.",
      eyebrow: "Native desktop agent",
      headline: "Ask about your storage. See the evidence",
      lead: "Bring a bucket, object, log, or error. The agent performs read-only checks and leaves the inspected metadata, content, tool activity, and reasoning beside its conclusion.",
      primaryCta: { label: "Download", href: siteConfig.externalLinks.storageAgentWorkbenchReleases },
      secondaryCta: { label: "View on GitHub", href: siteConfig.externalLinks.storageAgentWorkbench },
      meta: "Tauri desktop app · macOS, Windows, Linux · Apache-2.0",
      proof: ["Read-only", "Local-first"],
      featuresLabel: "Capabilities",
      features: [
        {
          title: "Review bucket configuration",
          body: "Policies, ACLs, encryption, versioning, and public-access settings — flagged when a combination is risky.",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "Analyze access logs",
          body: "Import access logs and query them in DuckDB: who read what, hot prefixes, and unusual access.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Inventory and capacity",
          body: "Turn an inventory into answers about object counts, sizes, storage classes, and growth.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Map accounts and buckets",
          body: "Sort out which buckets exist across accounts, what each is for, and which look orphaned.",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "Triage errors",
          body: "Bring a failing request; it checks the object with range reads and metadata to narrow the cause.",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "Optimize cost and storage",
          body: "See where cost concentrates and where lifecycle or tiering would actually help.",
          intent: "capability",
          surface: "artifact",
        },
      ],
      workflowLabel: "How a session runs",
      workflow: [
        {
          title: "Ask in plain language",
          body: "Start a chat, or pick a task like review bucket config or analyze access logs.",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "The agent plans",
          body: "It picks read-only tools, reads policy, metadata, and logs, and works in DuckDB.",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "Keep the basis visible",
          body: "Findings keep the inspected metadata, content, log rows, config lines, and tool activity close to the conclusion.",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "You decide",
          body: "Read the diagnosis, approve anything that moves data, and act with the evidence in hand.",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      positioningLabel: "Local and read-only",
      positioning: [
        {
          title: "Keys in a local vault",
          body: "Credentials live in an encrypted vault on your machine and are never written to logs, reports, or model prompts.",
          intent: "boundary",
          surface: "agent",
        },
        {
          title: "Read-only cloud access",
          body: "The agent can inspect but not write: no deletes, no overwrites, no configuration changes.",
          intent: "boundary",
          surface: "protocol",
        },
        {
          title: "You approve data movement",
          body: "Downloads, large scans, and dataset analysis always ask first — nothing leaves without your go-ahead.",
          intent: "boundary",
          surface: "artifact",
        },
      ],
      faqLabel: "Questions & how-to",
      faq: [
        {
          title: "Which AI model does it use?",
          body: "You bring your own: configure a model provider and key. The key stays in the local vault and is never sent anywhere but your chosen provider.",
        },
        {
          title: "Does my data leave my machine?",
          body: "No. Credentials, imported evidence, and analysis stay local; any action that moves data asks for consent first.",
        },
        {
          title: "Can it change my storage?",
          body: "No. Cloud access is read-only by design — no writes, deletes, or configuration changes.",
        },
        {
          title: "How is this different from StorageOps?",
          body: "StorageOps gives an existing agent (Pi) storage skills; Storage Agent is a self-contained desktop app that runs the whole investigation itself.",
        },
        {
          title: "What platforms does it run on?",
          body: "A Tauri desktop app for macOS, Windows, and Linux. The project is Apache-2.0.",
        },
      ],
      finalCta: "Investigate with the evidence still visible",
      finalCtaLabel: "Download Storage Agent",
    },
    zh: {
      title: "Storage Agent",
      description: "面向 S3 兼容存储的本地原生 agent：只读调查，并把检查过的依据留在结论旁边。",
      eyebrow: "本地原生 agent",
      headline: "问一句存储，拿回检查过的现场依据",
      lead: "给它一个存储桶、对象、日志或报错。agent 只读检查，并把元数据、内容、工具活动与推理过程放在结论旁边。",
      primaryCta: { label: "下载", href: siteConfig.externalLinks.storageAgentWorkbenchReleases },
      secondaryCta: { label: "查看 GitHub", href: siteConfig.externalLinks.storageAgentWorkbench },
      meta: "Tauri 桌面应用 · macOS、Windows、Linux · Apache-2.0",
      proof: ["只读", "本地优先"],
      featuresLabel: "能做什么",
      features: [
        {
          title: "审查桶配置",
          body: "策略、ACL、加密、版本控制和公开访问设置——组合有风险时会标出来。",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "分析访问日志",
          body: "把访问日志导入本地，用 DuckDB 查：谁读了什么、热点前缀、异常访问。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "清单与容量",
          body: "把清单变成可回答的问题：对象数量、大小、存储类别和增长。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "梳理账号与桶",
          body: "理清跨账号有哪些存储桶、各自的用途，以及哪些像是没人管的。",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "诊断错误",
          body: "把失败的请求交给它，用 range 读取和元数据把原因缩到具体一点。",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "优化存储",
          body: "看清成本集中在哪里，哪里做生命周期或分层才真的有用。",
          intent: "capability",
          surface: "artifact",
        },
      ],
      workflowLabel: "一次会话怎么跑",
      workflow: [
        {
          title: "用大白话问",
          body: "开一段对话，或直接选「审查桶配置」「分析访问日志」这类任务。",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "agent 来规划",
          body: "它挑只读工具，读策略、元数据和日志，在 DuckDB 里分析。",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "让依据留在结论旁边",
          body: "每条发现都保留检查过的元数据、内容、日志行、配置行与工具活动。",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "你来拍板",
          body: "看完综合诊断，涉及搬数据的再点确认，带着证据动手。",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      positioningLabel: "本地 · 只读",
      positioning: [
        {
          title: "密钥进本机保险库",
          body: "凭证存在本机加密保险库里，绝不写进日志、报告或模型提示词。",
          intent: "boundary",
          surface: "agent",
        },
        {
          title: "云访问只读",
          body: "agent 只能看、不能写：不删除、不覆盖、不改配置。",
          intent: "boundary",
          surface: "protocol",
        },
        {
          title: "搬数据你说了算",
          body: "下载、大规模扫描、数据集分析都会先问你——没有你的同意什么都不会外流。",
          intent: "boundary",
          surface: "artifact",
        },
      ],
      faqLabel: "问题与用法",
      faq: [
        {
          title: "它用哪个 AI 模型",
          body: "你自带：配置一个模型提供商和 key。key 留在本机保险库，除了你选的提供商不会发去别处。",
        },
        {
          title: "我的数据会离开本机吗",
          body: "不会。凭证、导入的证据和分析都留在本地；涉及搬运数据的操作会先征得你同意。",
        },
        {
          title: "它会改动我的存储吗",
          body: "不会。云访问按设计只读——不写、不删、不改配置。",
        },
        {
          title: "和 StorageOps 有什么区别",
          body: "StorageOps 让你已有的 agent（Pi）会查存储；Storage Agent 是自成一体的桌面应用，自己完成整个调查。",
        },
        {
          title: "支持哪些平台",
          body: "面向 macOS、Windows 和 Linux 的 Tauri 桌面应用。项目采用 Apache-2.0。",
        },
      ],
      finalCta: "带着可见依据调查存储",
      finalCtaLabel: "下载 Storage Agent",
    },
  },
};
