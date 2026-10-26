// The whole content model in one place. A product is one file in
// ./products/<slug>.ts that satisfies `Product`; everything a page shows is
// read from that file, the site copy in ./site.ts, and ./releases.json.

export type Locale = "en" | "zh";
export const locales: Locale[] = ["en", "zh"];

export type Line = "storage" | "agents" | "everyday" | "games";
export const lines: Line[] = ["storage", "agents", "everyday", "games"];

export type Link = { label: string; href: string };
export type Image = { src: string; alt: string; width: number; height: number };

/**
 * Provenance: the release tag a capture or claim describes ("v14.0.0").
 * Optional. `npm run check` warns when the product's synced release is a
 * major version ahead of it, and lists every such capture and claim.
 */
export type AsOf = { asOf?: string };

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
};

/** What the product does: one plain list of at most six equal-weight features. */
export type CardsSection = { kind: "cards"; id: string; label: string; items: Card[] };

/** One adoption question. `asOf` names the release its answer describes. */
export type FaqItem = Card & AsOf;

/** Adoption questions, rendered as a disclosure list and as FAQPage structured data. */
export type FaqSection = { kind: "faq"; id: "faq"; label: string; items: FaqItem[] };

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

/**
 * Bilingual's peek: a sample paragraph whose translation shows beside it only
 * while the reveal key is held (⌥ on Mac, Shift elsewhere, chosen as the
 * extension does), or while the toggle is on (public/scripts/demo-bilingual.js).
 * Both texts are written for the page; the caption must say they are samples.
 */
export type BilingualDemo = {
  kind: "bilingual";
  /** Accessible name of the demo. */
  label: string;
  /** BCP 47 tags of the two texts. */
  sourceLang: string;
  targetLang: string;
  source: string;
  translation: string;
  /** `{key}` is the platform's reveal key. */
  hint: string;
  /** Shown instead of the hint on touch screens. */
  touchHint: string;
  /** The toggle button, for touch, keyboard and screen readers. */
  show: string;
  /** Announced when the translation appears; `{text}` is the translation. */
  shown: string;
  hidden: string;
  /** Labels the translation for screen readers. */
  translationLabel: string;
};

/**
 * Readout's change marks: a small Markdown pane that receives a few writes in
 * order (public/scripts/demo-readout.js). Each new block gets the thin bar and
 * keeps it until at least half of it has been in view for 800 ms; then it
 * thins and fades, as in Readout. The reader's place stays put. Under reduced
 * motion the pane shows the last write at once, its new blocks still marked.
 */
export type ReadoutDemo = {
  kind: "readout";
  label: string;
  /** Window title: the file name. */
  file: string;
  /** The document before the first write: Markdown-like blocks. */
  blocks: ReadoutBlock[];
  /** Each write inserts one block after the block at `after` (an index into the document as it then stands). */
  writes: Array<{ after: number; block: ReadoutBlock }>;
  /** Announced for each write: `{text}` is the new block's text. */
  written: string;
};

export type ReadoutBlock = { kind: "h1" | "h2" | "p" | "task" | "done"; text: string };

/** A live demo of the product's core mechanic, captioned with what it is. */
export type DemoSection = {
  kind: "demo";
  id: string;
  title: string;
  body: string;
  /** Says what the demo is, for example a working copy, or where its data comes from. */
  caption: string;
  demo: ChessPuzzleDemo | ReadoutDemo;
};

export type Section = (CardsSection | FaqSection | DataSection | DemoSection) & SectionNav;

/* ---------- The product object ---------- */

type VisualBase = {
  label: string;
  /** Real screenshots take the wide frame; mocks and terminals stay narrow. */
  frame?: "wide" | "narrow";
};

export type Visual = VisualBase &
  (
    | ({
        kind: "screenshot";
        image: Image;
        /** Shown under the image; required wording for anything that is not a plain capture. */
        caption?: string;
      } & AsOf)
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
          rows: MenuBarRow[];
        }>;
        footnotes: string[];
        /**
         * Optional animation (public/scripts/demo-pulse.js): the menu bar and
         * the tray step through these scenes in order and loop. The fields
         * above are the still shown without JS and under reduced motion. Every
         * scene keeps the same rows with the same line count, so nothing moves.
         */
        scenes?: Array<{
          lamp: MenuBarRow["state"];
          /** Menu-bar title; only while something waits. */
          glanceTitle?: string;
          headerStatus: string;
          /** The lamp's tooltip: the rule that set it (Pulse's lampSentence). */
          lampSentence: string;
          rows: MenuBarRow[];
        }>;
        /** The still's tooltip, shown with `scenes`. */
        lampSentence?: string;
      }
    | {
        /** A live demo as the hero object, captioned with what it is. */
        kind: "demo";
        caption: string;
        demo: WorldClockDemo | BilingualDemo;
      }
  );

