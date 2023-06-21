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
      p-2
      cursor-pointer
      hover:scale-[101%]
      bg-primary-200 hover:bg-primary-50 dark:bg-primary-950 dark:hover:bg-primary-900
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
        <h3 class="font-semibold">{{ props.title  }}</h3>
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