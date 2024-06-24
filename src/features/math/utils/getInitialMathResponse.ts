import type { IMathResponse } from '@/apis/math/types';
import { MATH_RESPONSE } from '@/constants/enums';

export const getInitialMathResponse = (data: IMathResponse) => {
  const answer = data?.answer ?? [];
  const inputCount = data?.answer_type === MATH_RESPONSE.fractionResponse ? answer.length * 2 : answer.length;

  const initialAnswer =
    data?.answer_type === MATH_RESPONSE.multipleChoiceResponse
      ? []
      : Array.from({ length: inputCount }, () => ({ value: '' }));
  return { initialAnswer, answer };
};
