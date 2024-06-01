import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import type { ISignUpRequest } from '@/apis/users/types';

export const useSignUpForm = () => {
  const {
    register,
    getValues,
    setError,
    setValue,
    formState: { isDirty, isValid, errors },
  } = useForm<ISignUpRequest>({
    mode: 'onChange',
  });
  const isDisabled = !isDirty || !isValid;

  const isMinLength = useCallback((minLength: number) => {
    return {
      value: minLength,
      message: `${minLength}이상 글자여야 합니다.`,
    };
  }, []);

  const isEmail = useCallback((pattern: RegExp) => {
    return {
      value: pattern,
      message: '이메일 형식이 아닙니다.',
    };
  }, []);

  const isRequiredEmail = '이메일을 무조건 입력해주어야 합니다.';

  const isRequiredPassword = '비밀번호를 무조건 입력해주어야 합니다.';

  return {
    register,
    getValues,
    setError,
    setValue,
    errors,
    isDisabled,
    isMinLength,
    isEmail,
    isRequiredEmail,
    isRequiredPassword,
  };
};
