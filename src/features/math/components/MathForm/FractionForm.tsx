import { useState } from 'react';

import Input from '@/components/Input';

const FractionForm = ({ answerCount }: { answerCount: number }) => {
  const [responses, setResponses] = useState<string[]>(Array(answerCount * 2).fill(''));

  const handleChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newResponses = [...responses];
    newResponses[index] = e.target.value;
    setResponses(newResponses);
  };
  return (
    <>
      {Array.from({ length: answerCount }).map((_, index) => (
        <div key={index}>
          <div className="border-gray-60 border-b-2 pb-3">
            <Input
              placeholder={`입력란 ${index * 2 + 1}`}
              value={responses[index * 2]}
              onChange={handleChange(index * 2)}
              type="secondary"
            />
          </div>
          <Input
            placeholder={`입력란 ${index * 2 + 2}`}
            value={responses[index * 2 + 1]}
            onChange={handleChange(index * 2 + 1)}
            type="secondary"
            className="mt-3"
          />
        </div>
      ))}
    </>
  );
};
export default FractionForm;
