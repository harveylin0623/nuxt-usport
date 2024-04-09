<template>
  <News
    :page-info="pageInfo"
    :handler-change-page="handlerChangePage"
    :news-data-list="newsDataList"
  />
</template>

<script setup>
import { cmsApi } from '@/api/cms.js'
import { useDataFilter } from '@/composables/useDataFilter.js'
import { usePagination } from '@/composables/usePagination.js'
import News from '@/components/News/index.vue'

const { t } = useI18n()
const route = useRoute()
const { createNewsList } = useDataFilter()

const { data: newsData } = await useAsyncData('newsData', async () => {
  const response = await cmsApi.searchCmsListItem({ data: { type: 'news', cms_list_category_ids: [route.params.id] } })
  const newsList = createNewsList(response.results.search_cms_list_item_results, +route.params.id)
  // FIXME: 測試資料，記得刪除
  // const test = Array.from(Array(50).keys()).map((item) => {
  //   return { cms_id: item + 1, brand_id: item + 1, title: item + '1500運動抵用金，來登記抽獎', feature_image: { width: 749, height: 459, url: 'https://usport-file-uat.wisho2o.com/images/cms/cms20240119173047_65aa4147a0810_749_459.png' }, release_starts_at: '2024/01/19 00:00:00' }
  // })
  // return [...newsList, ...test]
  return newsList
})
const { newsDataList, handlerChangePage, pageInfo } = usePagination(newsData.value)

useHead({
  title: t('seo.pageTitle.news')
})

</script>
