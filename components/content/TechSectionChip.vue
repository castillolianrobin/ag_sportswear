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
  <!-- Label -->
  <div 
      class="
        group 
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
          border-2 border-secondary-100 dark:border-secondary-500 
          bg-primary-900 dark:bg-primary-300
          overflow-hidden
        "
      >
        <div
          class="absolute rounded-full top-0 left-0 h-full w-full transition-all"
          :style="{ backgroundColor: `${props.color || '#555555EE' }DD` }"
        ></div>
        <div>

        <!-- Shine -->
        <div 
          class="
            w-5 h-full 
            absolute top-0 left-1/2
            border-l-8 border-r-8 border-white/30
            shadow
            skew-x-12
            transition-all
            animate-[shineMovement_5s_linear_infinite]
          "
        ></div>
          
        </div>
        <!-- Icon -->
        <img 
          :src="props.img" 
          class="p-1 h-6 aspect-square drop-shadow-md brightness-110"
          :alt="props.title"
        />
        <!-- Text -->
        <span 
          class="
            px-2
            drop-shadow-md 
            overflow-hidden 
            w-full 
            text-xs md:text-base whitespace-nowrap
            transition-all 
          "
          :style="{ color: props.accentColor || 'white' }"
        >
          {{ props.title }}
        </span>
      </div>
    </div>
</template>
