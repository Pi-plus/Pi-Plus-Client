/**
 *
 * @returns 수학 문제 답안 입력 컴포넌트
 */

import { useState } from 'react';

import BoxLayout from '@/components/BoxLayout';
import Input from '@/components/Input';

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
    <BoxLayout title={title}>
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
    </BoxLayout>
  );
};
export default MathResponse;
