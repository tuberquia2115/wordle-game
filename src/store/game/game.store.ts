import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
    words: string[];
    secretWord: string[];
    plays: number;
    victories: number;
    hasEnteredGameBefore: boolean;
    onChangeStatusEnteredGameBefore(): void;
    onIncreasePlays(): void;
    onIncreaseVictories(): void;
    setWords(words: string[]): void;
    setSecretWord(word: string[]): void;
}

export const useGameStore = create<State>()(
    persist(
        (set, get) => ({
            words: [],
            secretWord: [],
            plays: 0,
            victories: 0,
            hasEnteredGameBefore: false,
            setWords: (words: string[]) => set({ words }),
            setSecretWord: (word: string[]) => set({ secretWord: word }),
            onIncreasePlays: () => {
                const { plays } = get();
                set({ plays: plays + 1 });
            },
            onIncreaseVictories: () => {
                const { victories } = get();
                set({ victories: victories + 1 });
            },
            onChangeStatusEnteredGameBefore: () => {
                set({ hasEnteredGameBefore: true });
            },
        }),
        { name: 'wordle-game' }
    )
);
