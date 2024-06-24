import Image from 'next/image';
import { defaultSvg } from '@public/svgs';

import Modal from '@/components/Modal';

import type { IMathPopupProps } from '../../types';

const MathSolutionPopup = ({ isOpen, onClose, content }: IMathPopupProps) => {
  return (
    <Modal isShow={isOpen} onClose={onClose} className="w-[90%] h-[90%] gap-20 p-7 flex justify-between items-start">
      <Image
        className="absolute top-6 right-6 cursor-pointer"
        src={defaultSvg.cancel}
        onClick={onClose}
        width={24}
        height={24}
        alt=""
      />
      {content}
    </Modal>
  );
};
export default MathSolutionPopup;
