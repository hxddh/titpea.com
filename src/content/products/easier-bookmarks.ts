import { defineProduct } from "../schema";

export default defineProduct({
  slug: "easier-bookmarks",
  line: "everyday",
  icon: "/assets/icons/easier-bookmarks.webp",
  og: "/assets/og-easier-bookmarks.png",
  schema: {
    category: "BrowserApplication",
    os: "Chrome",
  },
  sectionIndex: false,
  en: {
    title: "Easier Bookmarks",
    description: "Chrome side panel and address-bar search for the bookmark tree already in this browser.",
    eyebrow: "Chrome extension",
    headline: "Bookmarks at your side.",
    lead: "Your bookmark tree. In the side panel and the address bar. No external servers.",
    catalog: {
      role: "Side panel",
      text: "Search the bookmarks Chrome already has, from the side panel or the address bar.",
    },
    primaryCta: {
      label: "Install",
      href: "https://chromewebstore.google.com/detail/easier-bookmarks/polhblfkobplgbnklgkecpkpgollapbp",
    },
    secondaryCta: {
      label: "Privacy policy",
      href: "/easier-bookmarks/privacy/",
    },
    meta: "Chrome Web Store · Productivity · 2.0.0 · No external servers",
    visual: {
      kind: "screenshot",
      label: "Easier Bookmarks",
      frame: "wide",
      image: {
        src: "/assets/easier-bookmarks-en.webp",
        alt: "Store image: Easier Bookmarks in Chrome’s side panel beside a web page, a search box and star button at the top, the Work folder open with site icons, and a count of 14 bookmarks at the foot",
        width: 1280,
        height: 800,
      },
      caption: "Illustration: store image with sample bookmarks",
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "Your folders stay as they are.",
        items: [
          { title: "In the address bar", body: "Type `b`, a space, a few letters; Enter opens the best match." },
          { title: "Search as you type", body: "Titles, links, folders, even pinyin initials. Recent ones first." },
          {
            title: "Save in one click",
            body: "Filed with that site’s other bookmarks, or the folder you last picked.",
          },
          { title: "Knows the page you’re on", body: "The star fills if it’s saved; click it to edit instead." },
          { title: "Pick several", body: "Tick a few to drag, move, or delete; one Undo restores all." },
          { title: "Drag links in", body: "Drop a page link or the address bar’s URL onto a folder." },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "Where your data goes.",
        items: [
          "Local storage keeps open folders, recent opens for ranking, your last-picked folder, and a copy of the rows last on screen.",
          "Optional tabs access, asked at your first save, reads the active tab’s title and address, or every tab’s when you save all.",
          "Those addresses and your `b` searches are never stored or sent. No analytics, ads, or servers; Chrome Sync, if on, syncs bookmarks.",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "FAQ",
        items: [
          {
            title: "How do I pick several bookmarks?",
            body: "Point at an icon and it becomes a checkbox: tick it, or press Space. A click on a bookmark always opens it. Shift-click a checkbox, or press Shift + ↑ / ↓, to pick a run; ⌘/Ctrl + A picks everything in the folder or every search result. Alt + M, or Move to… in the ⋯ menu, opens the folder list: type a name, then Enter. One Undo puts everything back where it was.",
          },
          {
            title: "Can I add a link without opening it?",
            body: "Yes. Drag a link from any page, or the address from the address bar, onto a folder or between bookmarks, and it is saved there with its link text. ⌘/Ctrl + V with addresses on the clipboard saves them into the selected folder. Links you already have aren’t added twice.",
          },
          {
            title: "How do I save a whole window?",
            body: "Press ⌘/Ctrl + Shift + D. Every tab goes into a new folder in Other bookmarks, named with the date and the number of tabs. Pages that can’t be bookmarked, such as `chrome://` pages, and repeated addresses are skipped. Change edits the new folder; Undo removes it. To save them somewhere else, choose “Save all tabs here” from that folder’s ⋯ menu; the same menu can open all of a folder’s bookmarks in a new window.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "Easier Bookmarks",
    description: "Chrome 侧边栏和地址栏里的书签工具，在本地搜索、收藏和整理书签。",
    eyebrow: "Chrome 扩展",
    headline: "书签在侧边，随手整理",
    lead: "已有的书签树。在侧边栏，也在地址栏。无外部服务器。",
    catalog: {
      role: "侧边栏",
      text: "在侧边栏或地址栏搜索 Chrome 里已有的书签。",
    },
    primaryCta: {
      label: "安装",
      href: "https://chromewebstore.google.com/detail/easier-bookmarks/polhblfkobplgbnklgkecpkpgollapbp",
    },
    secondaryCta: {
      label: "隐私政策",
      href: "/zh/easier-bookmarks/privacy/",
    },
    meta: "Chrome 网上应用店 · 效率 · 2.0.0 · 无外部服务器",
    visual: {
      kind: "screenshot",
      label: "Easier Bookmarks",
      frame: "wide",
      image: {
        src: "/assets/easier-bookmarks-zh.webp",
        alt: "商店图片：网页旁的 Chrome 侧边栏里是 Easier Bookmarks，顶部是搜索框和星标按钮，“工作”文件夹已展开，带网站图标，底部显示 14 个书签",
        width: 1280,
        height: 800,
      },
      caption: "示意图：商店图片，书签为示例",
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "文件夹保持原样",
        items: [
          { title: "地址栏直接搜", body: "输入 `b` 加空格再打几个字，回车打开最匹配的书签。" },
          { title: "边输入边找到", body: "标题、网址、文件夹一起搜，支持拼音首字母，最近打开的在前。" },
          { title: "一键收藏", body: "存进同一网站书签所在的文件夹，或你上次选的文件夹。" },
          { title: "认得当前页", body: "已收藏时星标变实心，点它编辑，不会重复添加。" },
          { title: "一次处理一批", body: "勾选几项，一起拖动、移动或删除；撤销一次全部恢复。" },
          { title: "拖入链接", body: "把网页上的链接或地址栏网址拖到文件夹上，就存在那里。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "数据的去向",
        items: [
          "本地只存展开的文件夹、最近打开的书签（用于搜索排序）、上次选的文件夹，以及上次屏幕上那部分列表的副本。",
          "标签页权限可选，第一次收藏时才申请：读取当前标签页的标题和网址；收藏所有标签页时，读取该窗口所有标签页的。",
          "这些网址和你在 `b` 后输入的内容不保存、不发送。无分析服务、广告或服务器；开启 Chrome 同步时书签随之同步。",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "常见问题",
        items: [
          {
            title: "怎么一次选中多个书签？",
            body: "鼠标移到图标上，它会变成复选框，勾选即可；也可以按空格。单击书签总是打开它。Shift + 单击复选框或 Shift + ↑ / ↓ 连续选择，⌘/Ctrl + A 选中文件夹内全部或全部搜索结果。按 Alt + M（或 ⋯ 菜单里的“移动到…”）会打开文件夹列表，输入名称后回车即可。撤销一次，全部回到原处。",
          },
          {
            title: "不打开网页也能收藏链接吗？",
            body: "能。把网页上的任意链接、或地址栏里的网址拖到文件夹上或两个书签之间，就会连同链接文字存在那里。剪贴板里有网址时，按 ⌘/Ctrl + V 会存进选中的文件夹。已经收藏过的链接不会重复添加。",
          },
          {
            title: "怎样收藏整个窗口？",
            body: "按 ⌘/Ctrl + Shift + D，每个标签页都存进“其他书签”里的一个新文件夹，名称是日期和标签页数量。`chrome://` 之类无法收藏的页面和重复的网址会跳过。点“更改”可以编辑这个文件夹，点“撤销”则删除它。想存到别处，就在那个文件夹的 ⋯ 菜单里选“把所有标签页存到这里”；同一个菜单也能在新窗口里打开文件夹内的全部书签。",
          },
        ],
      },
    ],
  },
});
