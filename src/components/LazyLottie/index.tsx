import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import defaultLottie, { type TKeyOfDefaultLottie } from '@public/lotties';

import { useIntersectionObserver } from '@/hooks';

const Lottie = dynamic(() => import('react-lottie-player'));

interface ILazyLottieProps {
  imgkey: TKeyOfDefaultLottie;
  className?: string;
}

const LazyLottie = ({ imgkey, className }: ILazyLottieProps) => {
  const lottieRef = useRef(null);
  const [animationData, setAnimationData] = useState<object>();

  useIntersectionObserver({
    target: lottieRef,
    onIntersect: () => {
      if (!animationData) {
        defaultLottie[imgkey]().then(setAnimationData);
      }
    },
  });
  return (
    <>
      <div ref={lottieRef} />
      <Lottie loop animationData={animationData} play className={className} />
    </>
  );
};
export default LazyLottie;
