import type { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

import type { TUserRequest } from '@/apis/users/types';
import { useIsMounted } from '@/hooks';

const SignupFormProvider = ({ children }: PropsWithChildren) => {
  const methods = useForm<TUserRequest>({
    defaultValues: { user_gender: '남자', user_goal: 0, user_name: '', user_role: '학생', user_school: '' },
  });
  const isMounted = useIsMounted();
  const onSubmit = (data: TUserRequest) => {
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
export default SignupFormProvider;
