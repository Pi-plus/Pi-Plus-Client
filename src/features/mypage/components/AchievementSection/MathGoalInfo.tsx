import Lottie from 'react-lottie-player';
import { defaultLottie } from '@public/lotties';

import type { TStudentResponse } from '@/apis/student/types';
import Typography from '@/components/Typography';
import PieChart from '@/features/dataAnalysis/components/PieChart';

const MathGoalInfo = ({ data }: { data: TStudentResponse }) => {
  const totalCount = (data.solve_problem?.length ?? 0) + (data.wrong_problem?.length ?? 0);
  const goalCount = Number(data.user_goal ?? 0);
  const remainCount = goalCount > totalCount ? goalCount - totalCount : 0;
  return (
    <div className="w-full grid grid-cols-2 gap-5 items-center justify-center mt-5">
      <div className="flex flex-col p-5 shadow-content rounded-lg h-[450px]">
        <Typography label="title1" className="relative z-20">
          학생 목표
        </Typography>
        <div className="bg-blue-20 h-2 -mt-2 relative z-10 w-[77px]" />
        <Typography className="mt-6">{`${data.user_name} 님의 목표 문제는 ${data.user_goal}문제입니다`}</Typography>
        <div className="w-full justify-center items-center flex">
          <div className="w-[80%] mt-3">
            <PieChart activeCount={totalCount} disableCount={remainCount} />
          </div>
        </div>
      </div>
      {goalCount > totalCount ? (
        <div className="flex flex-col p-5 shadow-content rounded-lg h-[450px] justify-center items-center">
          <Lottie loop animationData={defaultLottie.goal} className="w-[200px] -mt-11" play />
          <Typography className="my-4 -mt-8" label="title1">
            {`목표까지 총 ${goalCount - totalCount}문제 남았습니다`}
          </Typography>
          <Typography>목표까지 얼마 남지 않았습니다!</Typography>
          <Typography>문제 풀기 탭에서 목표까지 남은 문제를 풀어보세요</Typography>
        </div>
      ) : (
        <div className="flex flex-col p-5 shadow-content rounded-lg h-[450px] justify-center items-center">
          <Lottie loop animationData={defaultLottie.goal} className="w-[200px] -mt-11" play />
          <Typography className="my-4 -mt-8" label="title1">
            최종 목표를 달성하였습니다
          </Typography>
          <Typography>목표 달성하기까지 수고하였습니다!</Typography>
          <Typography>문제 풀기 탭에서 더 많은 문제를 풀어보세요</Typography>
        </div>
      )}
    </div>
  );
};
export default MathGoalInfo;
