<script setup lang="ts">
import { SectionName } from './components/content/Content.vue';


const activeSection = ref<SectionName | null>(null)
</script>

<template>
  <div 
    id="app" 
    class="bg-primary-400 dark:bg-primary-950"
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
      <Banner></Banner>
      
      <BannerCallToAction
        v-model:active-section="activeSection"
        class="opacity-0 animate-fadeIn"
      ></BannerCallToAction>
    </div>

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
        class="scale-125"
      ></BannerCallToActionNameCard>
    </div>
    <!-- Content -->
    <Content 
      v-model:active-section="activeSection"
    ></Content>
    <!-- <main 
      v-if="false"
      class="
        md:hidden
        md:top-0
        md:right-0
        md:max-w-[45%]
        text-primary-950 dark:text-primary-200
        h-full
        transition-all ease-out
        overflow-auto
        bg-primary-200/90
      "
    >
      <div class="mt-20 relative">
        asdadasdasdasio hasdioha dsiopah ioashd apiosdh apioh dapiosh apsiodh asiopdh paiosdh
        <ContentAboutSection></ContentAboutSection>
      </div>
    
    </main> -->
    
  </div>
</template>





