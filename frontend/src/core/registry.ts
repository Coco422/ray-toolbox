export interface ToolConfig {
  name: string
  slug: string
  icon: string
  description: string
  keywords: string[]
  category: string
  author?: string
}

export interface Tool extends ToolConfig {
  view: any
  route: string
}

// 自动扫描所有 config.ts
const toolConfigs = import.meta.glob('/src/tools/**/config.ts', { eager: true }) as Record<string, { default: ToolConfig }>

// 自动扫描 UI 页面
const toolPages = import.meta.glob('/src/tools/**/index.vue')

export const tools: Tool[] = Object.entries(toolConfigs).map(([path, module]) => {
  const config = module.default
  // 对应的 index.vue 路径
  const viewPath = path.replace('config.ts', 'index.vue')
  
  return {
    ...config,
    view: toolPages[viewPath],
    route: '/tool/' + config.slug
  }
})

export function searchTools(keyword: string): Tool[] {
  const k = keyword.toLowerCase()
  return tools.filter(t =>
    t.name.toLowerCase().includes(k) ||
    t.description.toLowerCase().includes(k) ||
    (t.keywords?.some(key => key.toLowerCase().includes(k)) ?? false)
  )
}

export function getToolsByCategory(): Record<string, Tool[]> {
  const groups: Record<string, Tool[]> = {}
  tools.forEach(t => {
    if (!groups[t.category]) groups[t.category] = []
    groups[t.category].push(t)
  })
  return groups
}

