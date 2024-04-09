<template>
  <div class="pt-[var(--header-mobile-h)] md:pt-[var(--header-pc-h)]">
    <div class="container max-w-[960px] py-[var(--content-pc-padding-y)]">
      <Breadcrumb
        :breadcrumbs="newsBreadcrumbs"
        class="mb-10 w-full"
      />
      <Empty
        :is-show="!newPageData"
        :description="$t('emptyData')"
      />
      <template v-if="newPageData">
        <NewPageSwiper :swiper-list="newPageData.newContent.images" />
        <div class="flex flex-col gap-3 border-b pb-6 pt-4 md:pb-10 md:pt-6">
          <h1 class="text-[32px] font-bold leading-[46px]">{{ route.query.title }}</h1>
          <p>{{ $t('postAMessage') }}：{{ dateFormat(route.query.release_starts_at) }}</p>
          <p
            v-for="(item, index) in newPageData.newContent.meta"
            :key="index"
          >
            {{ item.key }}：{{ item.value }}
          </p>
        </div>
        <div
          v-dompurify-html="newPageData.newContent.content"
          class="cms-editor-block mt-6 md:mt-10"
        >
        </div>
      </template>
    </div>
    <template v-if="newPageData">
      <div
        v-if="newPageData.newsList.length > 0"
        class="bg-neutral-1"
      >
        <div class="container pt-10">
          <div class="mb-7 flex items-center justify-between md:mb-8">
            <PageTitle :title="$t('otherNews')" />
            <MoreButton
              class="hidden md:flex"
              :click-callback="handlerClickMoreButton"
            />
          </div>
        </div>
        <div class="pb-4 md:container md:pb-[60px]">
          <div class="flex flex-wrap justify-start gap-x-1 gap-y-4 sm:justify-center md:justify-start md:gap-x-3 md:gap-y-6">
            <NewsItem
              v-for="(item) in newPageData.newsList"
              :key="item.id"
              :new="item"
              :type="'new'"
            />
          </div>
        </div>
        <div class="container block pb-10 md:hidden">
          <MoreButton :click-callback="handlerClickMoreButton" />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { dateFormat } from '@/utilities/dateFormat.js'
import { useBreadcrumbs } from '@/composables/useBreadcrumbs.js'
import { useDataFilter } from '@/composables/useDataFilter.js'
import { cmsApi } from '@/api/cms.js'
import NewsItem from '@/components/NewsItem/index.vue'
import NewPageSwiper from '@/components/NewPageSwiper/index.vue'
import Empty from '@/components/Global/Empty/index.vue'

const { newsBreadcrumbs } = useBreadcrumbs()
const { createNewsList, createNewContent } = useDataFilter()

const router = useRouter()
const route = useRoute()
const categoryId = route.params.category_id
const bookId = route.params.id

const { data: newPageData } = await useAsyncData('newPageData', async () => {
  const thereAreCategories = categoryId ? { cms_list_category_ids: [categoryId] } : {}
  const test = { data: { type: 'news', ...thereAreCategories } }
  const newsData = await cmsApi.searchCmsListItem(test)
  const newsList = createNewsList(newsData.results.search_cms_list_item_results.slice(-4))
  const response = await cmsApi.cmsBook({ data: { book_id: bookId } })
  const contentResponse = await cmsApi.cmsBookPage({ data: { page_id: response.results.book.chapters[0].pages[0].page_id } })
  const newContent = createNewContent(contentResponse.results.page) || ''
  return { newContent, newsList }
})

const handlerClickMoreButton = () => {
  categoryId
    ? (
      router.push({ path: `/news/${route.params.category_id}` })
    )
    : (
      router.push({ path: `/news` })
    )
}

useHead({
  title: route.query.title
})
</script>
