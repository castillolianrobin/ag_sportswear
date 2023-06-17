<template>
  <ContentSection title="about">
    <div class="text-sm md:text-lg" id="about">


      <p class="text-center text-xs md:text-sm">
        If you only want to know about my professional background, you can click 
        <a href="#" class="text-primary-700">here</a> to skip this section. If you want to know me on a personal level, you can scan through this section.  
      </p>

      <div class="mt-12 flex flex-col gap-5">
        <!-- Dev -->
        <ContentAboutSectionContent>
          <template #icon>
            <div class="w-52 bg-primary-500/25  rounded-full aspect-square flex items-center justify-center">
              <img
                src="@/assets/img/laptop.png" 
                alt="Lappy"
                class="md:Lml-10 w-full scale-90 md:scale-110 dark:brightness-75"
              />
            </div>
          </template>

          <template #text>
            You can call me <span class="font-semibold text-primary-500">Lian</span>. I am a Software Developer with a knack for solving problems and architecting codebase.
            I have solid experience in building maintainable, scalable, and reusable user interfaces.
          </template>
        </ContentAboutSectionContent>

        <!-- Keyboard -->
        <ContentAboutSectionContent reverse>
          <template #icon>
            <div class="w-52 bg-primary-500/25 rounded-full aspect-square flex items-center justify-center">
              <img
                src="@/assets/img/keyboard-2.png" 
                alt="keybs"
                class="w-full scale-125 md:scale-150"
              />
            </div>
          </template>

          <template #text>
            I am also a keyboard enthusiast and currently own 2 keyboards both having a 75% layout and 
            one of them I have heavily modded  <span class="opacity-50 line-through">with sinister enthusiasm</span>. 
            I plan to collect more keyboard in the future with my end game being the Keychron Q2 Pro.
          </template>
        </ContentAboutSectionContent>

        <!-- Cycling -->
        <ContentAboutSectionContent>
          <template #icon>
            <div class="w-52 bg-primary-500/25  rounded-full aspect-square flex items-center justify-center">
              <img
                src="@/assets/img/cycling.png" 
                alt="Lappy"
                class="md:Lml-10 w-full scale-125 md:scale-150 dark:brightness-75"
              />
            </div>
          </template>

        <template #text>
           I'm also into cycling and does a few loops within my city whenever I'm free. 
          </template>
        </ContentAboutSectionContent>
      </div>

    </div>
  </ContentSection>
</template>