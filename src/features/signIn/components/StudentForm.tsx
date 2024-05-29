import Button from '@/components/Button';
import Input from '@/components/Input';
import MultiTitle from '@/components/MultiTitle';

const StudentForm = () => {
  return (
    <>
      <MultiTitle title="계정정보를 입력해주세요" subTitle="학생의 이름, 학교, 목표 문제를 입력해주세요" />
      <div className="flex flex-col gap-7">
        <Input title="이름" placeholder="이름을 입력해 주세요" />
        <Input title="학교" placeholder="학교를 입력해 주세요" />
        <Input title="목표 문제" placeholder="목표 문제를 입력해 주세요" />
      </div>
      <Button className="mt-16">완료</Button>
    </>
  );
};
export default StudentForm;
