'use client';

import { useStudentQuery } from '@/hooks/reactQuery/student';

import MathContentInfo from './MathContentInfo';
import MathCountInfo from './MathCountInfo';
import MathGoalInfo from './MathGoalInfo';
import TrophyTitle from './TrophyTitle';

const AchievementSection = () => {
  const { data } = useStudentQuery();
  const [studentData] = data ?? [{}];
  return (
    <div className="w-full px-5">
      <TrophyTitle data={studentData} />
      <MathCountInfo data={studentData} />
      <MathContentInfo data={studentData} />
      <MathGoalInfo data={studentData} />
    </div>
  );
};
export default AchievementSection;
