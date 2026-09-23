import { defineProduct } from "../schema";

export default defineProduct({
  slug: "world-machine",
  line: "experimental",
  icon: "/assets/icons/world-machine.webp",
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
    headline: "Branch a world.",
    lead: "Open a world. Try another branch. macOS pre-alpha.",
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
        nav: "Features",
        label: "Every branch stays with the world.",
        items: [
          { title: "Start with Pocket Universe", body: "The packaged app’s starting world." },
          { title: "Watch a first cycle", body: "A place, and relationships forming as it runs." },
          { title: "Choose what’s next", body: "Observe, leave it running, or intervene on a branch." },
          { title: "Inspect the state", body: "The timeline and inspector show events and state." },
          { title: "Packs define worlds", body: "Pocket Universe, Tiny Society, Micro Company." },
          { title: "Documented contracts", body: "Runtime, pack contracts, projection interfaces." },
        ],
      },
      {
        kind: "cards",
        id: "workflow",
        nav: "Packs",
        label: "From a pack to a world.",
        items: [
          { title: "Review the pack", body: "Opening a .worldpack does not run its code." },
          { title: "Install after review", body: "Required, even for packs shipped with the app." },
          { title: "Save a .world", body: "Branch history stays with the document." },
        ],
        numbered: true,
      },
      {
        kind: "faq",
        id: "faq",
        nav: "FAQ",
        label: "FAQ",
        items: [
          {
            title: "Is it stable?",
            body: "No. World Machine is an experimental pre-alpha. The file format and public APIs may change.",
          },
          {
            title: "How do I get it?",
            body: "There is no production GitHub Release. The repository includes build and packaging scripts; start with docs/PRE_ALPHA_RELEASES.md.",
          },
          {
            title: "Are the packages notarized?",
            body: "No. Current packages are ad-hoc signed and not notarized. Follow the pre-alpha packaging notes.",
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
    lead: "打开一个世界。尝试另一条分支。macOS pre-alpha。",
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
        nav: "功能",
        label: "每条分支都留在世界里",
        items: [
          { title: "起点世界", body: "打包应用从 Pocket Universe 开始。" },
          { title: "观察第一轮", body: "一个地方，和运行中形成的关系。" },
          { title: "选择下一步", body: "观察、任其运行，或在分支上干预。" },
          { title: "查看状态", body: "时间线和检查器显示事件与状态。" },
          { title: "Pack 定义世界", body: "Tiny Society 等 Pack 提供不同世界。" },
          { title: "契约有文档", body: "运行时、Pack 契约、投影接口。" },
        ],
      },
      {
        kind: "cards",
        id: "workflow",
        nav: "Pack",
        label: "从 Pack 到世界",
        items: [
          { title: "审阅 Pack", body: "打开 .worldpack 不会执行代码。" },
          { title: "审阅后安装", body: "应用附带的 Pack 也要审阅。" },
          { title: "保存 .world", body: "分支历史保留在文档中。" },
        ],
        numbered: true,
      },
      {
        kind: "faq",
        id: "faq",
        nav: "常见问题",
        label: "常见问题",
        items: [
          {
            title: "现在稳定吗？",
            body: "不稳定。World Machine 是实验性的 pre-alpha，文件格式和公开 API 可能改变。",
          },
          {
            title: "怎么获取？",
            body: "目前没有正式 GitHub Release。仓库提供构建与打包脚本，入口为 docs/PRE_ALPHA_RELEASES.md。",
          },
          {
            title: "分发包公证了吗？",
            body: "没有。当前分发包使用 ad-hoc 签名，尚未公证，请按 pre-alpha 说明构建。",
          },
        ],
      },
    ],
    finalCta: "打开仓库",
  },
});
