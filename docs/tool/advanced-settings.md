# 游戏设置 - 高级

本章节将介绍游戏的高级配置选项。

## 高级配置文件

高级配置文件位于：

```
config/advanced.json
```

### 完整配置示例

```json
{
  "performance": {
    "enableOptimization": true,
    "maxMemory": 4096,
    "threadCount": 4
  },
  "features": {
    "featureOne": {
      "enabled": true,
      "params": {
        "param1": "value1",
        "param2": 100
      }
    },
    "featureTwo": {
      "enabled": false
    }
  },
  "advanced": {
    "debugMode": false,
    "logToFile": true,
    "autoSave": {
      "enabled": true,
      "interval": 300000
    }
  }
}
```

## 性能优化

### 内存优化

调整内存使用策略：

```json
{
  "performance": {
    "maxMemory": 4096,
    "gcInterval": 60000
  }
}
```

### 多线程配置

启用多线程处理：

```json
{
  "performance": {
    "threadCount": 4,
    "asyncMode": true
  }
}
```

## 功能模块配置

### 模块一：功能名称

```json
{
  "features": {
    "yourFeature": {
      "enabled": true,
      "hotkey": "Ctrl+Shift+F",
      "params": {
        "option1": true,
        "option2": "value"
      }
    }
  }
}
```

### 模块二：另一个功能

```json
{
  "features": {
    "anotherFeature": {
      "enabled": true,
      "trigger": "auto",
      "conditions": {
        "minHealth": 50,
        "inCombat": true
      }
    }
  }
}
```

## 快捷键配置

自定义快捷键：

```json
{
  "hotkeys": {
    "toggleFeature1": "F1",
    "toggleFeature2": "F2",
    "openSettings": "Ctrl+S",
    "quickAction": "Ctrl+Shift+A"
  }
}
```

## 日志与调试

### 启用调试模式

```json
{
  "advanced": {
    "debugMode": true,
    "logLevel": "debug",
    "logToFile": true,
    "logPath": "./logs/"
  }
}
```

### 日志级别

| 级别 | 说明 |
|------|------|
| `error` | 仅记录错误 |
| `warn` | 记录警告和错误 |
| `info` | 记录一般信息 |
| `debug` | 记录详细调试信息 |

## 配置备份与恢复

### 备份配置

```bash
your-tool backup --output ./backup/
```

### 恢复配置

```bash
your-tool restore --input ./backup/config.json
```

## 下一步

- [常见问题](/tool/faq) - 查看常见问题解答
