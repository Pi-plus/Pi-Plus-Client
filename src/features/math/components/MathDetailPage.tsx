'use client';

import { useFormContext } from 'react-hook-form';
import Image from 'next/image';

import type { TMathTag } from '@/apis/math/types';
import Button from '@/components/Button';
import MathTitle from '@/components/MathTitle';
import Typography from '@/components/Typography';
import type { TMathSmallChapter } from '@/constants';
import { MathPopupFactory } from '@/features/math/components/MathPopups';
import MathProblemContent from '@/features/math/components/MathProblemContent';
import MathSectionTitle from '@/features/math/components/MathSectionTitle';
import { MATH_POPUPS } from '@/features/math/constants';
import type { TMathAnswer } from '@/features/math/contexts';
import { useMathPopups } from '@/features/math/hooks';
import { getCorrectResponse, getInitialMathResponse } from '@/features/math/utils';
import { useMathDetailQuery } from '@/hooks/reactQuery/math';
import { useSolveProblemPutStudentMutation, useWrongProblemPutStudentMutation } from '@/hooks/reactQuery/student';

import MathForm from './MathForm';

const MathDetailPage = ({ id }: { id: string }) => {
  const { data } = useMathDetailQuery(id);
  const postBody = {
    id,
    tag: data?.tag as TMathTag,
  };
  const {
    getValues,
    setValue,
    formState: { isDirty, isValid },
  } = useFormContext<TMathAnswer>();
  const { mutate: solveMutate } = useSolveProblemPutStudentMutation(postBody);
  const { mutate: wrongMutate } = useWrongProblemPutStudentMutation(postBody);
  const { openPopup, closePopup } = useMathPopups();
  const { initialAnswer, answer } = getInitialMathResponse(data!);
  const handleEmptyFormState = () => {
    setValue('answer', initialAnswer);
  };

  // 해설 팝업 여는 함수
  const handleOpenMathSolutionPopup = () => {
    openPopup(MATH_POPUPS.solution, {
      onClose: () => {
        closePopup(MATH_POPUPS.solution);
      },
      onConfirm: () => {},
      title: `${id}번의 문제`,
      mathImg: data ? data.question : '',
      solutionImg: data ? data.question_answer : '',
    });
  };

  // 정답 팝업 여는 함수
  const handleOpenMathCorrectPopup = () => {
    openPopup(MATH_POPUPS.correct, {
      title: '정답입니다!',
      onClose: () => {
        closePopup(MATH_POPUPS.correct);
      },
      onConfirm: () => {
        handleOpenMathSolutionPopup();
      },
    });
  };

  // 오답 팝업 여는 함수
  const handleOpenMathWrongPopup = () => {
    openPopup(MATH_POPUPS.wrong, {
      title: '오답이에요ㅠㅠ',
      content: (
        <>
          <Typography label="title2" className="mt-4">
            다시 풀어보면 맞을 수 있을 거에요!
          </Typography>
          <Typography label="title2">한번 더 시도해보아요!</Typography>
        </>
      ),
      onClose: () => {
        closePopup(MATH_POPUPS.wrong);
      },
      onConfirm: () => {
        handleOpenMathSolutionPopup();
      },
    });
  };

  const handleMathResponseSubmit = () => {
    const studentAnswer = getValues('answer');
    handleEmptyFormState();
    // 문제 맞았을 때
    if (data && getCorrectResponse(answer, studentAnswer, data.answer_type ?? '0')) {
      handleOpenMathCorrectPopup();
      solveMutate();
      // 문제 틀렸을 때
    } else {
      handleOpenMathWrongPopup();
      wrongMutate();
    }
  };

  return (
    <main className="md:flex md:max-lg:px-10 md:max-lg:gap-8 justify-center items-start gap-28 w-full px-16 mt-20 sm:max-md:px-20 max-sm:px-6">
      {data && (
        <div className="flex flex-col items-center justify-center w-1/2 max-lg:w-full">
          <MathTitle title="문제 보기" />
          <MathProblemContent
            id={id}
            concept={data.question_chapter! as TMathSmallChapter}
            difficulty={data.question_difficulty!}
          />
          <Image src={data.question!} width={630} height={500} alt="" />
        </div>
      )}
      <div className="w-1/2 max-lg:w-full max-md:mt-20">
        <MathSectionTitle
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

        <MathPopupFactory />
      </div>
    </main>
  );
};
export default MathDetailPage;
