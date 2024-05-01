type TKeyOfDefaultSvg = 'arrowDown' | 'arrowRight' | 'arrowUp';

export type Assets = {
  [key in TKeyOfDefaultSvg]: string;
};

export const defaultSvg: Assets = {
  arrowDown: '/svgs/arrowDown.svg',
  arrowRight: '/svgs/arrowRight.svg',
  arrowUp: '/svgs/arrowUp.svg',
};
