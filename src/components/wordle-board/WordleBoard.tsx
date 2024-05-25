'use client';

import { useState } from 'react';
import { Square } from '../ui/square/Square';
import { VirtualKeyboard } from '../virtual-keyboard/VirtualKeyboard';
import { getBgColorSquare } from '@/utils';
import { useGameStore, useModalStore } from '@/store';

const INITIAL_BOARD_VALUES = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
];

export const WordleBoard = () => {
    const [board, setBoard] = useState(INITIAL_BOARD_VALUES);
    const [currentRow, setCurrentRow] = useState(0);
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const secretWord = useGameStore((state) => state.secretWord).split('');
    const { onIncreasePlays, onIncreaseVictories } = useGameStore((state) => state);
    const onOpenModal = useModalStore((state) => state.openModal);

    const handleKeyPress = (key: string) => {
        if (key === 'ENTER') {
            if (board[currentRow].join('').length === 5) {
                setCurrentLetterIndex(0);
                setCurrentRow((prevRow) => (prevRow < 4 ? prevRow + 1 : prevRow));
            }
        } else if (key === 'DELETE') {
            const newBoard = board.slice();
            newBoard[currentRow][currentLetterIndex - 1] = '';
            setCurrentLetterIndex((prevIndex) => prevIndex - 1);
            setBoard(newBoard);
        } else if (board[currentRow].join('').length < 5 && /^[A-Z]$/.test(key)) {
            const newBoard = board.slice();
            newBoard[currentRow][currentLetterIndex] = key;

            if (newBoard[currentRow].join('') === secretWord.join('')) {
                onIncreasePlays();
                onIncreaseVictories();
                setCurrentLetterIndex(0);
                setCurrentRow(0);
                setBoard(INITIAL_BOARD_VALUES);
                onOpenModal('statistics');
            } else {
                setCurrentLetterIndex((prevIndex) => prevIndex + 1);
                setBoard(newBoard);
            }
        }
    };
    return (
        <>
            <div className='pt-10'>
                {board.map((row, rowIndex) => {
                    const isWordCompleted = row.every((letter) => letter !== '');

                    return (
                        <div key={rowIndex} className='flex content-center mb-2.5 gap-2 '>
                            {row.map((key, keyIndex) => (
                                <Square
                                    key={keyIndex}
                                    letter={key}
                                    width={76}
                                    height={76}
                                    bgColor={
                                        isWordCompleted
                                            ? getBgColorSquare(key, keyIndex, secretWord)
                                            : 'default'
                                    }
                                    className='outline-none text-center font-extrabold text-3xl uppercase rounded-[5px] text-white-50 border-0'
                                />
                            ))}
                        </div>
                    );
                })}
            </div>
            <VirtualKeyboard onKeyPress={handleKeyPress} />
        </>
    );
};
