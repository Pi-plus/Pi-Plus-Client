import type { PropsWithChildren } from 'react';

const PopupSubTitle = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col items-center justify-center">{children}</div>;
};
export default PopupSubTitle;
