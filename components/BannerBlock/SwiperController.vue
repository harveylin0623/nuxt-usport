<template>
  <div class="hidden">
  </div>
</template>

<script setup>
import { useSwiper } from 'swiper/vue'

const props = defineProps({
  autoplay: {
    type: Boolean,
    default: true
  }
})

const swiper = useSwiper()

const moveSlide = (index) => {
  if (props.autoplay) { swiper.value.autoplay.stop() }
  swiper.value.slideToLoop(index)
  if (props.autoplay) { swiper.value.autoplay.start() }
}

defineExpose({
  moveSlide
})

defineOptions({
  name: 'SwiperController'
})

</script>
