<template>
  <div
    class="flex"
    :class="[flexDirection, { 'space-y-4': !isReverse }]"
  >
    <NuxtLink
      to="/"
      target="_blank"
      external
    >
      <img
        src="@/assets/image/android-download.png"
        alt=""
      />
      <p class="mt-1 text-center text-xs">{{ $t('android-support') }}</p>
    </NuxtLink>
    <NuxtLink
      to="/"
      target="_blank"
      :class="{'mb-4':isReverse}"
      external
    >
      <img
        src="@/assets/image/ios-download.png"
        alt=""
      />
      <p class="mt-1 text-center text-xs">{{ $t('ios-support') }}</p>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  flexDirection: {
    type: String,
    default: 'flex-col' // flex-col-reverse
  }
})

const isReverse = computed(() => {
  return props.flexDirection === 'flex-col-reverse'
})

defineOptions({
  name: 'DeviceSupport'
})
</script>
