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
        primary: { '500': colors.black },
        secondary: colors.zinc,
        accent: colors.sky,
        alert: colors.orange,
        error: colors.red,
        success: colors.green,
        dropShadow: {
      },
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)",
        ],
      },
      fontFamily: {
        'sans': ['Overpass', 'sans-serif'],
      },
    },
  },
  plugins: [],
}