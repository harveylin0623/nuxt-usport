import { defineRule, configure } from 'vee-validate'

export default defineNuxtPlugin((nuxtApp) => {
  const { t } = nuxtApp.$i18n

  configure({
    validateOnBlur: true,
    validateOnChange: true,
    validateOnInput: true
  })

  defineRule('required', (value) => {
    if (!value || !value.length) {
      return t('validate.require')
    }
    return true
  })

  defineRule('email', (value) => {
    if (!value || !value.length) {
      return true
    }

    if (!/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(value)) {
      return t('validate.email')
    }
    return true
  })

  defineRule('confirmed', (value, [target], ctx) => {
    if (value === ctx.form[target]) {
      return true
    }
    return t('validate.confirm')
  })
})
