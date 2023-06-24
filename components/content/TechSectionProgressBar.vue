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
  <div class="group px-4 py-1 h-11 w-full relative overflow-hidden">
    <!-- Rating -->
    <div 
      class="
        p-1 pl-5 
        w-full h-full 
        grid grid-cols-10 gap-3 
        bg-secondary-500/25 dark:bg-secondary-700/25
        transition-colors
        shadow
      "
    >
      <div
        v-for="rating in props.rating"
        class="flex"
      >
        <div 
          class="
            block 
            h-full w-full 
            bg-primary-500 dark:bg-primary-600
            animate-[progressBarPulse_2s_linear_infinite]
            border-2 border-primary-700 dark:border-primary-400
          "
          :style="{ animationDelay: `0.${rating}s` }"
        ></div>
      </div>
    </div>

    <!-- Label -->
    <div 
      class="
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
        <div class="h-full">
          <NuxtImg
            :src="props.img"
            height="30px"
            width="30px"
            class="p-1 h-full aspect-square drop-shadow-md brightness-110"
            :alt="props.title"
          />
        </div>
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
          {{ props.title }} {{  `${props.rating}/10`  }}
        </span>
      </div>
    </div>
  </div>
</template>
