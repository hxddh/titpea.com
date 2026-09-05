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
        "Explore persistent worlds, inspect their state, and try different branches. An experimental macOS runtime in pre-alpha.",
      eyebrow: "Experimental macOS project",
      headline: "Branch a world",
      lead: "Open a .world document, inspect its state, and try a different branch. This macOS pre-alpha is still changing, including its file format and public APIs.",
      primaryCta: { label: "View on GitHub", href: siteConfig.externalLinks.worldMachine },
      secondaryCta: { label: "Pre-alpha notes", href: siteConfig.externalLinks.worldMachinePreAlpha },
      meta,
      proof: [],
      featuresLabel: "Start with Pocket Universe",
      features: [
        {
          title: "Observe a first cycle",
          body: "The packaged app offers Pocket Universe as its starting world. Its opening sequence introduces a place and the relationships that form as it runs.",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "Choose a continuation",
          body: "Observe the next cycle, leave the world running, or try an intervention on a branch. The timeline and inspector let you examine events and state.",
          intent: "capability",
          surface: "artifact",
        },
      ],
      workflowLabel: "From a pack to a world",
      workflow: [
        {
          title: "Review the pack",
          body: "Open a .worldpack to inspect it. Opening does not run its code; installation requires review, including for the packs shipped with the app.",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "Create and save a world",
          body: "After installation and activation, create a world and save it as a .world document. Branch history stays with the document.",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      positioningLabel: "Before building",
      positioning: [
        {
          title: "Pre-alpha files and APIs",
          body: "The file format and public APIs may change. Current packages are ad-hoc signed and not notarized. Follow the pre-alpha packaging notes.",
          intent: "boundary",
          surface: "protocol",
        },
        {
          title: "Packs define the world",
          body: "Pocket Universe, Tiny Society, and Micro Company provide different worlds. Developer documentation covers the runtime, pack contracts, and projection interfaces.",
          intent: "capability",
          surface: "protocol",
        },
      ],
      faqLabel: "Get the pre-alpha",
      faq: [
        {
          title: "Build from source",
          body: "There is no production GitHub Release. The repository includes build and packaging scripts; start with docs/PRE_ALPHA_RELEASES.md.",
        },
      ],
      finalCtaLabel: "Open repository",
    },
    zh: {
      title: "World Machine",
      description: "查看世界状态，尝试不同分支。面向 macOS 的实验性运行时，当前为 pre-alpha。",
      eyebrow: "macOS 实验项目",
      headline: "让世界走向不同分支",
      lead: "打开 .world 文档，查看世界状态，再尝试不同的发展分支。当前为 macOS pre-alpha，文件格式与公开 API 仍在变化。",
      primaryCta: { label: "查看 GitHub", href: siteConfig.externalLinks.worldMachine },
      secondaryCta: { label: "Pre-alpha 说明", href: siteConfig.externalLinks.worldMachinePreAlpha },
      meta,
      proof: [],
      featuresLabel: "从 Pocket Universe 开始",
      features: [
        {
          title: "观察第一轮变化",
          body: "打包后的应用以 Pocket Universe 作为起点。开场引导你观察一个地方，以及运行中逐渐形成的关系。",
          intent: "capability",
          surface: "artifact",
        },
        {
          title: "选择接下来怎么走",
          body: "观察下一轮，让世界继续运行，或在分支上尝试干预。通过时间线和检查器查看事件与状态。",
          intent: "capability",
          surface: "artifact",
        },
      ],
      workflowLabel: "从 Pack 到世界",
      workflow: [
        {
          title: "审阅 Pack",
          body: "打开 .worldpack 查看内容，打开文件本身不执行代码。安装需要审阅，应用附带的 Pack 也一样。",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "创建并保存世界",
          body: "安装并激活 Pack 后，创建世界并保存为 .world 文档。分支历史保留在文档中。",
          intent: "workflow",
          surface: "artifact",
        },
      ],
      positioningLabel: "构建之前",
      positioning: [
        {
          title: "文件与 API 仍在变化",
          body: "当前为 pre-alpha。文件格式和公开 API 可能改变；分发包使用 ad-hoc 签名，尚未公证，请按 pre-alpha 说明构建。",
          intent: "boundary",
          surface: "protocol",
        },
        {
          title: "Pack 定义世界内容",
          body: "Pocket Universe、Tiny Society 和 Micro Company 提供不同世界。运行时、Pack 契约和投影接口见开发文档。",
          intent: "capability",
          surface: "protocol",
        },
      ],
      faqLabel: "获取 pre-alpha",
      faq: [
        {
          title: "从源码构建",
          body: "目前没有正式 GitHub Release。仓库提供构建与打包脚本，入口为 docs/PRE_ALPHA_RELEASES.md。",
        },
      ],
      finalCtaLabel: "打开仓库",
    },
  },
};
