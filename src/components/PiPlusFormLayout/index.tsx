import type { PropsWithChildren } from 'react';

import PiPlusInfo from '../PiPlusInfo';

const PiPlusFormLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full flex-1 flex justify-center items-center gap-7">
      <div className="w-1/2">
        <PiPlusInfo />
      </div>
      <div className="w-1/2 px-14 h-full">{children}</div>
    </div>
  );
};
export default PiPlusFormLayout;
