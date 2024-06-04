'use client';

import { useFormContext } from 'react-hook-form';
import Image from 'next/image';

import type { TMathTag } from '@/apis/math/types';
import Button from '@/components/Button';
import MathTitle from '@/components/MathTitle';
import { MATH_RESPONSE } from '@/constants/enums';
import { SectionTitle } from '@/features/math/components';
import MathProblemContent from '@/features/math/components/MathProblemContent';
import type { TMathAnswer } from '@/features/math/contexts';
import { getCorrectResponse } from '@/features/math/utils';
import { useModal } from '@/hooks';
import { useMathDetailQuery } from '@/hooks/reactQuery/math';
import { useSolveProblemPutStudentMutation, useWrongProblemPutStudentMutation } from '@/hooks/reactQuery/student';

import MathForm from './MathForm';
import { MathCorrectPopup, MathSolutionPopup, MathWrongPopup } from './MathPopups';

const MathDetailPage = ({ id }: { id: string }) => {
  const { data } = useMathDetailQuery(id);
  console.log(data?.answer);
  const {
    getValues,
    setValue,
    formState: { isDirty, isValid },
  } = useFormContext<TMathAnswer>();
  const { isOpen: isSolutionOpen, onClose: onSolutionClose, onOpen: onSolutionOpen } = useModal();
  const { isOpen: isCorrectOpen, onClose: onCorrectClose, onOpen: onCorrectOpen } = useModal();
  const { isOpen: isWrongOpen, onClose: onWrongClose, onOpen: onWrongOpen } = useModal();
  const { mutate: solveMutate } = useSolveProblemPutStudentMutation({
    id,
    tag: data?.tag as TMathTag,
  });
  const { mutate: wrongMutate } = useWrongProblemPutStudentMutation({
    id,
    tag: data?.tag ?? '0',
  });

  const answer = data?.answer ?? [];
  const inputCount = data?.answer_type === MATH_RESPONSE.fractionResponse ? answer.length * 2 : answer.length;

  const handleEmptyFormState = () => {
    const initiaArray =
      data?.answer_type === MATH_RESPONSE.multipleChoiceResponse
        ? []
        : Array.from({ length: inputCount }, () => ({ value: '' }));
    setValue('answer', initiaArray);
  };

  const handleMathResponseSubmit = () => {
    const studentAnswer = getValues('answer');
    handleEmptyFormState();
    // 문제 맞았을 때
    if (data && getCorrectResponse(data.answer ?? [], studentAnswer, data.answer_type ?? '0')) {
      onCorrectOpen();
      solveMutate();
      // 문제 틀렸을 때
    } else {
      onWrongOpen();
      wrongMutate();
    }
  };

  return (
    <main className="flex justify-center items-start gap-28 w-full px-16 mt-20">
      {/*왼쪽 section*/}
      {data && (
        <div className="flex flex-col items-center justify-center w-1/2">
          <MathTitle title="문제 보기" />
          <MathProblemContent id={id} concept={data.question_chapter!} difficulty={data.question_difficulty!} />
          <Image src={data.question!} width={630} height={500} alt="" />
        </div>
      )}

      {/*오른쪽 section*/}
      <div className="w-1/2">
        {/*답안지 제목*/}
        <SectionTitle
          className="mb-14"
          title="문제를 풀고 생각하는 답안지를 작성해주세요"
          subTitle="객관식/주관식 형식에 맞게 입력해주세요"
        />
        {data && (
          //답안지
          <MathForm
            title="답안 입력"
            answerCount={data.answer ? data.answer.length : 1}
            answerType={data.answer_type!}
            isNumber={data.answer ? typeof data.answer[0] === 'number' : true}
          />
        )}

        <Button className="my-14" onClick={handleMathResponseSubmit} disabled={!isDirty || !isValid}>
          답안 제출
        </Button>

        {data && (
          // 문제 해설 팝업
          <MathSolutionPopup
            isOpen={isSolutionOpen}
            onClose={onSolutionClose}
            title="2021 번 문제에 대한 답입니다! "
            mathSrc={data.question!}
            solutionSrc={data.question_answer!}
          />
        )}

        {/*문제 맞을 때 팝업*/}
        <MathCorrectPopup isOpen={isCorrectOpen} onClose={onCorrectClose} onConfirm={onSolutionOpen} />

        {/*문제 틀렸을 때 팝업*/}
        <MathWrongPopup
          isOpen={isWrongOpen}
          onClose={onWrongClose}
          onConfirm={onWrongClose}
          onCancel={onSolutionOpen}
        />
      </div>
    </main>
  );
};
export default MathDetailPage;
