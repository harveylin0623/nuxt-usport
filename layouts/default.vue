<template>
  <Header />
  <section>
    <slot></slot>
  </section>
  <Footer />
  <DownloadAppPopup />
  <MobileMenu />
</template>

<script setup>
import { useCommonStore } from '@/stores/common.js'
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'
import DownloadAppPopup from '@/components/DownloadAppPopup/index.vue'
import MobileMenu from '@/components/MobileMenu/index.vue'

const nuxtApp = useNuxtApp()
const commonStore = useCommonStore()

nuxtApp.hook('page:start', () => {
  // console.log('page start')
})

nuxtApp.hook('page:finish', () => {
  // console.log('page end')
  commonStore.toggleHeaderMenu(false)
})

</script>

<style lang="scss">
@import '@/assets/scss/element-plus/index.scss';
</style>
