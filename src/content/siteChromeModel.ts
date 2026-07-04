import { productCatalogModel } from "./productCatalogModel";
import productFacts from "./productFacts.json";
import { productManifestBySlug } from "./productManifest";
import { siteConfig } from "./siteConfig";
import type { Locale, ProductSlug } from "../lib/site";
import { pathFor } from "../lib/site";

export type SiteAction = {
  label: string;
  href: string;
  style: "primary" | "ghost";
  external?: boolean;
};

export type SiteHighlightItem = {
  name: string;
  href: string;
  meta: string;
  text: string;
};

export type SiteChangelogItem = {
  date: string;
  version?: string;
  title: string;
  href: string;
};

export type SiteChromeModel = {
  recent: {
    label: string;
    title: string;
    viewAllLabel: string;
    viewAllHref: string;
    items: SiteHighlightItem[];
  };
  changelog: {
    label: string;
    viewAllLabel: string;
    viewAllHref: string;
    items: SiteChangelogItem[];
  };
  bottomCta: {
    title: string;
    actions: SiteAction[];
  };
};

const chromeCopy = {
  en: {
    recentLabel: "Recent highlights",
    recentTitle: "Tools worth a closer look",
    viewAll: "View all tools",
    changelogLabel: "Changelog",
    seeNew: "See releases on GitHub",
    bottomTitle: "Explore the tools",
    explore: "GitHub",
    email: "Email",
    storageGroup: "Storage",
    personalGroup: "Reading & media",
  },
  zh: {
    recentLabel: "近期亮点",
    recentTitle: "值得细看的一组工具",
    viewAll: "查看全部工具",
    changelogLabel: "更新",
    seeNew: "在 GitHub 查看发布",
    bottomTitle: "看看这些工具",
    explore: "GitHub",
    email: "邮件",
    storageGroup: "存储",
    personalGroup: "阅读与影音",
  },
} as const;

function changelogItems(): SiteChangelogItem[] {
  const slugs: ProductSlug[] = ["s3-turbo-list", "storage-agent-workbench", "pagewise"];
  return slugs.flatMap((slug) => {
    const manifest = productManifestBySlug[slug];
    const facts = productFacts[manifest.factId as keyof typeof productFacts] as {
      latestRelease?: string;
      repository?: string;
    };
    if (!facts?.latestRelease) return [];
    return [
      {
        date: facts.latestRelease,
        version: facts.latestRelease.replace(/^v/, ""),
        title: manifest.name,
        href: `https://github.com/${facts.repository ?? manifest.factId}/releases`,
      },
    ];
  });
}

export function buildSiteChrome(locale: Locale): SiteChromeModel {
  const copy = chromeCopy[locale];
  const catalog = productCatalogModel(locale);
  const primary = catalog.all.filter((item) => item.isPrimary);

  return {
    recent: {
      label: copy.recentLabel,
      title: copy.recentTitle,
      viewAllLabel: copy.viewAll,
      viewAllHref: pathFor(locale),
      items: primary.map((item) => ({
        name: item.name,
        href: item.href,
        meta: `${item.displayRole} · ${item.group === "storage" ? copy.storageGroup : copy.personalGroup}`,
        text: item.text,
      })),
    },
    changelog: {
      label: copy.changelogLabel,
      viewAllLabel: copy.seeNew,
      viewAllHref: siteConfig.externalLinks.github,
      items: changelogItems(),
    },
    bottomCta: {
      title: copy.bottomTitle,
      actions: [
        { label: copy.explore, href: siteConfig.externalLinks.github, style: "primary", external: true },
        { label: copy.email, href: `mailto:${siteConfig.email}`, style: "ghost" },
      ],
    },
  };
}
