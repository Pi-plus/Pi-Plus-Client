'use client';

import Image from 'next/image';

import Button from '@/components/Button';
import Input from '@/components/Input';
import MathTitle from '@/components/MathTitle';
import Modal from '@/components/Modal';
import { SectionTitle } from '@/features/math/components';
import ProblemTitle from '@/features/math/components/ProblemTitle';
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
        <ProblemTitle id="1" concept="개념 중1" difficulty="HIGH" />
        <Image src="https://i.imgur.com/3JQKysn.png" width={630} height={500} alt="" />
      </div>
      {/*오른쪽 section*/}
      <div className="w-1/2">
        {/*답안지 제목*/}
        <SectionTitle
          title="문제를 풀고 생각하는 답안지를 작성해주세요"
          subTitle="객관식/주관식 형식에 맞게 입력해주세요"
        />

        {/*답안지*/}
        <div className="w-full mt-14">
          <MathTitle type="secondary" title="답안 입력" />
          <div className="border border-gray-10 rounded-b-xl py-16 px-12">
            <Input placeholder="adsg" value={value} onChange={onChange} className="my-5" type="secondary" />
          </div>
        </div>
        <Button className="my-14" onClick={onOpen}>
          답안 제출
        </Button>

        <Modal isShow={isOpen} onClose={onClose} className="w-[70%] h-[90%]">
          <Image src="https://i.imgur.com/3JQKysn.png" width={630} height={400} alt="" />
          <Image src="https://i.imgur.com/F2Doewn.png" width={630} height={400} alt="" />
        </Modal>
      </div>
    </main>
  );
};
export default StudentProblemDetailPage;
