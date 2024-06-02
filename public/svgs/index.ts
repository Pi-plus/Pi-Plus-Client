type TKeyOfDefaultSvg = 'arrowDown' | 'arrowRight' | 'arrowUp' | 'cancel' | 'level' | 'caution';

export type Assets = {
  [key in TKeyOfDefaultSvg]: string;
};

export const defaultSvg: Assets = {
  arrowDown: '/svgs/arrowDown.svg',
  arrowRight: '/svgs/arrowRight.svg',
  arrowUp: '/svgs/arrowUp.svg',
  cancel: '/svgs/cancel.svg',
  level: '/svgs/level.svg',
  caution: '/svgs/caution.svg',
};
