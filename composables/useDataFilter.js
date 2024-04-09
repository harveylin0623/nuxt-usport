export const useDataFilter = () => {
  const createBannerList = (lists) => {
    return lists.reduce((prev, current) => {
      const { cms_id, brand_id, title, feature_image, link_block, release_starts_at } = current
      const { book_id, type, hyperlink_url } = link_block.links[0]
      prev.push({ cms_id, brand_id, title, feature_image, release_starts_at, book_id, link_type: type, hyperlink_url })
      return prev
    }, [])
  }

  const createNewsList = (lists, categoryId) => {
    return lists.reduce((prev, current) => {
      const { cms_id, brand_id, title, feature_image, release_starts_at, link_block } = current
      const { book_id, type, hyperlink_url } = link_block.links[0]
      prev.push({ cms_id, brand_id, title, feature_image, release_starts_at, book_id, link_type: type, hyperlink_url, category_id: categoryId })
      return prev
    }, [])
  }

  const createIndexNewsList = (lists, categoryId) => {
    return lists.reduce((prev, current) => {
      const { cms_id, brand_id, title, release_starts_at, link_block } = current
      const { book_id, type, hyperlink_url } = link_block.links[0]
      prev.push({ cms_id, brand_id, title, release_starts_at, book_id, link_type: type, hyperlink_url, category_id: categoryId })
      return prev
    }, [])
  }

  const createNewContent = (newContent) => {
    const { content, images, meta } = newContent
    return { content, images, meta }
  }

  return { createBannerList, createNewsList, createIndexNewsList, createNewContent }
}
