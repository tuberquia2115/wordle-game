'use client';

import { useWordleBoard } from '@/hooks';
import { getBgColorSquare } from '@/utils';
import { Square, Title, VirtualKeyboard } from '@/components';
import { useTranslation } from 'react-i18next';

const WordleBoard = () => {
    const { t } = useTranslation();
    const { board, secretWord, handleKeyPress } = useWordleBoard();

    return (
        <>
            <div className='flex items-center justify-center flex-col w-full'>
                <Title
                    title={t('wordle')}
                    className='font-semibold text-4xl font-serif pt-4 md:hidden flex'
                />
                <div className='pt-5 md:pt-10 max-w-full grid grid-rows-5 gap-3'>
                    {board.map((word, rowIndex) => {
                        const isWordCompleted = word.join('').length === 5;
                        return (
                            <div key={rowIndex} className='grid grid-cols-5 gap-3'>
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
            </div>
            <VirtualKeyboard onKeyPress={handleKeyPress} />
        </>
    );
};

export default WordleBoard;
