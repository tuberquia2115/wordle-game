import { FIVE_MINUTES } from '@/constants/timer';
import { create } from 'zustand';

interface State {
    isTimerPaused: boolean;
    timeLeft: number;
    setTimeLeft(newTimeLeft: number): void;
    setIsTimerPaused(value: boolean): void;
}

export const useTimerStore = create<State>()((set) => ({
    isTimerPaused: true,
    timeLeft: FIVE_MINUTES,
    setIsTimerPaused: (value: boolean) => set({ isTimerPaused: value }),
    setTimeLeft: (newTimeLeft) => set({ timeLeft: newTimeLeft }),
}));
