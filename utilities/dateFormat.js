import dayjs from 'dayjs'

export const dateFormat = (dateTime) => {
  return dayjs(dateTime).format('YYYY.MM.DD')
}
