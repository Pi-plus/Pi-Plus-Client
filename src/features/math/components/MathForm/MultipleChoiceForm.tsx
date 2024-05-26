import { useState } from 'react';
import classNames from 'classnames';

import Typography from '@/components/Typography';

const MultipleChoiceForm = ({ isNumber }: { isNumber: boolean }) => {
  const [response, setResponse] = useState<string[]>([]);
  const responseArrays = isNumber ? ['1', '2', '3', '4', '5'] : ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ'];
  const handleClick = (target: string) => {
    if (response.includes(target)) {
      setResponse((prev) => prev.filter((r) => r !== target));
    } else {
      setResponse((prev) => [...prev, target]);
    }
  };
  return (
    <>
      {responseArrays.map((res) => (
        <button
          className={classNames(
            'size-[52px] rounded-3xl flex justify-center items-center',
            { 'bg-blue-20': response.includes(res) },
            { 'bg-gray-10': !response.includes(res) },
          )}
          key={res}
          onClick={() => handleClick(res)}
        >
          <Typography label="title2" color={response.includes(res) ? 'white' : 'gray40'}>
            {res}
          </Typography>
        </button>
      ))}
    </>
  );
};
export default MultipleChoiceForm;
