import type { MenuBarAppProduct } from "../../lib/site";
import { productFacts } from "../productFacts";
import { siteConfig } from "../siteConfig";

const facts = productFacts.pulse;

export const pulseProduct: MenuBarAppProduct = {
  slug: "pulse",
  name: "Pulse",
  archetype: "menuBarApp",
  locales: {
    en: {
      title: "Pulse",
      description: "A macOS menu-bar status lamp for coding agents: idle, running, or waiting on you.",
      eyebrow: "macOS menu-bar status lamp",
      headline: "Know when an agent needs you",
      lead: "Leave an agent running, switch away, and find it stuck on an approval. Pulse shows that in the menu bar: red needs you, green running, gray idle. Open the tray; click a row to focus that terminal.",
      primaryCta: { label: "Download latest release", href: siteConfig.externalLinks.pulseReleases },
      secondaryCta: { label: "View source", href: siteConfig.externalLinks.pulse },
      meta: `macOS 14+ · ${facts.licenseLabel} · ${facts.latestRelease} · Menu bar`,
      proof: ["Red / green / gray", "Sessions in the tray", "Waiting is never inferred", "Runs locally"],
      positioningLabel: "Fit and limits",
      positioning: [
        {
          title: "Use it when",
          body: "Agents keep running while you are elsewhere, and you want to know without switching terminals — especially with more than one agent at once.",
          intent: "fit",
          surface: "artifact",
          priority: "primary",
        },
        {
          title: "Current platforms",
          body: "macOS 14+ only. Claude Code and Codex get Waiting through hooks in Preferences → Waiting Signal. Other agents use process probe and session harvest; Waiting depth varies, and some have none.",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "Out of scope",
          body: "No quota, spend, or reset timers. No desktop pet or analytics dashboard. The tray does not approve or deny — it takes you to the session.",
          intent: "boundary",
          surface: "artifact",
        },
      ],
      featuresLabel: "In the menu bar",
      features: [
        {
          title: "Menu-bar lamp",
          body: "Red when something needs you (new waits flash once), green while agents are running, gray when only recent sessions remain, orange if probe and harvest both fail.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Sessions in the tray",
          body: "Rows are sessions: task title first, path and last activity on the secondary line, agent identity on the icon. Click a row to focus that terminal when a TTY is available.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Waiting is not inferred",
          body: "Waiting only comes from hooks or an explicit pending mark. Agents without a Waiting path stay on Running / recent and say so — the lamp does not invent a red state.",
          intent: "capability",
          surface: "cli",
        },
        {
          title: "Snooze keeps the row",
          body: "Snooze quiets the lamp and notifications for a while. The row stays under Needs you with remaining time. Footer actions clear waits, jump to the oldest wait, or open preferences.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Probe follows state",
          body: "Polling is faster while waiting, slower when idle, and stops when the display sleeps or locks. Quiet hours and per-agent mute are in preferences.",
          intent: "capability",
          surface: "cli",
        },
      ],
      faqLabel: "Questions & download",
      faq: [
        {
          title: "Which systems are supported?",
          body: "macOS 14+. Current builds are ad-hoc signed, so the first open may need Open from the context menu, or clearing quarantine with xattr.",
        },
        {
          title: "Do I need hooks?",
          body: "Without hooks you still see running and recent sessions. For Claude Code and Codex, install Waiting Signal hooks so Needs you can light from their approval prompts. Some other agents surface Waiting via pending marks instead.",
        },
        {
          title: "Does it upload my sessions?",
          body: "No. Probe, harvest, and hooks stay on the Mac. Update checks only read public GitHub releases.",
        },
        {
          title: "What license does it use?",
          body: "MIT.",
        },
      ],
    },
    zh: {
      title: "Pulse",
      description: "macOS 菜单栏状态灯：一眼看出编码 Agent 是空闲、在跑，还是在等你。",
      eyebrow: "macOS 菜单栏状态灯",
      headline: "一眼知道 Agent 要不要你",
      lead: "开着 Claude Code / Codex / Cursor 写代码，切去开会或写文档，回来发现它早停在授权提示上。Pulse 把这件事放进菜单栏：红灯 = 在等你，绿灯 = 在跑，灰灯 = 没事。点开托盘看会话，点一行跳到对应终端。",
      primaryCta: { label: "下载最新版本", href: siteConfig.externalLinks.pulseReleases },
      secondaryCta: { label: "查看源码", href: siteConfig.externalLinks.pulse },
      meta: `macOS 14+ · ${facts.licenseLabel} · ${facts.latestRelease} · 菜单栏`,
      proof: ["红 / 绿 / 灰", "托盘看会话", "Waiting 不推断", "本地运行"],
      positioningLabel: "适用与边界",
      positioning: [
        {
          title: "什么时候用",
          body: "Agent 在跑，你去开会或写文档，又不想一直切终端盯着；尤其是好几个 Agent 同时开着的时候。",
          intent: "fit",
          surface: "artifact",
          priority: "primary",
        },
        {
          title: "当前支持范围",
          body: "只做 macOS 14+。Claude Code 与 Codex 在「偏好设置 → 等待信号」装 hooks 后 Waiting 最完整；其他 Agent 靠进程探测和会话采集，Waiting 深浅不一，有的没有。",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "明确不做",
          body: "不做额度、费用或重置倒计时；不是桌面宠物或统计大盘；托盘里也不替你批准或拒绝——只带你回到该看的会话。",
          intent: "boundary",
          surface: "artifact",
        },
      ],
      featuresLabel: "菜单栏里有什么",
      features: [
        {
          title: "菜单栏三色灯",
          body: "有人在等你时变红（新等待闪一次），有 Agent 在跑时为绿，只剩最近会话时为灰；探测和采集都失败时为橙。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "托盘看的是会话",
          body: "行标题是任务名，次行是路径和上次动静，Agent 身份在图标上。点一行，有 TTY 时聚焦对应终端页。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Waiting 不推断",
          body: "Waiting 只来自 hooks 或明确的 pending 标记。没有 Waiting 通路的 Agent 仍显示运行中 / 最近，并说明暂无 Waiting，不会硬亮红灯。",
          intent: "capability",
          surface: "cli",
        },
        {
          title: "稍后只压打扰",
          body: "稍后暂时关掉菜单栏红灯和通知，行仍留在「需要你」并显示剩余时间。页脚可清除等待、跳到最久等你的项，或打开偏好设置。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "探测跟状态走",
          body: "等待时探得勤，空闲时放慢；息屏或锁屏停表。安静时段和按 Agent 静音在偏好设置里。",
          intent: "capability",
          surface: "cli",
        },
      ],
      faqLabel: "常见问题与下载",
      faq: [
        {
          title: "支持哪些系统？",
          body: "macOS 14+。当前构建是 ad-hoc 签名，首次打开可能要右键选「打开」，或用 xattr 清掉隔离属性。",
        },
        {
          title: "一定要装 hooks 吗？",
          body: "不装也能看到运行中和最近会话。Claude Code 与 Codex 要亮「需要你」，在偏好设置的等待信号里装 hooks。部分其他 Agent 用 pending 标记也能出 Waiting。",
        },
        {
          title: "会上传我的会话吗？",
          body: "不会。探测、采集和 hooks 都在本机。检查更新只读公开的 GitHub Release。",
        },
        {
          title: "使用什么许可？",
          body: "MIT。",
        },
      ],
    },
  },
};
