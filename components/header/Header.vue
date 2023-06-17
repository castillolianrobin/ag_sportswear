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
      fixed top-0  
      drop-shadow-lg 
      text-white text-2xl 
      flex justify-end gap-3
      overflow-hidden
      text-xs md:text-base
    "
    >
    <div 
      class="px-5 flex gap-3 bg-primary-500/50 transition-all"
      :class="showHeader ?  'max-h-full opacity-100 px-5 py-2' : 'max-h-0 opacity-0'"
    >
      <AppButton variant="text" color="primary-200" class="px-0">Home</AppButton>
      <AppButton variant="text" color="primary-200" class="px-0">About</AppButton>
      <AppButton variant="text" color="primary-200" class="px-0">Tech</AppButton>
      <AppButton variant="text" color="primary-200" class="px-0">Projects</AppButton>
    </div>

    <!-- Dark Mode Toggle -->
    <div class="my-2 md:my-5 flex items-center">
      <ToggleDarkMode></ToggleDarkMode>
    </div>
  </header>
</template>