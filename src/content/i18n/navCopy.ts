import type { Locale } from "../../lib/site";

export const headerCopy: Record<
  Locale,
  {
    primaryLabel: string;
    menuLabel: string;
    menuText: string;
    themeToDark: string;
    themeToLight: string;
    groups: {
      main: string;
      storage: string;
      personal: string;
      external: string;
    };
    links: {
      home: string;
      about: string;
      storageAgent: string;
      worldClock: string;
      douban: string;
      pagewise: string;
    };
  }
> = {
  en: {
    primaryLabel: "Primary",
    menuLabel: "Open site menu",
    menuText: "Menu",
    themeToDark: "Switch to dark theme",
    themeToLight: "Switch to light theme",
    groups: {
      main: "Main",
      storage: "Storage",
      personal: "Reading & media",
      external: "External",
    },
    links: {
      home: "Home",
      about: "About",
      storageAgent: "Storage Agent",
      worldClock: "World Clock",
      douban: "Douban",
      pagewise: "PageWise",
    },
  },
  zh: {
    primaryLabel: "主导航",
    menuLabel: "打开站点菜单",
    menuText: "菜单",
    themeToDark: "切换到深色主题",
    themeToLight: "切换到浅色主题",
    groups: {
      main: "主要页面",
      storage: "对象存储",
      personal: "阅读与影音",
      external: "外部链接",
    },
    links: {
      home: "首页",
      about: "关于",
      storageAgent: "Storage Agent",
      worldClock: "世界时钟",
      douban: "豆瓣评分",
      pagewise: "PageWise",
    },
  },
};
