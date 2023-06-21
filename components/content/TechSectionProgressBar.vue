<script setup lang="ts">
  const props = defineProps({
    title: String,
    rating: Number,
    img: String,
    color: String,  
    accentColor: String,  
  })
</script>

<template>
  <div class="px-4 py-1 h-11 w-full relative overflow-hidden">
    <!-- Rating -->
    <div class="pl-5 w-full h-full grid grid-cols-10 gap-3 p-1 bg-secondary-300 dark:bg-secondary-800">
      <div
        v-for="rating in props.rating"
        class="flex"
      >
        <div 
          class="
            block 
            h-full w-full 
            bg-primary-500 dark:bg-primary-900
            animate-[progressBarPulse_2s_linear_infinite]
            border-2 border-primary-900 dark:border-primary-700
          "
          :style="{ animationDelay: `0.${rating}s` }"
        ></div>
      </div>
    </div>

    <!-- Label -->
    <div 
      class="
        group 
        absolute top-0 left-0 
        h-full w-fit 
      "
    >
      <div 
        class="
          relative 
          p-1 
          rounded-full h-full 
          flex items-center 
          shadow 
          border-2 border-primary-900 
          bg-primary-900 dark:bg-primary-300
        "
      >
        <div
          class="absolute rounded-full top-0 left-0 h-full w-full transition-all"
          :style="{ backgroundColor: `${props.color || '#555555EE' }AA` }"
        ></div>
        <!-- Icon -->
        <img 
          :src="props.img" 
          class="p-1 h-full aspect-square drop-shadow-md brightness-110"
          :alt="props.title"
        />
        <!-- Text -->
        <span 
          class="
            group-hover:px-2
            drop-shadow-md 
            overflow-hidden 
            w-0 group-hover:w-full 
            text-xs md:text-base whitespace-nowrap
            transition-all 
          "
          :style="{ color: props.accentColor || 'white' }"
        >
          {{ props.title }}
        </span>
      </div>
    </div>
  </div>
</template>
