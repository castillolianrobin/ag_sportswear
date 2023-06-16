<script setup lang="ts">
import { useDark } from '@vueuse/core';

const isDark = useDark({ disableTransition: false });


</script>

<template>
  <div id="app" class="scrollbar bg-primary-400 dark:bg-primary-950">
    <div class=" font-serif z-20 top-0 sticky w-full px-5 py-2 bg-primary-500 text-white text-2xl drop-shadow-lg flex justify-end gap-3">
      <h3 class="">Home</h3>
      <h3 class="">About</h3>
      <h3 class="">Tech</h3>
      <h3 class="">Projects</h3>

      <!-- Dark Mode Toggle -->
      <div class="flex  items-center">
        <ToggleDarkMode></ToggleDarkMode>
      </div>
    </div>
    
    <!-- Main Content  -->
    <Banner></Banner>


    <!-- About -->

    <section class="p-5 dark:text-white">
       <h2 class="mb-3 text-5xl font-bold font-serif text-primary-600 dark:text-primary-300">
        ABOUT
        </h2>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>


        <div v-if="false" class="mt-12 flex items-center">
          <!-- Icon -->
          <div class="px-24 flex-shrink-0 w-1/4">
            <div class="bg-primary-500/25 rounded-full w-full aspect-square flex items-center justify-center">
              <img 
                src="./assets/img/keyboard.png" 
                alt="keybs"
                class="w-full scale-[200%]"
              />
            </div>
          </div>
          <!--  Content -->
          <div class="px-20">
            <p class="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>

        <div v-if="false" class="mt-12 flex-row-reverse flex items-center">
          <!-- Icon -->
          <div class="px-24 flex-shrink-0 w-1/4">
            <div class="bg-primary-500/25 rounded-full w-full aspect-square flex items-center justify-center">
              <img 
                src="./assets/img/keyboard.png" 
                alt="keybs"
                class="w-full scale-[200%]"
              />
            </div>
          </div>
          <!--  Content -->
          <div class="px-20">
            <p class="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
    </section>
    
  <!-- <p class="bg-white text-black text-5xl z-50 h-full font-serif">Z z </p> -->

    <!-- <NuxtWelcome /> -->
  </div>
</template>





