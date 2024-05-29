'use client';

import PiPlusInfo from '@/components/PiPlusInfo';
import { LoginForm } from '@/features/login/components';

const LoginPage = () => {
  return (
    <div className="w-full flex-1 flex justify-center items-center gap-7">
      <div className="w-1/2">
        <PiPlusInfo />
      </div>
      <div className="w-1/2 px-14 h-full">
        <LoginForm />
      </div>
    </div>
  );
};
export default LoginPage;
