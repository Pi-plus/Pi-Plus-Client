import classNames from 'classnames';

import type { TMathDifficulty } from '@/apis/math/types';
import Typography from '@/components/Typography';

import { DIFFICULTY_STYLE } from './constant';

interface IDifficultyLabelProps {
  difficulty: TMathDifficulty;
}
const DifficultyLabel = ({ difficulty }: IDifficultyLabelProps) => {
  return (
    <div
      className={classNames(
        'p-3 flex items-center justify-center self-start overflow-hidden rounded-[20px] whitespace-nowrap',
        DIFFICULTY_STYLE[difficulty].bgColor,
      )}
    >
      <Typography color="white" label="title3">
        {DIFFICULTY_STYLE[difficulty].label}
      </Typography>
    </div>
  );
};
export default DifficultyLabel;
