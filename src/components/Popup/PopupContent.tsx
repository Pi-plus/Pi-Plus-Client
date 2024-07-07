import type { PropsWithChildren } from 'react';

const PopupContent = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-full overflow-y-auto py-10">{children}</div>
  );
};
export default PopupContent;
