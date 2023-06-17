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
        w-full h-[270px] md:h-[50vw] lg:h-[80vh] xl:h-[95vh] 
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
      <div
        class="
          absolute -top-5 md:top-20 -right-20 md:right-5 
          scale-50 md:scale-100 
        "
      >
        <div 
          class="
            p-5 
            rounded-bl-3xl rounded-tr-3xl 
            bg-primary-100/90 dark:bg-primary-800/75  
            shadow 
            border-double border-8 border-primary-500 dark:border-primary-950 
            transition-colors 
          "
        >
          <h1 class="transition-colors text-primary-900 dark:text-primary-100 text-4xl lg:text-5xl font-semibold">Lian Robin Castillo</h1>
          
          <div class="mt-3 flex items-center justify-end">
            <div class="scale-150 mr-5">
              <ToggleDarkMode></ToggleDarkMode>
            </div>
            <h3 
              class="
                transition-colors text-secondary-800 dark:text-secondary-400 text-2xl lg:text-3xl text-right font-serif
              "
            >
              Frontend Developer
            </h3>
          </div>
        </div>
        <!-- Controls -->
        <div 
          class="
            mt-12 py-2 pr-5 
            hidden md:flex flex-col items-end gap-5 
            text-2xl font-serif font-bold 
            border-r-2 border-primary-200
            dark:text-primary-500
          "
        >
          <AppButton variant="text" color="primary-200" href="#about">About</AppButton>
          <AppButton variant="text" color="primary-200">Tech Stack</AppButton>
          <AppButton variant="text" color="primary-200">Projects</AppButton>
            
        </div>
      </div>

    </div>
    
    <!-- Fader -->
    <div 
      class="
        -mt-[10vh] 
        h-[20vh] md:h-[50vh] xl:h-[25vh] 
        relative
        bg-gradient-to-b
        from-transparent
        via-primary-950 
        to-primary-950
      "
    ></div>
  </div>
</template>