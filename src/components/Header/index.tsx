'use client';

import Image from 'next/image';
import { defaultImages } from '@public/images';

import { HEADER_TABS } from '@/constants';

import Typography from '../Typography';

const Header = () => {
  return (
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
            <div key={header.pathname} className="flex items-center gap-2">
              <Typography label="title3" color="black" key={header.pathname} className="cursor-pointer">
                {header.title}
              </Typography>
              {header.pathname !== 'mypage' && (
                <Image src="/svgs/arrowDown.svg" className="cursor-pointer mt-2" alt="" width={11} height={5} />
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};
export default Header;
