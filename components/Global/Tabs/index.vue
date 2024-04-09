<template>
  <div class="tabs w-full overflow-x-auto">
    <div
      class="invisible-scrollbar w-fit rounded-full"
      :class="bgColor"
    >
      <ul class="flex flex-nowrap">
        <li
          v-for="tab in props.tabs"
          :key="tab.id"
          class="bg-primary test-black w-full cursor-pointer whitespace-nowrap rounded-full border-white p-2 px-6 py-[5px] text-center text-lg font-medium"
          :class="isActive(tab.id)"
          @click="handlerClick(tab.id)"
        >
          {{ tab.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  tabs: { type: Array, default: () => [] },
  activeTab: { type: [Number, null], default: 0 },
  type: { type: Number, default: 0 } // 0:首頁最新消息使用 | 1:最新消息頁面使用
})

const isActive = computed(() => type => type === props.activeTab ? 'bg-primary-1 text-white' : '')
const bgColor = computed(() => props.type === 0 ? 'bg-white' : 'bg-neutral-1')
const emit = defineEmits(['handlerClick'])

const handlerClick = (type) => {
  emit('handlerClick', type)
}

defineOptions({
  name: 'Tabs'
})
</script>
