'use client';

import { useGameStore, useModalStore } from '@/store';
import { Button, Title, TimeWord } from '@/components';

export const Statistics = () => {
    const { victories, plays } = useGameStore((state) => state);
    const { closeModal } = useModalStore();

    return (
        <div className='pb-6 pt-14'>
            <Title title='Estadísticas' className='text-4xl font-extrabold text-center' />
            <div className='flex flex-row justify-around  pt-11 pb-14'>
                <div className='flex flex-col items-center'>
                    <p className='font-extrabold text-4xl pb-3'>{plays.toString()}</p>
                    <p className='font-normal'>Jugadas</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='font-extrabold text-4xl pb-3'>{victories.toString()}</p>
                    <p className='font-normal'>Victorias</p>
                </div>
            </div>
            {false && (
                <p className='font-normal text-lg text-center pb-5'>
                    La palabra era: <span className='font-bold uppercase'>PERRO</span>
                </p>
            )}
            <p className='uppercase font-normal text-lg text-center'>Siguiente Palabra en</p>
            <TimeWord />
            <Button label='Aceptar' onClick={closeModal} />
        </div>
    );
};
