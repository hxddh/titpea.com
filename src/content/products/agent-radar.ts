import { defineProduct } from "../schema";

export default defineProduct({
  slug: "agent-radar",
  line: "agents",
  type: "actions",
  repo: "hxddh/agent-radar",
  icon: "/assets/icons/agent-radar.webp",
  og: "/assets/og-agent-radar.png",
  schema: {
    category: "DeveloperApplication",
    os: "Cross-platform",
  },
  sectionIndex: true,
  en: {
    title: "Agent Radar",
    description: "Scheduled research on the agent industry, with sourced Markdown briefs and watchlists saved in Git.",
    eyebrow: "Scheduled Markdown research",
    headline: "Agent news, with sources.",
    lead: "Markdown briefs on AI agents, built from public sources on a GitHub Actions schedule. Citations are checked; every change stays in Git.",
    catalog: {
      role: "Weekly briefs",
      text: "Sourced Markdown briefs, on a GitHub Actions timer.",
    },
    primaryCta: {
      label: "View on GitHub",
      href: "https://github.com/hxddh/agent-radar",
    },
    secondaryCta: {
      label: "Quick start",
      href: "https://github.com/hxddh/agent-radar#cli-usage",
    },
    privacy: {
      network: "automatic",
      networkNote: "Scheduled GitHub Actions runs fetch public sources and send them to the model route you configure.",
      stays: "Reports, telemetry and run logs are committed to your own repository; model keys are repository secrets.",
    },
    meta: "Python · Markdown-first · GitHub Actions · MIT · {version}",
    commands: {
      title: "Get started",
      sub: "Python 3.10+ and only the standard library. Run it from a clone of the repository.",
      items: [
        {
          comment: "Create the Markdown files",
          command: "python scripts/agent_radar.py init",
        },
      ],
    },
    visual: {
      kind: "terminalBrief",
      label: "Agent Radar",
      kicker: "agent-radar 0.25.0 · captured output",
      status: "created",
      command: "python scripts/agent_radar.py init",
      filesLabel: "CREATED",
      files: ["radar.md", "agent-watchlist.md", "user-field-notes.md", "playbook.md", "storage-angle.md"],
      briefLabel: "radar.md in the repository · 2026-09-29",
      brief: "1. AI Agents are moving from chat and IDE autocomplete toward task-based execution.",
      footnotes: ["Markdown-first · GitHub Actions", "checks before commit · gaps labeled in Git"],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "Research loop",
        label: "One model screens the sources, then drafts.",
        items: [
          { title: "Weekly thesis", body: "Current judgment, what changed, and open questions." },
          { title: "Watchlist", body: "Mainstream and emerging agents, sourcing graded Strong to None." },
          { title: "Field notes", body: "Real workflows and reusable patterns." },
          { title: "Storage implications", body: "What agents mean for workspaces, sandboxes, logs, and replay." },
          { title: "Checks before commit", body: "Gaps are labeled; every change is reviewable in Git history." },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "Your data",
        title: "Where your data goes.",
        items: [
          "Scheduled runs on GitHub Actions read free public sources; the X and Reddit OAuth lanes stay off unless you add their secrets.",
          "Collected text goes to the model route you configure: GitHub Models with the built-in token, or Vercel AI Gateway with your key.",
          "Reports, telemetry and run logs are committed to your own repository; local commands other than `source-refresh` and `trigger` stay offline.",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        nav: "FAQ",
        label: "FAQ",
        items: [
          {
            title: "Does it need paid search?",
            body: "No. Collection uses free public source lanes. You configure the model route; the pinned route runs GPT-5 Mini to screen and draft, about $2.6 a month against a $4 budget, with fallback models pinned in the workflow.",
          },
          {
            title: "Where does it run?",
            body: "Daily, weekly, and monthly jobs run on GitHub Actions and produce bilingual reports. If a Chinese half comes out thin, the runner regenerates it, or labels the report when it cannot. Local runs are available for debugging.",
          },
          {
            title: "What if a check fails?",
            body: "Most checks repair or label instead of refusing: a missing section gets an explicit gap line. Failures stay visible in telemetry, validate warnings, and issues; Git records what was published.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "Agent Radar",
    description: "定时整理 Agent 产业动态，把带来源的 Markdown 周报与观察名单保存在 Git 中。",
    eyebrow: "定时 Markdown 调研",
    headline: "Agent 动态，附来源",
    lead: "用公开来源定时生成 AI Agent 调研周报（Markdown）。引用会被校验，每次改动都留在 Git 里。",
    catalog: {
      role: "每周简报",
      text: "GitHub Actions 定时跑，生成带来源的 Markdown 周报。",
    },
    primaryCta: {
      label: "查看 GitHub",
      href: "https://github.com/hxddh/agent-radar",
    },
    secondaryCta: {
      label: "快速开始",
      href: "https://github.com/hxddh/agent-radar#cli-usage",
    },
    privacy: {
      network: "automatic",
      networkNote: "GitHub Actions 定时运行，抓取公开来源，交给你配置的模型线路。",
      stays: "报告、遥测和运行日志提交到你自己的仓库；模型密钥存为仓库 secret。",
    },
    meta: "Python · Markdown 优先 · GitHub Actions · MIT · {version}",
    commands: {
      title: "开始使用",
      sub: "只需要 Python 3.10+ 和标准库。在仓库目录里运行。",
      items: [
        {
          comment: "生成 Markdown 文件",
          command: "python scripts/agent_radar.py init",
        },
      ],
    },
    visual: {
      kind: "terminalBrief",
      label: "Agent Radar",
      kicker: "agent-radar 0.25.0 · 实际输出",
      status: "created",
      command: "python scripts/agent_radar.py init",
      filesLabel: "已创建",
      files: ["radar.md", "agent-watchlist.md", "user-field-notes.md", "playbook.md", "storage-angle.md"],
      briefLabel: "仓库里的 radar.md · 2026-09-29",
      brief: "1. AI Agents are moving from chat and IDE autocomplete toward task-based execution.",
      footnotes: ["Markdown 优先 · GitHub Actions", "提交前校验 · 缺口在 Git 里标明"],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "研究循环",
        label: "同一模型先筛来源，再起草",
        items: [
          { title: "每周论点", body: "当前判断、已变化点和开放问题。" },
          { title: "观察名单", body: "主流与新兴 Agent，来源强度分 Strong 到 None。" },
          { title: "现场笔记", body: "真实工作流和可复用模式。" },
          { title: "存储影响", body: "Agent 对工作区、沙箱、日志与回放意味着什么。" },
          { title: "提交前校验", body: "缺口在报告里标明；每次变化都能在 Git 历史里核对。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "数据去向",
        title: "数据的去向",
        items: [
          "GitHub Actions 定时运行，只读免费公开来源；X 和 Reddit OAuth 线路要你添加对应 secret 才开启。",
          "收集到的文本交给你配置的模型线路：GitHub Models 用内置令牌，Vercel AI Gateway 用你的密钥。",
          "报告、遥测和运行日志提交到你自己的仓库；除 `source-refresh` 和 `trigger` 外，本地命令都不联网。",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        nav: "常见问题",
        label: "常见问题",
        items: [
          {
            title: "需要付费搜索吗？",
            body: "不需要。采集走免费公开源。模型线路由你配置；固定线路用 GPT-5 Mini 筛选和起草，每月约 2.6 美元，预算为 4 美元；备用模型也固定在工作流里。",
          },
          {
            title: "在哪里运行？",
            body: "日更、周更、月更任务在 GitHub Actions 上运行，输出双语报告。中文部分过薄时，Runner 会重新生成；生成失败则在报告里注明。本地运行可用于调试。",
          },
          {
            title: "校验失败会怎样？",
            body: "多数校验会修复或标注，而不是拒绝提交：缺失的章节会写明缺口。失败记录保留在遥测、validate 警告和 issue 中，Git 记录实际发布的内容。",
          },
        ],
      },
    ],
  },
});
