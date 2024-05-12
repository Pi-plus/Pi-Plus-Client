import type { PropsWithChildren } from 'react';

const PopupContent = ({ children }: PropsWithChildren) => {
  return <div className="w-full h-[calc(100%-48px)]">{children}</div>;
};
export default PopupContent;
