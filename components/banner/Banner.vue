<script setup lang="ts">

</script>

<template>
  <div class="relative">
    <div 
      class="
        absolute top-0 
        w-full h-full 
        bg-[url('@/assets/img/placeholder-bg.jpg')] 
        bg-bottom bg-cover 
        blur
      "
    >
    </div>
    <!-- Main ANimation -->
    <div 
      class="
        relative 
        w-full h-[270px] md:h-[95vh] 
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
  
    <BannerCallToAction></BannerCallToAction>

    </div>
    
    <!-- Fader -->
    <div 
      class="
        -mt-[10vh] 
        h-[20vh] md:h-[15vh] 
        relative
        bg-gradient-to-b
        from-transparent
        via-primary-950 
        to-primary-950
      "
    ></div>
  </div>
</template>