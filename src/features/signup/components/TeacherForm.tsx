import Button from '@/components/Button';
import Input from '@/components/Input';
import MultiTitle from '@/components/MultiTitle';
import { ROUTES, SIGN_UP_ROUTES } from '@/constants';
import { useNavigate } from '@/hooks';

import { useSignUpForm } from '../hooks';

const TeacherForm = () => {
  const { push } = useNavigate();
  const { register, isDisabled, errors } = useSignUpForm();
  const handleOnClickTeacherSubmit = () => {
    push({ pathname: ROUTES.SIGN_UP, query: { step: SIGN_UP_ROUTES.FORM } });
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
        다음
      </Button>
    </>
  );
};
export default TeacherForm;
