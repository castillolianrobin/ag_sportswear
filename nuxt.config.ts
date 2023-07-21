import { fileURLToPath, URL } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'nuxt-icon'
  ],
  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],

  // Fonts
  googleFonts: {
    download: true,
    base64: true,
    families: {
      'Overpass': {
        wght: [300, 400, 500, 600, 700],
      },
    }
  },
  
  // Tailwind Stuff
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
