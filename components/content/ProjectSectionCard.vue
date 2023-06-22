<script setup lang="ts">
import { TECHONOLOGIES } from '@/constants/TECHNOLOGIES'
const props = defineProps({
  img: String,
  title: String,
  description: String,
  link: String,
  stack: Array as PropType<{ title: string, color: string, accentColor?: string }[]> 
})

</script>

<template>
  <a 
    class="
      group/project-card
      p-2
      cursor-pointer
      bg-primary-200 dark:bg-primary-950
      border-primary-500
      overflow-hidden rounded shadow
      transition-all
    "
    :href="props.link"
    target="_blank"
  >
    <div class="flex gap-3">
      <!-- Image -->
      <div class="w-1/4 flex-shrink-0">
        <img 
          :src="props.img" 
          :alt="props.title"
          class="aspect-square object-cover" 
        />
      </div>

      <div>
        <!-- Title -->
        <div class="flex items-center gap-3">

          <h3 
            class="
              group-hover/project-card:px-2
              font-semibold 
              relative 
              flex 
              justify-center 
              w-fit
              group-hover/project-card:text-white
              transition-all
            "
          >
            <!-- On hover effect -->
            <span 
              class="
                absolute 
                h-full w-0 group-hover/project-card:w-full
                opacity-0 group-hover/project-card:opacity-100
                bg-primary-500
                rounded-full
                transition-all ease-in-out duration-300
              "
            ></span>
            <span class="relative text-center">{{ props.title  }}</span>
          </h3>
          <button
            class="
              text-xs text-primary-900 font-bold
              w-0 group-hover/project-card:md:w-fit
              overflow-hidden
              whitespace-nowrap
              transition-all
            "
          >
            Click to Visit
          </button>
        </div>
        <!-- Description -->
        <p class="text-secondary-600 dark:text-secondary-400 text-sm">
          {{ props.description || 'No Description'  }}
        </p>
      </div>
    </div>

    <!-- Stack Badges -->
    <div class="my-3 flex flex-wrap gap-3 text-secondary-200">
      <span 
        v-for="techStack in props.stack"
        :key="`${props.title}-${techStack}`"
        class="px-3 rounded-full text-sm shadow"
        :style="{ 
          backgroundColor: techStack?.color,
          color: techStack?.accentColor || 'white'  
        }"
      >
        {{ techStack.title }}
      </span>
    </div>
  </a>
</template>