import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { login, password, name } from '../../../utils/validate';

import '../style.scss';

const SignUp = ({ signUp }: { signUp: Function }) => {
  const { t } = useTranslation('common');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rePassword: '',
    name: '',
  });

  const validateLogin = (value: string) => t(login(value));
  const validatePassword = (value: string) => t(password(value));
  // eslint-disable-next-line no-confusing-arrow
  const validateConfirmPassword = (value: string) => value !== formData.password ? t('misPass') : '';
  const validateName = (value: string) => t(name(value));

  const handleChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSignUp = () => {
    signUp(formData);
  };

  return (
    <div className="signUp">
      <form className="signUp-container">
        <h3 className="signUp-title">{t('signUp')}</h3>
        <Input
          placeholder={t('log')}
          onChange={(value: string) => handleChange('email', value)}
          validate={validateLogin}
          nameClass="email"
        />
        <Input
          type="password"
          placeholder={t('pass')}
          onChange={(value: string) => handleChange('password', value)}
          validate={validatePassword}
          nameClass="password"
        />
        <Input
          type="password"
          placeholder={t('confPass')}
          onChange={(value: string) => handleChange('rePassword', value)}
          validate={validateConfirmPassword}
          nameClass="confirmPassword"
        />
        <Input
          placeholder={t('entName')}
          onChange={(value: string) => handleChange('name', value)}
          validate={validateName}
          nameClass="name"
        />
        <Button name={t('signUp')} color="primary" onClick={handleSignUp} />
        <p className="signUp-question">{t('signUpQuestion')}</p>
        <Link to="/sign-in">
          <Button name={t('signIn')} color="primary" design="unfill" onClick={() => {}} />
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
