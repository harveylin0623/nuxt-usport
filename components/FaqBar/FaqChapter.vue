<template>
  <div>
    <h3 class="mb-4 text-base font-medium text-neutral-3 md:text-xl md:font-bold">{{ chapter.title }}</h3>
    <div class=" space-y-1">
      <FaqPage
        v-for="page in chapter.pages"
        :key="page.id"
        :page="page"
        :link-type="linkType"
      />
    </div>
  </div>
</template>

<script setup>
import FaqPage from './FaqPage.vue'

defineProps({
  chapter: {
    type: Object,
    required: true
  },
  linkType: {
    type: String,
    required: true
  }
})

defineOptions({
  name: 'FaqChapter'
})
</script>
