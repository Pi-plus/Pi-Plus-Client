import Lottie from 'react-lottie-player';
import { defaultLottie } from '@public/lotties';

import Typography from '../Typography';

const EmptyPage = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center justify-center h-full flex-1 flex-col pt-5">
      <div className="flex flex-col items-center ">
        <Typography label="heading2">{title}</Typography>
        <Typography className="mb-2">파이플러스가 빨리 준비하겠습니다</Typography>
        <Lottie className="w-[30%]" loop animationData={defaultLottie.study} play />
      </div>
    </div>
  );
};
export default EmptyPage;
