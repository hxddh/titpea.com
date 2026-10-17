# Titpea Design Principles

Titpea is a personal product site. Each product page reads like a product launch page: one clear claim, the product itself shown large, then a short run of what it does. The home page is a directory built from the same pieces. The reference is the Omni page (hanxiao.io/omni): centered heroes, glass chrome, large photographs, feature cards, and a FAQ you can open.

## When Rules Compete

Protect them in this order:

1. Facts and CI floors: contrast, 44px targets, CSP, headline length and line count, external release tags.
2. The reader's job on that page: what the tool changes, how it runs, what remains.
3. The page shape below: centered hero → product object → sections → closing action.
4. Craft: type, spacing, depth, bilingual density.

When a principle and a constraint disagree, satisfy the constraint and rework the design.

## Page Shape

Every page builds from the same few parts below; build new content from them before inventing a new part. Product pages arrange them by kind (see Templates), so a CLI, an app, an extension and a game no longer share one layout.

- **Chrome.** A glass pill header (`.site-header-bar.glass`) holds the site mark and the wordmark Titpea, the four product lines as dropdowns, About, GitHub, language, and theme. On product pages the header scrolls away and the **local nav** pins instead: a glass pill with the product name, at most four section links (the first sections, then `Get started` and `FAQ`), and one filled primary action. On narrow screens the section links collapse behind a `Sections` / `目录` disclosure and the action hides only when that disclosure is present.
- **Hero.** Centered, over a soft color wash (`.wash`). Eyebrow, then `h1`, then a balanced lede, then actions, then a mono meta line. Product heroes put the product object below the copy, centered.
- **Product object.** Real screenshots sit in the wide frame (1040px) as photographs: rounded (`--radius-shot`), lifted (`--shadow-shot`). CSS mocks, terminals, and charts stay in the narrow frame (820px) so their type keeps product scale. They keep their own window contour (`--radius-window`). Where a working demo of the main job exists, it is the product object (World Clock's time scroll, Bilingual's peek): it behaves as the shipped product does, its caption says what it is and labels any sample text as sample, it shows from the first paint without moving the page, and without scripts a stand-in shows instead. An animated mock (Pulse's tray) stays labeled illustrative, loops only with a Pause / Play button, and stands still under reduced motion.
- **Section.** A centered section head (`h2` at `--title-section`, optional `.sub`), then one object: a feature grid, a showcase photograph, a flow, a panel, the data statement, or the FAQ. No kicker above section headings: the heading carries the section alone. A section's `label` / `kicker` is only its name in the local nav. On product pages a small label above text survives only as the hero eyebrow, the label on a captured object (`httpmon v1.2.1 · captured output`), and the release date over What's new.
- **Feature cards.** `--paper-raised` fill, `--radius-card`, no border, no shadow. The grid picks its columns from the item count: 1 is a narrow single column, 2 and 4 are two columns, anything else is three. A `primary` card spans the row. Numbered flows use an accent step badge. **A page carries at most six cards, feature cards and numbered steps together**; a card body adds to its title and never repeats it (`npm run check` enforces both). On phones every card grid is one column: two columns left about 16 characters a line.
- **Stats band.** A short sentence heading and 2–4 large figures, each with a few words of label. Only figures traceable to the product's README, docs, or tests; never derived or rounded into a bigger claim. Omit the band when the hero object already shows the numbers (s3-turbo-list's chart).
- **Showcase.** A compact head (`--title-show` heading, sub) above a full-width photograph. A showcase may carry a short muted recording (`video`) with the photograph as its poster; it plays only in view, never under reduced motion, and has a Pause / Play button. Screenshots and recordings come from the real app with real output: never a scripted model, staged answer text, or a mock presented as a capture. An image that is not a plain capture (a store image with sample translations) carries a `caption` that says so under it (`Illustration: …` / `示意图：…`). Recordings are made per language from the app's own UI (`scripts/record-board-demos.mjs` opens Goban's Review panel and steps Chessboard's review); the poster is the recording's first frame. Board captures are pinned to a release (`scripts/board-apps.mjs`) and refuse any other checkout, so a page never shows unreleased work.
- **Commands.** `Get started` / `开始使用`: the install and first-run commands, each with a Copy button, sitting just before the FAQ. Only commands that appear verbatim in the product's README; a desktop app whose install is a download gets no command block. A command may carry `capturedOutput`: the real output of that exact command at a named version, behind `Show real output` / `查看实际输出`, or with `replay` as a terminal that types the command and prints the captured lines once it scrolls into view (Play / Pause; the whole output at once under reduced motion). Never hand-written, and the replay never changes a character.
- **Where your data goes.** `Where your data goes.` / `数据的去向`: two or three plain sentences on hairlines at `--text-sub`, before the FAQ. Every sentence is checkable against the product's README or privacy policy: where keys live, where files and history stay, what is sent and to whom. Products that keep data local carry it (Storage Agent, PageWise, Easier Bookmarks); once it exists, those facts leave the feature cards and the FAQ.
- **FAQ.** A disclosure list (`details.faq-item`) on hairlines, first answer open. Only adoption blockers not already on the page.
- **Primary action.** One of three labels: `Download` / `下载` for an app, `Install` / `安装` for an extension or installer, `View on GitHub` / `查看 GitHub` for source-only tools. A product whose store listing is still in review sets `primaryCta.soon`: the label (`Coming to Chrome` / `即将上架`) renders as a muted, unlinked button in the hero, local nav and closing band, and the secondary action carries the page.
- **Install note.** A product may set `installNote` (both languages): one muted line under the hero actions with a trust detail its own FAQ or README states, such as a macOS build that is not notarized and the one step that opens it. Never a claim the docs do not make.
- **Release tag.** When the primary action downloads a GitHub release, the button carries the current tag (`Download v1.17.3`). The hero meta line then gives only the release date in the tag's place (`Sep 4, 2026` / `2026年9月4日`), since the button already names the tag; catalog cards show tag and date. Tags and publish dates come from `releases.json`, which CI refreshes before every build and checks daily, redeploying only when one changed; nobody edits a version or date by hand. Dates are absolute, never "3 days ago", because the site does not rebuild every day.
- **What's new.** When a release's notes yield a summary or highlights, the page shows `What’s new in v1.17.3.` / `v1.17.3 更新了什么` before the commands and FAQ: the release date, up to three items quoted from the notes (bold leads or first clauses, never rewritten), and a link to the full notes. Only lines in the page's language are quoted; with none left, the section is one line: `v12.0.0 · 2026年9月5日 · 发布说明 ›`. `scripts/sync-releases.mjs` refreshes them with the tag and lists every quoted line in the CI run summary for the owner to read. The release title is never shown: it is the author's shorthand, not a sentence for visitors. A product may set `releaseHighlights` (per language, pinned to one tag) to replace the quoted lines with hand-written ones, a one-line summary included; it applies only while that tag is the latest release.
- **Terminal objects.** A CLI hero that shows a terminal uses real captured output from a named version, said in its kicker (`httpmon v1.2.1 · captured output`); otherwise it is labeled illustrative.
- **Closing action.** Every product page ends on it: the app icon when there is one, the product name, and the hero's two actions again, under the same labels (the download keeps its release tag).
- **Where next.** After the closing action, one quiet row: `More in {line}` / `更多{line}工具` in small type, three products as icon and name (no cards, one-liners, or tags), taken from the rest of the product's line in site order after it, then from the other lines (the label becomes `More tools` / `更多工具`), and an `All tools` link. A product page never dead-ends, and its ending stays one band.
- **Footer.** On desktop (except 404, whose page already lists every product), a map of the site: one column per product line with every product, then a Titpea column (Home, About, Releases, Privacy, the releases feed, GitHub, the other language). Phones skip the map (the menu already lists every product). Then copyright on the left and email on the right.
- **Code in copy.** Product copy writes code as `` `code` ``; `Prose.astro` renders it as an inline code chip and structured data drops the backticks. `check:dist` fails if a raw backtick reaches page text.

