<template>
  <div class="space-y-4 rounded-20 bg-neutral-1 p-7">
    <FaqChapter
      v-for="(chapter,index) in chapters"
      :key="index"
      :chapter="chapter"
      :link-type="linkType"
    />
  </div>
</template>

<script setup>
import FaqChapter from './FaqChapter.vue'

defineProps({
  chapters: {
    type: Array,
    required: true
  },
  linkType: {
    type: String,
    required: true
  }
})

defineOptions({
  name: 'FaqBar'
})

</script>
