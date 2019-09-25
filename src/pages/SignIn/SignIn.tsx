import React from 'react';
import { useTranslation } from 'react-i18next';

const SignIn: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div>{t('signIn')}</div>
  );
};

export default SignIn;
