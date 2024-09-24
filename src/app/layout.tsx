import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import { roboto } from '@/config/fonts';
import { Providers } from '@/components/providers/providers';
import './globals.css';

export const metadata: Metadata = {
    title: 'Wordle Game',
    description: 'Word games, find the secret word with 5 attempts',
};

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang='en'>
            <body className={roboto.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
