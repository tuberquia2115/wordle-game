'use client';

import { useGameStore } from '@/store';
import { Button } from '../ui/button/Button';
import { Title } from '../ui/title/Title';

interface Props {
    onCloseModal(): void;
}

export const Statistics = ({ onCloseModal }: Props) => {
    const { victories, plays } = useGameStore((state) => state);
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
            {true && (
                <p className='font-normal text-lg text-center pb-5'>
                    La palabra era: <span className='font-bold uppercase'>Perro</span>
                </p>
            )}
            <p className='uppercase font-normal text-lg text-center'>Siguiente Palabra</p>
            <strong className='font-bold text-2xl text-center block pt-3 pb-9'>04:10</strong>
            <Button label='Aceptar' onClick={onCloseModal} />
        </div>
    );
};
