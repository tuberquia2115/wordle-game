import React from 'react';

import { Header, WordleBoard } from '@/components';

export default function Home() {
    return (
        <React.Fragment>
            <Header />
            <WordleBoard />
        </React.Fragment>
    );
}
