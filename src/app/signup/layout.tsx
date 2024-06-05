'use client';

import { type PropsWithChildren } from 'react';

import PiPlusFormLayout from '@/components/PiPlusFormLayout';
import { SignUpFormProvider } from '@/features/signup/contexts';

const SignupLayoutPage = ({ children }: PropsWithChildren) => {
  return (
    <SignUpFormProvider>
      <PiPlusFormLayout>{children}</PiPlusFormLayout>
    </SignUpFormProvider>
  );
};
export default SignupLayoutPage;
