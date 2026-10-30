# Titpea Design Principles

Titpea is a personal product site. Each product page reads like a product launch page: one clear claim, the product itself shown large, then a short run of what it does. The home page is a directory built from the same pieces. The references are the quiet product pages of Apple, Things and Linear: one neutral canvas, one ink voice for every control, type set for reading, and the product's own screenshots as the only real colour on the page.

**Design v2 (October 2026, approved by the owner in PR #221).** One voice (ink controls; product colour only in the icon and one faint glow), one product skeleton for every kind of product, type built for reading (no inherited tracking, 17px reading text, a 65ch / 34em measure), a hairline header, two shadow depths, and a near-black dark canvas with staged screenshots. The sections below describe it.

## When Rules Compete

Protect them in this order:

1. Facts and CI floors: contrast, 44px targets, CSP, headline length and line count, external release tags.
2. The reader's job on that page: what the tool changes, how it runs, what remains.
3. The page shape below: centered hero → product object → sections → closing action.
4. Craft: type, spacing, depth, bilingual density.

When a principle and a constraint disagree, satisfy the constraint and rework the design.

## Page Shape

Every page builds from the same few parts below; build new content from them before inventing a new part. Product pages arrange them by kind (see Templates), so a CLI, an app, an extension and a game no longer share one layout.

- **Chrome.** A full-width bar under a hairline (`.site-header`, a translucent paper surface) holds the site mark and the wordmark Titpea, the four product lines as dropdowns, About, GitHub, language, and a theme glyph (a half-filled disc; its name is its `aria-label`). Each product line's dropdown lists its products with icon, name and catalog line, so a menu says what each tool is. On product pages the header scrolls away and the **local nav** takes over: the same full-width bar with the product name, at most four section links (the first sections, then `Get started` and `FAQ`), and one filled primary action. It takes no room in the flow and, with scripts, appears only once the site header has scrolled out of view (`data-pinned`), so two bars never stack. On narrow screens the section links collapse behind a `Sections` / `目录` disclosure and the action hides only when that disclosure is present.
- **Hero.** Centered, over a faint wash (`.wash`; on a product page, one breath of the product colour behind the icon). Icon (76px; 56px on phones), eyebrow, then `h1`, then a balanced lede in reading ink, then actions, then the meta line. The product object follows, centered, and starts within the first screen on desktop and phone.
- **Product object.** Real screenshots sit in the wide frame (1040px) as photographs: rounded (`--radius-shot`), resting on the page (`--shadow-shot`); in dark mode they sit on a grey stage (`--stage`, `--stage-pad`) so a light window does not glare. CSS mocks, terminals, and charts stay in the narrow frame (820px) so their type keeps product scale. They keep their own window contour (`--radius-window`). Where a working demo of the main job exists, it is the product object (World Clock's time scroll, Bilingual's peek): it behaves as the shipped product does, its caption says what it is and labels any sample text as sample, it shows from the first paint without moving the page, and without scripts a stand-in shows instead. An animated mock (Pulse's tray) stays labeled illustrative, loops only with a Pause / Play button, and stands still under reduced motion.
- **Section.** A left-aligned section head (`h2` in the system sans at `--title-section`, optional `.sub`), `--head-gap` above its one object: the feature list, a showcase photograph or live demo, the commands, the data statement, or the FAQ. No kicker above section headings: the heading carries the section alone. A section's `label` / `kicker` is only its name in the local nav. On product pages a small label above text survives only as the hero eyebrow, the label on a captured object (`httpmon v1.2.1 · captured output`), and the release date over What's new.
- **Feature list.** Titled lines under a hairline: no fill, no box, no shadow. Title and body are both reading size (17px); weight and ink carry the hierarchy. The grid picks its columns from the item count: 1 is a narrow single column, 2 and 4 are two columns, anything else is three. **A page carries one feature list of at most six items**; a body adds to its title and never repeats it (`npm run check` enforces both). On phones the list is one column: two columns left about 20 characters a line.
- **Showcase.** A compact head (`--title-show` heading, one sentence) beside the photograph on desktop, alternating sides, above it on narrow screens. A showcase may carry a short muted recording (`video`) with the photograph as its poster; it plays only in view, never under reduced motion, and has a Pause / Play button. Screenshots and recordings come from the real app with real output: never a scripted model, staged answer text, or a mock presented as a capture. An image that is not a plain capture (a store image with sample translations) carries a `caption` that says so under it (`Illustration: …` / `示意图：…`). Recordings are made per language from the app's own UI (`scripts/record-board-demos.mjs` opens Goban's Review panel and steps Chessboard's review); the poster is the recording's first frame. Board captures are pinned to a release (`scripts/board-apps.mjs`) and refuse any other checkout, so a page never shows unreleased work.
- **Commands.** `Get started` / `开始使用`: at most one command block (a tool's hero already shows its first command), with a Copy button, after the feature list and before the data section. Only commands that appear verbatim in the product's README; a desktop app whose install is a download gets no command block. A command may carry `capturedOutput`: the real output of that exact command at a named version, behind `Show real output` / `查看实际输出`, or with `replay` as a terminal that types the command and prints the captured lines once it scrolls into view (Play / Pause; the whole output at once under reduced motion). Never hand-written, and the replay never changes a character.
- **Where your data goes.** `Where your data goes.` / `数据的去向`: two or three plain sentences on hairlines, at reading size and ink, before the FAQ. Every sentence is checkable against the product's README or privacy policy: where keys live, where files and history stay, what is sent and to whom. Products that keep data local carry it (Storage Agent, PageWise, Easier Bookmarks); once it exists, those facts leave the feature list and the FAQ.
- **FAQ.** A disclosure list (`details.faq-item`) on hairlines, one column at the reading measure, first answer open. Only adoption blockers not already on the page.
- **Primary action.** One of three labels: `Download` / `下载` for an app, `Install` / `安装` for an extension or installer, `View on GitHub` / `查看 GitHub` for source-only tools. A product whose store listing is still in review sets `primaryCta.soon`: the label (`Coming to Chrome` / `即将上架`) renders as a muted, unlinked button in the hero, local nav and closing band, and the secondary action carries the page.
- **Install note.** A product may set `installNote` (both languages): one muted line under the hero actions, never a caution colour with a trust detail its own FAQ or README states, such as a macOS build that is not notarized and the one step that opens it. Never a claim the docs do not make.
- **Release tag.** When the primary action downloads a GitHub release, the button carries the current tag (`Download v1.17.3`). The hero meta line then gives only the release date in the tag's place (`Sep 4, 2026` / `2026年9月4日`), since the button already names the tag; Releases lists every tag and date. Tags and publish dates come from `releases.json`, which CI refreshes before every build and checks daily, redeploying only when one changed; nobody edits a version or date by hand. Dates are absolute, never "3 days ago", because the site does not rebuild every day.
- **What's new.** When a release's notes yield a summary or highlights, the page shows `What’s new in v1.17.3.` / `v1.17.3 更新了什么` before the commands and FAQ: the release date, up to three items quoted from the notes (bold leads or first clauses, never rewritten), and a link to the full notes. Only lines in the page's language are quoted; with none left, the section is one line: `v12.0.0 · 2026年9月5日 · 发布说明 ›`. `scripts/sync-releases.mjs` refreshes them with the tag and lists every quoted line in the CI run summary for the owner to read. The release title is never shown: it is the author's shorthand, not a sentence for visitors. A product may set `releaseHighlights` (per language, pinned to one tag) to replace the quoted lines with hand-written ones, a one-line summary included; it applies only while that tag is the latest release.
- **Terminal objects.** A CLI hero that shows a terminal uses real captured output from a named version, said in its kicker (`httpmon v1.2.1 · captured output`); otherwise it is labeled illustrative.
- **Closing action.** Every product page ends on it, in one band on the raised paper: the app icon when there is one, the product name (in the display face), and the hero's two actions again, under the same labels (the download keeps its release tag).
- **Where next.** After the closing action, one quiet row: `More in {line}` / `更多{line}工具` (games: `更多游戏`, since games are not tools) in small type, three products as icon and name (no cards, one-liners, or tags), taken from the rest of the product's line in site order after it, then from the other lines (the label becomes `More tools` / `更多工具`), and an `All tools` link. A product page never dead-ends. The row sits inside the closing band, under a hairline, so the page ends on one block: the action once more, then where to go next.
- **Family.** A product in a family shows the family (inside the closing band, without its own card) in place of that row, with itself marked (`aria-current`, a ring on its icon, not a link) and the `All tools` link under it, so its page ends on where it sits among the tools it works with.
- **Footer.** On desktop (except 404, whose page already lists every product), a map of the site: one column per product line with every product, then a Titpea column (Home, About, Releases, Privacy, the releases feed, GitHub, the other language). Phones skip the map (the menu already lists every product). Then copyright on the left and email on the right.
- **Code in copy.** Product copy writes code as `` `code` ``; `Prose.astro` renders it as an inline code chip and structured data drops the backticks. `check:dist` fails if a raw backtick reaches page text.

## One Skeleton

Every kind of product (`type` in `schema.ts`: tools, apps, extensions, games) uses the same page: the centered hero with the product object under it, then the sections in the order under Product Pages. `templateOf` picks only what the hero carries:

- **Tool** (`cli`, `pi`, `actions`): the first `Get started` command sits under the lede, ready to copy. When a command carries a captured `replay`, that terminal is the hero's object and the product's own object (s3-turbo-list's chart) follows as the section that shows the product working; the replay is not repeated in `Get started`, and `Get started` starts from the second command, since the hero already shows the first (a first command whose output the hero does not play stays). With only one command, `Get started` keeps its title and explanatory line and no command block.
- **App, extension, game**: the hero object is the capture or the working demo. An extension's network level and data facts are its `Where your data goes` section, like every other product, not a box in the hero.

On phones: the feature list is one column; phone-shaped captures stay beside their text at a third of the width; the closing band drops its icon (the local nav carries it); and the FAQ keeps the first answer open and folds the rest (`faq.js`; without it the answers the page opened stay open).

## Home

**Settled direction — the owner decided this in October 2026 (the studio home, replacing the stacked Omni rows of PR #150 and #153), then simplified it at the owner's request, October 2026.** Home says who makes this, then lets a visitor find the right tool: hero → featured row → the four lines → footer, and nothing else. Propose a change to this direction in a pull request for the owner to decide; never push it straight to `main`.

- The hero has no icon shelf (every product already appears in the catalog): it opens on the person (`One developer, hxddh` / `hxddh，一个人开发`), the title (`Small software, made with care.` / `认真做的小软件`; a `|` in the copy marks where a title may wrap, so a phone never strands a character), and a plain lede that says what kinds of software are here (`Object storage, coding agents, Chrome extensions, games.` / `对象存储、编码 Agent、Chrome 扩展、游戏。`): four directions named outright, no connecting phrases (the owner shortened it in October 2026). Two actions: `Browse all {count} tools` jumps to the catalog (`#more-title`); `About hxddh ›` is the text link.
- `Every tool` / `全部工具` is the one section. The featured products (`featured.order`: World Machine, Chessboard, Readout — the owner's picks, Readout in place of Bilingual since October 2026; three is the ceiling) lead it as its first row of three larger cards. Each card is the screenshot (16:11, top-anchored; 16:10 on phones), role kicker, name, one line, `Learn more ›`; the whole card is one link and its image is decorative (`alt=""`). An image that is not a plain capture keeps its `featured.caption`, under the card's line. The row is named `Selected work` / `主要作品` for assistive tech. Below 960 px the row scrolls sideways (three cards do not split into two columns).
- Then every other product, grouped by line in the header menu's order and names (`Storage`, `Agents`, `Everyday`, `Games` / `存储`, `Agent`, `日常`, `游戏`), in site order within a line. Each group is a hairline, a small quiet `h3` label (`--text-kicker`, `--muted`), and a grid of open cells: no fill, no border, no shadow; whitespace separates them. A cell is one link: the icon at 48px in its plate, the name, and `catalog.text` under it. Four columns on desktop, two on tablets, one on phones (icon left, name and line right). No pictures, chips, filters, families or release strip: versions, dates and platforms live on the product page and Releases, and families on the product pages that belong to them.

## About

Simplified at the owner's request, October 2026. One calm column that fits about one desktop screen: who makes Titpea, and how to reach them. Home lists the products; Releases lists what shipped.

- `About Titpea` / `关于 Titpea`, then the claim `One person. {count} tools.` / `一个人，{count} 个工具` with the live product count. No lede and no actions.
- Directly under it, the person: `about.person` in `site.ts`, per language, holds the owner's own words as a few short first-person paragraphs (who makes the tools and what they are; what the owner likes, in their words: reading, good food, digital gadgets, making interesting things; where the code and releases are) and an optional portrait (above the eyebrow). Only what the owner has said goes here; About renders it only when it is filled. The text reads left-aligned at about 34em under the centred claim.
- One quiet line of text links (not buttons): `GitHub · Email`. Then the analytics disclosure line (see Analytics). No closing band.
- No personal details beyond what the owner has published; nothing about the person is inferred.

## Releases

- `/releases/` / `/zh/releases/`: `What shipped, and when.` / `最近发布了什么`, then every product's latest release, newest first: icon and name (to the product page), tag, date, `Release notes ›`, and, when the notes yield them, a `releaseHighlights` summary or up to three lines quoted from the notes, under a hairline. The rules of What's new apply: only lines in the page's language, never rewritten, never the release title; without notes an entry is one row. Under each entry, one muted line, `Earlier` / `更早`, lists up to four earlier releases by tag and date (two on phones), from the `history` that `releases:sync` keeps; the titles it stores are never shown. Then `Without GitHub releases.`: the Chrome extensions and source-only tools, each with the version its own meta line gives, if any, and no date. The menu (Main) and the footer link it, and so does the feed's `alternate` link.

## Privacy

- `/privacy/` / `/zh/privacy/`: `Which tools go online.` / `哪些工具会联网`, one table with a row per product: when it touches the network (`None` / `Only when you ask` / `Automatically`, with a short phrase), where its data stays, and links to its `Where your data goes` section and its own privacy policy. Each row comes from the product's `privacy` field, which only repeats what its data section or policy already says; a product without a data section reads `Not written up on its page yet.` Phones read each row as a block. The footer links it.

## Releases Feed

- `sitemap.xml` gives each product page a `lastmod` of its latest release date, and Home, About and Releases the newest release anywhere; pages without such a date carry none (never the build date).
- `/releases.xml` is an Atom feed of every product's latest release, newest first, built from `releases.json`. Every page links it in `<head>`, and the footer and the Releases page link it.

## 404

- Home, the Chinese home, and a two-column directory of every product with its icon.

## App Icons

- Every product has an icon, and every list of products shows them (Home's catalog, families, the release lists, 404, share images). `npm run check` fails without one.
- Every rendered icon gets the same plate: a hairline edge and one soft drop shadow (`--plate-l/m/s` by icon size, light and dark), with no ring of its own, so the artwork meets the page directly (the owner dropped the white ring in October 2026). Official artwork and site-drawn tiles still read as one family, and dark tiles keep their edge on the dark canvas. The plate replaces per-list drop shadows.
- Official artwork is used where it exists, clipped to the site tile (radius 22.5%). Otherwise the icon is site-designed from `design/icons/<slug>.svg`: a 1024 tile with a top sheen and one image that says what the product does — a card-catalog drawer for s3-turbo-list, a stethoscope for StorageOps, a radar dish for Agent Radar. Each has its own colour so no two read alike, the mark survives 28 px, and no third-party logo appears.
- `npm run assets:icons` renders `public/assets/icons/<slug>.webp`. `design/icons/README.md` records which icons are official and which are site-designed.

- **Site mark.** A stack of three app tiles in the accent gradient, offset up and to the right, the back two translucent: a set of tools, not one product. Source `design/brand/titpea-mark.svg`; `npm run assets:favicon` writes `favicon.svg`, a 16/32/48 `favicon.ico`, and a 180px `apple-touch-icon.png` on the page colour. It sits at 22px before the wordmark (`Titpea` in Fraunces) in the header and nowhere else on the page.

## Analytics

- Cloudflare Web Analytics, cookieless. The zone's "automatic setup" site injects the beacon at the edge (`site.analyticsAutoInjected`), so pages carry no token; the CSP allows only that script (`static.cloudflareinsights.com`) and its endpoint (`cloudflareinsights.com`). Before the CSP allowed them, the injected beacon was blocked and the dashboard read 0.
- `site.analyticsToken` is only for the JS-snippet method with automatic setup turned off; never both, or every view counts twice.
- Whenever either is on, About shows the one-line disclosure.

## Share Images

- `npm run assets:og` renders every 1200×630 card from the page copy. A product with a screenshot gets the split card (icon, name, headline, catalog line on the left, the screenshot bleeding off the right edge); other products get the centered card with their icon; Home shows the icon row.

## Product Pages

- `h1` is the claim (`copy.headline`), not the product name: a short declarative sentence. English ≤ 24 characters plus a closing period; Chinese ≤ 18 characters, no closing punctuation. It stacks into two lines at most at every breakpoint. Shorten copy before shrinking type.
- The eyebrow is `{title} · {eyebrow}`. Products with an app icon show it above the eyebrow and in the local nav.
- Hero actions: one filled `.button.primary.large` and one `.button.ghost` text link with a chevron. Keep 2–3.
- **Page shape (simplified at the owner's request, October 2026).** Every product page, in both languages, is the reference shape of Apple, Linear, Things and Panic: one claim, the product shown large and more than once, a short run of what it does, then the facts a reader needs. The clutter cut was text and boxes (stat rows, asides, numbered steps, status tables, card grids that repeat each other), never pictures of the product. In order:
  1. Hero: icon, name and eyebrow, claim, lede, actions, meta line, the product object.
  2. Up to three sections that show the product: real screenshots, captures or recordings (`showcases`) and at most one live demo (Chessboard's puzzle, Readout's change marks), each a short heading, one sentence and the picture, the text beside it on desktop, alternating sides. A feature an image shows is said in that image's line, not again in the list. Tools without screenshots keep their captured terminal or chart objects (s3-turbo-list's benchmark follows its replay hero); no image is invented for them.
  3. One feature list, `features`: what the pictures do not already say, at most six plain items (fewer is better), short title and fragment. Steps, cases, panels and stat rows are not separate sections; their strongest items join this list, or leave the page.
  4. What's new, when the release notes yield it.
  5. Get started, for tools that need a command: at most one command block.
  6. Where your data goes: at most three sentences.
  7. FAQ: at most five questions, the adoption blockers the page does not already answer.
  8. The closing band (with the family or the where-next row).
- `npm run check` enforces the limits: one feature list of at most six items, at most three showcase and demo sections (at most one demo), at most one command block under Get started, at most five FAQ questions, two or three data sentences. A desktop page runs about 4,200–5,500px at 1440 wide when pictures take the space; the text sections stay short.
- Earn every section. If a section, item or answer can go without losing a qualifier the reader needs, remove it.
- One source of truth per fact. The section after the hero does not inventory the lead, and FAQ asks the extra fact, not the platforms line already in the meta.
- Label schematic interface examples explicitly; they are not captured execution evidence.
- Not on product pages: pricing, blog posts, testimonials, newsletter forms, comparison tables against other products, or tracking beyond the cookieless analytics already disclosed.

## Voice

- **No 依据 framing (owner rule, October 2026).** Site and product copy never sells the work as "evidence", "依据" or "shows its work"; that framing is too narrow. Say what the product does. A feature that is literally called evidence in the product (PageWise exporting evidence highlights) keeps its name. `依据` is in `zhForbiddenTerms`.

Say each thing once, in as few words as the fact allows, but never so few that a first-time reader is lost. The figures and the photographs carry the claim; the words label them. **Write for someone who has not used this kind of tool (design v2):** the lede's first sentence says what the product does in plain words, and a tool, service or format is named in full where it first appears (Pi, the open-source coding agent; Baidu Object Storage (BOS)). Telegraph style ("Parquet out.") is out.

- **Lead**: one or two plain sentences, at most 24 words ("Lists a large S3 bucket, or compares two, in parallel. No tuning first: the result is a Parquet file you can query."). Chinese uses one or two 句子 with 。, at most about 56 characters.
- **Section headings** are one declarative sentence that says what the section holds ("It remembers what it found.", not a riddle like "Findings outlast the task."). English ends with a period; Chinese has no closing punctuation. On pages with a local nav, each section also sets a 1–4 word `nav` label.
- **Cards**: a 2–4 word title and a line of 3–16 words. One idea per card. One list of at most six per page, ideally 3 or 6 equal-weight items.
- **Showcases**: a short heading and one sentence beside the photograph ("Scans become Markdown.").
- **FAQ**: headed `FAQ` / `常见问题`. Questions are questions. Answers are full sentences and carry the conditions that do not fit a card.
- Shortening never drops a qualifier: support that depends on the agent, pre-alpha status, "after a successful write", "only when the match is reliable", data posture. A condition that does not fit a card moves to the FAQ.
- No new claims in the name of brevity: no "fast", "only", "seamless", or numbers that are not in the product's docs.

## Type

- Reading text: system face first (`-apple-system`, SF Pro), then Inter for Latin elsewhere, then the system CJK face. Do not load a CJK webfont.
- Display face, used sparingly: the hero titles, the product name in the closing band, and the wordmark are set in Fraunces (self-hosted, Latin only, weight and optical-size axes; `Fraunces-OFL.txt`), through `--display-face`. Chinese pages set the same lines in Noto Serif SC SemiBold (`NotoSerifSC-OFL.txt`), with Fraunces for their Latin letters (`"Fraunces Latin"`, which leaves General Punctuation to the Chinese face so “ ” … — stay full width). The Chinese face is cut to the characters the built Chinese headings use (`npm run assets:fonts` after a build, then build again; `check:dist` fails when a heading uses a character the subset lacks), weight 600 only, no synthesised bold, no negative tracking. Fraunces weight is 540 on hero titles, tracked `-0.02em`. The page's display face is preloaded (`SiteLayout.astro` reads its URL from `fonts.css`), so the title never reflows from a fallback serif. The Home title sets its second line in italic, in muted ink (`--display-accent`, via `::first-line`, so the copy stays one string).
- Section headings are the system sans at weight 650, tracked `-0.024em` in English; the serif stays a signature, not a texture.
- Tracking belongs to roles, never to `body`: a length in `em` set on `body` is inherited as a fixed pixel value and crushes every smaller size. Reading text has none. Chinese (`:lang(zh)`) has no tracking anywhere, headings included: Latin tracking squeezes square glyphs.
- Reading text is 17px in both languages (`--text-card-title`, `--text-card-body`, `--text-list-body`) at line-height 1.55–1.6 (Chinese 1.75), held to the reading measure `--measure`: 65ch in English, 34em in Chinese. Feature titles and bodies share one size; weight and ink carry the hierarchy. Short text (feature bodies, subs, captions, catalog lines) wraps balanced in Chinese, so it never ends on a two-character tail; longer text wraps with `text-wrap: pretty`. A Chinese lede wraps only between phrases (`word-break: keep-all`) in balanced lines (`a11y:check` holds it).
- Sizes come from tokens: `--title-hero`, `--title-display`, `--title-section`, `--title-show`, `--text-lede`, `--text-sub`, `--text-kicker`, `--text-card-title`, `--text-card-body`, `--text-list-body`, `--text-catalog-name`, and the floor `--text-small` (14px) / `--text-meta` (13px). The reading steps are 13 / 15 / 17 / 19–21; do not add sizes between them. Nothing outside a hero product mock is smaller than 13px; mocks keep at least 12px.
- Reading text (feature bodies, FAQ answers, data facts, catalog one-liners) and the lede are `--ink-2`, at least 7:1. `--muted` is for labels, dates, chips, captions and subs. Headings, names, and About body are `--ink`.
- `mono` is for release tags, commands, terminals, evidence labels, and data. The hero meta line is `sans` at 13px, tabular figures, with only its tag in mono.
- `npm run a11y:check` holds the floors on every page, theme, and viewport: reading text 7:1, no text under 13px outside hero mocks, and no Chinese heading that strands one character on its last line (Chinese headings have no spaces to break at, so keep them short enough to fit a phone line, about ten characters at section size).

## Color and Depth

| Role                | Token                                     | Meaning                                              |
| ------------------- | ----------------------------------------- | ---------------------------------------------------- |
| Canvas              | `--paper`                                 | Page background                                      |
| Raised              | `--paper-raised`                          | Home's featured cards, the closing band              |
| Ink / ink-2 / muted | `--ink` / `--ink-2` / `--muted`           | Headings; reading text (7:1); labels (AA)            |
| Faint               | `--faint`                                 | Decoration only, never text                          |
| Controls            | `--accent-fill` / `--on-accent`, `--link` | The filled primary action and its label; links (ink) |
| Focus               | `--accent`                                | Focus rings only: the one blue on the site           |
| Chrome              | `--glass`, `--glass-blur`, `--menu-bg`    | Header and local nav bars; near-opaque menu panels   |
| Wash                | `--wash-1..3`, `--hero-glow`              | Hero background only                                 |
| Product color       | `--product-tint` / `--product-ink`        | A product page's own pair, sampled from its icon     |
| Stage               | `--stage`, `--stage-pad`                  | The grey stage under screenshots in dark mode        |
| Icon plate          | `--plate-l/m/s`                           | Every rendered app icon                              |
| Reference / caution | `--data-ref` / `--data-caution`           | A baseline or recommended data point / an outlier    |

- One voice for every control: the primary action is filled with ink (`--accent-fill`; light on dark in dark mode, `--on-accent` on it at 4.5:1 or better), and links are ink, underlined inside running text (`--link-underline`) because colour alone no longer marks them. Blue (`--accent`) is kept for focus rings, where it has to stand apart from everything else.
- The product colour lives in the icon and in one faint glow behind it (`--hero-glow`, from `--tint-<slug>`). Buttons, kickers, the local nav, the closing band and the catalog stay neutral on every page. `--ink-<slug>` stays sampled for figures in product mocks. When an icon changes, re-sample its pair.
- Every product, games included, sits on the same paper with the same type.
- Utility sections (get started, data, what's new, FAQ) set their headings at `--title-show`; the section size is for the two or three sections that argue the case.
- Depth is a token decision: shadows, blur, and gradients in page stylesheets come only from `tokens.css`. `npm run check` enforces this. Two depths: `--shadow-shot` (a photograph resting on the page) and `--shadow-panel` (a panel above it).
- Translucency is for chrome. Content never floats. Menu panels use `--menu-bg`, because a translucent panel nested in a translucent bar cannot blur the page behind it.
- Dark mode is a first-class theme (OS preference or the header toggle), with a near-black canvas (`#0b0b0c`, not pure black, which haloes light text) and a `#18181a` raised tone. Captures, mostly light, are dimmed a little there (`--shot-dim`) and set on a grey stage (`--stage`): the hero object, Home's cards and showcases.

## Interaction

- The header dropdowns and mobile menu are `<details>` with outside-click and Escape close.
- The local nav highlights the section in view, scrolls to the exact offset on click, and closes its narrow-screen disclosure on outside click, Escape, or selection.
- Copy buttons appear only where the Clipboard API exists and read `Copied` / `已复制` for a moment after a write.
- Capsules press to `scale(0.98)`; Home's featured cards lift with `--shadow-card-hover`; the open catalog cells only underline their name.
- Product screenshots are buttons: a click opens the full image in a `<dialog>` over a blurred backdrop (`zoom.js`). Esc, Close, or any click closes it. On phones the image opens 960px wide and pans sideways.
- Showcase photographs below the fold rise into place once as they scroll in (`reveal.js`). Text never waits for an animation: it is there when you read. Anything already on screen at load never hides.
- On product pages the local nav slides in once the site header has scrolled away, and out when it returns.
- `prefers-reduced-motion` turns off smooth scroll, the lift, the reveal, the local nav's slide, and transitions.
- No script is inline; CSP stays `script-src 'self'; style-src 'self'`.

## Constraints (Measurable Floors)

- Accessibility
  - Text contrast: at least 4.5:1 for body and labels, and 3:1 for text 18px+ or non-text. `--on-accent` on `--accent-fill` passes in both themes.
  - Interactive targets are at least 44×44px. Compact capsules extend their hit area with a pseudo-element.
  - Every image has an `alt`; decorative images use `alt=""`.
- Performance
  - Every `<img>` declares intrinsic `width` and `height`. A screenshot's original is at least twice the width it is shown at, so it stays sharp on 2× screens (new captures; older ones are replaced as they are recaptured). Heroes use `fetchpriority="high"`; later photographs lazy-load.
  - Screenshots are WebP. Every screenshot gets `-900w.webp` and `-1200w.webp` siblings where narrower than the original (`npm run assets:images`), offered through `srcset`, so phones and tablets fetch a smaller file. Inter is not preloaded: Apple devices use the system font first and would download it for nothing. The display face is preloaded (Type). Zoom always opens the original.
  - CSS stays in external stylesheets so the strict CSP never blocks an inlined `<style>`.
  - A page loads only the CSS it renders: the shared sheet, its own page's, and on a product page the stylesheet of each live demo it plays. Home, About, releases, privacy and the hand-written pages stay at or under 40 KB of CSS, uncompressed. `npm run check:dist` enforces this and the cascade-layer order.
- Responsive
  - Breakpoints are 1000px (feature grids go to two columns), 900px (header nav → menu; local nav links → disclosure), and 640px (16px gutter; everything one column; the hero's two actions sit side by side, not stacked).
  - Chinese headings break at punctuation and spaces, never inside a word (`word-break: keep-all`).
  - For bilingual layouts, size shared cards for the longer language.

## Review Before Release

- The pipeline enforces most of this:
  - `check` (source): headline and lead lengths, the product page shape limits, English/Chinese structure parity, generic headings, Chinese copy rules, release entries, share images, token-only depth, zh optics.
  - `check:dist` (build output): CSP and headers, one h1, landmarks, image sizes and alt text, valid structured data, Chinese headings, sitemap.
  - `qa:pages`: overflow, headline and lede lines, CTAs, sticky local nav, anchors, mobile menu.
  - `a11y:check`: axe-core (WCAG 2.1 A/AA and best practices) on every page, light and dark, desktop and phone; any violation fails.
  - `visual:check`: seven screens compared loosely: the page tops, the zh menu, an FAQ, 404, the Releases page's undated list, and the zh privacy index on a phone. Section targets crop to their own section so release data synced at build never moves them.
  - Browser QA and the visual check run on pull requests and on every push to `main`; a push that fails them does not deploy.
- Still review by eye, in this order:
  1. First read: from the first viewport alone, does the reader know what the product changes?
  2. Language: did simplification keep every qualifier?
  3. Composition: one dominant object per section, and a grid whose geometry matches the argument.
  4. Rhythm: one owner per gap. Sections use padding-top only.
  5. Restraint: if a card, section, or line can go without losing meaning, remove it.
- Every product claim, figure, and command must be traceable to project documentation, a screenshot, a test result, or source code.

## Content release, September 2026

- Home groups are Storage, Agents, Everyday, and Games (Chessboard, Goban, World Machine). World Machine keeps its pre-alpha maturity visible on its own page.
- Storage Agent leads with the existing investigation result screenshot. The welcome image is a secondary starting-point illustration.
- Product copy starts with an action and result. Preserve conditions on model data, waiting signals, and successfully persisted sessions. Do not promise zero data loss from a recovery feature.
- Keep each metadata segment together when wrapping, including license names.
