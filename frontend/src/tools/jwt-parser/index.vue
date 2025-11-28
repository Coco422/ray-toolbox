<script setup lang="ts">
import { ref, computed } from 'vue'
import { NInput, NGrid, NGridItem, NCard, NTag, useMessage } from 'naive-ui'
import { jwtDecode } from 'jwt-decode'

const token = ref('')
const header = ref<any>(null)
const payload = ref<any>(null)
const error = ref('')

const decode = () => {
    error.value = ''
    header.value = null
    payload.value = null
    
    if(!token.value.trim()) return

    try {
        // jwt-decode default only decodes payload
        payload.value = jwtDecode(token.value)
        
        // Manually decode header
        const parts = token.value.split('.')
        if (parts.length !== 3) throw new Error('Invalid JWT format')
        header.value = JSON.parse(atob(parts[0]))
    } catch(e: any) {
        error.value = '无效的 JWT Token'
    }
}

const formattedHeader = computed(() => header.value ? JSON.stringify(header.value, null, 2) : '')
const formattedPayload = computed(() => payload.value ? JSON.stringify(payload.value, null, 2) : '')

</script>

<template>
  <div class="h-full flex flex-col gap-4">
    <n-card title="JWT Token 输入">
         <n-input
            v-model:value="token"
            type="textarea"
            placeholder="Paste JWT here (eyJh...)"
            :rows="3"
            @input="decode"
            class="font-mono text-xs"
        />
        <div v-if="error" class="text-red-500 mt-2">{{ error }}</div>
    </n-card>

    <n-grid :cols="2" :x-gap="12" class="flex-1">
        <n-grid-item>
            <n-card title="Header" class="h-full">
                <n-input
                    v-model:value="formattedHeader"
                    type="textarea"
                    readonly
                    class="font-mono text-sm h-full bg-gray-50"
                    placeholder="Header..."
                />
            </n-card>
        </n-grid-item>
         <n-grid-item>
            <n-card title="Payload" class="h-full">
                <n-input
                    v-model:value="formattedPayload"
                    type="textarea"
                    readonly
                    class="font-mono text-sm h-full bg-gray-50"
                    placeholder="Payload..."
                />
            </n-card>
        </n-grid-item>
    </n-grid>
  </div>
</template>

