<template>
  <div class="flex items-start justify-center">
    <div class="w-full pr-0 xl:w-[calc(100%-320px)] xl:pr-10 2xl:w-[calc(100%-400px)]">
      <div class="flex">
        <div class="flex w-0 items-center justify-end overflow-hidden md:w-[30px] xl:w-[calc(100%-768px)] 2xl:w-[calc(100%-900px)]">
          <SwiperDot
            :can-click="true"
            :swiper-list="bannerList"
            :current-swiper-index="currentSwiperIndex"
            direction="vertical"
            class="translate-x-[-12px]"
            @click-dot="clickDot"
          />
        </div>
        <div class="w-full shrink-0 grow-0 md:w-[calc(100%-30px)] xl:w-[768px] 2xl:w-[900px]">
          <MainSwiper
            ref="mainSlider"
            :swiper-list="bannerList"
            @change-swiper-index="changeSwiperIndex"
          />
          <div class="block md:hidden">
            <SwiperDot
              :swiper-list="bannerList"
              :current-swiper-index="currentSwiperIndex"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="hidden shrink-0 grow-0 xl:block xl:w-[320px] 2xl:w-[400px]">
      <SubSwiper
        ref="subSlider"
        :swiper-list="subBannerList"
      />
    </div>
  </div>
</template>

<script setup>
import _ from 'lodash'
import MainSwiper from './MainSwiper.vue'
import SubSwiper from './SubSwiper.vue'
import SwiperDot from './SwiperDot.vue'

const props = defineProps({
  bannerList: {
    type: Array,
    required: true
  }
})

const currentSwiperIndex = ref(0)
const mainSlider = ref(null)
const subSlider = ref(null)
const subBannerList = ref([])

subBannerList.value = _.cloneDeep(props.bannerList).reverse()

const changeSwiperIndex = (index) => {
  subSlider.value.moveSlider(index)
  currentSwiperIndex.value = index
}

const clickDot = (index) => {
  mainSlider.value.moveSwiper(index)
  currentSwiperIndex.value = index
}

defineOptions({
  name: 'BannerBlock'
})

</script>
