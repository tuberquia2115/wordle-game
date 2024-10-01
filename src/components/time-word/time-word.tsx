'use client';

import { useTimerStore } from '@/store';
import { formatTime } from '@/utils';

// Importamos el store

export const TimeWord: React.FC = () => {
    // Consumimos el estado y las acciones del store
    const { timeLeft } = useTimerStore((state) => state);

    return (
        <strong className='font-bold text-2xl text-center block pt-3 pb-9'>
            {formatTime(timeLeft)}
        </strong>
    );
};
