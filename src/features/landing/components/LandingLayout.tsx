import type { HTMLAttributes } from 'react';
import classNames from 'classnames';

interface ILandingLayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
const LandingLayout = ({ children, className }: ILandingLayoutProps) => {
  return <div className={classNames('flex w-full gap-28 justify-center py-36', className)}>{children}</div>;
};
export default LandingLayout;
