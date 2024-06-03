import Typography from '@/components/Typography';
import HorizontalBarChart from '@/features/dataAnalysis/components/HorizontalBarChart';
import PentagonRadarChart from '@/features/dataAnalysis/components/PentagonRadarChart';
import { useStudentQuery } from '@/hooks/reactQuery/student';

import { getMathTagCountList, getMathTagPercentCountList } from '../../utils/getMathData';

const MathContentInfo = () => {
  const { data } = useStudentQuery();
  const [studentData] = data ?? [{}];
  const tagsPercentCount = getMathTagPercentCountList(studentData.solve_problem ?? [], studentData.wrong_problem ?? []);
  const tagsCount = getMathTagCountList(studentData.solve_problem ?? [], studentData.wrong_problem ?? []);
  return (
    <div className="w-full flex flex-col p-5 items-start justify-start mt-5 shadow-content rounded-lg">
      <Typography label="title1" className="relative z-20">
        내용 영역별 분석
      </Typography>
      <div className="bg-blue-20 h-2 -mt-2 relative z-10 w-[137px]" />
      <Typography className="mt-6">
        오각형 방사 그래프를 통해 푼 수학 문제들의 내용 영역에 대한 분포를 확인해보세요
      </Typography>
      <div className="grid grid-cols-2 items-center w-full">
        <div>
          <PentagonRadarChart data={tagsPercentCount} />
        </div>
        <div>
          <HorizontalBarChart data={tagsCount} />
        </div>
      </div>
    </div>
  );
};
export default MathContentInfo;
