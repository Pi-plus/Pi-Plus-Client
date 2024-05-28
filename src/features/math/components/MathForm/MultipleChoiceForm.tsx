import { useFieldArray, useFormContext } from 'react-hook-form';
import classNames from 'classnames';

import Typography from '@/components/Typography';

import type { TMathAnswer } from '../../contexts';

const MultipleChoiceForm = ({ isNumber }: { isNumber: boolean }) => {
  const responseArrays = isNumber ? ['1', '2', '3', '4', '5'] : ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ'];
  const { control, register } = useFormContext<TMathAnswer>();
  const { fields, remove, append } = useFieldArray({
    control,
    name: 'answer',
  });

  const handleClick = (target: string) => {
    const choiceIndex = fields.findIndex((field) => field.value === target);

    if (choiceIndex !== -1) {
      remove(choiceIndex);
    } else {
      append({ value: target });
    }
  };
  return (
    <div {...register(`answer`, { required: true })} className="flex items-center gap-5 justify-center">
      {responseArrays.map((res, index) => (
        <button
          className={classNames(
            'size-[52px] rounded-3xl flex justify-center items-center',
            { 'bg-blue-20': fields.some((field) => field.value === res) },
            { 'bg-gray-10': !fields.some((field) => field.value === res) },
          )}
          key={index}
          onClick={() => handleClick(res)}
        >
          <Typography label="title2" color={fields.some((field) => field.value === res) ? 'white' : 'gray40'}>
            {res}
          </Typography>
        </button>
      ))}
    </div>
  );
};
export default MultipleChoiceForm;
