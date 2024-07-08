import { Popup } from '@/components/Popup/PopupMain';
import MathSectionTitle from '@/features/math/components/MathSectionTitle';
import type { TMathPopupProps } from '@/features/math/types';

const MathSolutionPopup = ({ isOpen, onClose, title, mathImg, solutionImg }: TMathPopupProps) => {
  return (
    <Popup isShow={isOpen} onClose={onClose} className="w-[90%] h-[90%] gap-20 p-7 flex justify-between items-start">
      <Popup.CloseSvg onClick={onClose} />
      <Popup.Container className="grid grid-cols-2 gap-10 h-full w-full">
        <Popup.Container>
          <MathSectionTitle className="mb-14 mt-10" title={title!} subTitle="단원에 맞는 문제의 해설을 확인해보세요" />
          <Popup.Image imgSrc={mathImg!} />
        </Popup.Container>
        <Popup.Container className="mt-8">
          <Popup.Image imgSrc={solutionImg!} />
        </Popup.Container>
      </Popup.Container>
    </Popup>
  );
};
export default MathSolutionPopup;
