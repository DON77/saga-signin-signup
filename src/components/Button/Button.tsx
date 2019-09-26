import React from 'react';

import './style.scss';

type Props = {
  name: string;
  color?: string;
  design?: string;
  nameClass?: string;
  disabled?: boolean;
  onClick?: any;
};

const Button = ({
  name,
  color = 'default',
  design,
  nameClass = '',
  disabled = false,
  onClick,
}: Props) => (
  <button
    type="button"
    className={`${nameClass} btn btn-${color}${design
      ? `--${design}`
      : ''} ${disabled
      ? ' btn-disabled'
      : ''}`}
    onClick={!disabled ? onClick : () => {}}
  >
    {name}
  </button>
);

export default Button;
