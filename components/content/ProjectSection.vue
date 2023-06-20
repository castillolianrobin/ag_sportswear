<script setup lang="ts">


const projects = [
  {
    title: 'Component Kits (Vue)',
    description: 'A set of reusable and themeable Vue 3 components to be used with dashboard related projects.',
    img: 'https://raw.githubusercontent.com/castillolianrobin/vue-vite-component-kits/main/public/home_sample.png',
    link: 'https://component-kits-vue3.netlify.app/',
    stack: ['Vue', 'Typescript', 'Tailwind', 'Vitest', 'Cypress']
  },
  {
    title: 'Component Kits (React)',
    description: 'A set of reusable and themeable React components to be used with dashboard related projects.',
    img: 'https://raw.githubusercontent.com/castillolianrobin/react-vite-component-kits/main/public/home_sample.png',
    link: 'https://component-kits-react18.netlify.app/',
    stack: ['React', 'Typescript', 'Tailwind', 'Vitest', 'Cypress']
  },
  {
    title: 'Express Boilerplate',
    description: 'Basic boilerplate for bootstraping Express applications for standard REST API with PassportJS authentication',
    img: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1611065926742/aZ6F1CxZ4.png',
    link: 'https://github.com/castillolianrobin/api-boilerplate',
    stack: ['Express', 'Typescript', 'AWS']
  },
  
  {
    title: 'Sample Pokedex',
    description: 'Basic UI Implementation for 3rd party API courtesy of https://pokeapi.co.',
    img: 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png',
    link: 'https://sample-pokedex.netlify.app/',
    stack: ['Vue', 'Typescript', 'Tailwind',]
  },

  
  {
    title: 'Pocketyard Dashboard',
    description: 'Construction E-commerce/E-bidding provider based on US. Web dashboard was implemented using Vue 2',
    img: 'https://pocketyard.com/img/logo_named.b5d74e2a.png',
    link: 'https://pocketyard.com/#/',
    stack: ['Vue', 'Bootstrap', 'AWS']
  },
]

</script>

<template>
  <div id="projects">
    <ContentSectionTitle>Projects</ContentSectionTitle>
    <div class="group grid grid-cols-1 gap-5">
      <ContentProjectSectionCard
        v-for="project in projects"
        v-bind="project"
        class="
          group-hover:opacity-70 
          group-hover:hover:opacity-100
        "
      ></ContentProjectSectionCard>
    </div>
  </div>

</template>