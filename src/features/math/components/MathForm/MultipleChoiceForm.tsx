import { useState } from 'react';
import classNames from 'classnames';

import Typography from '@/components/Typography';

const MultipleChoiceForm = () => {
  const [response, setResponse] = useState<string[]>([]);
  const numberArrays = ['1', '2', '3', '4', '5'];
  const handleClick = (num: string) => {
    if (response.includes(num)) {
      setResponse((prev) => prev.filter((r) => r !== num));
    } else {
      setResponse((prev) => [...prev, num]);
    }
  };
  return (
    <>
      {numberArrays.map((num) => (
        <button
          className={classNames(
            'size-[52px] rounded-3xl flex justify-center items-center',
            { 'bg-blue-20': response.includes(num) },
            { 'bg-gray-10': !response.includes(num) },
          )}
          key={num}
          onClick={() => handleClick(num)}
        >
          <Typography label="title2" color={response.includes(num) ? 'white' : 'gray40'}>
            {num}
          </Typography>
        </button>
      ))}
    </>
  );
};
export default MultipleChoiceForm;
