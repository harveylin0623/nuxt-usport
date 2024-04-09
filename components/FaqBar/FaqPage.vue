<template>
  <NuxtLink
    v-slot:default="{ isExactActive }"
    :to="pageLink"
    class="block"
  >
    <div
      class="rounded-lg px-0 py-2 text-lg md:px-5 md:text-xl"
      :class="{'bg-primary-2':isExactActive && !isMobileType}"
    >
      {{ page.title }}
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  page: {
    type: Object,
    required: true
  },
  linkType: {
    type: String,
    required: true
  }
})

const isMobileType = props.linkType === 'Mobile'

const pageLink = computed(() => `/faq${props.linkType}/${props.page.page_id}?title=${props.page.title}`)

defineOptions({
  name: 'FaqPage'
})
</script>
