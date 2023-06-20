<script setup lang="ts">
  const props = defineProps({
    skillName: String,
    rating: Number,  
  })
</script>

<template>
  <div class="w-full bg-secondary-500/25">
    <div 
      class="
        p-2 2xl:py-3
        h-full
        w-fit
        rounded-sm
        bg-gradient-to-r
        from-transparent
        to-primary-700 dark:to-primary-400
        font-semibold
        text-primary-900 dark:text-primary-300
        transition-all ease-out duration-500
        border-r-4 border-primary-900 dark:border-primary-300
      "
      :style="{ minWidth: `${(props.rating || 0)*10}%` }"
    >
      {{ props.skillName }}
    </div>
  </div>

</template>
