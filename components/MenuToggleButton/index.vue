<template>
  <div
    class="size-9 cursor-pointer rounded-full bg-contain bg-center bg-no-repeat"
    :class="bgClassText"
    @click="toggleHandler"
  >
  </div>
</template>

<script setup>
import { useCommonStore } from '@/stores/common.js'

const commonStore = useCommonStore()

const bgClassText = computed(() => {
  return commonStore.headerMenuIsOpen ? 'bg-toggle-menu-close' : 'bg-toggle-menu-open'
})

const toggleHandler = () => {
  commonStore.toggleHeaderMenu(!commonStore.headerMenuIsOpen)
}

defineOptions({
  name: 'MenuToggleButton'
})

</script>
