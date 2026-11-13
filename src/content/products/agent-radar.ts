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
    lead: "Markdown reports on AI agents, drafted by a model from public sources on a GitHub Actions schedule. Every change stays in Git.",
    catalog: {
      role: "Scheduled briefs",
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
      networkNote:
        "Scheduled GitHub Actions runs fetch public sources and send them to the AI model service you configure.",
      stays: "Reports, telemetry and run logs are committed to your own repository; model keys are repository secrets.",
    },
    meta: "Python · GitHub Actions · MIT · {version}",
    releaseHighlights: {
      version: "v0.26.3",
      items: [
        "If the AI Gateway rejects your key as invalid (HTTP 401), a run now stops at once instead of trying the fallback models: they use the same key, so they could not help.",
        "A 403 or 404, which means a model is not available to your account, still moves on to the next model.",
        "`validate` now warns about days published in English only because their Chinese half could not be generated. It stays a warning, never an error.",
      ],
    },
    commands: {
      title: "Get started",
      sub: "Run the commands from a clone of the repository. They need Python 3.10 or later and only its standard library.",
      items: [
        {
          comment: "Create the Markdown files",
          command: "python scripts/agent_radar.py init",
        },
        {
          comment: "Create or add to today’s daily note",
          command: "python scripts/agent_radar.py daily",
        },
      ],
    },
    visual: {
      kind: "terminalBrief",
      label: "Agent Radar",
      kicker: "Output captured from agent-radar 0.25.0",
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
        label: "The research lives in plain Markdown files.",
        items: [
          { title: "Current thesis", body: "In `radar.md`: the current view, how it changed, and open questions." },
          { title: "Watchlist", body: "Mainstream and emerging agents, each source graded from Strong to None." },
          {
            title: "Field notes",
            body: "Real user workflows, complaints, tricks and failures, plus a playbook of reusable patterns.",
          },
          { title: "Storage implications", body: "What agents mean for workspaces, sandboxes, logs, and replay." },
          {
            title: "Checks before commit",
            body: "Missing material is labeled as a gap; every change can be reviewed in Git.",
          },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "Your data",
        title: "Where your data goes.",
        items: [
          "Scheduled GitHub Actions runs read free public sources, such as Hacker News, Reddit RSS feeds and GitHub.",
          "X and the Reddit API are used only if you add their keys as repository secrets.",
          "Collected text goes to the model service you choose: GitHub Models with the built-in token, or Vercel AI Gateway with your key.",
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
            body: "No. It collects from free public sources and calls no paid search service. You choose the AI model service; the setup pinned in the workflow uses GPT-5 Mini to screen sources and draft reports, at about $2.60 a month against a $4 budget, and its fallback models are free ones.",
          },
          {
            title: "Where does it run?",
            body: "Daily, weekly, and monthly jobs run on GitHub Actions and produce bilingual reports. If a Chinese half comes out thin, the runner regenerates it, or labels the report when it cannot. Local runs are available for debugging.",
          },
          {
            title: "What if a check fails?",
            body: "Most checks repair or label instead of refusing: a missing section gets an explicit gap line. Failures stay visible in the run telemetry, in warnings from `validate`, and in GitHub issues; Git records what was published.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "Agent Radar",
    description: "定时整理 Agent 产业动态，把带来源的 Markdown 报告与观察名单保存在 Git 中。",
    eyebrow: "定时 Markdown 调研",
    headline: "Agent 动态，附来源",
    lead: "GitHub Actions 定时运行，由模型从公开来源起草 AI Agent 调研报告（Markdown）。每次改动都留在 Git 里。",
    catalog: {
      role: "定时简报",
      text: "GitHub Actions 定时跑，生成带来源的 Markdown 报告。",
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
      networkNote: "GitHub Actions 定时运行，抓取公开来源，交给你配置的 AI 模型服务。",
      stays: "报告、遥测和运行日志提交到你自己的仓库；模型密钥存为仓库 secret。",
    },
    meta: "Python · GitHub Actions · MIT · {version}",
    releaseHighlights: {
      version: "v0.26.3",
      items: [
        "AI Gateway 判定密钥无效（HTTP 401）时，运行会立即停止，不再逐个尝试备用模型：它们用的是同一个密钥，换模型也没用。",
        "403 或 404 表示这个模型对你的账号不可用，这时仍会换下一个模型。",
        "中文部分没能生成、只以英文发布的日子，`validate` 现在会单独列出警告。它仍只是警告，不算错误。",
      ],
    },
    commands: {
      title: "开始使用",
      sub: "在仓库的克隆目录里运行这些命令，只需要 Python 3.10 及以上版本和它的标准库。",
      items: [
        {
          comment: "生成 Markdown 文件",
          command: "python scripts/agent_radar.py init",
        },
        {
          comment: "新建或续写今天的日报",
          command: "python scripts/agent_radar.py daily",
        },
      ],
    },
    visual: {
      kind: "terminalBrief",
      label: "Agent Radar",
      kicker: "agent-radar 0.25.0 的实际输出",
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
        label: "调研都记在 Markdown 文件里",
        items: [
          { title: "当前论点", body: "`radar.md` 写当前判断、判断怎么变了，以及待解的问题。" },
          { title: "观察名单", body: "主流与新兴 Agent，每个来源按强度从 Strong 到 None 分级。" },
          { title: "现场笔记", body: "真实用户的工作流、抱怨、技巧和失败，以及可复用的做法。" },
          { title: "存储影响", body: "Agent 对工作区、沙箱、日志与回放意味着什么。" },
          { title: "提交前校验", body: "缺少的内容标为缺口；每次改动都能在 Git 历史里核对。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "数据去向",
        title: "数据的去向",
        items: [
          "GitHub Actions 定时运行，读取 Hacker News、Reddit RSS、GitHub 等免费公开来源。",
          "X 和 Reddit API 只有在你把它们的密钥加为仓库 secret 后才会启用。",
          "收集到的文本发给你选的模型服务：GitHub Models 用内置令牌，Vercel AI Gateway 用你自己的密钥。",
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
            body: "不需要。它只从免费公开来源收集，不调用付费搜索服务。AI 模型服务由你选择；工作流里固定的配置用 GPT-5 Mini 筛选来源、起草报告，每月约 2.60 美元，预算为 4 美元；备用模型都是免费模型。",
          },
          {
            title: "在哪里运行？",
            body: "日报、周报、月报任务在 GitHub Actions 上运行，输出中英双语报告。中文部分过薄时，运行脚本会重新生成；仍然失败就在报告里注明。本地运行可用于调试。",
          },
          {
            title: "校验失败会怎样？",
            body: "多数校验会修复或标注，而不是拒绝提交：缺失的章节会写明缺口。失败记录保留在运行遥测、`validate` 的警告和 GitHub issue 里，Git 记录实际发布的内容。",
          },
        ],
      },
    ],
  },
});
