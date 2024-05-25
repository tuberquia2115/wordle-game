import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
    plays: number;
    victories: number;
    secretWord: string;
    words: string[];
    setWords(words: string[]): void;
    onIncreasePlays(): void
    onIncreaseVictories(): void;
    setSecretWord(word: string): void;
}

export const useGameStore = create<State>()(
    persist(
        (set, get) => ({
            words: [],
            secretWord: '',
            plays: 0,
            victories: 0,
            onIncreasePlays: () => {
                const { plays } = get()

                set({ plays: plays + 1 })
            },
            onIncreaseVictories: () => {
                const { victories } = get();
                set({ victories: victories + 1 })
            },

            setSecretWord: (word: string) => {
                set({ secretWord: word })
            },
            setWords: (words: string[]) => {
                set({ words })
            }
        }),

        { name: 'wordle-game' }
    )
);