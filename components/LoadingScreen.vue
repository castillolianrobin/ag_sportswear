<script setup lang="ts">
import { PropType } from 'nuxt/dist/app/compat/capi';


const props = defineProps({
  hideLoading: {
    type: Boolean as PropType<boolean>,
  }
});



const LOADING_TEXT = [
  'Building workspace',
  'Opening windows',
  'Writting content',
  'Importing projects',
  'Setting up ergo chair',
];
const loadingText = ref('Loading')
const loadingIntervalId = ref<ReturnType<typeof setInterval> | null>(null);
loadingIntervalId.value = setInterval(()=>{
  const index = Math.round(Math.random()*LOADING_TEXT.length-1);
  // console.log('replace', index)
  loadingText.value = LOADING_TEXT[index];
}, 2000);

watch(toRef(props, 'hideLoading'), ()=>{
  loadingIntervalId.value && clearInterval(loadingIntervalId.value) 
});

</script>

<template>
  <div 
      class="
        z-20 
        fixed top-0 left-0
        w-full h-full
        flex flex-col items-center justify-center gap-5
        bg-primary-200/25 dark:bg-primary-950/25
        backdrop-blur-xl
      "
      :class="{
        'animate-blurIn': props.hideLoading
      }"
    >
      <BannerCallToActionNameCard 
        hide-extra
        class="p-2 scale-125 bg-primary-200/90 dark:bg-primary-950/90 shadow"
      ></BannerCallToActionNameCard>
      <div class="flex items-center text-white gap-3 drop-shadow">
        <AppLoading color="primary-500"></AppLoading>
        <p>{{ loadingText }}...</p>
      </div>
    </div>
</template>