<template>
  <section id="about" class="my-auto flex flex-col">
    <ContentSectionTitle class="w-full">About</ContentSectionTitle>

    <div class="flex flex-col gap-8 md:gap-14 2xl:gap-24">
      <!-- Dev -->
      <ContentAboutSectionContent>
        <template #icon>
            <img
              src="@/assets/img/laptop.png" 
              alt="Lappy"
              class="md:ml-10 w-full scale-110 dark:brightness-75 dark:hue-rotate-180"
            />
        </template>

        <template #text>
          You can call me Lian. 
          I am a web developer based in Makati, Philippines. 
          I have been developing interactive UI's since 2020 using modern tools and frameworks such as <span class="text-emerald-500">Vue</span> and <span class="text-sky-500">React</span> 
          and have worked on projects with complex dashboard features.
        </template>
      </ContentAboutSectionContent>

      <!-- Front End Development -->
      <ContentAboutSectionContent>
        <template #icon>
            <img
              src="@/assets/img/card-ui.png" 
              alt="keybs"
              class="w-full scale-95 saturate-50 dark:brightness-75 dark:hue-rotate-90"
            />
        </template>

        <template #text>
          I am currently honing my mastery in frontend development through professional work, while learning new technologies to expand my knowledge in web development.
        </template>
      </ContentAboutSectionContent>

      <!-- Cycling -->
      <ContentAboutSectionContent>
        <template #icon>
            <img
              src="@/assets/img/cycling.png" 
              alt="Bike"
              class="w-full scale-125 dark:brightness-90  hue-rotate-180 dark:hue-rotate-[220deg]"
            />
        </template>

      <template #text>
          I'm also into cycling and does a few loops within my city whenever I'm free. 
        </template>
      </ContentAboutSectionContent>
    </div>

  </section>
</template>