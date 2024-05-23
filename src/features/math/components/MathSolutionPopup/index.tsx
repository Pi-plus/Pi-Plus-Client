import Image from 'next/image';
import { defaultSvg } from '@public/svgs';

import Modal from '@/components/Modal';

import SectionTitle from '../SectionTitle';

interface IMathSolutionPopup {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  mathSrc: string;
  solutionSrc: string;
}
const MathSolutionPopup = ({ isOpen, onClose, title, mathSrc, solutionSrc }: IMathSolutionPopup) => {
  return (
    <Modal isShow={isOpen} onClose={onClose} className="w-[90%] h-[90%] p-7 flex items-center justify-between">
      <Image
        className="absolute top-6 right-6 cursor-pointer"
        src={defaultSvg.cancel}
        onClick={onClose}
        width={24}
        height={24}
        alt=""
      />
      <div className="w-1/2 h-full">
        <SectionTitle className="mb-14 mt-10" title={title} subTitle="단원에 맞는 문제의 해설을 확인해보세요" />
        <Image src={mathSrc} className="w-full mb-3" width={630} height={600} alt="" />
      </div>
      <div className="w-1/2 h-full flex justify-center items-center">
        <Image src={solutionSrc} width={400} height={0} alt="" className="h-auto w-full mt-32" layout="responsive" />
      </div>
    </Modal>
  );
};
export default MathSolutionPopup;