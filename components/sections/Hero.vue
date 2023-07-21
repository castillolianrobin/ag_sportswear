<template>
  <section 
    class="
      p-5
      border
      relative
      w-full md:h-[90vh]
      flex flex-col
    "
  >
    <!-- Hero Image -->
    <img 
      src="/assets/hero/hero-desktop.jpg" 
      alt="Hero"
      class="
        hidden md:block
        absolute top-0 left-0 
        h-full w-full
        object-cover object-center
      " 
    />

    <!-- Hero Image (Mobile) -->
    <img 
      src="/assets/hero/hero-mobile.jpg" 
      alt="Hero-mobile"
      class="
        md:hidden
        w-full 
        aspect-square
        object-cover object-center
      " 
    />

    <!-- Call to action -->
    <div 
      class="
        mt-auto
        relative
        w-[585px] 
      "
    >
      <h1 class="uppercase text-5xl">
        This season's biggest drop of new gear
      </h1>
      <p class="w-[407px]">
        Get your hands on our latest and greatest gear and technology— all built to make you better.
      </p>
      <AppButton class="px-5">
        Shop New Arrivals
      </AppButton>
    </div>
  </section>
</template>