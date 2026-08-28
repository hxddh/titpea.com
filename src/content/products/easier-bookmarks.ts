import type { BrowserExtensionProduct } from "../../lib/site";
import { siteConfig } from "../siteConfig";

export const easierBookmarksProduct: BrowserExtensionProduct = {
  slug: "easier-bookmarks",
  name: "Easier Bookmarks",
  archetype: "browserExtension",
  locales: {
    en: {
      title: "Easier Bookmarks",
      description: "A Chrome side-panel bookmark manager for local search, browsing, and organization.",
      eyebrow: "Chrome extension",
      headline: "Bookmarks in the side panel",
      lead: "Find and move bookmarks in Chrome's side panel — without the bookmark-menu maze.",
      primaryCta: { label: "Install", href: siteConfig.externalLinks.easierBookmarksChrome },
      secondaryCta: { label: "Privacy policy", href: siteConfig.externalLinks.easierBookmarksPrivacy },
      meta: "Chrome Web Store · Workflow & Planning · No external servers",
      proof: [],
      positioningLabel: "Chrome's tree, side panel",
      positioning: [
        {
          title: "Menus are too small",
          body: "Your bookmark tree has outgrown Chrome's small menus and you want one side panel for finding and organizing it.",
          intent: "fit",
          surface: "browser",
          priority: "primary",
        },
        {
          title: "Works with Chrome's bookmark tree",
          body: "It works with the bookmarks and folders already in Chrome. There is no separate library to import, account to create, or sync service of its own; Chrome sync remains whatever you already configured in Chrome.",
          intent: "boundary",
          surface: "browser",
        },
        {
          title: "No analytics, no servers",
          body: "It uses Chrome's Bookmarks API and local extension storage. There are no analytics, ads, accounts, remote code, or external servers.",
          intent: "boundary",
          surface: "browser",
        },
      ],
      faqLabel: "What stays on this browser",
      faq: [
        {
          title: "Only language and folder state are stored",
          body: "Chrome keeps your bookmarks. The extension stores only your language choice and expanded-folder identifiers in local extension storage. Install from the Chrome Web Store, then open it from the toolbar action.",
        },
      ],
    },
    zh: {
      title: "Easier Bookmarks",
      description: "Chrome 侧边栏书签管理器，可在本地搜索、浏览和整理书签。",
      eyebrow: "Chrome 扩展",
      headline: "在侧边栏里把书签理顺",
      lead: "在 Chrome 侧边栏里查找和挪动书签，不必再钻浏览器自带的小菜单。",
      primaryCta: { label: "安装扩展", href: siteConfig.externalLinks.easierBookmarksChrome },
      secondaryCta: { label: "隐私政策", href: siteConfig.externalLinks.easierBookmarksPrivacyZh },
      meta: "Chrome 网上应用店 · 工作流与规划 · 无外部服务器",
      proof: [],
      positioningLabel: "Chrome 书签树，侧边栏",
      positioning: [
        {
          title: "书签菜单已经不够用",
          body: "Chrome 的小菜单已经装不下你的书签树，想在一个侧边栏里完成查找和整理。",
          intent: "fit",
          surface: "browser",
          priority: "primary",
        },
        {
          title: "沿用 Chrome 书签树",
          body: "它管理 Chrome 里已有的书签和文件夹，不需要导入另一套资料库，也不用注册账号或另接同步服务；Chrome 自身同步仍按你的浏览器设置执行。",
          intent: "boundary",
          surface: "browser",
        },
        {
          title: "无分析，无外部服务器",
          body: "它只使用 Chrome 书签 API 和扩展本地存储，无分析服务、广告、账号、远程代码或外部服务器。",
          intent: "boundary",
          surface: "browser",
        },
      ],
      faqLabel: "留在这台浏览器里",
      faq: [
        {
          title: "只存语言和展开状态",
          body: "书签由 Chrome 保存。扩展只在本地存储界面语言和已展开文件夹的标识。从 Chrome 网上应用店安装后，点击工具栏图标即可在侧边栏打开。",
        },
      ],
    },
  },
};
