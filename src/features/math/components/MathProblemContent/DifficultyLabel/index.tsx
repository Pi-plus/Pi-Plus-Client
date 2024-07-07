import classNames from 'classnames';

import type { TMathDifficulty } from '@/apis/math/types';
import Typography from '@/components/Typography';
import { MATH_DIFFICULTY } from '@/constants';

import { DIFFICULTY_STYLE } from './constant';

interface IDifficultyLabelProps {
  difficulty: TMathDifficulty;
}
const DifficultyLabel = ({ difficulty }: IDifficultyLabelProps) => {
  return (
    <div
      className={classNames(
        'p-3 inline-flex items-center justify-center self-start overflow-hidden rounded-[20px] whitespace-nowrap',
        DIFFICULTY_STYLE[difficulty],
      )}
    >
      <Typography color="white" label="title3">
        {MATH_DIFFICULTY[difficulty].tag}
      </Typography>
    </div>
  );
};
export default DifficultyLabel;
