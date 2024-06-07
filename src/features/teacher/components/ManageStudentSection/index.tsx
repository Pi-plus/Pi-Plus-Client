import type { IManageStudent } from '@/apis/teacher/types';
import Typography from '@/components/Typography';
import MyPageBanner from '@/features/mypage/components/Banner';
import { getStudentInfo } from '@/features/teacher/utils';

import StudentCard from './StudentCard';

const ManageStudentSection = ({ manage }: { manage: IManageStudent[] }) => {
  const studentCount = getStudentInfo(manage);

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
          <Typography label="body1">{manage.length}</Typography>
          <Typography label="body1">관리하는 학생 수</Typography>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center py-5">
          <Typography label="body1">{studentCount}</Typography>
          <Typography label="body1">담당 학교 수</Typography>
        </div>
      </div>

      <div className="w-full grid grid-cols-3 gap-4 mt-9">
        {manage.length > 0 && manage.map((item) => <StudentCard key={item.uid} {...item} />)}
      </div>

      <div className="w-full flex justify-center items-center mt-8">
        {manage.length === 0 && <Typography label="title3">아직 관리하는 학생이 없어요</Typography>}
      </div>
    </div>
  );
};
export default ManageStudentSection;
