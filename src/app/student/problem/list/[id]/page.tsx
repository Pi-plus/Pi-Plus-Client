'use client';

import Image from 'next/image';
import { defaultImages } from '@public/images';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Typography from '@/components/Typography';
import { useInput } from '@/hooks';

interface IStudentProblemDetailProps {
  params: {
    id: number;
  };
}

const StudentProblemDetailPage = ({ params }: IStudentProblemDetailProps) => {
  const { id } = params;
  console.log(id);
  const { onChange, value } = useInput('');
  return (
    <main className="flex justify-center items-start gap-28 w-full px-16 mt-20">
      {/*왼쪽 section*/}
      <div className="flex flex-col items-center justify-center w-1/2">
        <div className="bg-blue-10 w-full flex items-center justify-center rounded-t-3xl py-6">
          <Typography color="blue40" label="title1">
            문제 보기
          </Typography>
        </div>
        <div className="w-full flex items-start justify-between p-5">
          <div className="flex items-center justify-center gap-9">
            <Image src={defaultImages.book} width={173} height={120} alt="" />
            <div className="flex flex-col">
              <Typography label="title1" color="black">
                {`문제 ${id} 번`}
              </Typography>
              <Typography label="title3">개념 : 중2 1학기 실수</Typography>
            </div>
          </div>

          {/*난이도 라벨*/}
          <div className="p-3 bg-blue-20 flex items-center justify-center self-start overflow-hidden rounded-[20px] whitespace-nowrap">
            <Typography color="white" label="title3">
              난이도 하
            </Typography>
          </div>
        </div>
        <Image src="https://i.imgur.com/3JQKysn.png" width={630} height={500} alt="" />
      </div>
      {/*오른쪽 section*/}
      <div className="w-1/2">
        {/*답안지 제목*/}
        <div className="w-full flex items-center gap-6">
          <Image src={defaultImages.studyStudent} width={170} height={170} alt="" />
          <div className="flex flex-col items-start">
            <Typography label="title1" color="black">
              문제를 풀고 생각하는 답안지를 작성해주세요
            </Typography>
            <Typography color="gray50" label="body2">
              객관식/주관식 형식에 맞게 입력해주세요
            </Typography>
          </div>
        </div>

        {/*답안지*/}
        <div className="w-full mt-14">
          <div className="bg-gray-10 w-full flex items-center justify-center rounded-t-3xl py-6">
            <Typography color="black" label="title1">
              답안 입력
            </Typography>
          </div>
          <div className="border border-gray-10 rounded-b-xl py-16 px-12">
            <Input placeholder="adsg" value={value} onChange={onChange} className="my-5" type="secondary" />
          </div>
        </div>
        <Button className="my-14">답안 제출</Button>
      </div>
    </main>
  );
};
export default StudentProblemDetailPage;
