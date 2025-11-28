<script setup lang="ts">
import { ref } from 'vue'
import { NInput, NButton, NGrid, NGridItem, NCard, useMessage, NSpace } from 'naive-ui'
import { Icon } from '@iconify/vue'
import yaml from 'js-yaml'

const jsonVal = ref('')
const yamlVal = ref('')
const message = useMessage()

const toJson = () => {
  if (!yamlVal.value.trim()) return
  try {
    const obj = yaml.load(yamlVal.value)
    jsonVal.value = JSON.stringify(obj, null, 2)
    message.success('YAML -> JSON 成功')
  } catch (e: any) {
    message.error('YAML 解析错误: ' + e.message)
  }
}

const toYaml = () => {
  if (!jsonVal.value.trim()) return
  try {
    const obj = JSON.parse(jsonVal.value)
    yamlVal.value = yaml.dump(obj)
    message.success('JSON -> YAML 成功')
  } catch (e: any) {
    message.error('JSON 解析错误: ' + e.message)
  }
}

const copy = async (text: string) => {
    if(!text) return
    try {
        await navigator.clipboard.writeText(text)
        message.success('已复制')
    } catch(e) { message.error('复制失败') }
}
</script>

<template>
  <div class="h-full flex flex-col">
    <div class="mb-4 flex justify-center gap-4">
        <n-button type="primary" @click="toYaml">
            <template #icon><Icon icon="mdi:arrow-right" /></template>
            JSON 转 YAML
        </n-button>
        <n-button type="primary" @click="toJson">
            <template #icon><Icon icon="mdi:arrow-left" /></template>
            YAML 转 JSON
        </n-button>
    </div>
    
    <n-grid :cols="2" :x-gap="16" class="flex-1 h-full">
        <n-grid-item class="h-full flex flex-col">
            <n-card title="JSON" class="flex-1 h-full" content-style="height: 100%; display: flex; flex-direction: column;">
                <template #header-extra>
                    <n-button size="tiny" @click="copy(jsonVal)">复制</n-button>
                </template>
                <n-input
                    v-model:value="jsonVal"
                    type="textarea"
                    class="flex-1 font-mono text-sm"
                    placeholder='{"key": "value"}'
                    :input-props="{ spellcheck: false }"
                />
            </n-card>
        </n-grid-item>
        <n-grid-item class="h-full flex flex-col">
            <n-card title="YAML" class="flex-1 h-full" content-style="height: 100%; display: flex; flex-direction: column;">
                 <template #header-extra>
                    <n-button size="tiny" @click="copy(yamlVal)">复制</n-button>
                </template>
                <n-input
                    v-model:value="yamlVal"
                    type="textarea"
                    class="flex-1 font-mono text-sm"
                    placeholder="key: value"
                    :input-props="{ spellcheck: false }"
                />
            </n-card>
        </n-grid-item>
    </n-grid>
  </div>
</template>

