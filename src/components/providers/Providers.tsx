'use client';

import { getWords } from '@/actions';
import { useGameStore, useModalStore } from '@/store';
import { getLocalStorage, setLocalStorage } from '@/utils';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useCallback, useLayoutEffect } from 'react';

export const Providers = ({ children }: { children: React.ReactNode }) => {
    const onOpenModal = useModalStore((state) => state.openModal);
    const setWords = useGameStore((state) => state.setWords);

    const getAllWords = useCallback(async () => {
        const { ok, words } = await getWords();
        if (!ok) return;
        setWords(words!);
    }, [setWords]);

    useLayoutEffect(() => {
        const isFirtsOpen = getLocalStorage('first_time_entering');
        if (!isFirtsOpen) {
            onOpenModal('instructions');
            setLocalStorage('first_time_entering', 'true');
        }

        getAllWords();
    }, [getAllWords, onOpenModal]);

    return (
        <NextThemesProvider attribute='class' defaultTheme='system' enableSystem={true}>
            {children}
        </NextThemesProvider>
    );
};
