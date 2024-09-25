import type { HTMLAttributes } from 'react';
import classNames from 'classnames';

import Typography from '@/components/Typography';

interface ILandingSectionProps extends HTMLAttributes<HTMLDivElement> {
  summary: string;
  title: string;
  option: string;
  children: React.ReactNode;
  theme?: 'light' | 'dark';
}
const LandingSection = ({
  summary,
  title,
  option,
  children,
  theme = 'light',
  className,
  ...rest
}: ILandingSectionProps) => {
  return (
    <div className={classNames('flex flex-col', className)} {...rest}>
      <Typography label="heading1" color={theme === 'light' ? 'blue40' : 'gray5'} className="mb-4">
        {summary}
      </Typography>

      <Typography label="heading3" color={theme === 'light' ? 'black' : 'white'} className="mb-4" as="h1">
        {title}
      </Typography>

      <Typography label="heading2" color={theme === 'light' ? 'gray70' : 'white'} className="mt-5">
        {option}
      </Typography>

      {children}
    </div>
  );
};
export default LandingSection;
