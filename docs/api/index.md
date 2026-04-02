# API 参考

欢迎使用 Ares Docs API 文档。

## 概览

本章节将提供详细的 API 参考信息。

::: tip 提示
API 文档正在完善中，敬请期待。
:::

## 配置选项

### 站点配置

| 选项 | 类型 | 说明 |
|------|------|------|
| `title` | `string` | 站点标题 |
| `description` | `string` | 站点描述 |
| `lang` | `string` | 站点语言 |
| `base` | `string` | 部署基础路径 |

### 主题配置

| 选项 | 类型 | 说明 |
|------|------|------|
| `logo` | `string` | 站点 Logo |
| `nav` | `array` | 导航栏配置 |
| `sidebar` | `object` | 侧边栏配置 |
| `footer` | `object` | 页脚配置 |

## Markdown 扩展

VitePress 支持多种 Markdown 扩展语法：

### 代码块

支持语法高亮和行号显示：

```typescript
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Docs'
})
```

### 自定义容器

::: info 信息
这是一个信息容器
:::

::: tip 提示
这是一个提示容器
:::

::: warning 警告
这是一个警告容器
:::

::: danger 危险
这是一个危险容器
:::

## 更多内容

更多 API 文档正在编写中...
