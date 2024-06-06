'use client';

import { MYPAGE_STUDENT_ROUTES, MYPAGE_STUDENT_TABS } from '@/constants';
import MypageTab from '@/features/mypage/components/Tab';
import { useNavigate } from '@/hooks';
import { useStudentQuery } from '@/hooks/reactQuery/student';

import AchievementSection from './AchievementSection';
import MyInfoSection from './MyInfoSection';
import ProblemSettingSection from './ProblemSection';

const StudentPrivatePage = () => {
  const { query } = useNavigate();
  const { data } = useStudentQuery();
  return (
    <div className="flex flex-1">
      <div className="w-full flex">
        <div className="w-[35%]">
          <MypageTab
            name={data.user_name!}
            gender="male"
            type="student"
            count={data.user_goal!}
            tablist={MYPAGE_STUDENT_TABS}
          />
        </div>

        <div className="w-[65%] px-7 py-5">
          {query.m === MYPAGE_STUDENT_ROUTES.PROBLEM_SETTING && (
            <ProblemSettingSection solveList={data.solve_problem ?? []} wrongList={data.wrong_problem ?? []} />
          )}
          {query.m === MYPAGE_STUDENT_ROUTES.ACHIEVEMENT && <AchievementSection />}

          {query.m === MYPAGE_STUDENT_ROUTES.MYINFO && <MyInfoSection id={data.uid as string} />}
        </div>
      </div>
    </div>
  );
};
export default StudentPrivatePage;
