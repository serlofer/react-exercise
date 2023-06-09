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
                    lang: 'EN',
                    header: {
                        lang: 'Language',
                        title: 'Forecast provider'
                    },
                    input: {
                        placeholder: 'City name / zip code',
                        buttonText: 'Search'
                    },
                    result: {
                        empty: 'Found no recent forecasts'
                    },
                    forecast: {
                        fiveDays:'Forecast for five days in '
                    },
                    footer: {
                        text: 'Forecast provider I.N.C - PNC Center 201 E St Suite 1900 Regus, Cincinnati'
                    }
                }
            },
            es: {
                translation: {
                    lang: 'ES',
                    header: {
                        lang: 'Idioma',
                        title: 'Previsión del tiempo'
                    },
                    input: {
                        placeholder: 'Ciudad / código postal',
                        buttonText: 'Buscar'
                    },
                    result: {
                        empty: 'No se han encontrado pronósticos recientes'
                    },
                    forecast: {
                        fiveDays:'Pronóstico para 5 días en '
                    },
                    footer: {
                        text: 'Forecast provider I.N.C - División española Av. de Brasil, 29, 28020, Madrid'
                    }
                }
            },
            de: {
                translation: {
                    lang: 'DE',
                    header: {
                        lang: 'Sprache',
                        title: 'Wettervorhersage'
                    },
                    input: {
                        placeholder: 'Stadt / Postleitzahl',
                        buttonText: 'Suche'
                    },
                    result: {
                        empty: 'Kürzlich wurden keine Prognosen gefunden'
                    },
                    forecast: {
                        fiveDays:'Fünf-Tage-Prognose für '
                    },
                    footer: {
                        text: 'Forecast provider I.N.C - Deutsche Sektion, Coworking Gottesweg 56 Ehrenfeld, Köln'
                    }
                }
            }
        }
    });

    export default i18n;