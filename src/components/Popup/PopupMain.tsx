import type { HTMLAttributes, PropsWithChildren } from 'react';
import classNames from 'classnames';

import Modal from '@/components/Modal';
import PopupCancelButton from '@/components/Popup/PopupCancelButton';
import PopupCloseSvg from '@/components/Popup/PopupCloseSvg';
import PopupConfirmButton from '@/components/Popup/PopupConfirmButton';
import PopupContainer from '@/components/Popup/PopupContainer';
import PopupContent from '@/components/Popup/PopupContent';
import PopupFooter from '@/components/Popup/PopupFooter';
import PopupImage from '@/components/Popup/PopupImage';
import PopupLottie from '@/components/Popup/PopupLottie';
import PopupSubTitle from '@/components/Popup/PopupSubTitle';
import PopupTitle from '@/components/Popup/PopupTitle';

interface IPopupMainProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  isShow: boolean;
  onClose: () => void;
}
const PopupMain = ({ children, className, ...rest }: IPopupMainProps) => {
  return (
    <Modal {...rest} className={classNames('w-[35%] h-[80%] flex flex-col px-16 py-11 rounded-[30px]', className)}>
      {children}
    </Modal>
  );
};
export default PopupMain;

export const Popup = Object.assign(PopupMain, {
  Footer: PopupFooter,
  CancelButton: PopupCancelButton,
  ConfirmButton: PopupConfirmButton,
  Content: PopupContent,
  Lottie: PopupLottie,
  SubTitle: PopupSubTitle,
  Title: PopupTitle,
  CloseSvg: PopupCloseSvg,
  Image: PopupImage,
  Container: PopupContainer,
});
