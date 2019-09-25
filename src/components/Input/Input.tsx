/* eslint-disable no-nested-ternary */
/* eslint-disable no-extra-boolean-cast */
// eslint-disable-next-line no-unused-vars
import React, { useState, ChangeEvent } from 'react';

import './style.scss';

type Props = {
  onChange: Function;
  placeholder?: string;
  type?: 'text' | 'password' | 'email';
  disabled?: boolean;
  nameClass?: string;
  validate: Function;
}

const Input = ({
  onChange,
  placeholder = '',
  type = 'text',
  disabled,
  nameClass = '',
  validate,
}: Props) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = ({ target: { value: currentValue } }: ChangeEvent<HTMLInputElement>) => {
    setValue(currentValue);
    onChange(currentValue);
    setError(validate(currentValue));
  };

  return (
    <div className="inputContainer">
      <div className="errorContainer">
        <span className="errorMessage">{error}</span>
      </div>
      <input
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        type={type}
        disabled={Boolean(disabled)}
        className={`
          ${nameClass}
          ${Boolean(error && !disabled) ? 'error' : Boolean(value && !disabled) ? 'success' : ''}
        `}
      />
    </div>
  );
};

export default Input;
