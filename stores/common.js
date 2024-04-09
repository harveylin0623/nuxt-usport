import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', () => {
  const isLoading = ref(false)
  const showErrorModal = ref(false)

  const setLoading = (value) => {
    isLoading.value = value
  }

  const toggleErrorModal = (val) => {
    showErrorModal.value = val
  }

  return { isLoading, showErrorModal, setLoading, toggleErrorModal }
})
