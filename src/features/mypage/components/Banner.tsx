import Lottie from 'react-lottie-player';
import { defaultLottie } from '@public/lotties';

import Typography from '@/components/Typography';

const MyPageBanner = ({ title, subTitle }: { title: string; subTitle: string }) => {
  return (
    <div className="w-full flex items-center bg-blue-20 h-48 px-10 rounded-xl">
      <Lottie loop animationData={defaultLottie.try} play className="w-[180px]" />
      <div className="flex flex-col ml-9">
        <Typography
          label="body3"
          color="white"
          className="self-start overflow-hidden rounded-[20px] whitespace-nowrap border-4 border-white p-1 my-3"
        >
          Right Now
        </Typography>
        <Typography label="heading2" color="white">
          {title}
        </Typography>
        <Typography label="title3" color="white" className="mt-3">
          {subTitle}
        </Typography>
      </div>
    </div>
  );
};
export default MyPageBanner;
