import React from 'react';

import './style.scss';

type Props = {
  name: string;
  color?: string;
  design?: string;
  disabled?: boolean;
  onClick?: any;
};

const Button = ({
  name,
  color = 'default',
  design,
  disabled = false,
  onClick,
}: Props) => (
  <button
    type="button"
    className={`
      btn
      btn-${color}${design ? `--${design}` : ''}
      ${disabled ? ' btn-disabled' : ''}
    `}
    onClick={onClick}
  >
    {name}
  </button>
);

export default Button;
