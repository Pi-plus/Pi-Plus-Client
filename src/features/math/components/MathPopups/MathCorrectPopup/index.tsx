import { Popup } from '@/components/Popup/PopupMain';
import type { TMathPopupProps } from '@/features/math/types';

const MathCorrectPopup = ({ isOpen, onClose, onConfirm, title }: TMathPopupProps) => {
  const handleConfirm = () => {
    onClose();
    onConfirm();
  };
  return (
    <Popup isShow={isOpen} onClose={onClose}>
      <Popup.Container className="flex flex-col items-center justify-between h-full">
        <Popup.Content>
          <Popup.Lottie imgKey="clap" />
          <Popup.Title>{title}</Popup.Title>
        </Popup.Content>
        <Popup.Footer>
          <Popup.ConfirmButton onConfirm={handleConfirm}>해설보기</Popup.ConfirmButton>
          <Popup.CancelButton onCancel={onClose}>취소</Popup.CancelButton>
        </Popup.Footer>
      </Popup.Container>
    </Popup>
  );
};
export default MathCorrectPopup;
