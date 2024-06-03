import Lottie from 'react-lottie-player';
import { defaultLottie } from '@public/lotties';

import Typography from '@/components/Typography';
import { useStudentQuery } from '@/hooks/reactQuery/student';

const TrophyTitle = () => {
  const { data } = useStudentQuery();
  const [studentData] = data ?? [{}];
  return (
    <div className="flex items-center justify-start w-full">
      <Lottie loop animationData={defaultLottie.trophy} className="w-[190px]" play />
      <div className="flex flex-col ml-4">
        <Typography label="heading2">{`${studentData.user_name} 님의 성취도 분석 자료`}</Typography>
        <Typography label="body1" className="mt-2">
          풀었던 문제를 기반으로 파이플러스가 분석한 자료입니다
        </Typography>
        <Typography label="body1">{`${studentData.user_name} 님의 취약한 수학 유형을 파악해보세요`}</Typography>
      </div>
    </div>
  );
};
export default TrophyTitle;
