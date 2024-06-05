'use client';

import type { PropsWithChildren } from 'react';

import PiPlusFormLayout from '@/components/PiPlusFormLayout';

const LoginLayout = ({ children }: PropsWithChildren) => {
  return <PiPlusFormLayout>{children}</PiPlusFormLayout>;
};
export default LoginLayout;
