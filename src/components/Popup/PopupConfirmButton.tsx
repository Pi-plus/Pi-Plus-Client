import type { PropsWithChildren } from 'react';

import Button from '@/components/Button';

interface IPopupConfirmButtonProps extends PropsWithChildren {
  onConfirm: VoidFunction;
}
const PopupConfirmButton = ({ children, onConfirm }: IPopupConfirmButtonProps) => {
  return <Button onClick={onConfirm}>{children}</Button>;
};
export default PopupConfirmButton;
