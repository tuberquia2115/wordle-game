'use client';
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Suspense, useEffect } from 'react';

import { getWords } from '@/actions';
import { useGameStore } from '@/store';

const Header = React.lazy(() => import('@/components/header/header'));
const WordleBoard = React.lazy(() => import('@/components/wordle-board/wordle-board'));

export default function Home() {
    const { setWords, onSelectedRandomWord } = useGameStore((state) => state);

    const renderLoading = () => (
        <div className='flex h-screen justify-center items-center'>
            <p className='text-3xl font-semibold'>Loading Game...</p>
        </div>
    );

    const handleFetchWords = async () => {
        const { words = [], ok } = await getWords();
        console.log('words response', words);
        if (ok) {
            setWords(words);
            onSelectedRandomWord();
        }
    };

    useEffect(() => {
        handleFetchWords();
    }, []);

    return (
        <Suspense fallback={renderLoading()}>
            <Header />
            <WordleBoard />
        </Suspense>
    );
}
