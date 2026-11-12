import { defineProduct } from "../schema";

export default defineProduct({
  slug: "easier-bookmarks",
  line: "everyday",
  type: "extension",
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
    lead: "Search, save and tidy the bookmarks Chrome already has, from a side panel or the address bar. Nothing is sent to outside servers.",
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
    privacy: {
      network: "none",
      networkNote: "Nothing is sent: no servers, analytics or ads. Chrome Sync, if on, syncs bookmarks.",
      stays: "Open folders, recent opens and the last-picked folder in the extension’s local storage.",
      policy: {
        label: "Privacy policy",
        href: "/easier-bookmarks/privacy/",
      },
    },
    meta: "Chrome Web Store · Productivity · 5.0.0 · No external servers",
    visual: {
      kind: "screenshot",
      label: "Easier Bookmarks",
      frame: "wide",
      image: {
        src: "/assets/easier-bookmarks-en.webp",
        alt: "The Easier Bookmarks side panel: a search box and star button at the top, the Bookmarks bar with the Work folder open on five bookmarks with site icons, Reading and Travel folded, three bookmarks on the bar itself, and a count of 14 bookmarks at the foot",
        width: 1140,
        height: 1980,
      },
      caption: "Easier Bookmarks 5.0.0 side panel; bookmarks and site icons are examples.",
      asOf: "v5.0.0",
    },
    showcases: [
      {
        src: "/assets/easier-bookmarks-search-en.webp",
        alt: "The side panel searching “plan”: Q4 Product Plan, Kyoto Trip Plan and Weekly Meal Plan, each with “Plan” highlighted and its folder path under it",
        width: 1900,
        height: 1425,
        dark: { src: "/assets/easier-bookmarks-search-en-dark.webp", width: 1900, height: 1425 },
        title: "Results as you type.",
        body: "Each match shows the folder it lives in; Enter opens the first.",
        caption: "Easier Bookmarks 5.0.0, searching “plan”; bookmarks are examples.",
        asOf: "v5.0.0",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "It works with the bookmarks you have.",
        items: [
          {
            title: "In the address bar",
            body: "Type `b` and a space, then a few letters; Enter opens the best match.",
          },
          {
            title: "Search as you type",
            body: "Finds titles, links and folders, despite accents or one typo, and by full pinyin.",
          },
          {
            title: "Save in one click",
            body: "It goes in with that site’s other bookmarks, or the folder you last picked.",
          },
          {
            title: "Knows the page you’re on",
            body: "A filled star means the page is saved; clicking edits it rather than adding a copy.",
          },
          {
            title: "Pick several",
            body: "Tick a few to drag, move or delete them together; one Undo restores them all.",
          },
          { title: "Tidy up", body: "Removes extra copies of an address, and empty folders, in one step." },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "Where your data goes.",
        items: [
          "On your computer, it remembers open folders, your last-picked folder, recently opened bookmarks to rank results, and the list last shown.",
          "With tab access, asked at your first save, it reads the current tab’s title and address, or every tab’s when saving all.",
          "Those addresses, and what you type after `b`, are never stored or sent. No servers, no analytics, no ads.",
          "Your bookmarks remain Chrome’s own; if Chrome Sync is on, it syncs them as usual.",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "FAQ",
        items: [
          {
            title: "How do I pick several bookmarks?",
            body: "Point at a bookmark’s icon and it turns into a checkbox. Tick it, or press Space. Clicking the bookmark itself still opens it. To pick a run, Shift-click a checkbox or press Shift + ↑ / ↓. ⌘/Ctrl + A picks everything in the folder, or every search result. Alt + ↑ / ↓ (Option on Mac) moves all ticked bookmarks together. To move them to another folder, press Alt + M or choose Move to… in the ⋯ menu, type the folder’s name and press Enter. One Undo puts everything back.",
          },
          {
            title: "Can I add a link without opening it?",
            body: "Yes. Drag a link from any page, or the address from the address bar, onto a folder or between bookmarks, and it is saved there with its link text. ⌘/Ctrl + V with addresses on the clipboard saves them into the selected folder. Links you already have aren’t added twice.",
          },
          {
            title: "How do I save a whole window?",
            body: "Press ⌘/Ctrl + Shift + D. Every tab goes into a new folder in Other bookmarks, named with the date and the number of tabs. Pages that can’t be bookmarked, such as `chrome://` pages, and repeated addresses are skipped. Change edits the new folder; Undo removes it. To save them somewhere else, choose “Save all tabs here” from that folder’s ⋯ menu; the same menu can open all of a folder’s bookmarks in a new window.",
          },
          {
            title: "Which languages does the panel speak?",
            body: "English, Simplified Chinese, Japanese and Traditional Chinese, in the panel, its menus and the address-bar hints. Chrome’s language decides; there is no switch.",
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
    lead: "在侧边栏或地址栏里，搜索、收藏和整理 Chrome 已有的书签。数据不发往任何外部服务器。",
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
    privacy: {
      network: "none",
      networkNote: "不发送任何数据：无服务器、分析服务或广告；开启 Chrome 同步时书签随之同步。",
      stays: "展开的文件夹、最近打开的书签和上次选的文件夹存在扩展的本地存储里。",
      policy: {
        label: "隐私政策",
        href: "/zh/easier-bookmarks/privacy/",
      },
    },
    meta: "Chrome 网上应用店 · 效率 · 5.0.0 · 无外部服务器",
    visual: {
      kind: "screenshot",
      label: "Easier Bookmarks",
      frame: "wide",
      image: {
        src: "/assets/easier-bookmarks-zh.webp",
        alt: "Easier Bookmarks 侧边栏：顶部是搜索框和星标按钮，书签栏下“工作”文件夹已展开，五个书签带网站图标，“阅读”和“旅行”收起，书签栏上另有三个书签，底部显示 14 个书签",
        width: 1140,
        height: 1980,
      },
      caption: "Easier Bookmarks 5.0.0 侧边栏；书签和网站图标为示例。",
      asOf: "v5.0.0",
    },
    showcases: [
      {
        src: "/assets/easier-bookmarks-search-zh.webp",
        alt: "侧边栏用全拼“jingdu”搜索，找到“京都行程规划”和“京都赏枫地图”，下面写着所在文件夹：书签栏 › 旅行",
        width: 1900,
        height: 1425,
        dark: { src: "/assets/easier-bookmarks-search-zh-dark.webp", width: 1900, height: 1425 },
        title: "打拼音也能搜到",
        body: "每个结果都写明所在文件夹；回车打开第一个。",
        caption: "Easier Bookmarks 5.0.0，用拼音“jingdu”搜索；书签为示例。",
        asOf: "v5.0.0",
      },
    ],
    sections: [
      {
        kind: "cards",
        id: "features",
        label: "直接用你已有的书签",
        items: [
          { title: "地址栏直接搜", body: "输入 `b` 加空格再打几个字，回车打开最匹配的书签。" },
          {
            title: "边输入边找到",
            body: "搜标题、网址、文件夹，认全拼、简繁和一处错字。",
          },
          { title: "一键收藏", body: "存进同一网站书签所在的文件夹，或你上次选的文件夹。" },
          { title: "认得当前页", body: "已收藏的页面星标是实心的；这时点它是编辑原书签，不会重复添加。" },
          { title: "一次处理一批", body: "勾选几项，一起拖动、移动或删除；撤销一次全部恢复。" },
          { title: "一键清理", body: "重复保存的网址和空文件夹，一步就能删掉。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        title: "数据的去向",
        items: [
          "本机只记下展开的文件夹、上次选的文件夹、最近打开的书签（用于搜索排序），以及上次显示的列表。",
          "第一次收藏时，如果你允许访问标签页，它会读取当前页的标题和网址；收藏全部标签页时则读取每一个。",
          "这些网址和你在 `b` 后输入的内容都不保存、不发送。没有服务器，没有分析服务，也没有广告。",
          "书签仍是 Chrome 自己的数据；开启 Chrome 同步时，照常同步。",
        ],
      },
      {
        kind: "faq",
        id: "faq",
        label: "常见问题",
        items: [
          {
            title: "怎么一次选中多个书签？",
            body: "鼠标移到书签图标上，它会变成复选框，勾选或按空格即可。单击书签本身仍是打开它。要连续选择，按住 Shift 单击复选框，或按 Shift + ↑ / ↓。⌘/Ctrl + A 选中文件夹里的全部书签或全部搜索结果。按 Alt + ↑ / ↓（Mac 上是 Option）把勾选的书签一起上下移动。要移到别的文件夹，按 Alt + M 或在 ⋯ 菜单里选“移动到…”，输入文件夹名后回车。撤销一次，全部回到原处。",
          },
          {
            title: "不打开网页也能收藏链接吗？",
            body: "能。把网页上的任意链接、或地址栏里的网址拖到文件夹上或两个书签之间，就会连同链接文字存在那里。剪贴板里有网址时，按 ⌘/Ctrl + V 会存进选中的文件夹。已经收藏过的链接不会重复添加。",
          },
          {
            title: "怎样收藏整个窗口？",
            body: "按 ⌘/Ctrl + Shift + D，每个标签页都存进“其他书签”里的一个新文件夹，名称是日期和标签页数量。`chrome://` 之类无法收藏的页面和重复的网址会跳过。点“更改”可以编辑这个文件夹，点“撤销”则删除它。想存到别处，就在那个文件夹的 ⋯ 菜单里选“把所有标签页存到这里”；同一个菜单也能在新窗口里打开文件夹内的全部书签。",
          },
          {
            title: "面板支持哪些语言？",
            body: "英文、简体中文、日文和繁体中文，面板、菜单和地址栏提示都有。由 Chrome 的语言决定，没有切换开关。",
          },
        ],
      },
    ],
  },
});
