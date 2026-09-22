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
      eyebrow: "Object storage investigations",
      headline: "Inspect S3 with evidence",
      lead: "Describe a bucket problem, or bring an error or log. Storage Agent runs read-only checks on your machine and keeps the results and evidence in the same session.",
      primaryCta: { label: "Download", href: siteConfig.externalLinks.storageAgentWorkbenchReleases },
      secondaryCta: { label: "View on GitHub", href: siteConfig.externalLinks.storageAgentWorkbench },
      meta: `macOS / Windows / Linux · ${facts.latestRelease} · S3-compatible · Apache-2.0`,
      proof: [],
      workflowLabel: "From a question to evidence",
      workflow: [
        {
          title: "Start with the problem",
          body: "Bring an error, access log, bucket configuration, or capacity question. The agent selects tools for the investigation.",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "Inspect the checks",
          body: "Review tool activity and analysis results. Object metadata, log rows, and inventories stay with the session so you can check the conclusion. To park a Pi session on BOS and resume it on another machine, use celagent.",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      positioningLabel: "Data and storage access",
      positioning: [
        {
          title: "Credentials and session records",
          body: "Storage credentials stay in a local encrypted vault. Evidence and conversation history stay in the app’s local data directory. Requests go to your configured model and S3-compatible endpoints.",
          intent: "boundary",
          surface: "protocol",
        },
        {
          title: "Read-only storage tools",
          body: "The app has no tools to write or delete objects or change bucket policies. Downloads, large scans, and evidence imports require your confirmation.",
          intent: "boundary",
          surface: "artifact",
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
      eyebrow: "对象存储排查",
      headline: "查清存储问题，留下依据",
      lead: "描述桶的问题，或带上报错和日志。Storage Agent 在本机执行只读检查，把结果和证据放进同一次会话。",
      primaryCta: { label: "下载", href: siteConfig.externalLinks.storageAgentWorkbenchReleases },
      secondaryCta: { label: "查看 GitHub", href: siteConfig.externalLinks.storageAgentWorkbench },
      meta: `macOS / Windows / Linux · ${facts.latestRelease} · S3 兼容 · Apache-2.0`,
      proof: [],
      workflowLabel: "从问题到证据",
      workflow: [
        {
          title: "从一个问题开始",
          body: "从报错、访问日志、桶配置或容量问题开始。Agent 选择对应工具检查。",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "查看结论的依据",
          body: "查看工具活动和分析结果。对象元数据、日志行和清单随会话保存，可以打开对应证据，再决定下一步怎么处理。要把 Pi 会话停在 BOS、换机器继续，用 celagent。",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      positioningLabel: "数据与操作范围",
      positioning: [
        {
          title: "凭证与会话记录",
          body: "存储凭证保存在本机加密保险库，证据和会话记录保存在本机应用数据目录。请求会发往你配置的模型和 S3 兼容存储端点。",
          intent: "boundary",
          surface: "protocol",
        },
        {
          title: "存储工具只读",
          body: "应用不提供写入、删除或修改桶策略的工具。下载、大范围扫描和证据导入需要你确认。",
          intent: "boundary",
          surface: "artifact",
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
