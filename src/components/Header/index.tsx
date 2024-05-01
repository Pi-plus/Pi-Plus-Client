'use client';

import { useState } from 'react';
import Image from 'next/image';
import { defaultImages } from '@public/images';

import type { TValueOfPathname } from '@/constants';
import { HEADER_TABS } from '@/constants';

import Typography from '../Typography';

import HeaderContent from './HeaderContent';
import HeaderTab from './HeaderTab';

const Header = () => {
  const [hover, setHover] = useState<'' | 'concept' | 'problem'>('');
  const handleHoverHeaderTab = (pathname: TValueOfPathname) => {
    if (pathname !== 'mypage') {
      setHover(pathname);
    } else {
      setHover('');
    }
  };
  return (
    <>
      <header className="w-full flex justify-between items-center px-12 pt-2 border-b border-blue-30 pb-3">
        <Image src={defaultImages.logo} width={241} height={90} alt="" />
        <div className="flex flex-col items-end">
          <div className="flex items-center mb-5">
            <Typography label="caption1" color="gray60" className="cursor-pointer" onClick={() => {}}>
              회원가입
            </Typography>
            <Typography label="caption1" color="gray60" className="mx-4">
              |
            </Typography>
            <Typography label="caption1" color="gray60" className="cursor-pointer" onClick={() => {}}>
              로그인
            </Typography>
          </div>
          <div className="flex gap-20 items-center">
            {HEADER_TABS.map((header) => (
              <div
                key={header.pathname}
                className="flex items-center gap-2"
                onMouseOver={() => handleHoverHeaderTab(header.pathname)}
                onFocus={() => {}}
              >
                <HeaderTab
                  title={header.title}
                  focus={header.pathname === hover}
                  hasArrow={header.pathname !== 'mypage'}
                />
              </div>
            ))}
          </div>
        </div>
      </header>
      {(hover === 'concept' || hover === 'problem') && <HeaderContent setHover={setHover} />}
    </>
  );
};
export default Header;
