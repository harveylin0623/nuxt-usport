<template>
  <FaqBar
    :chapters="chapters"
    :link-type="'Mobile'"
  />
</template>

<script setup>
import { useFaqStore } from '@/stores/faq.js'
import { cmsApi } from '@/api/cms.js'
import FaqBar from '@/components/FaqBar/index.vue'

const { t } = useI18n()
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

useHead({
  title: t('seo.pageTitle.faq')
})

defineOptions({
  name: 'Faq'
})
</script>
