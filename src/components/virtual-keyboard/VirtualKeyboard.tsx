'use client';

import clsx from 'clsx';
import { useEffect } from 'react';

import { Square } from '../ui/square/Square';
import { KEYS } from '@/constants';

interface Props {
    onKeyPress(key: string): void;
}

export const VirtualKeyboard = ({ onKeyPress }: Props) => {
    const handlePhysicalKeyPress = (event: KeyboardEvent) => {
        const key = event.key.toUpperCase();
        if (key === 'ENTER' || key === 'BACKSPACE' || /^[A-Z]$/.test(key)) {
            onKeyPress(key === 'BACKSPACE' ? 'DELETE' : key);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handlePhysicalKeyPress);
        return () => {
            window.removeEventListener('keydown', handlePhysicalKeyPress);
        };
    });

    return (
        <div className='bg-[#DADCE04d] dark:bg-[#DADCE008] mt-14  w-[638px] rounded-2xl py-8 flex flex-col'>
            {KEYS.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    className={clsx('flex content-center mb-2.5', {
                        'pl-14': rowIndex === 0,
                        'pl-16': rowIndex === 1,
                        'pl-5': rowIndex === 2,
                    })}
                >
                    {row.map((key) => (
                        <Square
                            key={key}
                            letter={key}
                            width={key === 'ENTER' || key === 'DELETE' ? 80 : 45}
                            height={50}
                            onClick={() => onKeyPress(key)}
                            className='text-lg text-[#56575E] cursor-pointer hover:bg-gray-400 hover:text-white-50 dark:text-white-50 font-semibold ml-2 bg-[#D3D6DA] dark:bg-[#565F7E] border-0'
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};
