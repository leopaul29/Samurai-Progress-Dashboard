import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import your translation files
import enTranslations from './en.json';
import jpTranslations from './jp.json';

const resources = {
    en: {
        translation: enTranslations
    },
    jp: {
        translation: jpTranslations
    }
};

i18n
    .use(LanguageDetector) // Detects user language
    .use(initReactI18next) // Passes i18n down to react-i18next
    .init({
        resources,

        // Language to use if translations in user language are not available
        fallbackLng: 'en',

        // Default namespace
        defaultNS: 'translation',

        debug: true, // Set to false in production

        interpolation: {
            escapeValue: false // React already does escaping
        },

        // Language detection options
        detection: {
            order: ['localStorage', 'navigator', 'htmlTag'],
            caches: ['localStorage']
        }
    });

export default i18n;