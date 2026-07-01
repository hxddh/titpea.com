import type { AgentWorkbenchProduct } from "../../lib/site";
import { siteConfig } from "../siteConfig";

export const storageAgentWorkbenchProduct: AgentWorkbenchProduct = {
  slug: "storage-agent-workbench",
  name: "Storage Agent Workbench",
  archetype: "agentWorkbench",
  locales: {
    en: {
      title: "Storage Agent Workbench",
      description:
        "Storage Agent Workbench is a local, evidence-driven desktop app whose agent investigates S3-compatible storage read-only.",
      eyebrow: "Tauri desktop app",
      headline: "An agentic workbench for object storage",
      lead: "A local desktop app that puts an agent to work on your S3-compatible storage — reviewing configuration, analyzing logs, and triaging errors, all read-only and on your machine.",
      primaryCta: { label: "Download", href: siteConfig.externalLinks.storageAgentWorkbenchReleases },
      secondaryCta: { label: "View on GitHub", href: siteConfig.externalLinks.storageAgentWorkbench },
      meta: "Tauri desktop app · macOS, Windows, Linux · Apache-2.0",
      proof: ["Read-only", "Local-first", "DuckDB analysis", "Apache-2.0"],
      featuresLabel: "Capabilities",
      features: [
        {
          title: "Configuration review",
          body: "Read bucket policies, ACLs, encryption, and public-access settings, then flag the risky combinations.",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "Log and inventory analysis",
          body: "Import access logs and inventory locally, then let DuckDB answer questions about usage and access.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Error triage",
          body: "Bring a failing request or error and the agent narrows it to a cause with the evidence attached.",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "Cost and usage profiling",
          body: "See where storage and requests concentrate, so cleanup and tiering target the right prefixes.",
          intent: "capability",
          surface: "artifact",
        },
      ],
      workflowLabel: "How a session runs",
      workflow: [
        {
          title: "Connect an account",
          body: "Add read-only credentials for an S3-compatible account; they stay in the app on your machine.",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "Import evidence",
          body: "Point it at inventory or access-log exports, or read live metadata — read-only, never writing back.",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "Let the agent work",
          body: "The agent plans an investigation, runs the analysis in DuckDB, and threads its findings in the session.",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "Read the evidence",
          body: "Every finding links back to the log rows or configuration it came from, so you can verify before acting.",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      faqLabel: "Questions & how-to",
      faq: [
        {
          title: "Does my data leave my machine?",
          body: "No. Credentials, imported evidence, and analysis stay local. The workbench is built to investigate without moving data out.",
        },
        {
          title: "How is this different from StorageOps?",
          body: "StorageOps gives an existing agent (Pi) storage skills; Storage Agent Workbench is a self-contained desktop app that runs the investigation on its own.",
        },
        {
          title: "Can it change my storage?",
          body: "No. Investigations are read-only by design. It reads configuration, logs, and metadata and leaves the account untouched.",
        },
        {
          title: "What platforms does it run on?",
          body: "It is a Tauri desktop app for macOS, Windows, and Linux. The project is Apache-2.0.",
        },
      ],
      finalCta: "Investigate your storage locally",
      finalCtaLabel: "Download the workbench",
    },
    zh: {
      title: "Storage Agent Workbench",
      description: "Storage Agent Workbench 是本地、证据驱动的桌面应用，agent 只读调查 S3 兼容存储。",
      eyebrow: "Tauri 桌面应用",
      headline: "对象存储的 agent 工作台",
      lead: "本地桌面应用，把一个 agent 派去查你的 S3 兼容存储——审配置、看日志、定位报错，全程只读，证据留在本机。",
      primaryCta: { label: "下载", href: siteConfig.externalLinks.storageAgentWorkbenchReleases },
      secondaryCta: { label: "查看 GitHub", href: siteConfig.externalLinks.storageAgentWorkbench },
      meta: "Tauri 桌面应用 · macOS、Windows、Linux · Apache-2.0",
      proof: ["只读", "本地优先", "DuckDB 分析", "Apache-2.0"],
      featuresLabel: "能做什么",
      features: [
        {
          title: "配置审查",
          body: "读取存储桶策略、ACL、加密与公开访问设置，标出有风险的组合。",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "日志与清单分析",
          body: "把访问日志和清单导入本地，用 DuckDB 回答用量和访问方面的问题。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "报错定位",
          body: "把失败的请求或报错交给它，agent 会连着证据把原因缩到具体一点。",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "成本与用量画像",
          body: "看清存储和请求集中在哪里，清理和分层就能对准真正的前缀。",
          intent: "capability",
          surface: "artifact",
        },
      ],
      workflowLabel: "一次会话怎么跑",
      workflow: [
        {
          title: "连接账户",
          body: "为 S3 兼容账户填入只读凭证；凭证留在你机器上的应用里。",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "导入证据",
          body: "指向清单或访问日志导出，或读取实时元数据——只读，绝不回写。",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "交给 agent",
          body: "agent 规划一次调查，在 DuckDB 里跑分析，并把发现按线程整理在会话里。",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "查看证据",
          body: "每条发现都链回它依据的日志行或配置，动手前你能自己核对。",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      faqLabel: "问题与用法",
      faq: [
        {
          title: "我的数据会离开本机吗",
          body: "不会。凭证、导入的证据和分析都留在本地；这个工作台就是为了不搬数据也能调查。",
        },
        {
          title: "和 StorageOps 有什么区别",
          body: "StorageOps 让你已有的 agent（Pi）会查存储；Storage Agent Workbench 是自成一体的桌面应用，自己完成整个调查。",
        },
        {
          title: "它会改动我的存储吗",
          body: "不会。调查按设计是只读的。它读取配置、日志和元数据，不动账户本身。",
        },
        {
          title: "支持哪些平台",
          body: "它是面向 macOS、Windows 和 Linux 的 Tauri 桌面应用。项目采用 Apache-2.0。",
        },
      ],
      finalCta: "在本地开始调查你的存储",
      finalCtaLabel: "下载工作台",
    },
  },
};
