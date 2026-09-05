import type { BrowserExtensionProduct } from "../../lib/site";
import { siteConfig } from "../siteConfig";

export const easierBookmarksProduct: BrowserExtensionProduct = {
  slug: "easier-bookmarks",
  name: "Easier Bookmarks",
  archetype: "browserExtension",
  locales: {
    en: {
      title: "Easier Bookmarks",
      description: "Chrome side panel for the bookmark tree already in this browser.",
      eyebrow: "Chrome extension",
      headline: "Bookmarks at your side",
      lead: "Search and move the bookmarks you already have, directly in Chrome’s side panel. Keep your existing folders and browser sync settings.",
      primaryCta: { label: "Install", href: siteConfig.externalLinks.easierBookmarksChrome },
      secondaryCta: { label: "Privacy policy", href: siteConfig.externalLinks.easierBookmarksPrivacy },
      meta: "Chrome Web Store · Workflow & Planning · No external servers",
      proof: [],
      positioningLabel: "Chrome's tree, side panel",
      positioning: [
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
    },
    zh: {
      title: "Easier Bookmarks",
      description: "Chrome 侧边栏书签管理器，可在本地搜索、浏览和整理书签。",
      eyebrow: "Chrome 扩展",
      headline: "书签在侧边，随手整理",
      lead: "在 Chrome 侧边栏查找和移动已有书签，沿用原来的文件夹。Chrome 同步仍按你的浏览器设置执行。",
      primaryCta: { label: "安装扩展", href: siteConfig.externalLinks.easierBookmarksChrome },
      secondaryCta: { label: "隐私政策", href: siteConfig.externalLinks.easierBookmarksPrivacyZh },
      meta: "Chrome 网上应用店 · 工作流与规划 · 无外部服务器",
      proof: [],
      positioningLabel: "Chrome 书签树，侧边栏",
      positioning: [
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
    },
  },
};
