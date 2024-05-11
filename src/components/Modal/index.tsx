'use client';

import type { PropsWithChildren } from 'react';

import Dimmer from '../Dimmer';
import { PortalConsumer } from '../GlobalPortal';

import ModalContent from './ModalContent';

interface IModalProps extends PropsWithChildren {
  isShow: boolean;
  onClose: () => void;
}
const Modal = ({ isShow, children, onClose }: IModalProps) => {
  return (
    <>
      {isShow && (
        <PortalConsumer>
          <Dimmer isShow={isShow} onClick={onClose} />
          <ModalContent>{children}</ModalContent>
        </PortalConsumer>
      )}
    </>
  );
};
export default Modal;
