<template>
  <div
    class="group flex aspect-video w-[calc(50%-2px)] flex-col justify-start border-b-[1px] border-solid border-neutral-3 pb-1 transition-all xl:w-[calc(33%-6px)] 2xl:w-[calc(25%-12px)]"
    :class="[{'cursor-pointer': props.new.link_type !== 'app'}, arrangeStyle]"
    @click="openNewsItem(props.new)"
  >
    <div class="news-item-gradient relative aspect-video w-full overflow-hidden bg-slate-300 transition-all after:absolute after:bottom-0 after:h-1 after:w-full after:bg-neutral-3 after:content-[''] md:rounded-t-lg ">
      <img
        v-if="props.new.feature_image.url"
        :src="props.new.feature_image.url"
        alt=""
        class="size-full object-cover transition-all group-hover:scale-[110%]"
      />
    </div>
    <div class="px-3 py-2 md:p-5">
      <h3 class="line-clamp-2 break-words text-sm font-medium text-black transition-all group-hover:text-primary-1 md:text-lg">{{ props.new.title }}</h3>
      <span class="mt-2 w-full text-[10px] text-neutral-4 md:text-base">{{ dateFormat(props.new.release_starts_at) }}</span>
    </div>
  </div>
</template>

<script setup>
import { dateFormat } from '@/utilities/dateFormat.js'
import { useOpen } from '@/composables/useOpen.js'

const { openNewsItem } = useOpen()
const props = defineProps({
  new: { type: Object, default: () => {} },
  type: { type: String, default: 'index' }
})

const arrangeStyle = computed(() => {
  const style = {
    index: ' sm:w-[calc(25%-3px)] md:w-[calc(50%-6px)]',
    new: ' sm:w-[calc(50%-6px)] md:w-[calc(50%-6px)]',
    news: ' sm:w-[calc(50%-6px)] md:w-[calc(33%-6px)]'
  }

  return style[props.type]
})

defineOptions({
  name: 'NewsItem'
})
</script>
