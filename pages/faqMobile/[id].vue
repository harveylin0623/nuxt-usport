<template>
  <FaqMenuButton :title="route.query.title" />
  <Empty
    :is-show="!faqContent"
    :description="$t('emptyData')"
  />
  <div
    v-if="faqContent"
    v-dompurify-html="faqContent"
    class="cms-editor-block pt-8"
  >
  </div>
</template>

<script setup>
import { cmsApi } from '@/api/cms.js'
import FaqMenuButton from '@/components/FaqMenuButton/index.vue'

const route = useRoute()

const { data: faqContent } = await useAsyncData('pageData', async () => {
  const response = await cmsApi.cmsBookPage({ data: { page_id: route.params.id } })
  return response.results.page.content
})

useHead({
  title: route.query.title
})
</script>
