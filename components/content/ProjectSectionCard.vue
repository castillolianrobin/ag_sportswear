<script setup lang="ts">

const props = defineProps({
  img: String,
  title: String,
  description: String,
  stack: Array as PropType<string[]> 
})

</script>

<template>
  <div 
    class="
      p-2
      border-primary-500
      bg-primary-200 dark:bg-primary-950
      overflow-hidden rounded shadow
    "
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
        <p class="text-secondary-500">
          {{ props.description || 'No Description'  }}
        </p>
      </div>
    </div>

    <!-- Stack -->
    <div class="my-3 flex flex-wrap gap-3 text-secondary-200">
      <span 
        v-for="techStack in props.stack"
        :key="`${props.title}-${techStack}`"
        class="px-3 rounded-full bg-primary-500"
      >
        {{ techStack }}
      </span>
    </div>
  </div>
</template>