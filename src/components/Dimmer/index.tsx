import type { HTMLAttributes } from 'react';
import classNames from 'classnames';

interface IDimmerProps extends HTMLAttributes<HTMLDivElement> {
  isShow: boolean;
}
const Dimmer = ({ isShow, className, ...rest }: IDimmerProps) => {
  return (
    <div
      {...rest}
      className={classNames(
        'fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-[#2F2F2F] bg-opacity-50',
        className,
        {
          hidden: !isShow,
        },
      )}
    />
  );
};
export default Dimmer;
