import { defineProduct } from "../schema";

export default defineProduct({
  slug: "httpmon",
  line: "storage",
  repo: "hxddh/https-traffic-inspector",
  og: "/assets/og-httpmon.png",
  schema: {
    category: "DeveloperApplication",
    os: "Cross-platform",
  },
  sectionIndex: true,
  en: {
    title: "httpmon",
    description: "A terminal inspector for the HTTP and HTTPS traffic from one CLI command.",
    eyebrow: "Go CLI",
    headline: "See the HTTP traffic.",
    lead: "Wrap a proxy-aware command. Read its traffic live. Response unchanged.",
    catalog: {
      role: "",
      text: "See what a command actually sent.",
    },
    primaryCta: {
      label: "View on GitHub",
      href: "https://github.com/hxddh/https-traffic-inspector",
    },
    secondaryCta: {
      label: "Usage",
      href: "https://github.com/hxddh/https-traffic-inspector#usage",
    },
    meta: "Go · MIT · {version} · local proxy · HTTP / HTTPS / wss handshake · NDJSON / HAR",
    commands: {
      title: "Get started",
      sub: "Requires Go 1.24+. Pre-built binaries are on the Releases page.",
      items: [
        {
          comment: "Install",
          command: "go install github.com/hxddh/https-traffic-inspector@latest",
        },
        {
          comment: "Wrap a command and watch its traffic",
          command: "httpmon curl https://api.github.com/users/octocat",
        },
      ],
    },
    visual: {
      kind: "httpTerminal",
      label: "httpmon",
      kicker: "httpmon v1.2.1 · captured output",
      status: "captured",
      requestLabel: "REQUEST #1",
      requestMeta: "Host: proxy.golang.org · Accept: */* · User-Agent: curl/8.5.0",
      responseLabel: "RESPONSE",
      response: "HTTP/1.1 200 OK",
      responseMeta: "Content-Type: text/plain; charset=UTF-8 · Content-Length: 63",
      body: "v1.0.2 v1.0.0 v1.1.1 …",
      footnotes: ["local HTTPS inspection", "original response stream stays with the command"],
      command: "httpmon curl -sS https://proxy.golang.org/github.com/hxddh/https-traffic-inspector/@v/list",
      method: "GET",
      url: "https://proxy.golang.org:443/github.com/hxddh/https-traffic-inspector/@v/list",
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "Features",
        label: "The traffic, beside the command.",
        items: [
          { title: "Request and response", body: "Method, URL, headers, status, timing." },
          { title: "Decoded preview", body: "Decompressed for httpmon’s display only." },
          { title: "Original stream", body: "The command gets its response unchanged." },
          { title: "Filter", body: "`--filter` by URL or host." },
          { title: "NDJSON and HAR", body: "NDJSON for commands, HAR 1.2 for inspectors." },
          { title: "Record and replay", body: "Replay an authorized session, original or comparison target." },
        ],
      },
      {
        kind: "flow",
        id: "how",
        nav: "How it works",
        kicker: "One command, one local layer",
        title: "Only the wrapped process is configured.",
        body: "A local MITM proxy gives its address and a temporary CA to one child process.",
        steps: [
          { label: "Start locally", body: "Put `httpmon` before a proxy-aware command. No system proxy changes." },
          { label: "Configure one child", body: "Proxy address and ephemeral CA live in that command’s environment." },
          { label: "Forward and display", body: "The command gets its stream; httpmon shows headers, status, timing." },
          { label: "Save when needed", body: "NDJSON, HAR, or a recording, to replay or share." },
        ],
      },
      {
        kind: "faq",
        id: "faq",
        nav: "FAQ",
        label: "FAQ",
        items: [
          {
            title: "Which commands can it wrap?",
            body: "curl, aws, Python, Node, or any other proxy-aware command. Only that child process gets the proxy address and temporary CA; your system proxy and global network settings stay as they are.",
          },
          {
            title: "Does it handle HTTPS and wss?",
            body: "It handles HTTPS and captures the `wss://` upgrade handshake. After the 101 response, WebSocket frames are spliced in both directions.",
          },
          {
            title: "Can recordings hold secrets?",
            body: "Yes. Headers, cookies, query parameters, and response bodies may contain credentials or business data. Capture and replay only in authorized environments, and handle NDJSON, HAR, and recording files as sensitive logs.",
          },
          {
            title: "What if the logs are already in Pi?",
            body: "When those logs and traces are already in a Pi chat, diagnose them with StorageOps.",
          },
        ],
      },
    ],
    finalCta: "Open repository",
  },
  zh: {
    title: "httpmon",
    description: "在终端查看一条命令发出的 HTTP/HTTPS 请求与响应。",
    eyebrow: "Go CLI",
    headline: "看这条命令发了什么请求",
    lead: "包住支持代理的命令。实时看请求和响应。原始响应不变。",
    catalog: {
      role: "",
      text: "看这条命令实际发出的请求。",
    },
    primaryCta: {
      label: "查看 GitHub",
      href: "https://github.com/hxddh/https-traffic-inspector",
    },
    secondaryCta: {
      label: "使用方法",
      href: "https://github.com/hxddh/https-traffic-inspector#usage",
    },
    meta: "Go · MIT · {version} · local proxy · HTTP / HTTPS / wss handshake · NDJSON / HAR",
    commands: {
      title: "开始使用",
      sub: "需要 Go 1.24+。Releases 页面也有预编译二进制。",
      items: [
        {
          comment: "安装",
          command: "go install github.com/hxddh/https-traffic-inspector@latest",
        },
        {
          comment: "包住一条命令，看它的流量",
          command: "httpmon curl https://api.github.com/users/octocat",
        },
      ],
    },
    visual: {
      kind: "httpTerminal",
      label: "httpmon",
      kicker: "httpmon v1.2.1 · 实际输出",
      status: "已捕获",
      requestLabel: "REQUEST #1",
      requestMeta: "Host: proxy.golang.org · Accept: */* · User-Agent: curl/8.5.0",
      responseLabel: "RESPONSE",
      response: "HTTP/1.1 200 OK",
      responseMeta: "Content-Type: text/plain; charset=UTF-8 · Content-Length: 63",
      body: "v1.0.2 v1.0.0 v1.1.1 …",
      footnotes: ["HTTPS 只在本地解密查看", "原始响应流继续交给命令"],
      command: "httpmon curl -sS https://proxy.golang.org/github.com/hxddh/https-traffic-inspector/@v/list",
      method: "GET",
      url: "https://proxy.golang.org:443/github.com/hxddh/https-traffic-inspector/@v/list",
    },
    sections: [
      {
        kind: "cards",
        id: "features",
        nav: "功能",
        label: "流量就在命令旁边",
        items: [
          { title: "请求和响应", body: "方法、URL、头、状态码、耗时。" },
          { title: "解压预览", body: "只为 httpmon 的显示而解压。" },
          { title: "原始响应流", body: "命令收到的响应原样不动。" },
          { title: "筛选", body: "用 `--filter` 按 URL 或域名筛。" },
          { title: "NDJSON 与 HAR", body: "NDJSON 给命令，HAR 1.2 给检查工具。" },
          { title: "录制和回放", body: "回放已获授权的会话，到原端点或对比环境。" },
        ],
      },
      {
        kind: "flow",
        id: "how",
        nav: "工作方式",
        kicker: "一条命令，一层本地观察",
        title: "只配置被包住的这条命令",
        body: "本地 MITM 代理把地址和临时 CA 交给一个子进程。",
        steps: [
          { label: "本地启动", body: "在支持代理的命令前加 `httpmon`，系统代理不变。" },
          { label: "只配子进程", body: "代理地址和临时 CA 只在这条命令的环境变量里。" },
          { label: "转发并显示", body: "命令照常收到响应，终端显示请求头、状态码和耗时。" },
          { label: "按需留存", body: "要复查或分享时，导出 NDJSON、HAR 或录制文件。" },
        ],
      },
      {
        kind: "faq",
        id: "faq",
        nav: "常见问题",
        label: "常见问题",
        items: [
          {
            title: "能包住哪些命令？",
            body: "curl、aws、Python、Node 或其他支持代理的命令。只有这个子进程拿到代理地址和临时 CA，系统代理和全局网络设置保持不变。",
          },
          {
            title: "支持 HTTPS 和 wss 吗？",
            body: "支持 HTTPS，也会记录 `wss://` 的升级握手。收到 101 响应后，WebSocket 帧会在两端之间直接转发。",
          },
          {
            title: "录制会含敏感信息吗？",
            body: "会。请求头、Cookie、查询参数和响应体可能含有凭据或业务数据。请只在获授权环境采集与回放，并把 NDJSON、HAR 和录制文件按敏感日志保存。",
          },
          {
            title: "日志已经在 Pi 里了怎么办？",
            body: "日志和 trace 已经在 Pi 的聊天里时，用 StorageOps 排查。",
          },
        ],
      },
    ],
    finalCta: "打开仓库",
  },
});
