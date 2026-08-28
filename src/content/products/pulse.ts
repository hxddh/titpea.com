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
      headline: "Waiting sessions in the menu bar",
      lead: "Local coding-agent sessions show as Waiting, Running, Idle, or stalled; Waiting is never inferred, and opening the tray focuses the verified TTY, workspace, or host app.",
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
          title: "macOS 14+; Waiting needs hooks",
          body: "macOS 14+ only. Claude Code and Codex get Waiting through hooks in Preferences → Waiting Signal. Other agents use process probe and session harvest; Waiting depth varies, and some have none.",
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
          title: "Ad-hoc signed first open",
          body: "Current builds are ad-hoc signed, so the first open may need Open from the context menu, or clearing quarantine with xattr.",
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
    },
    zh: {
      title: "Pulse",
      description: "本机编码 Agent 会话的 macOS 菜单栏状态灯：等待、运行、空闲，或停滞 / 探测异常。",
      eyebrow: "macOS 菜单栏状态灯",
      headline: "在菜单栏看见等待中的会话",
      lead: "本机编码 Agent 显示为等待、运行、空闲或停滞。Waiting 只来自 hooks 或 pending，打开托盘后按已验证的 TTY、工作区或宿主 App 聚焦。",
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
          title: "只做 macOS 14+",
          body: "只做 macOS 14+。Claude Code 与 Codex 在「偏好设置 → 等待信号」装 hooks 后 Waiting 最完整；其他 Agent 靠进程探测和会话采集，Waiting 深浅不一，有的没有。",
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
          title: "首次打开是 ad-hoc 签名",
          body: "当前构建是 ad-hoc 签名，首次打开可能要右键选「打开」，或用 xattr 清掉隔离属性。",
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
    },
  },
};
