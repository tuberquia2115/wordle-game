import { create } from 'zustand';
import { persist } from 'zustand/middleware';

//FEATURE: Agregar statados, para pausar el timer, y saber si el tablero esta completo.
interface State {
    isRoundCompleted: boolean;
    plays: number;
    secretWord: string[];
    victories: number;
    words: string[];
    onIncreasePlays(): void;
    onIncreaseVictories(): void;
    onSelectedRandomWord(): void;
    setIsRoundCompleted(value: boolean): void;
    setWords(words: string[]): void;
}

export const useGameStore = create<State>()(
    persist(
        (set, get) => ({
            isRoundCompleted: false,
            plays: 0,
            secretWord: [],
            victories: 0,
            words: [],
            setIsRoundCompleted: (value: boolean) => set({ isRoundCompleted: value }),
            setWords: (words: string[]) => set({ words }),
            onIncreasePlays: () => {
                const { plays } = get();
                set({ plays: plays + 1 });
            },
            onIncreaseVictories: () => {
                const { victories } = get();
                set({ victories: victories + 1 });
            },
            onSelectedRandomWord: () => {
                const { words } = get();
                const randomIndex = Math.floor(Math.random() * words.length);
                const selectedSecretWord = words[randomIndex].split('');
                set({ secretWord: selectedSecretWord });
            },
        }),
        { name: 'wordle-game' }
    )
);
