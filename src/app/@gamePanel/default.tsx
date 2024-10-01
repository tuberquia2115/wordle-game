'use client';

import { useEffect } from 'react';
import { ModalInstructions, ModalStatistics } from '@/components';
import { useModalStore } from '@/store';
import { getLocalStorage } from '@/utils';

const GamePanelDefault = () => {
    const { open, componentType, openModal } = useModalStore((state) => state);
    const hasEnteredGameBefore = getLocalStorage('entered-game-before');

    const componentTypes = {
        instructions: <ModalInstructions />,
        statistics: <ModalStatistics />,
    };

    const component = componentTypes[componentType ?? 'instructions'];

    useEffect(() => {
        if (!hasEnteredGameBefore) openModal('instructions');
    }, [hasEnteredGameBefore, openModal]);

    if (!open) return null;

    return <>{component}</>;
};

export default GamePanelDefault;
