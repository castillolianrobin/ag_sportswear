<script setup lang="ts">
import { TECH_STACK } from '@/constants/TECHNOLOGIES'; 

const skills = [ ...TECH_STACK ];

const showRating = ref(false);


</script>

<template>
  <section id="stack">
    <ContentSectionTitle>Tech Stack</ContentSectionTitle>
    <div class="mb-10 md:mb-5 flex justify-end">
      <AppFormCheckbox 
        v-model="showRating"
        toggle-input
        label="Show Self Rating"
      ></AppFormCheckbox>    
    </div>
    <div class="flex flex-col gap-8 overflow-x-hidden">
      <div 
        v-for="skill in skills" 
        :key="skill.title"
      >
        <h5>
          {{  skill.title  }}
        </h5>
        <Transition
          enter-active-class="duration-150 ease-out"
          enter-from-class="translate-x-1/2 opacity-0"
          enter-to-class="translate-x-0 opacity-100"
          leave-active-class="duration-150 ease-in"
          leave-from-class="translate-x-0 opacity-100"
          leave-to-class="-translate-x-1/2 opacity-0"
          mode="out-in"
        >
          <div
            v-if="!showRating"
            class="mt-3 flex flex-wrap gap-2"
          >
            <ContentTechSectionChip
              v-for="skillRating in skill.skills"
              :key="skillRating.title"
              v-bind="skillRating"
            ></ContentTechSectionChip>
          </div>
          <div 
            v-else
            class="mt-4 flex flex-col gap-5"
          >
            <ContentTechSectionProgressBar
              v-for="skillRating in skill.skills"
              :key="skillRating.title + 'rating'"
              v-bind="skillRating"
            ></ContentTechSectionProgressBar>
          </div>
        </Transition>
      </div>
  
    </div>
  </section>
</template>