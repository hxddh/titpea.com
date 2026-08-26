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
      headline: "Bookmarks, organized in the side panel",
      lead: "Search by title, URL, or folder path, then create, edit, move, reorder, or delete bookmarks without leaving Chrome's side panel.",
      primaryCta: { label: "Install", href: siteConfig.externalLinks.easierBookmarksChrome },
      secondaryCta: { label: "Privacy policy", href: siteConfig.externalLinks.easierBookmarksPrivacy },
      meta: "Chrome Web Store · Workflow & Planning · No external servers",
      proof: [],
      positioningLabel: "Fit and limits",
      positioning: [
        {
          title: "Use it when",
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
          title: "Private by design",
          body: "It uses Chrome's Bookmarks API and local extension storage. There are no analytics, ads, accounts, remote code, or external servers.",
          intent: "boundary",
          surface: "browser",
        },
      ],
      featuresLabel: "In the side panel",
      features: [
        {
          title: "Search the whole tree",
          body: "Find a bookmark by title, saved URL, or the folder path around it without opening folders one by one.",
          intent: "capability",
          surface: "browser",
        },
        {
          title: "Organize in place",
          body: "Create bookmarks and folders, edit names and URLs, move items, drag to reorder, and confirm before deleting.",
          intent: "capability",
          surface: "browser",
        },
        {
          title: "Keyboard-first when you want it",
          body: "Navigate with arrows, open with Enter, search with slash or Cmd/Ctrl+K, and reorder with a keyboard-accessible move mode.",
          intent: "capability",
          surface: "browser",
        },
        {
          title: "Keeps up with Chrome",
          body: "The tree updates when Chrome bookmarks change, remembers expanded folders, and follows the system light or dark theme.",
          intent: "capability",
          surface: "browser",
        },
      ],
      faqLabel: "Questions & privacy",
      faq: [
        {
          title: "Where do I install it?",
          body: "Install Easier Bookmarks from its Chrome Web Store listing, then click the toolbar action to open it in Chrome's side panel.",
        },
        {
          title: "Does it upload my bookmarks?",
          body: "No. Bookmark titles, URLs, and folders are handled inside the extension. It has no analytics, account, or external server.",
        },
        {
          title: "What does it store?",
          body: "Chrome keeps your bookmarks. The extension stores only your language choice and expanded-folder identifiers in local extension storage.",
        },
      ],
    },
    zh: {
      title: "Easier Bookmarks",
      description: "Chrome 侧边栏书签管理器，可在本地搜索、浏览和整理书签。",
      eyebrow: "Chrome 扩展",
      headline: "在侧边栏里把书签理顺",
      lead: "按标题、网址或文件夹路径搜索书签；不离开 Chrome 侧边栏，就能新建、编辑、移动、排序或删除。",
      primaryCta: { label: "安装扩展", href: siteConfig.externalLinks.easierBookmarksChrome },
      secondaryCta: { label: "隐私政策", href: siteConfig.externalLinks.easierBookmarksPrivacyZh },
      meta: "Chrome 网上应用店 · 工作流与规划 · 无外部服务器",
      proof: [],
      positioningLabel: "适用与边界",
      positioning: [
        {
          title: "什么时候用",
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
          title: "隐私边界",
          body: "它只使用 Chrome 书签 API 和扩展本地存储，不含分析、广告、账号、远程代码或外部服务器。",
          intent: "boundary",
          surface: "browser",
        },
      ],
      featuresLabel: "侧边栏里的能力",
      features: [
        {
          title: "搜索整棵书签树",
          body: "按标题、已保存的网址或文件夹路径查找，不必逐层打开文件夹。",
          intent: "capability",
          surface: "browser",
        },
        {
          title: "就地整理",
          body: "新建书签和文件夹，修改名称与网址，移动或拖放排序；删除前会再次确认。",
          intent: "capability",
          surface: "browser",
        },
        {
          title: "需要时全键盘操作",
          body: "用方向键浏览、Enter 打开、斜杠或 Cmd/Ctrl+K 搜索，也能用键盘移动和重新排序。",
          intent: "capability",
          surface: "browser",
        },
        {
          title: "跟随 Chrome 变化",
          body: "Chrome 书签变化时自动更新，记住已展开的文件夹，并跟随系统浅色或深色主题。",
          intent: "capability",
          surface: "browser",
        },
      ],
      faqLabel: "常见问题与隐私",
      faq: [
        {
          title: "从哪里安装？",
          body: "从 Chrome 网上应用店安装 Easier Bookmarks，然后点击工具栏图标，即可在 Chrome 侧边栏里打开。",
        },
        {
          title: "会上传我的书签吗？",
          body: "不会。书签标题、网址与文件夹结构只在扩展内处理；它没有分析服务、账号或外部服务器。",
        },
        {
          title: "扩展会保存什么？",
          body: "书签由 Chrome 保存。扩展只在本地存储界面语言和已展开文件夹的标识。",
        },
      ],
    },
  },
};
