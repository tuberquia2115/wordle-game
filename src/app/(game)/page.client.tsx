'use client';

import React from 'react';

import { Header, WordleBoard } from '@/components';
import '@/i18n/config';

export default function HomeClient() {
    return (
        <React.Fragment>
            <Header />
            <WordleBoard />
        </React.Fragment>
    );
}
