import { baseAxios } from './baseAxios.js'
export const cmsApi = {
  searchCmsListItem (payload) {
    return baseAxios({
      url: '/cms/search_cms_list_item',
      method: 'post',
      ...payload
    })
  },
  cmsListCategoryInformation (payload) {
    return baseAxios({
      url: '/cms/cms_list_category_information',
      method: 'post',
      ...payload
    })
  },
  cmsBook (payload) {
    return baseAxios({
      url: '/cms/cms_book',
      method: 'post',
      ...payload
    })
  },
  cmsBookPage (payload) {
    return baseAxios({
      url: '/cms/cms_book_page',
      method: 'post',
      ...payload
    })
  }
}
