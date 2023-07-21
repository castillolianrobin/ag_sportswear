<script setup>
const NAV_ITEMS = [
  { name: 'Men', class: 'font-semibold' },
  { name: 'Women', class: 'font-semibold' },
  { name: 'Kids', class: 'font-semibold' },
  { name: 'Sports' },
  { name: 'Brands' },
  { name: 'Category' },
];

// (mobile) 
const showHeader = ref(false);
const showSubItem = ref(false);
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
    <div 
      class="md:hidden"
      @click="showHeader = !showHeader"  
    >
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
    <div 
      class="
        bg-white z-50
        col-span-2 
        fixed md:relative left-0 top-0
        w-full h-full
        flex flex-col md:grid grid-cols-2 items-start md:items-center gap-5
        transition-transform
      "
      :class="{
        'translate-x-0': showHeader,
        '-translate-x-full md:translate-x-0': !showHeader,
      }"
    >

      <!-- Close Icon(Mobile) -->
      <div class="absolute top-0 right-0 md:hidden">
        <Icon 
          name="material-symbols:close" 
          size="20"
          @click="showHeader = false" 
        />
      </div>

      <!-- Logo -->
      <img 
        src="/assets/logo-full.png" 
        alt="Logo"
        class="h-7" 
      />

      <!-- Navigation -->
      <div 
        @mouseover="showSubItem = true" 
        @mouseout="showSubItem = false"
      >
        <div class="flex flex-col md:flex-row gap-5">
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
      </div>
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
      "
      :class="{
        'md:flex justify-center gap-20': showSubItem,
      }"
    >

          <div 
            v-for="subItems in 5"
            :key="subItems"
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

    
    <!-- Helpers -->
    <div class="flex gap-3 justify-end items-center">
      <!-- Search Field -->
      <AppFormInput
        placeholder="Search"
        class="hidden md:block"
      >
        <template #append>
          <Icon name="mdi-light:magnify" size="20" />
        </template>
      </AppFormInput>
      
      <!-- Search Icon (Mobile) -->
      <div class="md:hidden">
        <Icon name="mdi-light:magnify" size="24" />
      </div>
      
      <div>
        <Icon name="uil:cart" size="24" />
      </div>
      <div  class="hidden md:block">
        <Icon name="uil:user" size="24" />
      </div>
    </div>
  </header>
</template>