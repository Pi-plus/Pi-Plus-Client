import Typography from '@/components/Typography';

const MathContentInfo = () => {
  return (
    <div className="w-full flex flex-col p-5 items-start justify-start mt-5 shadow-content rounded-lg">
      <Typography label="title1" className="relative z-20">
        내용 영역별 분석
      </Typography>
      <div className="bg-blue-20 h-2 -mt-2 relative z-10 w-[137px]" />
      <Typography className="mt-6">오각형 방사 그래프</Typography>
    </div>
  );
};
export default MathContentInfo;
