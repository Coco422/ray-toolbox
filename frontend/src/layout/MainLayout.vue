<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { NLayout, NLayoutSider, NLayoutHeader, NLayoutContent, NMenu, NInput, NIcon } from 'naive-ui'
import { Icon } from '@iconify/vue'
import { tools, getToolsByCategory } from '@/core/registry'
import logoUrl from '@/static/favicon.ico'

const router = useRouter()
const route = useRoute()
const collapsed = ref(false)

const menuOptions = computed(() => {
  const groups = getToolsByCategory()
  return Object.entries(groups).map(([category, items]) => ({
    label: category,
    key: category,
    icon: () => h(Icon, { icon: 'mdi:folder-outline' }),
    children: items.map(tool => ({
      label: tool.name,
      key: tool.route,
      icon: () => h(Icon, { icon: tool.icon })
    }))
  }))
})

const handleUpdateValue = (key: string) => {
  router.push(key)
}

import { h } from 'vue'

function renderIcon(icon: string) {
  return () => h(Icon, { icon })
}
</script>

<template>
  <n-layout has-sider class="h-screen">
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :collapsed="collapsed"
      show-trigger
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <div class="p-4 font-bold text-xl flex items-center gap-2 cursor-pointer" @click="router.push('/')">
        <img :src="logoUrl" class="w-8 h-8" alt="Logo" />
        <span v-if="!collapsed">Ray Toolbox</span>
      </div>
      <n-menu
        :collapsed="collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="[
          { label: '首页', key: '/', icon: renderIcon('mdi:home') },
          ...menuOptions
        ]"
        :value="route.path"
        @update:value="handleUpdateValue"
      />
    </n-layout-sider>
    <n-layout>
      <n-layout-header bordered class="p-4 flex items-center justify-between">
        <div class="flex items-center gap-4">
           <h2 class="text-lg font-medium">{{ route.meta.title || '工具箱' }}</h2>
        </div>
        <div>
           <a href="https://blog.anluoying.com" target="_blank" class="text-gray-500 hover:text-primary transition-colors flex items-center gap-1">
              <Icon icon="mdi:web" />
              Ray-Blog
           </a>
        </div>
      </n-layout-header>
      <n-layout-content content-style="padding: 24px;" class="bg-gray-50">
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

