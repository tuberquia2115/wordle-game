'use client';

import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

import { Title, ThemeSwitcher } from '@/components';
import { ChartDuotone, QuestionCircle } from '@/icons';
import { useModalStore } from '@/store';

const Header = () => {
    const { openModal } = useModalStore((state) => state);
    const { t } = useTranslation();

    const languages = ['es', 'en'];

    return (
        <nav className='w-full bg-primary-light h-14 md:h-20 dark:bg-primary-dark px-5'>
            <div className='h-full flex flex-row justify-between items-center'>
                <button onClick={() => openModal('instructions')}>
                    <QuestionCircle className='stroke-secondary' />
                </button>
                <Title
                    title={t('wordle')}
                    className='font-semibold text-4xl font-serif hidden md:flex'
                />
                <div className='flex items-center'>
                    {languages.map((item: string) => (
                        <button
                            key={item}
                            onClick={() => i18n.changeLanguage(item)}
                            className={`pr-6 font-serif ${
                                item === i18n.language ? 'font-extrabold' : 'font-normal'
                            } `}
                        >
                            {item.toUpperCase()}
                        </button>
                    ))}
                    <button onClick={() => openModal('statistics')}>
                        <ChartDuotone />
                    </button>
                    <ThemeSwitcher />
                </div>
            </div>
        </nav>
    );
};

export default Header;
