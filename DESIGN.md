# Titpea Design Principles

Titpea is a concise personal product site. Its design should make each tool easier to understand, not make the site feel like a generic developer dashboard or a marketing campaign.

## When Rules Compete

Protect them in this order:

1. Facts and CI floors — contrast, 44px targets, CSP, headline length and line count, external release tags.
2. Settled page shape — product heroes stay copy-left / object-right (s3-turbo-list stays one column); the home first screen is the featured pair; short products have no Inside.
3. The reader's job on that page — what the tool changes, how it runs, what remains.
4. Craft — type, hairlines, spacing, bilingual density.

Do not invent a new layout to look like the page was redesigned. A layout rule is a prompt for judgment, never a mandate to replace a clearer existing structure. When a principle and a constraint disagree, satisfy the constraint and rework the design.

## Use Principles, Not Templates

- Cards are valid when they give products or concepts a distinct identity. Avoid only card grids in which every item has the same visual weight and no meaningful difference.
- Keep the page quiet enough for technical claims, commands, screenshots, and charts to remain the focus.

## Reject Generated-Design Reflexes

Do not ship any of these. Naming them is the point; vague “keep it clean” is not.

- Linear bento, glow, equal-weight mosaic cards, or a decorative body grid
- Cool gray-50 / indigo chip leftovers from a generic dashboard palette
- A CJK webfont; Inter is Latin-only, CJK uses the system face
- Filled capsule buttons, bordered proof pills, or 14px chips with drop shadows
- A filled mark, app icon, or letter tile in the header — the wordmark is the word Titpea
- Object-first print plate: the screenshot or terminal above the headline
- Product `h1` as the product name; the name stays in the eyebrow, the slogan is the heading
- Home hero CTAs that duplicate the featured pair
- Restating the hero headline as a closing slogan
- Shrinking the home contents line below section size so a featured slogan outranks the page title
- About body copy in `--muted`, as if the facts were captions
- Home leads that narrate the page (`其余列在下面`, `The rest are listed below`)
- Restyling About headings (`The day job`, `白天做存储`, `Keep the evidence`) instead of cutting restated paragraphs
- Tricolons and motif harvest on Home (`investigations, reading, and discovery`, `the rest of the shelf`)
- Numbered Home/About indexes (`01—02`, a practice list) or decorative `--data-ref` / `--data-caution` bars on chrome
- Stacked magazine case studies that push the featured pair below the first screen
- Spreadsheet Home catalogs (role | name | one-liner columns) or product reading rails that park a kicker in an empty left cell
- FAQ as a collapsed accordion, or the section directory as sticky pills
- Card titles that could sit on any product (`Local by design`, `What it isn't`, `Current platforms`)
- A dark-theme redesign as a “refresh”
- Unused mosaic tokens (`--chip-bg`, `--shadow-media`, `--card-pad`, `.section-card-grid`)
- iOS radii on chrome, lists, or photographs

Do not compensate by making a sterile anti-design: black, white, thin rules, and empty margin. Restraint here is hierarchy, evidence, and hairline pressure.

## Product Hierarchy

- Give the most important product a stronger visual footprint, then make supporting products easy to scan.
- Use actual product screenshots and authentic command-shaped visuals where they explain the product better than prose.
- Do not turn product pages into abstract workflows. Explain the real runtime, boundary, inputs, and outputs.

## Page Composition

- A product page should earn every section. Prefer a short sequence of product-specific evidence over a fixed template with repeated claims. An Inside section is only valid when it has an object (a panel). Copy-only Inside that restates the hero belongs in a card, the hero caption, or nowhere.
- For core tools, the usual shape is: what the tool changes, how it works, and what remains after the run. FAQ is optional, and only for adoption blockers that are not already on the page. Short products may be hero, photographs, and one fit list. Extra photographs after the hero are part of that shape; they must not depend on an Inside section existing.
- Remaining FAQ answers stay visible as a hairline list. Do not require every product to have FAQ or three sections. An empty FAQ array does not render.
- Closing product actions may repeat the primary download or repository link. They must not restate the hero headline.
- Keep the section directory for long desktop product pages only. Style it as a text directory. It names the product, then the product's own section kickers — not Overview, Fit and limits, or Questions & how-to. On mobile it becomes a compact disclosure so no destination is clipped or hidden behind a horizontal gesture.
- Use one source of truth for each product fact. The section after the hero should not inventory the lead. FAQ asks the extra fact (an Intel Mac build, a first-open warning), not the platforms line already in the meta.
- Unknown addresses serve a real 404 page, not the homepage with a 200.

## Home

