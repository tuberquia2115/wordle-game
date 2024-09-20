'use client';

import { Title } from '../title/Title';
import { Instructions, Modal } from '@/components';
import { ThemeSwitcher } from '../switch/ThemeSwicher';
import { Statistics } from '@/components/statistics/Statistics';
import { ChartDuotone, QuestionCircle } from '@/icons';

import { useGameStore, useModalStore } from '@/store';
import { getWords } from '@/actions';
import { getRandomWord } from '@/utils/getRandomWord';
import { useTranslation } from 'react-i18next';
import i18n from '../../../i18n';

export const Header = () => {
    const { t } = useTranslation();
    const onOpenModal = useModalStore((state) => state.openModal);
    const viewModal = useModalStore((state) => state.view);
    const isOpenModal = useModalStore((state) => state.open);
    const onCloseModal = useModalStore((state) => state.closeModal);
    const onChangeSecretWord = useGameStore((state) => state.setSecretWord);
    const words = useGameStore((state) => state.words);

    const onGame = () => {
        const word = getRandomWord(words);
        onChangeSecretWord(word.toUpperCase());
        onCloseModal();
    };

    return (
        <>
            <nav className='w-4/6 bg-primary-light h-[84px] dark:bg-primary-dark px-5 rounded-2xl'>
                <div className='h-full flex flex-row justify-between items-center'>
                    <button onClick={() => onOpenModal('instructions')}>
                        <QuestionCircle className='stroke-secondary' />
                    </button>
                    <Title title={t('wordle')} className='font-semibold text-4xl' />
                    <button onClick={() => i18n.changeLanguage('es')}>ES</button>
                    <button onClick={() => i18n.changeLanguage('en')}>EN</button>
                    <div className='flex items-center'>
                        <button onClick={() => onOpenModal('statistics')}>
                            <ChartDuotone />
                        </button>
                        <ThemeSwitcher />
                    </div>
                </div>
            </nav>
            {isOpenModal && (
                <Modal>
                    {viewModal === 'instructions' && <Instructions onGame={onGame} />}
                    {viewModal === 'statistics' && <Statistics onCloseModal={onCloseModal} />}
                </Modal>
            )}
        </>
    );
};
