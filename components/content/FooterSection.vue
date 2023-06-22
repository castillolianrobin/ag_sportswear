<script setup lang="ts">
import { TECHONOLOGIES } from '~/constants/TECHNOLOGIES';


const tools = [
  TECHONOLOGIES.NUXT,
  TECHONOLOGIES.TAILWIND,
  { ...TECHONOLOGIES.VERCEL, class: 'invert'},
];

const assetReference = [
  {
    title: 'Font (Chakra Petch)',
    link: 'https://fonts.google.com/specimen/Chakra+Petch',
    linkName: 'Google Fonts',

  },
  {
    title: 'Pixel Working Sprite',
    link: 'https://www.artstation.com/artwork/B34GZl',
    linkName: 'Nazib Hamdan',
  },
  {
    title: 'Pixel Cat Sprite',
    link: 'https://www.artstation.com/artwork/B34GZl',
    linkName: 'Nazib Hamdan',
  },
  {
    title: 'Pixel Skyscraper Night/Day Background',
    link: 'https://8pxl.tumblr.com/',
    linkName: '8pxl (Reddit: u/Softwaring)',
  },
  {
    title: 'Pixel Interior',
    link: 'https://rare-gallery.com/907554-pixel-art-window-indoors-cats-lamp-rain-animals-digital-.html',
    linkName: 'Rare Gallery',
  },
]
</script>

<template>
  <footer
    id="footer" 
    class="
      -m-5
      pb-5  
      md:absolute 
      h-full md:w-full
      bg-primary-600 dark:bg-primary-400
      text-secondary-100 dark:text-secondary-950
      p-5
      flex flex-col gap-6
    "
  >

    <!-- Contact Me -->
    <div class="hidden"> 
      Do you need my expertise?
    </div>
    
    <!-- Made With -->
    <div>
      <h5 class="text-lg font-semibold text-center md:text-start">Made with:</h5>

      <div class="mt-2 flex gap-4 justify-center md:justify-start">
        <div
          v-for="tool in tools" 
          :key="tool.title"
          class="
            group 
            p-1 hover:px-2
            rounded-full
            flex gap-2 items-center
            hover:bg-secondary-100
            transition-all
          "
        >
          <img
            :src="tool.img" 
            :alt="tool.title"
            class="
              w-8  
              drop-shadow-md
            "
          />
          <span class="group-hover:mx-1 w-0 group-hover:w-fit overflow-hidden transition-all text-xl font-semibold text-primary-800">
            {{ tool.title }}
          </span>
        </div>

      </div>
    </div>
    
    <!-- "Borrowed" Assets" -->
    <div>
      <h5 class="text-lg font-semibold text-center md:text-start">Assets</h5>

      <div class="mt-5 flex flex-col gap-2">
        <div 
          v-for="asset in assetReference"
          :key="asset.title" 
          class="grid grid-cols-2 gap-3 text-xs md:text-sm"
        >
          <!-- Asset Title -->
          <di class="text-end md:text-start">
            {{ asset.title  }}
          </di>
          <!-- Asset Link -->
          <a 
            :href="asset.link" 
            target="_blank"
            class="
              py-0.5 hover:px-3
              w-fit
              text-secondary-200
              hover:text-primary-800
              hover:bg-secondary-100
              transition-all
            "
          >
            {{ asset.linkName }}
          </a>  
        </div>
      </div>
    </div>
  </footer>
</template>