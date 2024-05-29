import Typography from '../Typography';

interface IMultiTitleProps {
  title: string;
  subTitle: string;
}
const MultiTitle = ({ title, subTitle }: IMultiTitleProps) => {
  return (
    <>
      <Typography label="heading2">{title}</Typography>
      <Typography label="body2" className="mb-7">
        {subTitle}
      </Typography>
    </>
  );
};
export default MultiTitle;
