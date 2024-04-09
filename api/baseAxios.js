import dayjs from 'dayjs'
import { useAxios } from './config.js'
import { wmSign } from '@/utilities/crypto.js'

export const baseAxios = (options) => {
  const { data, ...other } = options
  const requestSchema = {
    member_access_token: '',
    request_parameter: {
      ...data
    },
    timestamp: dayjs().format('YYYY/MM/DD HH:mm:ss')
  }
  const sign = wmSign(requestSchema)

  return useAxios({ ...other, data: sign }).then(res => res.data)
}
