<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as monaco from 'monaco-editor'
// 简单的 Worker 配置，仅用于文本编辑
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'

// 配置 Monaco Environment
self.MonacoEnvironment = {
  getWorker: () => new editorWorker()
}

const container = ref<HTMLElement | null>(null)
let diffEditor: monaco.editor.IStandaloneDiffEditor | null = null

onMounted(() => {
  if (!container.value) return

  diffEditor = monaco.editor.createDiffEditor(container.value, {
    originalEditable: true, // 允许左侧编辑
    automaticLayout: true,
    theme: 'vs', // 或 vs-dark
    renderSideBySide: true,
    diffWordWrap: 'off'
  })

  const originalModel = monaco.editor.createModel('', 'text/plain')
  const modifiedModel = monaco.editor.createModel('', 'text/plain')

  diffEditor.setModel({
    original: originalModel,
    modified: modifiedModel
  })
})

onUnmounted(() => {
  if (diffEditor) {
    diffEditor.dispose()
  }
})
</script>

<template>
  <div class="h-full flex flex-col">
    <div class="mb-2 text-sm text-gray-500 flex justify-between px-2">
        <span>Original (左侧可编辑)</span>
        <span>Modified (右侧可编辑)</span>
    </div>
    <div ref="container" class="flex-1 border border-gray-200 rounded overflow-hidden min-h-[500px]"></div>
  </div>
</template>

<style>
/* 修复 Monaco Editor 在 flex 布局下的一些显示问题 */
.monaco-editor {
    padding-top: 8px;
}
</style>
