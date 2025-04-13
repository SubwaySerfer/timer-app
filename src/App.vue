<template>
  <div class="app">
    <header>
      <h1>Vue Timer App</h1>
    </header>

    <main>
      <Timer :config="timerConfig" ref="timerRef" />
      <TimerControls
        :state="timerState"
        :start="startTimer"
        :pause="pauseTimer"
        :reset="resetTimer"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Timer from './components/Timer.vue';
import TimerControls from './components/TimerControls.vue';
import type { TimerConfig } from './types/timer';

const timerConfig = ref<TimerConfig>({
  initialDuration: 300, // 5 минут
  title: 'Focus Timer',
});

const timerRef = ref<InstanceType<typeof Timer> | null>(null);

const timerState = computed(() => {
  return (
    timerRef.value?.state || {
      duration: timerConfig.value.initialDuration,
      isRunning: false,
      isCompleted: false,
    }
  );
});

const startTimer = () => {
  timerRef.value?.start();
};

const pauseTimer = () => {
  timerRef.value?.pause();
};

const resetTimer = () => {
  timerRef.value?.reset();
};
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #3d3d3d;
}

.app {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}

header {
  text-align: center;
  margin-bottom: 2rem;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
