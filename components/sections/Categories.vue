<script setup>
const CATEGORIES = [
  { name: 'Pants', img: '/assets/categories/tiro-21-track-pants-1.jpg' },
  { name: 'Tights & Leggings', img: '/assets/categories/tiro-21-track-pants-1-1.jpg' },
  { name: 'Jerseys', img: '/assets/categories/tiro-21-track-pants-1-2.jpg' },
  { name: 'Jackets', img: '/assets/categories/tiro-21-track-pants-1-3.jpg' },
  { name: 'Hoodies & Sweatshirts', img: '/assets/categories/tiro-21-track-pants-1-4.jpg' },
  { name: 'Shorts', img: '/assets/categories/tiro-21-track-pants-1-5.jpg' },
  { name: 'Jerseys', img: '/assets/categories/tiro-21-track-pants-1-2.jpg' },
  { name: 'Pants', img: '/assets/categories/tiro-21-track-pants-1-5.jpg' },
  { name: 'Tights & Leggings', img: '/assets/categories/tiro-21-track-pants-1-1.jpg' },
  { name: 'Jackets', img: '/assets/categories/tiro-21-track-pants-1-3.jpg' },
  { name: 'Shorts', img: '/assets/categories/tiro-21-track-pants-1-5.jpg' },
  { name: 'Hoodies & Sweatshirts', img: '/assets/categories/tiro-21-track-pants-1-4.jpg' },
  { name: 'Jerseys', img: '/assets/categories/tiro-21-track-pants-1-2.jpg' },
]
</script>
<template>
  <section class="flex flex-col gap-5">
    <!-- Categories  -->
    <div>
      <h3 class="text-lg">
        Shop by Category
      </h3>

      <div class="flex gap-5 overflow-auto w-full items-stretch scrollbar">
        <div 
          v-for="category in CATEGORIES"
          class="
            min-w-[100px] md:min-w-0
            flex-grow flex-shrink 
            flex flex-col 
          "
        >
          <img 
            :src="category.img" 
            :alt="category.name"
            class="w-full"
          />
          <p>{{ category.name }}</p>
        </div>
      </div>
    </div>

    <!-- Top Trending -->
    <div>
      <h3 class="text-lg uppercase">
        Top Trending
      </h3>

    </div>
  </section>
</template>