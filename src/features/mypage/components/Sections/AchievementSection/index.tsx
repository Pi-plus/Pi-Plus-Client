'use client';

import MathContentInfo from './MathContentInfo';
import MathCountInfo from './MathCountInfo';
import MathGoalInfo from './MathGoalInfo';
import TrophyTitle from './TrophyTitle';

const AchievementSection = () => {
  return (
    <div className="w-full px-5">
      <TrophyTitle />
      <MathCountInfo />
      <MathContentInfo />
      <MathGoalInfo />
    </div>
  );
};
export default AchievementSection;
