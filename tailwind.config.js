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
  safelist: [
    {
        pattern: /(bg|text|border|outline|fill)-(primary|secondary|accent)-(50|100|200|300|500|700|950)/,
        variants: ['active', 'hover', 'focus', 'group-focus-within', 'group-hover', 'disabled', 'even', 'dark'],
      },
      {
        pattern: /(bg|text|border|outline)-(white|black)/,
        variants: ['active', 'hover', 'focus', 'group-focus-within', 'group-hover', 'disabled', 'even'],
      },
    ],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.zinc,
        accent: colors.sky,
        alert: colors.orange,
        error: colors.red,
        success: colors.green,
      },
      fontFamily: {
        'sans': ['Chakra Petch'],
        'serif': ['Pixel']
      },
      animation: {
        'moon': 'pulse 5s linear infinite',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        grain: {
          '0%, 100%':  {  backgroundPosition: '0, 0' },
          '10%':  {  backgroundPosition: '-5% -10%' },
          '20%':  {  backgroundPosition: '-15% 5%' },
          '30%':  {  backgroundPosition: '7% -25%' },
          '40%':  {  backgroundPosition: '-5% 25%' },
          '50%':  {  backgroundPosition: '-15% 10%' },
          '60%':  {  backgroundPosition: '15% 0%' },
          '70%':  {  backgroundPosition: '0% 15%' },
          '80%':  {  backgroundPosition: '3% 35%' },
          '90%':  {  backgroundPosition: '-10% 10%' },
        }
      }
    },
  },
  plugins: [],
}