import Image from 'next/image';
import { defaultImages } from '@public/images';
import { defaultSvg } from '@public/svgs';
import classNames from 'classnames';

import Typography from '@/components/Typography';
import type { TMyPageTab } from '@/constants';
import { LOGIN_ROUTES, ROUTES } from '@/constants';
import { useNavigate } from '@/hooks';
import { useRoleStore } from '@/stores';
import { showSuccessToast } from '@/utils';
import { clearUserData } from '@/utils/cookie/manageCookie.client';

interface IMypageTabProps {
  type: 'student' | 'teacher';
  gender?: 'female' | 'male';
  name: string;
  count: string;
  tablist: TMyPageTab[];
}
const MypageTab = ({ type, name, count, tablist, gender = 'female' }: IMypageTabProps) => {
  const { push, query } = useNavigate();
  const personName = type === 'student' ? `${name} 학생` : `${name} 선생님`;
  const countString = type === 'student' ? `목표 문제 수 : ${count} 문제` : `관리하는 학생 수 : ${count} 명`;
  const imgSrc = gender === 'female' ? defaultImages.girlStudent : defaultImages.boyStudent;
  const { setRole } = useRoleStore();
  return (
    <div className="size-full border-r border-gray-20 border-solid">
      {/*프로필*/}
      <div className="w-full border-b border-gray-20 border-solid p-9 flex items-center gap-12 mt-3">
        <Image src={imgSrc} width={100} height={100} alt="" />
        <div>
          <Typography label="heading1">{personName}</Typography>
          <div className="flex items-center mt-5">
            <Image src={defaultSvg.level} className="mr-1" width={24} height={24} alt="" />
            <Typography label="body3">{countString}</Typography>
          </div>
        </div>
      </div>

      {/*탭리스트*/}
      {tablist.map((tab) => (
        <button
          key={tab.pathname}
          className="flex items-center justify-between py-8 px-16 hover:bg-gray-10 cursor-pointer w-full"
          onClick={() => {
            push({ pathname: tab.href, query: { m: tab.pathname } });
          }}
        >
          <Typography
            label="body1"
            className={classNames({
              'font-semibold': query.m === tab.pathname,
            })}
          >
            {tab.title}
          </Typography>
          <Image src={defaultSvg.arrowRight} width={6} height={7} alt="" />
        </button>
      ))}
      <button
        className="flex items-center justify-between py-8 px-16 hover:bg-gray-10 cursor-pointer w-full"
        onClick={() => {
          push({ pathname: ROUTES.LOGIN, query: { step: LOGIN_ROUTES.SELECT } });
          clearUserData();
          setRole('');
          showSuccessToast('성공적으로 로그아웃 되었어요');
        }}
      >
        <Typography label="body1">로그아웃</Typography>
      </button>
    </div>
  );
};
export default MypageTab;
