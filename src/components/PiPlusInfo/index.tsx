import { useRef, useState } from 'react';
import Lottie from 'react-lottie-player';

import { useIntersectionObserver } from '@/hooks';

import Typography from '../Typography';

const PiPlusInfo = () => {
  const lottieRef = useRef(null);
  const [animationData, setAnimationData] = useState<object>();

  useIntersectionObserver({
    target: lottieRef,
    onIntersect: () => {
      if (!animationData) {
        import('@public/lotties/pi-plus.json').then(setAnimationData);
      }
    },
  });
  return (
    <div className="w-full justify-center items-center flex flex-col h-full">
      <Typography label="heading1" className="mt-7">
        수학 문제 은행! 선생님과 학생의 매칭은
      </Typography>
      <Typography label="heading3" className="mb-3">
        파이플러스
      </Typography>
      <Lottie loop animationData={animationData} className="size-[440px]" play />
    </div>
  );
};
export default PiPlusInfo;
