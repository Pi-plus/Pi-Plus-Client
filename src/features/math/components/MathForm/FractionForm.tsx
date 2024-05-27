import { useFieldArray, useFormContext } from 'react-hook-form';

import Input from '@/components/Input';

import type { TMathAnswer } from '../../contexts';

const FractionForm = () => {
  const { register, control } = useFormContext<TMathAnswer>();
  const { fields } = useFieldArray({
    control,
    name: 'answer',
  });
  const length = fields.length / 2;
  return (
    <>
      {Array.from({ length }).map((_, index) => (
        <div key={index}>
          <div className="border-gray-60 border-b-2 pb-3">
            <Input
              placeholder={`입력란 ${index * 2 + 1}`}
              type="secondary"
              {...register(`answer.${index * 2}.value`)}
            />
          </div>
          <Input
            placeholder={`입력란 ${index * 2 + 2}`}
            type="secondary"
            {...register(`answer.${index * 2 + 1}.value`)}
            className="mt-3"
          />
        </div>
      ))}
    </>
  );
};
export default FractionForm;
