# events
- 用途：Build A Ring Farm events hub，承接 Carnival Pass Tickets、weather events、gameplay event 和 update mechanic 线索。
- 关键入口：`page.tsx`
- 边界/依赖：Carnival Pass Tickets 只作为 CARNIVAL code reported reward lead，不确认 event mechanics、ticket shop、odds 或 calculator preset。
> 一旦本目录内容变化，请更新本文件

## Files
- README.md：本目录说明
- page.tsx：`/events/` 页面，包含 Carnival Pass Tickets source boundary、事件分流表、2026-06-20 复核日期、YouTube no-cookie reference 和 FAQ
