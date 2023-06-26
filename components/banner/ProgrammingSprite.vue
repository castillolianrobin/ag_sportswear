<script setup lang="ts">
import { useDark } from '@vueuse/core';
import { useSprite } from '~/composables/animation';


// const img = new Image();
// img.onload= ()=>alert('loaded');
// img.src = '@/assets/img/sprites/programming-sprite-hd.png';

const isDark = useDark({ disableTransition: false });

/** Programming Logic */
const lookininWindowSprite = [
  { x: '-1489.3px', y: '0' },
];

const codingLeft = [
  { x: '-50px', y: '0' },
  { x: '-410px', y: '0' },
  { x: '-770px', y: '0' },
];
const codingRight = [
  { x: '-1129.2px', y: '0' },
  { x: '-1489.2px', y: '0' },
  { x: '-1849.2px', y: '0' },
];
const continousCoding = [
  ...codingLeft,
  ...codingLeft,
  ...codingRight,
  ...codingLeft,
  ...codingRight,
  ...codingRight,

  // ...lookininWindowSprite,
  // ...lookininWindowSprite,
].reverse();
const programming = useSpriteAnimation(continousCoding);


function stopCoding(stop: boolean) {
  if (stop) programming.runAnimation(lookininWindowSprite, true);
  else programming.runAnimation(continousCoding);
}

/** Cat Logic */

const catAnim = {
  sleeping: [
    { x: '0', y: '0' },
    { x: '-101.7px', y: '0' },
    { x: '-203.7px', y: '0' },
    { x: '-303.5px', y: '0' },
  ],
  idling: [
    // { x: '0', y: '0' },
    // { x: '-409.3px', y: '0' },
    // { x: '-504.1px', y: '0' },
    // { x: '-613px', y: '0' },
    { x: '-733.8px', y: '0' },
    { x: '-840.2px', y: '0' },
    { x: '-941.9px', y: '0' },
    { x: '-840.2px', y: '0' },
    { x: '-733.8px', y: '0' },
  ],
  wakingUp: [
    { x: '0', y: '0' },
    { x: '-409.3px', y: '0' },
    { x: '-514.1px', y: '0' },
    { x: '-623px', y: '0' },
    { x: '-733.8px', y: '0' },
  ]
};

const cat = useSprite({ animation: [catAnim.idling, 300] }); 

watch(isDark, (dark)=> {
  if (dark) {
    cat.runAnimation([...catAnim.wakingUp].reverse(), false, catAnim.sleeping);
  } else {
    cat.runAnimation(catAnim.wakingUp, false, catAnim.idling);
  }
}, { immediate: true })


/** Cat Dialog */
const CAT_DIALOG_CLICK_ME_LIGHT = 'Too bright? Click me to go dark';
const CAT_DIALOG_CLICK_ME_DARK = 'Can\'t see anything? Click me to go light';
setTimeout(()=> cat.speakDialog(isDark.value ? CAT_DIALOG_CLICK_ME_DARK : CAT_DIALOG_CLICK_ME_LIGHT, 100, 2000), 5000);

watch(isDark, ()=>cat.speakDialog(`${ isDark.value ? 'Dark' : 'Light' } mode activated`, 100, 2000) );
</script>

<template>
  <div 
    class="
      h-[300px] aspect-square 
      absolute -bottom-12 md:bottom-0 md:left-20 lg:left-40
      md:scale-[150%] lg:scale-[200%]      
    "
  >
    <!-- Coding Sprite -->
    <div 
      class="
        w-full h-full absolute top-0 left-0 
        bg-no-repeat
        bg-[url('@/assets/img/sprites/programming-sprite-hd.png')] 
        bg-[length:auto_120%] 
      "
      :style="{ backgroundPosition: `${programming.currentFrame.value.x} ${programming.currentFrame.value.y}` }"
    >
    </div>

    <!-- Cat Sprite-->
    <div 
      class="
        cursor-pointer select-none
        w-[100px] h-[78px] absolute top-[26%] left-[67%]
        bg-no-repeat
        bg-[url('@/assets/img/sprites/cat.png')] 
        bg-[length:auto_100%] 
        drop-shadow-md
        dark:brightness-90
        animate-interactable hover:animate-none
      "
      :style="{ backgroundPosition: `${cat.currentFrame.value.x} ${cat.currentFrame.value.y}` }"
      @click="isDark = !isDark"
      @mouseenter="!cat.dialogRunning.value && cat.speakDialog(isDark ? CAT_DIALOG_CLICK_ME_DARK : CAT_DIALOG_CLICK_ME_LIGHT, false, false)"
      @mouseleave="!cat.dialogRunning.value && cat.resetDialog()"
    >
      <!-- Cat Dialog -->
      <span
        class="
          select-none
          px-1
          absolute bottom-9 -left-5
          bg-primary-900/25 dark:bg-primary-500/25 md:bg-transparent dark:md:bg-transparent 
          md:text-[10px] 2xl:text-xs
          text-primary-200 
          text-center
          transition-all
          drop-shadow-md
        "
        :class="cat.showDialog.value ? 'opacity-100' : 'opacity-0'"
      >
        {{ cat.dialog.value }}
      </span>
    </div>

  </div>
</template>