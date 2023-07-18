<script setup lang="ts">

const loading = ref(false);

const emits = defineEmits(['ready'])

onMounted(()=>{
  emits('ready', true);
});

</script>

<template>
  <div class="relative">
    <div 
      class="
        absolute top-0 
        w-full h-full 
        blur
      "
    >
    </div>
    <!-- Main ANimation -->
    <div 
      class="
        relative 
        w-full h-[350px] md:h-[100vh] 
        overflow-hidden 
        bg-sky-700/50 dark:bg-indigo-900/80 
        transition-colors
        ease-in
      "
    >
      <div class="w-full h-full absolute" :class="{ 'blur': loading  }">
        <!-- Sky scraper night/day -->
        <BannerSkyscraper></BannerSkyscraper>
    
        <!-- Wall -->
        <BannerInterior></BannerInterior>
        
        
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
        <!-- Programming Sprite -->
        <ClientOnly>
          <BannerProgrammingSprite></BannerProgrammingSprite>
        </ClientOnly>
      </div>
  
      <!-- Loading -->
      <div
        v-if="loading" 
        class="
          absolute w-full h-full bg-secondary-200/50 dark:bg-secondary-600/75
          flex items-center justify-center
        "
      >
        <span class="text-2xl font-bold text-secondary-500 dark:text-secondary-400 drop-shadow">
          Loading...
        </span>
      </div>
    </div>
    
    <!-- Fader -->
    <div 
      class="
        md:hidden
        -mt-[12vh] 
        h-[12vh] md:h-[15vh] 
        relative
        bg-gradient-to-b
        from-transparent
        to-secondary-500 dark:to-secondary-900
        transition-colors
      "
    ></div>
  </div>
</template>