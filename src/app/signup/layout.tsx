'use client';

import type { PropsWithChildren } from 'react';

import SignupFormProvider from '@/features/signup/contexts/SignupFormProvider';

const SignupLayout = ({ children }: PropsWithChildren) => {
  return <SignupFormProvider>{children}</SignupFormProvider>;
};
export default SignupLayout;
