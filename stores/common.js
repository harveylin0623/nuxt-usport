import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', () => {
  const isLoading = ref(false)
  const headerMenuIsOpen = ref(false)
  const uSportAppDownloadIsOpen = ref(false)
  const showErrorModal = ref(false)

  const setLoading = (value) => {
    isLoading.value = value
  }

  const toggleHeaderMenu = (value) => {
    headerMenuIsOpen.value = value
  }

  const toggleuSportAppDownload = (value) => {
    uSportAppDownloadIsOpen.value = value
  }

  const toggleErrorModal = (value) => {
    showErrorModal.value = value
  }

  return { isLoading, headerMenuIsOpen, uSportAppDownloadIsOpen, showErrorModal, setLoading, toggleHeaderMenu, toggleuSportAppDownload, toggleErrorModal }
})
