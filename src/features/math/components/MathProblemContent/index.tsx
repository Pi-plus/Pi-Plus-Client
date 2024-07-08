import Image from 'next/image';
import { defaultImages } from '@public/images';

import type { TMathDifficulty } from '@/apis/math/types';
import DifficultyLabel from '@/components/DifficultyLabel';
import Typography from '@/components/Typography';
import type { TMathSmallChapter } from '@/constants';
import { getMathChapter } from '@/utils';

interface IMathProblemTitleProps {
  id: string;
  concept: TMathSmallChapter;
  difficulty: TMathDifficulty;
}

const MathProblemContent = ({ id, concept, difficulty }: IMathProblemTitleProps) => {
  const [bigChapter, smallChapter] = getMathChapter(concept as TMathSmallChapter);
  return (
    <div className="w-full flex items-start justify-between p-5 gap-9">
      <div className="flex items-center justify-center gap-9">
        <Image src={defaultImages.book} width={173} height={120} alt="" />
        <div className="flex flex-col">
          <Typography label="title1" color="black">
            {`문제 ${id} 번`}
          </Typography>
          <Typography label="title3">{bigChapter}</Typography>
          <Typography label="title3">{smallChapter}</Typography>
        </div>
      </div>

      {/*난이도 라벨*/}
      <DifficultyLabel difficulty={difficulty} />
    </div>
  );
};
export default MathProblemContent;
