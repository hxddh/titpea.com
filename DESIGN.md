# Titpea Design System

Titpea is a developer product site. Design should make the product and its evidence easy to inspect, not compete with them.

## Page Register

- Treat product pages as **product surfaces**, not marketing landing pages.
- State what the product is, what it does, and its operating boundary before describing capabilities.
- Use one visual centerpiece per page: a benchmark, a real product screenshot, a terminal trace, or a capability topology.
- Match the visual form to the product: never reuse a generic card sequence when a diagram, chart, or real artifact explains it better.

## Narrative Structure

- Every claim must be traceable to a README, release, test report, screenshot, or source code.
- Use product-specific sections. `s3-turbo-list` explains automatic list/diff behavior; StorageOps explains Pi skills and extension tools; httpmon explains the local child-process proxy boundary.
- Prefer a short, precise sentence over a broad positioning phrase.
- Do not use generic labels such as "evidence-led", "actionable conclusion", "workflow", or "interaction" unless the page explains their concrete meaning.
- Keep Chinese technical copy idiomatic. Preserve established technical terms such as `skill`, `trace`, and command names where translating them would reduce clarity.

## Typography

- Product hero headings should occupy one or two lines at the target viewport. If a title wraps beyond two lines, shorten the wording before reducing type size.
- Do not end English or Chinese headings with a period.
- Use display type only for page-level statements. Section headings should be compact and direct.
- Body text must carry the argument, not merely restate the heading. Aim for 15-17px desktop body text with a readable line height.
- Keep technical examples in the mono face and avoid embedding long commands in display headings.

## Layout And Rhythm

- One page may have one major visual pattern; repeated information must vary in hierarchy or layout.
- Avoid identical icon-title-description grids for unrelated content. Use a list, comparison, topology, chart, terminal, or bento layout when the information calls for it.
- Alternate dense proof with open explanatory space. Do not repeat the same "kicker + large heading + cards" rhythm in adjacent sections.
- Keep stable dimensions for charts, terminal captures, screenshots, navigation, and toolbars so labels cannot shift the layout.
- Mobile pages must retain the navigation path and preserve the same content hierarchy without horizontal overflow.

## Color And Surfaces

- The default surface stays light and technical. Do not import a dark, glowing tool aesthetic merely for visual drama.
- Ink is for primary reading; muted gray is for supporting copy; green indicates verified/running/successful state; orange indicates caution; red indicates failure or prohibition.
- Do not use gradients, gradient text, decorative glow, or soft shadows as a substitute for hierarchy.
- Use borders to define structured tools and data. Avoid pairing a faint border with a large diffuse shadow on routine content cards.

## Product Visuals

- Use real screenshots for browser extensions and authentic command-shaped output for CLIs.
- Charts must show a comparison or change, not a pile of isolated numeric tiles.
- A diagram must name real components and mechanisms. StorageOps diagrams should include Pi, skills, and actual extension tools; httpmon diagrams should show the wrapped child process, local proxy, and unchanged response stream.
- State test conditions near benchmark results. Never present a constrained observation as a product ceiling.

## Verification

- Run `npm run copy:lint`, `npm run qa:pages`, and `npm run visual:check` before release.
- Review desktop and mobile screenshots after a product-page change. Check title lines, body line length, alignment, image crop, sticky navigation, and overflow.
- Visual baselines are platform-specific: `tests/visual-baselines/darwin` is for local macOS checks; `tests/visual-baselines/linux` is for GitHub Actions.
- A visible claim about skills, tools, formats, protocols, licenses, or performance must have an authoritative source in the repository or project documentation.

## Reject List

- Generic AI-translated Chinese.
- Repeated card grids with no information hierarchy.
- Unexplained metrics and decorative charts.
- Hero copy that obscures the product's actual runtime or boundary.
- Product visuals that could belong to any unrelated developer tool.
