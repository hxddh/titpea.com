import type { StorageCliProduct } from "../../lib/site";
import { agentRadarFacts } from "../productFacts";
import { siteConfig } from "../siteConfig";

const meta = `Python 3.10+ · stdlib only · Markdown-first · ${agentRadarFacts.licenseLabel ?? "MIT"} · ${agentRadarFacts.latestRelease ?? "current release"}`;

export const agentRadarProduct: StorageCliProduct = {
  slug: "agent-radar",
  name: "Agent Radar",
  archetype: "storageCli",
  locales: {
    en: {
      title: "Agent Radar",
      description:
        "A Markdown-first AI Agent trend radar: watchlist, field notes, playbooks, and storage implications.",
      eyebrow: "Python CLI · Markdown repo",
      headline: "Track agent signals in plain Markdown",
      lead: "Record what changed across coding agents, workflows, field evidence, and storage infrastructure — without a database, crawler, or web UI.",
      primaryCta: { label: "View on GitHub", href: siteConfig.externalLinks.agentRadar },
      secondaryCta: { label: "Quick start", href: siteConfig.externalLinks.agentRadarQuickStart },
      meta,
      proof: ["Agent watchlist", "Field notes", "Playbooks", "Storage angle", "Cloud agent automation"],
      workflowLabel: "What you maintain",
      workflow: [
        {
          title: "Current thesis",
          body: "Use `radar.md` for the live thesis, changed thesis, and open questions that deserve attention now.",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "Agent watchlist",
          body: "Track mainstream and emerging agents in `agent-watchlist.md` — product moves, not launch hype.",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "Real user evidence",
          body: "Capture workflows, complaints, tricks, and failure cases in `user-field-notes.md` with source discipline.",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "Reusable playbooks",
          body: "Promote patterns that generalize beyond one incident into `playbook.md` — prompts, setup tricks, recovery paths.",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      automationLabel: "Daily and weekly rhythm",
      automation: [
        {
          title: "Append daily signals",
          body: "Run `agent_radar.py daily` or the cloud-agent workflow to append high-signal items without forcing a full thesis rewrite.",
          intent: "automation",
          surface: "cli",
        },
        {
          title: "Synthesize weekly",
          body: "Weekly notes explain what actually changed, what remains uncertain, and what to watch next — product, infra, storage, and anti-signals.",
          intent: "automation",
          surface: "cli",
        },
        {
          title: "Storage implications",
          body: "`storage-angle.md` tracks workspace, sandbox, snapshot, checkpoint, artifact, log, replay, and knowledge-base signals.",
          intent: "automation",
          surface: "artifact",
        },
      ],
      finalCta: "Start tracking agent signals locally",
      finalCtaLabel: "Open repository",
      faqLabel: "Questions & use",
      faq: [
        {
          title: "What is Agent Radar not?",
          body: "Not a news dump, crawler framework, vector store, or complex knowledge base. It is a lightweight editable Markdown structure with a small Python CLI.",
        },
        {
          title: "How does the CLI work?",
          body: "Python 3.10+ and only the standard library. `init`, `daily`, `weekly`, `monthly`, `status`, `validate`, and `brief` scaffold and check the repo from any subdirectory.",
        },
        {
          title: "Can it run on a schedule?",
          body: "Yes. GitHub Actions workflows support scheduled cloud-agent runs with source lanes, scoring, telemetry, and bilingual report output.",
        },
        {
          title: "What about private sources?",
          body: "Authorized logged-in or private signals may inform the radar, but public output must be anonymized and public-safe. See `docs/maintenance.md` and `SECURITY.md`.",
        },
      ],
    },
    zh: {
      title: "Agent Radar",
      description: "Markdown 优先的 AI Agent 趋势雷达：观察名单、现场笔记、可复用 playbook 与存储视角。",
      eyebrow: "Python CLI · Markdown 仓库",
      headline: "用 Markdown 跟踪 agent 信号",
      lead: "记录 coding agent、工作流、现场证据和存储基础设施的变化——不需要数据库、爬虫或 Web UI。",
      primaryCta: { label: "查看 GitHub", href: siteConfig.externalLinks.agentRadar },
      secondaryCta: { label: "快速开始", href: siteConfig.externalLinks.agentRadarQuickStart },
      meta,
      proof: ["Agent 观察名单", "现场笔记", "Playbook", "存储视角", "云 agent 自动化"],
      workflowLabel: "维护什么",
      workflow: [
        {
          title: "当前判断",
          body: "在 `radar.md` 里维护当前判断、已变化的判断和仍待回答的问题。",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "Agent 观察名单",
          body: "在 `agent-watchlist.md` 跟踪主流与新兴 agent——记产品动向，不堆发布炒作。",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "真实用户证据",
          body: "在 `user-field-notes.md` 记录工作流、抱怨、技巧和失败案例，并遵守来源标注纪律。",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "可复用 playbook",
          body: "把能泛化的模式写进 `playbook.md`——提示词、配置技巧、恢复路径。",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      automationLabel: "日更与周更节奏",
      automation: [
        {
          title: "追加每日信号",
          body: "运行 `agent_radar.py daily` 或 cloud-agent 工作流，追加高信号条目，不必每次都重写完整判断。",
          intent: "automation",
          surface: "cli",
        },
        {
          title: "周度综合",
          body: "周记说明什么真的变了、什么仍不确定、下周该盯什么——产品、基础设施、存储与反信号。",
          intent: "automation",
          surface: "cli",
        },
        {
          title: "存储影响",
          body: "`storage-angle.md` 跟踪 workspace、sandbox、快照、checkpoint、artifact、日志、回放与知识库相关信号。",
          intent: "automation",
          surface: "artifact",
        },
      ],
      finalCta: "在本地开始跟踪 agent 信号",
      finalCtaLabel: "打开仓库",
      faqLabel: "常见问题与用法",
      faq: [
        {
          title: "Agent Radar 不是什么",
          body: "不是新闻聚合、爬虫框架、向量库或复杂知识库。它是一套轻量可编辑的 Markdown 结构，加一个小型 Python CLI。",
        },
        {
          title: "CLI 怎么用",
          body: "Python 3.10+，只用标准库。`init`、`daily`、`weekly`、`monthly`、`status`、`validate`、`brief` 可在任意子目录脚手架化并检查仓库。",
        },
        {
          title: "能定时跑吗",
          body: "可以。GitHub Actions 支持定时 cloud-agent 运行，带来源通道、评分、遥测和中英双语报告输出。",
        },
        {
          title: "私有来源怎么处理",
          body: "经授权的登录态或私有信号可以影响雷达，但公开输出必须匿名且符合公开安全要求。见 `docs/maintenance.md` 与 `SECURITY.md`。",
        },
      ],
    },
  },
};
