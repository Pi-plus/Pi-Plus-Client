'use client';

import type { ModalProps } from '@chakra-ui/react';
import { Modal as CustomModal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';

interface IModalProps extends ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = (props: IModalProps) => {
  const { isOpen, onClose, children, ...rest } = props;
  return (
    <CustomModal onClose={onClose} isOpen={isOpen} {...rest} isCentered={true}>
      <ModalOverlay />

      <ModalContent className="items-center justify-center" borderRadius="20px" width="20rem">
        <ModalBody>
          <div className="flex flex-col items-center justify-center">{children}</div>
        </ModalBody>
      </ModalContent>
    </CustomModal>
  );
};
export default Modal;
