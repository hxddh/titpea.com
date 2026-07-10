import { catalogCopy, homeStudioCopy } from "../i18n/pageCopy";
import { ui } from "../i18n/siteCopy";
import { productCatalogModel } from "../productCatalogModel";
import { absoluteUrl, siteConfig } from "../siteConfig";
import { visualModel } from "../visualModels";
import { alternateLocale, buildPageSeo, languageLink, pagePath, pageTitle } from "./seo";
import type { HomePageModel } from "./types";
import type { Locale } from "../../lib/site";
import { pathFor } from "../../lib/site";

export function buildHomePage(locale: Locale): HomePageModel {
  const copy = ui[locale];
  const pageCopy = catalogCopy[locale];
  const studioCopy = homeStudioCopy[locale];
  const catalog = productCatalogModel(locale);
  const path = pagePath(locale);
  const alternatePath = pagePath(alternateLocale(locale));
  const description = copy.homeDescription;
  const inLanguage = { en: "en", zh: "zh-CN" }[locale];
  const flagship = catalog.flagship;
  const flagshipHref = flagship?.href ?? catalog.featuredProductPath;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.brand,
    url: absoluteUrl(path),
    inLanguage,
    description,
    publisher: {
      "@type": "Person",
      name: "hxddh",
      url: siteConfig.githubProfile,
    },
  };

  return {
    kind: "home",
    locale,
    current: "home",
    path,
    alternatePath,
    primaryCta: flagshipHref,
    expectedText: [copy.homeTitle, copy.storageTitle, copy.personalTitle],
    seo: buildPageSeo({
      title: pageTitle(siteConfig.brand),
      description,
      path,
      alternatePath,
      locale,
      ogImage: siteConfig.assets.og.home,
      structuredData,
    }),
    language: languageLink(locale, alternatePath),
    hero: {
      eyebrow: studioCopy.eyebrow,
      title: copy.homeTitle,
      lead: copy.homeLead,
      principlesLabel: studioCopy.principlesLabel,
      principles: [...studioCopy.principles],
      actions: [
        {
          label: studioCopy.primaryCta,
          href: flagshipHref,
          style: "primary",
        },
        {
          label: studioCopy.secondaryCta,
          href: "#work-index",
          style: "ghost",
        },
      ],
      visual: visualModel("storageWorkbench", locale, pageCopy.homeFlagshipVisual),
      visualHref: flagshipHref,
      proofCaption: pageCopy.proofCaption,
    },
    finding: {
      trailLabel: studioCopy.trailLabel,
      trails: [...studioCopy.trails],
      eyebrow: studioCopy.findingEyebrow,
      title: studioCopy.findingTitle,
      objectLabel: studioCopy.objectLabel,
      objectValue: studioCopy.objectValue,
      checkLabel: studioCopy.checkLabel,
      checkValue: studioCopy.checkValue,
      conclusionLabel: studioCopy.conclusionLabel,
      conclusionValue: studioCopy.conclusionValue,
      evidenceLabel: studioCopy.evidenceLabel,
      command: studioCopy.command,
      noteLabel: studioCopy.noteLabel,
      noteLines: [...studioCopy.noteLines],
      sourceLabel: studioCopy.sourceLabel,
      sourcePath: studioCopy.sourcePath,
      checksum: studioCopy.checksum,
      alternate: studioCopy.alternateFindings.map((finding) => ({ ...finding })),
    },
    notes: {
      label: studioCopy.notesLabel,
      indexTitle: studioCopy.indexTitle,
      indexBody: studioCopy.indexBody,
      indexCta: studioCopy.indexCta,
      rows: studioCopy.noteRows.map((row, index) => ({
        ...row,
        href: index === 0 ? flagshipHref : pathFor(locale, "agent-radar"),
      })),
    },
    storage: {
      id: "storage",
      label: copy.storageLine,
      title: copy.storageTitle,
      items: catalog.storage,
    },
    personal: {
      id: "personal",
      label: copy.personalLine,
      title: copy.personalTitle,
      items: catalog.personal,
    },
  };
}
