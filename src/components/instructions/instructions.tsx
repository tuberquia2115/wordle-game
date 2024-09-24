'use client';

import clsx from 'clsx';

import { Title, Button, Square } from '@/components/ui';
import { useGameStore, useModalStore, useTimeWord } from '@/store';

export const Instructions = () => {
    const { closeModal } = useModalStore((state) => state);
    const { onChangeStatusEnteredGameBefore } = useGameStore((state) => state);
    const { startTimer } = useTimeWord((state) => state);

    const onGameStart = () => {
        startTimer();
        onChangeStatusEnteredGameBefore();
        closeModal();
    };

    return (
        <div className='pb-6 pt-5'>
            <Title title='Cómo jugar' className='text-3xl font-extrabold text-center pb-6' />
            <p className='text-lg font-normal fon leading-[45px]'>
                Adivina la palabra oculta en cinco intentos.
            </p>
            <p className='text-lg font-normal fon leading-[45px]'>
                Cada intento debe ser una palabra válida de 5 letras.
            </p>
            <p className='text-lg font-normal fon leading-6'>
                Después de cada intento el color de las letras cambia para mostrar qué tan cerca
                estás de acertar la palabra.
            </p>
            <h3 className='text-xl font-bold pt-4 pb-6'>Ejemplos</h3>
            <div className='flex justify-around'>
                {['g', 'a', 't', 'o', 's'].map((letter) => (
                    <Square
                        key={letter}
                        letter={letter}
                        className={clsx({ 'border-0': letter === 'g' })}
                        bgColor={letter === 'g' ? 'green' : undefined}
                    />
                ))}
            </div>
            <p className='text-lg font-normal py-5'>
                La letra <strong>G</strong> está en la palabra y en la posición correcta.
            </p>
            <div className='flex justify-around'>
                {['v', 'o', 'c', 'a', 'l'].map((letter) => (
                    <Square
                        key={letter}
                        letter={letter}
                        className={clsx({ 'border-0': letter === 'c' })}
                        bgColor={letter === 'c' ? 'orange' : undefined}
                    />
                ))}
            </div>

            <p className=' font-normal py-5 text-lg'>
                La letra <strong>C</strong> está en la palabra pero en la posición incorrecta.
            </p>
            <div className='flex justify-around'>
                {['c', 'a', 'n', 't', 'o'].map((letter) => (
                    <Square
                        key={letter}
                        letter={letter}
                        className={clsx({ 'border-0': letter === 'o' })}
                        bgColor={letter === 'o' ? 'grey' : undefined}
                    />
                ))}
            </div>

            <p className='font-normal text-lg pt-4 pb-5'>
                La letra <strong>O</strong> no está en la palabra.
            </p>

            <p className='text-lg font-normal'>
                Puede haber letras repetidas. Las pistas son independientes para cada letra.
            </p>

            <p className='py-4 text-lg font-normal text-center'>
                ¡Una palabra nueva cada 5 minutos!
            </p>

            <Button label='!JUGAR¡' onClick={() => onGameStart()} />
        </div>
    );
};
