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
        "Pi’s terminal interface with sessions saved on BOS and restored by ID on another configured machine.",
      eyebrow: "Pi terminal agent",
      headline: "Resume on another device",
      lead: "Use Pi’s terminal interface with sessions saved on BOS. Restore the history by session ID on another machine configured for the same storage.",
      primaryCta: { label: "Install / View releases", href: siteConfig.externalLinks.celagentReleases },
      secondaryCta: { label: "View on GitHub", href: siteConfig.externalLinks.celagent },
      meta,
      proof: [],
      workflowLabel: "Configure, save, resume",
      workflow: [
        {
          title: "Configure storage first",
          body: "Install the release, configure the BOS bucket and credentials, then run `celagent doctor` to check connectivity before starting a session.",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "Save at the end of a turn",
          body: "Completed turns enter the BOS write queue with conditional writes for conflict handling. Retryable network failures remain queued; cross-machine recovery requires a successful write.",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "Resume a saved session",
          body: "Run `celagent list`, then `celagent <id>` on another configured machine. Recovery reads BOS first; only a missing object falls back to the worker cache.",
          intent: "workflow",
          surface: "cli",
        },
      ],
      casesLabel: "Beyond conversation history",
      casesTitle: "Distributed tasks",
      casesBody:
        "Celld tasks have checkpoint recovery and an idempotent task ledger. See the repository for setup and command details.",
      cases: ["celagent task submit", "celagent task status", "celagent task ledger"],
      finalCtaLabel: "View releases",
      faqLabel: "Recovery and Pi",
      faq: [
        {
          title: "A saved conversation is not a synced workspace",
          body: "Session recovery does not set up the project files or environment on the other machine. Wait for the BOS write to succeed before relying on remote recovery.",
        },
        {
          title: "Pi engine and installation",
          body: "celagent reuses the Pi engine and its tools. Install from the GitHub release with install.sh, or install.ps1 on Windows; upstream Celld has no Windows package.",
        },
      ],
    },
    zh: {
      title: "celagent",
      description: "使用 Pi 的终端界面，把会话保存在 BOS，通过 ID 在另一台已配置的机器上恢复。",
      eyebrow: "Pi 终端 Agent",
      headline: "换台机器，接着聊",
      lead: "使用 Pi 的终端界面，会话保存在 BOS。通过会话 ID，在另一台已配置相同存储的机器上恢复历史。",
      primaryCta: { label: "安装 / 查看 Release", href: siteConfig.externalLinks.celagentReleases },
      secondaryCta: { label: "查看 GitHub", href: siteConfig.externalLinks.celagent },
      meta,
      proof: [],
      workflowLabel: "配置、保存、恢复",
      workflow: [
        {
          title: "先配置存储",
          body: "安装发布版本，配置 BOS 桶和凭证。启动会话前，用 `celagent doctor` 检查连通性。",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "每轮结束后保存",
          body: "完成的回合进入 BOS 写入队列，通过条件写入处理冲突。可重试的网络失败会留队；跨机恢复需要等待写入成功。",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "恢复已保存的会话",
          body: "在另一台已配置的机器上运行 `celagent list`，再用 `celagent <id>` 恢复。先读 BOS，仅对象不存在时才回退到 worker 缓存。",
          intent: "workflow",
          surface: "cli",
        },
      ],
      casesLabel: "对话之外",
      casesTitle: "分布式任务",
      casesBody: "Celld 任务支持断点恢复和幂等任务记录。配置与命令细节见仓库文档。",
      cases: ["celagent task submit", "celagent task status", "celagent task ledger"],
      finalCtaLabel: "查看 Release",
      faqLabel: "恢复条件与 Pi",
      faq: [
        {
          title: "恢复会话不等于同步工作区",
          body: "另一台机器仍需准备项目文件和运行环境。依赖跨机恢复前，先确认 BOS 写入成功。",
        },
        {
          title: "Pi 引擎与安装",
          body: "celagent 复用 Pi 引擎及其工具。从 GitHub Release 用 install.sh 安装，Windows 使用 install.ps1；上游 Celld 没有 Windows 包。",
        },
      ],
    },
  },
};
