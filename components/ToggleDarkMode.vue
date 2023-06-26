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
  >
    <template #checkbox="{ isActive, onChangeHandler }">
      <div 
        tabindex="0"
        class="
          w-[1.6rem]  aspect-square 
          rounded-full
          focus:outline-0 outline-1 outline-primary-600 dark:outline-primary-300
          transition
          overflow-hidden
        "
        @keypress.space="onChangeHandler"
      >
        <div class="relative w-full h-full">
          <div 
            class="
              absolute 
              transition-all duration-300 ease-in-out  
              h-full w-[200%]
              rounded-full
              flex items-center gap-2 md:gap-1.5
              px-[20%] md:px-[10%]
              select-none
              text-lg md:text-2xl font-bold
              text-primary-200 dark:text-primary-100
              shadow 
            "
            :class="`${ isDarkMode ? '-left-full' : 'left-0' }`"
          >
            <!-- Sun -->
            <p>
              &#9788;
            </p>
            <!-- Moon -->
            <p>
              &#x263e;
            </p>
          </div>
        </div>
      </div>
    </template>
  </AppFormCheckbox>
</template>
