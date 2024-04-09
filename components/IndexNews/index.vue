<template>
  <div class="flex w-full flex-col justify-between gap-4 py-6 ps-2 md:flex-row md:gap-10 md:py-[var(--content-pc-padding-y)] md:ps-6">
    <div class="flex w-full flex-col justify-between md:w-2/6 lg:w-1/6">
      <PageTitle
        :title="$t('seo.pageTitle.news')"
        class="mb-4 md:mb-8"
      />
      <div class="hidden md:flex">
        <MoreButton :click-callback="handlerClickMoreButton" />
      </div>
    </div>
    <div class="w-full md:w-4/6 lg:w-5/6">
      <div class="mb-4 w-full py-2 md:mb-8">
        <Tabs
          :tabs="props.newsCategoryList"
          :active-tab="active"
          @handler-click="handlerClickTab($event)"
        />
      </div>
      <NewsItem
        v-for="item in list"
        :key="item"
        :new="item"
      />
    </div>
    <div class="flex md:hidden">
      <MoreButton :click-callback="handlerClickMoreButton" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import PageTitle from '@/components/Global/PageTitle/index.vue'
import MoreButton from '@/components/Global/MoreButton/index.vue'
import Tabs from '@/components/Global/Tabs/index.vue'
import NewsItem from '@/components/IndexNews/NewsItem.vue'

const router = useRouter()

const props = defineProps({
  newsCategoryList: { type: Array, default: () => [] },
  activeTab: { type: Number, default: 0 },
  newsList: { type: Array, default: () => [] }
})

const active = ref(props.activeTab)
const list = computed(() => props.newsList.filter(item => item.id === active.value)[0].list)
const handlerClickTab = (e) => {
  active.value = e
}
const handlerClickMoreButton = () => {
  router.push({ path: `/news/${active.value}` })
}

defineOptions({
  name: 'IndexNews'
})
</script>
