<template>
  <div class="footer-background-position-mobile md:footer-background-position-pc min-h-[700px] bg-footerbg-mobile bg-cover bg-no-repeat text-white md:bg-footerbg-pc 2xl:bg-center">
    <div class="container py-[88px]">
      <div class="flex flex-col-reverse justify-between gap-10 pb-[92px] sm:flex-row">
        <div class="flex w-full flex-col gap-10 text-base md:w-2/5">
          <div class="h-[72.2px] w-[280px]  bg-logo-white bg-cover bg-no-repeat"></div>
          <div class="flex flex-col items-start gap-2">
            <p class="text-lg font-bold">{{ $t('contact-U-Sport') }}</p>
            <NuxtLink
              class="flex items-center justify-start gap-2 underline"
              href="tel:02-25703071"
            >
              <div class="size-4 bg-icon-phone bg-cover bg-no-repeat"></div>
              <span>02-25703071</span>
            </NuxtLink>
            <NuxtLink
              class="flex items-center justify-start gap-2 underline"
              href="mailto:ch9608@gov.taipei"
            >
              <div class="size-4 bg-icon-mail bg-cover bg-no-repeat"></div>
              <span>ch9608@gov.taipei</span>
            </NuxtLink>
            <NuxtLink
              to="/"
              class="flex items-center justify-start gap-2 underline"
              target="_blank"
            >
              <div class="size-4 bg-icon-line bg-cover bg-no-repeat"></div>
              <span>LINE</span>
            </NuxtLink>
          </div>
          <div class="flex flex-col">
            <p class="mb-2 text-lg font-bold">{{ $t('telephone-service-hours') }}</p>
            <span>{{ $t('service-hours-1') }}</span>
            <span>{{ $t('service-hours-2') }}</span>
            <span>{{ $t('service-hours-3') }}</span>
          </div>
        </div>
        <div class="flex h-fit w-full flex-row flex-wrap justify-start gap-x-10 gap-y-5 text-start text-xl font-bold sm:flex-col sm:justify-end sm:text-end md:w-3/5 md:flex-row">
          <template v-if="!isMobileFooter">
            <NuxtLink
              v-for="(menu,index) in menuPcList"
              :key="index"
              :to="menu.url"
              :external="menu.external"
              :target="menu.target"
            >
              {{ menu.title }}
            </NuxtLink>
          </template>
          <template v-else>
            <NuxtLink
              v-for="(menu,index) in menuMobileList"
              :key="index"
              :to="menu.url"
              :external="menu.external"
              :target="menu.target"
            >
              {{ menu.title }}
            </NuxtLink>
          </template>
          <NuxtLink
            to="https://onelink.to/qegwur"
            external
            target="_blank"
          >
            {{ $t('download-app') }}
          </NuxtLink>
        </div>
      </div>
      <div class="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-center">
        <div class="flex justify-start gap-10">
          <div class=" h-[57px] w-[50px] bg-logo-taipeigov bg-cover bg-no-repeat"></div>
          <div class=" h-[56px] w-[48px] bg-logo-gove bg-cover bg-no-repeat"></div>
        </div>
        <span>{{ $t('all-rights-reserved') }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMenuList } from '@/composables/useMenuList.js'

const { menuPcList, menuMobileList } = useMenuList()
const isMobileFooter = ref(false)

const resizeHandler = () => {
  if (window.innerWidth <= 768) {
    isMobileFooter.value = true
  } else {
    isMobileFooter.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', resizeHandler)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeHandler)
})

defineOptions({
  name: 'WebFooter'
})
</script>
