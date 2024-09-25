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
      <div
        className={classNames(
          'flex w-full gap-28 justify-center py-36 items-center sm:max-md:py-28 max-md:flex-col max-md:gap-6 max-sm:py-8',
          className,
        )}
      >
        {children}
      </div>
    </ScrollAnimation>
  );
};
export default LandingLayout;
