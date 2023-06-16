<script setup lang="ts">
// import { useWindowScroll } from '@vueuse/core';



const { y } = useWindowScroll();


const showHeader = computed(()=>(y.value > 100))


</script>

<template>
  <header 
    class="
      z-20 
      w-full  
      sticky top-0 
      bg-primary-500 dark:bg-primary-900 
      drop-shadow-lg 
      text-white text-2xl font-serif 
      flex justify-end gap-3
      overflow-hidden
      transition-all
    "
    :class="showHeader ?  'max-h-full opacity-100 px-5 py-2' : 'max-h-0 opacity-0'"
  >
    <AppButton variant="text" color="primary-200">Home</AppButton>
    <AppButton variant="text" color="primary-200">About</AppButton>
    <AppButton variant="text" color="primary-200">Tech</AppButton>
    <AppButton variant="text" color="primary-200">Projects</AppButton>

    <!-- Dark Mode Toggle -->
    <div class="flex  items-center">
      <ToggleDarkMode></ToggleDarkMode>
    </div>
  </header>
</template>