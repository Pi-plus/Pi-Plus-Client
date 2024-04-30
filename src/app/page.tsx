'use client';

import Lottie from 'react-lottie-player';
import Image from 'next/image';
import { defaultImages } from '@public/images';
import { defaultLottie } from '@public/lotties';

import Button from '@/components/Button';
import Typography from '@/components/Typography';
import { OnBoardingSection } from '@/features/onboarding/components';

const HomePage = () => {
  return (
    <main className="flex-col items-center justify-between flex gap-24">
      <Image src={defaultImages.banner1} className="mt-10 w-[80%]" width={1920} height={30} alt="" />

      <div className="flex w-full gap-28 justify-center py-36">
        <Image src={defaultImages.onboarding2} width={480} height={480} alt="" />
        <div className="flex flex-col justify-between pb-8">
          <div className="flex flex-col">
            <Typography label="heading1" color="blue40" className="mb-4">
              정확한 복습
            </Typography>

            <Typography label="heading3" className="mb-4">
              파이플러스로 수학 복습을
            </Typography>

            <Typography label="heading1">
              여러 수학 문제를 풀면
              <br />
              오답 문제 및 성취도를 확인할 수 있어요
            </Typography>
            <Typography label="heading2" color="gray70" className="mt-5">
              마이 페이지에서 확인해보세요 😊
            </Typography>
          </div>
          <Button onClick={() => {}}>파이플러스 시작하기</Button>
        </div>
      </div>

      <div className="flex w-full gap-28 justify-center items-center bg-blue-40 py-36">
        <div className="flex flex-col">
          <Typography label="heading1" color="gray5" className="mb-4">
            더 많은 문제를
          </Typography>

          <Typography label="heading3" className="mb-4" color="white">
            파이플러스로 다양한 문제를
          </Typography>

          <Typography label="heading1" color="white">
            단원에 맞는 다양한 문제를 제공하는
            <br />
            파이플러스의 문제 은행
          </Typography>
          <Typography label="heading2" color="white" className="mt-5">
            헤더 문제 풀기 탭을 클릭해 문제를 풀어보세요 😊
          </Typography>
        </div>
        <Image src={defaultImages.onboarding1} width={480} height={480} alt="" />
      </div>

      <div className="pt-64 w-full flex flex-col justify-center items-center pb-60">
        <Typography label="heading3" color="black" className="text-center mb-14">
          파이플러스는 오직 학생들만의
          <br />웹 서비스가 아닙니다
        </Typography>
        <Image src={defaultImages.onboarding3} width={550} height={550} alt="" />
      </div>

      <div className="flex w-full gap-28 justify-center pb-36">
        <Lottie loop animationData={defaultLottie.teacher} play />
        <div className="flex flex-col justify-between pb-8">
          {/*<div className="flex flex-col">
            <Typography label="heading1" color="blue40" className="mb-4">
              학생과의 소통, 정확한 매칭
            </Typography>

            <Typography label="heading3" className="mb-4">
              선생님을 위한 파이플러스
            </Typography>

            <Typography label="heading1">
              선생님과 학생간의
              <br />
              소통 창구, 웹서비스
            </Typography>
            <Typography label="heading2" color="gray70" className="mt-5">
              헤더 학생 관리 탭을 이용해보세요 😊
            </Typography>
          </div>*/}
          <OnBoardingSection
            label="학생과의 소통, 정확한 매칭"
            title="선생님을 위한 파이플러스"
            option="헤더 학생 관리 탭을 이용해보세요 😊"
          >
            <Typography label="heading1">
              선생님과 학생간의
              <br />
              소통 창구, 웹서비스
            </Typography>
          </OnBoardingSection>

          <Button onClick={() => {}}>학생 매칭하러 가기</Button>
        </div>
      </div>
    </main>
  );
};
export default HomePage;
