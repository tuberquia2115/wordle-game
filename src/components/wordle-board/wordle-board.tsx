'use client';

import { useWordleBoard } from '@/hooks';
import { getBgColorSquare } from '@/utils';
import { Square, VirtualKeyboard } from '@/components';

export const WordleBoard = () => {
    const { board, secretWord, handleKeyPress } = useWordleBoard();

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='pt-10'>
                {board.map((word, rowIndex) => {
                    const isWordCompleted = word.join('').length === 5;
                    return (
                        <div key={rowIndex} className='flex content-center mb-2.5 gap-2 '>
                            {word.map((letter, letterIndex) => (
                                <Square
                                    key={`${letter}-${letterIndex}`}
                                    letter={letter}
                                    bgColor={
                                        isWordCompleted
                                            ? getBgColorSquare(letter, letterIndex, secretWord)
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
        </div>
    );
};
