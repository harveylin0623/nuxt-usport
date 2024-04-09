<template>
  <div
    class="fixed left-0 top-0 z-[13] h-dvh w-full bg-mask transition-opacity"
    :class="activeClassText"
    @click.self="closeThisPopup"
  >
    <div class="absolute left-1/2 top-1/2 w-[85%] -translate-x-1/2 -translate-y-1/2 sm:w-auto">
      <div class="mb-5 flex items-center justify-end">
        <h2 class="shrink grow text-center text-white">{{ $t('download-app-popup-title') }}</h2>
        <div
          class="size-5 cursor-pointer"
          @click.stop="closeThisPopup"
        >
          <img
            class="w-100 h-100"
            src="@/assets/image/toggle-download-popup-close.png"
            alt=""
          />
        </div>
      </div>
      <div class="flex w-full flex-col items-center justify-center rounded-36 bg-primary-2 p-8 sm:w-[482px] sm:flex-row sm:gap-x-10">
        <div class="mx-auto mb-4 w-[178px] shrink-0 grow-0 sm:mb-0">
          <img
            class="h-auto w-full"
            src="@/assets/image/download-qrcode.png"
            :alt="$t('download-app-popup-title')"
          />
        </div>
        <div class="shrink grow">
          <DeviceSupport />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCommonStore } from '@/stores/common.js'
import { useLockBody } from '@/composables/useLockBody.js'
import DeviceSupport from '@/components/DeviceSupport/index.vue'

const commonStore = useCommonStore()
const { lockBody } = useLockBody()

const activeClassText = computed(() => {
  return commonStore.uSportAppDownloadIsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
})

const closeThisPopup = () => {
  commonStore.toggleuSportAppDownload(false)
}

watch(() => commonStore.uSportAppDownloadIsOpen, (val) => {
  lockBody(val)
})

defineOptions({
  name: 'DownloadAppPopup'
})
</script>
