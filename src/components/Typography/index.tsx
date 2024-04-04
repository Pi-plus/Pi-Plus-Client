import type React from 'react';
import { createElement, type HTMLAttributes } from 'react';
import classNames from 'classnames';

import { textColor, type TKeyOfColor, type TKeyOfTypography, typography } from '@/foundation';

import type { TEXT_TAGS } from './constant';

interface ITypographyProps extends HTMLAttributes<HTMLSpanElement> {
  color?: TKeyOfColor;
  label: TKeyOfTypography;
  children: React.ReactNode;
  as?: keyof typeof TEXT_TAGS;
}

const Typography = ({ color = 'black', label, children, as = 'span', className, ...props }: ITypographyProps) => {
  return createElement(
    as,
    {
      className: classNames(textColor[color], typography[label], className),
      ...props,
    },
    [children],
  );
};
export default Typography;
