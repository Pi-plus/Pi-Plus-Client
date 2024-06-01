'use client';

import PiPlusFormLayout from '@/components/PiPlusFormLayout';
import { SignUpForm } from '@/features/signup/components';

const SignUpPage = () => {
  return (
    <PiPlusFormLayout>
      <SignUpForm />
    </PiPlusFormLayout>
  );
};
export default SignUpPage;
