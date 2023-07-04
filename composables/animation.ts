import { useIntervalFn } from "@vueuse/core";


export function useSprite( params: { animation: Parameters<typeof useSpriteAnimation>, dialog?: Parameters<typeof useSpriteDialog> }) {
  const animation = useSpriteAnimation(...params.animation);
  const dialog = useSpriteDialog(...(params.dialog || []));

  return { ...animation, ...dialog }
}

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


function useSpriteDialog(_typeSpeed = 150, _hideDialogTime = 1000) {
  // Dialog Text
  const dialog = ref('');
  // Dialog Show
  const showDialog = ref(false); 
  const dialogRunning = ref(false);
  // Current dialog 
  const dialogId = ref<NodeJS.Timer | ''>('');
  let hideDialogTimeoutId:NodeJS.Timer | '' = ''; 
  let clearDialogTimeoutId:NodeJS.Timer | '' = ''; 
  // Create dialog function
  function speakDialog(_dialog:string, typeSpeed: number | false = _typeSpeed, hideDialogTime: number | false = _hideDialogTime, events?: { onDone?: CallableFunction }) {
    resetDialog();
    dialog.value = '';
    showDialog.value = true;
    dialogRunning.value = !!typeSpeed;
    !typeSpeed 
      ? dialog.value = _dialog && (events?.onDone && events?.onDone())
      : dialogId.value = setInterval(()=>{
        if (dialog.value === _dialog) {
          clearInterval(dialogId.value);
          if (hideDialogTime) {
            hideDialogTimeoutId = setTimeout(()=> {
            showDialog.value = false;
            dialogRunning.value = false;
            events?.onDone && events?.onDone();
            clearDialogTimeoutId = setTimeout(()=>{ 
              dialog.value = '';}, 1000 );
            } , hideDialogTime);
          } else {
            events?.onDone && events?.onDone();
          }
        return;
        } 
        const dialogLength = dialog.value.length;
        const currentChar = _dialog.substring(dialogLength, dialogLength + 1);
        dialog.value = dialog.value + currentChar;
      }, typeSpeed); 
  }

  function resetDialog() {
    clearTimeout(hideDialogTimeoutId);
    clearTimeout(clearDialogTimeoutId)
    clearInterval(dialogId.value);
    dialog.value = '';
    showDialog.value = false;
  }

  return {
    dialog,
    showDialog,
    dialogRunning,
    speakDialog,
    resetDialog,
  }
}



/** __TYPE DEFINITION__  */

export type Frame = {
  x: number | string;
  y: number | string;
}
