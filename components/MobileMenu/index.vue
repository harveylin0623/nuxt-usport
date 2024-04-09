<template>
  <div
    class="fixed left-0 top-[var(--header-mobile-h)] z-[10] h-[calc(100dvh-var(--header-mobile-h))] w-full overflow-y-auto bg-mobile-menu bg-[length:180%_200%] bg-[center_top]"
    :class="displayStatus"
  >
    <div class="flex h-full flex-col items-center justify-center p-6">
      <div class="space-y-10 text-center">
        <NuxtLink
          v-for="(menu,index) in menuMobileList"
          :key="index"
          :to="menu.url"
          :external="menu.external"
          class="block text-xl font-medium"
        >
          {{ menu.title }}
        </NuxtLink>
      </div>
      <div class="my-10 w-full border border-[#00000033]"></div>
      <div>
        <p class="mb-8 text-center font-normal">{{ $t('download-app-popup-title') }}</p>
        <div class="w-[220px]">
          <DeviceSupport />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCommonStore } from '@/stores/common.js'
import { useMenuList } from '@/composables/useMenuList.js'
import { useLockBody } from '@/composables/useLockBody.js'
import DeviceSupport from '@/components/DeviceSupport/index.vue'

const commonStore = useCommonStore()
const { menuMobileList } = useMenuList()
const { lockBody } = useLockBody()

const displayStatus = computed(() => {
  return commonStore.headerMenuIsOpen ? ['opacity-100', 'visible'] : ['opacity-0', 'invisible']
})

watch(() => commonStore.headerMenuIsOpen, (val) => {
  lockBody(val)
})

defineOptions({
  name: 'MobileMenu'
})

</script>
