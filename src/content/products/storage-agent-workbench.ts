import type { AgentWorkbenchProduct } from "../../lib/site";
import { productFacts } from "../productFacts";
import { siteConfig } from "../siteConfig";

const facts = productFacts["storage-agent-workbench"];

export const storageAgentWorkbenchProduct: AgentWorkbenchProduct = {
  slug: "storage-agent-workbench",
  name: "Storage Agent",
  archetype: "agentWorkbench",
  locales: {
    en: {
      title: "Storage Agent",
      description:
        "Desktop workbench for read-only S3-compatible investigations: keys stay local, and larger reads wait for approval.",
      eyebrow: "For SRE & storage ops",
      headline: "Read-only storage investigations",
      lead: "Open a session about a bucket problem; Storage Agent runs read-only checks on your machine and keeps the evidence beside the answer.",
      primaryCta: { label: "Download", href: siteConfig.externalLinks.storageAgentWorkbenchReleases },
      secondaryCta: { label: "View on GitHub", href: siteConfig.externalLinks.storageAgentWorkbench },
      meta: `Tauri desktop · S3-compatible · Apache-2.0 · ${facts.latestRelease} · macOS, Windows, Linux`,
      proof: [],
      workflowLabel: "Ask, then approve",
      workflow: [
        {
          title: "Ask, or pick a starting task",
          body: "Describe an error, bucket, log, or cost question — or start from config review, access logs, inventory, triage, or capacity.",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "The agent investigates with tools",
          body: "It chooses read-only checks under simple budgets for list, preview, and latency. Analysis stays in local app data, with metadata, log rows, inventory, and tool activity kept in the session.",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "You approve larger actions",
          body: "Downloads, large scans, and evidence imports pause for approval; ordinary metadata and preview reads stay within budgets. Then you decide the next step with the evidence in view.",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      positioningLabel: "Keys on disk, storage read-only",
      positioning: [
        {
          title: "Keys and evidence stay on your machine",
          body: "Credentials live in an encrypted local vault; imported evidence, DuckDB state, and chat history stay in local app data. Requests go only to the model and S3-compatible storage endpoints you configure.",
          intent: "boundary",
          surface: "agent",
        },
        {
          title: "It cannot change your storage",
          body: "There are no write, delete, or bucket-policy tools. The agent can investigate; it cannot mutate production. It is not a full S3 browser, sync client, multi-user SaaS, auto-fix, or arbitrary shell.",
          intent: "boundary",
          surface: "protocol",
        },
      ],
      faqLabel: "Read-only, keys, StorageOps",
      faq: [
        {
          title: "Works without a model key",
          body: "Local evidence and rule analysis can still run. Add a model when you want the agent to plan and explain the investigation in chat.",
        },
        {
          title: "Different from StorageOps",
          body: "StorageOps adds storage skills to Pi. Storage Agent is the full desktop app: chat, tools, local analysis, evidence, and approvals in one place.",
        },
      ],
      finalCtaLabel: "Download Storage Agent",
    },
    zh: {
      title: "Storage Agent",
      description: "面向 S3 兼容存储的本地优先桌面工作台：在对话里调用只读工具，证据可见。",
      eyebrow: "面向运维与存储排查",
      headline: "本机只读排查对象存储",
      lead: "打开会话描述桶问题、报错或日志，Storage Agent 在本机做只读检查，并把证据留在回答旁边。",
      primaryCta: { label: "下载", href: siteConfig.externalLinks.storageAgentWorkbenchReleases },
      secondaryCta: { label: "查看 GitHub", href: siteConfig.externalLinks.storageAgentWorkbench },
      meta: `Tauri 桌面 · S3 兼容 · Apache-2.0 · ${facts.latestRelease} · macOS、Windows、Linux`,
      proof: [],
      workflowLabel: "先问，再确认",
      workflow: [
        {
          title: "提问，或选一个起点任务",
          body: "描述报错、桶、日志或成本问题——或从配置审查、访问日志、清单、排障、容量起步。",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "Agent 用工具排查",
          body: "它在列表、预览、延迟等简单预算内选择只读检查。分析结果留在本机应用数据里，元数据、日志行、清单和工具活动跟着这次会话走。",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "较大操作由你确认",
          body: "下载、大扫描和证据导入会先征求同意；日常元数据读取和预览仍在预算内。再对着证据决定下一步。",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      positioningLabel: "密钥在本机，存储只读",
      positioning: [
        {
          title: "密钥和证据留在本机",
          body: "凭证放在本机加密保险库；导入证据、DuckDB 状态和对话历史留在本机应用数据里。请求只发往你配置的模型与 S3 兼容存储端点。",
          intent: "boundary",
          surface: "agent",
        },
        {
          title: "它改不了你的存储",
          body: "没有写、删或改桶策略的工具。Agent 可以调查，不能改生产。它也不是完整 S3 浏览器、同步客户端、多用户 SaaS、自动修复或任意 shell。",
          intent: "boundary",
          surface: "protocol",
        },
      ],
      faqLabel: "只读、密钥与 StorageOps",
      faq: [
        {
          title: "没有模型密钥也能用",
          body: "本地证据和规则分析仍能跑。需要 Agent 在对话里规划与解释时，再接入模型。",
        },
        {
          title: "和 StorageOps 的分工",
          body: "StorageOps 给 Pi 加存储技能。Storage Agent 是完整桌面应用：对话、工具、本地分析、证据与确认都在一处。",
        },
      ],
      finalCtaLabel: "下载 Storage Agent",
    },
  },
};
