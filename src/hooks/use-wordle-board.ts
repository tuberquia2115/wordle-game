import { useEffect, useState } from 'react';

import { useGameStore, useModalStore } from '@/store';

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

    const { secretWord, onIncreasePlays, onIncreaseVictories } = useGameStore((state) => state);
    const { open: isOpenModal, openModal } = useModalStore((state) => state);
    const isBoardCompleted = board.every((word) => word.every((letter) => letter !== ''));
    const onShowStatistics = () => openModal('statistics');

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

    const handleChangeBoard = () => {
        const currentWordAttempt = board[currentRow];
        const currentAttemptCompleted = currentWordAttempt.join('').length === 5;
        const isSuccessAttempt = currentWordAttempt.every(
            (letter, index) => letter === secretWord[index]
        );

        if (isBoardCompleted) {
            onIncreasePlays();
            onCleanBoard();
            onShowStatistics();
            return;
        }

        if (currentAttemptCompleted) {
            if (!isSuccessAttempt) return onPressKeyEnter();
            onCleanBoard();
            onChangeStatistics();
            onShowStatistics();
        }

        if (!currentAttemptCompleted) setCurrentLetterIndex((prevIndex) => prevIndex + 1);
    };

    const handleKeyPress = (key: string) => {
        const isValidLetter = /^[a-zA-Z]$/.test(key);
        if (['Backspace', 'DELETE'].includes(key)) onPressKeyBackspace();

        if (!isValidLetter || isOpenModal) return;
        const newBoard = board.slice();

        newBoard[currentRow][currentLetterIndex] = key.toUpperCase();
        setBoard(newBoard);
        handleChangeBoard();
    };

    const handlePhysicalKeyPress = ({ key }: KeyboardEvent) => handleKeyPress(key);

    useEffect(() => {
        window.addEventListener('keydown', handlePhysicalKeyPress);
        return () => {
            window.removeEventListener('keydown', handlePhysicalKeyPress);
        };
    });

    return { board, secretWord, handleKeyPress };
};
