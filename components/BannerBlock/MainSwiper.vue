<template>
  <div>
    <swiper
      :modules="modules"
      :loop="true"
      :autoplay="autoplay"
      :fade-effect="{ crossFade: true }"
      effect="fade"
      @real-index-change="onSlideChange"
    >
      <swiper-slide
        v-for="item in swiperList"
        :key="item.cms_id"
      >
        <div
          class="banner-gradient relative overflow-hidden rounded-36 border-[3px] border-transparent pt-[62.5%]"
          :class="{'cursor-pointer': item.link_type !== 'app'}"
          @click="openNewsItem(item)"
        >
          <img
            :src="item.feature_image.url"
            :alt="item.title"
            class="absolute left-0 top-0 size-full"
          />
        </div>
        <p class="mt-2 line-clamp-1 text-sm md:mt-3 md:text-lg">{{ item.title }}</p>
      </swiper-slide>
      <SwiperController ref="controller" />
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade } from 'swiper/modules'
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
const modules = ref([Autoplay, EffectFade])
const autoplay = ref({
  delay: 5000
})

const emit = defineEmits(['changeSwiperIndex'])

const onSlideChange = (swiper) => {
  emit('changeSwiperIndex', swiper.realIndex)
}

const moveSwiper = (index) => {
  controller.value.moveSlide(index)
}

defineExpose({
  moveSwiper
})

defineOptions({
  name: 'MainSwiper'
})

</script>
