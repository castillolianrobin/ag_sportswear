<script setup lang="ts">
import { SectionName } from '../content/Content.vue';

const props = defineProps({
  activeSection: {
    type: String as PropType<SectionName | null>,
    default: null,
  },
})

const emits = defineEmits(['update:activeSection']);

/** Internal Logic */

function setActiveSection(sectionName: SectionName) {
  if (props.activeSection === sectionName) {
    emits('update:activeSection', null);
  } else {
    emits('update:activeSection', sectionName);
  }
  scrollToElement(sectionName);
}

function scrollToElement(id: SectionName)  {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView();
  }
}

</script>


<template>
  
  <!-- Call to action -->
  <div
    class="
      w-fit
      absolute
      top-3 md:top-5 2xl:top-12
      left-3 md:left-5   2xl:left-12
      md:scale-100 2xl:scale-100 
      flex flex-col items-start
      transition-all
    "
  >

    <BannerCallToActionNameCard></BannerCallToActionNameCard>
    <!-- Controls -->
    <div 
      class="
        ml-1
        py-2 2xl:py-7 pl-2 
        relative
        hidden md:flex flex-col items-start justify-stretch gap-1 2xl:gap-5 
      "
    >
      
      <!-- <AppButton variant="text" color="primary-200" href="#about">About</AppButton> -->
      <BannerCallToActionButton 
        :is-active="props.activeSection === 'stack'"
        @click="setActiveSection('stack')"
      >
        Tech Stack
      </BannerCallToActionButton>
      
      <BannerCallToActionButton 
        :is-active="props.activeSection === 'projects'"
        @click="setActiveSection('projects')"
      >
        Projects
      </BannerCallToActionButton>

      <BannerCallToActionButton 
        :is-active="props.activeSection === 'footer'"
        @click="setActiveSection('footer')"
      >
        References
      </BannerCallToActionButton>
      
    </div>
  </div>
</template>