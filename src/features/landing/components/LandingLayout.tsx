import type { HTMLAttributes } from 'react';
import classNames from 'classnames';

import ScrollAnimation from '@/components/Animation';

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
