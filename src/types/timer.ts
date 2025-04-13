export interface TimerConfig {
  initialDuration: number; // в секундах
  title?: string;
}

export interface TimerState {
  duration: number; // текущее время таймера в секундах
  isRunning: boolean;
  isCompleted: boolean;
}