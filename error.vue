<template>
  <div>
    {{ error }}
  </div>
</template>

<script setup>
defineProps({
  error: { type: Object, required: true }
})
</script>
