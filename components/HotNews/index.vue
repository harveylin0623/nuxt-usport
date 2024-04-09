<template>
  <div class="w-full bg-white pb-0 pt-8 md:pt-[60px]">
    <div class="mb-10 flex justify-center md:justify-between">
      <PageTitle
        :title="'熱門資訊'"
        border
      />
      <MoreButton
        class="hidden md:flex"
        :click-callback="handlerClickMoreButton"
      />
    </div>
    <div class="flex flex-wrap justify-center gap-x-1 gap-y-4 md:gap-x-3 md:gap-y-6 xl:justify-start">
      <NewsItem
        v-for="item in props.newsList"
        :key="item.id"
        :new="item"
      />
    </div>
    <MoreButton
      class="mx-4 mt-9 block md:hidden"
      :click-callback="handlerClickMoreButton"
    />
  </div>
</template>

<script setup>
import PageTitle from '@/components/Global/PageTitle/index.vue'
import MoreButton from '@/components/Global/MoreButton/index.vue'
import NewsItem from '@/components/NewsItem/index.vue'

const router = useRouter()

const props = defineProps({
  newsList: { type: Array, default: () => [] }
})

const handlerClickMoreButton = () => {
  router.push({ path: `/news` })
}
</script>
