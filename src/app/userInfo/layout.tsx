'use client';

import type { PropsWithChildren } from 'react';

import UserInfoFormProvider from '@/features/userInfo/contexts/UserInfoFormProvider';

const UserInfoLayout = ({ children }: PropsWithChildren) => {
  return <UserInfoFormProvider>{children}</UserInfoFormProvider>;
};
export default UserInfoLayout;
