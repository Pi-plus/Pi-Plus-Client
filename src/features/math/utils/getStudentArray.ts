import type { TMathAnswerContent } from '../contexts';

export const getStudentArray = (data: TMathAnswerContent): string[] => {
  const result: string[] = [];
  data.map((answer) => result.push(answer.value));
  return result;
};
