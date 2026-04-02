# 快速开始

本指南将帮助你快速上手 Ares Docs 文档站点。

## 环境要求

- Node.js 20 或更高版本
- npm、pnpm、yarn 或 bun 包管理器

## 本地开发

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

开发服务器将在 `http://localhost:5173` 启动。

### 3. 构建生产版本

```bash
npm run build
```

构建产物将生成在 `docs/.vitepress/dist` 目录。

### 4. 预览构建结果

```bash
npm run preview
```

## 项目结构

```
ares-static-docs/
├── docs/
│   ├── .vitepress/
│   │   └── config.mts      # VitePress 配置文件
│   ├── guide/
│   │   ├── index.md        # 指南首页
│   │   └── getting-started.md
│   ├── api/
│   │   └── index.md        # API 文档首页
│   └── index.md            # 站点首页
├── package.json
└── .gitignore
```

## 部署到 Vercel

本项目已配置好 Vercel 部署，只需：

1. 将代码推送到 GitHub 仓库
2. 在 Vercel 中导入该项目
3. Vercel 会自动检测 VitePress 项目并配置构建设置
4. 点击部署即可

## 自定义配置

### 修改站点信息

编辑 `docs/.vitepress/config.mts` 文件：

```typescript
export default defineConfig({
  title: "你的站点标题",
  description: "你的站点描述",
  // ... 其他配置
})
```

### 添加新页面

1. 在 `docs` 目录下创建新的 `.md` 文件
2. 在配置文件的 `nav` 和 `sidebar` 中添加相应链接

## 下一步

- 探索 [VitePress 官方文档](https://vitepress.dev/)
- 自定义主题和样式
- 添加更多文档内容
