import { SquareProps } from './square.interface';

export const Square: React.FC<SquareProps> = ({
    letter,
    width = '76px',
    height = '76px',
    bgColor = 'default',
    className,
    ...restProps
}) => {
    const backgroundColors: { [key: string]: string } = {
        green: 'bg-greenn-600',
        orange: 'bg-orange',
        grey: 'bg-grey-500',
        default: 'bg-[#939B9F4d] dark:bg-[#939B9F33]',
    };

    return (
        <button
            style={{ width, height }}
            className={`${className} ${backgroundColors[bgColor]} border border-black dark:border-[#939B9F] text-center font-extrabold text-3xl uppercase rounded-[5px] dark:text-white-50`}
            {...restProps}
        >
            {letter}
        </button>
    );
};
