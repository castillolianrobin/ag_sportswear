<script setup lang="ts">
import { SectionName } from './components/content/Content.vue';


const activeSection = ref<SectionName | null>(null)
</script>

<template>
  <div 
    id="app" 
    class="bg-primary-300 dark:bg-primary-950"
  >
    <!-- Html Head -->
    <Head>
      <Title>Lian Robin</Title>
    </Head>
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





