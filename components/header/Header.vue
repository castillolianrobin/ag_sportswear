<script setup lang="ts">
// import { useWindowScroll } from '@vueuse/core';
import { SOCIALS } from '@/constants/SOCIALS';

/** Window Scroll compsoable */
const { y } = useWindowScroll();
/** Internal Logic */

const showHeader = computed(()=>(y.value > 100))




</script>

<template>
  <header 
    class="
      z-20 
      px-2 py-1 md:py-0
      fixed top-0 right-0
      drop-shadow-lg 
      text-white 
      flex justify-end gap-3
      overflow-hidden
      text-xs md:text-base 2xl:text-2xl
      w-full md:w-fit
      transition-colors
    "
    :class="showHeader ? 'bg-primary-500' : ''"
  >
    <!-- Mobile Navigation -->
    <div 
      class="flex justify-evenly gap-1 transition-all rounded-b flex-grow"
      :class="showHeader ?  'max-h-full opacity-100' : 'max-h-0 opacity-0'"
    >
      <AppButton href="#" variant="text" color="primary-200" class="px-0">Home</AppButton>
      <AppButton href="#about" variant="text" color="primary-200" class="px-0">About</AppButton>
      <AppButton href="#stack" variant="text" color="primary-200" class="px-0">Tech</AppButton>
      <AppButton href="#projects" variant="text" color="primary-200" class="px-0">Projects</AppButton>
    </div>

    <!-- Socials -->
    <div class="md:ml-auto hidden md:flex items-center gap-3">
      <a
        v-for="social in SOCIALS"
        :key="social.link" 
        :href="social.link"
        target="_blank"
        class="
          group
          hover:brightness-125 
          transition-all
          flex items-center justify-center
        "
      >
        <!-- Social Icon -->
        <div
          class="
            p-1 
            rounded-full 
            bg-primary-200 dark:bg-primary-900 
            shadow 
            border border-primary-900 dark:border-primary-300 
          "
        >
          <NuxtImg
            :src="social.img" 
            :alt="social.title"
            width="16px"
            height="16px"
            class="
              aspect-square 
              grayscale-100
              dark:invert
              opacity-90
            "
            :class="social?.class"
          />
        </div>
        <!-- Social Name -->
        <span 
          class="
            absolute top-full
            -translate-y-1/2 group-hover:translate-y-0 
            w-fit h-0 group-hover:h-full 
            overflow-hidden 
            text-sm
            transition-all duration-200 ease-in-out
          "
        >
          {{ social.title }}  
        </span>
      </a>
    </div>

    
    <!-- Dark Mode Toggle -->
    <div class="my-2 md:my-5 flex items-center">
      <ToggleDarkMode class="  animate-pulse-once"></ToggleDarkMode>
    </div>
  </header>
</template>