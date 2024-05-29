import Lottie from 'react-lottie-player';
import { defaultLottie } from '@public/lotties';

import Typography from '../Typography';

const PiPlusInfo = () => {
  return (
    <div className="w-full justify-center items-center flex flex-col h-full">
      <Typography label="heading1" className="mt-7">
        수학 문제 은행! 선생님과 학생의 매칭은
      </Typography>
      <Typography label="heading3" className="mb-3">
        파이플러스
      </Typography>
      <Lottie loop animationData={defaultLottie.piPlus} className="size-[440px]" play />
    </div>
  );
};
export default PiPlusInfo;
