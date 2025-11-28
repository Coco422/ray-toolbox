<script setup lang="ts">
import { ref } from 'vue'
import { NInput, NButton, NCard, NGrid, NGridItem, useMessage } from 'naive-ui'
import { Icon } from '@iconify/vue'

const input = ref('')
const output = ref('')
const message = useMessage()

const encode = () => {
  try {
    output.value = btoa(encodeURIComponent(input.value).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
    }));
    message.success('编码成功')
  } catch (e) {
    message.error('编码失败')
  }
}

const decode = () => {
  try {
    output.value = decodeURIComponent(atob(input.value).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    message.success('解码成功')
  } catch (e) {
    message.error('无效的 Base64 字符串')
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
</script>

<template>
  <div class="h-full flex flex-col gap-4">
    <n-grid :cols="2" :x-gap="12" class="h-full">
        <n-grid-item class="h-full flex flex-col">
            <n-card title="输入" class="flex-1 h-full" content-style="height: 100%; display: flex; flex-direction: column;">
                <n-input
                    v-model:value="input"
                    type="textarea"
                    placeholder="在此输入内容..."
                    class="flex-1 font-mono"
                    :input-props="{ spellcheck: false }"
                />
                <div class="flex justify-end gap-2 mt-4">
                    <n-button type="primary" @click="encode">
                        编码 (Encode)
                    </n-button>
                    <n-button type="info" @click="decode">
                        解码 (Decode)
                    </n-button>
                </div>
            </n-card>
        </n-grid-item>
        <n-grid-item class="h-full flex flex-col">
            <n-card title="结果" class="flex-1 h-full" content-style="height: 100%; display: flex; flex-direction: column;">
                <template #header-extra>
                     <n-button size="small" @click="copy" ghost>
                        <template #icon><Icon icon="mdi:content-copy" /></template>
                        复制
                    </n-button>
                </template>
                <n-input
                    v-model:value="output"
                    type="textarea"
                    readonly
                    placeholder="结果将显示在这里..."
                    class="flex-1 font-mono bg-gray-50"
                />
            </n-card>
        </n-grid-item>
    </n-grid>
  </div>
</template>

