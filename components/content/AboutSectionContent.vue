<script setup lang="ts">

const props = defineProps({
  reverse: Boolean as PropType<boolean>,
})
</script>

<template>
  <div 
    class="flex flex-col md:gap-12 lg:gap-20 xl:gap-24 items-center"
    :class="{
      'md:flex-row-reverse': props.reverse,
      'md:flex-row': !props.reverse,
    }"
  >
    <!-- Icon -->
    <div class="mr-4 first-line:mt-12 px-10 flex-shrink-0">
      <slot name="icon"></slot>
    </div>
    <!--  Content -->
    <div class="flex-grow mx-auto font-light">
      <p 
        class="text-center"
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