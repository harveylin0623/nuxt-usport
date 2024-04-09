<template>
  <h2 class="mb-6">{{ route.query.title }}</h2>
  <Empty
    :is-show="!faqContent"
    :description="$t('emptyData')"
  />
  <div
    v-if="faqContent"
    v-dompurify-html="faqContent"
    class="params cms-editor-block"
  >
  </div>
</template>

<script setup>
import { cmsApi } from '@/api/cms.js'
import Empty from '@/components/Global/Empty/index.vue'

const route = useRoute()

const { data: faqContent } = await useAsyncData('pageData', async () => {
  const response = await cmsApi.cmsBookPage({ data: { page_id: route.params.id } })
  return response.results.page.content
})

useHead({
  title: route.query.title
})

</script>
