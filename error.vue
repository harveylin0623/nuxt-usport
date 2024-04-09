<template>
  <div
    class="flex min-h-screen items-center bg-neutral-1 text-primary-1"
  >
    <div class="container mx-auto flex w-full flex-col items-center justify-center p-4 text-primary-1">
      <div class="mb-4 text-[4rem] font-semibold">{{ error.statusCode }}</div>
      <div class="mb-4 text-3xl font-semibold">{{ $t('somethingWentWrong') }}</div>
      <div class="mb-8 text-lg">{{ error.message }}</div>
      <button
        type="button"
        class="rounded border border-primary-1 px-4 py-2 hover:bg-primary-1 hover:text-white"
        @click="handleError"
      >
        {{ $t('backToHome') }}
      </button>
    </div>
  </div>
</template>

<script setup>

const handleError = () => clearError({ redirect: '/' })

const props = defineProps({
  error: { type: Object, required: true }
})
onMounted(() => {
  console.error('error:', props.error)
})
</script>
