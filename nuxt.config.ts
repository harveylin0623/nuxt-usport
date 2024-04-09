// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'description',
          content: ''
        }
      ]
    }
  },
  components: { // 全域component
    dirs: [
      {
        path: '~/components/Global',
        global: true
      }
    ]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  vite: {
    define: {
      'process.env': process.env
    }
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@element-plus/nuxt'
  ],
  css: [
    'swiper/css',
    'swiper/css/pagination',
    'swiper/css/navigation',
    '@/assets/scss/tailwind.scss',
    '@/assets/scss/global.scss'
  ],
  devtools: { enabled: false },
  i18n: {
    langDir: 'locales',
    defaultLocale: 'zh-tw',
    strategy: 'no_prefix',
    locales: [
      {
        code: 'zh-tw',
        file: 'zh-tw.json'
      }
    ],
    detectBrowserLanguage: false
    // detectBrowserLanguage: {
    //   useCookie: true,
    //   cookieKey: 'i18n',
    //   fallbackLocale: 'zh-tw'
    // }
  }
})
