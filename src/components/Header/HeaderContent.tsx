import { useState } from 'react';
import Image from 'next/image';
import { defaultSvg } from '@public/svgs';

import type { TValueOfStudent } from '@/constants';
import { HEADER_STUDENT_TABS } from '@/constants';

import Dimmer from '../Dimmer';
import { PortalConsumer } from '../GlobalPortal';
import Typography from '../Typography';

const HeaderContent = ({ setHover }: { setHover: (value: '' | 'concept' | 'problem') => void }) => {
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
            <div className="h-full border-gray-10  items-center flex flex-col gap-14 pt-10 border-r-[1px] w-[20%]">
              <Typography label="body3" className="cursor-pointer hover:font-semibold">
                중학교 1학년 1학기
              </Typography>
              <Typography label="body3" className="cursor-pointer hover:font-semibold">
                중학교 1학년 2학기
              </Typography>
            </div>

            <div className="h-full border-gray-10  items-center flex flex-col gap-14 pt-10 border-r-[1px] w-[20%]">
              <Typography label="body3" className="cursor-pointer hover:font-semibold">
                중학교 2학년 2학기
              </Typography>
              <Typography label="body3" className="cursor-pointer hover:font-semibold">
                중학교 2학년 2학기
              </Typography>
            </div>

            <div className="h-full items-center flex flex-col gap-14 pt-10 w-[20%]">
              <Typography label="body3" className="cursor-pointer hover:font-semibold">
                중학교 3학년 1학기
              </Typography>
              <Typography label="body3" className="cursor-pointer hover:font-semibold">
                중학교 3학년 2학기
              </Typography>
            </div>
          </div>
        )}

        {studentHover === 'high' && (
          <div
            className="flex w-[80%]"
            onMouseLeave={() => {
              setStudentHover('');
            }}
          >
            <div className="h-full border-gray-10  items-center flex flex-col gap-14 pt-10 border-r-[1px] w-[20%]">
              <Typography label="body3" className="cursor-pointer hover:font-semibold">
                고등수학(상)
              </Typography>
              <Typography label="body3" className="cursor-pointer hover:font-semibold">
                고등수학(하)
              </Typography>
            </div>

            <div className="h-full border-gray-10  items-center flex flex-col gap-14 pt-10 border-r-[1px] w-[20%]">
              <Typography label="body3" className="cursor-pointer hover:font-semibold">
                수학1
              </Typography>
              <Typography label="body3" className="cursor-pointer hover:font-semibold">
                수학2
              </Typography>
            </div>

            <div className="h-full items-center flex flex-col gap-14 pt-10 w-[20%]">
              <Typography label="body3" className="cursor-pointer hover:font-semibold">
                확률 통계
              </Typography>
              <Typography label="body3" className="cursor-pointer hover:font-semibold">
                미적분
              </Typography>
              <Typography label="body3" className="cursor-pointer hover:font-semibold">
                기하
              </Typography>
            </div>
          </div>
        )}
      </div>
      <Dimmer isShow={true} className="h-[calc(100%-93px)] mt-[93px]" />
    </PortalConsumer>
  );
};
export default HeaderContent;
