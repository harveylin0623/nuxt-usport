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
        'neutral-5': '#4A4A4A'
      },
      borderRadius: {
        36: '36px',
        20: '20px'
      }
    }
  },
  plugins: []
}
