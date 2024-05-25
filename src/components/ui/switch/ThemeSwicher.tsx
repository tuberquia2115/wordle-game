'use client';
import { useTheme } from 'next-themes';

import { SwitchLightBody, SwitchLight } from './SwitchLight';
import { SwitchDarkBody, SwitchDark } from './SwitchDark';
import { switchThemeDuration } from '@/constants/switch-theme-duration';
import { useEffect, useState } from 'react';

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            className={`w-fit relative p-2 ${switchThemeDuration}`}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {theme === 'light' ? (
                <SwitchLight className='absolute right-2' />
            ) : (
                <SwitchDark className='absolute left-2' />
            )}

            {theme === 'light' ? <SwitchLightBody /> : <SwitchDarkBody />}
        </button>
    );
};
