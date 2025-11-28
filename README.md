# Ray Toolbox (r-toolbox)

一个轻量开发者工具箱，旨在提供简单、高效的日常开发辅助工具。

基于 **Vue 3 + TypeScript + Vite** 构建，采用插件化架构，易于扩展和维护。

## ✨ 特点

- **🔌 插件化架构**：每个工具作为独立模块存在，自动扫描注册，无需手动配置路由。
- **⚡️ 极速体验**：基于 Vite 构建，秒级启动，热更新迅速。
- **🎨 现代化 UI**：使用 Naive UI + Tailwind CSS，界面简洁美观，支持响应式。
- **🛠️ 纯前端实现**：大部分工具纯前端运行，保护隐私，无需担心数据泄露。
- **🔍 智能搜索**：内置全文搜索，快速定位所需工具。

## 🧰 现有工具

### 文本/数据处理
- **JSON 格式化**：JSON 美化、压缩、语法校验。
- **Base64 字符串**：字符串与 Base64 互转。
- **文本对比 (Diff)**：基于 Monaco Editor 的专业级文本差异对比。
- **文本统计**：字数、字符数、行数、字节大小统计。
- **YAML <-> JSON**：YAML 与 JSON 格式互转。
- **字符串转换**：大小写转换、驼峰/下划线命名转换。

### 编码/加密
- **JWT 解析器**：解析 JWT Token Header 和 Payload。
- **Base64 文件转换**：文件/图片转 Base64 编码。

### 系统/运维
- **Crontab 生成**：Crontab 表达式生成与校验，自然语言解释。
- **设备信息**：查看 UserAgent、屏幕分辨率、浏览器信息等。
- **LLM Token 估算**：粗略估算文本的 OpenAI Token 数量。

## 🚀 快速开始

### 开发环境

```bash
# 进入前端目录
cd frontend

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 构建部署

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 🤝 贡献指南

我们非常欢迎你贡献新的工具！请遵循以下规范：

### 1. 创建工具目录
在 `frontend/src/tools/` 下创建一个新文件夹，例如 `my-tool`。

### 2. 必需文件
每个工具必须包含以下两个文件：

**`config.ts` (元数据配置)**
```typescript
export default {
  name: '工具名称',
  slug: 'tool-slug',          // 路由路径
  icon: 'mdi:icon-name',      // Iconify 图标名
  description: '工具简短描述',
  keywords: ['keyword1', 'keyword2'],
  category: '工具分类',
  author: 'Your Name'
}
```

**`index.vue` (主界面)**
```vue
<script setup lang="ts">
// 你的逻辑代码
</script>

<template>
  <!-- 你的 UI 代码 -->
</template>
```

vite 会在build 时自动扫描并注册你的工具，无需修改其他任何文件！

## 📄 License

MIT License
