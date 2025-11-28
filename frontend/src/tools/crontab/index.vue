<script setup lang="ts">
import { ref, watch } from 'vue'
import { NInput, NCard, NTag, NSpace, NAlert } from 'naive-ui'
import cronstrue from 'cronstrue/i18n'

const expression = ref('* * * * *')
const description = ref('')
const error = ref('')

const parseCron = () => {
    error.value = ''
    description.value = ''
    if(!expression.value.trim()) return

    try {
        description.value = cronstrue.toString(expression.value, { locale: "zh_CN" })
    } catch(e: any) {
        error.value = e.toString()
    }
}

watch(expression, parseCron, { immediate: true })

const presets = [
    { label: '每分钟', value: '* * * * *' },
    { label: '每小时', value: '0 * * * *' },
    { label: '每天零点', value: '0 0 * * *' },
    { label: '每周一', value: '0 0 * * 1' },
    { label: '每月1号', value: '0 0 1 * *' },
]
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <n-card title="Crontab 表达式">
        <div class="mb-4 flex flex-wrap gap-2">
             <n-tag 
                v-for="p in presets" 
                :key="p.value" 
                clickable 
                @click="expression = p.value"
                type="primary"
                ghost
            >
                {{ p.label }}
            </n-tag>
        </div>
        
        <n-input 
            v-model:value="expression" 
            size="large" 
            placeholder="* * * * *" 
            class="font-mono text-center text-xl mb-6"
        />

        <div v-if="description" class="text-center">
            <p class="text-gray-500 mb-2">含义：</p>
            <div class="text-2xl text-primary font-bold">{{ description }}</div>
        </div>

        <n-alert v-if="error" type="error" title="表达式错误" class="mt-4">
            {{ error }}
        </n-alert>

        <div class="mt-8 text-gray-400 text-sm bg-gray-50 p-4 rounded">
            <p>格式说明:</p>
            <pre class="mt-2 font-mono">
*    *    *    *    *
-    -    -    -    -
|    |    |    |    |
|    |    |    |    +----- 星期 (0 - 7) (0是周日)
|    |    |    +---------- 月份 (1 - 12)
|    |    +--------------- 日期 (1 - 31)
|    +-------------------- 小时 (0 - 23)
+------------------------- 分钟 (0 - 59)
            </pre>
        </div>
    </n-card>
  </div>
</template>

