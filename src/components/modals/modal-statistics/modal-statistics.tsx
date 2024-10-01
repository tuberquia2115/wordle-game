'use client';
import { useTranslation } from 'react-i18next';

import { useGameStore, useModalStore, useTimerStore } from '@/store';
import { Button, Title, TimeWord, Modal } from '@/components';

export const ModalStatistics = () => {
    const {
        victories,
        plays,
        secretWord,
        isRoundCompleted,
        setIsRoundCompleted,
        onSelectedRandomWord,
    } = useGameStore((state) => state);
    const { isTimerPaused, setIsTimerPaused } = useTimerStore((state) => state);
    const { closeModal } = useModalStore();
    const { t } = useTranslation();

    const onAccept = () => {
        if (isRoundCompleted) {
            setIsRoundCompleted(false);
            onSelectedRandomWord();
        }
        isTimerPaused && setIsTimerPaused(false);
        closeModal();
    };

    return (
        <Modal>
            <div className='pb-6 pt-14'>
                <Title
                    title={t('statistics.title')}
                    className='text-4xl font-extrabold text-center'
                />
                <div className='flex flex-row justify-around  pt-11 pb-14'>
                    <div className='flex flex-col items-center'>
                        <p className='font-extrabold text-4xl pb-3'>{plays.toString()}</p>
                        <p className='font-normal'>{t('statistics.plays')}</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='font-extrabold text-4xl pb-3'>{victories.toString()}</p>
                        <p className='font-normal'>{t('statistics.victories')}</p>
                    </div>
                </div>
                {isRoundCompleted ? (
                    <p className='font-normal text-lg text-center pb-5'>
                        {t('statistics.word_was')}:{' '}
                        <span className='font-bold uppercase'>{secretWord}</span>
                    </p>
                ) : (
                    <>
                        <p className='uppercase font-normal text-lg text-center'>
                            {t('statistics.next_word')}
                        </p>
                        <TimeWord />
                    </>
                )}
                <Button className='capitalize' label={t('accept')} onClick={onAccept} />
            </div>
        </Modal>
    );
};
