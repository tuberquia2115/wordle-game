'use client';

import { useEffect, useState } from 'react';

export const useDomMounted = () => {
    const [domMounted, setDomMounted] = useState(false);

    useEffect(() => {
        setDomMounted(true);
    }, []);

    return domMounted;
};
