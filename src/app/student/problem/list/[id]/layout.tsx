'use client';

import type { PropsWithChildren } from 'react';

import { MathFormProvider } from '@/features/math/contexts';

const MathProblemLayout = ({ children }: PropsWithChildren) => {
  return <MathFormProvider>{children}</MathFormProvider>;
};
export default MathProblemLayout;
