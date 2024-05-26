/**
 *
 * @returns 수학 문제 답안 입력 컴포넌트
 */

import { useState } from 'react';

import Input from '@/components/Input';
import MathTitle from '@/components/MathTitle';

interface IMathResponse {
  title: string;
  answerCount: number;
}
const MathResponse = ({ title, answerCount }: IMathResponse) => {
  const [responses, setResponses] = useState<string[]>(Array(answerCount).fill(''));

  const handleChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newResponses = [...responses];
    newResponses[index] = e.target.value;
    setResponses(newResponses);
  };

  return (
    <div className="w-full">
      <MathTitle type="secondary" title={title} />
      <div className="border border-gray-10 rounded-b-xl py-16 px-12 flex items-center">
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
      </div>
    </div>
  );
};
export default MathResponse;
