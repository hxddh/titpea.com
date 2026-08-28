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
        "macOS menu-bar status for local coding-agent sessions, with honest Waiting signals from hooks or pending marks.",
      eyebrow: "Waiting lamp for agent sessions",
      headline: "Waiting sessions in the menu bar",
      lead: "See Waiting coding-agent sessions in the menu bar — then open the tray to the real TTY or host app.",
      primaryCta: { label: "Download latest release", href: siteConfig.externalLinks.pulseReleases },
      secondaryCta: { label: "View source", href: siteConfig.externalLinks.pulse },
      meta: `macOS 14+ · ${facts.licenseLabel} · ${facts.latestRelease} · Menu bar`,
      proof: [],
      positioningLabel: "When the lamp is enough",
      positioning: [
        {
          title: "You leave the terminal",
          body: "Coding-agent sessions keep running while you are in another app, and you need to notice a Waiting state without switching terminals — especially with more than one session open.",
          intent: "fit",
          surface: "artifact",
          priority: "primary",
        },
        {
          title: "Waiting needs hooks",
          body: "Claude Code and Codex get Waiting through hooks in Preferences → Waiting Signal. Other agents use process probe and session harvest; Waiting depth varies, and some have none.",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "The tray does not approve",
          body: "No quota, spend, or reset timers. No desktop pet or analytics dashboard. The tray does not approve or deny — it opens the session where you act.",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "Nothing leaves this Mac",
          body: "Probe, harvest, and hooks stay on the Mac. Update checks only read public GitHub releases.",
          intent: "boundary",
          surface: "protocol",
        },
      ],
      faqLabel: "macOS, hooks, privacy",
      faq: [
        {
          title: "First open may need an OS exception",
          body: "Current builds are ad-hoc signed, so the first open may need Open from the context menu, or clearing quarantine with xattr.",
        },
      ],
    },
    zh: {
      title: "Pulse",
      description: "本机编码 Agent 会话的 macOS 菜单栏状态灯：等待、运行、空闲，或停滞 / 探测异常。",
      eyebrow: "编码 Agent 的状态灯",
      headline: "在菜单栏看见等待中的会话",
      lead: "在菜单栏看见 Waiting 的编码 Agent，打开托盘后聚焦到真实的 TTY 或宿主 App。",
      primaryCta: { label: "下载最新版本", href: siteConfig.externalLinks.pulseReleases },
      secondaryCta: { label: "查看源码", href: siteConfig.externalLinks.pulse },
      meta: `macOS 14+ · ${facts.licenseLabel} · ${facts.latestRelease} · 菜单栏`,
      proof: [],
      positioningLabel: "这盏灯适合什么时候",
      positioning: [
        {
          title: "人已经离开终端",
          body: "编码 Agent 会话还在跑，你却在别的应用里；需要不切终端也能发现 Waiting，尤其是同时开着多个会话时。",
          intent: "fit",
          surface: "artifact",
          priority: "primary",
        },
        {
          title: "Waiting 需要 hooks",
          body: "Claude Code 与 Codex 在「偏好设置 → 等待信号」装 hooks 后 Waiting 最完整；其他 Agent 靠进程探测和会话采集，Waiting 深浅不一，有的没有。",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "托盘不替你批准",
          body: "不做额度、费用或重置倒计时；不是桌面宠物或统计大盘；托盘里也不替你批准或拒绝——只打开你动手的那个会话。",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "会话不离开这台 Mac",
          body: "探测、采集和 hooks 都在本机。检查更新只读公开的 GitHub Release。",
          intent: "boundary",
          surface: "protocol",
        },
      ],
      faqLabel: "系统、hooks 与隐私",
      faq: [
        {
          title: "首次打开可能要系统例外",
          body: "当前构建是 ad-hoc 签名，首次打开可能要右键选「打开」，或用 xattr 清掉隔离属性。",
        },
      ],
    },
  },
};
