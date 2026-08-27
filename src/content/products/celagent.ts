import type { CliAgentProduct } from "../../lib/site";
import { productFacts } from "../productFacts";
import { siteConfig } from "../siteConfig";

const facts = productFacts.celagent;
const meta = `Pi Coding Agent TUI · Celld/BOS · ${facts.licenseLabel ?? "MIT"} · ${facts.latestRelease ?? "current release"}`;

export const celagentProduct: CliAgentProduct = {
  slug: "celagent",
  name: "celagent",
  archetype: "cliAgent",
  locales: {
    en: {
      title: "celagent",
      description:
        "Independent open-source agent: full Pi Coding Agent TUI with Celld/BOS object-storage session persistence (RPO≈0).",
      eyebrow: "Pi TUI · BOS session authority",
      headline: "Pi TUI with sessions on object storage",
      lead: "A full Pi Coding Agent TUI with session authority on BOS, CAS writes recoverable across machines, and a task ledger for distributed work.",
      primaryCta: { label: "Install / View releases", href: siteConfig.externalLinks.celagentReleases },
      secondaryCta: { label: "View on GitHub", href: siteConfig.externalLinks.celagent },
      meta,
      proof: [],
      workflowLabel: "Install, write, restore",
      workflow: [
        {
          title: "Install and start the TUI",
          body: "Install from the latest release with install.sh (or install.ps1 on Windows), then run `celagent` to open a Pi Coding Agent session with a unique persistence ID.",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "Each turn writes to BOS",
          body: "On turn end, the worker caches locally and BOS is written with CAS optimistic locking. BOS is the session authority (RPO≈0); the worker is a miss fallback.",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "Restore on another machine",
          body: "`celagent <id>` loads full history from BOS first. `celagent list` shows recoverable sessions; export and remove are available when you need them.",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "Submit distributed tasks",
          body: "`celagent task submit/status/ledger` drives a Celld state machine with checkpoint resume and a per-cell idempotent ledger.",
          intent: "workflow",
          surface: "cli",
        },
      ],
      casesLabel: "What it covers",
      casesTitle: "Sessions and tasks that need durable object-storage state",
      casesBody:
        "Use celagent when a Pi TUI session must survive machine changes, local cache loss, or multi-step Celld work.",
      cases: [
        "cross-machine session restore",
        "BOS-backed conversation history",
        "CAS conflict detection",
        "distributed task submit / status",
        "idempotent task ledger",
        "doctor and cas-probe checks",
      ],
      finalCta: "Install celagent from the latest release",
      finalCtaLabel: "View releases",
      faqLabel: "Install and BOS",
      faq: [
        {
          title: "How do I install it?",
          body: "On Unix: `curl -fsSL https://github.com/hxddh/celagent/releases/latest/download/install.sh | sh`. On Windows: run install.ps1 from the same release (CLI only; upstream Celld has no Windows package).",
        },
        {
          title: "Where does session authority live?",
          body: "On BOS. Each turn dual-writes a worker cache and BOS with CAS. Restore reads BOS first; the worker is only a miss fallback.",
        },
        {
          title: "Does it fork Pi?",
          body: "No. It reuses the pi-coding-agent engine with the full tool set (bash, read, write, grep, find, edit, ls) and multi-model switching.",
        },
        {
          title: "What license does it use?",
          body: "MIT.",
        },
      ],
    },
    zh: {
      title: "celagent",
      description: "独立开源 agent：完整 Pi Coding Agent TUI，会话持久化在 Celld/BOS 对象存储（RPO≈0）。",
      eyebrow: "Pi TUI · BOS 会话权威",
      headline: "Pi TUI，会话落在对象存储",
      lead: "完整 Pi Coding Agent TUI，会话权威落在 BOS，CAS 写入可跨机恢复历史，任务 ledger 覆盖分布式工作。",
      primaryCta: { label: "安装 / 查看 Release", href: siteConfig.externalLinks.celagentReleases },
      secondaryCta: { label: "查看 GitHub", href: siteConfig.externalLinks.celagent },
      meta,
      proof: [],
      workflowLabel: "安装、写入、恢复",
      workflow: [
        {
          title: "安装并启动 TUI",
          body: "从最新 Release 用 install.sh 安装（Windows 用 install.ps1），再运行 `celagent` 打开带持久化 ID 的 Pi 会话。",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "每轮写入 BOS",
          body: "回合结束时 worker 本地缓存，同时 CAS 乐观锁直写 BOS。BOS 是会话权威（RPO≈0）；worker 仅作 miss 回退。",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "换机器恢复",
          body: "`celagent <id>` 优先从 BOS 读完整历史。`celagent list` 列出可恢复会话；需要时可导出或删除。",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "提交分布式任务",
          body: "`celagent task submit/status/ledger` 驱动 Celld 状态机，支持断点续跑与单 cell 幂等 ledger。",
          intent: "workflow",
          surface: "cli",
        },
      ],
      casesLabel: "覆盖范围",
      casesTitle: "需要对象存储持久会话与任务状态的场景",
      casesBody: "当 Pi TUI 会话必须在换机、本地缓存丢失或多步 Celld 任务后仍可恢复时，使用 celagent。",
      cases: [
        "跨机会话恢复",
        "BOS 保存对话历史",
        "CAS 冲突检测",
        "分布式任务提交 / 状态",
        "幂等任务 ledger",
        "doctor 与 cas-probe 自检",
      ],
      finalCta: "从最新 Release 安装 celagent",
      finalCtaLabel: "查看 Release",
      faqLabel: "安装与 BOS",
      faq: [
        {
          title: "怎么安装？",
          body: "Unix：`curl -fsSL https://github.com/hxddh/celagent/releases/latest/download/install.sh | sh`。Windows：从同一 Release 运行 install.ps1（仅 CLI；上游 Celld 无 Windows 包）。",
        },
        {
          title: "会话权威在哪里？",
          body: "在 BOS。每轮双写 worker 缓存与带 CAS 的 BOS。恢复先读 BOS；worker 只在 miss 时回退。",
        },
        {
          title: "会 fork Pi 吗？",
          body: "不会。复用 pi-coding-agent 引擎，保留 bash、read、write、grep、find、edit、ls 等全量工具与多模型切换。",
        },
        {
          title: "使用什么许可？",
          body: "MIT。",
        },
      ],
    },
  },
};
