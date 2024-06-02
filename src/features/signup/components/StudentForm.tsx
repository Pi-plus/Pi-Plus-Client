import Button from '@/components/Button';
import Input from '@/components/Input';
import MultiTitle from '@/components/MultiTitle';
import { ROUTES, SIGN_UP_ROUTES } from '@/constants';
import { useNavigate } from '@/hooks';
import { usePostStudentMutation } from '@/hooks/reactQuery/student';

import { useSignUpForm } from '../hooks';

const StudentForm = () => {
  const { push } = useNavigate();
  const { mutateAsync, isPending } = usePostStudentMutation();
  const { register, getValues, errors, isDisabled } = useSignUpForm();

  const handleOnClickStudentSubmit = () => {
    const formState = getValues();
    mutateAsync({ ...formState, solve_problem: [], wrong_problem: [] });
    push({ pathname: ROUTES.SIGN_UP, query: { step: SIGN_UP_ROUTES.FORM } });
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
      <Button onClick={handleOnClickStudentSubmit} loading={isPending} disabled={isDisabled} className="mt-16">
        다음
      </Button>
    </>
  );
};
export default StudentForm;
