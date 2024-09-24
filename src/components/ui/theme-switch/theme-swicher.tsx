'use client';
import { useTheme } from 'next-themes';

import { SwitchDark } from './switch-dark';
import { SwitchLight } from './switch-light';

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    const isThemeDark = theme === 'dark';
    const newTheme = isThemeDark ? 'light' : 'dark';

    const onChangeTheme = () => setTheme(newTheme);

    return (
        <button className='w-fit relative p-2 duration-500' onClick={onChangeTheme}>
            {isThemeDark ? <SwitchDark /> : <SwitchLight />}
        </button>
    );
};
