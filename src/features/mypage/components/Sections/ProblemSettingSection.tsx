import MathTitle from '@/components/MathTitle';
import Typography from '@/components/Typography';

import MyPageBanner from '../Banner';

const ProblemSettingSection = () => {
  return (
    <>
      <MyPageBanner />

      <Typography label="heading1" className="mt-12 mb-4" as="h2">
        문제 관리 리스트
      </Typography>

      <div className="bg-gray-10 rounded-[20px] flex py-4">
        <div className="w-1/2 flex flex-col items-center justify-center border-r border-gray-20 py-5">
          <Typography label="body1">10</Typography>
          <Typography label="body1">총 푼 문제 수</Typography>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center py-5">
          <Typography label="body1">10</Typography>
          <Typography label="body1">틀린 문제 수</Typography>
        </div>
      </div>
      <MathTitle type="secondary" title="맞은 문제" className="mt-12" />
      <div className="border border-gray-10 rounded-b-xl py-16 px-12">
        <Typography label="title1">10023번</Typography>
      </div>
    </>
  );
};
export default ProblemSettingSection;
