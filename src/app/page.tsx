'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { defaultImages } from '@public/images';

import LazyLottie from '@/components/LazyLottie';
import Typography from '@/components/Typography';
import { LOGIN_ROUTES, ROUTES, SCREENS } from '@/constants';
import { LandingLayout, LandingSection } from '@/features/landing/components';
import { useMediaQuery } from '@/hooks';

const HomePage = () => {
  const { push } = useRouter();
  const isTabletMobile = useMediaQuery(`(max-width: ${SCREENS.TABLET}`);

  return (
    <main className="flex-col items-center justify-between flex">
      <LandingLayout>
        <Image
          src={defaultImages.onboarding2}
          className="max-lg:w-1/3 sm:max-md:w-[400px] max-sm:w-[200px] max-sm:mt-7"
          width={480}
          height={480}
          alt=""
        />
        <LandingSection
          summary="정확한 복습"
          title="파이플러스로 수학 복습을"
          description={
            <>
              여러 수학 문제를 풀면 <br /> 오답 문제 및 성취도를 확인할 수 있어요
            </>
          }
          option="마이 페이지에서 확인해보세요 😊"
          text="파이플러스 시작하기"
          onClick={() => {
            push(`${ROUTES.LOGIN}?step=${LOGIN_ROUTES.SELECT}`);
          }}
        />
      </LandingLayout>

      <LandingLayout className="items-center bg-blue-40">
        {isTabletMobile ? (
          <>
            <Image
              className="max-lg:w-1/3 sm:max-md:w-[400px] max-sm:w-[200px] max-sm:mt-7"
              src={defaultImages.onboarding1}
              width={480}
              height={480}
              alt=""
            />
            <LandingSection
              summary="더 많은 문제를"
              title="파이플러스로 다양한 문제를"
              description={
                <>
                  단원에 맞는 다양한 문제를 제공하는
                  <br /> 파이플러스의 문제 은행
                </>
              }
              option="헤더 문제 풀기 탭을 클릭해 문제를 풀어보세요 😊"
              theme="dark"
            />
          </>
        ) : (
          <>
            <LandingSection
              summary="더 많은 문제를"
              title="파이플러스로 다양한 문제를"
              description={
                <>
                  단원에 맞는 다양한 문제를 제공하는
                  <br /> 파이플러스의 문제 은행
                </>
              }
              option="헤더 문제 풀기 탭을 클릭해 문제를 풀어보세요 😊"
              theme="dark"
            />
            <Image
              className="max-lg:w-1/3 sm:max-md:w-[400px] max-sm:w-[200px] max-sm:mt-7"
              src={defaultImages.onboarding1}
              width={480}
              height={480}
              alt=""
            />
          </>
        )}
      </LandingLayout>

      <LandingLayout className="py-50 items-center flex-col mt-20">
        <Typography label="heading3" color="black" className="text-center mb-14">
          파이플러스는 오직 학생들만의
          <br />웹 서비스가 아닙니다
        </Typography>
        <Image
          className="max-sm:w-[250px] sm:max-md:w-1/2"
          src={defaultImages.onboarding3}
          width={550}
          height={550}
          alt=""
        />
      </LandingLayout>

      <LandingLayout>
        <LazyLottie imgkey="teacher" className="max-lg:w-1/3 sm:max-md:w-[400px] max-sm:w-[300px] max-sm:mt-7" />
        <LandingSection
          summary="학생과의 소통, 정확한 매칭"
          title="선생님을 위한 파이플러스"
          option="헤더 학생 관리 탭을 이용해보세요 😊"
          description={
            <>
              선생님과 학생 간의 <br /> 소통 창구, 웹서비스
            </>
          }
          text="학생 매칭하러 가기"
          onClick={() => {
            push(ROUTES.TEACHER_MATCHING);
          }}
        />
      </LandingLayout>
    </main>
  );
};
export default HomePage;
