<template>
  <section 
    class="
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
        mt-auto p-5
        relative
        w-full md:w-[585px]
        flex flex-col gap-5
      "
    >
      <h1 class="uppercase text-3xl md:text-5xl">
        This season's biggest drop of new gear
      </h1>
      <p class="w-full md:w-[407px]">
        Get your hands on our latest and greatest gear and technology— all built to make you better.
      </p>
      <div>
        <AppButton class="px-5">
          Shop New Arrivals
        </AppButton>
      </div>
    </div>
  </section>
</template>