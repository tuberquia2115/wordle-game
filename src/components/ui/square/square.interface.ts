import { ButtonHTMLAttributes } from 'react';

export interface SquareProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    bgColor?: string;
    letter: string;
    width?: string | number;
    height?: string | number;
}
