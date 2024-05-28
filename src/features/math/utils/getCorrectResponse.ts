import type { TMathResponse } from '@/apis/math/types';
import { MATH_RESPONSE } from '@/constants/enums';

export const getCorrectResponse = (solution: number[] | string[], response: string[], type: TMathResponse) => {
  const stringSolution = solution.map(String);
  switch (type) {
    case MATH_RESPONSE.fractionResponse:
      console.log(response, solution);
      break;

    case MATH_RESPONSE.multipleChoiceResponse:
      if (solution.length !== response.length) {
        return false;
      }
      const sortedSolution = stringSolution.sort();
      const sortedResponse = response.sort();
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
        if (stringSolution[i] !== response[i]) {
          return false;
        }
      }
      return true;
  }
};
