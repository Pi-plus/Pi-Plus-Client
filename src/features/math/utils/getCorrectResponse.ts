import type { TFraction, TMathResponse } from '@/apis/math/types';
import { MATH_RESPONSE } from '@/constants/enums';

import type { TMathAnswerContent } from '../contexts';

import { getFractionStudentArray, getStudentArray } from './getStudentArray';

/**
 * @description 실제 수학 답안지와 실제 답 정답 여부 결정하는 함수
 */
export const getCorrectResponse = (
  solution: number[] | string[] | TFraction[],
  response: TMathAnswerContent,
  type: TMathResponse,
) => {
  const stringSolution = solution.map(String);
  const mathResponse = getStudentArray(response);
  switch (type) {
    case MATH_RESPONSE.fractionResponse:
      const fractionSolution = getFractionStudentArray(solution as TFraction[]);
      for (let i = 0; i < mathResponse.length; i++) {
        if (mathResponse[i] !== fractionSolution[i]) {
          return false;
        }
      }
      return true;

    case MATH_RESPONSE.multipleChoiceResponse:
      if (solution.length !== response.length) {
        return false;
      }
      const sortedSolution = stringSolution.sort();
      const sortedResponse = mathResponse.sort();
      for (let i = 0; i < sortedSolution.length; i++) {
        if (sortedSolution[i] !== sortedResponse[i]) {
          return false;
        }
      }
      return true;

    case MATH_RESPONSE.subjectiveResponse:
      if (solution.length !== response.length) {
        return false;
      }

      for (let i = 0; i < stringSolution.length; i++) {
        if (stringSolution[i] !== mathResponse[i]) {
          return false;
        }
      }
      return true;
  }
};
