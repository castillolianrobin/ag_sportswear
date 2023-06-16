// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    "@nuxtjs/google-fonts",
  ],

  // Fonts
  googleFonts: {
    display: "swap",
    families: {
      Archivo: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900]
      },
      VT323: {
        wght: [400]
      }
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
