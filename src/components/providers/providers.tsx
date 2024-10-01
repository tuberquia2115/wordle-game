'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { I18nextProvider } from 'react-i18next';

import i18n from '@/i18n';

export const Providers = ({ children }: { children: React.ReactNode }) => (
    <NextThemesProvider attribute='class' defaultTheme='dark' enableSystem={true}>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </NextThemesProvider>
);
