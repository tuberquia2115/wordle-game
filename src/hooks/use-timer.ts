'use client';
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useRef } from 'react';
import { toast } from 'nextjs-toast-notify';

import { useGameStore, useTimerStore } from '@/store';
import { FIVE_MINUTES } from '@/constants/timer';
import { getLocalStorage } from '@/utils';

export const useTimer = () => {
    const { onSelectedRandomWord } = useGameStore((state) => state);
    const { timeLeft, isTimerPaused, setTimeLeft, setIsTimerPaused } = useTimerStore(
        (state) => state
    );
    const intervalTimerRef = useRef<NodeJS.Timeout>();
    const hasEnteredGameBefore = getLocalStorage('entered-game-before');

    const onClearInterval = () => clearInterval(intervalTimerRef.current);
    const resetTimer = () => {
        setTimeLeft(FIVE_MINUTES);
        setIsTimerPaused(true);
    };

    const handleChangeSecretWord = () => {
        toast.info('Ah cambiado la palabra secreta.', { sonido: true });
        onSelectedRandomWord();
    };

    const startTimer = () => {
        if (!hasEnteredGameBefore || isTimerPaused) return;
        intervalTimerRef.current = setInterval(() => {
            if (timeLeft <= 0) {
                onClearInterval();
                handleChangeSecretWord();
                setTimeLeft(FIVE_MINUTES);
                return;
            }
            setTimeLeft(timeLeft - 1000);
        }, 1000);
    };

    useEffect(() => {
        if (hasEnteredGameBefore && isTimerPaused) setIsTimerPaused(false);
    }, []);

    return { startTimer, onClearInterval, resetTimer };
};
