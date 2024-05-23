import Lottie from 'react-lottie-player';
import { defaultLottie } from '@public/lotties';

import Typography from '@/components/Typography';

const MyPageBanner = () => {
  return (
    <div className="w-full flex items-center bg-[#A2D4F8]">
      <Lottie loop animationData={defaultLottie.try} play className="w-[15%] h-[15%]" />
      <div className="flex flex-col">
        <Typography
          label="body3"
          color="white"
          className="self-start overflow-hidden rounded-[20px] whitespace-nowrap border-4 border-white p-1 my-3"
        >
          Right Now
        </Typography>
        <Typography label="heading2" color="white">
          틀린 문제도 다시한번 복습해보세요
        </Typography>
        <Typography label="title3" color="white">
          틀린 문제 번호를 클릭하면 해당 문제 페이지로 이동합니다!
        </Typography>
      </div>
    </div>
  );
};
export default MyPageBanner;
