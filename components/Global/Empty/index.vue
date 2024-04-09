<template>
  <el-empty
    v-if="props.isShow"
    :description="props.description"
    class="mx-auto"
  />
</template>

<script setup>
const props = defineProps({
  isShow: { type: Boolean, default: false },
  description: { type: String, default: '' }
})

defineOptions({
  name: 'Empty'
})
</script>
