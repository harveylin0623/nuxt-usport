<template>
  <button
    class="btn-more group flex items-center justify-center gap-5"
    :class="[buttonType]"
    @click="clickHandler"
  >
    <div class="relative size-[35px] bg-more-btn-arrow-right bg-[length:16px_16px] bg-[9px_10px] bg-no-repeat md:size-[58px] md:bg-[length:26px_9px] md:bg-center">
      <div class="circle absolute size-[35px] scale-100 rounded-full border border-solid border-black transition-all group-hover:scale-125 md:size-[58px]"></div>
    </div>
    <span
      v-dompurify-html="buttonText"
      class="line-clamp-1 shrink grow"
    ></span>
  </button>
</template>

<script setup>
const props = defineProps({
  text: { type: String, default: '查看更多' },
  buttonType: { type: String, default: '' },
  clickCallback: { type: Function, default: () => {} }
})

const buttonText = computed(() => props.text.replace(/\n/g, '<br/>'))

const clickHandler = () => {
  props.clickCallback()
}

defineOptions({
  name: 'MoreButton'
})
</script>
