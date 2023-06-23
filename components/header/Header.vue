<script setup lang="ts">
// import { useWindowScroll } from '@vueuse/core';

/** Window Scroll compsoable */
const { y } = useWindowScroll();

/** Internal Logic */

const showHeader = computed(()=>(y.value > 100))

const SOCIALS = [
{
    title: 'Resume',
    img: 'https://icon-library.com/images/resume-icon-png/resume-icon-png-13.jpg',
    link: 'https://drive.google.com/file/d/1f5z0om5GDZWwjbL-bY7YWYVpmLAoiJeJ/view?usp=sharing',
    class: ''
  },  
{
    title: 'LinkedIn',
    img: 'https://cdn-icons-png.flaticon.com/512/49/49408.png',
    link: 'https://www.linkedin.com/in/lianrobincastillo/',
    class: ''
  },
  {
    title: 'GitHub',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png',
    link: 'https://github.com/castillolianrobin',
    class: 'brightness-0'
  },
];


</script>

<template>
  <header 
    class="
      z-20 
      fixed top-0 right-2
      drop-shadow-lg 
      text-white 
      flex justify-end gap-3
      overflow-hidden
      text-xs md:text-base 2xl:text-2xl
    "
  >
    <!-- Mobile Navigation -->
    <div 
      class="flex md:gap-1 bg-primary-500 transition-all rounded"
      :class="showHeader ?  'max-h-full opacity-100' : 'max-h-0 opacity-0'"
    >
      <AppButton href="#" variant="text" color="primary-200" class="px-0">Home</AppButton>
      <AppButton href="#about" variant="text" color="primary-200" class="px-0">About</AppButton>
      <AppButton href="#stack" variant="text" color="primary-200" class="px-0">Tech</AppButton>
      <AppButton href="#projects" variant="text" color="primary-200" class="px-0">Projects</AppButton>
    </div>

    <!-- Socials -->
    <div class="md:ml-auto flex items-center gap-3">
      <a
        v-for="social in SOCIALS"
        :key="social.link" 
        :href="social.link"
        target="_blank"
        class="
          group
          hover:brightness-125 
          transition-all
          flex items-center
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
          <img 
            :src="social.img" 
            :alt="social.title"
            class="
              w-4
              aspect-square 
              grayscale-100
              dark:invert
              opacity-90
            "
            :class="social?.class"
          />
        </div>
        <!-- Social Name -->
        <!-- <span 
          class="
            overflow-hidden 
            w-0 group-hover:w-fit
            absolute group-hover:relative -mx-4 group-hover:mx-2 
            transition-all duration-200 ease-in-out
          "
        >
          {{ social.title }}  
        </span> -->
      </a>
    </div>

    
    <!-- Dark Mode Toggle -->
    <div class="my-2 md:my-5 flex items-center">
      <ToggleDarkMode class="  animate-pulse-once"></ToggleDarkMode>
    </div>
  </header>
</template>