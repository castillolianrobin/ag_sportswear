<script setup lang="ts">

const props = defineProps({
  reverse: Boolean as PropType<boolean>,
})
</script>

<template>
  <div 
    class="flex flex-col gap-4 md:gap-5  justify-between w-full"
    :class="{
      'md:flex-row-reverse': props.reverse,
      'md:flex-row': !props.reverse,
    }"
  >
    <!-- Icon -->
    <div class="flex-shrink-0 md:w-1/4 flex items-center justify-center">
      <div class="w-20 2xl:w-32 bg-primary-500/25 dark:bg-primary-500/80  rounded-full aspect-square flex items-center justify-center">
        <slot name="icon"></slot>
      </div>
    </div>
    <!--  Content -->
    <div class="flex-grow mx-auto font-light text-sm md:text-base 2xl:text-xl">
      <p 
        class="text-justify"
        :class="{
          'md:text-end': props.reverse,
          'md:text-start': !props.reverse,
        }"
      >
        <slot name="text"></slot>
      </p>
    </div>
  </div>
</template>