export type MenuBarRow = {
  title: string;
  /** Second line: only waiting, stalled and running rows have one in the tray (Pulse 29). */
  meta?: string;
  state: "waiting" | "running" | "stalled" | "recent" | "process";
  /** Trailing time or tag: wait length, turn length, or "Your turn". */
  chip?: string;
};

export type VisualKind = Visual["kind"];

/**
 * The one photograph after the hero (a product page carries at most one, and
 * none beside a demo section): a compact head over the full captured frame.
 * `asOf` names the release it shows.
 */
export type Showcase = Image &
  AsOf & {
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
  };

/** Commands a reader can copy. Only commands that appear verbatim in the product's README. */
export type Commands = {
  title: string;
  sub?: string;
  /**
   * `capturedOutput` is real, captured output of that exact command (never
   * written by hand); `asOf` names the release it was captured from.
   * `replay` shows it as a terminal that types the command and prints the
   * captured lines in order once scrolled into view (public/scripts/demo-replay.js);
   * its label names the version the output came from.
   */
  items: Array<{ comment: string; command: string; capturedOutput?: string; replay?: { label: string } } & AsOf>;
};

/**
 * Hand-written release highlights for one tag, in this page's language. Used
 * only while that tag is the latest release; any other tag falls back to the
 * notes quoted from GitHub, so an override can never outlive its release.
 */
export type ReleaseHighlights = { version: string; summary?: string; items: string[] };

/**
 * How a product touches the network, for the site's privacy index. Filled only
 * from what the product's own "Where your data goes" section or privacy policy
 * says: `network` is the level (none, only when you ask, or on its own),
 * `networkNote` the short phrase beside it, `stays` where the data stays.
 */
export type PrivacySummary = {
  network: "none" | "onRequest" | "automatic";
  networkNote: string;
  stays: string;
  /** The product's full privacy policy, when it has one. */
  policy?: Link;
};

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
  commands?: Commands;
  visual: Visual;
  showcases?: Showcase[];
  sections: Section[];
  releaseHighlights?: ReleaseHighlights;
  /**
   * One line under the primary action: a trust detail the product's own docs
   * state (for example a macOS build that is not notarized).
   */
  installNote?: string;
  privacy?: PrivacySummary;
};

export const featuredSrc = (featured: NonNullable<Product["featured"]>, locale: Locale) =>
  typeof featured.image.src === "string" ? featured.image.src : featured.image.src[locale];

/** What the product is. Picks the page template (`templateOf`). */
export type ProductType = "cli" | "pi" | "actions" | "desktop" | "mac" | "extension" | "game" | "experiment";
/** Products that work together; members are listed in site.ts (`familyMembers`), roles in `ui.families`. */
export type FamilyId = "s3" | "agents";
/** One body composition per kind of product (DESIGN.md, "Templates"). */
export type Template = "tool" | "app" | "extension" | "game";

export const templateOf = (type: ProductType): Template =>
  type === "cli" || type === "pi" || type === "actions"
    ? "tool"
    : type === "extension"
      ? "extension"
      : type === "game"
        ? "game"
        : "app";

export type Product = {
  slug: string;
  /** Catalog group and header dropdown. */
  line: Line;
  type: ProductType;
  /**
   * Structured data's Offer. Omitted means free (price 0); "unannounced"
   * leaves the Offer out until a price is set, so search engines are not told it is free.
   */
  price?: "unannounced";
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
    os: "Cross-platform" | "Chrome" | "macOS" | "macOS, Windows" | "Android";
  };
  /** Long pages pin their own section links in the local nav. */
  sectionIndex: boolean;
  en: ProductCopy;
  zh: ProductCopy;
};

export function defineProduct(product: Product): Product {
  return product;
}
