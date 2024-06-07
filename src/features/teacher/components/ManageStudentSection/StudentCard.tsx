import Image from 'next/image';
import { defaultImages } from '@public/images';

import type { IManageStudent } from '@/apis/teacher/types';
import Button from '@/components/Button';
import Typography from '@/components/Typography';
import { useModal } from '@/hooks';

import StudentAchievePopup from './StudentAchieveModal';

const StudentCard = (props: IManageStudent) => {
  const { onClose, isOpen, onOpen } = useModal();
  return (
    <div className="flex flex-col justify-center items-center bg-blue-10 rounded-lg p-5">
      <StudentAchievePopup onClose={onClose} isOpen={isOpen} />
      <Image src={defaultImages.girlStudent} width={100} height={100} alt="" />
      <Typography label="heading2">{`${props.user_name} 학생`}</Typography>
      <Typography label="body1">{props.user_school}</Typography>
      <Button className="flex justify-center items-center h-8 mt-5" onClick={onOpen}>
        성취도 확인
      </Button>
    </div>
  );
};
export default StudentCard;
