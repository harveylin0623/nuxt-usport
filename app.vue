<template>
  <NuxtLoadingIndicator
    color="#f00"
    :height="2"
    :throttle="0"
  />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  titleTemplate: '%s - Site Title'
})
</script>
