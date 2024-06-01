'use client';

import Typography from '@/components/Typography';

import MathCountChart from '../MathCountChart';

const AchievementSection = () => {
  return (
    <div>
      <Typography label="title3">학생 성취도</Typography>
      <MathCountChart wrongCount={10} correctCount={20} />
    </div>
  );
};
export default AchievementSection;
