import Image from 'next/image';
import Link from 'next/link';
import { defaultImages } from '@public/images';

import { ROUTES } from '@/constants';

const HeaderLogo = () => {
  return (
    <Link href={ROUTES.HOME}>
      <Image src={defaultImages.logo} className="cursor-pointer" width={241} height={90} alt="" />
    </Link>
  );
};
export default HeaderLogo;
