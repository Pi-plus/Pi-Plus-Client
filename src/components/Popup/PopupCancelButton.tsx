import type { PropsWithChildren } from 'react';

import Button from '@/components/Button';

interface IPopupCancelButtonProps extends PropsWithChildren {
  onCancel: VoidFunction;
}
const PopupCancelButton = ({ children, onCancel }: IPopupCancelButtonProps) => {
  return (
    <Button type="default" onClick={onCancel}>
      {children}
    </Button>
  );
};
export default PopupCancelButton;
