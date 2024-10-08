import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en/translation.json';
import es from './es/translation.json';

i18next.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        es: { translation: es },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
    react: { useSuspense: false },
});

export default i18next;
