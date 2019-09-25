import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { login, password } from '../../../utils/validate';

import '../style.scss';

const SignIn = ({ signIn }: { signIn: Function }) => {
  const { t } = useTranslation('common');
  const [email, setEmail] = useState('');
  const [pass, setPassword] = useState('');

  const validateLogin = (value: string) => t(login(value));
  const validatePassword = (value: string) => t(password(value));

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleSignIn = () => {
    signIn({ email, password: pass });
  };

  return (
    <div className="signIn">
      <form className="signIn-container">
        <h3 className="signIn-title">{t('signIn')}</h3>
        <Input placeholder={t('log')} onChange={handleEmailChange} validate={validateLogin} />
        <Input
          type="password"
          placeholder={t('pass')}
          onChange={handlePasswordChange}
          validate={validatePassword}
        />
        <Button name={t('signIn')} color="primary" onClick={handleSignIn} />
        <p className="signIn-question">{t('signInQuestion')}</p>
        <Link to="/sign-up">
          <Button name={t('signUp')} color="primary" design="unfill" onClick={() => {}} />
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
