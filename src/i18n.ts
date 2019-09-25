import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import commonEn from './translations/en/common.json';
import commonRu from './translations/ru/common.json';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    resources: {
      en: {
        common: commonEn,
      },
      ru: {
        common: commonRu,
      },
    },
  });

export default i18n;
