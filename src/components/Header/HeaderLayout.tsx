import type { PropsWithChildren } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { defaultImages } from '@public/images';

import { ROUTES } from '@/constants';

const HeaderLayout = ({ children }: PropsWithChildren) => {
  return (
    <header className="w-full bg-white fixed top-0 flex justify-between items-center px-12 pt-2 border-b border-blue-30 pb-3 z-50">
      <Link href={ROUTES.HOME}>
        <Image src={defaultImages.logo} className="cursor-pointer" width={241} height={90} alt="" />
      </Link>
      {children}
    </header>
  );
};
export default HeaderLayout;
