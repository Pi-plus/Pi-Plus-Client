import Link from 'next/link';

import type { TProblemContent } from '@/apis/student/types';
import MathTitle from '@/components/MathTitle';
import Typography from '@/components/Typography';
import { ROUTES } from '@/constants';

import MyPageBanner from '../Banner';

interface IProblemSettingProps {
  solveList: TProblemContent[];
  wrongList: TProblemContent[];
}
const ProblemSettingSection = ({ solveList, wrongList }: IProblemSettingProps) => {
  const wrongCount = wrongList?.length ?? 0;
  const solveCount = solveList?.length ?? 0;
  const totalCount = solveCount + wrongCount;

  return (
    <>
      <MyPageBanner
        title="틀린 문제도 다시 한 번 복습해보세요"
        subTitle="틀린 문제 번호를 클릭하면 해당 문제 페이지로 이동합니다!"
      />

      <Typography label="heading1" className="mt-12 mb-4" as="h2">
        문제 관리 리스트
      </Typography>

      <div className="bg-gray-10 rounded-[20px] flex py-4">
        <div className="w-1/2 flex flex-col items-center justify-center border-r border-gray-20 py-5">
          <Typography label="body1">{totalCount}</Typography>
          <Typography label="body1">총 푼 문제 수</Typography>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center py-5">
          <Typography label="body1">{wrongCount}</Typography>
          <Typography label="body1">틀린 문제 수</Typography>
        </div>
      </div>
      <MathTitle type="secondary" title="맞은 문제" className="mt-12" />
      <div className="flex items-center gap-9 border border-gray-10 rounded-b-xl py-16 px-12 flex-wrap">
        {solveCount > 0 ? (
          solveList.map((item) => (
            <Link key={item.id} href={`${ROUTES.STUDENT_LIST}/${item.id}`}>
              <Typography label="title3" key={item.id} className="cursor-pointer hover:font-semibold">
                {`${item.id}번`}
              </Typography>
            </Link>
          ))
        ) : (
          <div className="flex w-full gap-9 items-center">
            <Typography label="title3">아직 문제가 없습니다</Typography>
          </div>
        )}
      </div>

      <MathTitle type="secondary" title="틀린 문제" className="mt-12" />
      <div className="flex items-center gap-9 border border-gray-10 rounded-b-xl py-16 px-12 flex-wrap">
        {wrongCount > 0 ? (
          wrongList.map((item) => (
            <Link key={item.id} href={`${ROUTES.STUDENT_LIST}/${item.id}`}>
              <Typography label="title3" key={item.id} color="red" className="cursor-pointer hover:font-semibold">
                {`${item.id} 번`}
              </Typography>
            </Link>
          ))
        ) : (
          <div className="flex w-full gap-9 items-center">
            <Typography label="title3">아직 문제가 없습니다</Typography>
          </div>
        )}
      </div>
    </>
  );
};
export default ProblemSettingSection;
