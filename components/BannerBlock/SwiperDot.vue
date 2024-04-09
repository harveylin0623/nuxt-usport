<template>
  <div
    class="flex items-center justify-center"
    :class="[topGutter, childGutter, flexDirection, paddingValue]"
  >
    <div
      v-for="(item, index) in swiperList"
      :key="item.cms_id"
      :class="[cursor, {'bg-primary-1': index === currentSwiperIndex}]"
      class="size-2 rounded-full bg-[#0000001A]"
      @click="clickDot(index)"
    >
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  canClick: {
    type: Boolean,
    default: false
  },
  direction: {
    type: String,
    default: 'horizontal'
  },
  swiperList: {
    type: Array,
    required: true
  },
  currentSwiperIndex: {
    type: Number,
    required: true
  }
})

const isHorizontal = computed(() => {
  return props.direction === 'horizontal'
})

const topGutter = computed(() => {
  return isHorizontal.value ? 'mt-4' : ''
})

const childGutter = computed(() => {
  return isHorizontal.value ? 'space-x-4' : 'space-y-4'
})

const flexDirection = computed(() => {
  return isHorizontal.value ? '' : 'flex-col'
})

const paddingValue = computed(() => {
  return isHorizontal.value ? 'pb-2.5' : ''
})

const cursor = computed(() => {
  return props.canClick ? 'cursor-pointer' : ''
})

const emit = defineEmits(['clickDot'])

const clickDot = (index) => {
  if (!props.canClick) { return }
  if (index === props.currentSwiperIndex) { return }
  emit('clickDot', index)
}

defineOptions({
  name: 'SwiperDot'
})

</script>
