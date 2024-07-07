/**
 *
 * @returns 수학 문제 답안 입력 컴포넌트
 */

import type { TMathResponse } from '@/apis/math/types';
import BoxLayout from '@/components/BoxLayout';
import { MATH_RESPONSE } from '@/constants/enums';

import FractionForm from './FractionForm';
import MultipleChoiceForm from './MultipleChoiceForm';
import SubjectiveForm from './SubjectiveForm';

export interface IMathForm {
  title: string;
  answerCount: number;
  answerType: TMathResponse;
  isNumber: boolean;
}
const MathForm = ({ title, answerCount, answerType, isNumber }: IMathForm) => {
  return (
    <BoxLayout title={title}>
      {answerType === MATH_RESPONSE.subjectiveResponse && <SubjectiveForm length={answerCount} />}
      {answerType === MATH_RESPONSE.multipleChoiceResponse && <MultipleChoiceForm isNumber={isNumber} />}
      {answerType === MATH_RESPONSE.fractionResponse && <FractionForm length={answerCount} />}
    </BoxLayout>
  );
};
export default MathForm;
