<template>
  <div class="pt-[var(--header-mobile-h)] md:pt-[var(--header-pc-h)]">
    <div class="w-full py-[var(--content-pc-padding-y)]">
      <div class="container">
        <div class="mb-10 flex w-full flex-col justify-between gap-y-4 2xl:flex-row">
          <PageTitle
            :title="$t('seo.pageTitle.news')"
            class="text-nowrap"
          />
          <Tabs
            :tabs="newsCategoryData"
            :active-tab="active"
            :type="1"
            class="flex w-full justify-start 2xl:w-[calc(100%-128px)] 2xl:justify-end"
            @handler-click="handlerClickTab($event)"
          />
        </div>
      </div>
      <div class="md:container">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup>
import { cmsApi } from '@/api/cms.js'

const router = useRouter()
const route = useRoute()

// TODO: 之後優化 index.vue [id].vue 可以做成同一頁，將 全部 分類的 id 設一個 99999 之類的來判斷
const { data: newsCategoryData } = await useAsyncData('newsCategoryData', async () => {
  const response = await cmsApi.cmsListCategoryInformation({ data: { type: ['news'] } })
  const newsCategoryList = await response.results.cms_list_category_information[0].cms_list_category
  const newsCategoryAll = [{ id: null, title: '全部', mapping_code: null }, ...newsCategoryList]
  return newsCategoryAll
})

const active = computed(() => +route.params.id || null)

const handlerClickTab = (e) => {
  e === null
    ? (
      router.push({ path: '/news' })
    )
    : (
      router.push({ path: `/news/${e}` })
    )
}

defineOptions({
  name: 'News'
})
</script>
