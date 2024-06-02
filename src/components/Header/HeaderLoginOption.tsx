import Link from 'next/link';

import { ROUTES, SIGN_UP_ROUTES } from '@/constants';

import Typography from '../Typography';

const HeaderLoginOption = () => {
  return (
    <div className="flex items-center mb-5">
      <Link href={`${ROUTES.SIGN_UP}?step=${SIGN_UP_ROUTES.SELECT}`}>
        <Typography
          label="caption1"
          color="gray60"
          className="cursor-pointer hover:text-gray-70 hover:font-bold"
          onClick={() => {}}
        >
          회원가입
        </Typography>
      </Link>
      <Typography label="caption1" color="gray60" className="mx-4">
        |
      </Typography>
      <Link href={ROUTES.LOGIN}>
        <Typography
          label="caption1"
          color="gray60"
          className="cursor-pointer hover:text-gray-70 hover:font-bold"
          onClick={() => {}}
        >
          로그인
        </Typography>
      </Link>
    </div>
  );
};
export default HeaderLoginOption;
