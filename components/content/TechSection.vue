<script setup lang="ts">
import { TECH_STACK } from '@/constants/TECHNOLOGIES'; 

const skills = [ ...TECH_STACK ];

</script>

<template>
  <div id="stack">
    <ContentSectionTitle>Tech Stack</ContentSectionTitle>
    
    <div class="flex flex-col gap-10">
      <div 
        v-for="skill in skills" 
        :key="skill.title"
      >
        <h5 class="mb-5">
          {{  skill.title  }}
        </h5>
        
  
        <div class="flex flex-col gap-5">
          <ContentTechSectionProgressBar
            v-for="skillRating in skill.skills"
            :key="skillRating.skillName"
            v-bind="skillRating"
          ></ContentTechSectionProgressBar>
        </div>
      </div>
  
    </div>
  </div>
</template>