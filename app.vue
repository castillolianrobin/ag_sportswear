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
    <Header></Header>
    
    <!-- Main Content  -->
    <div class="relative">
      <Banner></Banner>
      
      <BannerCallToAction
        v-model:active-section="activeSection"
      ></BannerCallToAction>
    </div>

    <!-- Content -->
    <Content v-model:active-section="activeSection"></Content>
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





