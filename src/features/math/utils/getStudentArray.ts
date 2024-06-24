import type { TFraction } from '@/apis/math/types';

import type { TMathAnswerContent } from '../contexts';

/**
 * @description 분수/객관식/주관식 답안지 제출할 배열로 가공하는 함수
 */
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
