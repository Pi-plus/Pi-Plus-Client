import type { HTMLAttributes } from 'react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { defaultSvg } from '@public/svgs';
import classNames from 'classnames';

import type { TTabContent } from '@/components/Header/type';
import Typography from '@/components/Typography';
import { useNavigate } from '@/hooks';
import { useTabStore } from '@/stores';

interface IHeaderTabProps extends HTMLAttributes<HTMLDivElement> {
  tab: TTabContent;
}
const HeaderTab = ({ tab, ...rest }: IHeaderTabProps) => {
  const { pathname } = useNavigate();
  const { tab: focusTab } = useTabStore();
  const isHover = focusTab === tab.baseUrl;

  return (
    <div className="flex items-center gap-3" {...rest}>
      {tab.hasArrow ? (
        <>
          <Typography
            label="title3"
            color="black"
            as="li"
            className={classNames('cursor-pointer hover:font-semibold', {
              'font-semibold': pathname.startsWith(tab.baseUrl ?? tab.href) || isHover,
            })}
          >
            {tab.label}
          </Typography>
          <Image
            src={isHover ? defaultSvg.arrowUp : defaultSvg.arrowDown}
            className="cursor-pointer mt-1"
            alt=""
            width={11}
            height={5}
          />
        </>
      ) : (
        <Link href={tab.href}>
          <Typography
            label="title3"
            color="black"
            as="li"
            className={classNames('cursor-pointer hover:font-semibold', {
              'font-semibold': pathname.startsWith(tab.baseUrl ?? tab.href) || isHover,
            })}
          >
            {tab.label}
          </Typography>
        </Link>
      )}
    </div>
  );
};
export default HeaderTab;
