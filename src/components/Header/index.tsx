'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { defaultImages } from '@public/images';

import type { THoverPathname, TValueOfPathname } from '@/constants';
import { HEADER_TABS } from '@/constants';

import HeaderContent from './HeaderContent';
import HeaderLoginOption from './HeaderLoginOption';
import HeaderTab from './HeaderTab';

const Header = () => {
  const [hover, setHover] = useState<'' | THoverPathname>('');
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
        <Link href="/">
          <Image src={defaultImages.logo} className="cursor-pointer" width={241} height={90} alt="" />
        </Link>
        <div className="flex flex-col items-end">
          <HeaderLoginOption />
          <div className="flex gap-20 items-center">
            {HEADER_TABS.map((header) => (
              <HeaderTab
                key={header.pathname}
                onMouseOver={() => handleHoverHeaderTab(header.pathname)}
                className="flex items-center gap-2"
                title={header.title}
                isHover={header.pathname === hover}
                hasArrow={header.pathname !== 'mypage'}
                href={header.href!}
              />
            ))}
          </div>
        </div>
      </header>
      {hover && <HeaderContent setHover={setHover} />}
    </>
  );
};
export default Header;
