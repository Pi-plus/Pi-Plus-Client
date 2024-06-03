'use client';

import { MYPAGE_STUDENT_ROUTES, MYPAGE_STUDENT_TABS } from '@/constants';
import { ProblemSettingSection } from '@/features/mypage/components/Sections';
import AchievementSection from '@/features/mypage/components/Sections/AchievementSection';
import MypageTab from '@/features/mypage/components/Tab';
import { useNavigate } from '@/hooks';
import { useStudentQuery } from '@/hooks/reactQuery/student';
import { getUid } from '@/utils/cookie/manageCookie.client';

const StudentMyPage = () => {
  const { query } = useNavigate();
  const uid = getUid();
  const { data } = useStudentQuery(uid as string);
  return (
    <div className="flex flex-1">
      {data &&
        data.map((student) => (
          <div key={student.id} className="w-full flex">
            <div className="w-[35%]">
              <MypageTab
                name={student.user_name!}
                gender="male"
                type="student"
                count={student.user_goal!}
                tablist={MYPAGE_STUDENT_TABS}
              />
            </div>

            <div className="w-[65%] px-7 py-5">
              {query.m === MYPAGE_STUDENT_ROUTES.PROBLEM_SETTING && (
                <ProblemSettingSection
                  solveList={student.solve_problem ?? []}
                  wrongList={student.wrong_problem ?? []}
                />
              )}
              {query.m === MYPAGE_STUDENT_ROUTES.ACHIEVEMENT && <AchievementSection data={student} />}
            </div>
          </div>
        ))}
    </div>
  );
};
export default StudentMyPage;
