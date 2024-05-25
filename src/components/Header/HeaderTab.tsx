'use client';

import type { HTMLAttributes } from 'react';
import Image from 'next/image';
import { defaultSvg } from '@public/svgs';
import classNames from 'classnames';

import { MYPAGE_STUDENT_ROUTES, ROUTES, type TValueOfTitlename } from '@/constants';
import { useNavigate } from '@/hooks';

import Typography from '../Typography';

interface IHeaderTabProps extends HTMLAttributes<HTMLDivElement> {
  isHover: boolean;
  title: TValueOfTitlename;
  hasArrow: boolean;
  href: string;
}

const HeaderTab = ({ isHover, title, hasArrow, href, ...rest }: IHeaderTabProps) => {
  const { pathname, push } = useNavigate();
  const focus = pathname.startsWith(href);

  return (
    <div {...rest}>
      <Typography
        label="title3"
        color="black"
        className={classNames('cursor-pointer hover:font-semibold', {
          'font-semibold': isHover || focus,
        })}
        onClick={() => {
          if (title === '마이 페이지') {
            push({ pathname: ROUTES.STUDENT_MY, query: { m: MYPAGE_STUDENT_ROUTES.PROBLEM_SETTING } });
          }
        }}
      >
        {title}
      </Typography>

      {hasArrow && (
        <Image
          src={isHover ? defaultSvg.arrowUp : defaultSvg.arrowDown}
          className="cursor-pointer mt-1"
          alt=""
          width={11}
          height={5}
        />
      )}
    </div>
  );
};
export default HeaderTab;
