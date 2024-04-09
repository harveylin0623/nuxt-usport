<template>
  <div>
  </div>
</template>

<script setup>
import { useFaqStore } from '@/stores/faq.js'

const router = useRouter()
const faqStore = useFaqStore()
const redirect = () => { // 取得store裡第一筆資料並做導頁
  if (faqStore.faqData.length === 0) {
    return
  }
  const { pages } = faqStore.faqData[0]
  if (pages.length === 0) {
    return
  }
  const { title, page_id } = pages[0]
  router.replace(`/faqPc/${page_id}?title=${title}`)
}

onMounted(() => {
  redirect()
})

</script>
