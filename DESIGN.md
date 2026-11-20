# Titpea Design Principles (v8)

Titpea is one developer's shelf of software. Since v8 it reads like a product launch page in the Apple manner: cool white paper, heavy tight sans titles, a floating glass capsule for navigation, soft colour washes behind each title, captures shown whole on rounded tiles of the product's own colour, and big figures for the facts. Every fact about a product is still written once, as data, and every page reads it from there.

History: v2 launch page → v4 one centred column → v6 each thing said once → v7 the catalog as the single source of facts, the Products menu, Home's index with filters → **v8 (November 2026)**: the visual language of a modern product page (capsule nav, washes, tiles, stats band, gallery, cards), replacing v7.2's serif-on-warm-paper. The owner chose it; change it in a pull request, never straight on `main`.

## When rules compete

1. Facts and CI floors: contrast, 44px targets, CSP, one source per fact.
2. The reader's job: what the tool changes, where it runs, what it touches.
3. The page shapes below.
4. Craft: type, spacing, depth, bilingual density.

## One source per fact

| Fact                                | Lives in                                                        | Read by                                                 |
| ----------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------- |
| Name, summary, eyebrow, copy        | `products/<slug>.ts` (`en`, `zh`)                               | every page, menus, footer, share images                 |
| Line, type, platforms, licence      | `products/<slug>.ts` (product level)                            | the stats band, Home cards and filter, structured data  |
| Version and date                    | `releases.json` (GitHub or PyPI, synced), else `version`        | `versionOf()`: hero, Home, Releases, feed, sitemap      |
| What changed                        | `releaseHighlights` for exactly the current tag, both languages | Releases, feed; none when stale (never raw GitHub text) |
| First-open step for unsigned builds | `firstOpen` (product) + `ui.firstOpen` (wording)                | the note under the download                             |
| Network level, where data stays     | `privacy`                                                       | the stats band's network figure, the Privacy index      |
| Platform and kind words             | `ui.platforms`, `ui.kinds`; words under figures in `ui.stats`   | everywhere a fact appears                               |

Copy never contains a version, a platform list or a licence: those are facts the page adds. `npm run check` fails on `{version}`, on a product with both a synced and a written version, on highlights in one language only, and warns while highlights describe an older tag.

## Page shape

- **Header.** A floating glass capsule, the shell's width, 10px below the top: the mark and wordmark; `Products` (one panel: the four lines side by side, icon and name only); `Releases`, `About`, `GitHub`; language; theme. Under 900px the three page links move to the panel's foot. Product pages swap it, once it scrolls away, for the product's own capsule (icon, name, up to four section links, the blue action).
- **Footer.** One line: copyright, then only what the header lacks (Privacy, the feed, email).
- **Widths.** The shell is 1120px; galleries run from the shell's left edge off the right of the window. Sections are parted by 120px of space (88px on phones) and open on a centred heading and one line.
- **Washes.** Every page title sits on three soft radial washes (`--wash`); on a product page the first takes the product's colour. Decoration only: text keeps its contrast on the bare page.

### Home

Eyebrow, title, lede, one action (About). `Selected work`: the picks (`featured.order`) as a gallery, each its real window rising from the foot of a tile in its product's colour, then icon, name, eyebrow and claim. `Everything`: a segmented control (All and the four lines, wired by `filter.js`; hidden without scripts), then each line's label and its products as grey cards: icon, name, summary, a facts line (platforms; the kind only for command-line tools), version in mono.

### Product pages

In order, both languages identical in structure:

