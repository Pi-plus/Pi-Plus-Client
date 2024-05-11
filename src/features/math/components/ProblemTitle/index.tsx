import Image from 'next/image';
import { defaultImages } from '@public/images';

import type { TMathDifficulty } from '@/apis/math/types';
import Typography from '@/components/Typography';

import DifficultyLabel from './DifficultyLabel';

interface IProblemTitleProps {
  id: string;
  concept: string;
  difficulty: TMathDifficulty;
}

const ProblemTitle = ({ id, concept, difficulty }: IProblemTitleProps) => {
  return (
    <div className="w-full flex items-start justify-between p-5">
      <div className="flex items-center justify-center gap-9">
        <Image src={defaultImages.book} width={173} height={120} alt="" />
        <div className="flex flex-col">
          <Typography label="title1" color="black">
            {`문제 ${id} 번`}
          </Typography>
          <Typography label="title3">{concept}</Typography>
        </div>
      </div>

      {/*난이도 라벨*/}
      <DifficultyLabel difficulty={difficulty} />
    </div>
  );
};
export default ProblemTitle;
