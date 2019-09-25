import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { login, password, name } from '../../utils/validate';

import './style.scss';

const SignUp: React.FC = () => {
  const { t } = useTranslation('common');

  const validateLogin = (value: string) => t(login(value));
  const validatePassword = (value: string) => t(password(value));
  const validateConfirmPassword = (value: string) => value !== '123456' ? t('misPass') : '';
  const validateName = (value: string) => t(name(value));


  return (
    <div className="signUp">
      <form className="signUp-container">
        <h3 className="signUp-title">{t('signUp')}</h3>
        <Input
          placeholder={t('log')}
          onChange={(value: string) => console.log(value)}
          validate={validateLogin}
        />
        <Input
          type="password"
          placeholder={t('pass')}
          onChange={(value: string) => console.log(value)}
          validate={validatePassword}
        />
        <Input
          placeholder={t('confPass')}
          onChange={(value: string) => console.log(value)}
          validate={validateConfirmPassword}
        />
        <Input
          type="password"
          placeholder={t('entName')}
          onChange={(value: string) => console.log(value)}
          validate={validateName}
        />
        <Button
          name={t('signUp')}
          color="primary"
          onClick={() => {}}
          type="submit"
        />
        <p className="signUp-question">{t('signUpQuestion')}</p>
        <Link to="/sign-in">
          <Button
            name={t('signIn')}
            color="primary"
            design="unfill"
            onClick={() => { return 1; }}
          />
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
