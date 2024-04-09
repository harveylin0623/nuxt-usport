<template>
  <h1
    class="w-fit text-2xl font-bold text-black md:text-[32px]"
    :class="bottomBorder"
  >
    {{ props.title }}
  </h1>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  title: { type: String, default: '' },
  border: { type: Boolean, default: false }
})

const bottomBorder = computed(() => props.border ? 'border-b-[5px] border-solid border-primary-1 pb-1 ' : '')

defineOptions({
  name: 'PageTitle'
})
</script>
