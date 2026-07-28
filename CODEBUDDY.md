# CODEBUDDY.md This file provides guidance to CodeBuddy when working with code in this repository.

## Project Overview

This is the documentation site for **无极助手 (Wuji Assistant)**, a game automation tool for the MMORPG "天龙八部" (TLBB/Dragon Oath). The site is built with **VitePress** (v1.6.3) and hosted on **Vercel**. It provides user guides, feature documentation, FAQ, and changelogs for the Wuji Assistant application — an image-recognition-based key-press automation tool.

The content is entirely in **Simplified Chinese (zh-CN)**. The project uses **pnpm** as the package manager.

## Common Commands

```bash
# Install dependencies
pnpm install

# Start local development server with hot-reload
pnpm dev

# Build static site for production
pnpm build

# Preview the production build locally
pnpm preview
```

## Architecture

### Tech Stack

- **VitePress v1.6.3** — Static site generator built on Vite and Vue 3
- **pnpm** — Package manager (workspace enabled via `pnpm-workspace.yaml`)
- **Vercel** — Hosting and deployment platform

### Directory Structure

```
docs/
├── .vitepress/
│   ├── config.mts          # VitePress configuration (site title, nav, sidebar, search)
│   └── theme/
│       ├── index.js         # Custom theme extending default VitePress theme
│       └── style.css        # Custom CSS (image lightbox styles)
├── index.md                 # Home page (hero layout with feature cards)
└── apps/
    └── wuji-assistant/      # Main application documentation
        ├── index.md         # Product overview and quick start guide
        ├── activation.md    # License activation instructions
        ├── basic-usage.md   # Basic operation guide
        ├── features.md      # Detailed feature explanations
        ├── settings.md      # Settings/configuration guide
        ├── faq.md           # Frequently asked questions
        ├── changelog.md     # Version changelog
        └── imgs/            # Screenshot images used in docs
```

### VitePress Configuration (`docs/.vitepress/config.mts`)

- **Site title**: "无极助手" with description "无极助手使用指南"
- **Language**: `zh-CN`
- **URLs**: `cleanUrls: true` — clean URLs without `.html` extensions
- **Last updated**: Enabled via `lastUpdated: true`
- **Navigation**: Two top-level nav items — "首页" (Home) and "使用说明" (Guide)
- **Sidebar**: Auto-generated for `/apps/wuji-assistant/` paths, organized into three sections:
  - 开始使用 (Getting Started): 简介, 激活授权, 基础使用
  - 功能说明 (Features): 功能详解
  - 帮助 (Help): 常见问题, 更新日志
- **Search**: Local search provider (no external search service)
- **Markdown**: Line numbers enabled in code blocks

### Custom Theme (`docs/.vitepress/theme/`)

The custom theme extends the default VitePress theme and adds:

1. **`index.js`** — A Vue mixin injected into all pages via `enhanceApp` that implements:
   - An **image lightbox** feature: all `<img>` elements on any page get a click-to-zoom lightbox overlay. This runs on `mounted()` and `updated()` lifecycle hooks.
   - The lightbox creates a full-screen overlay with close button, click-to-dismiss, and Escape key support.
   - Each image is tagged with `data-lightbox="true"` to prevent duplicate bindings.

2. **`style.css`** — Styles for the lightbox overlay:
   - Semi-transparent dark overlay with centered image display
   - Smooth fade and scale animations (0.3s ease transitions)
   - Close button (circular, positioned top-right)
   - Caption bar at bottom showing alt text
   - Hover effect on lightbox-enabled images (subtle scale-up + zoom-in cursor)

### Home Page (`docs/index.md`)

Uses VitePress's **`layout: home`** with:
- Hero section with brand color action button linking to `/apps/wuji-assistant/`
- Feature cards grid highlighting Wuji Assistant's capabilities

### Content Structure (`docs/apps/wuji-assistant/`)

Seven Markdown files forming a hierarchical user guide:
- **index.md** — Entry point: product overview, feature summary, quick start links, system requirements, version info, disclaimer
- **activation.md** — Step-by-step license activation guide
- **basic-usage.md** — Basic operation workflows
- **features.md** — In-depth feature documentation covering auto-farming, skill scheduling, status monitoring, reconnection, etc.
- **settings.md** — Configuration options and presets
- **faq.md** — Common troubleshooting questions
- **changelog.md** — Version history with per-release changes

Images are stored in `docs/apps/wuji-assistant/imgs/` (currently two `.jpg` files used as documentation screenshots).

### Deployment (Vercel)

Configured via `vercel.json`:
- **Build command**: `npm run build` (runs `vitepress build docs`)
- **Output directory**: `docs/.vitepress/dist`
- **Framework**: `vitepress`
- **Install command**: `npm install`
- Note: Even though the project uses pnpm locally, Vercel is configured to use npm.

### pnpm Workspace

The `pnpm-workspace.yaml` sets `allowBuilds: { esbuild: false }` to disable esbuild builds within the workspace, which is relevant for VitePress's dependency bundling.

## Important Notes

- All documentation content is in Simplified Chinese — when editing, maintain language consistency.
- The `.vitepress/cache/` directory is auto-generated and should not be edited manually; it's excluded from git via `.gitignore`.
- New documentation pages for additional apps should follow the pattern: `docs/apps/<app-name>/` with a corresponding sidebar entry in `config.mts`.
- The custom theme's lightbox feature runs on every page and applies to all `<img>` elements — new images added in markdown files will automatically get the lightbox behavior.
- The VitePress config references a GitHub social link with a placeholder username — update this when the actual repo URL is known.
