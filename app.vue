<template>
  <NuxtLoadingIndicator
    color="#FF8637"
    :height="2"
    :throttle="0"
  />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const { t } = useI18n()
const templateTitle = ref(t('seo.pageTitle.template'))

useHead({
  titleTemplate: `%s - ${templateTitle.value}`
})
</script>
