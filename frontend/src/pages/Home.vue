<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { NCard, NGrid, NGridItem, NInput, NEmpty, NTag } from 'naive-ui'
import { Icon } from '@iconify/vue'
import { tools, searchTools } from '@/core/registry'

const router = useRouter()
const keyword = ref('')

const filteredTools = computed(() => {
  if (!keyword.value) return tools
  return searchTools(keyword.value)
})
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <div class="mb-8 text-center py-12">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Ray Toolbox</h1>
      <p class="text-gray-500 mb-8">简单、高效的开发者工具箱</p>
      <div class="max-w-xl mx-auto">
        <n-input v-model:value="keyword" size="large" placeholder="搜索工具 (例如: json, md5, base64)..." round>
            <template #prefix>
                <Icon icon="mdi:magnify" class="text-xl text-gray-400" />
            </template>
        </n-input>
      </div>
    </div>

    <n-grid :x-gap="16" :y-gap="16" cols="1 s:2 m:3 l:4" responsive="screen">
      <n-grid-item v-for="tool in filteredTools" :key="tool.slug">
        <n-card hoverable class="cursor-pointer h-full" @click="router.push(tool.route)">
          <div class="flex items-start gap-3">
            <div class="p-2 bg-primary-50 rounded-lg text-primary">
                <Icon :icon="tool.icon" class="text-2xl text-blue-500" />
            </div>
            <div>
              <div class="font-bold text-base mb-1">{{ tool.name }}</div>
              <div class="text-xs text-gray-500 line-clamp-2">{{ tool.description }}</div>
              <div class="mt-2 flex flex-wrap gap-1">
                 <n-tag size="small" :bordered="false" type="info" class="opacity-80">{{ tool.category }}</n-tag>
              </div>
            </div>
          </div>
        </n-card>
      </n-grid-item>
    </n-grid>

    <n-empty v-if="filteredTools.length === 0" description="没有找到相关工具" class="mt-12" />
  </div>
</template>

