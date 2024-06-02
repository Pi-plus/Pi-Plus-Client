import { useState } from 'react';

import authApi from '@/apis/auth';
import Button from '@/components/Button';
import Input from '@/components/Input';
import MultiTitle from '@/components/MultiTitle';
import { ROUTES } from '@/constants';
import { USER_ROLE } from '@/constants/enums';
import { useNavigate } from '@/hooks';
import { usePostStudentMutation } from '@/hooks/reactQuery/student';
import { usePostTeacherMutation } from '@/hooks/reactQuery/teacher';

import { useSignUpForm } from '../hooks';

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { push } = useNavigate();
  const {
    register,
    getValues,
    setValue,
    errors,
    isDisabled,
    isMinLength,
    isEmail,
    isRequiredEmail,
    isRequiredPassword,
  } = useSignUpForm();
  const { mutateAsync: mutateStudentAsync } = usePostStudentMutation();
  const { mutateAsync: mutateTeacherAsync } = usePostTeacherMutation();

  const handleClickSignUp = () => {
    setIsLoading(true);
    const { email, password, user_role, user_name, ...rest } = getValues();

    authApi.post({ email, password }).then((res) => {
      if (user_role === USER_ROLE.STUDENT) {
        mutateStudentAsync({
          user_name,
          ...rest,
          solve_problem: [],
          wrong_problem: [],
          uid: res.user.uid,
        });
      } else {
        mutateTeacherAsync({ user_name, manage_student: [], uid: res.user.uid });
      }
      push(ROUTES.LOGIN);
      setValue('email', '');
      setValue('password', '');
      setIsLoading(false);
    });
  };

  return (
    <>
      <MultiTitle title="계정 회원가입을 해주세요" subTitle="생성할 계정의 이메일 및 비밀번호를 입력해주세요" />
      <Input
        {...register('email', {
          required: isRequiredEmail,
          pattern: isEmail(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i),
        })}
        className="mb-4"
        placeholder="이메일을 입력해주세요"
        title="이메일"
        type="email"
        errorMessage={errors.email?.message}
      />
      <Input
        {...register('password', { required: isRequiredPassword, minLength: isMinLength(6) })}
        placeholder="비밀번호를 입력해주세요"
        type="password"
        title="비밀번호"
        errorMessage={errors.password?.message}
      />
      <Button className="mt-10" disabled={isDisabled} loading={isLoading} onClick={handleClickSignUp}>
        회원가입
      </Button>
    </>
  );
};
export default SignUpForm;
