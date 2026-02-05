#!/bin/bash

# Subsentry 自动部署到 GitHub Pages

echo "🚀 开始部署 Subsentry 到 GitHub Pages..."

# 1. 清理旧的构建文件
echo "📁 清理旧的构建文件..."
rm -rf .next/out
rm -rf out

# 2. 构建项目
echo "🔨 构建 Next.js 项目..."
npm run build

# 3. 创建 gh-pages 分支
echo "🌿 创建 gh-pages 分支..."
git checkout --orphan gh-pages
git reset --hard

# 4. 复制构建文件
echo "📦 复制构建文件..."
cp -r out/* .
rm -rf .next out src app node_modules

# 5. 提交并推送
echo "📤 提交并推送到 gh-pages..."
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages --force

# 6. 返回 main 分支
echo "↩️  返回 main 分支..."
git checkout main

echo "✅ 部署完成！"
echo "📄 网站将在 https://raye-deng.github.io/subsentry/ 上线"
echo "⚠️  如果还没有启用 GitHub Pages，请在仓库设置中启用："
echo "   Settings -> Pages -> Source 选择 gh-pages 分支"
