export const typography = {
  heading1: 'text-heading1 font-regular leading-heading1 max-sm:text-caption2 max-sm:leading-caption2',
  heading2: 'text-heading2 font-bold leading-heading2 max-sm:text-caption2 max-sm:leading-caption2',
  heading3: 'text-heading3 font-bold max-sm:text-heading1',
  title1: 'text-title1 font-bold leading-title1 max-sm:text-caption2 max-sm:leading-caption2',
  title2: 'text-title2 font-bold leading-title2 max-sm:text-caption2 max-sm:leading-caption1',
  title3: 'text-title3 font-medium leading-title3 max-sm:text-caption2 max-sm:font-bold max-sm:leading-caption1',
  body1: 'text-body1 font-medium leading-body1 max-sm:text-caption3 max-sm:leading-caption3',
  body2: 'text-body2 font-regular leading-body2 max-sm:text-caption3 max-sm:leading-caption3',
  body3: 'text-body3 font-regular leading-body3',
  caption1: 'text-caption1 font-regular leading-caption1',
  caption2: 'text-caption2 font-regular leading-caption2',
  caption3: 'text-caption3 font-regular leading-caption3',
} as const;

export type TKeyOfTypography = keyof typeof typography;
