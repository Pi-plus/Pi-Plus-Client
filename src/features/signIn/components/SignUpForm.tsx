import Button from '@/components/Button';
import Input from '@/components/Input';
import MultiTitle from '@/components/MultiTitle';
import { useNavigate } from '@/hooks';

import { useSignUpForm } from '../hooks';

const SignUpForm = () => {
  const { push } = useNavigate();
  const {
    register,
    getValues,
    setError,
    errors,
    isDisabled,
    isMinLength,
    isEmail,
    isRequiredEmail,
    isRequiredPassword,
  } = useSignUpForm();
  const handleClickSignIn = async () => {
    const result = getValues();
    console.log('결과', result);
  };
  return (
    <form onSubmit={handleClickSignIn} className="flex flex-col">
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
      <Button className="mt-10" disabled={isDisabled}>
        다음
      </Button>
    </form>
  );
};
export default SignUpForm;
