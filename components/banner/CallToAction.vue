<template>
  
  <!-- Call to action -->
  <div
    class="
      w-fit
      absolute
      top-5 md:top-5 2xl:top-12
      left-0 md:left-5 2xl:left-12
      md:scale-100 2xl:scale-100 
      flex flex-col items-start
    "
  >
    <!-- Name Plate -->
    <div 
      class="
        hidden
        px-4 p-2 md:p-5 
        shadow-lg 
        rounded-br-3xl md:rounded-br-[40px] 
        bg-sky-200 dark:bg-primary-800/75  
        border-double border md:border-8 
        border-primary-800 dark:border-primary-300 
        transition-colors 
      "
    >
      <h1 
        class="
          -ml-0.5 md:-ml-1 
          transition-colors 
          text-primary-900 dark:text-primary-100 
          text-lg md:text-4xl 2xl:text-5xl font-semibold
        "
      >
        Lian Robin Castillo
      </h1>

      <div class="md:mt-3 2xl:mt-5 flex items-center justify-between">
        <h3 
          class="
            transition-colors 
            text-secondary-800 dark:text-secondary-400 
            text-xs lg:text-2xl 2xl:text-2xl 
            text-right font-serif
          "
        >
          Frontend Developer
        </h3>

        <div class="scale-[0.6] md:scale-150">
          <ToggleDarkMode></ToggleDarkMode>
        </div>
      </div>
    </div>

    <div class="px-4 p-1 2xl:p-3 relative bg-secondary-800">
      <!-- Grain -->
      <div 
        class="
          hidden
          transition
          absolute top-0 left-0 opacity-30
          animate-grain
          w-full h-full
          bg-[length:200%]
          bg-[url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/paper-pattern.png)]
        " 
      ></div>

      <!-- Name -->
      <h1 
        class="
          z-20
          pb-2
          relative
          text-xl md:text-3xl 2xl:text-5xl 
          text-primary-500 dark:text-primary-300
          drop-shadow-lg shadow-primary-50
          border-b border-secondary-500
          transition-colors
        "
      >
        Lian Robin Castillo
      </h1>

      <h3 class="ml-0.5 my-1 text-secondary-100">Frontend Developer</h3>
    </div>
    <!-- Controls -->
    <div 
      class="
        mt-4 ml-1
        relative
        py-2 pl-5 
        hidden md:flex flex-col items-start gap-3 2xl:gap-5 
        2xl:text-xl font-bold 
        border-l-2 border-primary-200
        dark:text-primary-500
      "
    >
      
      <!-- <AppButton variant="text" color="primary-200" href="#about">About</AppButton> -->
      <AppButton variant="text" color="primary-200">Tech Stack</AppButton>
      <AppButton variant="text" color="primary-200">Projects</AppButton>
    </div>
  </div>
</template>