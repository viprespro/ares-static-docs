# 快速上手

本章节将帮助你快速开始使用工具。

## 启动工具

### Windows 用户

双击 `start.bat` 或在命令行运行：

```bash
your-tool.exe
```

### 命令行启动

```bash
your-tool run
```

## 基本使用流程

### 1. 初始化配置

首次使用需要初始化配置：

```bash
your-tool init
```

### 2. 选择功能

根据提示选择你需要使用的功能：

```
? 请选择功能:
  ❯ 功能一
    功能二
    功能三
```

### 3. 执行操作

确认选择后，工具将自动执行相应操作。

## 常用命令

| 命令 | 说明 |
|------|------|
| `your-tool run` | 启动工具 |
| `your-tool config` | 打开配置 |
| `your-tool update` | 更新工具 |
| `your-tool help` | 查看帮助 |

## 使用示例

### 示例一：基础使用

```bash
# 启动工具
your-tool run

# 选择功能
# 等待执行完成
```

### 示例二：高级使用

```bash
# 使用特定配置
your-tool run --config custom.json

# 指定输出目录
your-tool run --output ./results
```

## 下一步

- [游戏设置](/tool/game-settings) - 配置游戏相关设置
- [高级配置](/tool/advanced-settings) - 了解更多配置选项
- [常见问题](/tool/faq) - 查看常见问题解答
