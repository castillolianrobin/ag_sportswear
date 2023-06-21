<script setup lang="ts">
import { PROJECTS } from '@/constants/PROJECTS'

const projects = [ ...PROJECTS ]

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