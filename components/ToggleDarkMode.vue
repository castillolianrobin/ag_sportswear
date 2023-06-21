<script setup lang="ts">
import { useDark } from '@vueuse/core';
import type { PropType } from 'vue';
import { AppFormCheckbox } from './app';

const props = defineProps({
  options: {
    type: Object as PropType<Parameters<typeof useDark>[0]>,
    default: () => ({}),
    required: false,
  }
})


const isDarkMode = useDark({ ...props?.options, disableTransition: false });


</script>

<template>
  <AppFormCheckbox
    v-model="isDarkMode"
    :label="isDarkMode ? 'Dark' : 'Light'"
    label-class="hidden md:block"
  >
    <template #checkbox="{ isActive, onChangeHandler }">
      <div 
        tabindex="0"
        class="
          p-[1px] 
          w-[1.6rem]  aspect-square 
          border border-primary-900 dark:border-primary-300 
          rounded-full
          focus:outline outline-1 outline-primary-600 dark:outline-primary-300
          bg-white/25
          dark:bg-black/25
          transition
          overflow-hidden
        "
        @keypress.space="onChangeHandler"
      >
        <div class="relative w-full h-full">
          <div 
            class="
              absolute 
              transition  
              h-full 
              aspect-square 
              rounded-full
              flex items-center justify-center
              text-[0.7rem]
              select-none
              text-primary-800 dark:text-primary-100
              bg-primary-200 dark:bg-primary-800 
              shadow 
            "
          >
            <span v-show="isActive">
              &#x263e;
            </span>
            <span v-show="!isActive">
              &#9788;
            </span>
          </div>
        </div>
      </div>
    </template>
  </AppFormCheckbox>
</template>
