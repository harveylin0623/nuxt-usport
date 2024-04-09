<template>
  <div
    class="group flex w-full flex-col gap-1 border-b-[1px] border-solid border-white py-3 text-lg font-medium md:flex-row md:gap-10 md:py-5"
    :class="{'cursor-pointer': props.new.link_type !== 'app'}"
    @click="openNewsItem(props.new)"
  >
    <p class="w-[120px] text-neutral-4 transition-all group-hover:text-primary-1">{{ dateFormat(props.new.release_starts_at) }}</p>
    <p class="line-clamp-2 w-full break-words text-black transition-all group-hover:text-primary-1 sm:line-clamp-1">{{ props.new.title }}</p>
  </div>
</template>

<script setup>
import { dateFormat } from '@/utilities/dateFormat.js'
import { useOpen } from '@/composables/useOpen.js'

const { openNewsItem } = useOpen()
const props = defineProps({
  new: { type: Object, default: () => {} }
})
defineOptions({
  name: 'NewsItem'
})
</script>
