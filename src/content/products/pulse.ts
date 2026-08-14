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
        "A macOS menu-bar status lamp for local coding-agent sessions: Waiting, Running, Idle, or stalled / probe issues.",
      eyebrow: "macOS menu-bar status lamp",
      headline: "See waiting sessions in the menu bar",
      lead: "Pulse shows local agent sessions as Waiting, Running, Idle, or stalled. Waiting is never inferred. Open the tray; focus uses the best verified handle.",
      primaryCta: { label: "Download latest release", href: siteConfig.externalLinks.pulseReleases },
      secondaryCta: { label: "View source", href: siteConfig.externalLinks.pulse },
      meta: `macOS 14+ · ${facts.licenseLabel} · ${facts.latestRelease} · Menu bar`,
      proof: ["Waiting / Running / Idle", "Hooks or pending only", "32-agent health", "Honest focus tiers"],
      positioningLabel: "Fit and limits",
      positioning: [
        {
          title: "Use it when",
          body: "Coding-agent sessions keep running while you are in another app, and you need to notice a Waiting state without switching terminals — especially with more than one session open.",
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
          body: "No quota, spend, or reset timers. No desktop pet or analytics dashboard. The tray does not approve or deny — it opens the session where you act.",
          intent: "boundary",
          surface: "artifact",
        },
      ],
      featuresLabel: "In the menu bar",
      features: [
        {
          title: "Menu-bar status",
          body: "Red for an explicit Waiting signal (new waits pulse the red lamp three times), green while sessions are running, gray when only recent sessions remain, orange when a session is stalled or probe / harvest is unhealthy.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Sessions in the tray",
          body: "Rows are sessions: task title first, then path, phase, model, and last activity when harvest provides them. Click a row to focus at the best verified handle — TTY tab, host workspace, or host app — otherwise observation only.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Waiting is not inferred",
          body: "Waiting only comes from hooks or an explicit pending mark. Agents without a Waiting path stay on Running / recent and say so — the lamp does not invent a Waiting state.",
          intent: "capability",
          surface: "cli",
        },
        {
          title: "Support health on this Mac",
          body: "A separate window reports observed coverage for 32 agents on this Mac — running, installed, not yet observed, permission or schema issues, or missing data — instead of repeating a static support list.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Snooze keeps the row",
          body: "Snooze quiets the lamp and notifications for a while. The row stays under Waiting with remaining time. Footer actions clear waits, jump to the oldest wait, or open preferences.",
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
          body: "Without hooks you still see Running and recent sessions. For Claude Code and Codex, install native Waiting Signal hooks (no Python) so approval prompts can create a Waiting signal. Some other agents surface Waiting via pending marks instead.",
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
      description: "本机编码 Agent 会话的 macOS 菜单栏状态灯：等待、运行、空闲，或停滞 / 探测异常。",
      eyebrow: "macOS 菜单栏状态灯",
      headline: "在菜单栏看见等待中的会话",
      lead: "Pulse 把本机编码 Agent 显示为等待、运行、空闲或停滞。等待只来自 hooks 或 pending，从不推断。打开托盘；有句柄时按 TTY / 工作区 / 宿主 App 精度聚焦。",
      primaryCta: { label: "下载最新版本", href: siteConfig.externalLinks.pulseReleases },
      secondaryCta: { label: "查看源码", href: siteConfig.externalLinks.pulse },
      meta: `macOS 14+ · ${facts.licenseLabel} · ${facts.latestRelease} · 菜单栏`,
      proof: ["等待 / 运行 / 空闲", "Waiting 不推断", "32 Agent 健康度", "聚焦分精度"],
      positioningLabel: "适用与边界",
      positioning: [
        {
          title: "什么时候用",
          body: "编码 Agent 会话还在跑，你却在别的应用里；需要不切终端也能发现 Waiting，尤其是同时开着多个会话时。",
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
          body: "不做额度、费用或重置倒计时；不是桌面宠物或统计大盘；托盘里也不替你批准或拒绝——只打开你动手的那个会话。",
          intent: "boundary",
          surface: "artifact",
        },
      ],
      featuresLabel: "菜单栏里有什么",
      features: [
        {
          title: "菜单栏状态",
          body: "有明确 Waiting 信号时变红（新等待红灯连闪三次），有会话在跑时为绿，只剩最近会话时为灰；会话停滞或探测 / 采集异常时为橙。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "托盘看的是会话",
          body: "行标题是任务名；有采集数据时，次行可带路径、阶段、模型和上次动静。点一行，按可用的最高精度聚焦：TTY 标签页、宿主工作区或宿主 App；否则只作观测。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Waiting 不推断",
          body: "Waiting 只来自 hooks 或明确的 pending 标记。没有 Waiting 通路的 Agent 仍显示运行中 / 最近，并说明暂无 Waiting，不会硬造等待状态。",
          intent: "capability",
          surface: "cli",
        },
        {
          title: "本机支持健康度",
          body: "单独窗口按这台 Mac 上的观测结果展示 32 个 Agent：运行中、已安装、尚未观测、权限或格式问题、或缺少数据，而不是重复一张静态支持名单。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "稍后只压打扰",
          body: "稍后暂时关掉菜单栏红灯和通知，行仍留在等待分组并显示剩余时间。页脚可清除等待、跳到等待最久的项，或打开偏好设置。",
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
          body: "不装也能看到运行中和最近会话。Claude Code 与 Codex 要让授权提示产生 Waiting，在偏好设置里装原生等待信号 hooks（不需要 Python）。部分其他 Agent 用 pending 标记也能出 Waiting。",
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
