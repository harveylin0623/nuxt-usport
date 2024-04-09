<template>
  <div>
    <div class="h-auto bg-topbg-pc bg-cover bg-center pb-2.5 md:pb-10 md:pt-[var(--header-pc-h)]">
      <div class="container pt-[calc(var(--header-mobile-h)+20px)] md:pt-[60px] ">
        <BannerBlock
          :banner-list="homeData.bannerList"
        />
      </div>
    </div>
    <div class="md:container">
      <HotNews :news-list="homeData.hotNewsList" />
    </div>
    <div class="index-news-bg-left-pc mb-[40px] mt-8 pl-4 md:my-[60px]">
      <div class="index-news-bg-right-pc container h-full rounded-s-36">
        <IndexNews
          :news-category-list="homeData.newsCategoryList"
          :active-tab="homeData.newsCategoryList[0].id"
          :news-list="homeData.newsList"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMeta } from '@/composables/useMeta.js'
import { cmsApi } from '@/api/cms.js'
import { useDataFilter } from '@/composables/useDataFilter.js'
import BannerBlock from '@/components/BannerBlock/index.vue'
import HotNews from '@/components/HotNews/index.vue'
import IndexNews from '@/components/IndexNews/index.vue'

const { homeMeta } = useMeta()
const { createNewsList, createBannerList, createIndexNewsList } = useDataFilter()

const { data: homeData } = await useAsyncData('homeData', async () => {
  const [bannerData, hotNewsData, newsCategoryData] = await Promise.all([
    cmsApi.searchCmsListItem({ data: { type: 'home_ad' } }),
    cmsApi.searchCmsListItem({ data: { type: 'news' } }),
    cmsApi.cmsListCategoryInformation({ data: { type: ['news'] } })
  ])
  const hotNewsList = createNewsList(hotNewsData.results.search_cms_list_item_results.slice(0, 8))
  const bannerList = createBannerList(bannerData.results.search_cms_list_item_results)
  const newsCategoryList = newsCategoryData.results.cms_list_category_information[0].cms_list_category
  const newsCategoryIds = newsCategoryList.map(item => item.id)
  const promises = newsCategoryIds.map(categoryId => cmsApi.searchCmsListItem({ data: { type: 'news', cms_list_category_ids: [categoryId] } }))
  const newsData = await Promise.all(promises)
  const newsList = newsCategoryIds.map((id, index) => { return { id, list: newsData.map(item => createIndexNewsList(item.results.search_cms_list_item_results.slice(0, 5), id))[index] } })
  return { bannerList, hotNewsList, newsCategoryList, newsList }
})

useHead(homeMeta)

defineOptions({
  name: 'Home'
})
</script>
