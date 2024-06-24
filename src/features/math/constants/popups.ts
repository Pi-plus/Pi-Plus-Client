import type { ComponentProps, FunctionComponent } from 'react';

import { MathCorrectPopup, MathSolutionPopup, MathWrongPopup } from '@/features/math/components/MathPopups';

export const MATH_POPUPS = {
  correct: MathCorrectPopup as FunctionComponent<ComponentProps<typeof MathCorrectPopup>>,
  wrong: MathWrongPopup as FunctionComponent<ComponentProps<typeof MathWrongPopup>>,
  solution: MathSolutionPopup as FunctionComponent<ComponentProps<typeof MathSolutionPopup>>,
};
