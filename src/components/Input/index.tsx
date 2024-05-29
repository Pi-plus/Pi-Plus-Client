import { forwardRef } from 'react';
import classNames from 'classnames';

import Typography from '../Typography';

import { COMMON_STYLE, INPUT_STYLE } from './constant';
import type { InputProps } from './type';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ color = 'default', errorMessage, className, title, ...rest }: InputProps, ref) => {
    return (
      <div className="w-full">
        {title && (
          <Typography label="body2" color="gray70" className="ml-2">
            {title}
          </Typography>
        )}
        <input
          className={classNames(className, COMMON_STYLE, INPUT_STYLE[color], {
            'border-2 border-red text-red outline-0': Boolean(errorMessage),
            'border border-none outline-0 focus:outline-0': !Boolean(errorMessage),
            'mt-3': Boolean(title),
          })}
          ref={ref}
          {...rest}
        />
        {errorMessage && (
          <Typography color="red" className="ml-1">
            {errorMessage}
          </Typography>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
export default Input;
