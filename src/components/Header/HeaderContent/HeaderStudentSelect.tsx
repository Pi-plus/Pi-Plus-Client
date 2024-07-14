import Image from 'next/image';
import { defaultSvg } from '@public/svgs';

import Typography from '@/components/Typography';
import type { THoverValueOfStudent } from '@/constants';
import { HEADER_STUDENT_TABS } from '@/constants';

interface IHeaderStudentSelectProps {
  setStudentHover: (value: THoverValueOfStudent) => void;
  studentHover: THoverValueOfStudent;
}
const HeaderStudentSelect = ({ setStudentHover, studentHover }: IHeaderStudentSelectProps) => {
  return (
    <div className="h-full border-gray-10  items-center flex flex-col gap-14 pt-10 border-r-[1px] w-[20%]">
      {HEADER_STUDENT_TABS.map((item) => (
        <div
          key={item.label}
          className="w-full flex items-center justify-between cursor-pointer px-10"
          onMouseOver={() => {
            setStudentHover(item.value);
          }}
          onFocus={() => {}}
        >
          <Typography label="body3" className={studentHover === item.value ? 'font-semibold' : ''}>
            {item.label}
          </Typography>
          <Image src={defaultSvg.arrowRight} width={5} height={5} alt="" />
        </div>
      ))}
    </div>
  );
};
export default HeaderStudentSelect;
