<template>
  <div id="default-layout">
    <Header />
    <slot></slot>
  </div>
</template>

<script setup>
import Header from '@/components/Header/index.vue'

const nuxtApp = useNuxtApp()

nuxtApp.hook('page:start', () => {

})
nuxtApp.hook('page:finish', () => {

})

</script>

<style lang="scss">
@import '@/assets/scss/element-plus/dialog.scss';
</style>
