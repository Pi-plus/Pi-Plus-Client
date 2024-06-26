import { useFormContext } from 'react-hook-form';

import Input from '@/components/Input';

import type { TMathAnswer } from '../../contexts';

const SubjectiveForm = ({ length }: { length: number }) => {
  const { register } = useFormContext<TMathAnswer>();
  return (
    <>
      {Array.from({ length }).map((_, index) => (
        <Input
          key={index}
          placeholder={`입력란 ${index + 1}`}
          {...register(`answer.${index}.value`, { required: true })}
          className="my-5"
          color="secondary"
        />
      ))}
    </>
  );
};
export default SubjectiveForm;
