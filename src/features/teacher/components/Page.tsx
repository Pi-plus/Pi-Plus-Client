'use client';

import { MYPAGE_TEACHER_ROUTES, MYPAGE_TEACHER_TABS } from '@/constants';
import MypageTab from '@/features/mypage/components/Tab';
import { useNavigate } from '@/hooks';

import AddStudentSection from './AddStudentSection';
import ManageStudentSection from './ManageStudentSection';

const TeacherMyPage = () => {
  const { query } = useNavigate();
  return (
    <div className="flex flex-1">
      <div className="w-full flex">
        <div className="w-[35%]">
          <MypageTab name="김참빛" gender="male" type="teacher" count="20" tablist={MYPAGE_TEACHER_TABS} />
        </div>

        <div className="w-[65%] px-7 py-5">
          {query.m === MYPAGE_TEACHER_ROUTES.MANAGE_STUDENT && <ManageStudentSection />}
          {query.m === MYPAGE_TEACHER_ROUTES.ADD_STUDENT && <AddStudentSection />}
        </div>
      </div>
    </div>
  );
};
export default TeacherMyPage;
