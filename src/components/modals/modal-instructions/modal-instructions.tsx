'use client';

import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

import { Title, Button, Square, Modal } from '@/components/ui';
import { useModalStore, useTimerStore } from '@/store';
import { setLocalStorage } from '@/utils';

export const ModalInstructions = () => {
    const { closeModal } = useModalStore((state) => state);
    const { setIsTimerPaused } = useTimerStore((state) => state);

    const { t } = useTranslation();

    const onGameStart = () => {
        closeModal();
        setIsTimerPaused(false);
        setLocalStorage('entered-game-before', 'true');
    };

    return (
        <Modal>
            <div className='pb-6 pt-5'>
                <Title
                    title={t('instructions.title')}
                    className='text-3xl font-extrabold text-center pb-6'
                />
                <p className='text-lg font-normal fon leading-[45px]'>
                    {t('instructions.description.paragraph_1')}
                </p>
                <p className='text-lg font-normal fon leading-[45px]'>
                    {t('instructions.description.paragraph_2')}
                </p>
                <p className='text-lg font-normal fon leading-6'>
                    {t('instructions.description.paragraph_3')}
                </p>
                <h3 className='text-xl font-bold pt-4 pb-6'>
                    {t('instructions.section_examples.title')}
                </h3>
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

                <div
                    className='text-lg font-normal py-5'
                    dangerouslySetInnerHTML={{
                        __html: t('instructions.section_examples.example_1'),
                    }}
                />

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
                <div
                    className='font-normal py-5 text-lg'
                    dangerouslySetInnerHTML={{
                        __html: t('instructions.section_examples.example_2'),
                    }}
                />

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

                <div
                    className='font-normal text-lg pt-4 pb-5'
                    dangerouslySetInnerHTML={{
                        __html: t('instructions.section_examples.example_3'),
                    }}
                />

                <p className='text-lg font-normal'>{t('instructions.description.paragraph_4')}</p>

                <p className='py-4 text-lg font-normal text-center'>
                    {t('instructions.description.paragraph_5')}
                </p>

                <Button label={t('play')} onClick={() => onGameStart()} />
            </div>
        </Modal>
    );
};
