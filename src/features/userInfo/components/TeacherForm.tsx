import Button from '@/components/Button';
import Input from '@/components/Input';
import MultiTitle from '@/components/MultiTitle';

const TeacherForm = () => {
  return (
    <>
      <MultiTitle title="계정정보를 입력해주세요" subTitle="선생님의 이름을 입력해주세요" />
      <Input title="이름" placeholder="이름을 입력해 주세요" />

      <Button className="mt-20">완료</Button>
    </>
  );
};
export default TeacherForm;
