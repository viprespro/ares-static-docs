# 安装与配置

本章节将指导你完成工具的安装和基础配置。

## 系统要求

- 操作系统：Windows 10/11
- 运行环境：根据实际情况填写
- 其他依赖：根据实际情况填写

## 下载工具

### 方式一：官方下载

请前往 [下载页面](#) 获取最新版本。

### 方式二：从源码构建

```bash
# 克隆仓库
git clone https://github.com/yourusername/your-tool.git

# 进入目录
cd your-tool

# 安装依赖
npm install

# 构建
npm run build
```

## 安装步骤

### 1. 解压文件

将下载的压缩包解压到你想要的目录。

### 2. 配置环境

根据你的系统环境进行配置：

::: code-group
```bash [Windows]
# Windows 配置命令
```

```bash [MacOS]
# MacOS 配置命令
```

```bash [Linux]
# Linux 配置命令
```
:::

### 3. 验证安装

运行以下命令验证安装是否成功：

```bash
your-tool --version
```

## 配置文件

工具使用配置文件进行设置，配置文件位于：

```
config/settings.json
```

### 基础配置示例

```json
{
  "language": "zh-CN",
  "autoUpdate": true,
  "logLevel": "info"
}
```

## 下一步

- [快速上手](/tool/quick-start) - 开始使用工具
- [游戏设置](/tool/game-settings) - 配置游戏相关设置
