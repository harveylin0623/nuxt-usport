import { defineStore } from 'pinia'

export const useFaqStore = defineStore('faq', () => {
  const faqData = ref([])

  const setFaqData = (payload) => {
    faqData.value = payload
  }

  return { faqData, setFaqData }
})