- The first screen is the featured pair, not a slogan block with duplicate CTAs. Home hero CTA count is 0.
- Home wording follows the current content model. The concise introduction is the relationship between the featured pair, said once, in `--ink` at 18px: Storage Agent keeps the evidence in the session, and PageWise links the answer back to the page. About does not repeat it. Section headings are Selected work / 主要作品 and More tools / 更多工具. Do not duplicate these with kickers.
- The home heading is `--title-index`, a contents line, not a brand sentence, and it ranks above `--title-section`. Featured photographs are labeled by product names; they do not get a second slogan. Featured screenshots stay the full captured frame.
- Featured product names use `--text-featured-name` under the photograph. Storage catalog names use the same size. Other catalog names stay `--text-catalog-name`. The featured and catalog headings use `--title-section`. The photograph is the object; the name is a caption. Do not grow the featured name until it competes with the screenshot.
- Featured screenshots keep their native proportion. Align the pair by the caption baseline, not by cropping both into a 3:2 tile. Each photograph is a print figure: square hairline, no fill, no radius, no drop shadow. Featured figures use `--soft-line` so the pair reads as objects on the first screen.
- Featured captions are the product name; they do not paraphrase the lead. On single-column screens put the caption above the image so the name is visible before a tall screenshot.
- Catalog roles use sans, not uppercase mono. Omit the role when the product name already carries the job. The remaining products are a two-column text list with hairline separators. Catalog one-liners use `--text-list-body` in ink, not 14px muted captions. Storage names use `--text-featured-name`. Experimental names use weight 500. Vary sentence length so the list is not eight copies of the same grammar.
- Header groups use the same four lines as the catalog: Storage, Agents, Everyday, Experimental. A product belongs to one line.
- About is one reading block: name, the lead (once, as the object), and the concise body paragraphs in `--ink`. Do not restore Background / Principles as headings. Do not park the facts in a second gray band. Do not add a third paragraph that restates the contact row.

## Product Hero

- Copy left, object right (`minmax(0, 1.15fr) minmax(0, 0.85fr)`). s3-turbo-list stays one column.
- `h1` is `copy.headline` (the slogan). The eyebrow is `{title} · {eyebrow}`.
- Shorten copy before shrinking type. Hero headings stay within two lines. English ≤ 24 characters, Chinese ≤ 18.
- Product and About heroes are left-aligned. Captions sit below screenshots, not as overlay pills. Screenshots do not scale on hover.
- Hero actions — and the closing action — are typographic links with a 44px hit area, not filled capsules. Keep the `.button.primary` class so the href contract still resolves. Product hero CTAs stay (2–3); do not add them to home.
- After a product `h1`, section titles use `--title-section`. The product `h1` is the only display size on a product page.
- Kickers and eyebrows use `--text-kicker` (12px), quieter than the 13px nav size.

## Product Body

- Equal-weight sections — fit and limits, features, numbered workflows — are two-column hairline lists. Card titles name the actual limit or surface (`Apple Silicon and Windows`, `The tray does not approve`). A `primary` card may take the full row so the geometry matches the argument. Do not force materially unequal findings into equal cells, and do not leave an orphaned third peer in a leftover cell if one item already carries the decision.
- Charts, terminals, and the Pulse menu-bar visual keep the box that is the product.
- Proof chips are optional. Short product pages should omit them when the same facts already live in the hero, workflow, or FAQ. Workflow evidence tags are mono text, not chips.
- Browser extensions, native apps, and menu-bar apps use `--section-y-short`; long evidence pages keep `--section-y`.
- Equal-weight in-section titles use `--text-list-title`, quieter than `--title-section`.
- Equal-weight section body — cards, workflows, purpose lists — stays in `--ink`. `--muted` is for kickers and FAQ audit answers, not the argument. The home lead is the argument.
- Storage Agent's welcome illustration sits beside the workflow steps. It does not open a second section that restates those steps.

## Chrome

- The wordmark is the word Titpea. Navigation dropdowns and the mobile menu are hairline lists on paper, not floating rounded panels. The mobile menu is a hairline list, not a 1px tile stack.
- Language and theme controls are text, not boxed icon buttons. Theme reads `Dark` / `Light` (and `深色` / `浅色`).
- Hairlines have pressure. `--rule` cuts major turns (screenshot, deep-dive, results, closing CTA, footer, home catalog and About bands). `--line` separates equal-weight section kickers and rows in lists, FAQ, and workflows. `--chrome-line` is the header and sticky directory. Do not use one 1px gray for all three.
- Every gap has one owner. Adjacent sections use padding-top only; the next section or the footer owns the turn. Heading → first paragraph stays close; peer rows in a list are tighter than a section turn (`--section-y`). Do not stack padding-bottom plus padding-top plus a kicker pad on the same cut.
- If the page feels busy, remove, combine, or reorder content. If it feels loud, reduce competing weight, rules, and scale. Do not do both at once, and do not shrink display type to make a page feel lighter.
- Site chrome radius is zero. `--radius-window` is the only exception, and only on the product object itself.
- Real product screenshots sit on paper as figures: hairline, no card fill, no radius, no drop shadow. Analysis panels, scan plans, numbered flows, KPI strips, and charts inside a product window sit the same way. Charts, terminals, and CSS product mocks keep one outer contour (`--radius-window` and `--soft-line`) on `--paper` without a site drop shadow. Inside a window, inputs and chips are hairline text.

## Typography And Copy

