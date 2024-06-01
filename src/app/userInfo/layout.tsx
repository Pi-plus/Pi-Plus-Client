'use client';

import type { PropsWithChildren } from 'react';

import SignupFormProvider from '@/features/signup/contexts/SignupFormProvider';

const UserInfoLayout = ({ children }: PropsWithChildren) => {
  return <SignupFormProvider>{children}</SignupFormProvider>;
};
export default UserInfoLayout;
