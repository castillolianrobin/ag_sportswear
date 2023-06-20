<script setup lang="ts">
const props = defineProps({
  hideExtra: Boolean as PropType<boolean>
})
</script>

<template>
  <div 
    class="
      px-4 p-1 2xl:p-3 
      relative 
      rounded
    "
    :class="{
      'bg-secondary-300/90 dark:bg-secondary-900/90 md:backdrop-blur': !props.hideExtra,
      'border-primary-900 dark:border-primary-400 border-2': !props.hideExtra,
    }"
  >

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

    <!-- Details -->
    <div class="w-full flex flex-col md:flex-row md:gap-3">
      <!-- Title -->
      <h3 class="ml-0.5 my-1 text-secondary-950 dark:text-secondary-400 text-sm 2xl:text-xl">
        Frontend Developer
      </h3>
    </div>
  </div>
</template>