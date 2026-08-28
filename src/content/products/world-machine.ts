import type { WorldRuntimeProduct } from "../../lib/site";
import { productFacts } from "../productFacts";
import { siteConfig } from "../siteConfig";

const facts = productFacts["world-machine"];
const meta = `Experimental · pre-alpha · macOS desktop · ${facts.licenseLabel ?? "Apache-2.0"}`;

export const worldMachineProduct: WorldRuntimeProduct = {
  slug: "world-machine",
  name: "World Machine",
  archetype: "worldRuntime",
  locales: {
    en: {
      title: "World Machine",
      description:
        "Experimental pre-alpha semantic runtime for persistent, inspectable, branchable worlds — hosts Tiny Society, Pocket Universe, and Micro Company packs.",
      eyebrow: "Experimental · pre-alpha · macOS",
      headline: "Branchable worlds you can inspect",
      lead: "Open a .world, install a pack after review, then branch what happens next.",
      primaryCta: { label: "View on GitHub", href: siteConfig.externalLinks.worldMachine },
      secondaryCta: { label: "Pre-alpha notes", href: siteConfig.externalLinks.worldMachinePreAlpha },
      meta,
      proof: [],
      featuresLabel: "Loop, host, and packs",
      features: [
        {
          title: "A semantic loop, not a scene graph",
          body: "World truth follows Entity/Relation → Action → Event → State → Scheduler / Behavior / Agent → Replay → Projection. Renderers consume projections only.",
          intent: "capability",
          surface: "protocol",
        },
        {
          title: "Briefing and Commands stay in focus",
          body: "The GPUI host surfaces the next continuation before Canvas and Inspector. Collection, Focus/Explore, and Timeline scroll independently so long worlds stay inspectable.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Durable .world documents and packs",
          body: "The macOS desktop host opens `.world` documents with branching/lineage, installs external `.worldpack` files after review, and keeps Pack code out of the kernel.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Packs exercise the same boundaries",
          body: "Tiny Society, Pocket Universe, and Micro Company use Host/Pack contracts. Included packs still require explicit Review & Install before activation.",
          intent: "capability",
          surface: "agent",
        },
      ],
      workflowLabel: "Open, install, branch",
      workflow: [
        {
          title: "Open or create a .world",
          body: "The desktop host owns durable `.world` documents. Branching and lineage stay with the document, not with UI chrome.",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "Review and install a pack",
          body: "Double-click or Open With a `.worldpack` only opens static review. Installation runs quarantine, durable probe, and activation — never on the open event alone.",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "Act, then inspect projections",
          body: "Actions produce events and state. Projection snapshots feed Collection, Timeline, Inspector, and Semantic Canvas without the renderer owning world truth.",
          intent: "workflow",
          surface: "protocol",
        },
        {
          title: "Branch what happens next",
          body: "Larger interventions are optional branches. Replay and projection keep prior state inspectable after you fork a path.",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      positioningLabel: "Unstable on purpose",
      positioning: [
        {
          title: "Pre-alpha by design",
          body: "World IR and public APIs are intentionally unstable. This is an experimental runtime, not a production product release.",
          intent: "boundary",
          surface: "protocol",
          priority: "primary",
        },
        {
          title: "Ad-hoc signed, not notarized",
          body: "Current macOS packages are ad-hoc signed and not notarized. Treat them as experimental distribution artifacts, not Gatekeeper-ready releases.",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "Domain stays in packs",
          body: "world-core owns semantic primitives only. Person, Town, Company, and similar domain concepts live in packs — never in the kernel.",
          intent: "boundary",
          surface: "protocol",
        },
        {
          title: "Not an engine marketplace",
          body: "Not a game engine marketplace, not multi-user SaaS, and not a notarized Mac App Store build.",
          intent: "boundary",
          surface: "protocol",
        },
      ],
      faqLabel: "Pre-alpha and packs",
      faq: [
        {
          title: "No production GitHub Release",
          body: "Pre-alpha packaging scripts exist in-repo; see docs/PRE_ALPHA_RELEASES.md. Prefer building from source or following that note.",
        },
        {
          title: "Included packs need Review & Install",
          body: "Pocket Universe and Micro Company ship as included external packs. Home requires explicit Review & Install before content review, quarantine, probe, and activation.",
        },
      ],
      finalCtaLabel: "Open repository",
    },
    zh: {
      title: "World Machine",
      description:
        "实验性 pre-alpha 语义运行时：持久、可检查、可分支的世界；承载 Tiny Society、Pocket Universe 与 Micro Company 等 Pack。",
      eyebrow: "实验性 · pre-alpha · macOS",
      headline: "可分支、可检查的语义世界",
      lead: "打开 .world 文档，审阅后再安装 Pack，然后分支后续会发生的事。",
      primaryCta: { label: "查看 GitHub", href: siteConfig.externalLinks.worldMachine },
      secondaryCta: { label: "Pre-alpha 说明", href: siteConfig.externalLinks.worldMachinePreAlpha },
      meta,
      proof: [],
      featuresLabel: "循环、宿主与 Pack",
      features: [
        {
          title: "语义循环，不是场景图",
          body: "世界真相沿 Entity/Relation → Action → Event → State 推进。Scheduler / Behavior / Agent 之后才到 Replay 与 Projection。渲染层只消费投影。",
          intent: "capability",
          surface: "protocol",
        },
        {
          title: "Briefing 与 Commands 优先",
          body: "GPUI 宿主先展示下一步续行/选择，再是 Canvas 与 Inspector。Collection、Focus/Explore、Timeline 各自滚动，长世界仍可检查。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "持久 .world 与 Pack",
          body: "macOS 桌面宿主打开带分支/谱系的 `.world` 文档；外部 `.worldpack` 经审阅后安装；领域概念不进内核。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Pack 共用同一边界",
          body: "Tiny Society、Pocket Universe、Micro Company 走同一套 Host/Pack 契约。附带 Pack 仍需显式 Review & Install 后才激活。",
          intent: "capability",
          surface: "agent",
        },
      ],
      workflowLabel: "打开、安装、分支",
      workflow: [
        {
          title: "打开或创建 .world",
          body: "桌面宿主管理持久 `.world` 文档。分支与谱系留在文档里，不在 UI 装饰层。",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "审阅并安装 Pack",
          body: "双击或「打开方式」打开 `.worldpack` 只进入静态审阅。安装才走隔离、持久探测与激活——打开事件本身不执行 Pack。",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "行动，再检查投影",
          body: "Action 产生 Event 与 State。投影快照供给 Collection、Timeline、Inspector 与 Semantic Canvas，渲染层不拥有世界真相。",
          intent: "workflow",
          surface: "protocol",
        },
        {
          title: "分支后续路径",
          body: "较大干预是可选分支。回放与投影让你在分叉后仍能检查先前状态。",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      positioningLabel: "刻意不稳定",
      positioning: [
        {
          title: "刻意处于 pre-alpha",
          body: "World IR 与公开 API 故意不稳定。这是实验性运行时，不是生产产品发布。",
          intent: "boundary",
          surface: "protocol",
          priority: "primary",
        },
        {
          title: "Ad-hoc 签名，未公证",
          body: "当前 macOS 包为 ad-hoc 签名且未公证。当作实验分发物，不是可过 Gatekeeper 的正式发布。",
          intent: "boundary",
          surface: "artifact",
        },
        {
          title: "领域留在 Pack",
          body: "world-core 只拥有语义原语。Person、Town、Company 等领域概念在 Pack 里——绝不进内核。",
          intent: "boundary",
          surface: "protocol",
        },
        {
          title: "不是引擎市场",
          body: "不是游戏引擎市场，不是多用户 SaaS，也不是已公证的 Mac App Store 构建。",
          intent: "boundary",
          surface: "protocol",
        },
      ],
      faqLabel: "pre-alpha 与 Pack",
      faq: [
        {
          title: "还没有生产向 Release",
          body: "仓库内有 pre-alpha 打包脚本；见 docs/PRE_ALPHA_RELEASES.md。优先从源码构建或按该说明操作。",
        },
        {
          title: "附带 Pack 需先审阅",
          body: "Pocket Universe 与 Micro Company 作为附带外部 Pack。Home 需显式 Review & Install，才会进入内容审阅、隔离、探测与激活。",
        },
      ],
      finalCtaLabel: "打开仓库",
    },
  },
};
