<script setup lang="ts">
// const skills = [
//   { skillName: 'Typecript', rating: 7 },
//   { skillName: 'Webpack', rating: 5 },
//   { skillName: 'Vite', rating: 5 },
//   { skillName: 'Jest', rating: 7 },
//   { skillName: 'Vitest', rating: 7 },
//   { skillName: 'Cypress', rating: 7 },
//   { skillName: 'Cypress', rating: 7 },
//   { skillName: 'Bootstrap', rating: 9 },
//   { skillName: 'Tailwind', rating: 8 },
//   { skillName: 'Material Design', rating: 5 },
// ];

const skills = [
  {
    title: 'Frontend Frameworks',
    skills: [
        { skillName: 'Vue', rating: 9 },
        { skillName: 'React', rating: 7 },
    ]
  },
  {
    title: 'CSS Frameworks',
    skills: [
        { skillName: 'Bootstrap', rating: 9 },
        { skillName: 'Tailwind', rating: 8 },
        { skillName: 'Material Design', rating: 7 },
    ],
  },
  {
    title: 'Frontend Testing Frameworks',
    skills: [
        { skillName: 'Jest', rating: 7 },
        { skillName: 'Vitest', rating: 7 },
        { skillName: 'Cypress', rating: 5 },
    ],
  },
  {
    title: 'Backend Frameworks',
    skills: [
        { skillName: 'Laravel', rating: 4 },
        { skillName: 'Express', rating: 2 },
    ],
  },
  

]

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