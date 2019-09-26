import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { login, password } from '../../../utils/validate';

// eslint-disable-next-line no-unused-vars
import { UserData } from '../types';

import '../style.scss';

const SignIn = ({ user, signIn }: { user: UserData, signIn: Function }) => {
  const { t } = useTranslation('common');
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [formErrors, setFormErrors] = useState({ email: '', password: '' });
  const [disabled, setDisabled] = useState(true);

  const validation = {
    email: (value: string) => t(login(value)),
    password: (value: string) => t(password(value)),
  };

  const validate = (setErrors: boolean = false) => {
    let errors = formErrors;

    if (setErrors) {
      errors = {
        email: validation.email(formData.email),
        password: validation.password(formData.password),
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

  const handleSignIn = () => {
    if (!validate(true)) {
      signIn(formData);
      setDisabled(true);
    }
  };

  return (
    <div className="signIn">
      <form className="signIn-container">
        <h3 className="signIn-title">{t('signIn')}</h3>
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
        <Button
          name={t('signIn')}
          color="primary"
          onClick={handleSignIn}
          nameClass="submit"
          disabled={disabled}
        />
        <p className="signIn-question">{t('signInQuestion')}</p>
        <Link to="/sign-up">
          <Button name={t('signUp')} color="primary" design="unfill" onClick={() => {}} nameClass="register" />
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
