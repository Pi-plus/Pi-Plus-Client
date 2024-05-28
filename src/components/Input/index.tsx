import { forwardRef } from 'react';
import classNames from 'classnames';

import Typography from '../Typography';

import { COMMON_STYLE, INPUT_STYLE } from './constant';
import type { InputProps } from './type';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'default', errorMessage, className, ...rest }: InputProps, ref) => {
    return (
      <>
        <input
          className={classNames(className, COMMON_STYLE, INPUT_STYLE[type], {
            'border-2 border-red text-red outline-0': Boolean(errorMessage),
            'border border-none outline-0 focus:outline-0': !Boolean(errorMessage),
          })}
          ref={ref}
          {...rest}
        />
        {errorMessage && (
          <Typography color="red" className="ml-1">
            {errorMessage}
          </Typography>
        )}
      </>
    );
  },
);

Input.displayName = 'Input';
export default Input;
