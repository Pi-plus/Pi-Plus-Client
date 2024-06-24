import React from 'react';
import Lottie from 'react-lottie-player';
import { defaultLottie } from '@public/lotties';

import Popup from '@/components/Popup';
import Typography from '@/components/Typography';
import type { TMathPopupProps } from '@/features/math/types';

const MathWrongPopup = ({ isOpen, onClose, onConfirm, title, content }: TMathPopupProps) => {
  const handleConfirm = () => {
    onClose();
    onConfirm();
  };

  const handleCancel = () => {
    onClose();
  };
  return (
    <Popup
      isShow={isOpen}
      onClose={onClose}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
      right="닫기"
      left="해설보기"
    >
      <Lottie loop animationData={defaultLottie.sad} play className="w-[70%] -mt-24" />
      <div className="flex flex-col justify-center items-center -mt-8">
        <Typography label="heading3" color="black" className="mb-4">
          {title}
        </Typography>
        {content}
      </div>
    </Popup>
  );
};
export default MathWrongPopup;
