'use client';

import Lottie from 'react-lottie-player';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { defaultImages } from '@public/images';
import { defaultLottie } from '@public/lotties';

import Button from '@/components/Button';
import Typography from '@/components/Typography';
import { ROUTES } from '@/constants';
import { LandingLayout, LandingSection } from '@/features/landing/components';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const HomePage = () => {
  const { push } = useRouter();

  return (
    <main className="flex-col items-center justify-between flex gap-24">
      <Carousel className="mt-10 w-[80%]" autoPlay showThumbs={false} showStatus={false}>
        <Image src={defaultImages.banner1} className="w-full" width={1920} height={30} alt="" />
        <Image src={defaultImages.banner2} className="w-full" width={1920} height={30} alt="" />
        <Image src={defaultImages.banner3} className="w-full" width={1920} height={30} alt="" />
      </Carousel>
      <LandingLayout>
        <Image src={defaultImages.onboarding2} width={480} height={480} alt="" />
        <div className="flex flex-col justify-between pb-8">
          <LandingSection
            summary="정확한 복습"
            title="파이플러스로 수학 복습을"
            option="마이 페이지에서 확인해보세요 😊"
          >
            <Typography label="heading1">
              여러 수학 문제를 풀면
              <br />
              오답 문제 및 성취도를 확인할 수 있어요
            </Typography>
          </LandingSection>
          <Button
            onClick={() => {
              push(ROUTES.LOGIN);
            }}
          >
            파이플러스 시작하기
          </Button>
        </div>
      </LandingLayout>

      <LandingLayout className="items-center bg-blue-40">
        <LandingSection
          summary="더 많은 문제를"
          title="파이플러스로 다양한 문제를"
          option="헤더 문제 풀기 탭을 클릭해 문제를 풀어보세요 😊"
          theme="dark"
        >
          <Typography label="heading1" color="white">
            단원에 맞는 다양한 문제를 제공하는
            <br />
            파이플러스의 문제 은행
          </Typography>
        </LandingSection>
        <Image src={defaultImages.onboarding1} width={480} height={480} alt="" />
      </LandingLayout>

      <LandingLayout className="py-50 items-center flex-col mt-20">
        <Typography label="heading3" color="black" className="text-center mb-14">
          파이플러스는 오직 학생들만의
          <br />웹 서비스가 아닙니다
        </Typography>
        <Image src={defaultImages.onboarding3} width={550} height={550} alt="" />
      </LandingLayout>

      <LandingLayout>
        <Lottie loop animationData={defaultLottie.teacher} play />
        <div className="flex flex-col justify-between pb-8">
          <LandingSection
            summary="학생과의 소통, 정확한 매칭"
            title="선생님을 위한 파이플러스"
            option="헤더 학생 관리 탭을 이용해보세요 😊"
          >
            <Typography label="heading1">
              선생님과 학생간의
              <br />
              소통 창구, 웹서비스
            </Typography>
          </LandingSection>

          <Button
            onClick={() => {
              push(ROUTES.TEACHER_MATCHING);
            }}
          >
            학생 매칭하러 가기
          </Button>
        </div>
      </LandingLayout>
    </main>
  );
};
export default HomePage;
