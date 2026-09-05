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
        "Check local coding-agent sessions in the macOS menu bar. Waiting support depends on the agent and its configured hooks.",
      eyebrow: "Waiting lamp for agent sessions",
      headline: "See which agent waits",
      lead: "Check coding-agent session status from the Mac menu bar while you work in another app. Open the list to return to the corresponding terminal or application.",
      primaryCta: { label: "Download latest release", href: siteConfig.externalLinks.pulseReleases },
      secondaryCta: { label: "View source", href: siteConfig.externalLinks.pulse },
      meta: `macOS 14+ · ${facts.licenseLabel} · ${facts.latestRelease} · Menu bar`,
      proof: [],
      positioningLabel: "Signals and sessions",
      positioning: [
        {
          title: "Waiting signals depend on the agent",
          body: "Install hooks in Preferences → Waiting Signal for more complete Claude Code and Codex waiting states. Other agents rely on process and session detection; waiting support varies.",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "Return to the session",
          body: "Handle requests in the original terminal or app. Pulse’s menu does not approve or deny them.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Detection on this Mac",
          body: "Session detection, collection, and hooks run locally. Update checks access public GitHub releases.",
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
      headline: "看看哪个 Agent 在等你",
      lead: "编码会话还在运行时，可以先去做别的事。Pulse 在 Mac 菜单栏显示会话状态，打开列表后可回到对应终端或应用。",
      primaryCta: { label: "下载最新版本", href: siteConfig.externalLinks.pulseReleases },
      secondaryCta: { label: "查看源码", href: siteConfig.externalLinks.pulse },
      meta: `macOS 14+ · ${facts.licenseLabel} · ${facts.latestRelease} · 菜单栏`,
      proof: [],
      positioningLabel: "等待信号与会话",
      positioning: [
        {
          title: "不同 Agent 的等待信号",
          body: "在「偏好设置 → 等待信号」安装 hooks 后，Claude Code 与 Codex 可获得更完整的等待状态。其他 Agent 使用进程探测和会话采集，等待状态的支持程度不同。",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "回到原会话处理",
          body: "在对应终端或应用里继续处理请求。Pulse 的菜单不执行批准或拒绝。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "在这台 Mac 上检测",
          body: "会话探测、采集和 hooks 都在本机进行。更新检查访问公开的 GitHub Release。",
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
