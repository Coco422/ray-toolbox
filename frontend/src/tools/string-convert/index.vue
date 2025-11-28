<script setup lang="ts">
import { ref, watch } from 'vue'
import { NInput, NRadioGroup, NRadioButton, NCard, NGrid, NGridItem, useMessage, NButton, NDivider } from 'naive-ui'
import { Icon } from '@iconify/vue'

const input = ref('Hello World')
const message = useMessage()

// 转换结果
const results = ref({
  upper: '',
  lower: '',
  camel: '',
  kebab: '',
  snake: '',
  base64: '',
  base64Decode: ''
})

const toCamel = (str: string) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}

const toKebab = (str: string) => {
    return str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        ?.map(x => x.toLowerCase())
        .join('-') || str;
}

const toSnake = (str: string) => {
    return str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        ?.map(x => x.toLowerCase())
        .join('_') || str;
}

const convert = () => {
    const txt = input.value
    if(!txt) {
        Object.keys(results.value).forEach(k => (results.value as any)[k] = '')
        return
    }

    results.value.upper = txt.toUpperCase()
    results.value.lower = txt.toLowerCase()
    results.value.camel = toCamel(txt)
    results.value.kebab = toKebab(txt)
    results.value.snake = toSnake(txt)
    
    try {
        results.value.base64 = btoa(encodeURIComponent(txt).replace(/%([0-9A-F]{2})/g,
            function toSolidBytes(match, p1) {
                return String.fromCharCode(parseInt(p1, 16));
        }));
    } catch(e) { results.value.base64 = 'Error' }

    try {
        results.value.base64Decode = decodeURIComponent(atob(txt).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    } catch(e) { results.value.base64Decode = '' }
}

watch(input, convert, { immediate: true })

const copy = async (text: string) => {
    if(!text) return
    try {
        await navigator.clipboard.writeText(text)
        message.success('已复制')
    } catch(e) { message.error('复制失败') }
}
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <n-card title="输入文本">
         <n-input 
            v-model:value="input" 
            type="textarea" 
            placeholder="请输入需要转换的文本..." 
            :rows="3"
            clearable
         />
    </n-card>
    
    <n-divider />

    <n-grid :x-gap="12" :y-gap="12" cols="1 m:2">
        <n-grid-item>
            <n-card size="small" title="大写 (Upper Case)">
                <template #header-extra>
                    <n-button size="tiny" @click="copy(results.upper)">复制</n-button>
                </template>
                <div class="font-mono bg-gray-50 p-2 rounded min-h-[2.5em] break-all">{{ results.upper }}</div>
            </n-card>
        </n-grid-item>
         <n-grid-item>
            <n-card size="small" title="小写 (Lower Case)">
                <template #header-extra>
                    <n-button size="tiny" @click="copy(results.lower)">复制</n-button>
                </template>
                <div class="font-mono bg-gray-50 p-2 rounded min-h-[2.5em] break-all">{{ results.lower }}</div>
            </n-card>
        </n-grid-item>
         <n-grid-item>
            <n-card size="small" title="驼峰 (Camel Case)">
                <template #header-extra>
                    <n-button size="tiny" @click="copy(results.camel)">复制</n-button>
                </template>
                <div class="font-mono bg-gray-50 p-2 rounded min-h-[2.5em] break-all">{{ results.camel }}</div>
            </n-card>
        </n-grid-item>
         <n-grid-item>
            <n-card size="small" title="短横线 (Kebab Case)">
                <template #header-extra>
                    <n-button size="tiny" @click="copy(results.kebab)">复制</n-button>
                </template>
                <div class="font-mono bg-gray-50 p-2 rounded min-h-[2.5em] break-all">{{ results.kebab }}</div>
            </n-card>
        </n-grid-item>
         <n-grid-item>
            <n-card size="small" title="下划线 (Snake Case)">
                <template #header-extra>
                    <n-button size="tiny" @click="copy(results.snake)">复制</n-button>
                </template>
                <div class="font-mono bg-gray-50 p-2 rounded min-h-[2.5em] break-all">{{ results.snake }}</div>
            </n-card>
        </n-grid-item>
         <n-grid-item>
            <n-card size="small" title="Base64 编码">
                <template #header-extra>
                    <n-button size="tiny" @click="copy(results.base64)">复制</n-button>
                </template>
                <div class="font-mono bg-gray-50 p-2 rounded min-h-[2.5em] break-all text-xs">{{ results.base64 }}</div>
            </n-card>
        </n-grid-item>
        <n-grid-item v-if="results.base64Decode">
            <n-card size="small" title="Base64 解码 (自动检测)">
                <template #header-extra>
                    <n-button size="tiny" @click="copy(results.base64Decode)">复制</n-button>
                </template>
                <div class="font-mono bg-gray-50 p-2 rounded min-h-[2.5em] break-all">{{ results.base64Decode }}</div>
            </n-card>
        </n-grid-item>
    </n-grid>
  </div>
</template>

