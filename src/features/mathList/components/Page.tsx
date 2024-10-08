'use client';

import { EmptyPage } from '@/components/Pages';
import { useNavigate } from '@/hooks';

import MathTable from './MathTable';

const MathListPage = () => {
  const { query } = useNavigate();

  return (
    <>
      {query.math === 'middle1-1' ? (
        <div className="w-full flex flex-col justify-center mt-9 px-60 md:max-lg:px-36 sm:max-md:px-10 max-sm:px-5 min-w-[480px]">
          <MathTable />
        </div>
      ) : (
        <EmptyPage title="아직 해당 개념의 문제가 준비되지 않았어요" />
      )}
    </>
  );
};
export default MathListPage;
