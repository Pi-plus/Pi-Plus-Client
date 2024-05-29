import type { PropsWithChildren } from 'react';

import PiPlusInfo from '../PiPlusInfo';

const PiPlusFormLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full flex-1 flex justify-center items-center gap-7">
      <div className="w-1/2">
        <PiPlusInfo />
      </div>
      <div className="w-1/2 px-14 h-full py-7">
        <div className="bg-gray-5 rounded-md flex flex-col px-16 py-9 shadow-sm">{children}</div>
      </div>
    </div>
  );
};
export default PiPlusFormLayout;
