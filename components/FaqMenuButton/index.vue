<template>
  <NuxtLink
    to="/faqMobile"
    class="flex flex-row justify-between gap-5 rounded-20 bg-neutral-1 px-4 py-[17px]"
  >
    <h3 class="w-[calc(100%-48px)] text-justify text-lg font-semibold">{{ title }}</h3>
    <div class="size-7 bg-icon-faq-menu bg-cover bg-no-repeat"></div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' }
})
</script>

<style lang="scss" scoped>

</style>
