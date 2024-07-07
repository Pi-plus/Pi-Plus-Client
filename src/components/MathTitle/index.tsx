import type { HTMLAttributes } from 'react';
import classNames from 'classnames';

import Typography from '../Typography';

interface IMathTitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  type?: 'primary' | 'secondary';
}
const MathTitle = ({ title, type, className, ...rest }: IMathTitleProps) => {
  return (
    <div
      {...rest}
      className={classNames('bg-blue-10 w-full flex items-center justify-center rounded-t-3xl py-5 px-14', className, {
        'bg-blue-10': type === 'primary',
        'bg-gray-10': type === 'secondary',
      })}
    >
      <Typography color={type === 'primary' ? 'blue40' : 'black'} label="title1">
        {title}
      </Typography>
    </div>
  );
};
export default MathTitle;
