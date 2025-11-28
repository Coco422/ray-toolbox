<script setup lang="ts">
import { ref, computed } from 'vue'
import { NInput, NCard, NGrid, NGridItem, NStatistic } from 'naive-ui'

const text = ref('')

const stats = computed(() => {
    const s = text.value
    return {
        length: s.length,
        lines: s ? s.split(/\r\n|\r|\n/).length : 0,
        words: s ? (s.match(/[\w-]+/g) || []).length : 0,
        chinese: (s.match(/[\u4e00-\u9fa5]/g) || []).length,
        bytes: new Blob([s]).size,
        nonEmptyLines: s ? s.split(/\r\n|\r|\n/).filter(l => l.trim()).length : 0
    }
})
</script>

<template>
  <div class="h-full flex flex-col gap-6">
    <n-card>
        <n-grid :cols="3" :y-gap="12">
            <n-grid-item>
                <n-statistic label="总字符数" :value="stats.length" />
            </n-grid-item>
            <n-grid-item>
                <n-statistic label="单词数 (Words)" :value="stats.words" />
            </n-grid-item>
            <n-grid-item>
                <n-statistic label="中文字符数" :value="stats.chinese" />
            </n-grid-item>
            <n-grid-item>
                <n-statistic label="行数" :value="stats.lines" />
            </n-grid-item>
            <n-grid-item>
                <n-statistic label="非空行数" :value="stats.nonEmptyLines" />
            </n-grid-item>
            <n-grid-item>
                <n-statistic label="字节大小 (UTF-8)" :value="stats.bytes">
                    <template #suffix>bytes</template>
                </n-statistic>
            </n-grid-item>
        </n-grid>
    </n-card>

    <n-input
        v-model:value="text"
        type="textarea"
        placeholder="在此输入需要统计的文本..."
        class="flex-1 font-mono"
        :input-props="{ spellcheck: false }"
    />
  </div>
</template>

