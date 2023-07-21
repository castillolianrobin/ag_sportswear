<script setup>
const NAV_ITEMS = [
  { name: 'Men', class: 'font-semibold' },
  { name: 'Women', class: 'font-semibold' },
  { name: 'Kids', class: 'font-semibold' },
  { name: 'Sports' },
  { name: 'Brands' },
  { name: 'Category' },
]
</script>
<template>
  <header 
    class="
      p-2 md:p-5 
      z-50
      relative
      grid grid-cols-3 items-center gap-5
      border-b border-primary-500
    "
  >
    <!-- Hamburger (Mobile) -->
    <div class="md:hidden">
      <Icon name="solar:list-outline" size="32" />
    </div>
    <!-- Logo -->
    <div class="flex md:hidden justify-center">
      <img 
        src="/assets/logo.png" 
        alt="Logo"
        class="h-7" 
      />
    </div>
    <!-- Logo And Nav -->
    <div class="col-span-2 hidden  md:grid grid-cols-2  items-center gap-5">
      <!-- Logo -->
      <img 
        src="/assets/logo-full.png" 
        alt="Logo"
        class="h-7" 
      />

      <!-- Navigation -->
      <div class="group ">
        <div class="flex gap-5">
          <span
            v-for="navItem in NAV_ITEMS"
            :key="navItem.name"
            class="
              cursor-pointer
              uppercase text-sm
            "
            :class="navItem.class"
          >
            {{  navItem.name  }}
          </span>
        </div>
        
        <!-- Subitems -->
        <div 
          class="
            py-5
            w-full
            border-t border-primary-500
            absolute top-full left-0
            bg-white
            hidden 
            group-hover:flex justify-center gap-20
          "
        >

          <div 
            v-for="subItems in 5"
          >
            <!-- Subitem title -->
            <h3 class="text-sm font-bold">Shoes</h3>
            <!-- Subitem content -->
            <p 
              v-for="subItems in 5"
              class="text-xs"
            >
              New Arrival
            </p>

          </div>
        </div>
      </div>
    </div>

    
    <!-- Helpers -->
    <div class="flex gap-3 justify-end items-center">
      <AppFormInput
        placeholder="Search"
        class="hidden md:block"
      >
        <template #append>
          <Icon name="mdi-light:magnify" size="20" />
        </template>
      </AppFormInput>

      <div>
        <Icon name="uil:cart" size="24" />
      </div>
      <div  class="hidden md:block">
        <Icon name="uil:user" size="24" />
      </div>
    </div>
  </header>
</template>