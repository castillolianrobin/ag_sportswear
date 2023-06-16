<script setup lang="ts">
import { useDark } from '@vueuse/core';

const isDark = useDark({ disableTransition: false });


</script>

<template>
  <div id="app" class="scrollbar">
    <div class="z-20 top-0 fixed w-full px-5 py-2 bg-primary-500/80 text-white drop-shadow-lg flex justify-end gap-3">
      <h3 class="text-lg">Home</h3>
      <h3 class="text-lg">About</h3>
      <h3 class="text-lg">Tech</h3>
      <h3 class="text-lg">Projects</h3>

      <button class="
          bg-primary-500 px-2 text-white
          hover:bg-primary-400 transition-all  
        "
        @click="isDark = !isDark"
      >
        {{ isDark ? 'Light' : 'Dark' }}

      </button>

    </div>
    
    <!-- Main Content  -->
    <Banner></Banner>
    
  <!-- <p class="bg-white text-black text-5xl z-50 h-full font-serif">Z z </p> -->

    <NuxtWelcome />
  </div>
</template>





