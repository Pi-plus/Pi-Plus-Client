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
    <div className="w-full flex items-start justify-between p-5 gap-9 max-sm:gap-3 max-md:px-2 max-md:py-7 sm:max-lg:gap-4">
      <div className="flex items-center gap-9 max-sm:gap-3 sm:max-lg:gap-6">
        <Image
          src={defaultImages.book}
          className="max-sm:w-14 sm:max-md:w-1/5 md:max-lg:w-28 md:max-lg:h-[120px]"
          width={173}
          height={120}
          alt=""
        />
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
