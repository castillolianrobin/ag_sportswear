<script setup lang="ts">

const props = defineProps({
  reverse: Boolean as PropType<boolean>,
})
</script>

<template>
  <div 
    class="flex flex-col gap-1 md:gap-5 items-center"
    :class="{
      'md:flex-row-reverse': props.reverse,
      'md:flex-row': !props.reverse,
    }"
  >
    <!-- Icon -->
    <div class="flex-shrink-0 w-1/4 flex items-center justify-center">
      <slot name="icon"></slot>
    </div>
    <!--  Content -->
    <div class="flex-grow mx-auto font-light text-sm md:text-base">
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