import { defineProduct } from "../schema";

export default defineProduct({
  slug: "agent-radar",
  line: "agents",
  repo: "hxddh/agent-radar",
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
    lead: "Public sources. Citation checks. Markdown briefs in Git.",
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
      kicker: "agent-radar 0.23.0 · captured output",
      status: "created",
      command: "python scripts/agent_radar.py init",
      filesLabel: "CREATED",
      files: ["radar.md", "agent-watchlist.md", "user-field-notes.md", "playbook.md", "storage-angle.md"],
      briefLabel: "radar.md in the repository · 2026-09-23",
      brief: "1. AI Agents are moving from chat and IDE autocomplete toward task-based execution.",
      footnotes: ["Markdown-first · GitHub Actions", "checks before commit · Git as audit"],
    },
    sections: [
      {
        kind: "panel",
        id: "inside",
        nav: "Research loop",
        kicker: "One research loop",
        title: "Research you can review in Git.",
        body: "Markdown files hold the research. A light model screens sources, another drafts, and checks run before each commit.",
        panel: {
          kind: "excerpt",
          label: "radar.md excerpt",
          eyebrow: "Quoted from radar.md · 2026-09-23",
          title: "radar.md · main",
          items: [
            {
              label: "Current thesis",
              value: "Thesis 2",
              body: "Coding agents are becoming the first high-frequency adoption path.",
            },
            {
              label: "Changed",
              value: "2026-08-21",
              body: "Added signal: Cloudflare — MCP security updates (network detection, WriteGuard). … Evidence: Strong (official blog).",
            },
            {
              label: "Open questions",
              value: "MCP",
              body: "Will MCP become the default tool integration layer? …",
            },
          ],
        },
      },
      {
        kind: "flow",
        id: "evidence",
        nav: "What it keeps",
        kicker: "Auditable state",
        title: "Every change stays in Git.",
        body: "The runner updates four files within fixed write bounds, and each change stays reviewable in history.",
        steps: [
          { label: "Weekly thesis", body: "Current judgment, what changed, and open questions." },
          { label: "Watchlist", body: "Mainstream and emerging agents, with evidence labels." },
          { label: "Field notes", body: "Real workflows and reusable patterns." },
          { label: "Storage implications", body: "Workspaces, sandboxes, logs, and replay, as a side lens." },
        ],
      },
      {
        kind: "cards",
        id: "workflow",
        nav: "How it works",
        label: "From sources to a commit.",
        items: [
          { title: "Collect public sources", body: "Official pages, releases, feeds, packages, papers." },
          { title: "Screen, then draft", body: "Relevance and dedup first; models edit designated files only." },
          { title: "Check, then commit", body: "Citations, quota, language coverage, freshness." },
        ],
        numbered: true,
      },
      {
        kind: "faq",
        id: "faq",
        nav: "FAQ",
        label: "FAQ",
        items: [
          {
            title: "Does it need paid search?",
            body: "No. Collection uses free public source lanes. Bring your own model keys: a lighter model can screen and a stronger one can draft, so spend stays intentional.",
          },
          {
            title: "Where does it run?",
            body: "Daily, weekly, and monthly jobs run on GitHub Actions and produce bilingual reports. Local runs are available for debugging.",
          },
          {
            title: "What if a check fails?",
            body: "Failed checks remain visible in telemetry and issues. Git records the accepted changes.",
          },
        ],
      },
    ],
    finalCta: "Open repository",
  },
  zh: {
    title: "Agent Radar",
    description: "定时整理 Agent 产业动态，把带来源的 Markdown 周报与观察名单保存在 Git 中。",
    eyebrow: "Markdown 优先 · GitHub Actions",
    headline: "Agent 动态，按周整理",
    lead: "公开来源。引用校验。Markdown 周报存进 Git。",
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
    meta: "Python · Markdown-first · GitHub Actions · MIT · {version}",
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
      kicker: "agent-radar 0.23.0 · 实际输出",
      status: "created",
      command: "python scripts/agent_radar.py init",
      filesLabel: "已创建",
      files: ["radar.md", "agent-watchlist.md", "user-field-notes.md", "playbook.md", "storage-angle.md"],
      briefLabel: "仓库里的 radar.md · 2026-09-23",
      brief: "1. AI Agents are moving from chat and IDE autocomplete toward task-based execution.",
      footnotes: ["Markdown 优先 · GitHub Actions", "提交前校验 · Git 即审计"],
    },
    sections: [
      {
        kind: "panel",
        id: "inside",
        nav: "研究循环",
        kicker: "一条研究循环",
        title: "在 Git 里查看研究记录",
        body: "Markdown 文件保存研究内容。轻量模型筛来源，另一模型起草，校验通过才提交。",
        panel: {
          kind: "excerpt",
          label: "radar.md 摘录",
          eyebrow: "radar.md 原文摘录（英文）· 2026-09-23",
          title: "radar.md · main",
          items: [
            {
              label: "当前判断",
              value: "Thesis 2",
              body: "Coding agents are becoming the first high-frequency adoption path.",
            },
            {
              label: "已变化",
              value: "2026-08-21",
              body: "Added signal: Cloudflare — MCP security updates (network detection, WriteGuard). … Evidence: Strong (official blog).",
            },
            {
              label: "开放问题",
              value: "MCP",
              body: "Will MCP become the default tool integration layer? …",
            },
          ],
        },
      },
      {
        kind: "flow",
        id: "evidence",
        nav: "留存内容",
        kicker: "可审计状态",
        title: "每次变化都留在 Git 里",
        body: "Runner 在固定写入边界内更新四类文件，每次变化都能在仓库历史里核对。",
        steps: [
          { label: "每周论点", body: "当前判断、已变化点和开放问题。" },
          { label: "观察名单", body: "主流与新兴 agent，标注证据强度。" },
          { label: "现场笔记", body: "真实工作流和可复用模式。" },
          { label: "存储影响", body: "工作区、沙箱、日志与回放，作为侧面视角。" },
        ],
      },
      {
        kind: "cards",
        id: "workflow",
        nav: "用法",
        label: "从信源到提交",
        items: [
          { title: "采集公开来源", body: "官网、Release、订阅源、软件包、论文。" },
          { title: "先筛再起草", body: "先按相关性筛选去重，模型只改指定文件。" },
          { title: "校验后提交", body: "引用、配额、双语覆盖、时效。" },
        ],
        numbered: true,
      },
      {
        kind: "faq",
        id: "faq",
        nav: "常见问题",
        label: "常见问题",
        items: [
          {
            title: "需要付费搜索吗？",
            body: "不需要。采集走免费公开源。你自备模型密钥：轻量模型可初筛，强模型起草，花费可主动控制。",
          },
          {
            title: "在哪里运行？",
            body: "日更、周更、月更任务在 GitHub Actions 上运行，输出双语报告。本地运行可用于调试。",
          },
          {
            title: "校验失败会怎样？",
            body: "失败记录保留在遥测和 issue 中，通过的修改提交到 Git。",
          },
        ],
      },
    ],
    finalCta: "打开仓库",
  },
});
