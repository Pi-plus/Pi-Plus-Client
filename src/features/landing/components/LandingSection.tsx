import Button from '@/components/Button';
import Typography from '@/components/Typography';

interface ILandingSectionProps {
  summary: string;
  title: string;
  description?: React.ReactNode;
  option: string;
  theme?: 'light' | 'dark';
  text?: string;
  onClick?: VoidFunction;
}
const LandingSection = ({
  summary,
  title,
  description,
  option,
  theme = 'light',
  text,
  onClick,
}: ILandingSectionProps) => {
  return (
    <div className="flex flex-col justify-between pb-8 px-10 max-sm:w-full">
      <Typography label="heading1" color={theme === 'light' ? 'blue40' : 'gray5'} className="mb-4">
        {summary}
      </Typography>

      <Typography label="heading3" color={theme === 'light' ? 'black' : 'white'} className="mb-4" as="h1">
        {title}
      </Typography>

      <Typography label="heading1" color={theme === 'light' ? 'black' : 'white'}>
        {description}
      </Typography>

      <Typography label="heading2" color={theme === 'light' ? 'gray70' : 'white'} className="mt-5">
        {option}
      </Typography>

      {theme === 'light' && (
        <Button className="mt-10" onClick={onClick}>
          {text}
        </Button>
      )}
    </div>
  );
};
export default LandingSection;
