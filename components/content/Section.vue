<script setup lang="ts">
import { PropType } from 'vue';
import { ThemeColors } from '~/composables';

export type Color =  {
  light: PropType<ThemeColors>
  dark: PropType<ThemeColors>
}

const props = defineProps({
  title: String,
  primaryColor: {
    type: Object as PropType<Color>,
    default: { light: 'primary-700', dark: 'primary-200' },
  },
  secondaryColor: {
    type: Object as PropType<Color>,
    default: { light: 'secondary-300', dark: 'secondary-700' },
  },
})
</script>

<template>
  <section 
      :class="`
        p-5 
        w-full
        oveflow-hidden
        relative 
        border-t-[12px] border-${props.primaryColor.light} dark:border-${props.primaryColor.light}
        bg-${props.secondaryColor.light} dark:bg-${props.secondaryColor.dark}
      `"
    >
      <!-- Title Main Container -->
      <div
        class="
          w-full
          absolute bottom-[100%] left-0  
          overflow-hidden
          flex justify-end
        "
      >
        <!-- Title Sub Container -->
        <div 
          :class="`
            -mx-10
            px-10
            w-2/3 md:w-1/2
            -skew-x-[40deg] 
            bg-${props.secondaryColor.light} dark:bg-${props.secondaryColor.dark}
            border-t-[12px] border-l-[12px] border-${props.primaryColor.light} dark:border-${props.primaryColor.light}          
          `"
        >
          <!-- Title -->
          <h2 
            :class="`
              mt-2
              text-center
              px-6 skew-x-[40deg] 
              bg-secondary-300 dark:bg-secondary-700
              text-3xl md:text-5xl font-serif text-${props.primaryColor.light} dark:text-${props.primaryColor.dark}
            `"
          >
            {{ props.title }}
          </h2>
        </div>
      </div>
      <div class="py-10"> 
        <slot></slot>
      </div>
    </section>
</template>