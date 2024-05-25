import React, { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

export const Button = (props: Props) => {
    const { label, ...restProps } = props;

    return (
        <div className='w-full flex justify-center'>
            <button
                className='bg-greenn-600 w-64 py-2 rounded-md text-white-50 text-xl font-extrabold hover:bg-greenn-650 transition-all'
                {...restProps}
            >
                {label}
            </button>
        </div>
    );
};
