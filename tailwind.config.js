/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./components/**/*.{js,vue}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.js",
    "./nuxt.config.js",
  ],
  purge: {
    options: {
      safelist: ['bg-laravel', 'bg-foundations', 'bg-vue', 'bg-ef3', 'bg-javascript', 'bg-node', 'bg-sequelize', 'bg-tailwind']
    }
  },
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'laravel': '#F9322C',
        'foundations': '#1583CC',
        'vue': '#42B883',
        'ef3': '#191919',
        'javascript': '#DAB92D',
        'node': '#75AC64',
        'sequelize': '#3C76C3',
        'tailwind': '#38BDF8'
      }
    },
  },
  plugins: [],
}
