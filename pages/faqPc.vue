<template>
  <div class="pt-[var(--header-pc-h)]">
    <div class="w-full py-5 md:py-[var(--content-pc-padding-y)]">
      <div class="container">
        <PageTitle
          :title="$t('seo.pageTitle.faq')"
          class="mb-8 text-nowrap md:mb-10"
        />
        <div class="flex items-start">
          <div class="w-[300px]">
            <FaqBar
              :chapters="chapters"
              :link-type="'Pc'"
            />
          </div>
          <div class="w-[calc(100%-300px)] pl-[60px]">
            <NuxtPage />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFaqStore } from '@/stores/faq.js'
import { cmsApi } from '@/api/cms.js'
import FaqBar from '@/components/FaqBar/index.vue'

const faqStore = useFaqStore()

const { data: chapters } = await useAsyncData('faqData', async () => {
  const faqRes = await cmsApi.searchCmsListItem({ data: { type: 'faq' } })
  const book_id = faqRes.results.search_cms_list_item_results[0].link_block.links[0].book_id
  const bookRes = await cmsApi.cmsBook({ data: { book_id } })
  const chapters = bookRes.results.book.chapters
  faqStore.setFaqData(chapters)

  return chapters
})

onBeforeUnmount(() => {
  faqStore.setFaqData([])
})

defineOptions({
  name: 'Faq'
})

</script>
