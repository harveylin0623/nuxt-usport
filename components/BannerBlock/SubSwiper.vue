<template>
  <div>
    <swiper
      :loop="true"
      :slides-per-view="2"
      :space-between="30"
      :allow-touch-move="false"
      direction="vertical"
      class="h-[530px] 2xl:h-[580px]"
    >
      <swiper-slide
        v-for="item in swiperList"
        :key="item.cms_id"
      >
        <div class="border-l border-[#00000033] pl-[40px]">
          <div
            class="group relative overflow-hidden rounded-36 border-2 border-transparent pt-[62.5%] transition-all hover:border-primary-1"
            :class="{'cursor-pointer': item.link_type !== 'app'}"
            @click="openNewsItem(item)"
          >
            <img
              :src="item.feature_image.url"
              :alt="item.title"
              class="absolute left-0 top-0 size-full transition-all group-hover:scale-105"
            />
          </div>
          <p class="mt-2 line-clamp-1 text-center text-sm md:mt-3 md:text-lg">{{ item.title }}</p>
        </div>
      </swiper-slide>
      <SwiperController
        ref="controller"
        :autoplay="false"
      />
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperController from './SwiperController.vue'
import { useOpen } from '@/composables/useOpen.js'

const { openNewsItem } = useOpen()

defineProps({
  swiperList: {
    type: Array,
    required: true
  }
})

const controller = ref(null)
const moveSlider = (index) => {
  controller.value.moveSlide(index)
}

defineExpose({
  moveSlider
})

defineOptions({
  name: 'SubSwiper'
})

</script>
