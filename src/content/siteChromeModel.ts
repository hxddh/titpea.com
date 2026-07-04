import { siteConfig } from "./siteConfig";
import type { Locale } from "../lib/site";

export type SiteAction = {
  label: string;
  href: string;
  style: "primary" | "ghost";
  external?: boolean;
};

export type SiteChromeModel = {
  showBottomCta: boolean;
  bottomCta: {
    title: string;
    actions: SiteAction[];
  };
};

const chromeCopy = {
  en: {
    bottomTitle: "Explore the tools",
    explore: "GitHub",
    email: "Email",
  },
  zh: {
    bottomTitle: "看看这些工具",
    explore: "GitHub",
    email: "邮件",
  },
} as const;

export function buildSiteChrome(locale: Locale): SiteChromeModel {
  const copy = chromeCopy[locale];

  return {
    showBottomCta: true,
    bottomCta: {
      title: copy.bottomTitle,
      actions: [
        { label: copy.explore, href: siteConfig.externalLinks.github, style: "primary", external: true },
        { label: copy.email, href: `mailto:${siteConfig.email}`, style: "ghost" },
      ],
    },
  };
}
