import { pathFor, type HeaderNavGroup, type HeaderNavItem, type Locale } from "../lib/site";

export function headerNavGroups(locale: Locale): HeaderNavGroup[] {
  const isZh = locale === "zh";

  return [
    {
      label: isZh ? "主要页面" : "Main",
      items: [
        { label: isZh ? "首页" : "Home", href: pathFor(locale), current: "home" },
        { label: isZh ? "关于" : "About", href: pathFor(locale, "about"), current: "about", showInPrimary: true },
      ],
    },
    {
      label: isZh ? "对象存储" : "Storage",
      items: [
        {
          label: "s3-turbo-list",
          href: pathFor(locale, "s3-turbo-list"),
          current: "s3-turbo-list",
          showInPrimary: true,
        },
        { label: "StorageOps", href: pathFor(locale, "storageops"), current: "storageops", showInPrimary: true },
        { label: "httpmon", href: "https://github.com/hxddh/https-traffic-inspector", external: true },
      ],
    },
    {
      label: isZh ? "浏览器工具" : "Browser",
      items: [
        {
          label: isZh ? "世界时钟" : "World Clock",
          href: pathFor(locale, "world-clock"),
          current: "world-clock",
          showInPrimary: true,
        },
        {
          label: isZh ? "豆瓣评分" : "Douban",
          href: pathFor(locale, "douban-movie-rating"),
          current: "douban",
          showInPrimary: true,
        },
      ],
    },
    {
      label: isZh ? "外部链接" : "External",
      items: [{ label: "GitHub", href: "https://github.com/hxddh", external: true, showInPrimary: true }],
    },
  ];
}

export function primaryNavItems(locale: Locale): HeaderNavItem[] {
  return headerNavGroups(locale)
    .flatMap((group) => group.items)
    .filter((item) => item.showInPrimary);
}
