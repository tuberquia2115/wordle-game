import { create } from 'zustand';

const FIVE_MINUTES = 5 * 60 * 1000; // 5 minutos en milisegundos

interface State {
    timeLeft: number;
    startTimer(): void;
}

export const useTimeWord = create<State>()((set, get) => {
    let interval: NodeJS.Timeout;

    return {
        timeLeft: FIVE_MINUTES,
        startTimer: () => {
            interval = setInterval(() => {
                set((state) => {
                    if (state.timeLeft <= 0) {
                        clearInterval(interval);
                        return { timeLeft: FIVE_MINUTES };
                    }
                    return { timeLeft: state.timeLeft - 1000 };
                });
            }, 1000);
        },
    };
});
