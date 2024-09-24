'use client';

import { PropsWithChildren, useEffect } from 'react';

import { useGameStore, useModalStore } from '@/store';
import { Instructions, Modal, Statistics } from '@/components';
import { getWords } from '@/actions';
import { useDomMounted } from '@/hooks';

export default function GameLayout({ children }: PropsWithChildren) {
    const { open, view } = useModalStore((state) => state);
    const { setWords, setSecretWord, hasEnteredGameBefore } = useGameStore((state) => state);

    const mounted = useDomMounted();

    const ContentModal = view === 'instructions' ? Instructions : Statistics;

    const handleFetchWords = async () => {
        const { words = [] } = await getWords();
        setWords(words);
        setSecretWord(words.at(0)?.split('') || []);
    };

    useEffect(() => {
        handleFetchWords();
    }, []);

    if (!mounted) return;

    return (
        <main>
            {(open || !hasEnteredGameBefore) && (
                <Modal>
                    <ContentModal />
                </Modal>
            )}
            {children}
        </main>
    );
}
