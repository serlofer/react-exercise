import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug:true,
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false, //scape is already by default
        },
        resources: {
            en: {
                translation: {
                    header: {
                        title: 'Forecast provider'
                    }
                }
            },
            es: {
                translation: {
                    header: {
                        title: 'Previsión del tiempo'
                    }
                }
            }
        }
    });

    export default i18n;