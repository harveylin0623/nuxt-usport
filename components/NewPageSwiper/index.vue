<template>
  <swiper
    :css-mode="true"
    :navigation="true"
    :pagination="{ clickable: true }"
    :modules="modules"
    class="new-page-swiper overflow-hidden rounded-lg"
  >
    <swiper-slide
      v-for="(item, index) in props.swiperList"
      :key="index"
      class="flex aspect-video items-center justify-center overflow-hidden rounded-lg"
    >
      <iframe
        v-if="item.type === 'youtube_video'"
        width="100%"
        height="100%"
        :src="`https://www.youtube.com/embed/${item.youtube_video_id}`"
      ></iframe>
      <img
        v-if="item.type === 'image'"
        :src="item.url"
        class="absolute left-0 top-0 block size-full object-cover"
      />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'

const props = defineProps({
  swiperList: {
    type: Array,
    required: true
  }
})

const modules = ref([Navigation, Pagination])
</script>

<style lang="scss">
.new-page-swiper .swiper-wrapper {
  padding-bottom: 40px;
}
.new-page-swiper {
  .swiper-pagination-bullet-active {
      background: #FF8637;
  }
  .swiper-button-prev,
  .swiper-button-next {
    background: #00000099;
    padding: 46px 10px;
    width: 48px;
    height: 120px;
    top: var(--swiper-navigation-top-offset, 40%);
  }
  .swiper-button-prev {
    border-radius: 0 5px 5px 0;
  }
  .swiper-button-next{
    border-radius: 5px 0 0 5px;
  }
  .swiper-button-prev, .swiper-rtl .swiper-button-next {
    left: 0;
  }
  .swiper-button-next, .swiper-rtl .swiper-button-prev {
    right: 0;
  }
  .swiper-button-prev::after, .swiper-button-next::after{
    content: '';
    width: 28px;
    height: 28px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .swiper-button-prev::after{
    background-image: url('@/assets/image/arrow-left-white.svg');
  }
  .swiper-button-next::after{
    background-image: url('@/assets/image/arrow-right-white.svg');
  }

  @media screen and (max-width: 640px) {
    .swiper-button-prev,
    .swiper-button-next {
      width: 38px;
      height: 80px;
    }
    .swiper-button-prev::after, .swiper-button-next::after{
      background-size: 18px 28px;
    }
  }

  @media screen and (max-width: 450px) {
    .swiper-button-prev,
    .swiper-button-next {
      top: var(--swiper-navigation-top-offset, 30%);
    }
  }
}
</style>
