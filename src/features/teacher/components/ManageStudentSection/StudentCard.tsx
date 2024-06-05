import Image from 'next/image';
import { defaultImages } from '@public/images';

import Button from '@/components/Button';
import Typography from '@/components/Typography';
import { useModal } from '@/hooks';

import StudentAchievePopup from './StudentAchieveModal';

const StudentCard = () => {
  const { onClose, isOpen, onOpen } = useModal();
  return (
    <div className="flex flex-col justify-center items-center bg-blue-10 rounded-lg p-5">
      <StudentAchievePopup onClose={onClose} isOpen={isOpen} />
      <Image src={defaultImages.girlStudent} width={100} height={100} alt="" />
      <Typography label="heading2">김광운 학생</Typography>
      <Typography label="body1">광운 학교</Typography>
      <Button className="flex justify-center items-center h-8 mt-5" onClick={onOpen}>
        성취도 확인
      </Button>
    </div>
  );
};
export default StudentCard;
