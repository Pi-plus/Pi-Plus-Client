import type { TFraction } from '@/apis/math/types';

import type { TMathAnswerContent } from '../contexts';

export const getStudentArray = (data: TMathAnswerContent): string[] => {
  const result: string[] = [];
  data.map((answer) => result.push(answer.value));
  return result;
};

export const getFractionStudentArray = (data: TFraction[]) => {
  const result: number[] = [];
  data.forEach((answer) => {
    result.push(answer.first);
    result.push(answer.second);
  });
  return result;
};
