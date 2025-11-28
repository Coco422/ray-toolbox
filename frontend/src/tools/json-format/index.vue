<script setup lang="ts">
import { ref } from 'vue'
import { NInput, NButton, NSpace, NSelect, NCard, useMessage } from 'naive-ui'
import { Icon } from '@iconify/vue'

const input = ref('')
const output = ref('')
const indent = ref(2)
const message = useMessage()

const format = () => {
  try {
    if (!input.value.trim()) {
        output.value = ''
        return
    }
    const obj = JSON.parse(input.value)
    output.value = JSON.stringify(obj, null, indent.value)
    message.success('格式化成功')
  } catch (e: any) {
    message.error('JSON 格式错误: ' + e.message)
  }
}

const minify = () => {
  try {
    if (!input.value.trim()) return
    const obj = JSON.parse(input.value)
    output.value = JSON.stringify(obj)
    message.success('压缩成功')
  } catch (e: any) {
    message.error('JSON 格式错误: ' + e.message)
  }
}

const copy = async () => {
    if(!output.value) return
    try {
        await navigator.clipboard.writeText(output.value)
        message.success('复制成功')
    } catch(e) {
        message.error('复制失败')
    }
}

const clear = () => {
    input.value = ''
    output.value = ''
}
</script>

<template>
  <div class="h-full flex flex-col gap-4">
    <n-card>
        <n-space align="center" justify="space-between">
            <n-space>
                <n-select 
                    v-model:value="indent" 
                    :options="[
                        { label: '2 空格缩进', value: 2 },
                        { label: '4 空格缩进', value: 4 },
                        { label: 'Tab 缩进', value: '\t' as any }
                    ]" 
                    class="w-40" 
                    size="small"
                />
                <n-button type="primary" @click="format" size="small">
                    <template #icon><Icon icon="mdi:format-align-left" /></template>
                    格式化
                </n-button>
                <n-button @click="minify" size="small">
                    <template #icon><Icon icon="mdi:zip-box-outline" /></template>
                    压缩
                </n-button>
                 <n-button @click="clear" size="small" type="error" ghost>
                    清空
                </n-button>
            </n-space>
            <n-button @click="copy" size="small" type="info" ghost :disabled="!output">
                <template #icon><Icon icon="mdi:content-copy" /></template>
                复制结果
            </n-button>
        </n-space>
    </n-card>

    <div class="flex-1 grid grid-cols-2 gap-4 min-h-[500px]">
      <n-input
        v-model:value="input"
        type="textarea"
        placeholder="在此粘贴 JSON..."
        class="font-mono text-sm"
        :input-props="{ spellcheck: false }"
      />
      <n-input
        v-model:value="output"
        type="textarea"
        placeholder="结果..."
        readonly
        class="font-mono text-sm bg-gray-50"
        :input-props="{ spellcheck: false }"
      />
    </div>
  </div>
</template>

