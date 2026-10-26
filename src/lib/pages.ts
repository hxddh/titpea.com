// Page models: everything a page renders, derived from product files, the
// site copy, and the synced release tags. Components only render these.
// The models live in ./pages/, one file per page kind; this file is their public API.
export { type CurrentPage, versionOf, releasedOf, pathFor, pageTitle, plainText } from "./pages/shared";
export { type PageSeo, type PageLanguageLink, buildSeo, languageLink } from "./pages/seo";
export { type NavItem, type NavGroup, maxNavLinks, navGroups } from "./pages/nav";
export { type CatalogItem, type CatalogCardItem, type Family } from "./pages/catalog";
export { type ProductPageModel, productPage } from "./pages/product";
export { type HomePageModel, homePage } from "./pages/home";
export {
  type ReleaseItem,
  type UndatedReleaseItem,
  type ReleasesPageModel,
  releasesPage,
  type FeedEntry,
  feedEntries,
} from "./pages/releases";
export { type AboutPageModel, aboutPage } from "./pages/about";
export { type PrivacyPageModel, privacyPage } from "./pages/privacy";
export {
  type SitePageModel,
  allPages,
  newestReleaseDate,
  productBySlug,
  type SiteRoute,
  siteRoutes,
} from "./pages/routes";
