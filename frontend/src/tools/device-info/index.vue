<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { NCard, NDescriptions, NDescriptionsItem, NTag } from 'naive-ui'

const info = ref<any>({})

onMounted(() => {
  info.value = {
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    screenSize: `${window.screen.width} x ${window.screen.height}`,
    windowSize: `${window.innerWidth} x ${window.innerHeight}`,
    pixelRatio: window.devicePixelRatio,
    colorDepth: window.screen.colorDepth + ' bit',
    cores: navigator.hardwareConcurrency || 'Unknown',
    memory: (navigator as any).deviceMemory ? `~${(navigator as any).deviceMemory} GB` : 'Unknown',
    online: navigator.onLine ? 'Online' : 'Offline',
    cookiesEnabled: navigator.cookieEnabled ? 'Yes' : 'No'
  }
})
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <n-card title="设备信息">
      <n-descriptions label-placement="left" bordered :column="1">
        <n-descriptions-item label="User Agent">
            <code class="text-xs break-all bg-gray-100 p-1 rounded">{{ info.userAgent }}</code>
        </n-descriptions-item>
         <n-descriptions-item label="屏幕分辨率">
          <n-tag type="info">{{ info.screenSize }}</n-tag>
        </n-descriptions-item>
        <n-descriptions-item label="浏览器窗口大小">
           {{ info.windowSize }}
        </n-descriptions-item>
        <n-descriptions-item label="像素比 (DPR)">
          {{ info.pixelRatio }}
        </n-descriptions-item>
        <n-descriptions-item label="操作系统/平台">
          {{ info.platform }}
        </n-descriptions-item>
         <n-descriptions-item label="语言">
          {{ info.language }}
        </n-descriptions-item>
         <n-descriptions-item label="CPU 核心数 (逻辑)">
          {{ info.cores }}
        </n-descriptions-item>
        <n-descriptions-item label="内存 (估算)">
          {{ info.memory }}
        </n-descriptions-item>
        <n-descriptions-item label="色彩深度">
          {{ info.colorDepth }}
        </n-descriptions-item>
         <n-descriptions-item label="网络状态">
          <n-tag :type="info.online === 'Online' ? 'success' : 'error'">{{ info.online }}</n-tag>
        </n-descriptions-item>
      </n-descriptions>
    </n-card>
  </div>
</template>

