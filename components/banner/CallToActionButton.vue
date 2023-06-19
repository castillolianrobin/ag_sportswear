<template>
  <button
    class="
      my-1 md:my-3 px-2
      w-full
      text-primary-200 hover:text-white
      text-sm 2xl:text-xl font-base
      text-start
      relative
      group
      flex items-center gap-3
    "
    v-bind="{ ...$attrs }"
  >
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
    <span 
      class=" 
        relative 
        overflow-hidden 
        transition-all
        truncate
      "
    >
      <slot></slot>
    </span>
  </button>
</template>