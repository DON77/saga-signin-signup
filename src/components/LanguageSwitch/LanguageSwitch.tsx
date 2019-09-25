import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../Button';

import './style.scss';

const LanguageSwitch = () => {
  const [lang, setLang] = useState('en');
  const { i18n } = useTranslation('common');

  const changeLanguage = (language: string) => {
    setLang(language);
    i18n.changeLanguage(language);
  };

  return (
    <div className="switch">
      <div className="switch-container">
        <Button
          name="en"
          color="primary"
          design="unfill"
          onClick={useCallback(
            () => changeLanguage('en'),
            []
          )}
          disabled={lang === 'en'}
        />
        <Button
          name="ru"
          color="primary"
          design="unfill"
          onClick={useCallback(
            () => changeLanguage('ru'),
            []
          )}
          disabled={lang === 'ru'}
        />
      </div>
    </div>
  );
};

export default LanguageSwitch;
