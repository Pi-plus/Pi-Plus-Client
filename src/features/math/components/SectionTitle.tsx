import Image from 'next/image';
import { defaultImages } from '@public/images';

import Typography from '@/components/Typography';

interface ISectionTitleProps {
  title: string;
  subTitle: string;
}
const SectionTitle = ({ title, subTitle }: ISectionTitleProps) => {
  return (
    <div className="w-full flex items-center gap-6">
      <Image src={defaultImages.studyStudent} width={170} height={170} alt="" />
      <div className="flex flex-col items-start">
        <Typography label="title1" color="black">
          {title}
        </Typography>
        <Typography color="gray50" label="body2">
          {subTitle}
        </Typography>
      </div>
    </div>
  );
};
export default SectionTitle;
