<script setup lang="ts">

</script>

<template>
  <div 
    id="app" 
    class="scrollbar bg-primary-400 dark:bg-primary-950"
  >
    <!-- Html Head -->
    <Head>
      <Title>Lian Robin</Title>
    </Head>
    <!-- Header -->
    <Header></Header>
    
    <!-- Main Content  -->
    <Banner></Banner>

    <main class="text-primary-950 dark:text-primary-200">
      <!-- About -->
      <ContentSection title="ABOUT">
        <div class="text-sm md:text-lg">

          
          <p class="text-center">
            If you only want to know about my professional background, you can click 
            <a href="#" class="text-primary-700">here</a> to skip this section. If you want to know me on a personal level, you can scan through this section.  
          </p>

          <div class="flex flex-col gap-12">
            <!-- Dev -->
            <div  class="flex flex-col md:flex-row gap-12 items-center">
              <!-- Icon -->
              <div class="mt-12 px-10 flex-shrink-0">
                <div class="w-52 bg-primary-500/25  rounded-full aspect-square flex items-center justify-center">
                  <img
                    src="./assets/img/laptop.png" 
                    alt="Lappy"
                    class="ml-10 w-full scale-110"
                  />
                </div>
              </div>
              <!--  Content -->
              <div class="mx-auto font-light">
                <p class="text-end">
                  You can call me <span class="font-semibold text-primary-500">Lian</span>. I am a Software Developer with a knack for solving problems and architecting codebase.
                  I have solid experience in building maintainable, scalable, and reusable user interfaces.
                </p>
              </div>
            </div>
            
            <!-- Keyboard -->
            <div  class="flex flex-col md:flex-row-reverse gap-12 items-center">
              <!-- Icon -->
              <div class="mr-4 first-line:mt-12 px-10 flex-shrink-0">
                <div class="w-52 bg-primary-500/25 skew-x-6 rounded-full aspect-square flex items-center justify-center">
                  <img
                    src="./assets/img/keyboard-2.png" 
                    alt="keybs"
                    class="w-full md:scale-150"
                  />
                </div>
              </div>
              <!--  Content -->
              <div class="mx-auto font-light">
                <p class="text-start">
                  I am also a keyboard enthusiast and currently own 2 keyboards both having a 75% layout and 
                  one of them I have heavily modded  <span class="opacity-50 line-through">with sinister enthusiasm</span>. 
                  I plan to collect more keyboard in the future with my end game being the Keychron Q2 Pro.
                </p>
              </div>
            </div>
          </div>
    
    
        </div>
      </ContentSection>
    
    </main>
    
  </div>
</template>





