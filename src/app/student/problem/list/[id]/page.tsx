'use client';

import Image from 'next/image';
import { defaultSvg } from '@public/svgs';

import Button from '@/components/Button';
import MathTitle from '@/components/MathTitle';
import Modal from '@/components/Modal';
import { SectionTitle } from '@/features/math/components';
import MathProblemContent from '@/features/math/components/MathProblemContent';
import MathResponse from '@/features/math/components/MathResponse';
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

        <Modal isShow={isOpen} onClose={onClose} className="w-[90%] h-[90%] p-7 flex items-center justify-between">
          <Image
            className="absolute top-6 right-6 cursor-pointer"
            src={defaultSvg.cancel}
            onClick={onClose}
            width={24}
            height={24}
            alt=""
          />
          <div className="w-1/2 h-full">
            <SectionTitle
              className="mb-14 mt-10"
              title="2021 번 문제에 대한 답입니다! "
              subTitle="단원에 맞는 문제의 해설을 확인해보세요"
            />
            <Image src="https://i.imgur.com/jXfcG0Q.png" className="w-full mb-3" width={630} height={600} alt="" />
          </div>
          <div className="w-1/2 h-full flex justify-center items-center mt-32">
            <Image
              src="https://i.imgur.com/jXfcG0Q.png"
              width={400}
              height={0}
              alt=""
              className="h-auto w-full"
              layout="responsive"
            />
          </div>
        </Modal>
      </div>
    </main>
  );
};
export default StudentProblemDetailPage;
