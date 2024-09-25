import { PropsWithChildren } from 'react';

import { roboto } from '@/config/fonts';
import { Providers } from '@/components/providers/providers';

import './globals.css';

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang='en'>
            <body className={roboto.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
