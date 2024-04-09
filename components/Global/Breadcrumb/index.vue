<template>
  <el-breadcrumb
    separator="/"
  >
    <el-breadcrumb-item
      v-for="(item, index) in props.breadcrumbs"
      :key="index"
      :to="{ path: item.path }"
    >
      {{ item.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
const props = defineProps({
  breadcrumbs: { type: Array, default: () => [] }
})

defineOptions({
  name: 'Breadcrumb'
})
</script>
