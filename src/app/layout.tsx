import { PropsWithChildren, ReactNode } from 'react';

import { roboto } from '@/config/fonts';
import { Providers } from '@/components/providers/providers';
import { genPageMetadata } from '@/utils';

import './globals.css';
import 'nextjs-toast-notify/dist/nextjs-toast-notify.css';

export const metadata = genPageMetadata({
    title: 'Wordle Game - A game to have fun',
    description: 'Word game, you have 5 attempts to guess the secret word',
    pageRoute: '/',
    ogImgRoute: '/images/favicon/favicon.png',
});

interface RootLayoutProps extends PropsWithChildren {
    gamePanel: ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
    return (
        <html lang='en' className='bg-transparent'>
            <body className={roboto.className}>
                <Providers>
                    <main>
                        {props?.children}
                        {props?.gamePanel}
                    </main>
                </Providers>
            </body>
        </html>
    );
}
