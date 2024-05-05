import { useState } from 'react';
import Image from 'next/image';
import { defaultSvg } from '@public/svgs';

import Dimmer from '@/components/Dimmer';
import { PortalConsumer } from '@/components/GlobalPortal';
import Typography from '@/components/Typography';
import type { THoverPathname, TValueOfStudent } from '@/constants';
import { HEADER_STUDENT_TABS, HIGH_STUDENT_MATH, MIDDLE_STUDENT_MATH } from '@/constants';

import HeaderContentSection from './HeaderContentSection';

interface IHeaderContentProps {
  setHover: (value: '' | THoverPathname) => void;
  hover: '' | THoverPathname;
}
const HeaderContent = ({ hover, setHover }: IHeaderContentProps) => {
  const [studentHover, setStudentHover] = useState<TValueOfStudent | ''>('');
  return (
    <PortalConsumer>
      <div
        className="absolute border-t-2 border-gray-20 w-full top-[93px] bg-white z-[60] h-80 flex"
        onMouseLeave={() => setHover('')}
      >
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

        {studentHover === 'middle' && (
          <div
            className="flex w-[80%]"
            onMouseLeave={() => {
              setStudentHover('');
            }}
          >
            <HeaderContentSection list={MIDDLE_STUDENT_MATH.one} type={hover} />
            <HeaderContentSection list={MIDDLE_STUDENT_MATH.two} type={hover} />
            <HeaderContentSection list={MIDDLE_STUDENT_MATH.three} type={hover} />
          </div>
        )}

        {studentHover === 'high' && (
          <div
            className="flex w-[80%]"
            onMouseLeave={() => {
              setStudentHover('');
            }}
          >
            <HeaderContentSection list={HIGH_STUDENT_MATH.one} type={hover} />
            <HeaderContentSection list={HIGH_STUDENT_MATH.two} type={hover} />
            <HeaderContentSection list={HIGH_STUDENT_MATH.three} type={hover} />
          </div>
        )}
      </div>
      <Dimmer isShow={true} className="h-[calc(100%-93px)] mt-[93px]" />
    </PortalConsumer>
  );
};
export default HeaderContent;
