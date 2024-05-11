'use client';

import type { HTMLAttributes, PropsWithChildren } from 'react';

import Dimmer from '../Dimmer';
import { PortalConsumer } from '../GlobalPortal';

import ModalContent from './ModalContent';

interface IModalProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  isShow: boolean;
  onClose: () => void;
}
const Modal = (props: IModalProps) => {
  const { isShow, children, onClose, ...rest } = props;
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
