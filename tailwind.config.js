/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1000px',
        xl: '1200px',
        '2xl': '1440px'
      },
      colors: {
        'primary-1': '#FF8637',
        'primary-2': '#F6EEE8',
        'secondary-1': '#00497D',
        'secondary-2': '#ECF4FA',
        'neutral-1': '#F8F8F8',
        'neutral-2': '#EAEAEA',
        'neutral-3': '#C9C9C9',
        'neutral-4': '#797979',
        'neutral-5': '#4A4A4A',
        mask: 'rgba(0,0,0,0.6)'
      },
      borderRadius: {
        36: '36px',
        20: '20px'
      },
      backgroundImage: {
        'donwload-normal': 'url("@/assets/image/cloud-download.png")',
        'donwload-hover': 'url("@/assets/image/cloud-download-hover.png")',
        'toggle-menu-open': 'url("@/assets/image/toggle-menu-open.png")',
        'toggle-menu-close': 'url("@/assets/image/toggle-menu-close.png")',
        'mobile-menu': 'url("@/assets/image/img_menubg@3x.png")',
        'topbg-pc': 'url("@/assets/image/img_topbg_pc-1.png")',
        'newsbg-pc': 'url("@/assets/image/img_newsbg_pc.png")',
        'newsbg-mobile': 'url("@/assets/image/img_newsbg_mobile.png")',
        'footerbg-pc': 'url("@/assets/image/img_footerbg_pc.webp")',
        'footerbg-mobile': 'url("@/assets/image/img_footerbg_mobile.webp")',
        'more-btn-arrow-right': 'url("@/assets/image/icon_morebtnarrow_right.svg")',
        'logo-white': 'url("@/assets/image/logo_white.png")',
        'logo-taipeigov': 'url("@/assets/image/logo_taipeigov.png")',
        'logo-gove': 'url("@/assets/image/logo_gove.png")',
        'icon-line': 'url("@/assets/image/icon_line.svg")',
        'icon-mail': 'url("@/assets/image/icon_mail.svg")',
        'icon-phone': 'url("@/assets/image/icon_phone.svg")',
        'icon-arrow-left': 'url("@/assets/image/icon_arrow_left.svg")',
        'icon-arrow-right': 'url("@/assets/image/icon_arrow_right.svg")',
        'icon-faq-menu': 'url("@/assets/image/faq_menu.svg")'
      }
    }
  },
  plugins: []
}
