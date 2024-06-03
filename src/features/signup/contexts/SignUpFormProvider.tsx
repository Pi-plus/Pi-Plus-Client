import type { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

import { useIsMounted } from '@/hooks';

import type { TSignupForm } from '../types/signupFormType';

const SignUpFormProvider = ({ children }: PropsWithChildren) => {
  const methods = useForm<TSignupForm>({
    defaultValues: { user_goal: '0', user_name: '', user_role: '선생님', user_school: '', email: '', password: '' },
  });
  const isMounted = useIsMounted();
  const onSubmit = (data: TSignupForm) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      {isMounted && <DevTool control={methods.control} />}
      <form className="flex size-full flex-col" onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};
export default SignUpFormProvider;
