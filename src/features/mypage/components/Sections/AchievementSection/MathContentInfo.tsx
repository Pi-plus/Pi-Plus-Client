import Typography from '@/components/Typography';
import PentagonRadarChart from '@/features/dataAnalysis/components/PentagonRadarChart';

const MathContentInfo = () => {
  return (
    <div className="w-full flex flex-col p-5 items-start justify-start mt-5 shadow-content rounded-lg">
      <Typography label="title1" className="relative z-20">
        내용 영역별 분석
      </Typography>
      <div className="bg-blue-20 h-2 -mt-2 relative z-10 w-[137px]" />
      <Typography className="mt-6">오각형 방사 그래프를 통해 수학 내용 영역별 성취도를 확인해보세요</Typography>
      <div className="flex items-center">
        <PentagonRadarChart />
        <div>표 자리</div>
      </div>
    </div>
  );
};
export default MathContentInfo;
