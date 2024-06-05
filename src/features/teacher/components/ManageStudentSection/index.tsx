import Typography from '@/components/Typography';
import MyPageBanner from '@/features/mypage/components/Banner';

import StudentCard from './StudentCard';

const ManageStudentSection = () => {
  const array = [1, 2, 3, 4, 5];
  return (
    <div>
      <MyPageBanner
        title="관리하는 학생들을 확인 해보세요"
        subTitle="학생들의 성취도 분석 자료를 클릭하면 확인할 수 있습니다!"
      />

      <Typography label="heading1" className="mt-12 mb-4" as="h2">
        관리 학생 리스트
      </Typography>

      <div className="bg-gray-10 rounded-[20px] flex py-4">
        <div className="w-1/2 flex flex-col items-center justify-center border-r border-gray-20 py-5">
          <Typography label="body1">12</Typography>
          <Typography label="body1">관리하는 학생 수</Typography>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center py-5">
          <Typography label="body1">30</Typography>
          <Typography label="body1">담당 학교 수</Typography>
        </div>
      </div>

      <div className="w-full grid grid-cols-3 gap-4 mt-9">
        {array.map((item) => (
          <StudentCard key={item} />
        ))}
      </div>
    </div>
  );
};
export default ManageStudentSection;
