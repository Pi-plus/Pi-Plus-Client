import { useFormContext } from 'react-hook-form';

import type { TUserRequest } from '@/apis/users/types';
import Button from '@/components/Button';
import Input from '@/components/Input';
import MultiTitle from '@/components/MultiTitle';

const StudentForm = () => {
  const {
    register,
    getValues,
    formState: { isDirty, isValid, errors },
  } = useFormContext<TUserRequest>();
  const isDisabled = !isDirty || !isValid;
  const handleOnClickStudentSubmit = () => {
    const formState = getValues();
    console.log('최종 폼 상태', formState);
  };
  return (
    <>
      <MultiTitle title="계정정보를 입력해주세요" subTitle="학생의 이름, 학교, 목표 문제를 입력해주세요" />
      <div className="flex flex-col gap-7">
        <Input
          {...register('user_name', { required: '이름은 반드시 입력해주세요' })}
          title="이름"
          placeholder="이름을 입력해 주세요"
          errorMessage={errors.user_name?.message}
        />
        <Input
          {...register('user_school', { required: '다니는 학교는 반드시 입력해주세요' })}
          title="학교"
          placeholder="학교를 입력해 주세요"
          errorMessage={errors.user_school?.message}
        />
        <Input
          {...register('user_goal', { required: '목표하는 문제 수는 반드시 입력해주세요' })}
          type="number"
          title="목표 문제"
          placeholder="목표 문제 수를 숫자로 입력해 주세요"
          errorMessage={errors.user_goal?.message}
        />
      </div>
      <Button onClick={handleOnClickStudentSubmit} disabled={isDisabled} className="mt-16">
        완료
      </Button>
    </>
  );
};
export default StudentForm;