- Load Inter for Latin. CJK falls back to the system face. Do not list a webfont that is never fetched.
- Display headings use weight 600 and tighter negative tracking at large sizes. Do not create hierarchy only by jumping to 700 at default letter-spacing. Product and About `h1` track at `-0.03em` with line-height `1.06`. Chinese pages (`:lang(zh)`) use `-0.01em` / `1.12` on product, About, and home headings, and `1.75` on lead, prose, About body, catalog one-liners, and list body — Inter's Latin tracking must not crush CJK.
- List body is `--text-list-body` (16px / 1.65). Keep product/About lead at 18px and kickers at 12px. Do not shrink the product/About display size to make a page feel lighter. Do not shrink the home heading below `--title-index`.
- The first viewport is the argument (product: slogan and object; home: the featured pair). Later FAQ, deep-dive, and tables are the audit path. Do not add a second summary that restates the same answer at equal prominence.
- Product descriptions should be compact and factual. Avoid generic phrases that could describe any developer tool.
- Home is a directory. About's lead is said once. Do not flatten product pages by deleting opinionated titles. On short product pages, delete equal-weight cards that only restate the lead.
- Chinese copy should read as natural technical Chinese. Keep command names and established terms such as `skill` and `trace` when translation reduces clarity.
- `mono` is for meta, commands, terminals, and data labels. Navigation, buttons, kickers, eyebrows, footer, menu group titles, catalog roles, and the product section directory use `sans`. Navigation group labels stay short.

## Constraints (Measurable Floors)

Principles above are prompts for judgment. The rules below are not — they are hard
floors that a change either meets or fails, and several are enforced in CI.

- Accessibility
  - Text contrast: body and labels at least 4.5:1; text 18px+ or non-text at least 3:1.
    `--faint` is a border/decoration token and must not be used for text.
  - Interactive targets are at least 44x44px.
  - Motion respects `prefers-reduced-motion`.
  - Every image has an `alt`; decorative images use `alt=""`.
- Performance
  - No layout shift: every `<img>` declares intrinsic `width`/`height`.
  - Keep CSS in external stylesheets so the strict CSP never blocks an inlined `<style>`.
- Tokens are the single source of truth
  - Spacing, radius, type size, and color come from `tokens.css`; components avoid magic numbers.
  - `mono` is for meta, commands, terminals, and data labels; `sans` is for headings, prose, navigation, buttons, kickers, eyebrows, footer, menu group titles, catalog roles, and the product section directory.
  - Type sizes come from tokens: `--title-index`, `--title-display`, `--title-section`, `--text-kicker`, `--text-list-title`, `--text-list-body`, `--text-featured-name`, `--text-catalog-name`. Hero headings stay within two lines. Product headlines: English ≤ 24 characters, Chinese ≤ 18. The product `h1` is not the product name.
- Responsive
  - Breakpoints are 900px (tablet to single column) and 640px (phone).
  - For bilingual layouts, size shared cards for the longer language so the Chinese page
    does not leave large gaps.

## Color Semantics

Color is used sparingly and always carries meaning. The palette lives in `tokens.css`.

| Role             | Token / value            | Meaning                                        |
| ---------------- | ------------------------ | ---------------------------------------------- |
| Ink              | `--ink`                  | Primary text, primary actions, active state    |
| Muted            | `--muted`                | Secondary text and quiet labels (AA compliant) |
| Faint            | `--faint`                | Hairlines and decoration only — never text     |
| Line / soft line | `--line` / `--soft-line` | Card dividers and borders                      |
| Reference green  | `#16a56c` family         | A baseline or recommended data point           |
| Caution orange   | `#d97706` family         | An outlier or value that needs attention       |

Do not introduce a third accent color or use green/orange decoratively.

## Review Before Release

- The pipeline enforces most of this automatically: `visual:check` compares desktop and
  mobile baselines, `qa:pages` checks overflow, navigation, anchors, and the mobile menu,
  `a11y:check` runs structural checks, `content:check` keeps headlines and closings honest,
  and `facts:external` keeps external claims fresh.
  After an intentional visual change, refresh the baselines with `npm run visual:approve`.
- Still review by eye, in this order:
  1. First read — if the reader saw only the first viewport, would they remember the central relationship, not merely the title?
  2. Language — did simplification preserve every qualifier? Did authoring words stay out of the page?
  3. Composition — one dominant object per reading moment; no accidental empty rectangles; geometry matches the argument.
  4. Rhythm — each visible gap has one owner; peer values share type role and alignment.
  5. Restraint — if a surface, rule, or section can go without losing meaning, remove it. Diagnose busy versus loud separately.
- Every product claim must be traceable to project documentation, a screenshot, a test result, or source code.
- Encode each accepted correction in the narrowest place: judgment in this file, repeatable mechanics in CSS, anything that can be asserted in CI.

## Content release, September 2026

- Home groups are Storage, Agents, Everyday, and Experimental. Keep experimental maturity visible.
- Storage Agent leads with the existing investigation result screenshot; the welcome image is a secondary starting-point illustration.
- Product copy starts with an action and result. Preserve conditions on model data, waiting signals, and successfully persisted sessions. Do not promise zero data loss from a recovery feature.
- Label schematic interface examples explicitly; they are not captured execution evidence.
- Keep each metadata segment together when wrapping, including license names.
