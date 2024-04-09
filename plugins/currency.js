const formatDollar = (dollar) => {
  const n = 0 // n: length of decimal
  const x = 3 // x: length of sections
  const re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')'
  return dollar.toFixed(Math.max(0, n)).replace(new RegExp(re, 'g'), '$&,')
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('currency', {
    updated (el, binding) {
      el.textContent = formatDollar(binding.value)
    },
    mounted (el, binding) {
      el.textContent = formatDollar(binding.value)
    }
  })
})
