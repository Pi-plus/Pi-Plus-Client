'use client';

import MyPageBanner from '@/features/mypage/components/Banner';
import MypageTab from '@/features/mypage/components/Tab';

const StudentMyPage = () => {
  return (
    <div className="flex flex-1">
      <div className="w-[35%]">
        <MypageTab name="김광운" type="student" count={5} tablist={['문제 관리', '성취도 확인']} />
      </div>
      <div className="w-[65%] px-7 py-5">
        <MyPageBanner />
      </div>
    </div>
  );
};
export default StudentMyPage;
