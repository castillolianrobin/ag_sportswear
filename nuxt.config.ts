import { fileURLToPath, URL } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
    // '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
  ],
  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],

  // Fonts
  googleFonts: {
    download: true,
    base64: true,
    families: {
      'Chakra Petch': {
        wght: [300, 400, 500, 600, 700],
      },
    }
  },
  
  // Tailwind Stuff
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark',
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
