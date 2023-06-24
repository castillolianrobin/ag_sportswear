<script setup lang="ts">
import { SectionName } from './components/content/Content.vue';


/** SEO */
useServerSeoMeta({
  title: 'Lian Robin',
  ogTitle: "Lian Robin Castillo's Portofolio",
  description: 'Lian Robin Castillo is a web developer who have been developing itneractive UI.',
  ogDescription: 'Lian Robin Castillo is a web developer who have been developing itneractive UI.',
  ogImage: 'https://www.castillolianrobin.vercel.app/og.png',
  twitterImage: 'https://www.castillolianrobin.vercel.app/og.png',
  twitterCard: 'summary_large_image',
})

const activeSection = ref<SectionName | null>(null)
</script>

<template>
  <div 
    id="app" 
    class="bg-primary-300 dark:bg-primary-950"
  >
    <useServerSeoMeta>
      <Meta name="image" content="https://www.castillolianrobin.vercel.app/og.png"></Meta>
    </useServerSeoMeta>
    <!-- Header -->
    <Header
      class="opacity-0 animate-fadeIn"
    ></Header>
    
    <!-- Main Content  -->
    <div class="relative">
      <LazyBanner></LazyBanner>
      
      <BannerCallToAction
        v-model:active-section="activeSection"
        class="opacity-0 animate-fadeIn"
      ></BannerCallToAction>
    </div>

    <!-- Content -->
    <Content 
      v-model:active-section="activeSection"
      class="opacity-0 animate-fadeIn"
    ></Content>
    

    <!-- Intro -->
    <div 
      class="
        z-20 
        fixed top-0 left-0 
        w-full h-full
        flex items-center justify-center
        bg-primary-200/25 dark:bg-primary-950/25
        backdrop-blur-xl
        animate-blurIn
      "
    >
      <BannerCallToActionNameCard 
        hide-extra
        class="p-2 scale-125 bg-primary-200/90 dark:bg-primary-950/90 shadow"
      ></BannerCallToActionNameCard>
    </div>

  </div>
</template>





