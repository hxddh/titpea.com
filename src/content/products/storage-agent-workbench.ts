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
        "Agent-native desktop workbench for read-only S3-compatible storage investigations — thread-first tools, skills, grounding, and deterministic DuckDB runs.",
      eyebrow: "Agent-native · read-only · local-first",
      headline: "Agent-native, read-only storage triage",
      lead: "Not an S3 console with chat bolted on. An agent-native thread: plan tools and skills, narrate triage, ground conclusions — DuckDB runs stay deterministic; storage stays read-only.",
      primaryCta: { label: "Download", href: siteConfig.externalLinks.storageAgentWorkbenchReleases },
      secondaryCta: { label: "View on GitHub", href: siteConfig.externalLinks.storageAgentWorkbench },
      meta: "Tauri desktop · S3-compatible · Apache-2.0 · macOS, Windows, Linux",
      proof: ["Agent thread", "Tool loop", "Skills", "Grounding cards", "Never mutates"],
      featuresLabel: "Agent-native by design",
      features: [
        {
          title: "Thread-first agent, not chat-on-console",
          body: "Investigations live in a Codex-style thread: the agent plans, calls tools, loads skills, and keeps going under read budgets — the UI follows the agent, not the other way around.",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "Whitelisted tools the agent can drive",
          body: "Config review, metadata, range reads, log/inventory import, and DuckDB queries are agent-callable. Writes, deletes, and policy changes are absent — even test-write is only a reserved enum.",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "Skills are methods the agent loads",
          body: "StorageOps-style skill docs inject domain judgment into the thread. They are not a plugin market and do not open an RCE surface.",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "One agent narrator; runs are the floor",
          body: "A single LLM surface owns the story. Heavy analysis is deterministic DuckDB / rule runs the agent can trigger — no second “UI pipeline brain” fighting the thread.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Grounding cards close the loop",
          body: "Answers expose skills used, evidence used, and evidence gaps, so fluent narration still has to land on tool results and run artifacts you can open.",
          intent: "capability",
          surface: "artifact",
        },
      ],
      workflowLabel: "How an agent session runs",
      workflow: [
        {
          title: "Start a thread",
          body: "Ask in plain language, or launch a task — config, access logs, inventory, error triage, cost. Built for storage / SRE / data-infra folks on S3-compatible stacks.",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "Agent plans tools and skills",
          body: "It selects whitelisted read tools and method skills, then works under bounds (list/preview/latency caps) so the loop stays fluent without constant prompts.",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "Runs produce evidence; agent narrates",
          body: "DuckDB / rule jobs land local artifacts. The agent reads them back into the thread and keeps metadata, logs, and tool activity inspectable beside the answer.",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "You stay in the loop on data-moving",
          body: "Downloads, large scans, and evidence import ask first. Everything else in the investigation stays read-only — then you decide with grounding in view.",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      positioningLabel: "Safe agent boundaries",
      positioning: [
        {
          title: "Local-first agent runtime",
          body: "Thread state, evidence, DuckDB, and keys live in local app-data. Requests go only to the model and cloud endpoints you configure.",
          intent: "boundary",
          surface: "agent",
        },
        {
          title: "Never mutates storage",
          body: "The agent cannot write, delete, or change bucket policy. Autonomy applies to investigation — not to production mutation.",
          intent: "boundary",
          surface: "protocol",
        },
        {
          title: "Gates only when data would move",
          body: "Read-only tool use stays bounded, not gated. Confirmation cost is spent where data would leave the cloud.",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "Clear non-goals",
          body: "Not a full S3 browser or sync disk, not multi-user SaaS, not a workflow canvas or plugin market, not auto-remediation or arbitrary shell, not a CMDB or ticket system.",
          intent: "boundary",
          surface: "protocol",
        },
      ],
      faqLabel: "Questions & how-to",
      faq: [
        {
          title: "What does “agent-native” mean here?",
          body: "The product is a tool-calling investigation agent first: thread, skills, whitelisted tools, and grounding. It is not a storage console with a chat panel pasted on.",
        },
        {
          title: "How is this different from an S3 console or generic chat?",
          body: "Consoles manage objects; generic chats wrap APIs. Storage Agent owns the investigation loop — plan, tool, run, ground — without mutating production storage.",
        },
        {
          title: "Can the agent change my buckets or objects?",
          body: "No. Cloud tools are read-only by architecture. Writes/deletes/config changes are not exposed; test-write is not a live action.",
        },
        {
          title: "What if I have no model API key?",
          body: "Deterministic offline triage still runs on local evidence and rule jobs. Add a model when you want the agent narrator; the floor does not depend on it.",
        },
        {
          title: "How is this different from StorageOps?",
          body: "StorageOps equips Pi with storage skills. Storage Agent is the desktop agent runtime: thread, tools, DuckDB runs, grounding, and approvals in one app.",
        },
      ],
      finalCta: "Run storage triage as an agent-native thread",
      finalCtaLabel: "Download Storage Agent",
    },
    zh: {
      title: "Storage Agent",
      description:
        "Agent-native 的 S3 兼容存储只读调查工作台：thread-first 工具循环、skills、grounding，外加确定性 DuckDB run。",
      eyebrow: "Agent-native · 只读 · 本地优先",
      headline: "Agent-native 的只读存储 triage",
      lead: "不是贴了聊天框的 S3 控制台。这是 Codex 式 Agent 线程：规划白名单工具与 skills、叙述调查过程，并把结论落到可打开的证据上——DuckDB run 保持确定性，存储保持只读。",
      primaryCta: { label: "下载", href: siteConfig.externalLinks.storageAgentWorkbenchReleases },
      secondaryCta: { label: "查看 GitHub", href: siteConfig.externalLinks.storageAgentWorkbench },
      meta: "Tauri 桌面 · S3 兼容 · Apache-2.0 · macOS、Windows、Linux",
      proof: ["Agent 线程", "工具循环", "Skills", "Grounding", "绝不改存储"],
      featuresLabel: "Agent-native 差在哪",
      features: [
        {
          title: "Thread-first Agent，不是控制台+聊天",
          body: "调查活在 Codex 式线程里：Agent 规划、调工具、加载 skills，并在只读预算下持续推进——界面跟着 Agent，而不是 Agent 跟着表单。",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "白名单工具，交给 Agent 驱动",
          body: "配置审查、元数据、range 读取、日志/清单导入与 DuckDB 查询都可由 Agent 调用。写、删、改策略不存在——连 test-write 也只是预留枚举。",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "Skills 是 Agent 加载的方法",
          body: "用 StorageOps 式 skill 文档注入领域判断。不是插件市场，也不打开远程代码执行面。",
          intent: "capability",
          surface: "agent",
        },
        {
          title: "只有一个 Agent 叙事者，run 是地板",
          body: "单一 LLM 面负责叙事。重分析是 Agent 可触发的确定性 DuckDB / 规则 run——没有第二个「UI 流水线大脑」和线程抢话。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Grounding 卡片收束回路",
          body: "回答带出用过的 skills、用过的证据和缺口——流畅叙述仍须落到你能打开的工具结果与 run 产物。",
          intent: "capability",
          surface: "artifact",
        },
      ],
      workflowLabel: "Agent 会话怎么跑",
      workflow: [
        {
          title: "开一条线程",
          body: "用大白话提问，或从任务起步——配置、访问日志、清单、错误 triage、成本。面向云存储 / SRE / 数据基建，以及调试 S3 兼容栈的人。",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "Agent 规划工具与 skills",
          body: "它选择白名单只读工具与方法 skills，并在预算内推进（列表/预览/延迟硬顶），让循环流畅，而不是处处弹确认。",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "Run 出证据，Agent 来叙述",
          body: "DuckDB / 规则任务落下本地产物。Agent 读回线程，并把元数据、日志与工具活动留在回答旁边可核对。",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "搬数时你在回路",
          body: "下载、大扫描与证据导入先确认。调查其余部分保持只读——再对着 grounding 决定下一步。",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      positioningLabel: "Agent 安全边界",
      positioning: [
        {
          title: "本地优先的 Agent 运行时",
          body: "线程状态、证据、DuckDB 与密钥都在本机 app-data。请求只发往你配置的模型与云端点。",
          intent: "boundary",
          surface: "agent",
        },
        {
          title: "绝不改动存储",
          body: "Agent 不能写、删或改桶策略。自主性留给调查，不留给改生产。",
          intent: "boundary",
          surface: "protocol",
        },
        {
          title: "只有搬数才闸门",
          body: "只读工具用预算约束，而不是处处确认。确认成本花在「数据是否离开云」上。",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "刻意不做的事",
          body: "不是完整 S3 浏览器或同步盘，不是多用户 SaaS，不是工作流画布或插件市场，不是自动修复或任意 shell，也不是 CMDB 或工单系统。",
          intent: "boundary",
          surface: "protocol",
        },
      ],
      faqLabel: "问题与用法",
      faq: [
        {
          title: "这里的 agent-native 指什么",
          body: "产品首先是会规划、调工具、加载 skills 并做 grounding 的调查 Agent——不是在存储控制台上贴一个聊天框。",
        },
        {
          title: "和 S3 控制台或通用聊天差在哪",
          body: "控制台管对象；通用聊天只是包一层 API。Storage Agent 拥有调查闭环——规划、工具、run、ground——且不改生产存储。",
        },
        {
          title: "Agent 会改我的桶或对象吗",
          body: "不会。云工具按架构只读。写/删/改配置未暴露；test-write 也不是可调用动作。",
        },
        {
          title: "没有模型密钥也能用吗",
          body: "可以。本地证据与规则任务仍支持确定性 triage。需要 Agent 叙事时再接入模型；地板不依赖密钥。",
        },
        {
          title: "和 StorageOps 有什么区别",
          body: "StorageOps 给 Pi 加存储 skills。Storage Agent 是桌面 Agent 运行时：线程、工具、DuckDB run、grounding 与确认流都在一个应用里。",
        },
      ],
      finalCta: "用 agent-native 线程做存储 triage",
      finalCtaLabel: "下载 Storage Agent",
    },
  },
};
