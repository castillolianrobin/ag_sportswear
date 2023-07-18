<script setup lang="ts">
import type { SectionName } from './components/content/Content.vue';

/** SEO */
useSeoMeta({
  title: 'Lian Robin',
  ogTitle: "Lian Robin Castillo's Portfolio",
  ogType: 'website',
  description: 'Lian Robin Castillo is a web developer who have been develops interactive UI using modern frontend tools.',
  ogDescription: 'Lian Robin Castillo is a web developer who have been develops interactive UI using modern frontend tools.',
  ogImage: 'https://www.castillolianrobin.vercel.app/og.png',
  twitterImage: 'https://www.castillolianrobin.vercel.app/og.png',
  twitterCard: 'summary_large_image',
  ogUrl: 'https://www.castillolianrobin.vercel.app',
});

await preloadComponents('LoadingScreen')

const activeSection = ref<SectionName | null>(null)
const contentReady = ref(0);
const showContent = ref(false);
const CONTENT_COUNT = 2;

function openContent() {
  contentReady.value += 1
  if (contentReady.value === CONTENT_COUNT) {
    showContent.value = true;
  }
}

</script>

<template>
  <div 
    id="app" 
    class="bg-primary-300 dark:bg-primary-950"
  >

    

    <!-- Intro -->
    <LoadingScreen 
      :hide-loading="showContent"
    ></LoadingScreen>
    
    <!-- Header -->
    <Header
      class="opacity-0 animate-fadeIn"
    ></Header>
    
    <!-- Main Content  -->
    <div class="relative">
      <Banner @ready="openContent"></Banner>
      
      <LazyBannerCallToAction
        v-model:active-section="activeSection"
        class="opacity-0 animate-fadeIn"
      ></LazyBannerCallToAction>
    </div>

    <!-- Content -->
    <Content 
      v-model:active-section="activeSection"
      class="opacity-0 animate-fadeIn"
      @ready="openContent"
    ></Content>

  </div>
</template>





