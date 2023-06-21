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
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)",
        ],
      },
      fontFamily: {
        'sans': ['Chakra Petch'],
        'serif': ['Pixel']
      },
      animation: {
        'moon': 'pulse 5s linear infinite',
        'grain': 'grain 8s steps(10) infinite',
        'blurIn': 'blurIn 0.5s ease 2s 1 forwards',
        'fadeIn': 'fadeIn 0.5s ease 2.5s 1 forwards',
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
        },
        blurIn: {
          '0%':  {  backdropFilter: 'blur(24px)', opacity: 1, },
          '100%':  { backdropFilter: 'blur(0)', opacity: 0, display: 'none', overflow: 'hidden', maxHeight: 0 },
        },
        fadeIn: {
          '0%':  { opacity: 0, },
          '100%':  { opacity: 1, },
        },
        progressBarPulse: {
          '0%, 10%': { transform: 'scale(102%)', filter: 'brightness(125%)' },
          '90%, 100%': { transform: 'scale(100%)', filter: 'brightness(100%)' }
        },
        shineMovement: {
          '0%': { left: '-20%', opacity: 1, },
          '7%': { left: '120%', opacity: 0.6, },
          '8%, 100%': { left: '-20%', opacity: 0.0, }
        }
      }
    },
  },
  plugins: [],
}