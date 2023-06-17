<template>
  <div>
    <!-- Wall -->
    <div 
      class="
        blur-[2px]
        dark:brightness-50
        absolute top-0 left-0 
        w-full h-full
        bg-[url('@/assets/img/sprite_bg.png')]
        bg-[length:100%] 
        bg-[50%_100%]
        
      "
    ></div>

    <!-- Ambiance -->
    <div
      class="
        absolute top-0 left-0
        w-full h-full
        bg-sky-800/10
        dark:bg-gradient-to-tr
        from-indigo-700/25
        to-amber-950/50
        opacity-100 dark:opacity-100
        transition duration-500
      "
    ></div>
  </div>
</template>