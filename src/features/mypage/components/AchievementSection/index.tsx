'use client';

import { useStudentQuery } from '@/hooks/reactQuery/student';

import MathContentInfo from './MathContentInfo';
import MathCountInfo from './MathCountInfo';
import MathGoalInfo from './MathGoalInfo';
import TrophyTitle from './TrophyTitle';

const AchievementSection = () => {
  const { data } = useStudentQuery();
  return (
    <div className="w-full px-5">
      <TrophyTitle data={data} />
      <MathCountInfo data={data} />
      <MathContentInfo data={data} />
      <MathGoalInfo data={data} />
    </div>
  );
};
export default AchievementSection;
