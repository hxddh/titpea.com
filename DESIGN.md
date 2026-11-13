# Titpea Design Principles

Titpea is one developer's shelf of tools, and it reads as a quiet, exact catalogue. Each product page is a spec sheet with pictures: one claim, its facts, the product shown large, a short run of what it does, then what a reader needs to adopt it. Home is the index. Order comes from type and space, not boxes: text keeps one centred reading column, pictures stand straight on the page, each section opens on its heading, lists sit on hairlines. One neutral canvas, one ink voice for every control; the only colour is the products' own, in their icons and screenshots.

**Owner decisions (settled; propose changes in a pull request, never push them to `main`):** the index Home (PR #236); one centred reading column on every page and frameless pictures (v4–v5, PRs #238–#245); the three-tile site mark (restored November 2026); no "依据" / evidence framing in copy (October 2026). History: v2 centred launch page → v3 two columns → v4 one edge, hairlines → v4.1 centred column → v4.2 no frames → v5 the product on the first screen.

## When rules compete

1. Facts and CI floors: contrast, 44px targets, CSP, headline limits, release tags from `releases.json`.
2. The reader's job: what the tool changes, how it runs, what remains.
3. The page shape below.
4. Craft: type, spacing, depth, bilingual density.

When a principle and a constraint disagree, keep the constraint and rework the design.

## Page Shape

- **Chrome.** A full-width bar under a hairline: the site mark (22px) and wordmark, the four product lines as dropdowns (icon, name, catalog line), About, GitHub, language, a theme toggle. On product pages a **local nav** replaces it once the header scrolls away (`data-pinned`): the product name, at most four section links, one primary action; on narrow screens the links fold behind `Sections` / `目录`.
- **One axis, two widths.** Text keeps the reading column (`--narrow`, 680px: about 75 Latin characters a line) centred in the shell (1120px), left-aligned inside it. Pictures and Home's grids take the shell. Sections are parted by 96px of space; hairlines (`--line`) open and part the rows of a list. A list is never a box. `.cols` is one column: a label or link stacks above its content.
- **Hero.** Centred: an identity line (icon at 40px, name, eyebrow), the `h1` claim, the lede, two actions, the install note, the facts line; then the product object, which starts at or under 520px at 1440×900.
- **Facts line.** `ul.hero-facts`, one muted line across the shell, items inline in balanced lines, wrapping after a separator, never before one: each segment of the meta line (less version and licence) as its own fact, licence, version, date, `Network: …` (the one fact with a label), `Source` (link, only when the second action is not already the repository). A fact never breaks inside itself; `check` keeps each short enough for a phone. Version and date come from `releases.json`; nothing else is hand-written.
- **Product object.** A real screenshot across the shell, 12px corners, the window's hairline and `--shadow-shot`; no block, tint or padding around it. Under it one line: the caption, then `Captured at v…` (from `asOf`), said once a page; a showcase repeats it only when its release differs. A tall capture stays near its real width (380px). Mocks, terminals, charts and live demos stand the same way at product scale (820px); captured terminal output is light paper, never a black block. A live demo of the main job is the product object when one exists: it behaves as the product does, labels sample text, shows from first paint, and has a stand-in without scripts. An animated mock is labelled illustrative, has Pause / Play, and stands still under reduced motion.
- **Section.** A heading (`h2.heading`: `--text-heading` for showcases, a demo and the feature list; `--text-heading-s` for What's new, Get started, data and FAQ) and, for a showcase or demo, one line (`.sub`), then the section's one object. Headings are labels: the copy may end in a period, the page drops it (`headingText`). Each section has a 1–4 word `nav` label. A small label above text is only a fact (`.fact`, 13px, muted).
- **Showcase.** Heading and line in the column, the picture under them across the shell (`.stage-show`): a capture 3:2 or wider fills it, a narrower one keeps 820px, a phone capture 280px. Windows are shown whole (no `focus` crops). A `dark` capture replaces the light one on a dark page (the hidden one never loads). A short muted `video` plays only in view, with Pause / Play, never under reduced motion. Captures and recordings are real app output; anything else is captioned `Illustration: …` / `示意图：…`. Board captures and recordings are pinned to a release (`scripts/board-apps.mjs`, `scripts/record-board-demos.mjs`).
- **Feature list.** One per page, at most six items, two across the column (one on phones), each under a hairline: title (600) over body, both 18px. A body adds to its title, never repeats it.
- **What's new.** `What's new in v…` / `v… 更新了什么` with the date: up to three lines. A curated `releaseHighlights` (per language, pinned to one tag) always shows while its tag is current; otherwise lines quoted from the notes show only in the page's language and only when they read alone (`readableLine`: five words or eight CJK characters, no ✓ test lines). With none, the section is left out. Never the release title.
- **Commands.** `Get started` / `开始使用`: every command, verbatim from the README, each with Copy; a download-only app has none. A command may carry `capturedOutput` at a named version, shown behind `Show real output` or played as a `replay` that types it once in view. A tool whose command has a replay shows that terminal as its hero object; it is not repeated under Get started.
- **Where your data goes.** Two to four plain sentences on hairlines, each checkable in the README or privacy policy: where keys live, where data stays, what is sent and to whom.
- **FAQ.** At most five adoption blockers the page does not already answer, a disclosure list on hairlines, the first open.
- **Actions.** Primary: `Download` / `下载` (an app), `Install` / `安装` (extension or installer), `View on GitHub` / `查看 GitHub` (source-only), a filled ink pill carrying the release tag when it downloads one; secondary: an outlined pill. `primaryCta.soon` renders a muted, unlinked button. The **install note** is one muted line with a trust detail the docs state (an unnotarized build and the one step that opens it).
- **Closing.** Centred: the product name and the two actions again; under a hairline, its family (members with their step, itself marked) or three products from its line and `All tools`. A page never dead-ends.
- **Footer.** A site map on desktop (each line's products, then Titpea's pages, the feed, GitHub, the other language), then copyright and email; phones show only the last row.
- **Code in copy.** Write `` `code` ``; it renders as a chip, and `check:dist` fails if a raw backtick reaches the page.

## Product Pages

In order, both languages: (1) the hero; (2) up to three showcases or one live demo; (3) the feature list; (4) What's new; (5) Get started; (6) Where your data goes; (7) FAQ; (8) the closing. Every product type (`cli`, `pi`, `actions`, `desktop`, `mac`, `extension`, `game`, `experiment`) uses this skeleton (`templateOf` only chooses the hero object).

- The `h1` is a claim, not the product name: EN ≤ 24 characters plus a period, ZH ≤ 18 with no closing punctuation, two lines at most at every width.
- Earn every section; say each fact once. No pricing, blogs, testimonials, newsletters, comparison tables or tracking beyond the disclosed analytics.
- `npm run check` enforces the counts above and English/Chinese structure parity.

## Home, About, Releases, Privacy

- **Home**: the title (`Small software, made with care.` / `认真做的小软件`), a lede naming the four kinds of software, one line with `One developer` / `一个人开发` and `About hxddh →`; then `Selected work`: three equal picks (`featured.order`, the owner's), each a 16:10 crop of its window with name, catalog line and role · tag; then every product grouped by line (Storage, Agents, Everyday, Games) as icon, name and catalog line, three across. No versions or dates; Releases has them.
- **About**: `One person. {count} tools.`, the owner's own paragraphs (`about.person`, only what the owner has said), GitHub and Email links, then every tool's icon by line, then the analytics disclosure.
- **Releases**: the title, lede and feed link; every product's latest release, newest first, with its What's new lines and up to four earlier tags; then the tools without GitHub releases.
- **Privacy**: the title, lede and analytics disclosure; one table across the shell, a row per product from its `privacy` field (network level, where data stays, links to its data section and policy).
- **Feeds**: `/releases.xml` (Atom, newest first) and `sitemap.xml` with each page's latest release as `lastmod`, never the build date. 404 lists every product.

## Voice

- Plain sentences for someone who has never used this kind of tool. The lede's first sentence says what the product does; a tool, service or format is named in full where it first appears. No telegraph style.
- Lede: one or two sentences, EN ≤ 24 words, ZH about ≤ 56 characters. Cards: a 2–4 word title, a 3–16 word body. Data sentences EN ≤ 22 words. FAQ headed `FAQ` / `常见问题`; answers are full sentences.
- Never drop a qualifier (pre-alpha, "only when you ask", conditions on data). Never add a claim the docs lack: no "fast", "only", "seamless", no numbers not in the docs. Never sell the work as "evidence" or "依据".
- Chinese: natural Chinese, full-width punctuation, “” quotes, code in backticks. UI names are quoted. A Chinese page with an English capture says 界面为英文.

## Type

| Step            | Token              | Size    | Use                                             |
| --------------- | ------------------ | ------- | ----------------------------------------------- |
| Label           | `--text-meta`      | 13px    | facts, captions, dates: the floor               |
| Secondary       | `--text-small`     | 15px    | catalog lines, UI, the facts line, install note |
| Reading         | `--text-body`      | 18px    | bodies, answers, lists, feature titles          |
| Lede            | `--text-lede`      | 19–21px | the hero's lede                                 |
| Group heading   | `--text-heading-s` | 21px    | a group or a consulted section                  |
| Section heading | `--text-heading`   | 26–32px | a showcase, demo or feature list                |
| Title           | `--title-display`  | 40–64px | the page title and closing name                 |

- These seven steps are the only font sizes a page stylesheet may set (`npm run check` fails on any other; `em` is allowed). The title's Chinese and phone values are the same token redefined in `tokens.css`. Product mocks (`visuals.css`, `demo-*.css`) keep their app's sizes, never under 12px.
- English is the sans throughout (system face, then Inter): titles at 650, tracked `-0.038em`; section headings 600, `-0.024em`. Chinese titles and the closing name use Noto Serif SC SemiBold (subset to the headings' characters; `npm run build` recuts it, `check:dist` fails on a missing character) with Fraunces for Latin letters, and half-width punctuation (`halt`). No CJK webfont for reading text; no tracking on Chinese.
- Mono is only for what is typed: commands, code, terminals. Facts are the sans with tabular figures.
- Reading text is `--ink-2` (7:1), 18px (Chinese 17px), line-height 1.55–1.6 (Chinese 1.75), measure 65ch (Chinese 34em). Chinese short text wraps `pretty`; a Chinese lede wraps only between phrases.

## Colour and Depth

- Tokens live in `tokens.css` only (`npm run check` fails on a raw colour in a shadow, or any gradient, in a page stylesheet): `--paper` / `--paper-raised`; `--ink`, `--ink-2`, `--muted` (labels), `--faint` (decoration); `--accent-fill` / `--on-accent` (the primary action), `--accent` (focus rings only); `--glass`, `--menu-bg` (chrome); `--surface` (light paper of terminals and mocks); `--product-tint` / `--product-ink` and `--tint-<slug>` / `--ink-<slug>` (sampled from each icon, used in mocks).
- One voice for controls: the primary action is filled ink; links are ink, underlined in running text; a standalone link carries an arrow.
- Depth: the paper, and `--shadow-shot` under a picture. Translucency is for chrome only. Radii: media 12px (`--radius-media`, `--radius-window`) and the pill.
- Dark mode is first-class (OS or toggle): a near-black `#0b0b0c` canvas; captures are never dimmed; a `dark` capture replaces a light one.
- Icons: every product has one, on the same plate (hairline and soft shadow, `--plate-s`): official artwork where it exists, else a site-designed tile from `design/icons/<slug>.svg` (`npm run assets:icons`). The site mark is three tiles in the accent gradient (`design/brand/titpea-mark.svg`, `npm run assets:favicon`).

## Interaction

Dropdowns and the mobile menu are `<details>` that close on outside click and Escape. The local nav marks the section in view. Copy buttons say `Copied` / `已复制`. Buttons press to `scale(0.98)`; a pick lifts 3px; a list row tints. Screenshots open full size in a `<dialog>` (`zoom.js`). Showcases below the fold rise in once (`reveal.js`); text never waits. `prefers-reduced-motion` turns motion off. No inline script or style: CSP is `script-src 'self'; style-src 'self'`.

## Floors

- Contrast 4.5:1 (3:1 for 18px+ and non-text); targets 44×44px; every image has `alt` (`""` if decorative).
- Images: WebP with declared `width` / `height`, originals at least twice their shown width, `-900w` / `-1200w` variants (`npm run assets:images`); the hero `fetchpriority="high"`, the rest lazy.
- A page loads only its own CSS; non-product pages stay under 40 KB (`check:dist`). Breakpoints: 900px and 640px (16px gutter).
- Analytics: Cloudflare Web Analytics, cookieless, injected at the edge (`site.analyticsAutoInjected`); never with `analyticsToken` too; About discloses it.
- Share images: `npm run assets:og` renders each 1200×630 card from the page copy and records its inputs (`design/og-manifest.json`).

## Review

`check` (source rules, including the type scale and this file staying under 15 KB), `check:dist` (built output), `qa:pages` (overflow, lines, CTAs, nav, anchors), `a11y:check` (axe on every page, theme and viewport) and `visual:check` (eleven baseline screens, taken from CI's own captures) run on every pull request and push to `main`; a failing push does not deploy. Then review by eye: (1) from the first screen alone, does a reader know what the product changes? (2) did every qualifier survive? (3) one dominant object per section, one centred axis; (4) one owner per gap; (5) remove whatever can go without losing meaning. Every claim, figure and command must be traceable to the product's documentation, a capture, or its source.
