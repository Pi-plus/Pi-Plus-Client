'use client';

import { MYPAGE_STUDENT_TABS } from '@/constants';
import { ProblemSettingSection } from '@/features/mypage/components/Sections';
import MypageTab from '@/features/mypage/components/Tab';

const StudentMyPage = () => {
  return (
    <div className="flex flex-1">
      <div className="w-[35%]">
        <MypageTab name="김광운" gender="male" type="student" count={5} tablist={MYPAGE_STUDENT_TABS} />
      </div>
      <div className="w-[65%] px-7 py-5">
        <ProblemSettingSection />
      </div>
    </div>
  );
};
export default StudentMyPage;
