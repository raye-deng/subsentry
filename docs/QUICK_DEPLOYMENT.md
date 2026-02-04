# 快速部署指南 - Subsentry to Vercel

## 方案 A：Vercel Dashboard（推荐，最简单）

**时间**：5-10 分钟

### 步骤 1：访问 Vercel
```
https://vercel.com/new
```

### 步骤 2：导入项目
1. 点击 "Import Git Repository"
2. 搜索并选择 `raye-deng/subsentry`
3. 点击 "Import"

### 步骤 3：配置构建设置
Vercel 会自动识别 Next.js 项目，默认配置即可：
- **Framework Preset**: Next.js
- **Root Directory**: `.`
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

### 步骤 4：部署
1. 点击 "Deploy"
2. 等待 1-2 分钟
3. 部署完成后，访问生产 URL（通常是 `https://subsentry.vercel.app`）

### 步骤 5：验证
- 访问首页
- 点击"开始使用"
- 添加测试订阅
- 确认所有功能正常

---

## 方案 B：Vercel CLI

**时间**：5-10 分钟

### 步骤 1：安装 Vercel CLI（如果未安装）
```bash
npm i -g vercel
```

### 步骤 2：登录 Vercel
```bash
cd /Users/raye.deng/Documents/wss/subsentry
vercel login
```

按提示操作：
1. 选择登录方式（推荐 GitHub）
2. 访问 OAuth 链接并授权
3. 等待认证完成

### 步骤 3：部署项目
```bash
vercel
```

按提示操作：
- Set up and deploy: `Y`
- Which scope: 选择你的账户
- Link to existing project: `N`
- Project name: `subsentry`
- Directory: `.` (当前目录)
- Override settings: `N` (使用默认)

### 步骤 4：确认部署
- 等待 1-2 分钟
- 查看部署 URL
- 访问并测试功能

---

## 部署后检查清单

- [ ] 首页加载正常
- [ ] 首页 → 仪表盘导航正常
- [ ] 添加订阅功能正常
- [ ] 重复订阅检测正常
- [ ] 节省金额计算正确
- [ ] 取消/合并操作正常
- [ ] 移动端响应式正常

---

## 常见问题

### Q: 部署失败怎么办？
**A**: 检查以下几点：
1. 确认 `package.json` 中的 scripts 正确
2. 确认 `npm run build` 在本地成功
3. 查看 Vercel 部署日志
4. 检查环境变量（目前不需要）

### Q: 自定义域名？
**A**:
1. 在 Vercel 项目设置中添加域名
2. 配置 DNS 记录
3. 等待 SSL 证书生成（自动）

### Q: 如何更新部署？
**A**:
- 每次推送到 GitHub，Vercel 会自动触发部署
- 或者在 Vercel Dashboard 点击 "Redeploy"

---

## 联系支持

如果遇到问题：
- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

---

**现在开始部署吧！** 🚀
