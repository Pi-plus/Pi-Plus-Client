import { useState } from 'react';

import Dimmer from '../Dimmer';
import { PortalConsumer } from '../GlobalPortal';
import Typography from '../Typography';

const HeaderContent = ({ setHover }: { setHover: (value: boolean) => void }) => {
  const [middleHover, setMiddleHover] = useState<boolean>(false);
  return (
    <PortalConsumer>
      <div
        className="absolute border-t-2 border-gray-20 w-full top-[93px] bg-white z-[60] h-80 flex"
        onMouseLeave={() => setHover(false)}
      >
        <div className="h-full border-gray-10  items-center flex flex-col gap-14 pt-10 border-r-[1px] w-[20%]">
          <div className="w-full flex justify-center cursor-pointer hover:bg-gray-50">
            <Typography label="body3">중학교</Typography>
          </div>
          <div className="w-full flex justify-center">
            <Typography label="body3">고등학교</Typography>
          </div>
        </div>

        <div className="h-full border-gray-10  items-center flex flex-col gap-14 pt-10 border-r-[1px] w-[20%]">
          <Typography label="body3">중학교 1학년 1학기</Typography>
          <Typography label="body3">중학교 1학년 2학기</Typography>
        </div>

        <div className="h-full border-gray-10  items-center flex flex-col gap-14 pt-10 border-r-[1px] w-[20%]">
          <Typography label="body3">중학교 2학년 2학기</Typography>
          <Typography label="body3">중학교 2학년 2학기</Typography>
        </div>

        <div className="h-full items-center flex flex-col gap-14 pt-10 w-[20%]">
          <Typography label="body3">중학교 3학년 1학기</Typography>
          <Typography label="body3">중학교 3학년 2학기</Typography>
        </div>
      </div>
      <Dimmer isShow={true} className="h-[calc(100%-93px)] mt-[93px]" />
    </PortalConsumer>
  );
};
export default HeaderContent;
