import type { TFraction } from '@/apis/math/types';

import type { TMathAnswerContent } from '../contexts';

export const getStudentArray = (data: TMathAnswerContent): string[] => {
  const result: string[] = [];
  data.map((answer) => result.push(answer.value));
  return result;
};

export const getFractionStudentArray = (data: TFraction[]): string[] => {
  const result: string[] = [];
  data.forEach((answer) => {
    result.push(String(answer.first));
    result.push(String(answer.second));
  });
  return result;
};
