import type { PropsWithChildren } from 'react';

import Button from '../Button';
import Modal from '../Modal';

import PopupContent from './PopupContent';
import PopupFooter from './PopupFooter';

interface IPopupProps extends PropsWithChildren {
  isShow: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  left: string;
  right: string;
}
const Popup = ({ onConfirm, onCancel, left, right, children, ...rest }: IPopupProps) => {
  return (
    <Modal {...rest} className="w-[35%] h-[80%] flex flex-col px-16 py-11 rounded-[30px]">
      <PopupContent>{children}</PopupContent>
      <PopupFooter>
        <Button onClick={onConfirm}>{left}</Button>
        <Button type="default" onClick={onCancel}>
          {right}
        </Button>
      </PopupFooter>
    </Modal>
  );
};
export default Popup;
