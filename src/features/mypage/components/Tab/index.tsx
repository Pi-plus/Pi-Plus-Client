import Image from 'next/image';
import { defaultImages } from '@public/images';
import { defaultSvg } from '@public/svgs';

import Typography from '@/components/Typography';

interface IMypageTabProps {
  type: 'student' | 'teacher';
  name: string;
  count: number;
  tablist: string[];
}
const MypageTab = ({ type, name, count, tablist }: IMypageTabProps) => {
  const personName = type === 'student' ? `${name} 학생` : `${name} 선생님`;
  const countString = type === 'student' ? `총 푼 문제 수 : ${count} 문제` : `관리하는 학생 수 : ${count} 명`;
  return (
    <div className="size-full border-r border-gray-20 border-solid">
      {/*프로필*/}
      <div className="w-full border-b border-gray-20 border-solid p-9 flex items-center gap-12 mt-3">
        <Image src={defaultImages.girlStudent} width={100} height={100} alt="" />
        <div>
          <Typography label="heading1">{personName}</Typography>
          <div className="flex items-center mt-5">
            <Image src={defaultSvg.level} className="mr-1" width={24} height={24} alt="" />
            <Typography label="body3">{countString}</Typography>
          </div>
        </div>
      </div>

      {/*탭리스트*/}
    </div>
  );
};
export default MypageTab;
