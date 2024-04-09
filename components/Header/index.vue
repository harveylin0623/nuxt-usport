<template>
  <header
    class="fixed left-0 top-0 z-[10] w-full py-3"
    :class="{'header-scroll':isScrollHeader}"
  >
    <div class="container">
      <div class="flex items-center justify-between">
        <NuxtLink to="/">
          <img
            class="h-auto w-[150px] md:w-[220px]"
            src="@/assets/image/logo_color@2x.png"
            :alt="$t('logoAlt')"
          />
        </NuxtLink>
        <div class="flex items-center space-x-6">
          <NuxtLink
            v-for="(menu,index) in menuPcList"
            :key="index"
            :to="menu.url"
            :external="menu.external"
            :target="menu.target"
            class="hidden font-normal md:inline-block"
          >
            {{ menu.title }}
          </NuxtLink>
          <BaseButton
            class="btn-outline-primary group hidden md:inline-block"
            @click="commonStore.toggleuSportAppDownload(true)"
          >
            <span class="size-5 bg-donwload-normal bg-contain bg-center bg-no-repeat align-middle group-hover:bg-donwload-hover"></span>
            {{ $t('download-app') }}
          </BaseButton>
          <MenuToggleButton class="block md:hidden" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import _ from 'lodash'
import { useCommonStore } from '@/stores/common.js'
import { useMenuList } from '@/composables/useMenuList.js'
import MenuToggleButton from '@/components/MenuToggleButton/index.vue'

const commonStore = useCommonStore()
const { menuPcList } = useMenuList()
const isScrollHeader = ref(false)

const resizeHandler = () => {
  if (window.innerWidth >= 768) {
    commonStore.toggleHeaderMenu(false)
  }
}

const scrollHandler = () => {
  const scrollY = window.pageYOffset
  isScrollHeader.value = scrollY >= 10
}

const debounceResize = _.debounce(resizeHandler, 200)

onMounted(() => {
  window.addEventListener('resize', debounceResize)
  window.addEventListener('scroll', scrollHandler)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', debounceResize)
  window.removeEventListener('scroll', scrollHandler)
})

defineOptions({
  name: 'WebHeader'
})

</script>

<style lang="scss" scoped>
.header-scroll {
  background-color: rgba(#fff, 0.8);
  transition: background-color 0.3s;
}
</style>
