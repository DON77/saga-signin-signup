import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { login, password } from '../../utils/validate';

import './style.scss';

const SignIn: React.FC = (props): any => {
  const { t } = useTranslation('common');

  const validateLogin = (value: string) => t(login(value));
  const validatePassword = (value: string) => t(password(value));

  return (
    <div className="signIn">
      <form className="signIn-container">
        <h3 className="signIn-title">{t('signIn')}</h3>
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
        <Button
          name={t('signIn')}
          color="primary"
          onClick={() => { return 1; }}
          type="submit"
        />
        <p className="signIn-question">{t('signInQuestion')}</p>
        <Link to="/sign-up">
          <Button
            name={t('signUp')}
            color="primary"
            design="unfill"
            onClick={() => { return 1; }}
          />
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
