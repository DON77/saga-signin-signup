import React from 'react';
import { useTranslation } from 'react-i18next';

const SignUp: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div>{t('signUp')}</div>
  );
};

export default SignUp;
