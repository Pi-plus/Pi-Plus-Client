import Image from 'next/image';
import { defaultSvg } from '@public/svgs';

import Modal from '@/components/Modal';
import MathContentInfo from '@/features/mypage/components/AchievementSection/MathContentInfo';
import MathCountInfo from '@/features/mypage/components/AchievementSection/MathCountInfo';
import MathGoalInfo from '@/features/mypage/components/AchievementSection/MathGoalInfo';
import TrophyTitle from '@/features/mypage/components/AchievementSection/TrophyTitle';
import { useStudentDetailQuery } from '@/hooks/reactQuery/student/useStudentDetailQuery';

interface IStudentAchievePopupProps {
  isOpen: boolean;
  onClose: () => void;
  uid: string;
}
const StudentAchievePopup = ({ isOpen, onClose, uid }: IStudentAchievePopupProps) => {
  const { data } = useStudentDetailQuery(uid);
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
      {data && (
        <div className="w-full px-5">
          <TrophyTitle data={data} />
          <MathCountInfo data={data} />
          <MathContentInfo data={data} />
          <MathGoalInfo data={data} />
        </div>
      )}
    </Modal>
  );
};
export default StudentAchievePopup;
