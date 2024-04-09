<template>
  <header class="fixed left-0 top-0 w-full py-3">
    <div class="container">
      <div class="flex items-center justify-between">
        <NuxtLink to="/">
          <img
            class="h-auto w-[220px]"
            src="@/assets/image/logo_color@2x.png"
            :alt="$t('logoAlt')"
          />
        </NuxtLink>
        <div class="space-x-6">
          <NuxtLink
            v-for="(link,index) in linkList"
            :key="index"
            :to="link.url"
            :external="link.external"
            class="font-normal"
          >
            {{ link.title }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const i18n = useI18n()
const { t } = i18n
const linkList = reactive([
  {
    title: t('seo.pageTitle.news'),
    url: '/',
    external: false
  },
  {
    title: t('seo.pageTitle.faq'),
    url: '/',
    external: false
  },
  {
    title: t('seo.pageTitle.buyer_apply'),
    url: '/',
    external: false
  }
])

</script>

<style lang="scss" scoped>

</style>
