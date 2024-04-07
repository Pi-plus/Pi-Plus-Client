import Image from 'next/image';
import { defaultImages } from '@public/images';

import Typography from '@/components/Typography';

const HomePage = () => {
  return (
    <main className="flex-col items-center justify-between flex">
      <Image src={defaultImages.banner1} className="mt-4 w-[80%]" width={1920} height={30} alt="" />

      <div className="flex flex-col justify-center items-center w-full mt-32 px-64">
        <div className="flex flex-col border-b border-gray-50 w-full justify-center items-center">
          <Typography label="title3" className="mb-5">
            NumbeRings
          </Typography>
          <Typography label="title3" className="mb-5">
            수학적 사고의 연결 고리
          </Typography>
        </div>
        <Typography label="title3" className="mt-5">
          수학 문제를 풀고 온라인으로 채점 받을 수 있는 곳입니다.
        </Typography>
      </div>
    </main>
  );
};
export default HomePage;
