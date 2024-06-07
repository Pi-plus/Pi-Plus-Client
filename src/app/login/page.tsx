'use client';

import { LOGIN_ROUTES } from '@/constants';
import { LoginForm, SelectForm } from '@/features/login/components';
import { useNavigate } from '@/hooks';

const LoginPage = () => {
  const { query } = useNavigate();
  return (
    <>
      {query.step === LOGIN_ROUTES.SELECT && <SelectForm />}
      {query.step === LOGIN_ROUTES.FORM && <LoginForm />}
    </>
  );
};
export default LoginPage;
