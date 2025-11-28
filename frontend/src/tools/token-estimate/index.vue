<script setup lang="ts">
import { ref, computed } from 'vue'
import { NInput, NCard, NStatistic, NGrid, NGridItem, NAlert } from 'naive-ui'

const text = ref('')

const estimates = computed(() => {
    const s = text.value
    const len = s.length
    if (len === 0) return { gpt3: 0, gpt4: 0, chinese: 0 }

    // 英文：约 4 chars = 1 token
    // 中文：约 1 char = 0.7 - 1.5 token (不同模型差异大)
    // 简单粗暴估算：
    
    // 分离中英文统计
    const chineseCount = (s.match(/[\u4e00-\u9fa5]/g) || []).length
    const otherCount = len - chineseCount
    
    // 粗略算法
    // 英文/数字/符号: ~0.25 token/char
    // 中文: ~0.6 token/char (GPT-4), ~1.5 (GPT-3.5 legacy)
    
    const tokenGPT4 = Math.ceil(otherCount * 0.25 + chineseCount * 0.6)
    const tokenGPT3 = Math.ceil(otherCount * 0.25 + chineseCount * 1.2)

    return {
        gpt4: tokenGPT4,
        gpt3: tokenGPT3,
        chars: len
    }
})
</script>

<template>
  <div class="h-full flex flex-col gap-6">
    <n-alert type="warning" title="仅供参考">
        Token 计算极其复杂，依赖于具体的 Tokenizer (cl100k_base, p50k_base 等)。此处仅为基于字符数的粗略数学估算，实际误差可能在 10-20% 左右。
    </n-alert>

    <n-card>
        <n-grid :cols="2" :x-gap="12">
            <n-grid-item>
                <n-statistic label="GPT-4 / 4o (估算)" :value="estimates.gpt4">
                     <template #suffix>tokens</template>
                </n-statistic>
            </n-grid-item>
            <n-grid-item>
                 <n-statistic label="GPT-3.5 / Legacy (估算)" :value="estimates.gpt3">
                     <template #suffix>tokens</template>
                </n-statistic>
            </n-grid-item>
        </n-grid>
    </n-card>

    <n-input
        v-model:value="text"
        type="textarea"
        placeholder="输入文本..."
        class="flex-1 font-mono"
    />
  </div>
</template>

