# Subsentry Launch Checklist

## Pre-Launch Status
- [x] MVP 完成（首页、仪表盘、模拟数据、重复检测与节省计算器）
- [x] GitHub 仓库推送完成
- [x] 文档完整（README、LICENSE、CHANGELOG、CONTRIBUTING、DEVLOG）
- [x] 营销文案准备好（3 套 Reddit 发布文案 + 常见问答）
- [x] 产品占位截图生成

## Launch Tasks

### Phase 1: Deployment
- [ ] 完成 Vercel 部署
  - [ ] 登录 Vercel Dashboard
  - [ ] 从 GitHub 导入 `raye-deng/subsentry`
  - [ ] 配置构建设置（Next.js 14 + TypeScript）
  - [ ] 部署并获取生产 URL
  - [ ] 测试生产环境功能

### Phase 2: Assets Preparation
- [ ] 生成高质量产品截图
  - [ ] 首页截图（大屏 + 移动端）
  - [ ] 仪表盘截图（大屏 + 移动端）
  - [ ] 重复检测流程截图
  - [ ] 重复订阅详情弹窗截图
  - [ ] 操作确认对话框截图
  - [ ] 上传到 Imgur 或 GitHub

### Phase 3: Quality Assurance
- [ ] 功能测试
  - [ ] 首页导航到仪表盘
  - [ ] 重复订阅检测（模拟数据）
  - [ ] 节省金额计算
  - [ ] 取消订阅操作
  - [ ] 合并订阅操作
  - [ ] 移动端响应式测试

### Phase 4: Marketing Materials
- [ ] 更新营销素材
  - [ ] 在 Reddit 文案中替换截图链接
  - [ ] 准备常见问答回复模板
  - [ ] 准备反馈收集方式

### Phase 5: Launch
- [ ] 发布时机
  - [ ] 选择最佳发布时间（根据目标用户活跃时间）
  - [ ] 发布到 r/smallbusiness
  - [ ] 发布到 r/SaaS
  - [ ] 发布到 r/Entrepreneur
  - [ ] 发布到 IndieHackers（Showcase）

### Phase 6: Post-Launch
- [ ] 监控反馈
  - [ ] 跟踪 Reddit 评论
  - [ ] 回复常见问题
  - [ ] 收集功能建议
  - [ ] 分析用户反馈

## Quick Reference

### Repository
- GitHub: https://github.com/raye-deng/subsentry
- Vercel 部署指南: https://vercel.com/docs/deployments/overview
- Vercel Next.js 部署: https://vercel.com/docs/frameworks/next-js

### Marketing Copy Locations
- Reddit 文案: `/Users/raye.deng/Documents/wss/subsentry/marketing/reddit-post-smallbusiness.md`
- 常见问答: `/Users/raye.deng/Documents/wss/subsentry/marketing/reddit-replies.md`

### Key Features
- 🎯 重复订阅检测（识别相同价格和计费周期的订阅）
- 💰 节省金额计算（合并后可节省的月度/年度金额）
- 🚀 快速操作（一键取消或合并重复订阅）
- 📱 响应式设计（桌面和移动设备均可使用）

## Timeline
- **目标**: 2026-02-05 08:00 GMT+8 前完成准备
- **发布**: 08:00 后开始 Reddit 发布
- **监控**: 发布后 24-48 小时跟踪反馈
