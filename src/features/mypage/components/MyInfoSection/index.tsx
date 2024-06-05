import Lottie from 'react-lottie-player';
import { defaultLottie } from '@public/lotties';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Typography from '@/components/Typography';
import { showSuccessToast } from '@/utils';

const MyInfoSection = ({ id }: { id: string }) => {
  const handleUidCopy = async () => {
    try {
      await navigator.clipboard.writeText(id);
      showSuccessToast('클립보드에 성공적으로 복사되었어요');
    } catch (error) {
      showSuccessToast('클립보드 복사에 실패했어요');
    }
  };
  return (
    <div className="size-full flex flex-col justify-center items-center px-36">
      <Lottie loop className="w-[40%]" animationData={defaultLottie.teacher} play />
      <Typography label="heading2">학생의 고유한 코드를 복사해 선생님께 전달해주세요</Typography>
      <Typography label="body2">선생님은 코드를 통해 학생을 추가해 성취도 관리할 수 있어요</Typography>
      <Input defaultValue={id} className="mt-8" disabled={true} />
      <Button className="mt-8" onClick={handleUidCopy}>
        클립 보드 복사
      </Button>
    </div>
  );
};
export default MyInfoSection;
