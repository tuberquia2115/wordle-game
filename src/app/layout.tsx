import type { Metadata } from 'next';

import { roboto } from '@/config/fonts';
import { switchThemeDuration } from '@/constants/switch-theme-duration';
import { Providers } from '@/components/providers/Providers';
import './globals.css';

export const metadata: Metadata = {
    title: 'Game WORDLE',
    description: 'Game WORDLE',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${roboto.className} 
          bg-background-light 
          dark:bg-background-dark 
          transition-all
          ${switchThemeDuration}`}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
