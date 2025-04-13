<template>
  <div class="timer" :class="{ 'timer--completed': state.isCompleted }">
    <h1 class="timer__display">{{ formattedTime }}</h1>
    <div class="timer__status">
      <span v-if="state.isRunning">Running</span>
      <span v-else-if="state.isCompleted">Completed</span>
      <span v-else>Paused</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTimer } from '../composables/useTimer';
import type { TimerConfig } from '../types/timer';

const props = defineProps<{
  config: TimerConfig;
}>();

const { state, formattedTime, start, pause, reset } = useTimer(props.config);

defineExpose({ start, pause, reset, state });
</script>

<style scoped>
.timer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 8px;
  background-color: #a89090;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.timer--completed {
  background-color: #d4edda;
}

.timer__display {
  font-size: 3rem;
  font-weight: bold;
  margin: 0 0 1rem;
}

.timer__status {
  font-size: 1rem;
  color: #6c757d;
}
</style>