import Lottie from 'react-lottie-player';
import { defaultLottie } from '@public/lotties';

import type { TStudentResponse } from '@/apis/student/types';
import Typography from '@/components/Typography';

const TrophyTitle = ({ data }: { data: TStudentResponse }) => {
  return (
    <div className="flex items-center justify-start w-full">
      <Lottie loop animationData={defaultLottie.trophy} className="w-[190px]" play />
      <div className="flex flex-col ml-4">
        <Typography label="heading2">{`${data.user_name} 님의 성취도 분석 자료`}</Typography>
        <Typography label="body1" className="mt-2">
          풀었던 문제를 기반으로 파이플러스가 분석한 자료입니다
        </Typography>
        <Typography label="body1">{`${data.user_name} 님의 취약한 수학 유형을 파악해보세요`}</Typography>
      </div>
    </div>
  );
};
export default TrophyTitle;
