import type { Locale } from "../../lib/site";

export const headerCopy: Record<
  Locale,
  {
    primaryLabel: string;
    menuLabel: string;
    menuText: string;
    groups: {
      main: string;
      storage: string;
      browser: string;
      external: string;
    };
    links: {
      home: string;
      about: string;
      worldClock: string;
      douban: string;
    };
  }
> = {
  en: {
    primaryLabel: "Primary",
    menuLabel: "Open site menu",
    menuText: "Menu",
    groups: {
      main: "Main",
      storage: "Storage",
      browser: "Browser",
      external: "External",
    },
    links: {
      home: "Home",
      about: "About",
      worldClock: "World Clock",
      douban: "Douban",
    },
  },
  zh: {
    primaryLabel: "主导航",
    menuLabel: "打开站点菜单",
    menuText: "菜单",
    groups: {
      main: "主要页面",
      storage: "对象存储",
      browser: "浏览器工具",
      external: "外部链接",
    },
    links: {
      home: "首页",
      about: "关于",
      worldClock: "世界时钟",
      douban: "豆瓣评分",
    },
  },
};
