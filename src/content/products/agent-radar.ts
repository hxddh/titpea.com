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
        "Scheduled research on the agent industry, with sourced Markdown briefs and watchlists saved in Git.",
      eyebrow: "Scheduled Markdown research",
      headline: "Agent news, with sources",
      lead: "Collect public agent news on GitHub Actions and save sourced Markdown briefs and watchlists. Relevance and citation checks run before each commit.",
      primaryCta: { label: "View on GitHub", href: siteConfig.externalLinks.agentRadar },
      secondaryCta: { label: "Quick start", href: siteConfig.externalLinks.agentRadarQuickStart },
      meta,
      proof: [],
      workflowLabel: "From sources to a commit",
      workflow: [
        {
          title: "Collect public sources",
          body: "Read official pages, GitHub releases, feeds, packages, and papers. Collection does not require paid search.",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "Select and draft",
          body: "Score relevance and remove duplicates before model screening and drafting. The model can update only designated research files.",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "Check before committing",
          body: "Check citations, quota, language coverage, and freshness. Failed checks remain visible in telemetry and issues. Git records accepted changes.",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      automationLabel: "Actions runs the loop",
      automation: [
        {
          title: "Run on a schedule",
          body: "Daily, weekly, and monthly jobs run on GitHub Actions and produce bilingual reports. Local runs are available for debugging.",
          intent: "automation",
          surface: "cli",
        },
      ],
      finalCtaLabel: "Open repository",
      faqLabel: "Actions and cost",
      faq: [
        {
          title: "No paid search required",
          body: "Collection uses free public source lanes. Bring your own model keys: a lighter model can screen, a stronger one can draft, so spend stays intentional.",
        },
      ],
    },
    zh: {
      title: "Agent Radar",
      description: "定时整理 Agent 产业动态，把带来源的 Markdown 周报与观察名单保存在 Git 中。",
      eyebrow: "Markdown 优先 · GitHub Actions",
      headline: "Agent 动态，按周整理",
      lead: "在 GitHub Actions 上采集公开 Agent 动态，整理成带来源的 Markdown 周报与观察名单。相关性与引用检查通过后提交到 Git。",
      primaryCta: { label: "查看 GitHub", href: siteConfig.externalLinks.agentRadar },
      secondaryCta: { label: "快速开始", href: siteConfig.externalLinks.agentRadarQuickStart },
      meta,
      proof: [],
      workflowLabel: "从信源到提交",
      workflow: [
        {
          title: "采集公开来源",
          body: "读取官网、GitHub Release、订阅源、软件包和论文。采集不需要付费搜索。",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "筛选并起草",
          body: "先按相关性筛选、去除重复，再交给模型初筛和起草。模型只能修改指定研究文件。",
          intent: "workflow",
          surface: "agent",
        },
        {
          title: "校验后提交",
          body: "检查引用、配额、双语与时效。失败记录保留在遥测和 issue 中，通过的修改提交到 Git。",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      automationLabel: "Actions 跑这条循环",
      automation: [
        {
          title: "按计划运行",
          body: "日更、周更、月更任务在 GitHub Actions 上运行，输出双语报告。本地运行可用于调试。",
          intent: "automation",
          surface: "cli",
        },
      ],
      finalCtaLabel: "打开仓库",
      faqLabel: "Actions 与花费",
      faq: [
        {
          title: "不必付费搜索",
          body: "采集走免费公开源。你自备模型密钥：轻量模型可初筛，强模型起草，花费可主动控制。",
        },
      ],
    },
  },
};
