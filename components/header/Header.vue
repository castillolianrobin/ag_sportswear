<script setup lang="ts">
// import { useWindowScroll } from '@vueuse/core';



const { y } = useWindowScroll();


const showHeader = computed(()=>(y.value > 100))


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
    <div 
      class="flex gap-3 bg-primary-500/75 transition-all rounded"
      :class="showHeader ?  'max-h-full opacity-100 px-5' : 'max-h-0 opacity-0'"
    >
      <AppButton href="#" variant="text" color="primary-200" class="px-0">Home</AppButton>
      <AppButton href="#stack" variant="text" color="primary-200" class="px-0">Tech</AppButton>
      <AppButton href="#projects" variant="text" color="primary-200" class="px-0">Projects</AppButton>
    </div>

    <!-- Dark Mode Toggle -->
    <div class="my-2 md:my-5 flex items-center">
      <ToggleDarkMode></ToggleDarkMode>
    </div>
  </header>
</template>