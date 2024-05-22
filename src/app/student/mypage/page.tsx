'use client';

import Lottie from 'react-lottie-player';
import { defaultLottie } from '@public/lotties';

const StudentMyPage = () => {
  return (
    <div>
      <Lottie loop animationData={defaultLottie.try} play />
    </div>
  );
};
export default StudentMyPage;
