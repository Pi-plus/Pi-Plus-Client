import Lottie from 'react-lottie-player';
import { defaultLottie } from '@public/lotties';

import Popup from '@/components/Popup';
import Typography from '@/components/Typography';

interface IMathCorrectPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}
const MathCorrectPopup = ({ isOpen, onClose, onConfirm }: IMathCorrectPopupProps) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };
  return (
    <Popup isShow={isOpen} onClose={onClose} onConfirm={handleConfirm} onCancel={onClose} left="해설보기" right="취소">
      <div className="flex flex-col justify-center items-center">
        <Lottie loop animationData={defaultLottie.clap} play className="w-[70%]" />
        <Typography label="heading3" color="black" className="mt-8">
          정답입니다!
        </Typography>
      </div>
    </Popup>
  );
};
export default MathCorrectPopup;
