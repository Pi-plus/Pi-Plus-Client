import Button from '@/components/Button';
import Input from '@/components/Input';
import LazyLottie from '@/components/LazyLottie';
import Typography from '@/components/Typography';
import { useInput } from '@/hooks';
import { useManageStudentPutTeacherMutation } from '@/hooks/reactQuery/teacher';
import { showSuccessToast } from '@/utils';

const AddStudentSection = () => {
  const { value, onChange, setValue } = useInput('');
  const { mutateAsync } = useManageStudentPutTeacherMutation();

  const handleAddManageStudent = () => {
    mutateAsync(value ?? '');
    setValue('');
    showSuccessToast('관리학생을 성공적으로 추가되었어요');
  };
  return (
    <div className="size-full flex flex-col justify-center items-center px-36">
      <LazyLottie imgkey="teacher" className="w-[40%]" />
      <Typography label="heading2" className="text-center">
        학생의 고유한 코드를 입력해 관리하는 학생으로 추가해보세요
      </Typography>
      <Typography label="body2">학생의 마이 페이지에서 코드를 확인할 수 있어요</Typography>
      <Input className="mt-8" placeholder="학생 코드를 입력해주세요" value={value} onChange={onChange} />
      <Button className="mt-8" onClick={handleAddManageStudent} disabled={value.length === 0}>
        관리 학생 추가
      </Button>
    </div>
  );
};
export default AddStudentSection;
