import { useState } from 'react';

import Input from '@/components/Input';

const SubjectiveForm = ({ answerCount }: { answerCount: number }) => {
  const [responses, setResponses] = useState<string[]>(Array(answerCount).fill(''));
  const handleChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newResponses = [...responses];
    newResponses[index] = e.target.value;
    setResponses(newResponses);
  };
  return (
    <>
      {Array.from({ length: answerCount }).map((_, index) => (
        <Input
          key={index}
          placeholder={`입력란 ${index + 1}`}
          value={responses[index]}
          onChange={handleChange(index)}
          className="my-5"
          type="secondary"
        />
      ))}
    </>
  );
};
export default SubjectiveForm;
