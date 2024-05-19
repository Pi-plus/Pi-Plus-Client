import type { PropsWithChildren } from 'react';

const PopupContent = ({ children }: PropsWithChildren) => {
  return <div className="w-full h-[calc(100%-48px)] flex flex-col justify-center items-center">{children}</div>;
};
export default PopupContent;
