import type { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

import { useIsMounted } from '@/hooks';

import type { TMathAnswer } from './type';

const MathFormProvider = ({ children }: PropsWithChildren) => {
  const methods = useForm<TMathAnswer>();
  const isMounted = useIsMounted();
  const onSubmit = (data: TMathAnswer) => {
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
export default MathFormProvider;
