# 下版本迭代模拟图（MOCKUP ONLY，不合并）

分支 `cursor/iteration-mockup-b8da` 上的临时实现，用真实构建 + Playwright 截图。
所有改动都标了 `MOCKUP ONLY` 注释，正式实现时要移到 `src/content/` 模型 + CI 断言里。

## 图

- `home-en-desktop.png` — Home 新增「Which storage tool」决策条（P0）+ header `Search` 文本入口（P2）
- `home-zh-desktop.png` — 中文版同上（「存储选哪个」+「搜索」）
- `storage-agent-en-desktop.png` — 产品页 hero 新增活证据行 `v1.17.3 · released 12 days ago · Release notes →`（P1）
- `home-en-mobile.png` — 移动端：决策行上下堆叠，搜索入口隐藏（待定）
- `storage-agent-en-mobile.png` — 移动端产品页：release 行按段换行，无溢出

## 设计约束（评审用）

- 零新 token，全部复用 `tokens.css`（`--rule`/`--line`/`--title-section`/`--text-*`/`--data-ref-ink`/`--muted`）
- 决策条 = 文本 hairline 列表，不做对比矩阵卡片；header 搜索 = 文本样式，和语言/主题控件同语言
- release 行复用 `meta-line` 的 `·` 分隔与「段内不拆」换行规则
