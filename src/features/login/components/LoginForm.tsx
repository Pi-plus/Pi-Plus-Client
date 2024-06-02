import { useState } from 'react';
import Link from 'next/link';

import authApi from '@/apis/auth';
import Button from '@/components/Button';
import Input from '@/components/Input';
import MultiTitle from '@/components/MultiTitle';
import Typography from '@/components/Typography';
import { ROUTES } from '@/constants';
import { useNavigate } from '@/hooks';

import { useLoginForm } from '../hooks';

const LoginForm = () => {
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
  } = useLoginForm();

  const handleClickLogin = () => {
    setIsLoading(true);
    const formValues = getValues();
    authApi.login(formValues).then((result) => {
      if (result) {
        // TODO: 토스트로 에러 처리하기
        setIsLoading(false);
      } else {
        setValue('email', '');
        setValue('password', '');
        push(ROUTES.HOME);
      }
    });
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleClickLogin();
      }}
      className="flex flex-col"
    >
      <MultiTitle title="계정 로그인을 해주세요" subTitle="아이디 및 비밀번호를 입력해주세요" />
      <Input
        {...register('email', {
          required: isRequiredEmail,
          pattern: isEmail(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i),
        })}
        placeholder="이메일을 입력해주세요"
        title="이메일"
        className="mb-4"
        type="email"
        errorMessage={errors.email?.message}
      />
      <Input
        {...register('password', { required: isRequiredPassword, minLength: isMinLength(6) })}
        placeholder="비밀번호를 입력해주세요"
        title="비밀번호"
        type="password"
        errorMessage={errors.password?.message}
      />
      <div className="flex justify-center items-center my-14">
        <Typography>아직 회원아니신가요?</Typography>
        <Link href={ROUTES.SIGN_UP}>
          <Typography color="blue30" className="ml-2 hover:text-blue-40">
            회원가입
          </Typography>
        </Link>
      </div>
      <Button loading={isLoading} disabled={isDisabled} onClick={() => {}}>
        로그인
      </Button>
    </form>
  );
};
export default LoginForm;
