'use client';

import { type HTMLAttributes, type PropsWithChildren, useEffect } from 'react';

import Dimmer from '../Dimmer';
import { PortalConsumer } from '../GlobalPortal';

import ModalContent from './ModalContent';

interface IModalProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  isShow: boolean;
  onClose: () => void;
}
const Modal = (props: IModalProps) => {
  const { isShow, children, onClose, ...rest } = props;

  useEffect(() => {
    if (isShow) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isShow]);
  return (
    <>
      {isShow && (
        <PortalConsumer>
          <Dimmer isShow={isShow} onClick={onClose} />
          <ModalContent {...rest}>{children}</ModalContent>
        </PortalConsumer>
      )}
    </>
  );
};
export default Modal;
