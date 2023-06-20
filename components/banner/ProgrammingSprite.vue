<script setup lang="ts">
import { useDark } from '@vueuse/core';


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
];
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

const cat = useSpriteAnimation(catAnim.idling, 300); 

function catHovered(hovered: boolean) {
  if (hovered)
    cat.runAnimation(isDark.value ? [catAnim.wakingUp[1]] : [catAnim.wakingUp[3]], true);
  else {
    cat.runAnimation((isDark.value ? catAnim.sleeping : catAnim.idling), true)
  }
}

watch(isDark, (dark)=> {
  if (dark) {
    cat.runAnimation([...catAnim.wakingUp].reverse(), false, catAnim.sleeping);
  } else {
    cat.runAnimation(catAnim.wakingUp, false, catAnim.idling);
  }
}, { immediate: true })

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
      @mouseenter="stopCoding(true)"
      @mouseleave="stopCoding(false)"
    >
    </div>

    <!-- Cat Sprite-->
    <div 
      class="
        cursor-pointer
        hover:brightness-110 dark:brightness-90 dark:hover:brightness-105
        w-[100px] h-[78px] absolute top-[26%] left-[67%]
        bg-no-repeat
        bg-[url('@/assets/img/sprites/cat.png')] 
        bg-[length:auto_100%] 
      "
      :style="{ backgroundPosition: `${cat.currentFrame.value.x} ${cat.currentFrame.value.y}` }"
      @click="isDark = !isDark"
    ></div>

  </div>
</template>