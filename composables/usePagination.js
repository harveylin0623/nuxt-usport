export const usePagination = (newsData) => {
  const pageInfo = reactive({
    current: 1,
    pageSize: 12,
    total: newsData.length
  })

  const tableData = ({ data, currentPage, pageSize }) => {
    const startIndex = (currentPage - 1) * pageSize
    const endIndex = currentPage * pageSize

    return data.slice(startIndex, endIndex)
  }

  const newsDataList = computed(() => tableData({ data: newsData, currentPage: pageInfo.current, pageSize: pageInfo.pageSize }))

  const handlerChangePage = (e) => {
    pageInfo.current = e
  }

  return { newsDataList, handlerChangePage, pageInfo }
}
