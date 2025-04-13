import { ref, computed, onUnmounted } from 'vue';
import type { TimerConfig, TimerState } from '../types/timer';

export function useTimer(config: TimerConfig) {
  const { initialDuration } = config;

  const state = ref<TimerState>({
    duration: initialDuration,
    isRunning: false,
    isCompleted: false,
  });

  const intervalId = ref<number | null>(null);

  const minutes = computed(() => Math.floor(state.value.duration / 60));
  const seconds = computed(() => state.value.duration % 60);

  const formattedTime = computed(() => {
    return `${minutes.value.toString().padStart(2, '0')}:${seconds.value
      .toString()
      .padStart(2, '0')}`;
  });

  const start = () => {
    console.log('start!')
    if (state.value.isRunning || state.value.isCompleted) return;

    state.value.isRunning = true;

    intervalId.value = window.setInterval(() => {
      if (state.value.duration <= 0) {
        complete();
        return;
      }

      state.value.duration -= 1;
    }, 1000);
  };

  const pause = () => {
    if (!state.value.isRunning) return;

    state.value.isRunning = false;

    if (intervalId.value !== null) {
      clearInterval(intervalId.value);
      intervalId.value = null;
    }
  };

  const reset = () => {
    pause();
    state.value.duration = initialDuration;
    state.value.isCompleted = false;
  };

  const complete = () => {
    pause();
    state.value.isCompleted = true;
    state.value.duration = 0;
    playCompletionSound();
  };

  const playCompletionSound = () => {
    // const audio = new Audio('src/assets/sounds/sound_2.wav');
    const audio = new Audio('src/assets/sounds/sound_1.flac');
    audio.play();
    console.log('Timer completed! Playing sound...');
  };


  // Очистка интервала при unmount компонента
  onUnmounted(() => {
    if (intervalId.value !== null) {
      clearInterval(intervalId.value);
    }
  });

  return {
    state,
    formattedTime,
    minutes,
    seconds,
    start,
    pause,
    reset,
    complete,
  };
}
