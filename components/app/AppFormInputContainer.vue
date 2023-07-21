<script setup lang="ts">
import { 
  themedColorProps, 
  inputContainerProps,
type ThemeColors,
} from '../../composables';
import { computed } from 'vue';

const props = defineProps({
  ...themedColorProps,
  ...inputContainerProps,
})

const colorInactive = computed(():ThemeColors => {
  if (props.error) return 'error-500';
  else if (props.disabled) return 'secondary-400';
  else return 'secondary-500';
} )

</script>

<template>
  <div class="group dark:text-secondary-100">    
    <!-- Input Container -->
    <div
      :class="[`
          px-1 py-0.5
          flex
          text-sm
          border border-${colorInactive} group-focus-within:border-${props.color}
          outline-1 outline-${props.color} group-focus-within:outline 
          transition-all
          bg-primary-500/5
        `,
        props.containerClass,
      ]"
    >
      <slot></slot>
    </div>
  </div>
</template>