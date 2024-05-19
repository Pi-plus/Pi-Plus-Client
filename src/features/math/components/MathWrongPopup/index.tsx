import Lottie from 'react-lottie-player';
import { defaultLottie } from '@public/lotties';

import Popup from '@/components/Popup';
import Typography from '@/components/Typography';

interface IMathWrongPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}
const MathWrongPopup = ({ isOpen, onClose, onConfirm }: IMathWrongPopupProps) => {
  return (
    <Popup
      isShow={isOpen}
      onClose={onClose}
      onConfirm={onConfirm}
      onCancel={onClose}
      left="다시 풀기"
      right="해설 보기"
    >
      <Lottie loop animationData={defaultLottie.sad} play className="w-[70%] -mt-24" />
      <div className="flex flex-col justify-center items-center -mt-8">
        <Typography label="heading3" color="black">
          오답이에요ㅠㅠ
        </Typography>
        <Typography label="title2" className="mt-4">
          다시 풀어보면 맞을 수 있을 거에요!
        </Typography>
        <Typography label="title2">한번 더 시도해보아요!</Typography>
      </div>
    </Popup>
  );
};
export default MathWrongPopup;
