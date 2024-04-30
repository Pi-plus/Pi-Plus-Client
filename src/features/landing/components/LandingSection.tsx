import type { PropsWithChildren } from 'react';

import Typography from '@/components/Typography';

interface ILandingSectionProps extends PropsWithChildren {
  summary: string;
  title: string;
  option: string;
  theme?: 'light' | 'dark';
}
const LandingSection = ({ summary, title, option, children, theme = 'light' }: ILandingSectionProps) => {
  return (
    <div className="flex flex-col">
      <Typography label="heading1" color={theme === 'light' ? 'blue40' : 'gray5'} className="mb-4">
        {summary}
      </Typography>

      <Typography label="heading3" color={theme === 'light' ? 'black' : 'white'} className="mb-4" as="h1">
        {title}
      </Typography>

      {children}
      <Typography label="heading2" color={theme === 'light' ? 'gray70' : 'white'} className="mt-5">
        {option}
      </Typography>
    </div>
  );
};
export default LandingSection;
