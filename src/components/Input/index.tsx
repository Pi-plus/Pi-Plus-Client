import classNames from 'classnames';

import Typography from '../Typography';

import { COMMON_STYLE, INPUT_STYLE } from './constant';
import type { InputProps } from './type';

const Input = ({ type = 'default', errorMessage, className, ...rest }: InputProps) => {
  return (
    <>
      <input
        className={classNames(className, COMMON_STYLE, INPUT_STYLE[type], {
          'border-2 border-red text-red outline-0': Boolean(errorMessage),
          'border border-none outline-0 focus:outline-0': !Boolean(errorMessage),
        })}
        {...rest}
      />
      {errorMessage && (
        <Typography color="red" className="ml-1">
          {errorMessage}
        </Typography>
      )}
    </>
  );
};
export default Input;
