'use client';

import { MYPAGE_TEACHER_ROUTES, MYPAGE_TEACHER_TABS } from '@/constants';
import MypageTab from '@/features/mypage/components/Tab';
import { useNavigate } from '@/hooks';
import { useTeacherQuery } from '@/hooks/reactQuery/teacher';

import AddStudentSection from './AddStudentSection';
import ManageStudentSection from './ManageStudentSection';

const TeacherMyPage = () => {
  const { query } = useNavigate();
  const { data } = useTeacherQuery();

  const teacherManageArray = data.manage_student ?? [];
  return (
    <div className="flex flex-1">
      <div className="w-full flex">
        <div className="w-[35%]">
          <MypageTab
            name={data.user_name!}
            gender="male"
            type="teacher"
            count={String(teacherManageArray.length)}
            tablist={MYPAGE_TEACHER_TABS}
          />
        </div>

        <div className="w-[65%] px-7 py-5">
          {query.m === MYPAGE_TEACHER_ROUTES.MANAGE_STUDENT && <ManageStudentSection manage={teacherManageArray} />}
          {query.m === MYPAGE_TEACHER_ROUTES.ADD_STUDENT && <AddStudentSection />}
        </div>
      </div>
    </div>
  );
};
export default TeacherMyPage;
