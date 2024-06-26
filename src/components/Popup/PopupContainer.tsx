import type { HTMLAttributes, PropsWithChildren } from 'react';

type TPopupContainerProps = HTMLAttributes<HTMLDivElement> & PropsWithChildren;

const PopupContainer = ({ children, ...rest }: TPopupContainerProps) => {
  return <div {...rest}>{children}</div>;
};
export default PopupContainer;
