import clsx from 'clsx';

import { Square } from '@/components';
import { keyboardLetters } from '@/constants';
import { VirtualKeyboardProps } from './virtual-keyboard.interface';

export const VirtualKeyboard: React.FC<VirtualKeyboardProps> = ({ onKeyPress }) => (
    <div className='flex items-center justify-center w-full'>
        <div className='bg-[#DADCE04d] dark:bg-[#DADCE008] mt-14 rounded-2xl pt-8 pb-6 px-0 md:px-4 max-w-full'>
            {keyboardLetters.map((row, rowIndex) => (
                <div key={rowIndex} className={clsx('flex justify-center mb-2')}>
                    {row.map((key) => (
                        <Square
                            key={key}
                            letter={key}
                            onClick={() => onKeyPress(key)}
                            className={clsx(
                                ' h-9 md:h-14 w-11 text-[17px] text-[#56575E] cursor-pointer hover:bg-gray-400 hover:text-white-50 dark:text-white-50 font-bold ml-2 bg-[#D3D6DA] dark:bg-[#565F7E] border-0',
                                {
                                    '!w-20': ['enter', 'Backspace'].includes(key),
                                }
                            )}
                        />
                    ))}
                </div>
            ))}
        </div>
    </div>
);
