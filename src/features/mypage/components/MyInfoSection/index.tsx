import Lottie from 'react-lottie-player';
import { defaultLottie } from '@public/lotties';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Typography from '@/components/Typography';

const MyInfoSection = ({ id }: { id: string }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-36">
      <Lottie loop className="w-[40%]" animationData={defaultLottie.teacher} play />
      <Typography label="heading2">학생의 고유한 코드를 복사해 선생님께 전달해주세요</Typography>
      <Typography label="body2">선생님은 코드를 통해 학생을 추가해 성취도 관리할 수 있어요</Typography>
      <Input defaultValue={id} className="mt-8" disabled={true} />
      <Button className="mt-8">클립 보드 복사</Button>
    </div>
  );
};
export default MyInfoSection;
