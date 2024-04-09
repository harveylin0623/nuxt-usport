<template>
  <div class="pt-[var(--header-mobile-h)] md:pt-[var(--header-pc-h)]">
    <div class="container py-[var(--content-pc-padding-y)]">
      <Breadcrumb
        :breadcrumbs="privacyBreadcrumbs"
        class="mb-8 w-full md:mb-[60px]"
      />
      <PageTitle
        :title="$t('seo.pageTitle.privacy')"
        class="mb-8 w-full"
      />
      <div class="flex w-full flex-col gap-5 text-justify text-base leading-7">
        <template
          v-for="(item, index) in privacyPolicy"
          :key="index"
        >
          <template v-if="multiLayeredData(index)">
            <h3>{{ item.title }}</h3>
            <ul class="list-decimal ps-[18px]">
              <li
                v-for="(content_item, content_index) in item.content"
                :key="content_index"
              >
                <ul
                  v-for="(subLayers_item, subLayers_index ) in content_item"
                  :key="subLayers_index"
                >
                  <template v-if="subLayersMultiLayeredData(index)">
                    <p v-if="subLayers_index !== 'details_content'">{{ subLayers_item }}</p>
                    <template v-else>
                      <ul
                        class="ps-5"
                        :style="{listStyleType: 'lower-alpha'}"
                      >
                        <li
                          v-for="(subLayers_multiLayered_item, subLayers_multiLayered_index ) in subLayers_item"
                          :key="subLayers_multiLayered_index"
                        >
                          {{ subLayers_multiLayered_item }}
                        </li>
                      </ul>
                    </template>
                  </template>
                  <p v-else>{{ subLayers_item }}</p>
                </ul>
              </li>
            </ul>
          </template>
          <template v-else>
            <h3>{{ item.title }}</h3>
            <ul class="list-decimal ps-[18px]">
              <li
                v-for="(content_item, content_index) in item.content"
                :key="content_index"
              >
                <p>{{ content_item }}</p>
              </li>
            </ul>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useBreadcrumbs } from '@/composables/useBreadcrumbs.js'
import { usePrivacyPolicy } from '@/composables/usePrivacyPolicy.js'

const { privacyBreadcrumbs } = useBreadcrumbs()
const { privacyPolicy } = usePrivacyPolicy()
const { t } = useI18n()

const multiLayeredData = computed(() => index => !!(index === 'article_2' || index === 'article_5'))
const subLayersMultiLayeredData = computed(() => index => !!(index === 'article_5'))

useHead({
  title: t('seo.pageTitle.privacy')
})

defineOptions({
  name: 'Privacy'
})
</script>
