<script setup lang="ts">
import { PropType } from 'nuxt/dist/app/compat/capi';
import TechSection from './TechSection.vue';
import ProjectSection from './ProjectSection.vue';

export type SectionName = 'stack' | 'projects' | 'about';

const props = defineProps({
  activeSection: {
    type: String as PropType<SectionName | null>,
    default: null
  },
});


const emits = defineEmits(['update:activeSection']);


/** Internal Logic */


const sections: { component: any, key: SectionName  }[] = [
  { component: TechSection, key: 'stack' },
  { component: ProjectSection, key: 'projects' },
];


const sectionNameComputed = computed(()=>{
  switch(props.activeSection) {
    case 'stack': return 'Tech Stack';
    case 'projects': return 'Projects';
    case 'about': return 'About';
    default: return '';
  }
});

const showContent = ref(false);

watch(toRef(props, 'activeSection'), (val)=> {
  if (!val) return showContent.value = false; 
  
  showContent.value = !showContent.value;
  // Add special transition per change
  setTimeout(()=>{showContent.value = true}, 340);
})



/** Helpers  */

function isActive(sectionName: SectionName) {
  return props.activeSection === sectionName;
}


</script>



<template>
  <div 
    class="
      md:p-5 
      h-full w-full md:w-1/2 
      md:fixed top-0 right-0
      flex flex-col
    "
  >
    <!-- Title Container -->
    <div 
      class="mb-5 hidden md:flex gap-3"
      :class="showContent ? 'visible' : 'invisible'"
    >
      <div class="flex items-center">
        <button
          class="w-5 h-5 bg-primary-200 aspect-square shadow"
          @click="emits('update:activeSection', null)"
        >
          <span class="font-bold">-</span>
        </button>
      </div>
      <h3 
        class="
          text-primary-950 dark:text-primary-200
          text-2xl
          drop-shadow-sm shadow-white
        "
      >
        {{ sectionNameComputed }}
      </h3>
    </div>

    <!-- Content -->
    <main 
      class="
        flex-grow flex-shrink 
        h-full
        relative 
        text-secondary-950 dark:text-secondary-100
        md:border-2 border-primary-900 dark:border-primary-400 
        md:rounded
        overflow-auto scrollbar
        transition-all duration-200 
        shadow
      "
      :class="`${ showContent ? 'md:scale-100 md:opacity-100 ease-in-out'  : 'md:scale-50 md:opacity-0' }`"
    >
      <div 
        class="
          p-5
          flex flex-col gap-12
          bg-secondary-200  dark:bg-secondary-950
          bg-[length:200%]
          bg-[url('@/assets/img/pixel-bg-2.jpg')] 
          bg-blend-overlay
        ">
        <component
          v-for="(section) in sections"
          :key="section.key"
          :is="section.component"
          class="transition-all"
          :class="`${ isActive(section.key) && showContent 
            ? 'md:opacity-100' 
            : 'md:opacity-0 md:hidden'
          }`"
        ></component>
      </div>
    </main>
  </div>
</template>