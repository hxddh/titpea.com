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
      description:
        "A macOS menu-bar status lamp for coding agents: see at a glance whether they are idle, running, or waiting on you.",
      eyebrow: "macOS menu-bar agent lamp",
      headline: "Know when an agent needs you",
      lead: "A quiet menu-bar lamp for coding agents. Red means waiting, green means running, gray means idle — click to open the session list and jump to the terminal that needs you.",
      primaryCta: { label: "Download latest release", href: siteConfig.externalLinks.pulseReleases },
      secondaryCta: { label: "View source", href: siteConfig.externalLinks.pulse },
      meta: `macOS 14+ · ${facts.licenseLabel} · ${facts.latestRelease} · Menu bar`,
      proof: ["Needs-you lamp", "Session tray", "Claude Codex Cursor+", "Local-first"],
      positioningLabel: "Fit and limits",
      positioning: [
        {
          title: "Use it when",
          body: "You leave coding agents running while you meet, write, or switch tasks, and need peripheral awareness when one is waiting for approval or input.",
          intent: "fit",
          surface: "artifact",
          priority: "primary",
        },
        {
          title: "Current platforms",
          body: "macOS 14+ menu-bar app. Waiting signals work best after installing hooks for Claude Code and Codex; without hooks the lamp still shows running and recent sessions.",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "What it refuses to be",
          body: "Pulse does not show quotas, spend, or reset timers; it is not a desktop pet or analytics dashboard; and it does not approve or reject prompts inside the tray — it gets you to the right session.",
          intent: "boundary",
          surface: "artifact",
        },
      ],
      featuresLabel: "In the menu bar",
      features: [
        {
          title: "Traffic-light glance",
          body: "The menu-bar mark turns red with a short breath when something needs you, green while agents are running, gray when only recent sessions remain, and orange if probing fails.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Sessions, not processes",
          body: "The tray lists task titles first, with the agent name on the secondary line. Click a row to focus the matching terminal page when a TTY is available.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Honest waiting signals",
          body: "Waiting only comes from hooks or an explicit pending mark — never inferred from process noise. Agents without a waiting path say so instead of faking a red lamp.",
          intent: "capability",
          surface: "cli",
        },
        {
          title: "Snooze without losing the fact",
          body: "Snooze suppresses the lamp and notifications for a while, but the row stays in Needs you with a remaining-time chip. Clear waiting, jump to the oldest wait, or open preferences from the tray footer.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Power-aware probing",
          body: "Probe cadence follows state — faster when waiting, slower when idle — and pauses while the display is asleep or locked. Quiet hours and per-agent mute live in preferences.",
          intent: "capability",
          surface: "cli",
        },
        {
          title: "Broad agent coverage",
          body: "Probe and harvest cover Claude, Codex, Cursor, and many other coding agents. Waiting depth varies by agent; the README matrix is checked in CI against the code.",
          intent: "capability",
          surface: "agent",
        },
      ],
      faqLabel: "Questions & download",
      faq: [
        {
          title: "Which systems are supported?",
          body: "Pulse ships as a macOS menu-bar app for macOS 14+. Current releases are ad-hoc signed; first launch may require Open from the context menu or clearing quarantine.",
        },
        {
          title: "Do I need hooks?",
          body: "Without hooks, Pulse still shows running and recent sessions from process and session harvest. Install Waiting Signal hooks in preferences so the red needs-you lamp can light for Claude Code and Codex.",
        },
        {
          title: "Does it upload my sessions?",
          body: "No. Probe, harvest, and hooks run locally. Pulse does not send session contents to a Titpea service; update checks read public GitHub releases.",
        },
        {
          title: "What license does it use?",
          body: "Pulse is MIT.",
        },
      ],
    },
    zh: {
      title: "Pulse",
      description: "macOS 菜单栏状态灯：一眼看出编码 Agent 是空闲、在跑，还是在等你。",
      eyebrow: "macOS 菜单栏 Agent 状态灯",
      headline: "一眼知道 Agent 要不要你",
      lead: "安静的菜单栏状态灯。红灯表示在等你，绿灯表示在跑，灰灯表示空闲——点一下打开会话列表，并跳到需要你的终端页。",
      primaryCta: { label: "下载最新版本", href: siteConfig.externalLinks.pulseReleases },
      secondaryCta: { label: "查看源码", href: siteConfig.externalLinks.pulse },
      meta: `macOS 14+ · ${facts.licenseLabel} · ${facts.latestRelease} · 菜单栏`,
      proof: ["需要你时亮灯", "会话托盘", "Claude Codex Cursor+", "本地优先"],
      positioningLabel: "适用与边界",
      positioning: [
        {
          title: "什么时候用",
          body: "编码 Agent 在后台跑着，你去开会、写文档或切任务时，需要余光可见：有人在等授权或输入。",
          intent: "fit",
          surface: "artifact",
          priority: "primary",
        },
        {
          title: "当前支持范围",
          body: "面向 macOS 14+ 的菜单栏应用。安装 Claude Code 与 Codex 的 hook 后 Waiting 信号最完整；不装也能看运行中与最近会话。",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "明确不做",
          body: "不做额度、费用或重置倒计时；不是桌面宠物或统计大盘；也不在托盘里替你批准或拒绝——它负责带你回到该看的会话。",
          intent: "boundary",
          surface: "artifact",
        },
      ],
      featuresLabel: "菜单栏里有什么",
      features: [
        {
          title: "交通灯式余光",
          body: "有等待时菜单栏灯变红并短暂呼吸；有 Agent 在跑时为绿；只剩最近会话时为灰；探测失败时为橙。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "看会话，不是看进程",
          body: "托盘优先显示任务标题，Agent 名退到次行。点击一行即可在有 TTY 时聚焦对应终端页。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "诚实的 Waiting",
          body: "Waiting 只来自 hooks 或明确的 pending 标记，绝不从进程噪音推断。没有 Waiting 通路的 Agent 会如实说明，而不是假装亮红灯。",
          intent: "capability",
          surface: "cli",
        },
        {
          title: "稍后而不丢掉事实",
          body: "稍后会暂时压制菜单栏灯和通知，但行仍留在「需要你」里并显示剩余时间。托盘页脚可清除等待、跳到最久等你的项，或打开偏好设置。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "省电的探测节奏",
          body: "探测频率随状态变化——等待时更快，空闲时更慢；息屏或锁屏会停表。安静时段与按 Agent 静音在偏好设置中配置。",
          intent: "capability",
          surface: "cli",
        },
        {
          title: "覆盖多种编码 Agent",
          body: "探测与会话采集覆盖 Claude、Codex、Cursor 等常见编码 Agent。Waiting 深度因 Agent 而异；README 矩阵由 CI 对照代码校验。",
          intent: "capability",
          surface: "agent",
        },
      ],
      faqLabel: "常见问题与下载",
      faq: [
        {
          title: "支持哪些系统？",
          body: "Pulse 以 macOS 14+ 菜单栏应用发布。当前构建为 ad-hoc 签名，首次打开可能需要右键选择「打开」，或清除隔离属性。",
        },
        {
          title: "一定要装 hooks 吗？",
          body: "不装也能通过进程与会话采集看到运行中和最近会话。要在 Claude Code 与 Codex 上点亮「需要你」红灯，请在偏好设置的等待信号里安装 hooks。",
        },
        {
          title: "会上传我的会话吗？",
          body: "不会。探测、采集与 hooks 都在本地运行。Pulse 不会把会话内容发到 Titpea 服务；检查更新只读取公开的 GitHub Release。",
        },
        {
          title: "使用什么许可？",
          body: "Pulse 使用 MIT。",
        },
      ],
    },
  },
};
