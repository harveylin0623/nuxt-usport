<template>
  <div class="flex flex-col justify-between">
    <div class="mb-10 flex flex-wrap justify-start gap-x-1 gap-y-4 sm:justify-center md:justify-start md:gap-x-3 md:gap-y-6">
      <Empty
        :is-show="newsDataList.length === 0"
        :description="$t('emptyData')"
      />
      <NewsItem
        v-for="(item) in newsDataList"
        :key="item.id"
        :new="item"
        :type="'news'"
      />
    </div>
    <Pagination
      :current="pageInfo.current"
      :page-size="pageInfo.pageSize"
      :total="pageInfo.total"
      @change-page="handlerChangePage($event)"
    />
  </div>
</template>

<script setup>
import NewsItem from '@/components/NewsItem/index.vue'
import Pagination from '@/components/Global/Pagination/index.vue'
import Empty from '@/components/Global/Empty/index.vue'

defineProps({
  pageInfo: { type: Object, default: () => {} },
  newsDataList: { type: Array, required: true },
  handlerChangePage: { type: Function, default: () => {} }
})

defineOptions({
  name: 'NewsPage'
})

</script>
