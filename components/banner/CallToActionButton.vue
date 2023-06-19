<template>
  <AppButton
    variant="text" 
    color="primary-200"
    v-bind="{ ...$attrs }"
  >
    <slot></slot>
  </AppButton>
</template>