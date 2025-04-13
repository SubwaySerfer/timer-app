<template>
  <div class="timer-controls">
    <div class="timer-controls__buttons">
      <button
        @click="start"
        :disabled="state.isRunning || state.isCompleted"
        class="btn btn-primary"
      >
        Start
      </button>
      <button
        @click="pause"
        :disabled="!state.isRunning"
        class="btn btn-secondary"
      >
        Pause
      </button>
      <button @click="reset" class="btn btn-danger">Reset</button>
    </div>
    <div class="timer-controls__config">
      <label>
        Duration (minutes):
        <input
          type="number"
          min="1"
          max="60"
          v-model="durationMinutes"
          @change="updateDuration"
          :disabled="state.isRunning"
        />
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { TimerState } from '../types/timer';

const props = defineProps<{
  state: TimerState;
  start: () => void;
  pause: () => void;
  reset: () => void;
}>();

const durationMinutes = ref(Math.floor(props.state.duration / 60));

const updateDuration = () => {
  const newDuration = durationMinutes.value * 60;
  props.state.duration = newDuration;
};

// Обновляем отображаемые минуты при изменении состояния таймера
watch(
  () => props.state.duration,
  (newDuration) => {
    if (!props.state.isRunning) {
      durationMinutes.value = Math.floor(newDuration / 60);
    }
  }
);
</script>

<style scoped>
.timer-controls {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.timer-controls__buttons {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

.timer-controls__config {
  margin-top: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s, opacity 0.2s;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
}

input[type='number'] {
  padding: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  margin-left: 0.5rem;
  width: 5rem;
}
</style>
