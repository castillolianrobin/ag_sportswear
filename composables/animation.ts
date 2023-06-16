import { useIntervalFn } from "@vueuse/core";


export function useSpriteAnimation(currentAnimation: Frame[], _speed = 200, _infinite = true) {
  
  const infinite = ref(_infinite);
  const frameCoordinateFall = ref<Frame[]>([]);
  const frameCoordinate  = ref<Frame[]>(currentAnimation) 
  const speed = ref(_speed);
  const currentFrameI = ref(0);
  
  const currentFrame = computed(()=>{
    if (frameCoordinate.value.length === 0) 
      return { x: 0, y: 0 };
    else {
      return frameCoordinate.value[currentFrameI.value];
    }
  
  });

  useIntervalFn(()=>{
    if (currentFrameI.value === frameCoordinate.value.length - 1) {
      if (!infinite.value) { 
        frameCoordinate.value = frameCoordinateFall.value; 
        infinite.value = true;
      } 
      
      currentFrameI.value = 0;
    } else {
      currentFrameI.value += 1
    }
  }, speed.value || 0);


  function runAnimation(frames: Frame[], _infinite?: boolean, fallbackFrames = currentAnimation) {
    frameCoordinate.value = frames;
    
    if (fallbackFrames) {
      frameCoordinateFall.value = fallbackFrames;
    }

    infinite.value = !!_infinite;
    currentFrameI.value = 0;
  }
  
  
  return {
    frameCoordinate,
    currentFrame,
    runAnimation,
  }

}

export type Frame = {
  x: number | string;
  y: number | string;
}
