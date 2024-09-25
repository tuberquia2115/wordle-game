import React from 'react';
import { Metadata } from 'next';

import HomeClient from './page.client';

export const metadata: Metadata = {
    title: 'Wordle Game',
    description: 'Word games, find the secret word with 5 attempts',
    icons: '/images/favicon/favicon.png',
};

export default function Home() {
    return <HomeClient />;
}
