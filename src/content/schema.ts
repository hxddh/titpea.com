// The whole content model in one place. A product is one file in
// ./products/<slug>.ts that satisfies `Product`; everything a page shows is
// read from that file, the site copy in ./site.ts, and ./releases.json.

export type Locale = "en" | "zh";
export const locales: Locale[] = ["en", "zh"];

export type Line = "storage" | "agents" | "everyday" | "games";
export const lines: Line[] = ["storage", "agents", "everyday", "games"];

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

/** A run with a centered head. Numbered unless `ordered: false`: only a real sequence gets numbers. */
export type FlowSection = {
  kind: "flow";
  ordered?: false;
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

/** Where the product's data goes: two or three plain, checkable sentences. */
export type DataSection = { kind: "data"; id: "data"; title: string; items: string[] };

/** A city in the World Clock demo: a real IANA zone, so daylight saving is real. */
export type DemoCity = { name: string; zone: string; country: string };

/**
 * A working copy of the World Clock popup's time scroll, run on the visitor's
 * own clock (public/scripts/demo-world-clock.js). Without JS, `fallback`
 * shows instead.
 */
export type WorldClockDemo = {
  kind: "worldClock";
  /** Popup header, as the extension titles it. */
  appTitle: string;
  /** Accessible name of the popup copy. */
  label: string;
  local: string;
  tomorrow: string;
  yesterday: string;
  /** Accessible name of the hour slider. */
  slider: string;
  /** The reset action that returns to the current time. */
  now: string;
  hint: string;
  /** The cities after the visitor's own; one that shares the visitor's zone is skipped, as in the extension. */
  cities: DemoCity[];
  /** Names the visitor's own zone when it matches; otherwise the zone's last segment. */
  localNames: DemoCity[];
  fallback: Image & { caption: string };
};

/**
 * One puzzle from the app's shipped set, solved on the page
 * (public/scripts/demo-chess.js). Moves are checked against `line` only; the
 * board renders without JS as the static position.
 */
export type ChessPuzzleDemo = {
  kind: "chessPuzzle";
  /** The puzzle position, side to move included. */
  fen: string;
  /** The solution: the solver's moves and the forced replies, alternating. */
  line: Array<{ from: string; to: string; san: string }>;
  label: string;
  prompt: string;
  /** After a solver move that is right but not yet mate. */
  good: string;
  /** `{move}` is the reply's SAN. */
  reply: string;
  wrong: string;
  solved: string;
  reset: string;
  /** `{piece}` and `{square}`. */
  selected: string;
  /** `{square}` and `{piece}`; an empty square reads as the square alone. */
  square: string;
  /** `{color}` and `{piece}`. */
  piece: string;
  colors: { w: string; b: string };
  pieces: { k: string; q: string; r: string; b: string; n: string; p: string };
};

/** A live demo of the product's core mechanic, captioned with what it is. */
export type DemoSection = {
  kind: "demo";
  id: string;
  title: string;
  body: string;
  /** Says what the demo is, for example a working copy, or where its data comes from. */
  caption: string;
  demo: WorldClockDemo | ChessPuzzleDemo;
};

export type Section = (
  | CardsSection
  | FaqSection
  | CasesSection
  | FlowSection
  | PanelSection
  | DataSection
  | DemoSection
) &
  SectionNav;

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
        /** Shown under the image; required wording for anything that is not a plain capture. */
        caption?: string;
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
        /** `display` replaces the plotted number wherever it is printed (for example "~19s" for an approximate figure). */
        points: Array<{ label: string; seconds: number; display?: string; state?: "reference" | "caution" }>;
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
        /** Optional second header line; omit when the app's header has none. */
        headerAgents?: string;
        sections: Array<{
          /** Omit for one ungrouped list, as the tray shows since Pulse 26. */
          title?: string;
          /** Lamp shape: waiting solid, running ring, recent (your turn) hollow, process dashed. */
          rows: Array<{
            title: string;
            /** Second line: only waiting, stalled and running rows have one in the tray (Pulse 29). */
            meta?: string;
            state: "waiting" | "running" | "recent" | "process";
            /** Trailing time or tag: wait length, turn length, or "Your turn". */
            chip?: string;
          }>;
        }>;
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
  /** Shown under the image; required wording for anything that is not a plain capture. */
  caption?: string;
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
  /** Home: `role` is the featured kicker; `text` is the one line in the index. */
  catalog: { role: string; text: string };
  /** `soon` renders the label as an unlinked, not-yet-available action (a store listing still in review). */
  primaryCta: Link & { soon?: true };
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
    /** Row order on Home, from 1. */
    order: number;
    /** One capture, or one per locale when the app's own UI is in that language. */
    image: Omit<Image, "src" | "alt"> & { src: string | Record<Locale, string>; alt: Record<Locale, string> };
    /** Shown under the image; required wording for anything that is not a plain capture. */
    caption?: Record<Locale, string>;
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
    category: "DeveloperApplication" | "BrowserApplication" | "GameApplication" | "BusinessApplication";
    os: "Cross-platform" | "Chrome" | "macOS" | "macOS, Windows";
  };
  /** Long pages pin their own section links in the local nav. */
  sectionIndex: boolean;
  en: ProductCopy;
  zh: ProductCopy;
};

export function defineProduct(product: Product): Product {
  return product;
}
