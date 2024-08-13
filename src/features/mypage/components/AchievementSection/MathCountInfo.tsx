import { useRef, useState } from 'react';
import Lottie from 'react-lottie-player';

import type { TStudentResponse } from '@/apis/student/types';
import Typography from '@/components/Typography';
import MathCountChart from '@/features/dataAnalysis/components/MathCountChart';
import { useIntersectionObserver } from '@/hooks';

import { getMathCountComparison, getMathPercent } from '../../utils/getMathData';

const MathCountInfo = ({ data }: { data: TStudentResponse }) => {
  const solveCount = data.solve_problem?.length as number;
  const wrongCount = data.wrong_problem?.length as number;
  const [solvePercent, wrongPercent] = getMathPercent(solveCount, wrongCount);

  const lottieRef = useRef(null);
  const [animationData, setAnimationData] = useState<object>();

  useIntersectionObserver({
    target: lottieRef,
    onIntersect: () => {
      if (!animationData) {
        import('@public/lotties/clap.json').then(setAnimationData);
      }
    },
  });
  return (
    <div className="w-full grid grid-cols-2 gap-5 items-center justify-center mt-5">
      <div className="flex flex-col p-5 shadow-content rounded-lg h-[315px]">
        <Typography label="title1" className="relative z-20">
          학생 성취도
        </Typography>
        <div className="bg-blue-20 h-2 -mt-2 relative z-10 w-[95px]" />
        <Typography className="mt-6">{`맞은 문제는 ${solvePercent}% 틀린 문제는 ${wrongPercent}%를 차지합니다`}</Typography>
        <MathCountChart wrongCount={wrongCount} correctCount={solveCount} />
      </div>
      <div className="flex flex-col p-5 shadow-content rounded-lg h-[315px] justify-center items-center">
        <Lottie loop animationData={animationData} className="w-[100px]" play />
        <Typography className="my-4" label="title1">
          {`${data.user_name}님, 수고하셨습니다`}
        </Typography>
        <Typography>{getMathCountComparison(solveCount, wrongCount)}</Typography>
        <Typography>틀린 문제는 다시 문제 관리 탭에서 다시 풀어보세요</Typography>
      </div>
    </div>
  );
};
export default MathCountInfo;
