import type { ComponentProps, FunctionComponent } from 'react';
import type React from 'react';

import type { MathCorrectPopup, MathSolutionPopup, MathWrongPopup } from '@/features/math/components/MathPopups';

export type TMathPopupProps = {
  isOpen: boolean;
  onClose: VoidFunction;
  onConfirm: VoidFunction;
  title?: string;
  content?: React.ReactNode;
  mathImg?: string;
  solutionImg?: string;
};

export type TPopupsComponent =
  | ComponentProps<typeof MathCorrectPopup>
  | ComponentProps<typeof MathSolutionPopup>
  | ComponentProps<typeof MathWrongPopup>;
export interface IPopupProps {
  Component: FunctionComponent<TPopupsComponent>;
  props: TMathPopupProps;
}