1. **Hero**, centred: the icon (112px), the eyebrow line (name · eyebrow), the `h1`, the lede, the blue download (carrying the version) and a blue text action, the first-open note (a disclosure, only for unsigned builds).
2. **Product object**: a capture whole on a tile (`--tile-fill`, the product's colour), or a demo, mock, terminal or replay at product scale; captioned with what it shows, and `Captured at v…` only when that release is not the current one.
3. **Stats band**: up to four figures, each a fact with a few words under it: platforms (one platform by name with its kind; several as a count with their names; a tool with none by its kind), the network level (`0` network connections, `Opt-in`, `Online`, linking to its Privacy row), the licence, the version when the button does not carry it, the source when no action opens it.
4. **Gallery**: the showcases, each on its tile with its name and line under it; paddles page it (`gallery.js`), and it scrolls by swipe or keys without them. One showcase takes the shell.
5. **Features** as grey cards (three across; two when four or fewer would leave one alone), one to six, never padded. `layout: "spec"` keeps a two-column list for a product that needs it.
6. **Get started**: commands verbatim from the README, each in a rounded code panel with Copy and a `$` prompt.
7. **FAQ**: at most three, an accordion on hairlines; an answer is a sentence or two, then `steps` as a list.
8. **Ending**: a family's members with their steps, or up to three other products of the same line.

### About, Releases, Privacy

Each opens on its title on the washes. **About**: `{count} tools, made by one person.`, the owner's own paragraphs, links, the analytics disclosure. **Releases**: every product with a synced release, newest first, in one rounded grey panel (`.list-panel`): tag, date, notes link, current highlights, four earlier tags; then the products without synced releases. **Privacy**: one table from each product's `privacy`, in the same panel.

## Voice

- Write like an engineer telling a peer what the tool does. Plain sentences; name a tool, service or format in full where it first appears.
- `h1`: one sentence saying what changes for the reader. EN ≤ 52 characters with a period; ZH ≤ 24, no closing punctuation. Never a run of clipped fragments.
- Lede: one or two sentences. Feature: a title of ≤ 6 words, a body that adds to it. FAQ answers: full sentences, steps as a list. The words under a figure: a few words, never a slogan.
- Never drop a qualifier ("only when you ask", conditions); never add a claim the docs lack: no "fast", "seamless", "powerful", no numbers not in the data or the docs.
- Chinese: natural Chinese, full-width punctuation, “” quotes, code in backticks. Say PR, not 拉取请求. A brand keeps one name in both languages; a product with its own Chinese name uses it.

## Type

| Step            | Token              | Size    | Use                                                |
| --------------- | ------------------ | ------- | -------------------------------------------------- |
| Label           | `--text-meta`      | 13px    | facts lines, captions, dates, column labels        |
| Secondary       | `--text-small`     | 15px    | card bodies, eyebrows, menus, words under a figure |
| Reading         | `--text-body`      | 17px    | answers, lists, buttons                            |
| Lede            | `--text-lede`      | 19–24px | the hero's lede                                    |
| Card title      | `--text-heading-s` | 19px    | a card's or gallery item's title, a section's line |
| Section heading | `--text-heading`   | 34–56px | each section; a word in the stats band             |
| Figure          | `--text-stat`      | 40–64px | a number in the stats band                         |
| Title           | `--title-display`  | 44–84px | the page title                                     |
| Product title   | `--title-product`  | 40–72px | a product page's sentence headline                 |

- Only these steps may set a page's font size (`em` allowed). Product mocks keep their app's sizes, never under 12px.
- **One sans** for everything: Inter (then the system face) for Latin, the system CJK face (PingFang, YaHei) for Chinese. Titles and headings bold (700) and tightly tracked in English (−0.035em titles, −0.03em headings); Chinese at 700 with no negative tracking and never a synthesised bold.
- **Mono** for what is typed and for versions. Tabular figures only on versions: in Inter they also widen hyphens.
- Reading text `--ink-2` (7:1).

## Colour and depth

- Tokens only, in `tokens.css`: `--paper` (#fbfbfd; dark #000), `--paper-raised` (cards, tiles, panels), `--surface` (menus), `--ink`, `--ink-2`, `--muted`, `--faint`, `--line`, `--link` (#0066cc), `--accent-fill` (#0071e3, the primary action), `--accent` (focus rings), `--wash-1..3`, product `--tint-*` / `--ink-*`.
- Gradients only through `--wash` and `--tile-fill` (check fails on a gradient in a page stylesheet); shadows only through tokens. Radii: `--radius-tile` 28px (tiles), `--radius-card` 22px (cards, panels), `--radius-window` 14px (captures), pills for buttons and capsules.
- **Tiles** (hero, gallery, Home's picks) follow one rule: an even field of the product's colour (`--tile-fill`, never a fade to grey) with a faint edge (`--tile-edge`), 5% margins on every side, and the whole window centred in it, filling the opening's width or, when narrower (`tileFit`), its height, under `--shadow-tile-shot`. A detail keeps its own pixels, framed the same way. Captures are never cropped by the tile, padded with chrome or dimmed. Translucency (`--glass`, `--glass-blur`) only on the two capsules.
- No glow, floating badges, emoji or decorative icons on headings. Dark mode is first-class.

## Interaction

Menus are `<details>` that close on outside click and Escape. The segmented control's buttons are `aria-pressed`. Galleries are focusable regions; paddles disable at either end and hide on touch screens. The local capsule marks the section in view. Copy says `Copied` / `已复制`. Captures open full size in a `<dialog>`. `prefers-reduced-motion` stops motion. No inline script or style (CSP `script-src 'self'; style-src 'self'`).

## Floors

- Contrast 4.5:1 (3:1 for large text and UI), reading text 7:1; targets 44×44px; every image has `alt`.
- WebP with declared size, `-900w` / `-1200w` variants. Non-product pages under 40 KB of CSS. Breakpoints 900px and 640px.
- Share images are drawn from the page copy (`npm run assets:og`); a changed title, headline or summary needs a redraw.

## Review

`check`, `check:dist`, `qa:pages`, `a11y:check` and `visual:check` run on every pull request. Then by eye: does the first screen say what the product changes and where it runs? did every qualifier survive? is each fact said once? would anything go without losing meaning?
