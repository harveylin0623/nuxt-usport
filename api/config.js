import axios from 'axios'
import { useCommonStore } from '@/stores/common.js'

export const useAxios = (options) => {
  const commonStore = useCommonStore()
  console.log(commonStore)

  const customAxios = axios.create({
    baseURL: `${process.env.BASE_API_URL}/api`
  })

  customAxios.interceptors.request.use(function (config) {
    return config
  }, function (error) {
    return Promise.reject(error)
  })

  customAxios.interceptors.response.use(function (response) {
    return response
  }, function (error) {
    return Promise.reject(error)
  })

  return customAxios({ ...options })
}
