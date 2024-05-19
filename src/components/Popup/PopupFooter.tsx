import type { PropsWithChildren } from 'react';

const PopupFooter = ({ children }: PropsWithChildren) => {
  return <div className="w-full flex items-center gap-6">{children}</div>;
};
export default PopupFooter;
