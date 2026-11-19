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

/**
 * What the product does: its real highlights, one to six, never padded to
 * fill a grid. The layout follows the product's line (DESIGN.md, "Feature
 * list"): tools read as a spec list on hairlines, apps and games as a few
 * larger points. `layout` overrides that when the content asks for it.
 */
export type CardsSection = {
  kind: "cards";
  id: string;
  label: string;
  items: Card[];
  layout?: "spec" | "points";
};

/**
 * One adoption question. `body` is the answer's first sentence or two;
 * `steps` holds what would otherwise be a wall of text: one short line per
 * step, condition or fact, rendered as a list. `asOf` names the release the
 * answer describes.
 */
export type FaqItem = Card & AsOf & { steps?: string[] };

/** Adoption questions, rendered as a disclosure list and as FAQPage structured data. */
export type FaqSection = { kind: "faq"; id: "faq"; label: string; items: FaqItem[] };

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

/** A live demo of the product's core mechanic, captioned with what it is. */
export type DemoSection = {
  kind: "demo";
  id: string;
  title: string;
  body: string;
  /** Says what the demo is, for example a working copy, or where its data comes from. */
  caption: string;
  demo: ChessPuzzleDemo;
};

export type Section = (CardsSection | FaqSection | DemoSection) & SectionNav;

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
    /**
     * The same screen captured in dark appearance, same aspect ratio: shown
     * instead of `src` when the page is dark (system or the header toggle).
     */
    dark?: { src: string; width: number; height: number };
    /**
     * Show a detail of the capture at its own pixel size, anchored here, so the
     * app's text stays readable (phones show the whole capture). Only for a
     * capture taken at 1x; the whole window is one link away.
     */
    focus?: ShowcaseFocus;
  };

export type ShowcaseFocus =
  "top-left" | "top" | "top-right" | "left" | "center" | "right" | "bottom-left" | "bottom" | "bottom-right";

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
 * from what the product's docs or privacy policy
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
  /** The product's one name in this language: page, menus, Home, footer, Releases. */
  title: string;
  description: string;
  eyebrow: string;
  /** The hero h1: one plain sentence saying what changes for the reader, not the name. */
  headline: string;
  lead: string;
  /** One line of value: Home's index, the share image, Releases' feed. */
  summary: string;
  /** `soon` renders the label as an unlinked, not-yet-available action (a store listing still in review). */
  primaryCta: Link & { soon?: true };
  secondaryCta: Link;
  /**
   * What it is built with or works against, in this language ("Rust",
   * "S3-compatible"): shown as tags after the platforms. Never a feature.
   */
  stack?: string[];
  commands?: Commands;
  visual: Visual;
  showcases?: Showcase[];
  sections: Section[];
  releaseHighlights?: ReleaseHighlights;
  privacy: PrivacySummary;
};

export const featuredSrc = (featured: NonNullable<Product["featured"]>, locale: Locale) =>
  typeof featured.image.src === "string" ? featured.image.src : featured.image.src[locale];

/** Where a product runs; `min` is the oldest supported version ("14", "8.0"). */
export type Platform = { id: "macos" | "windows" | "linux" | "chrome" | "android"; min?: string };
export const platformOrder: Platform["id"][] = ["macos", "windows", "linux", "chrome", "android"];

/**
 * An unsigned or unnotarized build and the one step that opens it, as the
 * product's docs state it. The words come from site.ts (`ui.firstOpen`), so
 * every product says it the same way.
 */
export type FirstOpen = {
  /** "once": the first launch only; "eachRelease": after every new version. */
  macos?: "once" | "eachRelease";
  /** The step applies from this macOS version on ("15"). */
  macosFrom?: string;
  /** Windows SmartScreen warns the first time. */
  windows?: true;
};

/** What the product is. Picks the page template (`templateOf`). */
export type ProductType = "cli" | "pi" | "actions" | "desktop" | "mac" | "extension" | "game";
/** Kinds a reader can filter Home by: what you install it into. */
export const isCommandLine = (type: ProductType) => type === "cli" || type === "pi" || type === "actions";
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
  /** Operating systems or browsers it runs on, in any order (shown in `platformOrder`). Empty for a CLI built from source. */
  platforms: Platform[];
  /** SPDX-style licence name, when the source is published. */
  license?: string;
  /**
   * The current version of a product without a synced release (a Chrome Web
   * Store listing, an app not yet in a store), written as a tag ("v9.0.0").
   * A product with an entry in releases.json never sets it.
   */
  version?: string;
  firstOpen?: FirstOpen;
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
  };
  /** Long pages pin their own section links in the local nav. */
  sectionIndex: boolean;
  en: ProductCopy;
  zh: ProductCopy;
};

export function defineProduct(product: Product): Product {
  return product;
}
