<script setup lang="ts">
import { SectionName } from '../content/Content.vue';

const props = defineProps({
  activeSection: {
    type: String as PropType<SectionName | null>,
    default: 'stack'
  },
})

const emits = defineEmits(['update:activeSection']);


function setActiveSection(sectionName: SectionName) {
  emits('update:activeSection', sectionName);
  scrollToElement(sectionName);
}

function scrollToElement(id: SectionName)  {
  const el = document.getElementById(id);
  console.log('testing', el, `#${id}`)
  if (el) {
    el.scrollIntoView();
  }
}

</script>


<template>
  
  <!-- Call to action -->
  <div
    class="
      w-fit
      absolute
      top-3 md:top-5 2xl:top-12
      left-0 md:left-5   2xl:left-12
      md:scale-100 2xl:scale-100 
      flex flex-col items-start
    "
  >

    <div 
      class="
        px-4 p-1 2xl:p-3 
        relative 
        bg-secondary-300/90 dark:bg-secondary-900/90
        border-primary-900 dark:border-primary-400 border-2 
        rounded
      "
    >
      <!-- Grain -->
      <!-- <div 
        class="
          transition
          absolute top-0 left-0 opacity-30
          animate-grain
          w-full h-full
          bg-[length:200%]
          bg-[url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/paper-pattern.png)]
        " 
      ></div> -->

      <!-- Name -->
      <h1 
        class="
          z-20
          relative
          text-xl md:text-3xl 2xl:text-5xl 
          text-primary-950 dark:text-primary-200
          drop-shadow-lg shadow-primary-50
           border-secondary-500
          transition-colors
        "
      >
        Lian Robin Castillo
      </h1>

      <h3 class="ml-0.5 my-1 text-secondary-950 dark:text-secondary-200">Frontend Developer</h3>
    </div>
    <!-- Controls -->
    <div 
      class="
        py-2 pl-2 
        relative
        flex flex-col items-start gap-1 2xl:gap-5 
        text-sm 2xl:text-xl font-bold 
        "
        dark:text-primary-500
    >
      
      <!-- <AppButton variant="text" color="primary-200" href="#about">About</AppButton> -->
      <BannerCallToActionButton 
        @click="setActiveSection('stack')"
      >
        Tech Stack
      </BannerCallToActionButton>
      
      <BannerCallToActionButton 
        @click="setActiveSection('projects')"
      >
        Projects
      </BannerCallToActionButton>
      
    </div>
  </div>
</template>