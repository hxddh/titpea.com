# Titpea Design Principles (v7)

Titpea is one developer's shelf of software. It should read like an independent software workshop's catalogue: exact, quiet, warm. Hairlines and type do the work; colour comes from the products themselves. Every fact about a product is written once, as data, and every page reads it from there.

History: v2 launch page → v4 one centred column → v6 each thing said once → **v7 (November 2026)**: the catalog as the single source of facts, a Products menu instead of three product lists per page, Home's index with filters, spec tags, feature lists sized to the product, plain-sentence headlines. **v7.2**: serif display in both languages (mid optical size), warm paper, Home filtered by category, facts as text lines not chips, no frames around captures. **v7.1**: no data section (privacy facts live on the Privacy index, one network tag in the hero), one product list per page (the menu; the footer is one line), showcases paired as a gallery row, no fact said twice in a hero. Owner decisions stay the owner's; change them in a pull request, never straight on `main`.

## When rules compete

1. Facts and CI floors: contrast, 44px targets, CSP, one source per fact.
2. The reader's job: what the tool changes, where it runs, what it touches.
3. The page shapes below.
4. Craft: type, spacing, depth, bilingual density.

## One source per fact

| Fact                                | Lives in                                                        | Read by                                                 |
| ----------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------- |
| Name, summary, eyebrow, copy        | `products/<slug>.ts` (`en`, `zh`)                               | every page, menus, footer, share images                 |
| Line, type, platforms, licence      | `products/<slug>.ts` (product level)                            | spec tags, Home rows and filters, structured data       |
| Version and date                    | `releases.json` (GitHub or PyPI, synced), else `version`        | `versionOf()`: hero, Home, Releases, feed, sitemap      |
| What changed                        | `releaseHighlights` for exactly the current tag, both languages | Releases, feed; none when stale (never raw GitHub text) |
| First-open step for unsigned builds | `firstOpen` (product) + `ui.firstOpen` (wording)                | the guide beside the download                           |
| Network level, where data stays     | `privacy`                                                       | the hero's network tag and the Privacy index            |
| Platform and kind words             | `ui.platforms`, `ui.kinds`                                      | everywhere a tag appears                                |

Copy never contains a version, a platform list or a licence: those are facts the page adds. `npm run check` fails on `{version}`, on a product with both a synced and a written version, on highlights in one language only, and warns while highlights describe an older tag.

## Page shape

- **Header.** The mark and wordmark; `Products` (one panel: the four lines side by side, icon and name only); `Releases`, `About`, `GitHub`; language; theme. Under 900px the three page links move to the panel's foot. Nothing else lists products in the header. Product pages pin a local nav (name, up to four section links, the primary action) once the header scrolls away.
- **Footer.** One line: copyright, then only what the header lacks (Privacy, the feed, email). Products are listed once, in the header's menu; a page's body ends on its own neighbours.
- **One axis, two widths.** Text sits in the reading column (`--narrow`, 680px) centred in the shell (1120px); pictures and Home's lists take the shell. Sections are parted by space; hairlines open lists.

### Home

Title, lede, the byline. `Selected work`: three picks (`featured.order`), the first large and two beside it, each its real window, icon, name, eyebrow and claim (its tags are in the index below, not repeated). `Everything`: category chips (All and the four lines) wired by `filter.js`, each showing one line's group; without scripts the chips stay hidden and every group shows. Rows: icon, name, summary, a facts line of platforms (a kind only for command-line tools, which name no platform), version in mono. No counts.

### Product pages

In order, both languages identical in structure:

1. **Hero**: identity line (icon, name, eyebrow), the `h1`, the lede, two actions, the first-open guide (a disclosure, only for unsigned builds), the facts line (platforms, stack, licence, version unless the button carries it, Source, the network level linking to its Privacy row): one muted line of text parted by thin dots, never boxed chips. Dates live on Releases.
2. **Product object**: a real capture across the shell, or a demo, mock, terminal or replay at product scale; captioned with what it shows, and `Captured at v…` only when that release is not the current one.
3. **Up to two showcases** (a live demo counts as one). Two landscape showcases stand side by side as one gallery row, each picture with its name and line under it; one stays full width.
4. **Feature list**: the product's real highlights, one to six, never padded. Storage and Agents lines read as a spec list (feature left, what it does right, rows on hairlines); Everyday and Games as larger points. `layout` overrides.
5. **Get started**: commands verbatim from the README, each with Copy, set as a terminal line with a `$` prompt.
6. **FAQ**: at most three, an accordion; an answer is a sentence or two, then `steps` as a list.
7. **Ending**: a family's members with their steps, or up to three other products of the same line.

Games sit on warmer paper (`--paper-warm`, set on the root when `body[data-line="games"]`); tools keep the neutral canvas and terminal lines. Same skeleton, different temperament.

