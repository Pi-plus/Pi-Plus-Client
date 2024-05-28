'use client';

import { useFormContext } from 'react-hook-form';
import Image from 'next/image';

import Button from '@/components/Button';
import MathTitle from '@/components/MathTitle';
import { SectionTitle } from '@/features/math/components';
import MathForm from '@/features/math/components/MathForm';
import { MathSolutionPopup } from '@/features/math/components/MathPopups';
import MathProblemContent from '@/features/math/components/MathProblemContent';
import type { TMathAnswer } from '@/features/math/contexts';
import { data } from '@/features/math/mock/data';
import { useModal } from '@/hooks';

interface IStudentProblemDetailProps {
  params: {
    id: string;
  };
}

const StudentProblemDetailPage = ({ params }: IStudentProblemDetailProps) => {
  const { id } = params;
  const { isOpen, onClose } = useModal();
  const { getValues } = useFormContext<TMathAnswer>();

  const handleMathResponseSubmit = () => {
    console.log(getValues('answer'));
  };
  return (
    <main className="flex justify-center items-start gap-28 w-full px-16 mt-20">
      {/*왼쪽 section*/}
      <div className="flex flex-col items-center justify-center w-1/2">
        <MathTitle title="문제 보기" />
        <MathProblemContent id={id} concept={data.question_chapter} difficulty={data.question_difficulty} />
        <Image src={data.question} width={630} height={500} alt="" />
      </div>
      {/*오른쪽 section*/}
      <div className="w-1/2">
        {/*답안지 제목*/}
        <SectionTitle
          className="mb-14"
          title="문제를 풀고 생각하는 답안지를 작성해주세요"
          subTitle="객관식/주관식 형식에 맞게 입력해주세요"
        />

        {/*답안지*/}
        <MathForm
          title="답안 입력"
          answerCount={data.answer.length}
          answerType={data.answer_type}
          isNumber={typeof data.answer[0] === 'number'}
        />

        <Button className="my-14" onClick={handleMathResponseSubmit}>
          답안 제출
        </Button>

        {/*문제 해설 팝업*/}
        <MathSolutionPopup
          isOpen={isOpen}
          onClose={onClose}
          title="2021 번 문제에 대한 답입니다! "
          mathSrc={data.question}
          solutionSrc={data.question_answer}
        />

        {/*문제 맞을 때 팝업*/}
        {/*<MathCorrectPopup isOpen={isOpen} onClose={onClose} onConfirm={() => {}} />*/}

        {/*문제 틀렸을 때 팝업*/}
        {/*<MathWrongPopup isOpen={isOpen} onClose={onClose} onConfirm={() => {}} />*/}
      </div>
    </main>
  );
};
export default StudentProblemDetailPage;
