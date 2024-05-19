'use client';

import Image from 'next/image';

import Button from '@/components/Button';
import MathTitle from '@/components/MathTitle';
import { SectionTitle } from '@/features/math/components';
import MathProblemContent from '@/features/math/components/MathProblemContent';
import MathResponse from '@/features/math/components/MathResponse';
import MathSolutionPopup from '@/features/math/components/MathSolutionPopup';
import { useInput, useModal } from '@/hooks';

interface IStudentProblemDetailProps {
  params: {
    id: number;
  };
}

const StudentProblemDetailPage = ({ params }: IStudentProblemDetailProps) => {
  const { id } = params;
  console.log(id);
  const { onChange, value } = useInput('');
  const { isOpen, onClose, onOpen } = useModal();
  return (
    <main className="flex justify-center items-start gap-28 w-full px-16 mt-20">
      {/*왼쪽 section*/}
      <div className="flex flex-col items-center justify-center w-1/2">
        <MathTitle title="문제 보기" />
        <MathProblemContent id="1" concept="개념 중1" difficulty="HIGH" />
        <Image src="https://i.imgur.com/3JQKysn.png" width={630} height={500} alt="" />
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
        <MathResponse title="답안 입력" value={value} onChange={onChange} />

        <Button className="my-14" onClick={onOpen}>
          답안 제출
        </Button>

        {/*문제 해설 팝업*/}
        <MathSolutionPopup
          isOpen={isOpen}
          onClose={onClose}
          title="2021 번 문제에 대한 답입니다! "
          mathSrc="https://i.imgur.com/i53bIul.png"
          solutionSrc="https://i.imgur.com/jXfcG0Q.png"
        />
      </div>
    </main>
  );
};
export default StudentProblemDetailPage;