### About, Releases, Privacy

- **About**: `{count} tools, made by one person.`, the owner's own paragraphs (`about.person`), links, the analytics disclosure.
- **Releases**: every product with a synced release, newest first: tag, date, notes link, current highlights, four earlier tags; then the products without synced releases and their versions.
- **Privacy**: one table from each product's `privacy`.

## Voice

- Write like an engineer telling a peer what the tool does. Plain sentences; name a tool, service or format in full where it first appears.
- `h1`: one sentence saying what changes for the reader. EN ≤ 52 characters with a period; ZH ≤ 24, no closing punctuation. Never a run of clipped fragments ("Ask. Check the page.").
- Lede: one or two sentences. Feature: a title of ≤ 6 words, a body that adds to it. FAQ answers: full sentences, steps as a list.
- Never drop a qualifier ("only when you ask", conditions); never add a claim the docs lack: no "fast", "seamless", "powerful", no numbers not in the docs, no "evidence" / 依据.
- Chinese: natural Chinese, full-width punctuation, “” quotes, code in backticks. Say PR, not 拉取请求. A brand keeps one name in both languages (Goban, Chessboard); a product with its own Chinese name uses it (世界时钟, 对读).

## Type

| Step            | Token              | Size    | Use                                                        |
| --------------- | ------------------ | ------- | ---------------------------------------------------------- |
| Label           | `--text-meta`      | 13px    | tags, captions, dates, column labels                       |
| Secondary       | `--text-small`     | 15px    | summaries, UI, menus                                       |
| Reading         | `--text-body`      | 18px    | bodies, answers, lists                                     |
| Lede            | `--text-lede`      | 19–21px | the hero's lede                                            |
| Group heading   | `--text-heading-s` | 21px    | a line's heading, a feature point's title                  |
| Section heading | `--text-heading`   | 26–32px | each section                                               |
| Title           | `--title-display`  | 40–64px | the page title                                             |
| Product title   | `--title-product`  | 30–56px | a product page's sentence headline (3 lines max on phones) |

- Only these steps may set a page's font size (`em` allowed). Product mocks keep their app's sizes, never under 12px.
- **Serif display** for every h1 and h2, the same voice in both languages: English in Fraunces (book weight, display optical size, lightly tracked), Chinese in the Noto Serif SC SemiBold subset (`npm run build` recuts it from every h1 and h2) with Fraunces for Latin. The wordmark is set the same way. **Sans** (system face, then Inter) for everything read.
- **Mono** for what is typed and for versions: commands, code, version tags, column labels. Facts lines are the sans at the label size. Numbers use `tabular-nums`.
- Reading text `--ink-2` (7:1), `--leading-body` 1.7 (Chinese 1.75), measure 66ch (Chinese 34em).

## Colour and depth

- Tokens only, in `tokens.css` (check fails on a raw colour in a shadow or any gradient in a page stylesheet): `--paper`, `--paper-warm`, `--surface-sunk` (terminal lines, the first-open guide), `--ink`, `--ink-2`, `--muted`, `--faint`, `--line`, `--soft-line`, `--tag-line` (chips), `--accent-fill` (the primary action), `--accent` (focus rings only), product `--tint-*` / `--ink-*` for mocks.
- Paper is warm (ivory light, warm black dark), hairlines carry a little brown. Captures stand straight on the paper, whole, with only their own hairline and `--shadow-shot`: never a plate, tinted card, frame or padding around them (tried in v7.2 and withdrawn: it shrank the window, cut its edge and read as a template). Edges are 1px hairlines. Shadows: `--shadow-shot` under a capture, `--shadow-panel` under the menu; nothing else floats. Translucency only on the header.
- No gradients, glow, glass panels, floating badges, emoji or decorative icons on headings. Dark mode is first-class; captures are never dimmed.

## Interaction

Menus are `<details>` that close on outside click and Escape. Filter chips are `aria-pressed` buttons. The local nav marks the section in view. Copy says `Copied` / `已复制`. Captures open full size in a `<dialog>`. Showcases below the fold rise in once; text never waits. `prefers-reduced-motion` stops motion. No inline script or style (CSP `script-src 'self'; style-src 'self'`).

## Floors

- Contrast 4.5:1 (3:1 for large text and UI), reading text 7:1; targets 44×44px; every image has `alt`.
- WebP with declared size, `-900w` / `-1200w` variants. Non-product pages under 40 KB of CSS. Breakpoints 900px and 640px (16px gutter).
- Share images are drawn from the page copy (`npm run assets:og`); a changed title, headline or summary needs a redraw.

## Review

`check`, `check:dist`, `qa:pages`, `a11y:check` and `visual:check` run on every pull request. Then by eye: does the first screen say what the product changes and where it runs? did every qualifier survive? is each fact said once? would anything go without losing meaning?
