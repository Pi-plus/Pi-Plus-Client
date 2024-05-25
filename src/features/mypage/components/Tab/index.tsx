import Image from 'next/image';
import { defaultImages } from '@public/images';
import { defaultSvg } from '@public/svgs';

import Typography from '@/components/Typography';
import type { TTabValue } from '@/constants';
import { useNavigate } from '@/hooks';

interface IMypageTabProps {
  type: 'student' | 'teacher';
  gender: 'female' | 'male';
  name: string;
  count: number;
  tablist: TTabValue[];
}
const MypageTab = ({ type, name, count, tablist, gender }: IMypageTabProps) => {
  const { push } = useNavigate();
  const personName = type === 'student' ? `${name} 학생` : `${name} 선생님`;
  const countString = type === 'student' ? `총 푼 문제 수 : ${count} 문제` : `관리하는 학생 수 : ${count} 명`;
  const imgSrc = gender === 'female' ? defaultImages.girlStudent : defaultImages.boyStudent;

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
          <Typography label="body1">{tab.title}</Typography>
          <Image src={defaultSvg.arrowRight} width={6} height={7} alt="" />
        </button>
      ))}
    </div>
  );
};
export default MypageTab;
