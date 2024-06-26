import React from 'react';
import classNames from 'classnames';

import Typography from '../Typography';

import { BUTTON_STYLE } from './constant';
import type { IButtonProps } from './type';

const Button = ({
  type = 'secondary',
  loading = false,
  disabled = false,
  children,
  className,
  ...rest
}: IButtonProps) => {
  return (
    <button
      disabled={disabled || loading}
      className={classNames(
        className,
        'w-full bg-blue-30 rounded-xl py-[19px] px-7 active:opacity-[0.85] disabled:pointer-events-none disabled:bg-gray-10 disabled:opacity-50',
        BUTTON_STYLE[type].container,
      )}
      {...rest}
    >
      {loading ? (
        <Typography color="gray30">로딩중..</Typography>
      ) : (
        <Typography label="body1" color={disabled ? 'gray50' : BUTTON_STYLE[type].textColor}>
          {children}
        </Typography>
      )}
    </button>
  );
};
export default Button;
