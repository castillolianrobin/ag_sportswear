<script setup lang="ts">

</script>

<template>
  <div 
    class="
      relative 
      w-full h-[270px] md:h-[50vw] lg:h-[85vh] 
      overflow-hidden 
      bg-sky-700/50 dark:bg-indigo-900/80 
      transition-colors
      ease-in
    "
  >
    <!-- Sky scraper night/day -->
    <BannerSkyscraper></BannerSkyscraper>

    <!-- Wall -->
    <BannerInterior></BannerInterior>
    
    <!-- Programming Sprite -->
    <BannerProgrammingSprite></BannerProgrammingSprite>
    
    <!-- Foreground Ambiance -->
    <div
      class="
        absolute top-0 left-0
        w-full h-full
        bg-gradient-to-r dark:bg-gradient-to-tr
        from-slate-950/30 from-5% dark:from-amber-400/10
        via-sky-500/5 via-90% dark:via-slate-950/70
        to-slate-950 dark:to-slate-950
        opacity-100
        transition
      "
    ></div>


    <!-- Call to action -->

    <div class="transition-colors rounded-bl-3xl rounded-tr-3xl p-5 absolute  md:top-20 right-0 md:right-5 bg-primary-300/75 dark:bg-primary-900  shadow border-double border-8 border-primary-500 dark:border-primary-400 scale-50 md:scale-100">
      <h1 class="transition-colors text-primary-900 dark:text-primary-100 text-4xl lg:text-5xl font-semibold">Lian Robin Castillo</h1>
      <h3 class="transition-colors mt-2 text-secondary-500 dark:text-secondary-400 text-xl lg:text-2xl text-right">Developer</h3>
    </div>
  </div>
</template>