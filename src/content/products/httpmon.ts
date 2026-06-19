import type { StorageCliProduct } from "../../lib/site";
import { httpmonFacts } from "../productFacts";
import { siteConfig } from "../siteConfig";

const httpmonMeta = `Go · ${httpmonFacts.licenseLabel ?? "MIT"} · local-only proxy · HTTP / HTTPS · HAR`;

export const httpmonProduct: StorageCliProduct = {
  slug: "httpmon",
  name: "httpmon",
  archetype: "storageCli",
  locales: {
    en: {
      title: "httpmon",
      description:
        "httpmon is a zero-config terminal inspector for HTTP and HTTPS traffic emitted by command-line tools.",
      eyebrow: "Go CLI",
      headline: "See CLI HTTP traffic",
      lead: "Wrap a command and inspect its HTTP or HTTPS requests in real time. No browser, GUI, or system proxy setup.",
      primaryCta: { label: "View on GitHub", href: siteConfig.externalLinks.httpmon },
      secondaryCta: { label: "Usage", href: siteConfig.externalLinks.httpmonQuickStart },
      meta: httpmonMeta,
      proof: ["Zero-config proxy", "HTTP / HTTPS / wss", "NDJSON / HAR", "Record / replay"],
      positioningLabel: "Positioning",
      positioning: [
        {
          title: "Use it when",
          body: "You need to see what curl, AWS CLI, Python, Node, or another command actually sends and receives over the network.",
          intent: "fit",
          surface: "cli",
          priority: "primary",
        },
        {
          title: "It is not",
          body: "It is not a system-wide proxy, a browser DevTools replacement, or a production interception service. It runs locally for one command.",
          intent: "boundary",
          surface: "protocol",
        },
        {
          title: "What remains unchanged",
          body: "Traffic is forwarded to the wrapped process unchanged. Compressed responses are decoded only for the displayed preview.",
          intent: "fit",
          surface: "protocol",
        },
      ],
      featuresLabel: "Capabilities",
      features: [
        {
          title: "Automatic proxy injection",
          body: "Injects proxy and CA settings for curl, AWS CLI, Python requests, Node, and standard proxy-aware tools without changing system configuration.",
          intent: "capability",
          surface: "cli",
        },
        {
          title: "Readable HTTPS capture",
          body: "A temporary CA and per-host certificates make request and response headers plus decoded gzip or deflate previews visible in the terminal.",
          intent: "capability",
          surface: "protocol",
        },
        {
          title: "Terminal UI and filters",
          body: "Use the full-screen TUI for live sessions, or filter by a URL substring to focus on the traffic that matters.",
          intent: "capability",
          surface: "cli",
        },
        {
          title: "Portable evidence",
          body: "Stream NDJSON, export HAR 1.2, or record complete request/response pairs for replay and environment comparisons.",
          intent: "evidence",
          surface: "artifact",
        },
      ],
      rationaleLabel: "Why it exists",
      rationaleTitle: "Network evidence belongs near the command",
      rationaleBody: [
        "When a CLI call fails, the useful evidence is often in the request that was sent and the response that came back. Reproducing that in a browser or reconfiguring a global proxy breaks the debugging flow.",
        "httpmon is deliberately narrow: wrap one command, observe its traffic, save the session when needed, and leave no system proxy behind.",
      ],
      workflowLabel: "Workflow",
      workflow: [
        {
          title: "Wrap a command",
          body: "Prefix an existing command, for example `httpmon curl https://api.github.com` or `httpmon aws s3 ls`.",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "Focus the session",
          body: "Add `--filter /api` for a focused text stream, or use `--ui` to inspect requests and responses interactively.",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "Save evidence",
          body: "Choose `--format json`, `--record traffic.ndjson`, or `--har session.har` when terminal output alone is not enough.",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "Replay when useful",
          body: "Replay a recording against the original target or another environment to compare status and response bodies.",
          intent: "workflow",
          surface: "protocol",
        },
      ],
      automationLabel: "Capture and export",
      automation: [
        {
          title: "NDJSON stream",
          body: "`--format json` emits correlated request and response objects for jq, log pipelines, or another tool.",
          intent: "automation",
          surface: "artifact",
        },
        {
          title: "HAR 1.2 export",
          body: "`--har` writes captured traffic for import into Chrome DevTools, Postman, Charles, and other HAR-aware tools.",
          intent: "automation",
          surface: "artifact",
        },
        {
          title: "Record and replay",
          body: "`--record` preserves request/response pairs; `--replay` reissues them and compares the new result.",
          intent: "automation",
          surface: "artifact",
        },
        {
          title: "WebSocket handshake",
          body: "`wss://` upgrade handshakes are logged, then frames are spliced between client and upstream without buffering.",
          intent: "automation",
          surface: "protocol",
        },
      ],
      examplesLabel: "Usage examples",
      examples: [
        {
          title: "Inspect an API call",
          body: "`httpmon curl https://api.github.com/users/octocat` shows the request, response, headers, and decoded body preview.",
          intent: "example",
          surface: "cli",
        },
        {
          title: "Watch S3 calls",
          body: "`httpmon --filter s3 aws s3 sync ./dist s3://my-bucket/` keeps the terminal focused on S3 traffic.",
          intent: "example",
          surface: "cli",
        },
        {
          title: "Compare environments",
          body: "Record a production-safe request sequence, then replay it against staging with `--replay-target`.",
          intent: "example",
          surface: "artifact",
        },
      ],
      casesLabel: "Works with",
      casesTitle: "Commands that speak HTTP",
      casesBody:
        "httpmon configures common clients directly and provides standard proxy environment variables for other proxy-aware command-line tools.",
      cases: ["curl", "AWS CLI", "Python requests", "Node.js", "HTTP_PROXY tools", "wss:// clients"],
      finalCta: "Inspect the next request",
      finalCtaLabel: "Open repository",
      faqLabel: "Questions & how-to",
      faq: [
        {
          title: "Does it modify my system proxy settings?",
          body: "No. Proxy and CA settings are passed only to the wrapped subprocess. The temporary materials are cleaned up when that command exits.",
        },
        {
          title: "What does it show for compressed responses?",
          body: "gzip and deflate bodies are decompressed for the terminal preview. The original compressed stream continues to the wrapped command unchanged.",
        },
        {
          title: "Is it intended for production interception?",
          body: "No. httpmon is a local development and debugging tool. Only inspect traffic you own or are authorized to inspect.",
        },
      ],
    },
    zh: {
      title: "httpmon",
      description: "httpmon 是一个零配置的终端 HTTP/HTTPS 请求查看工具，用于排查命令行程序发出的请求和收到的响应。",
      eyebrow: "Go CLI",
      headline: "看清命令发出的请求",
      lead: "在原命令前加上 httpmon，实时查看 HTTP/HTTPS 请求和响应。无需浏览器，也不用配置系统代理。",
      primaryCta: { label: "查看 GitHub", href: siteConfig.externalLinks.httpmon },
      secondaryCta: { label: "使用方法", href: siteConfig.externalLinks.httpmonQuickStart },
      meta: httpmonMeta,
      proof: ["零配置代理", "HTTP / HTTPS / wss", "NDJSON / HAR", "录制 / 回放"],
      positioningLabel: "边界",
      positioning: [
        {
          title: "什么时候用",
          body: "想确认 curl、AWS CLI、Python、Node 或其他命令究竟发出了什么请求、收到了什么响应时。",
          intent: "fit",
          surface: "cli",
          priority: "primary",
        },
        {
          title: "它不是什么",
          body: "它不是系统级代理，也不替代浏览器 DevTools，更不是生产抓包服务。它只服务于当前这一条本地命令。",
          intent: "boundary",
          surface: "protocol",
        },
        {
          title: "什么不会变",
          body: "原始流量照常转发给子进程。gzip 和 deflate 只会为终端预览解压，不会改写传给命令的响应。",
          intent: "fit",
          surface: "protocol",
        },
      ],
      featuresLabel: "能力",
      features: [
        {
          title: "自动注入代理",
          body: "为 curl、AWS CLI、Python requests、Node 和常见的代理感知工具注入代理与 CA 配置，不改动系统设置。",
          intent: "capability",
          surface: "cli",
        },
        {
          title: "终端里看 HTTPS",
          body: "临时 CA 和按域名签发的证书，让请求/响应头以及 gzip、deflate 解压后的响应体预览直接显示在终端。",
          intent: "capability",
          surface: "protocol",
        },
        {
          title: "终端界面与过滤",
          body: "实时会话可切到全屏 TUI，也可按 URL 片段过滤，只看关心的请求。",
          intent: "capability",
          surface: "cli",
        },
        {
          title: "保存排查现场",
          body: "可输出 NDJSON、导出 HAR 1.2，或录制完整请求/响应，用于回放和环境对比。",
          intent: "evidence",
          surface: "artifact",
        },
      ],
      rationaleLabel: "为什么做",
      rationaleTitle: "排查网络，不该离开终端",
      rationaleBody: [
        "命令失败时，关键线索往往藏在实际发出的请求和收到的响应里。为了看它们而切到浏览器，或改全局代理，都会打断排查。",
        "httpmon 的范围很小：只包一层命令，显示请求和响应；需要时保存现场；结束后不在系统里留下代理配置。",
      ],
      workflowLabel: "怎么用",
      workflow: [
        {
          title: "运行原命令",
          body: "在原命令前加上 `httpmon`，例如 `httpmon curl https://api.github.com` 或 `httpmon aws s3 ls`。",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "聚焦请求",
          body: "用 `--filter /api` 缩小输出范围；想交互查看请求和响应时，使用 `--ui`。",
          intent: "workflow",
          surface: "cli",
        },
        {
          title: "保存现场",
          body: "终端输出不够时，可用 `--format json`、`--record traffic.ndjson` 或 `--har session.har` 保存记录。",
          intent: "workflow",
          surface: "artifact",
        },
        {
          title: "回放请求",
          body: "把录制文件回放到原服务或另一套环境，比较状态码和响应体。",
          intent: "workflow",
          surface: "protocol",
        },
      ],
      automationLabel: "记录与导出",
      automation: [
        {
          title: "NDJSON 输出",
          body: "`--format json` 输出已关联的请求和响应，可交给 jq、日志管道或其他工具继续处理。",
          intent: "automation",
          surface: "artifact",
        },
        {
          title: "导出 HAR",
          body: "`--har` 写出捕获结果，可导入 Chrome DevTools、Postman、Charles 等支持 HAR 的工具。",
          intent: "automation",
          surface: "artifact",
        },
        {
          title: "录制和回放",
          body: "`--record` 保存请求与响应；`--replay` 重新发起请求，再比较新的结果。",
          intent: "automation",
          surface: "artifact",
        },
        {
          title: "WebSocket 握手",
          body: "记录 `wss://` 升级握手，之后在客户端和上游之间直接转发帧，不做缓冲。",
          intent: "automation",
          surface: "protocol",
        },
      ],
      examplesLabel: "用法示例",
      examples: [
        {
          title: "查看 API 调用",
          body: "`httpmon curl https://api.github.com/users/octocat` 会显示请求、响应、请求头和解压后的响应体预览。",
          intent: "example",
          surface: "cli",
        },
        {
          title: "筛出 S3 请求",
          body: "`httpmon --filter s3 aws s3 sync ./dist s3://example-store/` 让终端只显示 S3 相关请求。",
          intent: "example",
          surface: "cli",
        },
        {
          title: "对比不同环境",
          body: "录制一段可安全复现的请求，再用 `--replay-target` 回放到 staging。",
          intent: "example",
          surface: "artifact",
        },
      ],
      casesLabel: "适用范围",
      casesTitle: "能通过代理访问 HTTP 的命令",
      casesBody: "httpmon 会直接配置常见客户端；对其他支持代理的命令行工具，则提供标准代理环境变量。",
      cases: ["curl", "AWS CLI", "Python requests", "Node.js", "HTTP_PROXY 工具", "wss:// 客户端"],
      finalCta: "从下一条请求开始",
      finalCtaLabel: "打开仓库",
      faqLabel: "常见问题",
      faq: [
        {
          title: "会改系统代理设置吗？",
          body: "不会。代理和 CA 设置只会传给被包装的子进程。命令退出时，临时内容会一起清理。",
        },
        {
          title: "压缩响应怎么显示？",
          body: "gzip 和 deflate 会为终端预览解压。传给原命令的仍是未改写的压缩字节流。",
        },
        {
          title: "适合在生产环境抓包吗？",
          body: "不适合。httpmon 用于本地开发和排查。只应检查自己拥有或明确获授权查看的流量。",
        },
      ],
    },
  },
};
