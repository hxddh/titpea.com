import { defineProduct } from "../schema";

export default defineProduct({
  slug: "world-machine",
  line: "experimental",
  og: "/assets/og-world-machine.png",
  schema: {
    category: "DeveloperApplication",
    os: "macOS",
  },
  sectionIndex: true,
  en: {
    title: "World Machine",
    description:
      "Explore persistent worlds, inspect their state, and try different branches. An experimental macOS runtime in pre-alpha.",
    eyebrow: "Experimental macOS project",
    headline: "Branch a world",
    lead: "Open a .world document, inspect its state, and try a different branch. This macOS pre-alpha is still changing, including its file format and public APIs.",
    catalog: {
      role: "Pre-alpha",
      text: "Open a world and try another branch. macOS, pre-alpha.",
    },
    primaryCta: {
      label: "View on GitHub",
      href: "https://github.com/hxddh/world-machine",
    },
    secondaryCta: {
      label: "Pre-alpha notes",
      href: "https://github.com/hxddh/world-machine/blob/main/docs/PRE_ALPHA_RELEASES.md",
    },
    meta: "Experimental · pre-alpha · macOS desktop · Apache-2.0",
    visual: {
      kind: "worldProjection",
      label: "World Machine",
      kicker: "world-machine · illustrative view",
      status: "pre-alpha",
      briefingLabel: "Briefing",
      briefing: "A place wakes. Notice the first relationship forming.",
      commandsLabel: "Commands",
      commands: ["Observe the first cycle", "Steer gently", "Leave the world alone"],
      collectionLabel: "Collection",
      collection: ["Place · seeded", "Relation · forming", "Agent · optional"],
      timelineLabel: "Timeline",
      timeline: ["t0 · world opened", "t1 · pack activated", "t2 · branch offered"],
      footnotes: ["Entity → Action → Event → State", "ad-hoc · not notarized"],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "Start with Pocket Universe",
        items: [
          {
            title: "Observe a first cycle",
            body: "The packaged app offers Pocket Universe as its starting world. Its opening sequence introduces a place and the relationships that form as it runs.",
          },
          {
            title: "Choose a continuation",
            body: "Observe the next cycle, leave the world running, or try an intervention on a branch. The timeline and inspector let you examine events and state.",
          },
        ],
      },
      {
        kind: "cards",
        id: "workflow",
        label: "From a pack to a world",
        items: [
          {
            title: "Review the pack",
            body: "Open a .worldpack to inspect it. Opening does not run its code; installation requires review, including for the packs shipped with the app.",
          },
          {
            title: "Create and save a world",
            body: "After installation and activation, create a world and save it as a .world document. Branch history stays with the document.",
          },
        ],
        numbered: true,
      },
      {
        kind: "cards",
        id: "positioning",
        label: "Before building",
        items: [
          {
            title: "Pre-alpha files and APIs",
            body: "The file format and public APIs may change. Current packages are ad-hoc signed and not notarized. Follow the pre-alpha packaging notes.",
          },
          {
            title: "Packs define the world",
            body: "Pocket Universe, Tiny Society, and Micro Company provide different worlds. Developer documentation covers the runtime, pack contracts, and projection interfaces.",
          },
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "Get the pre-alpha",
        items: [
          {
            title: "Build from source",
            body: "There is no production GitHub Release. The repository includes build and packaging scripts; start with docs/PRE_ALPHA_RELEASES.md.",
          },
        ],
      },
    ],
    finalCta: "Open repository",
  },
  zh: {
    title: "World Machine",
    description: "查看世界状态，尝试不同分支。面向 macOS 的实验性运行时，当前为 pre-alpha。",
    eyebrow: "macOS 实验项目",
    headline: "让世界走向不同分支",
    lead: "打开 .world 文档，查看世界状态，再尝试不同的发展分支。当前为 macOS pre-alpha，文件格式与公开 API 仍在变化。",
    catalog: {
      role: "Pre-alpha",
      text: "打开一个世界，试另一条分支。macOS，pre-alpha。",
    },
    primaryCta: {
      label: "查看 GitHub",
      href: "https://github.com/hxddh/world-machine",
    },
    secondaryCta: {
      label: "Pre-alpha 说明",
      href: "https://github.com/hxddh/world-machine/blob/main/docs/PRE_ALPHA_RELEASES.md",
    },
    meta: "Experimental · pre-alpha · macOS desktop · Apache-2.0",
    visual: {
      kind: "worldProjection",
      label: "World Machine",
      kicker: "world-machine · 界面示意",
      status: "pre-alpha",
      briefingLabel: "简报",
      briefing: "一个地方醒来。注意正在形成的第一段关系。",
      commandsLabel: "指令",
      commands: ["观察第一轮循环", "轻柔干预", "让世界自行运转"],
      collectionLabel: "集合",
      collection: ["Place · 已播种", "Relation · 形成中", "Agent · 可选"],
      timelineLabel: "时间线",
      timeline: ["t0 · 打开世界", "t1 · 激活 Pack", "t2 · 提供分支"],
      footnotes: ["Entity → Action → Event → State", "ad-hoc · 未公证"],
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "从 Pocket Universe 开始",
        items: [
          {
            title: "观察第一轮变化",
            body: "打包后的应用以 Pocket Universe 作为起点。开场引导你观察一个地方，以及运行中逐渐形成的关系。",
          },
          {
            title: "选择接下来怎么走",
            body: "观察下一轮，让世界继续运行，或在分支上尝试干预。通过时间线和检查器查看事件与状态。",
          },
        ],
      },
      {
        kind: "cards",
        id: "workflow",
        label: "从 Pack 到世界",
        items: [
          {
            title: "审阅 Pack",
            body: "打开 .worldpack 查看内容，打开文件本身不执行代码。安装需要审阅，应用附带的 Pack 也一样。",
          },
          {
            title: "创建并保存世界",
            body: "安装并激活 Pack 后，创建世界并保存为 .world 文档。分支历史保留在文档中。",
          },
        ],
        numbered: true,
      },
      {
        kind: "cards",
        id: "positioning",
        label: "构建之前",
        items: [
          {
            title: "文件与 API 仍在变化",
            body: "当前为 pre-alpha。文件格式和公开 API 可能改变；分发包使用 ad-hoc 签名，尚未公证，请按 pre-alpha 说明构建。",
          },
          {
            title: "Pack 定义世界内容",
            body: "Pocket Universe、Tiny Society 和 Micro Company 提供不同世界。运行时、Pack 契约和投影接口见开发文档。",
          },
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "获取 pre-alpha",
        items: [
          {
            title: "从源码构建",
            body: "目前没有正式 GitHub Release。仓库提供构建与打包脚本，入口为 docs/PRE_ALPHA_RELEASES.md。",
          },
        ],
      },
    ],
    finalCta: "打开仓库",
  },
});
