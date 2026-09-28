// The whole content model in one place. A product is one file in
// ./products/<slug>.ts that satisfies `Product`; everything a page shows is
// read from that file, the site copy in ./site.ts, and ./releases.json.

export type Locale = "en" | "zh";
export const locales: Locale[] = ["en", "zh"];

export type Line = "storage" | "agents" | "everyday" | "experimental";
export const lines: Line[] = ["storage", "agents", "everyday", "experimental"];

export type Link = { label: string; href: string };
export type Image = { src: string; alt: string; width: number; height: number };

/* ---------- Sections ---------- */

/**
 * A section's `label` / `kicker` is its short name in the local nav; it is not
 * shown on the page (headings carry sections alone). `nav` overrides it.
 */
type SectionNav = { nav?: string };

export type Card = {
  title: string;
  body: string;
  link?: Link;
  evidence?: string;
  priority?: "primary" | "secondary";
};

/** Equal-weight cards: fit, limits, features. `numbered` makes them a step flow. */
export type CardsSection = { kind: "cards"; id: string; label: string; items: Card[]; numbered?: boolean };

/** Adoption questions, rendered as a disclosure list and as FAQPage structured data. */
export type FaqSection = { kind: "faq"; id: "faq"; label: string; items: Card[] };

/** Named compatibility targets. */
export type CasesSection = { kind: "cases"; id: string; label: string; title: string; items: string[]; body?: string };

/** A numbered run, with a centered head. */
export type FlowSection = {
  kind: "flow";
  id: string;
  kicker: string;
  title: string;
  body: string;
  steps: Array<{ label: string; body: string }>;
};

/** A product-specific object: a purpose split or a document excerpt. */
export type PanelSection = {
  kind: "panel";
  id: string;
  kicker: string;
  title: string;
  body: string;
  panel:
    | {
        kind: "purpose";
        label: string;
        items: Array<{ label: string; title: string; body: string }>;
        boundaryLabel: string;
        boundary: string;
      }
    | {
        kind: "excerpt";
        label: string;
        eyebrow: string;
        title: string;
        items: Array<{ label: string; value: string; body: string }>;
      };
};

export type Section = (CardsSection | FaqSection | CasesSection | FlowSection | PanelSection) & SectionNav;

/* ---------- The product object ---------- */

type VisualBase = {
  label: string;
  /** Real screenshots take the wide frame; mocks and terminals stay narrow. */
  frame?: "wide" | "narrow";
};

export type Visual = VisualBase &
  (
    | {
        kind: "screenshot";
        image: Image;
      }
    | {
        kind: "clockScreenshots";
        images: Array<Image & { className: string }>;
      }
    | {
        kind: "s3Benchmark";
        kicker: string;
        title: string;
        body: string;
        points: Array<{ label: string; seconds: number; state?: "reference" | "caution" }>;
        chartLabel: string;
        chartCaption: string;
      }
    | {
        kind: "skillMap";
        kicker: string;
        title: string;
        body: string;
        cards: Array<{ number: string; title: string; body: string }>;
        flow: [string, string];
      }
    | {
        kind: "httpTerminal";
        kicker: string;
        status: string;
        command: string;
        requestLabel: string;
        method: string;
        url: string;
        requestMeta: string;
        responseLabel: string;
        response: string;
        responseMeta: string;
        body: string;
        footnotes: string[];
      }
    | {
        kind: "terminalBrief";
        kicker: string;
        status: string;
        command: string;
        filesLabel: string;
        files: string[];
        briefLabel: string;
        brief: string;
        footnotes: string[];
      }
    | {
        kind: "menuBar";
        menubarLabel: string;
        glanceTitle: string;
        headerStatus: string;
        headerAgents: string;
        sections: Array<{
          title: string;
          rows: Array<{ title: string; meta: string; state: "waiting" | "running" | "recent"; chip?: string }>;
        }>;
        footnotes: string[];
      }
    | {
        kind: "worldProjection";
        kicker: string;
        status: string;
        briefingLabel: string;
        briefing: string;
        commandsLabel: string;
        commands: string[];
        collectionLabel: string;
        collection: string[];
        timelineLabel: string;
        timeline: string[];
        footnotes: string[];
      }
  );

export type VisualKind = Visual["kind"];

/** A photograph after the hero: a compact head over the full captured frame. */
export type Showcase = Image & {
  title: string;
  body: string;
  /**
   * A short muted screen recording of the real app. The image above is its
   * poster and the fallback; the recording plays only in view and never under
   * reduced motion.
   */
  video?: { mp4: string; webm?: string };
  /** Sit under the section with this id instead of opening the page. */
  beside?: string;
};

/** One figure in the stats band. Every figure must be traceable to the product's docs or tests. */
export type Stat = { value: string; label: string };

/** Commands a reader can copy. Only commands that appear verbatim in the product's README. */
export type Commands = {
  title: string;
  sub?: string;
  /** `capturedOutput` is real, captured output of that exact command (never written by hand). */
  items: Array<{ comment: string; command: string; capturedOutput?: string }>;
};

/**
 * Hand-written release highlights for one tag, in this page's language. Used
 * only while that tag is the latest release; any other tag falls back to the
 * notes quoted from GitHub, so an override can never outlive its release.
 */
export type ReleaseHighlights = { version: string; summary?: string; items: string[] };

export type ProductCopy = {
  /** Name as shown in the catalog, nav, and eyebrow. */
  title: string;
  /** Shorter header label when the title is long. */
  navLabel?: string;
  description: string;
  eyebrow: string;
  /** The hero h1: a short declarative claim, not the name. English ≤ 24 characters plus a closing period, Chinese ≤ 18. */
  headline: string;
  lead: string;
  /**
   * Catalog card. `badge` is the chip a card without GitHub releases shows in
   * place of the tag: where the product lives. It defaults to `GitHub` when the
   * primary action opens GitHub, else the first part of the meta line.
   */
  catalog: { role: string; text: string; badge?: string };
  primaryCta: Link;
  secondaryCta: Link;
  /** Mono meta line, segments joined by " · ". `{version}` is replaced by the synced release tag. */
  meta: string;
  stats?: { title: string; items: Stat[] };
  commands?: Commands;
  visual: Visual;
  showcases?: Showcase[];
  sections: Section[];
  releaseHighlights?: ReleaseHighlights;
};

export const featuredSrc = (featured: NonNullable<Product["featured"]>, locale: Locale) =>
  typeof featured.image.src === "string" ? featured.image.src : featured.image.src[locale];

export type Product = {
  slug: string;
  /** Catalog group and header dropdown. */
  line: Line;
  /** The featured products (at most three) lead Home with this photograph. */
  featured?: {
    /** One capture, or one per locale when the app's own UI is in that language. */
    image: Omit<Image, "src" | "alt"> & { src: string | Record<Locale, string>; alt: Record<Locale, string> };
  };
  /**
   * App icon: hero, local nav, catalog, About, 404, share image. Required
   * (npm run check). Official artwork or a site-designed tile; see design/icons.
   */
  icon: string;
  /** GitHub repository whose latest release fills `{version}`. */
  repo?: string;
  og: string;
  schema: {
    category: "DeveloperApplication" | "BrowserApplication" | "GameApplication";
    os: "Cross-platform" | "Chrome" | "macOS" | "macOS and Windows";
  };
  /** Long pages pin their own section links in the local nav. */
  sectionIndex: boolean;
  en: ProductCopy;
  zh: ProductCopy;
};

export function defineProduct(product: Product): Product {
  return product;
}
