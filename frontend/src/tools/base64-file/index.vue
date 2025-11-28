<script setup lang="ts">
import { ref } from 'vue'
import { NUpload, NUploadDragger, NText, NIcon, NP, NInput, NButton, useMessage, NCard } from 'naive-ui'
import { Icon } from '@iconify/vue'
import type { UploadFileInfo } from 'naive-ui'

const result = ref('')
const message = useMessage()
const fileName = ref('')

const handleUpload = (data: { file: UploadFileInfo }) => {
  const file = data.file.file
  if (!file) return

  fileName.value = file.name
  const reader = new FileReader()
  
  reader.onload = (e) => {
    if (e.target?.result) {
        result.value = e.target.result as string
        message.success('转换成功')
    }
  }
  
  reader.onerror = () => {
      message.error('读取文件失败')
  }

  reader.readAsDataURL(file)
  return false // 阻止默认上传行为
}

const copy = async () => {
    if(!result.value) return
    try {
        await navigator.clipboard.writeText(result.value)
        message.success('已复制 Base64')
    } catch(e) {
        message.error('复制失败')
    }
}
</script>

<template>
  <div class="max-w-4xl mx-auto flex flex-col gap-6">
    <n-card title="上传文件">
        <n-upload
            directory-dnd
            :default-upload="false"
            @change="handleUpload"
            :max="1"
        >
            <n-upload-dragger>
            <div style="margin-bottom: 12px">
                <n-icon size="48" :depth="3">
                <Icon icon="mdi:cloud-upload" />
                </n-icon>
            </div>
            <n-text style="font-size: 16px">
                点击或者拖拽文件到该区域来转换
            </n-text>
            <n-p depth="3" style="margin: 8px 0 0 0">
                支持任意格式文件 (图片、PDF、文本等)
            </n-p>
            </n-upload-dragger>
        </n-upload>
    </n-card>

    <n-card title="Base64 结果" v-if="result">
        <template #header-extra>
            <div class="flex items-center gap-2">
                <span class="text-xs text-gray-400">{{ fileName }}</span>
                <n-button size="small" type="primary" @click="copy">
                    <template #icon><Icon icon="mdi:content-copy" /></template>
                    复制
                </n-button>
            </div>
        </template>
        <div class="relative">
            <n-input
                v-model:value="result"
                type="textarea"
                :rows="10"
                readonly
                class="font-mono text-xs bg-gray-50"
            />
             <!-- Preview if image -->
            <div v-if="result.startsWith('data:image')" class="mt-4 border rounded p-2 bg-checkered">
                <p class="text-xs text-gray-500 mb-2">预览:</p>
                <img :src="result" class="max-h-64 max-w-full object-contain" />
            </div>
        </div>
    </n-card>
  </div>
</template>

<style scoped>
.bg-checkered {
  background-image: linear-gradient(45deg, #f0f0f0 25%, transparent 25%), linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f0f0f0 75%), linear-gradient(-45deg, transparent 75%, #f0f0f0 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
}
</style>

