import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/icons/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: ['class'],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                primary: {
                    light: '#F3F3F3',
                    dark: '#DADCE008',
                },
                background: {
                    light: '#ffffff',
                    dark: '#262B3Ce3',
                },
                text: {
                    light: '#000000',
                    dark: '#ffffff',
                },
                orange: '#CEB02C',
                grey: {
                    300: '#D3D6DA',
                    400: '#939B9F4d',
                    500: '#939B9F',
                    600: '#818181',
                    700: '#939B9F33',
                },
                white: {
                    50: '#ffffff',
                    100: '#f3f3f3e3',
                },
                green: {
                    600: '#6AAA64',
                    650: '#66A060',
                },
            },
        },
    },
    plugins: [],
};

export default config;
