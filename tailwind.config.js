const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.zinc,
        info: colors.blue,
        alert: colors.orange,
        error: colors.red,
        success: colors.green,
      },
      fontFamily: {
        'sans': ['Archivo'],
        'serif': ['VT323']
      },
      animation: {
        'moon': 'pulse 5s linear infinite',
      }
    },
  },
  plugins: [],
}

