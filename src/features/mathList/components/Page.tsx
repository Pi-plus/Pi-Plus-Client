import { EmptyPage } from '@/components/Pages';
import { useNavigate } from '@/hooks';

import MathTable from './MathTable';

const MathListPage = () => {
  const { query } = useNavigate();
  return (
    <>
      {query.math === 'middle1-1' ? (
        <div className="w-full flex flex-col">
          <MathTable />
        </div>
      ) : (
        <EmptyPage title="아직 해당 개념의 문제가 준비되지 않았어요" />
      )}
    </>
  );
};
export default MathListPage;
