/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { toast } from 'nextjs-toast-notify';
import { ToastOptions } from 'nextjs-toast-notify/dist/interfaces';

import { useGameStore, useModalStore } from '@/store';
import { useTimer } from './use-timer';

export const INITIAL_BOARD_VALUES = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
];

export const useWordleBoard = () => {
    const [board, setBoard] = useState(INITIAL_BOARD_VALUES);
    const [currentRow, setCurrentRow] = useState(0);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

    const { secretWord, onIncreasePlays, onIncreaseVictories, setIsRoundCompleted } = useGameStore(
        (state) => state
    );
    const { open: isOpenModal, openModal } = useModalStore((state) => state);
    const { startTimer, onClearInterval, resetTimer } = useTimer();

    const isBoardCompleted = board.every((word) => word.every((letter) => letter !== ''));
    const toastOptions: ToastOptions = { position: 'top-center', duration: 7000 };
    const onShowStatistics = () => openModal('statistics');
    const onCompleteRound = () => setIsRoundCompleted(true);

    const onPressKeyEnter = () => {
        setCurrentRow((prevRow) => (prevRow < 4 ? prevRow + 1 : prevRow));
        setCurrentLetterIndex(0);
    };

    const onPressKeyBackspace = () => {
        if (currentLetterIndex >= 1) {
            const newBoard = board.slice();
            newBoard[currentRow][currentLetterIndex - 1] = '';
            setCurrentLetterIndex((prevIndex) => prevIndex - 1);
            setBoard(newBoard);
        }
    };

    const onChangeStatistics = () => {
        onIncreasePlays();
        onIncreaseVictories();
    };

    const onCleanBoard = () => {
        const newBoard = board.map((word) => word.map(() => ''));
        setBoard(newBoard);
        setCurrentRow(0);
        setCurrentLetterIndex(0);
    };

    const onSuccessAttempt = () => {
        onCleanBoard();
        resetTimer();
        onChangeStatistics();
        onCompleteRound();
        onShowStatistics();
        toast.success(
            '¡Excelente! Diste con la palabra oculta. Juega más para ganar más partidas.',
            toastOptions
        );
    };

    const onBoardCompleted = () => {
        onCleanBoard();
        resetTimer();
        onIncreasePlays();
        onCompleteRound();
        onShowStatistics();
        toast.error('No acertaste con la palabra, inténtalo una vez más.', toastOptions);
    };

    const handleChangeBoard = () => {
        const currentWordAttempt = board[currentRow];
        const currentAttemptCompleted = currentWordAttempt.join('').length === 5;
        const isSuccessAttempt = currentWordAttempt.every(
            (letter, index) => letter === secretWord[index]
        );

        if (currentAttemptCompleted) {
            if (!isSuccessAttempt) return onPressKeyEnter();
            else onSuccessAttempt();
        }

        if (!currentAttemptCompleted) setCurrentLetterIndex((prevIndex) => prevIndex + 1);
    };

    const handleKeyPress = (key: string) => {
        const isValidLetter = /^[a-zA-Z]$/.test(key);
        const isKeyBackspace = key === 'Backspace';
        isKeyBackspace && onPressKeyBackspace();

        if (!isValidLetter || isOpenModal) return;
        const newBoard = board.slice();

        newBoard[currentRow][currentLetterIndex] = key.toUpperCase();
        setBoard(newBoard);
        handleChangeBoard();
    };

    const handlePhysicalKeyPress = ({ key }: KeyboardEvent) => handleKeyPress(key);

    useEffect(() => {
        isBoardCompleted && onBoardCompleted();
    }, [isBoardCompleted]);

    useEffect(() => {
        window.addEventListener('keydown', handlePhysicalKeyPress);
        return () => {
            window.removeEventListener('keydown', handlePhysicalKeyPress);
        };
    });

    useEffect(() => {
        startTimer();
        return () => onClearInterval();
    });

    return { board, secretWord, handleKeyPress };
};
