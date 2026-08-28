import type { MarkdownRadarProduct } from "../../lib/site";
import { agentRadarFacts } from "../productFacts";
import { siteConfig } from "../siteConfig";

const meta = `Python · Markdown-first · GitHub Actions · ${agentRadarFacts.licenseLabel ?? "MIT"} · ${agentRadarFacts.latestRelease ?? "current release"}`;

export const agentRadarProduct: MarkdownRadarProduct = {
  slug: "agent-radar",
  name: "Agent Radar",
  archetype: "markdownRadar",
  locales: {
    en: {
      title: "Agent Radar",
      description:
        "A Markdown-first AI Agent trend radar on GitHub Actions: public signals in, Markdown committed after gates pass.",
      eyebrow: "Markdown-first · GitHub Actions",
      headline: "Scheduled research kept in Markdown",
      lead: "A GitHub Actions loop collects public agent signals, then commits Markdown only after direction and citation gates pass.",
      primaryCta: { label: "View on GitHub", href: siteConfig.externalLinks.agentRadar },
      secondaryCta: { label: "Quick start", href: siteConfig.externalLinks.agentRadarQuickStart },
      meta,
      proof: [],
      workflowLabel: "Collect, gate, commit",
      workflow: [
        {
          title: "Broad discovery",
          body: "Source lanes pull public signals — official pages, GitHub, releases, HN, feeds, packages, papers — without paid search calls.",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "Score and dedupe",
          body: "The runner scores items by lane reliability, relevance, adoption evidence, and novelty against the source cache before any model sees them.",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "Screen, then write narrowly",
          body: "Discovery stays wide; promotion into the watchlist, weekly brief, or storage notes is bounded. The model may only update allowed files.",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "Check, then commit",
          body: "Citation, quota, bilingual, and freshness checks run before commit. Failures stay visible in telemetry and issues — Git remains the audit log.",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      automationLabel: "Actions runs the loop",
      automation: [
        {
          title: "Scheduled on GitHub Actions",
          body: "Daily, weekly, and monthly jobs run the same research loop unattended, with bilingual report output. Local runs are for debugging; Actions is the intended host.",
          intent: "automation",
          surface: "cli",
        },
        {
          title: "Model suggests; runner decides",
          body: "A lighter model screens; a stronger model drafts. The model may suggest updates; the runner scores, bounds writes, runs checks, and commits — labeling failures without blocking the whole loop.",
          intent: "automation",
          surface: "agent",
        },
      ],
      finalCtaLabel: "Open repository",
      faqLabel: "Actions and cost",
      faq: [
        {
          title: "Actions is the unattended host",
          body: "The same runner can be invoked locally for debugging; the durable state remains the Markdown repo. Daily, weekly, and monthly jobs are the intended host.",
        },
        {
          title: "No paid search required",
          body: "Collection uses free public source lanes. Bring your own model keys: a lighter model can screen, a stronger one can draft, so spend stays intentional.",
        },
      ],
    },
    zh: {
      title: "Agent Radar",
      description: "Markdown 优先的 AI Agent 趋势雷达：跑在 GitHub Actions 上，方向门禁通过后才提交 Markdown。",
      eyebrow: "Markdown 优先 · GitHub Actions",
      headline: "定时研究，结果留在 Markdown",
      lead: "在 GitHub Actions 上采集公开 Agent 信号，方向与引用门禁通过后才写入 Markdown。",
      primaryCta: { label: "查看 GitHub", href: siteConfig.externalLinks.agentRadar },
      secondaryCta: { label: "快速开始", href: siteConfig.externalLinks.agentRadarQuickStart },
      meta,
      proof: [],
      workflowLabel: "采集、门禁、提交",
      workflow: [
        {
          title: "多源发现",
          body: "源通道拉取公开信号——官网、GitHub、Release、HN、订阅源、包市场、论文——不调用付费搜索。",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "记分去重",
          body: "Runner 按通道可信度、相关性、采用证据，以及相对源缓存的新颖度打分，再决定哪些条目进入模型。",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "宽发现、窄写入",
          body: "发现可以很宽；写入观察名单、周报或存储笔记时有边界。模型只能改允许的文件。",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "校验后提交",
          body: "引用、配额、双语与新鲜度检查通过后才提交。失败留在遥测与 issue 里——Git 始终是审计日志。",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      automationLabel: "Actions 跑这条循环",
      automation: [
        {
          title: "定时跑在 GitHub Actions",
          body: "日更、周更、月更任务无人值守跑同一条研究循环，并输出双语报告。本地运行用于调试；无人值守主场景是 Actions。",
          intent: "automation",
          surface: "cli",
        },
        {
          title: "模型提议，Runner 裁定",
          body: "轻量模型初筛，强模型起草。模型可提议更新；Runner 负责记分、限制写入、跑校验并提交——失败会被标记出来，但不会阻塞整轮运行。",
          intent: "automation",
          surface: "agent",
        },
      ],
      finalCtaLabel: "打开仓库",
      faqLabel: "Actions 与花费",
      faq: [
        {
          title: "无人值守跑在 Actions",
          body: "同一套 runner 也可本地调试；持久状态仍是这个 Markdown 仓库。日更、周更、月更任务才是无人值守主场景。",
        },
        {
          title: "不必付费搜索",
          body: "采集走免费公开源。你自备模型密钥：轻量模型可初筛，强模型起草，花费可主动控制。",
        },
      ],
    },
  },
};
