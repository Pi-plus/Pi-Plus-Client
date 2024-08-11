import type { HTMLAttributes } from 'react';
import dynamic from 'next/dynamic';
import classNames from 'classnames';

const ScrollAnimation = dynamic(() => import('@/components/Animation'));

interface ILandingLayoutProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
const LandingLayout = ({ children, className }: ILandingLayoutProps) => {
  return (
    <ScrollAnimation>
      <div className={classNames('flex w-full gap-28 justify-center py-36', className)}>{children}</div>
    </ScrollAnimation>
  );
};
export default LandingLayout;
