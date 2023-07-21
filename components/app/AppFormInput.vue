<script setup lang="ts">
import { toRef, nextTick, type PropType, type InputHTMLAttributes, ref, computed, type Ref } from 'vue';
// Composables
import { 
  themedColorProps, 
  useThemedColor,
  useInputValue, 
  inputProps, 
  inputContainerProps,
  inputEmits,
  useFormValidation,
  validationProps,
} from '../../composables';
// App Components

export interface MultiTextItem {
  id?: string | number;
  text: string;
}

const props = defineProps({
  ...themedColorProps,
  ...inputProps,
  ...inputContainerProps,
  ...validationProps,
  modelValue: {
    type: [Number, String, Array] as PropType<number | string | MultiTextItem[]>
  },
  /** Default input property "type" */
  type: { 
    type: String as PropType<'text'|'number'|'password'|'multiple-text'|'decimal'>, 
    default: 'text' 
  },
  readonly: Boolean as PropType<InputHTMLAttributes['readonly']>,
});

const emit = defineEmits([ 
  ...inputEmits
 ]);

/** Theme color composable */
const { color } = useThemedColor(props.color);

/** Form composable */
const { updateInputValue } = useInputValue(emit);

/** Validation composable */
const { 
  errorMessage, 
  isRequired, 
  validateOnChange, 
} = useFormValidation(toRef(props, 'modelValue'), toRef(props, 'validations'), props.name)


/** Internal Logic */

// Type handler
const inputType = computed(()=>props.type)

</script>

<template>  
  <AppFormInputContainer
    :name="props.name"
    :required="isRequired"
    :label="props.label"
    :label-class="props.labelClass"
    :error="props.error || errorMessage"
    :error-class="props.errorClass"
    :disabled="disabled"
    v-bind="{ color }" 
  >
    <!-- Prepend -->
    <slot name="prepend"></slot>
       
    <!-- Default Input -->
    <div 
      class="w-full flex-shrink flex items-center"
    >
      <input
        v-bind="{ ...props, ...$attrs }"
        class="
          -m-1 p-1 
          flex-grow 
          w-full
          rounded 
          outline-none 
          bg-transparent
          disabled:text-secondary-400
        "
        :aria-label="props.name || props.label"
        :value="props.modelValue"
        :type="inputType"
        @input="updateInputValue"
        @focus="validateOnChange = true"
      />
    </div>
    
    <!-- Append -->
    <slot name="append"></slot>
  </AppFormInputContainer>
</template>