'use client';

import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

import { Title } from '../title/title';
import { useModalStore } from '@/store';
import { ThemeSwitcher } from '../theme-switch/theme-swicher';
import { ChartDuotone, QuestionCircle } from '@/icons';

export const Header = () => {
    const { t } = useTranslation();
    const { openModal } = useModalStore((state) => state);
    const languages = ['es', 'en'];

    const renderBtnLanguage = (item: string) => (
        <button
            key={item}
            onClick={() => i18n.changeLanguage(item)}
            className={`pr-6 ${item === i18n.language ? 'font-extrabold' : 'font-normal'} `}
        >
            {item.toUpperCase()}
        </button>
    );

    return (
        <nav className='w-full bg-primary-light h-[84px] dark:bg-primary-dark px-5'>
            <div className='h-full flex flex-row justify-between items-center'>
                <button onClick={() => openModal('instructions')}>
                    <QuestionCircle className='stroke-secondary' />
                </button>
                <Title title={t('wordle')} className='font-semibold text-4xl' />
                <div className='flex items-center'>
                    {languages.map(renderBtnLanguage)}
                    <button onClick={() => openModal('statistics')}>
                        <ChartDuotone />
                    </button>
                    <ThemeSwitcher />
                </div>
            </div>
        </nav>
    );
};
