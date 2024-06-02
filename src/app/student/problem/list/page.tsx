import mathApi from '@/apis/math';
import PrefetchHydration from '@/components/ReactQuery/PrefetchHydration';
import { MATH_KEYS } from '@/constants';
import MathListPage from '@/features/mathList/components/Page';

const StudentProblemListPage = () => {
  return (
    <PrefetchHydration queryKey={MATH_KEYS.lists()} queryFn={mathApi.get}>
      <MathListPage />
    </PrefetchHydration>
  );
};
export default StudentProblemListPage;
