import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import type { ISignUpRequest } from '@/apis/users/types';

export const useSignUpForm = () => {
  const {
    register,
    getValues,
    setError,
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

  const isEmail = useCallback(() => {
    return {
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: '유효한 이메일 주소를 입력해야 합니다.',
      },
    };
  }, []);

  return {
    register,
    getValues,
    setError,
    errors,
    isDisabled,
    isMinLength,
    isEmail,
  };
};
