<template>
  <div>
    <!-- Night  -->
    <div 
      class="
        blur-[3px]
        absolute top-0 left-0 
        w-full h-full
        bg-[url('@/assets/img/night.jpg')]
        bg-[length:auto_250%]
        bg-[40%_90%] md:bg-[0%_90%]
        transition-all duration-500  ease-in-out
      "
    ></div>

    <!-- Day -->
    <div 
      class="
        blur-[3px]
        dark:opacity-0
        absolute top-0 left-0 
        w-full h-full
        bg-[url('@/assets/img/day.jpg')]
        bg-[length:auto_250%] 
        bg-[40%_90%] md:bg-[-0%_90%]
        transition-all duration-500  ease-in-out
      "
    ></div>

    <!-- Moon -->
    <div 
      class="
        opacity-0 dark:opacity-100 duration-700 dark:animate-moon 
        dark:drop-shadow-[0_0_50px_rgba(250,250,250,1)]
        absolute top-0 left-0 
        w-full h-full
        bg-[url('@/assets/img/moon.png')]
        bg-[length:auto_250%] bg-no-repeat 
        drop
        bg-[40%_100%] md:bg-[0%_100%] dark:bg-[40%_80%] md:dark:bg-[0%_90%] 
        transition-all ease-in-out
      "
    ></div>

  </div>
</template>