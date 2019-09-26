import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { login, password, name } from '../../../utils/validate';

// eslint-disable-next-line no-unused-vars
import { UserData } from '../types';

import '../style.scss';

const SignUp = ({ user, signUp }: { user: UserData, signUp: Function }) => {
  const { t } = useTranslation('common');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });
  const [disabled, setDisabled] = useState(true);

  const validation = {
    email: (value: string) => t(login(value)),
    password: (value: string) => t(password(value)),
    confirmPassword: (value: string) => (value !== formData.password ? t('misPass') : ''),
    name: (value: string) => t(name(value)),
  };

  const validate = (setErrors: boolean = false) => {
    let errors = formErrors;

    if (setErrors) {
      errors = {
        email: validation.email(formData.email),
        password: validation.password(formData.password),
        confirmPassword: validation.confirmPassword(formData.confirmPassword),
        name: validation.name(formData.name),
      };
    }

    let state = false;
    Object.values(errors).forEach((error) => {
      if (error) state = true;
    });
    setDisabled(state);
    return state;
  };

  useEffect(() => {
    setDisabled(false);
  }, [user]);

  useEffect(() => {
    validate();
  }, [formErrors]);

  const handleChange = (key: string, value: string) => {
    setFormErrors({ ...formErrors, [key]: (validation as any)[key](value) });
    setFormData({ ...formData, [key]: value });
  };

  const handleSignUp = () => {
    if (!validate(true)) {
      signUp(formData);
      setDisabled(true);
    }
  };

  return (
    <div className="signUp">
      <form className="signUp-container">
        <h3 className="signUp-title">{t('signUp')}</h3>
        <Input
          placeholder={t('log')}
          onChange={(value: string) => handleChange('email', value)}
          nameClass="email"
          error={formErrors.email}
        />
        <Input
          type="password"
          placeholder={t('pass')}
          onChange={(value: string) => handleChange('password', value)}
          nameClass="password"
          error={formErrors.password}
        />
        <Input
          type="password"
          placeholder={t('confPass')}
          onChange={(value: string) => handleChange('confirmPassword', value)}
          nameClass="confirmPassword"
          error={formErrors.confirmPassword}
        />
        <Input
          placeholder={t('entName')}
          onChange={(value: string) => handleChange('name', value)}
          nameClass="name"
          error={formErrors.name}
        />
        <Button name={t('signUp')} color="primary" onClick={handleSignUp} disabled={disabled} />
        <p className="signUp-question">{t('signUpQuestion')}</p>
        <Link to="/sign-in">
          <Button name={t('signIn')} color="primary" design="unfill" onClick={() => {}} />
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
