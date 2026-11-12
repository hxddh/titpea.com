import { defineProduct } from "../schema";

export default defineProduct({
  slug: "httpmon",
  line: "storage",
  type: "cli",
  repo: "hxddh/https-traffic-inspector",
  icon: "/assets/icons/httpmon.webp",
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
    lead: "Put httpmon in front of a command that can use a proxy, like curl, to watch its HTTP traffic live. Responses reach it unchanged.",
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
    privacy: {
      network: "onRequest",
      networkNote:
        "Relays only the wrapped command’s own requests, and replays only when you ask; no update check, no telemetry.",
      stays: "Traffic shows in your terminal, saved only to a file you name; the temporary CA key never touches disk.",
    },
    meta: "Go · MIT · {version} · local proxy · HTTP / HTTPS / HTTP/2 / gRPC / WebSocket · NDJSON / HAR",
    releaseHighlights: {
      version: "v1.4.1",
      items: [
        "Fixed a bug that could make a request go missing from the output, the `--record` file and the HAR file.",
        "On exit, httpmon waits up to 3 seconds for requests still in flight, so the command’s last request is logged before the HAR file is written.",
        "Traffic that is not HTTP, such as SSH, MySQL or Redis, now passes through a proxy tunnel uninspected instead of breaking.",
      ],
    },
    commands: {
      title: "Get started",
      sub: "`go install` needs Go 1.24+ and names the program `https-traffic-inspector`; rename it to `httpmon` to run the examples. Or download a ready-built `httpmon` binary from GitHub Releases.",
      items: [
        {
          comment: "Install with Go",
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
      kicker: "httpmon v1.4.1 · captured output",
      status: "captured",
      requestLabel: "REQUEST #1",
      requestMeta: "Host: proxy.golang.org · Accept: */* · User-Agent: curl/8.5.0",
      responseLabel: "RESPONSE #1",
      response: "HTTP/2.0 200 OK (3.21s)",
      responseMeta: "Content-Type: text/plain; charset=UTF-8 · Content-Length: 91",
      body: "v1.3.0 v1.0.2 v1.0.0 v1.1.1 v1.4.1 …",
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
        label: "It shows each request and response in your terminal.",
        items: [
          {
            title: "Request and response",
            body: "Method, URL, headers, status and timing; compressed bodies are unpacked for display only.",
          },
          {
            title: "WebSocket too",
            body: "For `wss://` and `ws://`, the handshake is logged and frames pass through both ways.",
          },
          {
            title: "HTTP/2 and gRPC",
            body: "Trailers, the headers sent after a body, pass through; gRPC calls show their status.",
          },
          {
            title: "Start locally",
            body: "By default it listens only on `127.0.0.1`; your system proxy is never changed.",
          },
          {
            title: "Only that command",
            body: "The proxy address and a temporary certificate authority (CA) are set for that command alone.",
          },
          {
            title: "Save when needed",
            body: "NDJSON output, a HAR (HTTP Archive) 1.2 file or a recording, to replay or share.",
          },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "Your data",
        title: "Where your data goes.",
        items: [
          "httpmon sends nothing of its own: it relays the wrapped command’s traffic, and `--replay` re-sends recordings only when you ask.",
          "The CA lives for one run: its private key never touches disk, and the temporary CA bundle is deleted on exit.",
          "Captures stay in your terminal unless you pass `--record` or `--har`; those files can hold credentials, so treat them as sensitive.",
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
            body: "curl, aws, Python, Node, or any other proxy-aware command. Only that child process gets the proxy address and temporary CA; your system proxy and global network settings stay as they are. Go programs skip the proxy for loopback targets, Node’s built-in `fetch` needs Node 22.21 or 24, and JVM tools are not configured automatically.",
          },
          {
            title: "Does it handle HTTPS, HTTP/2, and WebSocket?",
            body: "Yes. HTTPS is decrypted locally. HTTP/2 is negotiated with the command and the upstream separately; gRPC calls show their status from the trailers, and their bodies are summarised, not decoded. For `wss://` and `ws://` the upgrade handshake is logged, then frames are spliced in both directions.",
          },
          {
            title: "Can recordings hold secrets?",
            body: "Yes. Headers, cookies, query parameters, and response bodies may contain credentials or business data. Capture and replay only in authorized environments, and handle NDJSON, HAR, and recording files as sensitive logs.",
          },
          {
            title: "Does it diagnose storage errors?",
            body: "No. httpmon shows the traffic and leaves the judgment to you. To diagnose S3-compatible storage errors in Pi, the open-source terminal coding agent, use StorageOps, which captures traces through httpmon.",
            link: {
              label: "Open StorageOps",
              href: "/storageops/",
            },
          },
        ],
      },
    ],
  },
  zh: {
    title: "httpmon",
    description: "在终端查看一条命令发出的 HTTP/HTTPS 请求与响应。",
    eyebrow: "Go CLI",
    headline: "看清命令的 HTTP 流量",
    lead: "把 httpmon 放在一条能走代理的命令前面（比如 curl），实时查看它的 HTTP 流量。命令收到的响应保持原样。",
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
    privacy: {
      network: "onRequest",
      networkNote: "只转发被包裹命令自己的请求，只在你要求时重放；不检查更新，没有遥测。",
      stays: "流量只显示在终端，只有你指定文件时才保存；临时 CA 私钥从不写入磁盘。",
    },
    meta: "Go · MIT · {version} · 本地代理 · HTTP / HTTPS / HTTP/2 / gRPC / WebSocket · NDJSON / HAR",
    releaseHighlights: {
      version: "v1.4.1",
      items: [
        "修复了一个问题：某个请求可能从输出、`--record` 文件和 HAR 文件里漏掉。",
        "退出时，httpmon 会等待仍在传输的请求最多 3 秒，确保命令的最后一个请求在写 HAR 文件前记录下来。",
        "不是 HTTP 的流量，比如 SSH、MySQL 或 Redis，现在经代理隧道原样转发，不再中断。",
      ],
    },
    commands: {
      title: "开始使用",
      sub: "`go install` 需要 Go 1.24+，装好的程序名为 `https-traffic-inspector`，改名为 `httpmon` 才能照下面的示例运行。也可以从 GitHub Releases 下载预编译的 `httpmon` 二进制文件。",
      items: [
        {
          comment: "用 Go 安装",
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
      kicker: "httpmon v1.4.1 · 实际输出",
      status: "已捕获",
      requestLabel: "REQUEST #1",
      requestMeta: "Host: proxy.golang.org · Accept: */* · User-Agent: curl/8.5.0",
      responseLabel: "RESPONSE #1",
      response: "HTTP/2.0 200 OK (3.21s)",
      responseMeta: "Content-Type: text/plain; charset=UTF-8 · Content-Length: 91",
      body: "v1.3.0 v1.0.2 v1.0.0 v1.1.1 v1.4.1 …",
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
        label: "在终端里看每个请求和响应",
        items: [
          { title: "请求和响应", body: "方法、URL、请求头与响应头、状态码和耗时；压缩内容解压仅用于显示。" },
          { title: "也看 WebSocket", body: "`wss://` 和 `ws://` 会记录握手，之后的帧双向照常转发。" },
          { title: "HTTP/2 与 gRPC", body: "响应末尾的头字段（trailers）原样转发，gRPC 调用会显示状态。" },
          { title: "本地启动", body: "默认只监听 `127.0.0.1`，系统代理设置不会改动。" },
          { title: "只影响这条命令", body: "代理地址和临时 CA（证书颁发机构）只设在这条命令的环境变量里。" },
          { title: "按需留存", body: "NDJSON 输出、HAR（HTTP 存档）1.2 文件或录制文件，用来回放或分享。" },
        ],
      },
      {
        kind: "data",
        id: "data",
        nav: "数据去向",
        title: "数据的去向",
        items: [
          "httpmon 自己不发请求：它只转发被包裹命令的流量；`--replay` 只在你运行时重发录制的请求。",
          "CA 只在一次运行中存在：私钥从不写入磁盘，临时 CA 证书包在退出时删除。",
          "抓到的流量只显示在终端，除非你加 `--record` 或 `--har`；这些文件可能含凭据，请当作敏感日志保管。",
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
            body: "curl、aws、Python、Node 或其他支持代理的命令。只有这个子进程拿到代理地址和临时 CA，系统代理和全局网络设置保持不变。Go 程序访问本机回环地址时不走代理；Node 内置的 `fetch` 需要 Node 22.21 或 24；JVM 工具不会自动配置。",
          },
          {
            title: "支持 HTTPS、HTTP/2 和 WebSocket 吗？",
            body: "支持。HTTPS 在本地解密查看。HTTP/2 与命令和上游分别协商；gRPC 调用会从 trailers 解出状态，消息体只做摘要，不解码。`wss://` 和 `ws://` 会记录升级握手，之后帧在两端之间直接转发。",
          },
          {
            title: "录制会含敏感信息吗？",
            body: "会。请求头、Cookie、查询参数和响应体可能含有凭据或业务数据。请只在获授权环境采集与回放，并把 NDJSON、HAR 和录制文件按敏感日志保存。",
          },
          {
            title: "它能诊断存储故障吗？",
            body: "不能。httpmon 只展示流量，判断交给你。想在开源终端编码 Agent Pi 里诊断 S3 兼容存储的故障，请用 StorageOps，它会经 httpmon 采集 trace。",
            link: {
              label: "打开 StorageOps",
              href: "/zh/storageops/",
            },
          },
        ],
      },
    ],
  },
});
