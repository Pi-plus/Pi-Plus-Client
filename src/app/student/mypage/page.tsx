'use client';

import { MYPAGE_STUDENT_ROUTES, MYPAGE_STUDENT_TABS } from '@/constants';
import { ProblemSettingSection } from '@/features/mypage/components/Sections';
import AchievementSection from '@/features/mypage/components/Sections/AchievementSection';
import MypageTab from '@/features/mypage/components/Tab';
import { useNavigate } from '@/hooks';

const StudentMyPage = () => {
  const { query } = useNavigate();
  return (
    <div className="flex flex-1">
      <div className="w-[35%]">
        <MypageTab name="김광운" gender="male" type="student" count={5} tablist={MYPAGE_STUDENT_TABS} />
      </div>
      <div className="w-[65%] px-7 py-5">
        {query.m === MYPAGE_STUDENT_ROUTES.PROBLEM_SETTING && <ProblemSettingSection />}
        {query.m === MYPAGE_STUDENT_ROUTES.ACHIEVEMENT && <AchievementSection />}
      </div>
    </div>
  );
};
export default StudentMyPage;
