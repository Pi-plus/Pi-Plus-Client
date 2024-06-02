'use client';

import { SIGN_UP_ROUTES } from '@/constants';
import { SelectForm, SignUpForm, StudentForm, TeacherForm } from '@/features/signup/components';
import { useNavigate } from '@/hooks';

const SignUpPage = () => {
  const { query } = useNavigate();
  return (
    <>
      {query.step === SIGN_UP_ROUTES.SELECT && <SelectForm />}
      {query.step === SIGN_UP_ROUTES.STUDENT && <StudentForm />}
      {query.step === SIGN_UP_ROUTES.TEACHER && <TeacherForm />}
      {query.step === SIGN_UP_ROUTES.FORM && <SignUpForm />}
    </>
  );
};
export default SignUpPage;
