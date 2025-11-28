# ray-toolbox

我想和做一个 工具箱网站。就是那种 什么 json 转换，md5 生成的那种。然后用轻量的后端和数据库
各种轮子

问：
用什么技术栈比较好，vue + ts
大部分工具是没有后端要求的，但是我可以用 fastapi + sqlite 实现一些需求
答：
```
前端：Vue + TypeScript（推荐使用 Vite）
Vue 生态成熟，组件化能力强

TS 帮助你们在多人协作中避免踩坑

Vite 的动态 import、自动路由、自动模块扫描非常适合“工具插件化”架构

UI 用 Element Plus / Naive UI / Tailwind 均可

后端：FastAPI + SQLite（轻后端）
SQLite 免部署，很适合轻量项目

FastAPI 写接口非常快 + 类型检查友好

也适合未来扩展部分小工具（如 md5、加密/解密、截图工具、短链等等）
```


主要是前端的架构。我希望非常模块化，比如我同事写一个工具的时候，不需要关注太多和我网页的配合。按照一定的规范写完工具后放在指定位置就行了。我们就审核后发布，前端就可以在某个目录某个地方看到这个工具，搜到这个工具。这需要后端配合吗

粗糙设计思路如下


📌 Part 1：前端整体架构图（ASCII 版本，可直接贴给团队）
┌────────────────────────────────────────────┐
│                工具箱前端架构              │
└────────────────────────────────────────────┘

                                   (自动)
                            ┌────────────────┐
                            │  自动工具扫描   │
                            │ import.meta... │
                            └───────┬────────┘
                                    │ 生成
                          ┌─────────▼───────────┐
                          │   Tool Registry     │
                          │（工具注册中心）       │
                          └─────────┬───────────┘
                                    │
                    ┌───────────────┼────────────────┐
                    │               │                │
            ┌───────▼──────┐ ┌──────▼──────┐ ┌──────▼──────┐
            │ 自动路由生成 │ │ 自动搜索索引 │ │ 分类/标签系统 │
            └───────┬──────┘ └──────┬──────┘ └──────┬──────┘
                    │               │                │
              ┌─────▼──────────────▼────────────────▼───────┐
              │                主站 UI（Vue）                 │
              │  工具列表页 / 搜索框 / 分类页 / 工具详情页     │
              └─────┬────────────────────────────────────────┘
                    │
             ┌──────▼───────┐
             │ 工具模块 Tool │   ← （每个工具=独立文件夹）
             ├──────────────┤
             │ config.ts     │   ← 元数据（name / icon / keywords）
             │ index.vue     │   ← UI
             │ logic.ts      │   ← 可选：逻辑/算法
             └──────────────┘
特点：
✔ 完全插件化
✔ 工具自动发现
✔ 自动路由
✔ 自动搜索
✔ 前端独立扩展工具无需改任何主站代码

📌 Part 2：项目初始化模板（基于 Vue 官方脚手架）
你们可以这么开始：

npm create vue@latest toolbox
cd toolbox
npm install
npm install vue-router@4 pinia
npm install naive-ui # 或 element-plus / tailwind
文件结构建议：

src/
 ├─ tools/        <-- ⚡ 所有工具放这里（自动扫描）
 ├─ store/
 ├─ router/
 ├─ components/
 ├─ pages/
 └─ utils/
📌 Part 3：自动扫描 + 自动路由 + 自动搜索（核心代码模块说明）
以下是“功能描述”，你可以把它交给负责实现的人。

1）自动扫描工具模块
功能描述：

系统会自动遍历 src/tools/**/config.ts
每个 config.ts 是一个工具的元数据
自动收集为“工具注册中心”（Tool Registry）

代码（描述用，可直接实现）：

// 自动扫描所有 config.ts
const toolConfigs = import.meta.glob('/src/tools/**/config.ts', { eager: true });

// 自动扫描 UI 页面
const toolPages = import.meta.glob('/src/tools/**/index.vue');

// 组合为注册表
export const tools = Object.entries(toolConfigs).map(([path, module]) => {
  return {
    ...module.default,
    view: toolPages[path.replace('config.ts', 'index.vue')],
    name: module.default.name,
    route: '/tool/' + module.default.slug   // slug 来自 config.ts
  };
});
2）自动生成路由
所有工具的路由由 tools 自动注册，前端无需修改 router/index.ts

const toolRoutes = tools.map(t => ({
  path: t.route,
  component: t.view
}));

const routes = [
  { path: '/', component: Home },
  { path: '/list', component: ToolList },
  ...toolRoutes
];
3）自动搜索
搜索基于工具的 name + keywords + description 构建搜索索引
搜索时在内存中进行（无需后端）

示例：

export function search(keyword: string) {
  return tools.filter(t =>
    t.name.includes(keyword) ||
    t.keywords?.some(k => k.includes(keyword))
  );
}
4）工具 config.ts 规范（非常关键）
团队成员只需要写这个文件就能新增工具：

export default {
  name: "JSON 格式化",
  slug: "json-format",
  icon: "mdi-code-json",
  description: "将 JSON 美化、压缩、校验",
  keywords: ["json", "格式化", "压缩", "解析"],
  category: "文本工具"
};
slug 决定路由，如：/tool/json-format

📌 Part 4：工具开发规范文档（可直接发给团队）
以下是你们团队的 最终规范：

📄 工具开发规范（Team Standards）
1. 每个工具是一个独立模块
src/tools/xxx-tool/
 ├─ config.ts   （必需）
 ├─ index.vue   （必需）
 └─ logic.ts    （可选）
2. config.ts 必须包含以下字段
export default {
  name: string,          // 工具名称
  slug: string,          // 用于路由
  icon: string,          // 图标
  description: string,   // 简短介绍
  keywords: string[],    // 搜索关键词
  category: string,       // 工具类别
  author: string          // 作者
}
3. 前端 UI 规范
工具界面必须是一个单独的 Vue 组件（index.vue）

不需引入 router，不需注册路由

不需修改任何全局配置

工具逻辑如果比较复杂，写到 logic.ts