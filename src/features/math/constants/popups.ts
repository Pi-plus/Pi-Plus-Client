import type { ComponentProps, FunctionComponent } from 'react';

import MathCorrectPopup from '@/features/math/components/MathPopups/MathCorrectPopup';
import MathSolutionPopup from '@/features/math/components/MathPopups/MathSolutionPopup';
import MathWrongPopup from '@/features/math/components/MathPopups/MathWrongPopup';

export const MATH_POPUPS = {
  correct: MathCorrectPopup as FunctionComponent<ComponentProps<typeof MathCorrectPopup>>,
  wrong: MathWrongPopup as FunctionComponent<ComponentProps<typeof MathWrongPopup>>,
  solution: MathSolutionPopup as FunctionComponent<ComponentProps<typeof MathSolutionPopup>>,
};
