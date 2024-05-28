import { useFormContext } from 'react-hook-form';

import Input from '@/components/Input';

import type { TMathAnswer } from '../../contexts';

const FractionForm = ({ length }: { length: number }) => {
  const { register } = useFormContext<TMathAnswer>();
  return (
    <>
      {Array.from({ length }).map((_, index) => (
        <div key={index}>
          <div className="border-gray-60 border-b-2 pb-3">
            <Input
              placeholder={`입력란 ${index * 2 + 1}`}
              color="secondary"
              type="number"
              {...register(`answer.${index * 2}.value`, { required: true })}
            />
          </div>
          <Input
            placeholder={`입력란 ${index * 2 + 2}`}
            color="secondary"
            type="number"
            {...register(`answer.${index * 2 + 1}.value`, { required: true })}
            className="mt-3"
          />
        </div>
      ))}
    </>
  );
};
export default FractionForm;