## Templates

A product's `type` (`schema.ts`) picks one of four body compositions (`templateOf`). The chrome, tokens, data statement, FAQ content, closing action and where-next row stay shared. Where a template differs from the parts above, the template wins.

- **Tool** (`cli`, `pi`, `actions`: s3-turbo-list, httpmon, StorageOps, celagent, Agent Radar). A split hero: claim, lede, the first `Get started` command ready to copy, actions and meta on the left; the product object on the right. When a command carries a captured `replay`, that terminal takes the hero's right side and the product's own object (s3-turbo-list's chart) follows as the first section; the replay is not repeated in `Get started`. Two or more commands sit side by side as numbered steps. `cases` whose items all name a status (`Verified: AWS S3`) render as a table, one row per status. Hero `h1` steps down to about 60px.
- **App** (`desktop`, `mac`, `experiment`: Storage Agent, PageWise, Pulse, Readout, World Machine). The centered hero and the large real capture stay. The install note becomes an amber pill under the download. Showcases sit beside their text, alternating sides, as a session told in pictures.
- **Extension** (`extension`: World Clock, Douban, Easier Bookmarks, Bilingual). A split hero with the working demo or capture on the right, and under the actions a box with what the extension touches: the network level and where data stays, the same facts as `/privacy/` (`privacy` in the product file, never new claims). Features are a plain three-column list; the FAQ is two columns with every answer open. The page stays short.
- **Game** (`game`: Chessboard, Goban). Unchanged: serif display lines, warm paper, raised cards, centered heads.

On every template but game: feature cards drop the raised fill for a titled line under a hairline, section heads and their `.sub` sit left over left-aligned text, and narrow sections share the shell's left edge. The "at most six cards" ceiling still applies.

## Home

**Settled direction — the owner decided this in October 2026 (the studio home, replacing the stacked Omni rows of PR #150 and #153).** Home says who makes this and what the tools have in common, shows that they are alive, then lets a visitor find the right one. Propose a change to this direction in a pull request for the owner to decide; never push it straight to `main`.

- The hero keeps the shelf of app icons (two centred rows, at most eight wide, every product), each a link whose name appears in a small glass label when pointed at or focused. Then the person (`One developer, hxddh` / `hxddh，一个人开发`), the title (`Small software, made with care.` / `认真做的小软件`; a `|` in the copy marks where a title may wrap, so a phone never strands a character), and a plain lede that says what kinds of software are here (`Tools for object storage and coding agents, everyday browser extensions, and a few games.` / `对象存储和编码 Agent 工具，日常用的浏览器扩展，还有几款游戏。`). No riddles: each phrase names a kind of product a visitor would recognise. Two actions: `Browse all {count} tools` jumps to the catalog; `About hxddh ›` is the text link.
- `Just shipped` / `最近发布`: the three newest releases from `releases.json` (icon, name, tag, date, and one highlight in the page's language when the release has one), with `All releases ›` to the Releases page. Release cadence shows the tools are alive.
- `Selected work` / `主要作品`: three tall cards side by side, in `featured.order` (World Machine, Chessboard, Bilingual — the owner's picks). Each card is the screenshot (16:11, top-anchored), role kicker, name, one line, `Learn more ›`; the whole card is one link and its image is decorative (`alt=""`; the card's text names it). An image that is not a plain capture keeps its `featured.caption`, under the card's line so every title starts at the same height. Three is the ceiling. Phones stack the cards.
- `Every tool` / `全部工具`: a segmented filter (All, Storage, Agents, Everyday, Games; hidden without JavaScript, when every line shows; on phones one row that scrolls sideways), then each line with who it is for (`groupNotes`) and a grid of cards (icon, name, `catalog.text`; three columns, two on tablets, one on phones). Featured products appear in their line too, so a filtered line is complete. No kicker, tag, or date: those live on the product page.

## About

The page answers, in order: what Titpea is, where its tools help, what shipped lately, and how to reach the person behind it. Home lists the products; About groups them by the work they help with.

- Hero: `About Titpea` / `关于 Titpea`, the claim `One person. {count} tools.` / `一个人，{count} 个工具` with the live product count, and a lede that only names the four lines: `Storage, agents, everyday, games.` / `存储、Agent、日常、游戏。` Under it, one line computed from the data (how many tools have GitHub releases, the newest release date) and the GitHub profile. No actions in the hero.
- The person: `about.person` in `site.ts`, per language, holds a first-person paragraph and an optional portrait. The owner writes both; About renders the block only when it is filled, and it stays empty until then.
- `Where they help.` / `用在哪里`: one card per product line, two short sentences each (when you reach for it; what it changes), then that line's products as small icon links, taken from the catalog so a new product appears on its own. Every claim is one its product page already makes. No list of principles: a habit that only some products share is not claimed for all.
- `Latest releases.`, with no sub: the six newest, with icon, tag, date (on phones too), and the first quoted highlight in the page's language, or none; the rest fold under `All releases (n)`.
- Closing band: `Say hello.` with GitHub, Email, and the Atom feed.
- No personal details beyond what the owner has published; nothing about the person is inferred.

## Releases

- `/releases/` / `/zh/releases/`: `What shipped, and when.` / `最近发布了什么`, then every product's latest release, newest first: icon and name (to the product page), tag, date, `Release notes ›`, and, when the notes yield them, a `releaseHighlights` summary or up to three lines quoted from the notes, under a hairline. The rules of What's new apply: only lines in the page's language, never rewritten, never the release title; without notes an entry is one row. Then `Without GitHub releases.`: the Chrome extensions and source-only tools, each with the version its own meta line gives, if any, and no date. The menu (Main) and the footer link it, and so does the feed's `alternate` link.

## Privacy

- `/privacy/` / `/zh/privacy/`: `Which tools go online.` / `哪些工具会联网`, one table with a row per product: when it touches the network (`None` / `Only when you ask` / `Automatically`, with a short phrase), where its data stays, and links to its `Where your data goes` section and its own privacy policy. Each row comes from the product's `privacy` field, which only repeats what its data section or policy already says; a product without a data section reads `Not written up on its page yet.` Phones read each row as a block. The footer links it.

## Releases Feed

- `sitemap.xml` gives each product page a `lastmod` of its latest release date, and Home, About and Releases the newest release anywhere; pages without such a date carry none (never the build date).
- `/releases.xml` is an Atom feed of every product's latest release, newest first, built from `releases.json`. Every page links it in `<head>`; About links it under `Latest releases.`

## 404

- Home, the Chinese home, and a two-column directory of every product with its icon.

## App Icons

- Every product has an icon, and every list of products shows them (the home shelf, catalog cards, About, the release list, 404, share images). `npm run check` fails without one.
- Official artwork is used where it exists, clipped to the site tile (radius 22.5%). Otherwise the icon is site-designed from `design/icons/<slug>.svg`: a 1024 tile with a top sheen and one image that says what the product does — a card-catalog drawer for s3-turbo-list, a stethoscope for StorageOps, a radar dish for Agent Radar. Each has its own colour so no two read alike, the mark survives 28 px, and no third-party logo appears.
- `npm run assets:icons` renders `public/assets/icons/<slug>.webp`. `design/icons/README.md` records which icons are official and which are site-designed.

- **Site mark.** A stack of three app tiles in the accent gradient, offset up and to the right, the back two translucent: a set of tools, not one product. Source `design/brand/titpea-mark.svg`; `npm run assets:favicon` writes `favicon.svg`, a 16/32/48 `favicon.ico`, and a 180px `apple-touch-icon.png` on the page colour. It sits at 22px before the wordmark in the header and nowhere else on the page.

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
- Earn every section. Short products may be hero, one showcase, and one card grid. A panel section needs a real object, not copy restating the hero.
- One source of truth per fact. The section after the hero does not inventory the lead, and FAQ asks the extra fact, not the platforms line already in the meta.
- Label schematic interface examples explicitly; they are not captured execution evidence.
- Numbers mean order. A flow is numbered only when its steps happen in that order (set up, then save, then resume); parallel items (four files a runner keeps) set `ordered: false` and lose the step badges.
- Not on product pages: pricing, blog posts, testimonials, newsletter forms, comparison tables against other products, or tracking beyond the cookieless analytics already disclosed.

## Voice

- **No 依据 framing (owner rule, October 2026).** Site and product copy never sells the work as "evidence", "依据" or "shows its work"; that framing is too narrow. Say what the product does. A feature that is literally called evidence in the product (PageWise exporting evidence highlights) keeps its name. `依据` is in `zhForbiddenTerms`.

Omni says each thing once, in as few words as the fact allows. The figures and the photographs carry the claim; the words label them.

- **Lead**: 2–3 fragments, each ending in a period ("Lessons. 40,000 puzzles. Stockfish or a friend."). Chinese uses 2–3 短句 with 。.
- **Section headings** are one declarative sentence ("Every city moves together."). English ends with a period; Chinese has no closing punctuation. On pages with a local nav, each section also sets a 1–4 word `nav` label.
- **Cards**: a 2–4 word title and a 3–12 word fragment. One idea per card. At most six per page: the main grid holds 3 or 6 equal-weight cards, and a numbered flow is kept only when order matters (a grid plus a flow share the six).
- **Showcases**: a short sentence over the photograph ("Scans become Markdown.").
- **FAQ**: headed `FAQ` / `常见问题`. Questions are questions. Answers are full sentences and carry the conditions that do not fit a card.
- Shortening never drops a qualifier: support that depends on the agent, pre-alpha status, "after a successful write", "only when the match is reliable", data posture. A condition that does not fit a card moves to the FAQ.
- No new claims in the name of brevity: no "fast", "only", "seamless", or numbers that are not in the product's docs.

## Type

- System face first (`-apple-system`, SF Pro), then Inter for Latin elsewhere, then the system CJK face. Do not load a CJK webfont.
- Display weight is 700 with tight tracking (`-0.035em` on the hero, `-0.03em` on section heads). Chinese (`:lang(zh)`) uses `-0.005em` on headings and no tracking at all on reading text, which is 16px (`--text-card-body` steps up) at line-height `1.75` and wraps with `text-wrap: pretty` so no character is stranded on a last line. A Chinese lede wraps only between phrases (`word-break: keep-all`) in balanced lines, so it never leaves one word alone either (`a11y:check` holds it). At the same pixel size CJK reads smaller than Latin.
- Sizes come from tokens: `--title-hero`, `--title-display`, `--title-section`, `--title-show`, `--text-lede`, `--text-sub`, `--text-kicker`, `--text-card-title`, `--text-card-body`, `--text-list-body`, `--text-catalog-name`, and the floor `--text-small` (14px) / `--text-meta` (13px). Nothing outside a hero product mock is smaller than 13px; mocks keep at least 12px. Reading text is at least 15px on phones too; FAQ answers are `--text-list-body` (16px).
- Reading text (card bodies, FAQ answers, catalog one-liners, panel copy) is `--ink-2`, at least 7:1. `--muted` is for labels, dates, chips, captions, the lede and subs. Headings, names, and About body are `--ink`.
- `mono` is for release tags, commands, terminals, evidence labels, and data. The hero meta line is `sans` at 14px with only its tag in mono.
- `npm run a11y:check` holds the floors on every page, theme, and viewport: reading text 7:1, no text under 13px outside hero mocks, and no Chinese heading that strands one character on its last line (Chinese headings have no spaces to break at, so keep them short enough to fit a phone line, about ten characters at section size).

## Color and Depth

| Role                | Token                                  | Meaning                                            |
| ------------------- | -------------------------------------- | -------------------------------------------------- |
| Canvas              | `--paper`                              | Page background                                    |
| Raised              | `--paper-raised`                       | Feature cards, catalog cards, panels               |
| Ink / ink-2 / muted | `--ink` / `--ink-2` / `--muted`        | Headings; reading text (7:1); labels (AA)          |
| Faint               | `--faint`                              | Decoration only, never text                        |
| Accent              | `--accent-fill`, `--link`, `--accent`  | The filled primary action, links, and focus rings  |
| Glass               | `--glass`, `--glass-blur`, `--menu-bg` | Header and local nav bars; near-opaque menu panels |
| Wash                | `--wash-1..3`                          | Hero background only                               |
| Product color       | `--product-tint` / `--product-ink`     | A product page's own pair, sampled from its icon   |
| Reference / caution | `--data-ref` / `--data-caution`        | A baseline or recommended data point / an outlier  |

- One interactive accent: buttons, links and focus rings are the site blue everywhere. Each product page also wears its own color pair (`--tint-<slug>` / `--ink-<slug>` in `tokens.css`, sampled from the icon, mapped through `body[data-product]`): the hero wash leans to the tint, and the hero kicker, section kickers, stat figures and step badges take the ink (at least 4.8:1 on both paper tones); the closing band sits on a faint tint (`--product-band`). Home, About and the catalog stay neutral. When an icon changes, re-sample its pair.
- Games (`body[data-line="games"]`) sit on warmer paper and set display lines (hero, section and stats headings, the closing name) in a book face (`--display`, system serif), so a game does not read like a CLI.
- Utility sections (get started, data, what's new, FAQ) set their headings at `--title-show`; the section size is for the two or three sections that argue the case.
- Depth is a token decision: shadows, blur, and gradients in page stylesheets come only from `tokens.css`. `npm run check` enforces this.
- Glass is for chrome. Content never floats. Menu panels use `--menu-bg`, because a glass panel nested in a glass bar cannot blur the page behind it.
- Dark mode is a first-class theme (OS preference or the header toggle), with pure black canvas and a `#161617` raised tone. Captures, mostly light, are dimmed a little there (`--shot-dim`): the hero object, Home's cards and showcases.

## Interaction

- The header dropdowns and mobile menu are `<details>` with outside-click and Escape close.
- The local nav highlights the section in view, scrolls to the exact offset on click, and closes its narrow-screen disclosure on outside click, Escape, or selection.
- Copy buttons appear only where the Clipboard API exists and read `Copied` / `已复制` for a moment after a write.
- Capsules press to `scale(0.98)`; catalog cards lift 4px with `--shadow-card-hover` and their arrow nudges right; hero icons rise on hover.
- Product screenshots are buttons: a click opens the full image in a `<dialog>` over a blurred backdrop (`zoom.js`). Esc, Close, or any click closes it. On phones the image opens 960px wide and pans sideways.
- Cards, showcase photographs, and stats below the fold rise into place once as they scroll in, a beat apart within a row (`reveal.js`). Anything already on screen at load never hides.
- `prefers-reduced-motion` turns off smooth scroll, the lift, the reveal, and transitions.
- No script is inline; CSP stays `script-src 'self'; style-src 'self'`.

## Constraints (Measurable Floors)

- Accessibility
  - Text contrast: at least 4.5:1 for body and labels, and 3:1 for text 18px+ or non-text. White on `--accent-fill` passes in both themes.
  - Interactive targets are at least 44×44px. Compact capsules extend their hit area with a pseudo-element.
  - Every image has an `alt`; decorative images use `alt=""`.
- Performance
  - Every `<img>` declares intrinsic `width` and `height`. Heroes use `fetchpriority="high"`; later photographs lazy-load.
  - Screenshots are WebP. Every screenshot gets `-900w.webp` and `-1200w.webp` siblings where narrower than the original (`npm run assets:images`), offered through `srcset`, so phones and tablets fetch a smaller file. Inter is not preloaded: Apple devices use the system font first and would download it for nothing. Zoom always opens the original.
  - CSS stays in external stylesheets so the strict CSP never blocks an inlined `<style>`.
- Responsive
  - Breakpoints are 1000px (feature grids go to two columns), 900px (header nav → menu; local nav links → disclosure), and 640px (16px gutter; everything one column).
  - Chinese headings break at punctuation and spaces, never inside a word (`word-break: keep-all`).
  - For bilingual layouts, size shared cards for the longer language.

## Review Before Release

- The pipeline enforces most of this:
  - `check` (source): headline and lead lengths, English/Chinese structure parity, generic headings, Chinese copy rules, release entries, share images, token-only depth, zh optics.
  - `check:dist` (build output): CSP and headers, one h1, landmarks, image sizes and alt text, valid structured data, Chinese headings, sitemap.
  - `qa:pages`: overflow, headline and lede lines, CTAs, sticky local nav, anchors, mobile menu.
  - `a11y:check`: axe-core (WCAG 2.1 A/AA and best practices) on every page, light and dark, desktop and phone; any violation fails.
  - `visual:check`: nine screens compared loosely: the page tops, the zh menu, an FAQ, About's scenes (desktop and zh phone), 404, the Releases page's undated list, and the zh privacy index on a phone. Section targets crop to their own section so release data synced at build never moves them.
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
