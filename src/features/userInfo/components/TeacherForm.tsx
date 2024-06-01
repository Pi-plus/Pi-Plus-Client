import { useFormContext } from 'react-hook-form';

import type { TUserRequest } from '@/apis/users/types';
import Button from '@/components/Button';
import Input from '@/components/Input';
import MultiTitle from '@/components/MultiTitle';

const TeacherForm = () => {
  const {
    register,
    getValues,
    formState: { isDirty, isValid, errors },
  } = useFormContext<TUserRequest>();
  const isDisabled = !isDirty || !isValid;
  const handleOnClickTeacherSubmit = () => {
    const formState = getValues();
    console.log('최종 폼 상태', formState);
  };
  return (
    <>
      <MultiTitle title="계정정보를 입력해주세요" subTitle="선생님의 이름을 입력해주세요" />
      <Input
        {...register('user_name', { required: '이름은 반드시 입력해주세요' })}
        title="이름"
        placeholder="이름을 입력해 주세요"
        errorMessage={errors.user_name?.message}
      />

      <Button className="mt-20" disabled={isDisabled} onClick={handleOnClickTeacherSubmit}>
        완료
      </Button>
    </>
  );
};
export default TeacherForm;
