import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

import Button from '@/components/Button';
import Input from '@/components/Input';
import MultiTitle from '@/components/MultiTitle';
import { app } from '@/utils';

const SignUpForm = () => {
  const handleClickSignIn = async () => {
    const auth = getAuth(app);
    try {
      const createdUser = await createUserWithEmailAndPassword(auth, 'hansoom3315@naver.com', '123456789###');
      console.log(createdUser);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <MultiTitle title="계정 회원가입을 해주세요" subTitle="이메일 및 비밀번호를 입력해주세요" />
      <Input placeholder="이메일을 입력해주세요" title="이메일" className="mb-4" />
      <Input placeholder="비밀번호를 입력해주세요" title="비밀번호" />
      <Button onClick={handleClickSignIn} className="mt-10">
        회원가입
      </Button>
    </>
  );
};
export default SignUpForm;
