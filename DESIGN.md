# Titpea Design Principles

Titpea is a personal product site, and it reads as a quiet, exact catalogue of tools. Each product page is a spec sheet with pictures: one clear claim, its facts, the product itself shown large, then a short run of what it does. The home page is the index. Order comes from type and space, not from boxes: every page hangs from one left edge, each section opens on its heading, and lists sit on hairlines. One neutral canvas, one ink voice for every control, and the only colour is the product's own, as a tint in the paper under its capture. English is set in the sans throughout, the title heavy and tight; Chinese titles keep their serif. Mono is only for what is typed.

**Design v4 (November 2026, approved by the owner in PR #238).** The owner found v3 "rough, disordered, not modern" next to v2. v4 keeps v3's content model and reading floors and changes its surface: the margin column leaves the product pages and Home (it stood empty beside most sections); white panels, nested cards and three-coloured picks give way to hairlines and one raised paper; the spec sheet becomes a strip under the actions; headings are labels without a closing period; provenance is said once a page; the type keeps six steps (13 / 15 / 17 / 21 / 32 / 64) and three radii (media 12, stage 20, pill). The two columns stay where a row pairs a label with its content: About, Releases, Privacy.

**Design v3 (November 2026, PR #236)** replaced the centered launch page of v2 with a left-aligned page in two columns; v4 keeps its left alignment and content model. What v2 settled about reading stays: no inherited tracking, 17px reading text, a 65ch / 34em measure, a hairline header, a near-black dark canvas. The sections below describe v4.

## When Rules Compete

Protect them in this order:

1. Facts and CI floors: contrast, 44px targets, CSP, headline length and line count, external release tags.
2. The reader's job on that page: what the tool changes, how it runs, what remains.
3. The page shape below: the title → the lede and actions → the facts → the product object → sections, each under its heading → the closing action.
4. Craft: type, spacing, depth, bilingual density.

When a principle and a constraint disagree, satisfy the constraint and rework the design.

## Page Shape

Every page builds from the same few parts below; build new content from them before inventing a new part.

- **Chrome.** A full-width bar under a hairline (`.site-header`, a translucent paper surface) holds the site mark and the wordmark Titpea, the four product lines as dropdowns, About, GitHub, language, and a theme glyph (a half-filled disc; its name is its `aria-label`). Each product line's dropdown lists its products with icon, name and catalog line, so a menu says what each tool is. On product pages the header scrolls away and the **local nav** takes over: the same full-width bar with the product name, at most four section links (the first sections, then `Get started` and `FAQ`), and one filled primary action. It takes no room in the flow and, with scripts, appears only once the site header has scrolled out of view (`data-pinned`), so two bars never stack. On narrow screens the section links collapse behind a `Sections` / `目录` disclosure and the action hides only when that disclosure is present.
- **One edge, two widths.** Every page hangs from the shell's left edge (1120px). A section opens on its head (`.section-head`: the `h2.heading` and, for a showcase, demo or Get started, its one line `.sub`), 36px above its content. Content takes one of two widths: the whole shell (a wide capture, the feature list, Home's picks and index) or the text width `--narrow` (760px, `.section-body`: lists, answers, commands, a narrower capture), so every right edge on the page lines up with one of two lines. Sections are parted by space (96px); hairlines (`--line`) open and part the rows of a list. A list is never a box: `.panel` is a rule above and below, with no surface or shadow.
- **Two columns.** `.cols` (twelve tracks; `.cols-margin` four, `.cols-main` eight) stays only where each row pairs a label with its content: About, Releases and Privacy. Product pages and Home do not use it.
- **Hero.** Left-aligned, one column at the text width: one line of identity (the icon at 40px, the name, the eyebrow), the `h1` (`.display`), the lede in ink, a tool's first command, the actions and the install note; then the spec sheet across the shell; then the product object, which starts within the first screen on desktop.
- **Spec sheet.** `dl.specs`, a strip under a hairline across the shell, at 14px in the reading face with tabular figures: first the product's meta line without a label (its version and licence segments excepted); then, each as a 13px muted label over its value, `License`, `Version` and `Released` (from `releases.json`, else the version the meta line gives), `Network` (the product's `privacy.network` level) and `Source` (its repository). On phones the meta line takes its own row. Nothing in it is hand-written beyond the meta line itself.
- **Product object.** A real screenshot lies on a block of the page's paper tinted with the product's own colour (`.stage`: `--paper-mix` of `--tint-<slug>` in `--paper`, 20% in light and 26% in dark, a 16px corner, and a hairline of the colour at its edge), rounded and resting on it (`--shadow-shot`). Under it, one line: the caption, then the release it was captured at (`Captured at v15.0.0` / `截自 v15.0.0`, from `asOf`). Provenance is said once a page: a showcase repeats it only when its release differs from the hero's. Figures are not numbered. Captures are never dimmed. A tall capture stays near its real width (380px) on the block. CSS mocks, terminals, charts and working demos are not photographs: they lie on the raised paper (`.stage[data-plain]`) at product scale (820px), with their own window contour (`--radius-window`). Where a working demo of the main job exists, it is the product object (World Clock's time scroll, Bilingual's peek): it behaves as the shipped product does, its caption says what it is and labels any sample text as sample, it shows from the first paint without moving the page, and without scripts a stand-in shows instead. An animated mock (Pulse's tray) stays labeled illustrative, loops only with a Pause / Play button, and stands still under reduced motion.
- **Section.** The heading (`h2.heading`, the sans at weight 600, `--text-heading`, 26–32px) and, for a showcase or demo, its one line (`.sub`) open the section; the section's one object sits under them: the feature list, a showcase photograph or live demo, the commands, the data statement, or the FAQ. No kicker above section headings. A section's `label` / `kicker` is only its name in the local nav. A small label above text survives only as a fact (`.fact`: 13px, muted, tabular figures): the hero identity line, the label on a captured object (`httpmon v1.2.1 · captured output`), a figure's label, and the release date under What's new.
- **Feature list.** Titled items three across the shell (`.feature-grid`; two or four items as pairs at the text width, two across on tablets, one on phones), each under a hairline: the title at weight 600 over its body, both at reading size (17px); weight and ink carry the hierarchy. No fill, no box, no shadow. **A page carries one feature list of at most six items**; a body adds to its title and never repeats it (`npm run check` enforces both). On phones the list is one column.
- **Showcase.** The heading and one sentence above the picture. A wide window capture or recording (3:2 or wider) is read, not glanced at: it takes the whole shell; a narrower one takes the text width. A phone capture (taller than wide) stays at phone size (280px). A showcase may set `focus` (`top-left` … `bottom-right`): it then shows a detail of the capture at its own pixel size, anchored there, so the app's text is readable, with a `Whole window ›` link to the capture; only for captures taken at 1x, and phones show the whole capture. A showcase names the release it was captured at only when that differs from the hero's. A showcase may carry `dark`, the same screen captured in dark appearance, which replaces the light picture when the page is dark (system or the toggle); the hidden one is lazy and never fetched. A light capture on a dark page sits on a grey stage (`--stage`). A caption says what the reader cannot see (sample data, a scripted model); provenance shared by every picture on a page is said once, under the hero. A showcase may carry a short muted recording (`video`) with the photograph as its poster; it plays only in view, never under reduced motion, and has a Pause / Play button. Screenshots and recordings come from the real app with real output: never a scripted model, staged answer text, or a mock presented as a capture. An image that is not a plain capture (a store image with sample translations) carries a `caption` that says so under it (`Illustration: …` / `示意图：…`). Recordings are made per language from the app's own UI (`scripts/record-board-demos.mjs` opens Goban's Review panel and steps Chessboard's review); the poster is the recording's first frame. Board captures are pinned to a release (`scripts/board-apps.mjs`) and refuse any other checkout, so a page never shows unreleased work.
- **Commands.** `Get started` / `开始使用`: at most one command block (a tool's hero already shows its first command), with a Copy button, after the feature list and before the data section. Only commands that appear verbatim in the product's README; a desktop app whose install is a download gets no command block. A command may carry `capturedOutput`: the real output of that exact command at a named version, behind `Show real output` / `查看实际输出`, or with `replay` as a terminal that types the command and prints the captured lines once it scrolls into view (Play / Pause; the whole output at once under reduced motion). Never hand-written, and the replay never changes a character.
- **Where your data goes.** `Where your data goes` / `数据的去向`: two to four plain sentences on hairlines, at reading size and ink, before the FAQ. Every sentence is checkable against the product's README or privacy policy: where keys live, where files and history stay, what is sent and to whom. Products that keep data local carry it (Storage Agent, PageWise, Easier Bookmarks); once it exists, those facts leave the feature list and the FAQ.
- **FAQ.** A disclosure list on hairlines at the text width (`details.faq-item`), first answer open; phones fold all but the first. Only adoption blockers not already on the page.
- **Primary action.** One of three labels: `Download` / `下载` for an app, `Install` / `安装` for an extension or installer, `View on GitHub` / `查看 GitHub` for source-only tools. A filled ink pill; the second action is an outlined pill beside it. A product whose store listing is still in review sets `primaryCta.soon`: the label (`Coming to Chrome` / `即将上架`) renders as a muted, unlinked button in the hero, local nav and closing, and the secondary action carries the page.
- **Install note.** A product may set `installNote` (both languages): one muted line under the hero actions, never a caution colour with a trust detail its own FAQ or README states, such as a macOS build that is not notarized and the one step that opens it. Never a claim the docs do not make.
- **Release tag.** When the primary action downloads a GitHub release, the button carries the current tag, lighter than its label (`Download v1.17.3`). The spec sheet gives the tag and its date (`Sep 4, 2026` / `2026年9月4日`); Releases lists every tag and date. Tags and publish dates come from `releases.json`, which CI refreshes before every build and checks daily, redeploying only when one changed; nobody edits a version or date by hand. Dates are absolute, never "3 days ago", because the site does not rebuild every day.
- **What's new.** When a release's notes yield a summary or highlights, the page shows `What's new in v1.17.3` / `v1.17.3 更新了什么` before the commands and FAQ: the heading and the release date as its head; under them up to three items quoted from the notes (bold leads or first clauses, never rewritten) and a link to the full notes. Only lines in the page's language are quoted; with none left, the section is one line: the tag, then `2026年9月5日 · 发布说明 ›`. `scripts/sync-releases.mjs` refreshes them with the tag and lists every quoted line in the CI run summary for the owner to read. The release title is never shown: it is the author's shorthand, not a sentence for visitors. A product may set `releaseHighlights` (per language, pinned to one tag) to replace the quoted lines with hand-written ones, a one-line summary included; it applies only while that tag is the latest release.
- **Terminal objects.** A CLI hero that shows a terminal uses real captured output from a named version, said in its kicker (`httpmon v1.2.1 · captured output`); otherwise it is labeled illustrative.
- **Closing action.** Every product page ends on it: the product name in the display face and the hero's two actions again, under the same labels (the download keeps its release tag). No box and no icon.
- **Where next.** Under the closing, on a hairline across the shell: `More in {line}` / `更多{line}工具` (games: `更多游戏`, since games are not tools) as a small label, then three products side by side as icon and name, taken from the rest of the product's line in site order after it, then from the other lines (the label becomes `More tools` / `更多工具`), and an `All tools` link to Home's index. A product page never dead-ends.
- **Family.** A product in a family shows the family in place of that list: each member as icon, name and its step, itself marked (`aria-current`, not a link), and the `All tools` link under it, so its page ends on where it sits among the tools it works with.
- **Footer.** On desktop (except 404, whose page already lists every product), a map of the site: one column per product line with every product, then a Titpea column (Home, About, Releases, Privacy, the releases feed, GitHub, the other language). Phones skip the map (the menu already lists every product). Then copyright on the left and email on the right.
- **Code in copy.** Product copy writes code as `` `code` ``; `Prose.astro` renders it as an inline code chip and structured data drops the backticks. `check:dist` fails if a raw backtick reaches page text.

## One Skeleton

Every kind of product (`type` in `schema.ts`: tools, apps, extensions, games) uses the same page: the hero with the product object under it, then the sections in the order under Product Pages. `templateOf` picks only what the hero carries:

- **Tool** (`cli`, `pi`, `actions`): the first `Get started` command sits under the lede, ready to copy. When a command carries a captured `replay`, that terminal is the hero's object and the product's own object (s3-turbo-list's chart) follows on its own block as the section that shows the product working; the replay is not repeated in `Get started`, and `Get started` starts from the second command, since the hero already shows the first (a first command whose output the hero does not play stays). With only one command, `Get started` keeps its title and explanatory line and no command block.
- **App, extension, game**: the hero object is the capture or the working demo. An extension's network level and data facts are its `Where your data goes` section, like every other product, not a box in the hero.

On phones: the lede comes before the spec sheet; the feature list is one column; a detail showcase shows its whole capture; the Copy button sits under its command, never over it; and the FAQ keeps the first answer open and folds the rest (`faq.js`; without it every answer stays open).

## Home

**Settled direction — the owner approved the index home in November 2026 (PR #236), replacing the studio home of October 2026.** Home says who makes this, shows three picks, then lists everything: title → picks → the index → footer, and nothing else. Propose a change to this direction in a pull request for the owner to decide; never push it straight to `main`.

- The title (`Small software, made with care.` / `认真做的小软件`; a `|` in the copy marks where it breaks into lines), then a plain lede, then one quiet line: the person as a fact (`One developer, hxddh` / `hxddh，一个人开发`) and the link `About hxddh →` / `关于 hxddh →`. The lede is that names the four kinds of software (`Object storage, coding agents, Chrome extensions, games.` / `对象存储、编码 Agent、Chrome 扩展、游戏。`). No buttons: the index is on the same page.
- `Selected work` / `主要作品`, across the whole width: the picks (`featured.order`: sonde, Chessboard, Readout — the owner's; three is the ceiling), three of equal weight side by side. Each is one link with no card around it: its whole window, centred in a 3:2 frame of the raised paper (`.pick-stage`, the same for all three, so three products never fight in three colours; the window rests on `--drop-shot` and rises 3px on hover; the image is decorative, `alt=""`), then the name, its catalog line, and as a fact its role and latest tag (`data-visual-live`). An image that is not a plain capture keeps its `featured.caption`. Two across on tablets (the first full width), one on phones.
- Then the index, named `Every tool` / `全部工具` for assistive tech: every product, the picks included, grouped by line in the header menu's order and names (`Storage`, `Agents`, `Everyday`, `Games` / `存储`, `Agent`, `日常`, `游戏`), in site order within a line. Each group opens on a hairline with its name (21px) and count on one line; its products follow three across (two on tablets, one on phones), each one link: the icon at 40px in its plate beside the name over `catalog.text`, tinted on hover. No pictures, chips, filters, families, versions or dates: Releases lists those.

## About

The claim, then the owner's own words beside how to reach them, then the tools themselves as a shelf of icons. Home lists the products; Releases lists what shipped.

- The claim `One person. {count} tools.` / `一个人，{count} 个工具` with the live product count. No lede and no actions.
- Under it, the person: `about.person` in `site.ts`, per language, holds the owner's own words as a few short first-person paragraphs (who makes the tools and what they are; what the owner likes, in their words: reading, good food, digital gadgets, making interesting things; where the code and releases are) and an optional portrait. Only what the owner has said goes here; About renders it only when it is filled. The paragraphs read in the main column at about 34em; the margin holds the portrait, `About Titpea` / `关于 Titpea` as a fact, and the text links `GitHub` and `Email`.
- Then `Every tool` / `全部工具` in the margin and every tool as its icon and name in site order, a link to its page (`about-tools`): the shelf the paragraphs talk about. Then the analytics disclosure line (see Analytics). No closing.
- No personal details beyond what the owner has published; nothing about the person is inferred.

## Releases

- `/releases/` / `/zh/releases/`: `What shipped, and when.` / `最近发布了什么`, the feed link in the margin and the lede in the main column; then, in the main column, every product's latest release, newest first: icon and name (to the product page), tag, date, `Release notes ›`, and, when the notes yield them, a `releaseHighlights` summary or up to three lines quoted from the notes, under a hairline. The rules of What's new apply: only lines in the page's language, never rewritten, never the release title; without notes an entry is one row. Under each entry, one muted line, `Earlier` / `更早`, lists up to four earlier releases by tag and date (two on phones), from the `history` that `releases:sync` keeps; the titles it stores are never shown. Then `Without GitHub releases.` (its heading and line in the margin): the Chrome extensions and source-only tools, each with the version its own meta line gives, if any, and no date. The menu (Main) and the footer link it, and so does the feed's `alternate` link.

## Privacy

- `/privacy/` / `/zh/privacy/`: `Which tools go online.` / `哪些工具会联网`, the analytics disclosure in the margin and the lede in the main column; then one table across the whole width with a row per product: when it touches the network (`None` / `Only when you ask` / `Automatically`, with a short phrase), where its data stays, and links to its `Where your data goes` section and its own privacy policy. Each row comes from the product's `privacy` field, which only repeats what its data section or policy already says; a product without a data section reads `Not written up on its page yet.` Phones read each row as a block. The footer links it.

## Releases Feed

- `sitemap.xml` gives each product page a `lastmod` of its latest release date, and Home, About and Releases the newest release anywhere; pages without such a date carry none (never the build date).
- `/releases.xml` is an Atom feed of every product's latest release, newest first, built from `releases.json`. Every page links it in `<head>`, and the footer and the Releases page link it.

## 404

- Left-aligned like every page: Home, the Chinese home as a text link, and a two-column directory of every product with its icon, each on a hairline.

## App Icons

- Every product has an icon, and every list of products shows them (Home's catalog, families, the release lists, 404, share images). `npm run check` fails without one.
- Every rendered icon gets the same plate: a hairline edge and one soft drop shadow (`--plate-l/m/s` by icon size, light and dark), with no ring of its own, so the artwork meets the page directly (the owner dropped the white ring in October 2026). Official artwork and site-drawn tiles still read as one family, and dark tiles keep their edge on the dark canvas. The plate replaces per-list drop shadows.
- Official artwork is used where it exists, clipped to the site tile (radius 22.5%). Otherwise the icon is site-designed from `design/icons/<slug>.svg`: a 1024 tile with a top sheen and one image that says what the product does — a card-catalog drawer for s3-turbo-list, a stethoscope for StorageOps, a radar dish for Agent Radar. Each has its own colour so no two read alike, the mark survives 28 px, and no third-party logo appears.
- `npm run assets:icons` renders `public/assets/icons/<slug>.webp`. `design/icons/README.md` records which icons are official and which are site-designed.

- **Site mark.** A stack of three app tiles in the accent gradient, offset up and to the right, the back two translucent: a set of tools, not one product. The owner had it restored in November 2026 after a pea-pod mark shipped with v3; do not replace it. Source `design/brand/titpea-mark.svg`; `npm run assets:favicon` writes `favicon.svg`, a 16/32/48 `favicon.ico`, and a 180px `apple-touch-icon.png` on the page colour. It sits at 22px before the wordmark (`Titpea` in the sans) in the header and nowhere else on the page.

## Analytics

- Cloudflare Web Analytics, cookieless. The zone's "automatic setup" site injects the beacon at the edge (`site.analyticsAutoInjected`), so pages carry no token; the CSP allows only that script (`static.cloudflareinsights.com`) and its endpoint (`cloudflareinsights.com`). Before the CSP allowed them, the injected beacon was blocked and the dashboard read 0.
- `site.analyticsToken` is only for the JS-snippet method with automatic setup turned off; never both, or every view counts twice.
- Whenever either is on, About shows the one-line disclosure.

## Share Images

- `npm run assets:og` renders every 1200×630 card from the page copy. A product with a screenshot gets the split card (icon, name, headline, catalog line on the left, the screenshot bleeding off the right edge); other products get the centered card with their icon; Home shows the icon row.

## Product Pages

- `h1` is the claim (`copy.headline`), not the product name: a short declarative sentence. English ≤ 24 characters plus a closing period; Chinese ≤ 18 characters, no closing punctuation. It stacks into two lines at most at every breakpoint. Shorten copy before shrinking type.
- The identity line over the claim is the icon, the name and the eyebrow. The local nav shows the icon and the name.
- Hero actions: one filled `.button.primary.large` and one `.textlink`. Keep 2–3.
- **Page shape.** Every product page, in both languages, is one claim, its facts, the product shown large and more than once, a short run of what it does, then what a reader needs to adopt it. The clutter v2 cut stays cut (stat rows, asides, numbered steps, status tables, card grids that repeat each other), never pictures of the product. In order:
  1. Hero: identity line, claim, the lede and actions, the spec sheet as a strip, the product object.
  2. Up to three sections that show the product: real screenshots, captures or recordings (`showcases`) and at most one live demo (Chessboard's puzzle), each a short heading and one sentence above the picture. A feature an image shows is said in that image's line, not again in the list. Tools without screenshots keep their captured terminal or chart objects (s3-turbo-list's benchmark follows its replay hero); no image is invented for them.
  3. One feature list, `features`: what the pictures do not already say, at most six plain items (fewer is better), short title and fragment. Steps, cases, panels and stat rows are not separate sections; their strongest items join this list, or leave the page.
  4. What's new, when the release notes yield it.
  5. Get started, for tools that need a command: at most one command block.
  6. Where your data goes: at most three sentences.
  7. FAQ: at most five questions, the adoption blockers the page does not already answer.
  8. The closing (the name and the action once more, with the family or the where-next list in its margin).
- `npm run check` enforces the limits: one feature list of at most six items, at most three showcase and demo sections (at most one demo), at most one command block under Get started, at most five FAQ questions, two to four data sentences. A desktop page runs about 4,200–5,500px at 1440 wide when pictures take the space; the text sections stay short.
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
- Display face: in English the page title (`.display`) and the product name in the closing are the sans (`--display-face: var(--sans)`) at weight 650, tracked `-0.038em`, `--title-display` (40–64px); the wordmark is the sans at 650, tracked `-0.025em`. Design v4 dropped Fraunces from English pages: the soft serif beside a neutral sans read as a template. Chinese pages set the title and the closing name in Noto Serif SC SemiBold (`NotoSerifSC-OFL.txt`), with Fraunces for their Latin letters (`"Fraunces Latin"`, which leaves General Punctuation to the Chinese face so “ ” … — stay full width). The Chinese face is cut to the characters the built Chinese `h1` and `h2` lines use (`npm run build` recuts it after building and builds again when the set changed; `check:dist` fails when one uses a character the subset lacks), weight 600 only, no synthesised bold, no negative tracking. The Chinese display face is preloaded on Chinese pages (`SiteLayout.astro` reads its URL from `fonts.css`), so the title never reflows; English pages preload nothing. No italic file ships. Section headings are the sans at weight 600, tracked `-0.024em` in English, and are labels: an English heading's closing period is dropped where it is set (`headingText`, `src/lib/heading.ts`), while the copy keeps it.
- The faces have their jobs: the title names the page; the sans is read (ledes, bodies, answers, names in lists) and also states facts (versions, dates, licences, counts, figure labels) at 13–14px in muted ink with tabular figures; mono is only for what is typed: commands, code, terminals. A feature title or an FAQ question is reading text in the sans at weight 600, not a heading in the serif. Mono is not used for facts: on a Chinese page its CJK fallback breaks the line's rhythm.
- Tracking belongs to roles, never to `body`: a length in `em` set on `body` is inherited as a fixed pixel value and crushes every smaller size. Reading text has none. Chinese (`:lang(zh)`) has no tracking anywhere, headings included: Latin tracking squeezes square glyphs.
- Reading text is 17px in both languages (`--text-card-title`, `--text-card-body`, `--text-list-body`) at line-height 1.55–1.6 (Chinese 1.75), held to the reading measure `--measure`: 65ch in English, 34em in Chinese. Feature titles and bodies share one size; weight and ink carry the hierarchy. Short text (feature bodies, subs, captions, catalog lines) wraps balanced in Chinese, so it never ends on a two-character tail; longer text wraps with `text-wrap: pretty`. A Chinese lede wraps only between phrases (`word-break: keep-all`) in balanced lines (`a11y:check` holds it).
- Sizes come from tokens and the shared roles, six steps in all: 13 / 15 / 17 / 21 / 32 / 64. The title `.display` (`--title-display`, 64px at most; Chinese and phones step down in `locale.css` and `shared.css`), `.heading` (`--text-heading`, 26–32px), a group's heading (`--text-heading-s`, 21px), `--text-lede`, `--text-card-title`, `--text-card-body`, `--text-list-body`, and the floor `--text-small` (14px) / `--text-meta` (13px). The reading steps are 13 / 15 / 17 / 19–21; do not add sizes between them. Nothing outside a hero product mock is smaller than 13px; mocks keep at least 12px.
- Reading text (feature bodies, FAQ answers, data facts, catalog one-liners) and the lede are `--ink-2`, at least 7:1. `--muted` is for labels, dates, chips, captions and subs. Headings, names, and About body are `--ink`.
- `mono` is for commands, code spans, terminals and captured output.
- `npm run a11y:check` holds the floors on every page, theme, and viewport: reading text 7:1, no text under 13px outside hero mocks, and no Chinese heading that strands one character on its last line (Chinese headings have no spaces to break at, so keep them short enough to fit a phone line, about ten characters at section size).

## Color and Depth

| Role                | Token                                     | Meaning                                                                                |
| ------------------- | ----------------------------------------- | -------------------------------------------------------------------------------------- |
| Canvas              | `--paper`                                 | Page background                                                                        |
| Raised              | `--paper-raised`                          | The block under a hero object that is not a photograph                                 |
| Ink / ink-2 / muted | `--ink` / `--ink-2` / `--muted`           | Headings; reading text (7:1); labels (AA)                                              |
| Faint               | `--faint`                                 | Decoration only, never text                                                            |
| Controls            | `--accent-fill` / `--on-accent`, `--link` | The filled primary action and its label; links (ink)                                   |
| Focus               | `--accent`                                | Focus rings only: the one blue on the site                                             |
| Chrome              | `--glass`, `--glass-blur`, `--menu-bg`    | Header and local nav bars; near-opaque menu panels                                     |
| Surface             | `--surface`, `--shadow-surface`           | Panels that hold a list; Home's picks                                                  |
| Product color       | `--product-tint` / `--product-ink`        | A product page's own pair, sampled from its icon                                       |
| Stage               | `--paper-mix`; `--stage`, `--stage-pad`   | The product-colour block under a capture; the grey under a light showcase in dark mode |
| Icon plate          | `--plate-l/m/s`                           | Every rendered app icon                                                                |
| Reference / caution | `--data-ref` / `--data-caution`           | A baseline or recommended data point / an outlier                                      |

- One voice for every control: the primary action is filled with ink (`--accent-fill`; light on dark in dark mode, `--on-accent` on it at 4.5:1 or better), and links are ink, underlined inside running text, because colour alone does not mark them; a link that stands alone (`.textlink`) carries an arrow. Blue (`--accent`) is kept for focus rings, where it has to stand apart from everything else.
- The product colour lives in the icon and in one tinted block: the paper under the hero capture (`.stage`), and under each pick on Home. It is a tint, not a slab: a saturated block fights the capture lying on it. No text sits on it, and no gradient: colour on a page is flat (`npm run check` fails on a gradient in a page stylesheet). Buttons, headings, the local nav, the closing and the index stay neutral on every page. `--ink-<slug>` stays sampled for figures in product mocks. When an icon changes, re-sample its pair.
- Every product, games included, sits on the same paper with the same type.
- Depth has two steps: the paper, and the raised paper (a hero object that is not a photograph, and Home's pick frames). Photographs rest on it with `--shadow-shot` (or `--drop-shot` inside a fixed frame). No content surface floats: lists are hairlines, not white panels. Radii are three: media 12 (`--radius-media`), the stage 20 (`--radius-stage`), the pill.
- Depth is a token decision: shadows, blur, and gradients in page stylesheets come only from `tokens.css`. `npm run check` enforces this. Two depths: `--shadow-shot` (a photograph resting on the page) and `--shadow-panel` (a panel above it).
- Translucency is for chrome. Content never floats. Menu panels use `--menu-bg`, because a translucent panel nested in a translucent bar cannot blur the page behind it.
- Dark mode is a first-class theme (OS preference or the header toggle), with a near-black canvas (`#0b0b0c`, not pure black, which haloes light text) and a `#18181a` raised tone. Captures are never dimmed: the block under a hero capture is the dark paper with 26% of the product's colour in it, and a light showcase capture sits on a grey stage (`--stage`) unless it carries a `dark` capture.

## Interaction

- The header dropdowns and mobile menu are `<details>` with outside-click and Escape close.
- The local nav highlights the section in view, scrolls to the exact offset on click, and closes its narrow-screen disclosure on outside click, Escape, or selection.
- Copy buttons appear only where the Clipboard API exists and read `Copied` / `已复制` for a moment after a write.
- Buttons press to `scale(0.98)`; a pick lifts 2px on hover (`--shadow-surface-hover`); a row in a panel tints (`--row-hover`); a standalone link's arrow moves 2px.
- Product screenshots are buttons: a click opens the full image in a `<dialog>` over a blurred backdrop (`zoom.js`). Esc, Close, or any click closes it. On phones the image opens 960px wide and pans sideways.
- Showcase photographs below the fold rise into place once as they scroll in (`reveal.js`). Text never waits for an animation: it is there when you read. Anything already on screen at load never hides.
- On product pages the local nav slides in once the site header has scrolled away, and out when it returns.
- `prefers-reduced-motion` turns off smooth scroll, the lift, the reveal, the local nav's slide, and transitions.
- No script is inline; CSP stays `script-src 'self'; style-src 'self'`.

## Constraints (Measurable Floors)

- Accessibility
  - Text contrast: at least 4.5:1 for body and labels, and 3:1 for text 18px+ or non-text. `--on-accent` on `--accent-fill` passes in both themes.
  - Interactive targets are at least 44×44px. Compact controls extend their hit area with a pseudo-element.
  - Every image has an `alt`; decorative images use `alt=""`.
- Performance
  - Every `<img>` declares intrinsic `width` and `height`. A screenshot's original is at least twice the width it is shown at, so it stays sharp on 2× screens (new captures; older ones are replaced as they are recaptured). Heroes use `fetchpriority="high"`; later photographs lazy-load.
  - Screenshots are WebP. Every screenshot gets `-900w.webp` and `-1200w.webp` siblings where narrower than the original (`npm run assets:images`), offered through `srcset`, so phones and tablets fetch a smaller file. Inter is not preloaded: Apple devices use the system font first and would download it for nothing. The display face is preloaded (Type). Zoom always opens the original.
  - CSS stays in external stylesheets so the strict CSP never blocks an inlined `<style>`.
  - A page loads only the CSS it renders: the shared sheet, its own page's, and on a product page the stylesheet of each live demo it plays. Home, About, releases, privacy and the hand-written pages stay at or under 40 KB of CSS, uncompressed. `npm run check:dist` enforces this and the cascade-layer order.
- Responsive
  - Breakpoints are 900px (the two columns stack; header nav → menu; local nav links → disclosure; a detail showcase shows its whole capture) and 640px (16px gutter; a feature's title over its body; the picks one per row; the title steps down).
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
  3. Composition: one dominant object per section, one left edge, and every right edge on the shell or the text width.
  4. Rhythm: one owner per gap. Sections use padding-top only.
  5. Restraint: if a card, section, or line can go without losing meaning, remove it.
- Every product claim, figure, and command must be traceable to project documentation, a screenshot, a test result, or source code.

## Content release, September 2026

- Home groups are Storage, Agents, Everyday, and Games (Chessboard, Goban, World Machine). World Machine keeps its pre-alpha maturity visible on its own page.
- Storage Agent leads with the existing investigation result screenshot. The welcome image is a secondary starting-point illustration.
- Product copy starts with an action and result. Preserve conditions on model data, waiting signals, and successfully persisted sessions. Do not promise zero data loss from a recovery feature.
- Keep each metadata segment together when wrapping, including license names.
