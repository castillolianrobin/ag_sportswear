<template>
  <section id="about" class="my-auto flex flex-col items-center justify-center">
    <ContentSectionTitle class="w-full">About</ContentSectionTitle>

    <p class="mb-12 hidden text-center text-xs md:text-sm">
      If you only want to know about my professional background, you can click 
      <a href="#" class="text-primary-700">here</a> to skip this section. If you want to know me on a personal level, you can scan through this section.  
    </p>

    <div class="flex flex-col gap-8 md:gap-14 items-center">
      <!-- Dev -->
      <ContentAboutSectionContent>
        <template #icon>
          <div class="w-20 bg-primary-500/25 dark:bg-primary-500/80  rounded-full aspect-square flex items-center justify-center">
            <img
              src="@/assets/img/laptop.png" 
              alt="Lappy"
              class="md:Lml-10 w-full scale-110 dark:brightness-75 dark:hue-rotate-180"
            />
          </div>
        </template>

        <template #text>
          You can call me Lian. 
          I am a Web Developer based in Makati, Philippines. 
          I have been developing interactive dashboard UI's since 2020 using modern tools and frameworks such as <span class="text-emerald-500">Vue</span> and <span class="text-sky-500">React</span> 
          and have worked on projects with complex dashboard features.
        </template>
      </ContentAboutSectionContent>

      <!-- Front End Development -->
      <ContentAboutSectionContent>
        <template #icon>
          <div class="w-20 bg-primary-500/25 dark:bg-primary-500/80 rounded-full aspect-square flex items-center justify-center">
            <img
              src="@/assets/img/card-ui.png" 
              alt="keybs"
              class="w-full scale-95 saturate-50 dark:brightness-75 dark:hue-rotate-90"
            />
          </div>
        </template>

        <template #text>
          I am currently honing my mastery in frontend development through professional work, while learning new technologies to expand my knowledge in web development.
        </template>
      </ContentAboutSectionContent>

      <!-- Cycling -->
      <ContentAboutSectionContent>
        <template #icon>
          <div class="w-20 dark:bg-primary-500/80 bg-primary-500/25 rounded-full aspect-square flex items-center justify-center">
            <img
              src="@/assets/img/cycling.png" 
              alt="Bike"
              class="w-full scale-125 dark:brightness-90  hue-rotate-180 dark:hue-rotate-[220deg]"
            />
          </div>
        </template>

      <template #text>
          I'm also into cycling and does a few loops within my city whenever I'm free. 
        </template>
      </ContentAboutSectionContent>
    </div>

  </section>
</template>