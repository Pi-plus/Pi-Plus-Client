import Link from 'next/link';

import Button from '@/components/Button';
import Input from '@/components/Input';
import MultiTitle from '@/components/MultiTitle';
import Typography from '@/components/Typography';
import { ROUTES, SIGN_UP_ROUTES } from '@/constants';

const LoginForm = () => {
  return (
    <div className="size-full py-7">
      <div className="bg-gray-5 rounded-md flex flex-col px-16 py-9 shadow-sm">
        <MultiTitle title="계정 로그인을 해주세요" subTitle="아이디 및 비밀번호를 입력해주세요" />
        <Input placeholder="아이디를 입력해주세요" title="아이디" className="mb-4" />
        <Input placeholder="비밀번호를 입력해주세요" title="비밀번호" />
        <div className="flex justify-center items-center my-14">
          <Typography>아직 회원아니신가요?</Typography>
          <Link href={`${ROUTES.SIGN_UP}?step=${SIGN_UP_ROUTES.SELECT}`}>
            <Typography color="blue30" className="ml-2 hover:text-blue-40">
              회원가입
            </Typography>
          </Link>
        </div>
        <Button onClick={() => {}}>로그인</Button>
      </div>
    </div>
  );
};
export default LoginForm;
