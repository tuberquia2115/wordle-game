import { BackspaceIcon } from '@/icons';
import { SquareProps } from './square.interface';

export const Square: React.FC<SquareProps> = ({
    letter,
    bgColor = 'default',
    className,
    ...restProps
}) => {
    const customLetter = letter === 'Backspace' ? <BackspaceIcon /> : letter;
    const backgroundColors: { [key: string]: string } = {
        green: 'bg-green-600',
        orange: 'bg-orange',
        grey: 'bg-grey-500',
        default: 'bg-[#939B9F4d] dark:bg-[#939B9F33]',
    };

    return (
        <button
            className={`${className} h-16 w-16 ${backgroundColors[bgColor]} border border-black dark:border-[#939B9F] flex items-center justify-center font-extrabold text-[15px] md:text-2xl uppercase rounded-[5px] dark:text-white-50`}
            {...restProps}
        >
            {customLetter}
        </button>
    );
};
