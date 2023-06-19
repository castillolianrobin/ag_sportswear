<script setup lang="ts">


const projects = [
  {
    title: 'Component Kits (Vue)',
    description: 'A set of reusable and themeable Vue components to be used with dashboard related projects.',
    img: 'https://raw.githubusercontent.com/castillolianrobin/vue-vite-component-kits/main/public/home_sample.png',
    stack: ['Vue', 'Typescript', 'Tailwind', 'Vitest', 'Cypress']
  },
  {
    title: 'Component Kits (React)',
    description: 'A set of reusable and themeable React components to be used with dashboard related projects.',
    img: 'https://raw.githubusercontent.com/castillolianrobin/react-vite-component-kits/main/public/home_sample.png',
    stack: ['React', 'Typescript', 'Tailwind', 'Vitest', 'Cypress']
  },
  {
    title: 'Express Boilerplate',
    description: 'Basic boilerplate for bootstraping Express applications for standard REST API with PassportJS authentication',
    img: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1611065926742/aZ6F1CxZ4.png',
    stack: ['Express', 'Typescript', 'AWS']
  },
]

</script>

<template>
  <div id="projects">
    <ContentSectionTitle>Projects</ContentSectionTitle>
    <div class="grid grid-cols-1 gap-5">
      <ContentProjectSectionCard
          v-for="project in projects"
          v-bind="project"
      ></ContentProjectSectionCard>
    </div>
  </div>

</template>