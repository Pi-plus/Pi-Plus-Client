import type { HTMLAttributes } from 'react';
import Image from 'next/image';
import { defaultImages } from '@public/images';
import classNames from 'classnames';

import Typography from '@/components/Typography';

interface ISectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subTitle: string;
}
const MathSectionTitle = ({ title, subTitle, className, ...rest }: ISectionTitleProps) => {
  return (
    <div className={classNames('w-full flex items-center gap-6', className)} {...rest}>
      <Image
        src={defaultImages.studyStudent}
        className="max-sm:w-14 sm:max-md:w-[74px] md:max-lg:w-28 md:max-lg:h-[120px]"
        width={170}
        height={170}
        alt=""
      />
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
export default MathSectionTitle;
