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
const { createNewsList } = useDataFilter()

const { data: newsData } = await useAsyncData('newsData', async () => {
  const response = await cmsApi.searchCmsListItem({ data: { type: 'news' } })
  const newsList = createNewsList(response.results.search_cms_list_item_results)
  return newsList
})

const { newsDataList, handlerChangePage, pageInfo } = usePagination(newsData.value)

useHead({
  title: t('seo.pageTitle.news')
})
</script>
