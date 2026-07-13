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
        "A desktop agent for read-only S3-compatible storage investigations: it calls tools in a chat thread, keeps evidence visible, and never changes your buckets.",
      eyebrow: "Desktop agent · read-only · S3-compatible",
      headline: "Ask an agent about your storage",
      lead: "Open a chat, describe a bucket problem, error, or log. The agent plans read-only tools, shows what it checked beside the answer, and asks before anything downloads from the cloud.",
      primaryCta: { label: "Download", href: siteConfig.externalLinks.storageAgentWorkbenchReleases },
      secondaryCta: { label: "View on GitHub", href: siteConfig.externalLinks.storageAgentWorkbench },
      meta: "Tauri desktop · S3-compatible · Apache-2.0 · macOS, Windows, Linux",
      proof: ["Chat agent", "Read-only tools", "Evidence visible", "Runs locally", "Never changes storage"],
      featuresLabel: "What makes it different",
      features: [
        {
          title: "Driven by chat, not a console form",
          body: "Investigations happen in a conversation. The agent plans the next checks; the UI follows that thread instead of walking you through storage menus.",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "The agent calls read-only tools",
          body: "It can review config, read metadata, sample objects, import logs or inventory, and query results in DuckDB — without write, delete, or policy-change tools.",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "Method skills, not a plugin market",
          body: "Domain how-to docs load into the thread so the agent follows storage-specific playbooks. That is not an extension store and does not run arbitrary code.",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "Heavy analysis stays local and checkable",
          body: "DuckDB and rule jobs do the heavy lifting on your machine. The agent explains the result and keeps the supporting rows, metadata, and tool activity open beside it.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Answers show what was used — and what is missing",
          body: "Each conclusion lists skills used, evidence used, and gaps, so a fluent answer still has to point at material you can open.",
          intent: "capability",
          surface: "artifact",
        },
      ],
      workflowLabel: "How a session runs",
      workflow: [
        {
          title: "Ask, or pick a starting task",
          body: "Describe an error, bucket, log, or cost question — or start from config review, access logs, inventory, triage, or capacity.",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "The agent investigates with tools",
          body: "It chooses read-only checks and keeps going under simple budgets for list, preview, and latency — so you are not confirming every small read.",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "Evidence lands locally; you can open it",
          body: "Analysis results stay in local app data. Metadata, log rows, inventory, and tool activity stay next to the answer.",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "You approve downloads and large imports",
          body: "Anything that moves data out of the cloud asks first. Then you decide what to fix with the evidence in view.",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      positioningLabel: "Built to investigate safely",
      positioning: [
        {
          title: "Keys and evidence stay on your machine",
          body: "Credentials, imported evidence, DuckDB state, and chat history live in local app data. Requests go only to the model and cloud endpoints you configure.",
          intent: "boundary",
          surface: "agent",
        },
        {
          title: "It cannot change your storage",
          body: "There are no write, delete, or bucket-policy tools. The agent can investigate; it cannot mutate production.",
          intent: "boundary",
          surface: "protocol",
        },
        {
          title: "Confirm only when data would leave the cloud",
          body: "Ordinary reads stay fast. Downloads, large scans, and evidence import always ask for approval.",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "What it is not",
          body: "Not a full S3 file browser or sync client, not multi-user SaaS, not a workflow canvas, not auto-fix or arbitrary shell, and not a CMDB or ticket system.",
          intent: "boundary",
          surface: "protocol",
        },
      ],
      faqLabel: "Questions & how-to",
      faq: [
        {
          title: "What does “agent-native” mean here?",
          body: "The product is a tool-calling investigation agent first — chat thread, skills, read-only tools, visible evidence. It is not a storage console with a chat panel pasted on.",
        },
        {
          title: "How is this different from an S3 console or generic chat?",
          body: "Consoles manage objects. Generic chats wrap APIs. Storage Agent runs the investigation: plan checks, call tools, analyze locally, and show evidence — without changing production storage.",
        },
        {
          title: "Can it change my buckets or objects?",
          body: "No. Cloud access is read-only. There are no write, delete, or config-change tools.",
        },
        {
          title: "What if I have no model API key?",
          body: "Local evidence and rule analysis can still run. Add a model when you want the agent to narrate and plan the investigation in chat.",
        },
        {
          title: "How is this different from StorageOps?",
          body: "StorageOps adds storage skills to Pi. Storage Agent is the full desktop app: chat, tools, local analysis, evidence, and approvals in one place.",
        },
      ],
      finalCta: "Start a read-only storage investigation",
      finalCtaLabel: "Download Storage Agent",
    },
    zh: {
      title: "Storage Agent",
      description: "面向 S3 兼容存储的桌面调查 Agent：在对话里调用只读工具，证据可见，绝不改你的桶。",
      eyebrow: "桌面 Agent · 只读 · S3 兼容",
      headline: "用 Agent 查清你的对象存储问题",
      lead: "打开对话，描述桶问题、报错或日志。Agent 规划只读工具，把查过的内容放在回答旁边；从云上下载或大规模导入前会先问你。",
      primaryCta: { label: "下载", href: siteConfig.externalLinks.storageAgentWorkbenchReleases },
      secondaryCta: { label: "查看 GitHub", href: siteConfig.externalLinks.storageAgentWorkbench },
      meta: "Tauri 桌面 · S3 兼容 · Apache-2.0 · macOS、Windows、Linux",
      proof: ["对话 Agent", "只读工具", "证据可见", "本机运行", "绝不改存储"],
      featuresLabel: "和常见方案差在哪",
      features: [
        {
          title: "靠对话推进，不是控制台表单",
          body: "调查发生在对话里。Agent 规划下一步检查；界面跟着这条对话走，而不是让你点存储菜单。",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "Agent 自己调用只读工具",
          body: "它可以审查配置、读元数据、抽样对象、导入日志或清单，并在 DuckDB 里查询——没有写、删或改策略的工具。",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "方法技能，不是插件市场",
          body: "领域操作说明会进入对话，让 Agent 按存储排查套路做事。这不是扩展商店，也不会执行任意代码。",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "重分析在本地，结果可核对",
          body: "DuckDB 与规则任务在本机完成重活。Agent 负责解释，并把支撑用的行、元数据和工具活动留在回答旁边。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "回答写清用了什么、还缺什么",
          body: "每条结论列出用过的技能、用过的证据和缺口，流畅表述仍须指向你能打开的材料。",
          intent: "capability",
          surface: "artifact",
        },
      ],
      workflowLabel: "一次会话怎么跑",
      workflow: [
        {
          title: "提问，或选一个起点任务",
          body: "描述报错、桶、日志或成本问题——或从配置审查、访问日志、清单、排障、容量起步。",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "Agent 用工具排查",
          body: "它选择只读检查，并在列表、预览、延迟等简单预算内继续推进——小读取不必处处确认。",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "证据落在本地，你可以打开",
          body: "分析结果留在本机应用数据里。元数据、日志行、清单和工具活动留在回答旁边。",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "下载和大导入由你确认",
          body: "凡是数据会离开云的操作都会先问。再对着证据决定怎么改。",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      positioningLabel: "为安全排查而设计",
      positioning: [
        {
          title: "密钥和证据留在本机",
          body: "凭证、导入证据、DuckDB 状态和对话历史都在本机应用数据里。请求只发往你配置的模型与云端点。",
          intent: "boundary",
          surface: "agent",
        },
        {
          title: "它改不了你的存储",
          body: "没有写、删或改桶策略的工具。Agent 可以调查，不能改生产。",
          intent: "boundary",
          surface: "protocol",
        },
        {
          title: "只有数据要离开云时才确认",
          body: "普通读取保持顺畅。下载、大扫描和证据导入一定会征求同意。",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "它刻意不是什么",
          body: "不是完整 S3 文件浏览器或同步客户端，不是多用户 SaaS，不是工作流画布，不是自动修复或任意 shell，也不是配置库或工单系统。",
          intent: "boundary",
          surface: "protocol",
        },
      ],
      faqLabel: "问题与用法",
      faq: [
        {
          title: "这里的 agent-native 是什么意思",
          body: "产品首先是会调工具的调查 Agent：对话、技能、只读工具、可见证据。不是在存储控制台上贴一个聊天框。",
        },
        {
          title: "和 S3 控制台或通用聊天差在哪",
          body: "控制台管对象；通用聊天只是包一层接口。Storage Agent 负责整段调查：规划检查、调用工具、本地分析、展示证据——且不改生产存储。",
        },
        {
          title: "它会改我的桶或对象吗",
          body: "不会。云访问只读。没有写、删或改配置的工具。",
        },
        {
          title: "没有模型密钥也能用吗",
          body: "可以。本地证据和规则分析仍能跑。需要 Agent 在对话里规划与叙述时，再接入模型。",
        },
        {
          title: "和 StorageOps 有什么区别",
          body: "StorageOps 给 Pi 加存储技能。Storage Agent 是完整桌面应用：对话、工具、本地分析、证据与确认都在一处。",
        },
      ],
      finalCta: "开始一次只读的存储调查",
      finalCtaLabel: "下载 Storage Agent",
    },
  },
};
