'use client';

import PiPlusFormLayout from '@/components/PiPlusFormLayout';
import { SIGN_UP_ROUTES } from '@/constants';
import { SelectForm, StudentForm, TeacherForm } from '@/features/signIn/components';
import { useNavigate } from '@/hooks';

const SignUpPage = () => {
  const { query } = useNavigate();
  return (
    <PiPlusFormLayout>
      {query.step === SIGN_UP_ROUTES.SELECT && <SelectForm />}
      {query.step === SIGN_UP_ROUTES.STUDENT && <StudentForm />}
      {query.step === SIGN_UP_ROUTES.TEACHER && <TeacherForm />}
    </PiPlusFormLayout>
  );
};
export default SignUpPage;
