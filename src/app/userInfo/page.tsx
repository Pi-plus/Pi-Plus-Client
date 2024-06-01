'use client';

import PiPlusFormLayout from '@/components/PiPlusFormLayout';
import { USERINFO_ROUTES } from '@/constants';
import { SelectForm, StudentForm, TeacherForm } from '@/features/userInfo/components';
import { useNavigate } from '@/hooks';

const UserInfoPage = () => {
  const { query } = useNavigate();
  return (
    <PiPlusFormLayout>
      {query.step === USERINFO_ROUTES.SELECT && <SelectForm />}
      {query.step === USERINFO_ROUTES.STUDENT && <StudentForm />}
      {query.step === USERINFO_ROUTES.TEACHER && <TeacherForm />}
    </PiPlusFormLayout>
  );
};
export default UserInfoPage;
