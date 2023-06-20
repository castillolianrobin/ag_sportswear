<script setup lang="ts">
import { PropType } from 'nuxt/dist/app/compat/capi';

const props = defineProps({
  isActive: Boolean as PropType<boolean>,
})
</script>

<template>
  <button
    class="
      my-1 md:my-3 px-2
      w-full
      text-primary-200 hover:text-white
      text-sm 2xl:text-xl font-base
      text-start
      relative
      flex items-center
    "
    :class="{ 'group': !props.isActive }"
    v-bind="{ ...$attrs }"
  >
    <!-- Backdrop -->
    <div
      class="
        opacity-0 group-hover:opacity-100
        w-0 group-hover:w-full h-full      
        bg-gradient-to-r
        from-primary-500/50 from-70%
        to-transparent
        absolute top-0 left-0
        transition-all
      "
    ></div>
    <!-- Active Box -->
    <div
      class="flex-grow-0 aspect-square bg-primary-200 overflow-hidden transition-all"
      :class="`${ props.isActive ? 'w-2' : 'w-0 ' }`"
    ></div>
    <span 
      class=" 
        relative 
        overflow-hidden 
        transition-all
        truncate
      "
      :class="`${ props.isActive ? 'w-0' : 'w-full'}`"
    >
      <slot></slot>
    </span>
  </button>
</template>